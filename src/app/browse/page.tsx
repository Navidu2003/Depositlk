"use client";

import { useState, useMemo } from "react";
import { SAMPLE_BANKS } from "@/data/banks";
import BankCard from "@/components/BankCard";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { AccountType } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function BrowsePage() {
  const { language } = useLanguage();
  const t = translations[language].browse;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("ALL");

  const filteredBanks = useMemo(() => {
    return SAMPLE_BANKS.filter((bank) => {
      const matchesSearch = bank.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === "ALL" || bank.accountTypes.includes(selectedType as AccountType);
      return matchesSearch && matchesType;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedType]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("ALL");
  };

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1F4E5F] tracking-tight mb-1">{t.title}</h1>
        <p className="text-sm text-[#4A4A47]">{t.subtitle(filteredBanks.length)}</p>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#F4F3EE] border border-[#DADAD3] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D6B]"
          />
        </div>

        <div className="relative flex items-center min-w-[200px]">
          <SlidersHorizontal className="w-4 h-4 text-gray-500 absolute left-3 pointer-events-none" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full pl-9 pr-8 py-2.5 bg-[#F4F3EE] border border-[#DADAD3] rounded-lg text-sm text-[#1F4E5F] font-medium focus:outline-none focus:ring-2 focus:ring-[#2E7D6B] appearance-none cursor-pointer"
          >
            <option value="ALL">{t.allTypes}</option>
            <option value="FD">{t.fdType}</option>
            <option value="RD">{t.rdType}</option>
            <option value="Savings">{t.savingsType}</option>
          </select>
        </div>
      </div>

      {/* Active Filter Chips */}
      {(selectedType !== "ALL" || searchQuery) && (
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <span className="text-xs text-[#4A4A47] font-medium">{t.activeFilters}</span>
          {selectedType !== "ALL" && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#DCEAE4] text-[#2E7D6B] text-xs font-semibold rounded-full">
              {t.typePrefix} {selectedType}
              <button onClick={() => setSelectedType("ALL")} className="hover:text-[#1F4E5F]">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#DCEAE4] text-[#2E7D6B] text-xs font-semibold rounded-full">
              {t.queryPrefix} &quot;{searchQuery}&quot;
              <button onClick={() => setSearchQuery("")} className="hover:text-[#1F4E5F]">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}
          <button onClick={clearFilters} className="text-xs text-[#2E7D6B] font-semibold hover:underline ml-2">
            {t.clearAll}
          </button>
        </div>
      )}

      {/* Banks Grid */}
      {filteredBanks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBanks.map((bank) => (
            <BankCard key={bank.id} bank={bank} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#F4F3EE] border border-[#DADAD3] rounded-lg p-8">
          <h2 className="text-xl font-bold text-[#1F4E5F] mb-2">{t.noBanksTitle}</h2>
          <p className="text-sm text-[#4A4A47] mb-6">{t.noBanksDesc}</p>
          <button
            onClick={clearFilters}
            className="px-5 py-2.5 border border-[#DADAD3] rounded-lg text-sm font-semibold text-[#4A4A47] hover:bg-[#eae8e1]"
          >
            {t.clearFiltersBtn}
          </button>
        </div>
      )}
    </div>
  );
}