"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SAMPLE_BANKS } from "@/data/banks";
import SuggestRateModal from "@/components/SuggestRateModal";
import { 
  ChevronRight, 
  ExternalLink, 
  Building2, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Info,
  Calendar
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BankDetailPage({ params }: PageProps) {
  // Unwrap the dynamic route params
  const { slug } = use(params);
  const bank = SAMPLE_BANKS.find((b) => b.slug === slug);

  const [activeTab, setActiveTab] = useState<"overview" | "rates" | "rules">("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Trigger custom 404 screen if the bank slug does not exist
  if (!bank) {
    notFound();
  }

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-10">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-[#4A4A47] mb-6">
        <Link href="/" className="hover:text-[#1F4E5F]">Home</Link>
        <ChevronRight className="w-4 h-4 text-[#DADAD3]" />
        <Link href="/browse" className="hover:text-[#1F4E5F]">Directory</Link>
        <ChevronRight className="w-4 h-4 text-[#DADAD3]" />
        <span className="text-[#1F4E5F] font-semibold">{bank.name}</span>
      </nav>

      {/* Institution Hero Card */}
      <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-xl p-6 md:p-8 mb-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-[#EAF1EE] border border-[#DADAD3] flex items-center justify-center shrink-0 text-[#1F4E5F]">
              <Building2 className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-2xl md:text-3xl font-bold text-[#1F4E5F] tracking-tight">
                  {bank.name}
                </h1>
                <span className="px-2.5 py-0.5 bg-[#EAF1EE] text-[#2E7D6B] text-xs font-bold rounded-full border border-[#2E7D6B]/20">
                  CBSL Licensed
                </span>
              </div>
              <p className="text-sm text-[#4A4A47] mt-1.5 max-w-2xl leading-relaxed">
                {bank.name} offers independently listed deposit products with published terms for comparison.
              </p>
            </div>
          </div>

          {/* Action Buttons: Official Site & Suggest Rate Modal */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#EAF1EE] border border-[#DADAD3] text-[#1F4E5F] text-xs font-semibold rounded-lg hover:bg-[#dceae4] transition-colors"
            >
              Suggest Rate Update
            </button>
            <a
              href={bank.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1F4E5F] text-white text-xs font-semibold rounded-lg hover:bg-[#163845] transition-colors shadow-xs"
            >
              Official Portal <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-6 border-b border-[#DADAD3] mt-8 text-sm font-semibold">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "overview"
                ? "border-[#2E7D6B] text-[#1F4E5F]"
                : "border-transparent text-[#4A4A47] hover:text-[#1F4E5F]"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("rates")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "rates"
                ? "border-[#2E7D6B] text-[#1F4E5F]"
                : "border-transparent text-[#4A4A47] hover:text-[#1F4E5F]"
            }`}
          >
            Interest Rate Schedule
          </button>
          <button
            onClick={() => setActiveTab("rules")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "rules"
                ? "border-[#2E7D6B] text-[#1F4E5F]"
                : "border-transparent text-[#4A4A47] hover:text-[#1F4E5F]"
            }`}
          >
            Rules & Documents
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-lg p-5">
              <span className="text-xs font-semibold text-[#4A4A47] uppercase tracking-wider block mb-1">
                Available Products
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {bank.accountTypes.map((type) => (
                  <span key={type} className="px-2.5 py-1 bg-[#DCEAE4] text-[#2E7D6B] text-xs font-bold rounded-md">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-lg p-5">
              <span className="text-xs font-semibold text-[#4A4A47] uppercase tracking-wider block mb-1">
                Verification Status
              </span>
              <div className="flex items-center gap-2 mt-2 text-sm font-bold text-[#2E7D6B]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Independently Verified</span>
              </div>
            </div>

            <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-lg p-5">
              <span className="text-xs font-semibold text-[#4A4A47] uppercase tracking-wider block mb-1">
                Rate Sheet Update
              </span>
              <div className="flex items-center gap-2 mt-2 text-sm font-medium text-[#4A4A47]">
                <Calendar className="w-4 h-4 text-[#2E7D6B] shrink-0" />
                <span>Current Standard Schedule</span>
              </div>
            </div>
          </div>

          <div className="bg-[#EAF1EE] border border-[#2E7D6B]/20 rounded-lg p-5 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#2E7D6B] shrink-0 mt-0.5" />
            <p className="text-xs text-[#1F4E5F] leading-relaxed">
              DepositLK presents factual interest terms published directly in licensed bank circulars. We do not provide financial advice, broker services, or receive placement commissions.
            </p>
          </div>
        </div>
      )}

      {activeTab === "rates" && (
        <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-lg overflow-hidden shadow-xs">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-[#EAF1EE] border-b border-[#DADAD3] text-[#1F4E5F]">
              <tr>
                <th className="p-4 font-bold">Account Category</th>
                <th className="p-4 font-bold">Tenure / Term</th>
                <th className="p-4 font-bold">Annual Rate (% p.a.)</th>
                <th className="p-4 font-bold">Interest Payout Frequency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADAD3]">
              {bank.rates.map((rate, idx) => (
                <tr key={idx} className="hover:bg-[#EAF1EE]/30 transition-colors">
                  <td className="p-4 font-semibold text-[#1F4E5F]">
                    <span className="px-2 py-0.5 bg-[#DCEAE4] text-[#2E7D6B] text-xs rounded-md">
                      {rate.accountType}
                    </span>
                  </td>
                  <td className="p-4 text-[#4A4A47] font-medium">{rate.tenure}</td>
                  <td className="p-4 font-bold text-[#2E7D6B]">{rate.interestRate.toFixed(2)}%</td>
                  <td className="p-4 text-[#4A4A47]">As per bank schedule</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "rules" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Penalty Callout */}
          <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-lg p-6">
            <div className="flex items-center gap-2 text-[#D85A30] font-bold text-sm mb-3">
              <AlertTriangle className="w-5 h-5" />
              Early Withdrawal Penalty Rules
            </div>
            <p className="text-xs text-[#4A4A47] leading-relaxed">
              {bank.earlyWithdrawalPenalty}
            </p>
          </div>

          {/* Required Documents */}
          <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-lg p-6">
            <div className="flex items-center gap-2 text-[#1F4E5F] font-bold text-sm mb-3">
              <FileText className="w-5 h-5 text-[#2E7D6B]" />
              Mandatory Documentation Checklist
            </div>
            <ul className="space-y-2 text-xs text-[#4A4A47]">
              {bank.documents.map((doc, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2E7D6B]" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Suggest Rate Modal Popup */}
      <SuggestRateModal
        bankName={bank.name}
        bankSlug={bank.slug}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}