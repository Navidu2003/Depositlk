import Link from "next/link";
import { SAMPLE_BANKS } from "@/data/banks";
import BankCard from "@/components/BankCard";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function HomePage() {
  const previewBanks = SAMPLE_BANKS.slice(0, 6); // First 6 alphabetical banks

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* 1. Hero Section */}
      <section className="relative bg-[#EAF1EE] py-16 md:py-24 text-center px-5 overflow-hidden">
        {/* Growth Staircase Subtle Watermark Motif */}
        <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
          <div className="flex items-end gap-6 h-64">
            <div className="w-16 h-20 bg-[#1F4E5F] rounded-lg"></div>
            <div className="w-16 h-36 bg-[#1F4E5F] rounded-lg"></div>
            <div className="w-16 h-52 bg-[#1F4E5F] rounded-lg"></div>
            <div className="w-16 h-64 bg-[#1F4E5F] rounded-lg"></div>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1F4E5F] tracking-tight mb-4">
            Find the right deposit account. Compare every bank fairly.
          </h1>
          <p className="text-base md:text-lg text-[#4A4A47] max-w-xl mb-8 leading-relaxed">
            DepositLK guides you to an account type first — never to a single bank. Compare verified public rates transparently.
          </p>
          <Link
            href="/quiz"
            className="px-8 py-3.5 bg-[#C9A227] text-[#1F4E5F] font-bold rounded-lg shadow-sm hover:opacity-95 transition-all text-base"
          >
            Take the quiz
          </Link>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 md:px-20 w-full flex flex-col gap-16 md:gap-24">
        {/* 2. How It Works (3-Step Strip) */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F4E5F] text-center mb-10">How DepositLK Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-[#F4F3EE] rounded-lg border border-[#DADAD3]">
              <span className="w-10 h-10 rounded-full bg-[#2E7D6B] text-white font-bold flex items-center justify-center mb-4">
                1
              </span>
              <h3 className="font-semibold text-[#1F4E5F] text-lg mb-2">Take the 1-minute quiz</h3>
              <p className="text-sm text-[#4A4A47]">Answer 4 quick questions about your savings goals and time horizon.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#F4F3EE] rounded-lg border border-[#DADAD3]">
              <span className="w-10 h-10 rounded-full bg-[#2E7D6B] text-white font-bold flex items-center justify-center mb-4">
                2
              </span>
              <h3 className="font-semibold text-[#1F4E5F] text-lg mb-2">Discover account type</h3>
              <p className="text-sm text-[#4A4A47]">Learn whether a Fixed Deposit, Recurring Deposit, or Savings fits you best.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#F4F3EE] rounded-lg border border-[#DADAD3]">
              <span className="w-10 h-10 rounded-full bg-[#2E7D6B] text-white font-bold flex items-center justify-center mb-4">
                3
              </span>
              <h3 className="font-semibold text-[#1F4E5F] text-lg mb-2">Browse terms fairly</h3>
              <p className="text-sm text-[#4A4A47]">Compare rates across all Sri Lankan banks listed strictly in alphabetical order.</p>
            </div>
          </div>
        </section>

        {/* 3. Account Type Teaser Cards */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F4E5F] mb-6">Explore Account Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F4F3EE] border border-[#DADAD3] rounded-lg flex flex-col justify-between h-56">
              <div>
                <h3 className="font-bold text-lg text-[#1F4E5F] mb-2">Fixed Deposit (FD)</h3>
                <p className="text-sm text-[#4A4A47]">Lock away a lump sum for a fixed tenure with guaranteed high returns.</p>
              </div>
              <Link href="/guides/fd" className="text-sm font-semibold text-[#2E7D6B] hover:underline flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-6 bg-[#F4F3EE] border border-[#DADAD3] rounded-lg flex flex-col justify-between h-56">
              <div>
                <h3 className="font-bold text-lg text-[#1F4E5F] mb-2">Recurring Deposit (RD)</h3>
                <p className="text-sm text-[#4A4A47]">Deposit a fixed amount every month to build disciplined long-term wealth.</p>
              </div>
              <Link href="/guides/rd" className="text-sm font-semibold text-[#2E7D6B] hover:underline flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-6 bg-[#F4F3EE] border border-[#DADAD3] rounded-lg flex flex-col justify-between h-56">
              <div>
                <h3 className="font-bold text-lg text-[#1F4E5F] mb-2">Savings Account</h3>
                <p className="text-sm text-[#4A4A47]">Maintain full daily liquidity with continuous modest interest earnings.</p>
              </div>
              <Link href="/guides/savings" className="text-sm font-semibold text-[#2E7D6B] hover:underline flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Trust & Neutrality Section */}
        <section className="bg-[#1F4E5F] text-white rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="text-[#C9A227] w-6 h-6" /> Why we don&apos;t rank banks
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              We never take sponsorships or recommend one bank over another. Financial decisions depend on individual requirements, not arbitrary rankings.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#8FAE8B] w-5 h-5" /> Alphabetical ordering always
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#8FAE8B] w-5 h-5" /> No paid placements or sponsored cards
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#8FAE8B] w-5 h-5" /> Direct rate data from public filings
            </div>
          </div>
        </section>

        {/* 5. Bank Directory Preview (A-Z) */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#1F4E5F]">All banks (A–Z)</h2>
              <p className="text-sm text-[#4A4A47]">Preview of licensed Sri Lankan deposit institutions</p>
            </div>
            <Link href="/browse" className="text-sm font-semibold text-[#2E7D6B] hover:underline flex items-center gap-1">
              See all 9 banks <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewBanks.map((bank) => (
              <BankCard key={bank.id} bank={bank} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}