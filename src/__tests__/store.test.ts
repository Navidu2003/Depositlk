import { describe, it, expect } from "vitest";
import { addSubmission, updateSubmissionStatus, rateSubmissions } from "../lib/rateStore";

describe("Rate Store Operations", () => {
  it("adds a new submission with pending status", () => {
    const item = addSubmission({
      bankSlug: "sampath-bank",
      accountType: "FD",
      proposedRate: 12.0,
      userEmail: "test@example.com",
    });

    expect(item.id).toBeDefined();
    expect(item.status).toBe("pending_review");
    expect(rateSubmissions[0].id).toBe(item.id);
  });

  it("updates submission status correctly", () => {
    const item = addSubmission({
      bankSlug: "dfcc",
      accountType: "Savings",
      proposedRate: 4.5,
    });

    const updated = updateSubmissionStatus(item.id, "approved");
    expect(updated).toBe(true);

    const found = rateSubmissions.find((s) => s.id === item.id);
    expect(found?.status).toBe("approved");
  });
});