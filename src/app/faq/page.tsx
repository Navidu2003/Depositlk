"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Why don't you rank banks?",
    answer:
      "DepositLK is strictly neutral. Financial suitability depends entirely on your specific savings horizon, deposit frequency, and risk tolerance. We list every institution alphabetically to eliminate sponsored bias.",
  },
  {
    question: "How does the quiz recommendation work?",
    answer:
      "The 4-question quiz evaluates your liquidity needs, planned contribution schedule, and time horizon. It only suggests an account product type (Fixed Deposit, Recurring Deposit, or Savings) — it will never recommend a specific commercial bank.",
  },
  {
    question: "Is my personal financial data stored?",
    answer:
      "No. All calculations on our calculator and quiz run entirely client-side in your browser. We do not store, track, or sell any personal financial figures.",
  },
  {
    question: "Are the interest rates shown current?",
    answer:
      "All rate data displayed is indicative and collected from official public rate sheets published by licensed Sri Lankan banks. Always check the official bank portal directly before opening an account.",
  },
  {
    question: "Can I compare more than 3 banks?",
    answer:
      "To maintain visual clarity and cognitive simplicity across mobile and desktop screens, our side-by-side comparison matrix is capped at a maximum of 3 institutions simultaneously.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-[800px] mx-auto px-5 md:px-20 py-10">
      {/* Breadcrumb Nav */}
      <nav className="flex items-center gap-2 text-sm text-[#4A4A47] mb-6">
        <Link href="/" className="hover:text-[#1F4E5F]">Home</Link>
        <ChevronRight className="w-4 h-4 text-[#DADAD3]" />
        <span className="text-[#1F4E5F] font-semibold">Frequently Asked Questions</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1F4E5F] tracking-tight mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-[#4A4A47]">
          Common questions regarding our neutrality policy, rate calculations, and data sources.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3 mb-12">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#F4F3EE] border border-[#DADAD3] rounded-lg overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 flex items-center justify-between text-left font-bold text-[#1F4E5F] text-base hover:bg-[#eae8e1] transition-colors cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2E7D6B] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-[#4A4A47] leading-relaxed border-t border-[#DADAD3]/40">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Strip */}
      <div className="bg-[#EAF1EE] border border-[#DADAD3] rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-[#2E7D6B] shrink-0" />
          <span className="text-sm font-semibold text-[#1F4E5F]">
            Still have questions about account types?
          </span>
        </div>
        <Link
          href="/quiz"
          className="px-5 py-2.5 bg-[#C9A227] text-[#1F4E5F] font-bold text-sm rounded-lg hover:opacity-95 transition-opacity shrink-0"
        >
          Take the 1-min quiz
        </Link>
      </div>
    </div>
  );
}