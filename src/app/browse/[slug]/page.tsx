"use client";

import { use, useState } from "react";
import Link from "next/link";
import { SAMPLE_BANKS } from "@/data/banks";
import { notFound } from "next/navigation";
import { ExternalLink, CheckSquare, AlertTriangle, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BankDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const bank = SAMPLE_BANKS.find((b) => b.slug === slug);

  const [activeTab, setActiveTab] = useState<"overview" | "rates" | "documents">("rates");

  if (!bank) {
    notFound();
  }

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-10">
      {/* Breadcrumb Nav */}
      <nav className="flex items-center gap-2 text-sm text-[#4A4A47] mb-6">
        <Link href="/" className="hover:text-[#1F4E5F]">Home</Link>
        <ChevronRight className="w-4 h-4 text-[#DADAD3]" />
        <Link href="/browse" className="hover:text-[#1F4E5F]">Browse banks</Link>
        <ChevronRight className="w-4 h-4 text-[#DADAD3]" />
        <span className="text-[#1F4E5F] font-semibold">{bank.name}</span>
      </nav>

      {/* Bank Header Card */}
      <div className="bg-[#F4F3EE] border border-[#DADAD3] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-[#DCEAE4] flex items-center justify-center text-[#1F4E5F] font-bold text-xl">
            {bank.initials}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1F4E5F] mb-2">{bank.name}</h1>
            <div className="flex flex-wrap gap-2">
              {bank.accountTypes.map((type) => (
                <span key={type} className="px-2.5 py-0.5 bg-[#DCEAE4] text-[#2E7D6B] text-xs font-semibold rounded-full">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        <a
          href={bank.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#DCEAE4] text-[#1F4E5F] font-semibold text-sm rounded-lg hover:bg-[#d0e2db] transition-colors"
        >
          Visit bank website <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* 3-Tab Bar */}
      <div className="flex border-b border-[#DADAD3] mb-6">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 ${
            activeTab === "overview"
              ? "border-[#2E7D6B] text-[#1F4E5F] bg-white"
              : "border-transparent text-[#4A4A47] bg-[#F4F3EE]/50"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("rates")}
          className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 ${
            activeTab === "rates"
              ? "border-[#2E7D6B] text-[#1F4E5F] bg-white"
              : "border-transparent text-[#4A4A47] bg-[#F4F3EE]/50"
          }`}
        >
          Interest rates
        </button>
        <button
          onClick={() => setActiveTab("documents")}
          className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 ${
            activeTab === "documents"
              ? "border-[#2E7D6B] text-[#1F4E5F] bg-white"
              : "border-transparent text-[#4A4A47] bg-[#F4F3EE]/50"
          }`}
        >
          Rules & documents
        </button>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === "overview" && (
        <div className="bg-[#F4F3EE] border border-[#DADAD3] rounded-lg p-6 text-sm text-[#4A4A47] leading-relaxed space-y-4">
          <p>
            <strong className="text-[#1F4E5F]">{bank.name}</strong> is a licensed commercial bank regulated by the Central Bank of Sri Lanka (CBSL).
          </p>
          <p>
            All deposit products are subject to statutory reserve ratios and public interest rate schedules. DepositLK provides non-promotional comparative listings strictly ordered alphabetically.
          </p>
        </div>
      )}

      {/* Tab 2: Interest Rates (Striped Data Table) */}
      {activeTab === "rates" && (
        <div className="overflow-x-auto border border-[#DADAD3] rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1F4E5F] text-white text-xs uppercase font-bold tracking-wider">
                <th className="py-3.5 px-5">Account Type</th>
                <th className="py-3.5 px-5">Tenure</th>
                <th className="py-3.5 px-5">Interest Rate (% p.a.)</th>
                <th className="py-3.5 px-5">Min. Deposit (LKR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADAD3] text-sm">
              {bank.rates.map((rate, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F4F3EE]"}>
                  <td className="py-3.5 px-5 font-semibold text-[#1F4E5F]">{rate.accountType}</td>
                  <td className="py-3.5 px-5 text-[#4A4A47]">{rate.tenure}</td>
                  <td className="py-3.5 px-5 font-bold text-[#2E7D6B]">{rate.interestRate.toFixed(2)}%</td>
                  <td className="py-3.5 px-5 text-[#4A4A47]">Rs. {rate.minDeposit.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 3: Rules & Documents */}
      {activeTab === "documents" && (
        <div className="space-y-6">
          {/* Penalty Callout Box */}
          <div className="bg-[#FBF3E3] border border-[#C9A227] rounded-lg p-5 flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-[#1F4E5F] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-[#1F4E5F] text-sm mb-1">Early Withdrawal Penalty</h3>
              <p className="text-sm text-[#4A4A47]">{bank.earlyWithdrawalPenalty}</p>
            </div>
          </div>

          {/* Checklist */}
          <div className="bg-[#F4F3EE] border border-[#DADAD3] rounded-lg p-6">
            <h3 className="font-bold text-[#1F4E5F] text-base mb-4">Required Documents Checklist</h3>
            <ul className="space-y-3">
              {bank.documents.map((doc, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-[#4A4A47]">
                  <CheckSquare className="w-4 h-4 text-[#2E7D6B] shrink-0" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}