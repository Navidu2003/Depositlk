"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { SAMPLE_BANKS } from "@/data/banks";
import { Bank } from "@/types";
import { Check, Copy, ChevronRight, X, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

function CompareContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const t = translations[language].compare;
  const tNav = translations[language].nav;
  
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  // Initialize selected banks from URL query or defaults
  useEffect(() => {
    const urlBanks = searchParams.get("banks");
    if (urlBanks) {
      const slugs = urlBanks.split(",").filter((s) => SAMPLE_BANKS.some((b) => b.slug === s));
      if (slugs.length > 0) {
        setSelectedSlugs(slugs.slice(0, 3));
        return;
      }
    }
    // Default fallback to first 2 banks
    setSelectedSlugs([SAMPLE_BANKS[0].slug, SAMPLE_BANKS[1].slug]);
  }, [searchParams]);

  // Sync selected banks to URL query parameter
  const updateUrl = (slugs: string[]) => {
    const params = new URLSearchParams();
    if (slugs.length > 0) {
      params.set("banks", slugs.join(","));
    }
    router.replace(`/compare?${params.toString()}`, { scroll: false });
  };

  const handleSelectBank = (index: number, newSlug: string) => {
    const updated = [...selectedSlugs];
    updated[index] = newSlug;
    setSelectedSlugs(updated);
    updateUrl(updated);
  };

  const handleAddSlot = () => {
    if (selectedSlugs.length < 3) {
      const unusedBank = SAMPLE_BANKS.find((b) => !selectedSlugs.includes(b.slug));
      if (unusedBank) {
        const updated = [...selectedSlugs, unusedBank.slug];
        setSelectedSlugs(updated);
        updateUrl(updated);
      }
    }
  };

  const handleRemoveSlot = (index: number) => {
    if (selectedSlugs.length > 1) {
      const updated = selectedSlugs.filter((_, idx) => idx !== index);
      setSelectedSlugs(updated);
      updateUrl(updated);
    }
  };

  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is blocked
    }
  };

  const comparedBanks: (Bank | undefined)[] = selectedSlugs.map((slug) =>
    SAMPLE_BANKS.find((b) => b.slug === slug)
  );

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-10">
      {/* Breadcrumb Nav */}
      <nav className="flex items-center gap-2 text-sm text-[#4A4A47] mb-6">
        <Link href="/" className="hover:text-[#1F4E5F]">{tNav.home}</Link>
        <ChevronRight className="w-4 h-4 text-[#DADAD3]" />
        <Link href="/browse" className="hover:text-[#1F4E5F]">{t.breadcrumbDir}</Link>
        <ChevronRight className="w-4 h-4 text-[#DADAD3]" />
        <span className="text-[#1F4E5F] font-semibold">{t.breadcrumbCompare}</span>
      </nav>

      {/* Header & Copy Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1F4E5F] tracking-tight">{t.title}</h1>
          <p className="text-sm text-[#4A4A47] mt-1">
            {t.subtitle}
          </p>
        </div>
        <button
          onClick={copyShareLink}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#EAF1EE] border border-[#DADAD3] text-[#1F4E5F] font-semibold text-sm rounded-lg hover:bg-[#dceae4] transition-colors self-start sm:self-auto"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-[#2E7D6B]" /> {t.copiedBtn}
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-[#2E7D6B]" /> {t.shareBtn}
            </>
          )}
        </button>
      </div>

      {/* Bank Selector Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {comparedBanks.map((bank, idx) => (
          <div key={idx} className="bg-[#F4F3EE] border border-[#DADAD3] rounded-lg p-4 relative">
            {comparedBanks.length > 1 && (
              <button
                onClick={() => handleRemoveSlot(idx)}
                className="absolute top-3 right-3 text-[#4A4A47] hover:text-[#D85A30] p-1"
                aria-label="Remove bank slot"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <label className="text-xs font-semibold text-[#4A4A47] uppercase tracking-wider block mb-2">
              {t.bankSlot(idx + 1)}
            </label>
            <select
              value={bank?.slug || ""}
              onChange={(e) => handleSelectBank(idx, e.target.value)}
              className="w-full p-2.5 bg-white border border-[#DADAD3] rounded-md text-sm font-semibold text-[#1F4E5F] focus:outline-none focus:ring-2 focus:ring-[#2E7D6B]"
            >
              {SAMPLE_BANKS.map((b) => (
                <option key={b.id} value={b.slug}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
        ))}

        {comparedBanks.length < 3 && (
          <button
            onClick={handleAddSlot}
            className="h-full min-h-[96px] border-2 border-dashed border-[#DADAD3] rounded-lg flex flex-col items-center justify-center text-sm font-semibold text-[#2E7D6B] hover:bg-[#EAF1EE]/50 transition-colors"
          >
            {t.addBankBtn}
          </button>
        )}
      </div>

      {/* Comparison Matrix Table */}
      <div className="bg-[#F4F3EE] border border-[#DADAD3] rounded-lg overflow-x-auto shadow-xs">
        <table className="w-full text-left text-sm border-collapse min-w-[650px]">
          <thead>
            <tr className="bg-[#EAF1EE] border-b border-[#DADAD3]">
              <th className="p-4 font-bold text-[#1F4E5F] w-1/4">{t.specHeader}</th>
              {comparedBanks.map((bank, idx) => (
                <th key={idx} className="p-4 font-bold text-[#1F4E5F]">
                  {bank?.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DADAD3]">
            <tr>
              <td className="p-4 font-semibold text-[#1F4E5F] bg-[#FAF9F5]">{t.availAccHeader}</td>
              {comparedBanks.map((bank, idx) => (
                <td key={idx} className="p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {bank?.accountTypes.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-[#DCEAE4] text-[#2E7D6B] text-xs font-semibold rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-semibold text-[#1F4E5F] bg-[#FAF9F5]">{t.fdRateHeader}</td>
              {comparedBanks.map((bank, idx) => {
                const fdRate = bank?.rates.find((r) => r.accountType === "FD" && r.tenure.includes("1 Year"));
                return (
                  <td key={idx} className="p-4 font-bold text-[#2E7D6B]">
                    {fdRate ? `${fdRate.interestRate.toFixed(2)}% p.a.` : "N/A"}
                  </td>
                );
              })}
            </tr>
            <tr>
              <td className="p-4 font-semibold text-[#1F4E5F] bg-[#FAF9F5]">{t.savingsRateHeader}</td>
              {comparedBanks.map((bank, idx) => {
                const savRate = bank?.rates.find((r) => r.accountType === "Savings");
                return (
                  <td key={idx} className="p-4 font-medium text-[#4A4A47]">
                    {savRate ? `${savRate.interestRate.toFixed(2)}% p.a.` : "N/A"}
                  </td>
                );
              })}
            </tr>
            <tr>
              <td className="p-4 font-semibold text-[#1F4E5F] bg-[#FAF9F5]">{t.penaltyHeader}</td>
              {comparedBanks.map((bank, idx) => (
                <td key={idx} className="p-4 text-xs text-[#4A4A47] leading-relaxed">
                  {bank?.earlyWithdrawalPenalty}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-semibold text-[#1F4E5F] bg-[#FAF9F5]">{t.websiteHeader}</td>
              {comparedBanks.map((bank, idx) => (
                <td key={idx} className="p-4">
                  {bank ? (
                    <a
                      href={bank.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E7D6B] hover:underline"
                    >
                      {t.visitPortal} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ComparePage() {
  // Let's create a wrapper to use the hook correctly since Suspense needs to be higher up
  return (
    <Suspense fallback={<div className="max-w-[1200px] mx-auto p-10 text-center text-[#4A4A47]">Loading comparison...</div>}>
      <CompareContent />
    </Suspense>
  );
}