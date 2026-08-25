import { describe, it, expect } from "vitest";

function calculateFDMaturity(principal: number, annualRate: number, tenureYears: number): number {
  return principal * Math.pow(1 + annualRate / 100, tenureYears);
}

function calculateRDMaturity(monthlyDeposit: number, annualRate: number, tenureMonths: number): number {
  const monthlyRate = annualRate / 12 / 100;
  return monthlyDeposit * ((Math.pow(1 + monthlyRate, tenureMonths) - 1) / monthlyRate) * (1 + monthlyRate);
}

describe("Deposit Calculation Logic", () => {
  it("calculates 1-year Fixed Deposit returns accurately", () => {
    const principal = 100000;
    const rate = 12; // 12% p.a.
    const tenure = 1;
    const maturity = calculateFDMaturity(principal, rate, tenure);
    expect(maturity).toBeCloseTo(112000, 2);
  });

  it("calculates 12-month Recurring Deposit returns accurately", () => {
    const monthlyDeposit = 10000;
    const rate = 12; // 12% p.a.
    const months = 12;
    const maturity = calculateRDMaturity(monthlyDeposit, rate, months);
    expect(maturity).toBeGreaterThan(120000);
    expect(maturity).toBeCloseTo(128093.28, 0);
  });
});