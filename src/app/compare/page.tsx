"use client";

import { useState } from "react";
import Link from "next/link";
import { SAMPLE_BANKS } from "@/data/banks";
import { ChevronRight } from "lucide-react";

export default function ComparePage() {
  const [selectedBankIds, setSelectedBankIds] = useState<string[]>(["1", "2", "4"]);

  const selectedBanks = SAMPLE_BANKS.filter((b) => selectedBankIds.includes(b.id)).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-10">
      <nav className="flex items-center gap-2 text-sm text-[#4A4A47] mb-6">
        <Link href="/" className="hover:text-[#1F4E5F]">Home</Link>
        <ChevronRight className="w-4 h-4 text-[#DADAD3]" />
        <Link href="/browse" className="hover:text-[#1F4E5F]">Browse banks</Link>
        <ChevronRight className="w-4 h-4 text-[#DADAD3]" />
        <span className="text-[#1F4E5F] font-semibold">Compare</span>
      </nav>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1F4E5F] mb-1">Compare up to 3 banks</h1>
          <p className="text-sm text-[#4A4A47]">Selected: {selectedBanks.length} / 3</p>
        </div>
      </div>

      <div className="overflow-x-auto border border-[#DADAD3] rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1F4E5F] text-white text-xs uppercase font-bold">
              <th className="py-4 px-6 w-1/4">Bank Name</th>
              {selectedBanks.map((b) => (
                <th key={b.id} className="py-4 px-6 font-bold">{b.name}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DADAD3] text-sm">
            <tr className="bg-white">
              <td className="py-4 px-6 font-semibold text-[#1F4E5F]">Account Types</td>
              {selectedBanks.map((b) => (
                <td key={b.id} className="py-4 px-6">{b.accountTypes.join(", ")}</td>
              ))}
            </tr>
            <tr className="bg-[#F4F3EE]">
              <td className="py-4 px-6 font-semibold text-[#1F4E5F]">Indicative Rate (1-Yr FD)</td>
              {selectedBanks.map((b) => {
                const fdRate = b.rates.find((r) => r.accountType === "FD");
                return (
                  <td key={b.id} className="py-4 px-6 font-bold text-[#2E7D6B]">
                    {fdRate ? `${fdRate.interestRate.toFixed(2)}%` : "N/A"}
                  </td>
                );
              })}
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-6 font-semibold text-[#1F4E5F]">Early Withdrawal Penalty</td>
              {selectedBanks.map((b) => (
                <td key={b.id} className="py-4 px-6 text-xs text-[#4A4A47]">{b.earlyWithdrawalPenalty}</td>
              ))}
            </tr>
            <tr className="bg-[#F4F3EE]">
              <td className="py-4 px-6 font-semibold text-[#1F4E5F]">Required Documents</td>
              {selectedBanks.map((b) => (
                <td key={b.id} className="py-4 px-6">{b.documents.length} items required</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-[#F4F3EE] rounded-lg text-xs text-[#4A4A47]">
        Rates shown are indicative. Visit each bank&apos;s website for current figures.
      </div>
    </div>
  );
}