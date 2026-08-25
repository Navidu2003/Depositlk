import { describe, it, expect } from "vitest";
import { POST } from "../app/api/suggest-rate/route";

describe("Rate Suggestion API Handler", () => {
  it("rejects submissions with missing fields", async () => {
    const req = new Request("http://localhost:3000/api/suggest-rate", {
      method: "POST",
      body: JSON.stringify({ bankSlug: "boc" }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toContain("Missing required fields");
  });

  it("rejects unrealistically high interest rates", async () => {
    const req = new Request("http://localhost:3000/api/suggest-rate", {
      method: "POST",
      body: JSON.stringify({
        bankSlug: "boc",
        accountType: "FD",
        proposedRate: 75.5,
      }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(response.status).toBe(422);
    expect(data.error).toContain("Invalid rate value");
  });

  it("rejects zero interest rates as invalid values", async () => {
    const req = new Request("http://localhost:3000/api/suggest-rate", {
      method: "POST",
      body: JSON.stringify({
        bankSlug: "boc",
        accountType: "FD",
        proposedRate: 0,
      }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(response.status).toBe(422);
    expect(data.error).toContain("Invalid rate value");
  });

  it("successfully accepts valid rate submissions", async () => {
    const req = new Request("http://localhost:3000/api/suggest-rate", {
      method: "POST",
      body: JSON.stringify({
        bankSlug: "commercial-bank",
        accountType: "FD",
        proposedRate: 11.25,
        sourceUrl: "https://www.combank.lk/rates",
      }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.success).toBe(true);
    expect(data.data.bankSlug).toBe("commercial-bank");
  });
});