import { describe, it, expect } from "vitest";

// Quiz recommendation logic based on liquidity & monthly deposit patterns
function evaluateQuizRecommendation(answers: {
  liquidity: "high" | "low";
  depositType: "lumpSum" | "monthly";
  horizonMonths: number;
}): "FD" | "RD" | "Savings" {
  if (answers.liquidity === "high" || answers.horizonMonths < 3) {
    return "Savings";
  }
  if (answers.depositType === "monthly") {
    return "RD";
  }
  return "FD";
}

describe("Quiz Recommendation Scoring", () => {
  it("recommends Savings for high liquidity demands", () => {
    const result = evaluateQuizRecommendation({
      liquidity: "high",
      depositType: "lumpSum",
      horizonMonths: 12,
    });
    expect(result).toBe("Savings");
  });

  it("recommends Recurring Deposit (RD) for monthly commitments", () => {
    const result = evaluateQuizRecommendation({
      liquidity: "low",
      depositType: "monthly",
      horizonMonths: 24,
    });
    expect(result).toBe("RD");
  });

  it("recommends Fixed Deposit (FD) for low liquidity lump sums", () => {
    const result = evaluateQuizRecommendation({
      liquidity: "low",
      depositType: "lumpSum",
      horizonMonths: 12,
    });
    expect(result).toBe("FD");
  });
});