"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import LanguageToggle from "@/components/LanguageToggle";

export default function SiteHeader() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="border-b border-[#DADAD3] bg-[#FAF9F5]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-[#1F4E5F] tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-[#C9A227] flex items-center justify-center text-[#1F4E5F] font-black text-sm">
            D
          </div>
          <span>DepositLK</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4A4A47]">
          <Link href="/" className="hover:text-[#1F4E5F] transition-colors">{t.nav.home}</Link>
          <Link href="/browse" className="hover:text-[#1F4E5F] transition-colors">{t.nav.directory}</Link>
          <Link href="/compare" className="hover:text-[#1F4E5F] transition-colors">{t.nav.compare}</Link>
          <Link href="/calculator" className="hover:text-[#1F4E5F] transition-colors">{t.nav.calculator}</Link>
          <Link href="/quiz" className="hover:text-[#1F4E5F] transition-colors">{t.nav.quiz}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link
            href="/quiz"
            className="hidden sm:inline-flex px-3.5 py-1.5 bg-[#1F4E5F] text-white text-xs font-semibold rounded-lg hover:bg-[#163845] transition-colors"
          >
            {t.hero.ctaQuiz}
          </Link>
        </div>
      </div>
    </header>
  );
}
