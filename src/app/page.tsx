'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const accountTypes = [
    {
      title: t.fdTitle,
      desc: t.fdDesc,
      tag: 'Guaranteed Return',
      href: '/browse?category=fixed-deposit',
    },
    {
      title: t.savingsTitle,
      desc: t.savingsDesc,
      tag: 'Flexible Access',
      href: '/browse?category=savings',
    },
    {
      title: t.seniorTitle,
      desc: t.seniorDesc,
      tag: 'Bonus Rates',
      href: '/browse?category=senior',
    },
    {
      title: t.childrenTitle,
      desc: t.childrenDesc,
      tag: 'Long Term',
      href: '/browse?category=children',
    },
  ];

  return (
    <main className="min-h-screen bg-[#f4f7f6] text-slate-800">
      {/* Hero Section */}
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#113a3a] leading-tight tracking-tight">
          {t.heroTitle}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          {t.heroSubtitle}
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/quiz"
            className="bg-[#c49b28] hover:bg-[#b08b22] text-white font-semibold px-8 py-3.5 rounded-lg shadow-md transition-transform transform active:scale-95"
          >
            {t.takeQuizBtn}
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#113a3a] mb-12">
          {t.howItWorksTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
            <div className="w-10 h-10 bg-teal-800 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{t.step1Title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t.step1Desc}</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
            <div className="w-10 h-10 bg-teal-800 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{t.step2Title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t.step2Desc}</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
            <div className="w-10 h-10 bg-teal-800 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{t.step3Title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t.step3Desc}</p>
          </div>
        </div>
      </section>

      {/* Explore Account Types Section */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#113a3a]">
            {t.exploreTypesTitle}
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            {t.exploreTypesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {accountTypes.map((type, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block bg-teal-50 text-teal-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                  {type.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{type.desc}</p>
              </div>
              <Link
                href={type.href}
                className="text-teal-800 font-semibold text-sm hover:text-teal-950 inline-flex items-center"
              >
                {t.viewRatesBtn} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Don't Rank Banks Section */}
      <section className="max-w-4xl mx-auto px-4 pb-24 text-center">
        <div className="bg-[#e9f0ee] border border-teal-100 rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-[#113a3a] mb-4">
            {t.whyNoRankTitle}
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            {t.whyNoRankP1}
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {t.whyNoRankP2}
          </p>
        </div>
      </section>
    </main>
  );
}