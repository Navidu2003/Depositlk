"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function CalculatorPage() {
  const [deposit, setDeposit] = useState<number>(100000);
  const [tenureYears, setTenureYears] = useState<number>(1);
  const [rate, setRate] = useState<number>(11.5);
  const [accountType, setAccountType] = useState<string>("FD");

  const isOutOfRange = deposit < 1000 || rate <= 0 || rate > 30;
  const interestEarned = isOutOfRange ? 0 : deposit * (rate / 100) * tenureYears;
  const totalMaturity = deposit + interestEarned;

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-10">
      <h1 className="text-3xl font-bold text-[#1F4E5F] mb-8">Deposit growth calculator</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Form */}
        <div className="bg-[#F4F3EE] border border-[#DADAD3] rounded-lg p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#1F4E5F] mb-2">
              Initial deposit amount (LKR)
            </label>
            <input
              type="number"
              value={deposit}
              onChange={(e) => setDeposit(Number(e.target.value))}
              className="w-full px-4 py-2.5 bg-white border border-[#DADAD3] rounded-lg text-sm text-[#1F4E5F] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2E7D6B]"
            />
            {deposit < 1000 && (
              <p className="text-xs text-[#D85A30] mt-1">Minimum deposit amount is LKR 1,000.</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1F4E5F] mb-2">Tenure</label>
            <select
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full px-4 py-2.5 bg-white border border-[#DADAD3] rounded-lg text-sm text-[#1F4E5F] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2E7D6B]"
            >
              <option value={0.25}>3 Months</option>
              <option value={0.5}>6 Months</option>
              <option value={1}>1 Year</option>
              <option value={2}>2 Years</option>
              <option value={5}>5 Years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1F4E5F] mb-2">Account type</label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-[#DADAD3] rounded-lg text-sm text-[#1F4E5F] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2E7D6B]"
            >
              <option value="FD">Fixed Deposit (FD)</option>
              <option value="RD">Recurring Deposit (RD)</option>
              <option value="Savings">Savings Account</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1F4E5F] mb-2">
              Illustrative interest rate (%)
            </label>
            <input
              type="number"
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full px-4 py-2.5 bg-white border border-[#DADAD3] rounded-lg text-sm text-[#1F4E5F] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2E7D6B]"
            />
          </div>
        </div>

        {/* Right Output Area with SVG Staircase Chart */}
        <div className="space-y-6">
          <div className="bg-[#EAF1EE] border border-[#DADAD3] rounded-lg p-6 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D6B] mb-1 block">
              Projected Total at Maturity
            </span>
            <h2 className="text-3xl font-bold text-[#1F4E5F] mb-6">
              Rs. {Math.round(totalMaturity).toLocaleString()}
            </h2>

            {/* Growth Staircase SVG */}
            <div className="h-32 w-full flex items-end justify-center gap-4 bg-white/60 rounded-lg p-4 mb-4">
              <div className="w-12 bg-[#1F4E5F] rounded-t-xs h-1/4"></div>
              <div className="w-12 bg-[#2E7D6B] rounded-t-xs h-2/4"></div>
              <div className="w-12 bg-[#C9A227] rounded-t-xs h-3/4"></div>
              <div className="w-12 bg-[#C9A227] rounded-t-xs h-full"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-left border-t border-[#DADAD3] pt-4 text-xs">
              <div>
                <span className="text-[#4A4A47] block">Principal:</span>
                <strong className="text-[#1F4E5F] text-sm">Rs. {deposit.toLocaleString()}</strong>
              </div>
              <div>
                <span className="text-[#4A4A47] block">Earned Interest:</span>
                <strong className="text-[#2E7D6B] text-sm">+Rs. {Math.round(interestEarned).toLocaleString()}</strong>
              </div>
            </div>
          </div>

          {/* Warm Cream Disclaimer Callout */}
          <div className="bg-[#FBF3E3] border border-[#C9A227] rounded-lg p-5 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#1F4E5F] shrink-0 mt-0.5" />
            <div className="text-xs text-[#4A4A47] leading-relaxed">
              Figures are illustrative only. Actual rates vary by bank.{" "}
              <Link href="/browse" className="text-[#2E7D6B] font-bold hover:underline">
                Browse all banks
              </Link>{" "}
              for current figures.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}