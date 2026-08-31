'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations, Language } from '@/lib/translations';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language] || translations.en;

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'si', label: 'සිං' },
    { code: 'ta', label: 'தம' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <span className="font-bold text-xl text-teal-950">DepositLK</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="/browse" className="hover:text-teal-900 transition-colors">
            {t.nav.directory}
          </Link>
          <Link href="/compare" className="hover:text-teal-900 transition-colors">
            {t.nav.compare}
          </Link>
          <Link href="/calculator" className="hover:text-teal-900 transition-colors">
            {t.nav.calculator}
          </Link>
          <Link href="/quiz" className="hover:text-teal-900 transition-colors">
            {t.nav.quiz}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 p-1 rounded-lg border border-gray-200">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                  language === item.code
                    ? 'bg-teal-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Link
            href="/quiz"
            className="bg-teal-950 text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-teal-900 transition shadow-sm"
          >
            {t.quiz.startBtn}
          </Link>
        </div>
      </div>
    </header>
  );
}