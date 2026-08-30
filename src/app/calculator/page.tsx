"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { ChevronRight, Download, Printer, Calculator as CalcIcon, Info } from "lucide-react";
import { exportToCSV, ScheduleRow } from "@/lib/exportUtils";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function CalculatorPage() {
  const { language } = useLanguage();
  const t = translations[language].calculator;
  const tNav = translations[language].nav;
  
  const [calcType, setCalcType] = useState<"FD" | "RD">("FD");
  const [depositAmount, setDepositAmount] = useState<number>(100000);
  const [annualRate, setAnnualRate] = useState<number>(11.5);
  const [tenureYears, setTenureYears] = useState<number>(1);
  const [compoundingFreq, setCompoundingFreq] = useState<number>(1); // 1 = Annual, 12 = Monthly

  const amountInputId = useId();
  const rateInputId = useId();
  const tenureInputId = useId();
  const freqInputId = useId();

  // FD Calculations
  const calculateFDMaturity = () => {
    const r = annualRate / 100;
    const n = compoundingFreq;
    const t = tenureYears;
    const maturity = depositAmount * Math.pow(1 + r / n, n * t);
    const interestEarned = maturity - depositAmount;
    return { maturity, interestEarned, totalDeposit: depositAmount };
  };

  // RD Calculations
  const calculateRDMaturity = () => {
    const months = tenureYears * 12;
    const monthlyRate = annualRate / 12 / 100;
    const totalDeposit = depositAmount * months;
    const maturity =
      depositAmount *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    const interestEarned = maturity - totalDeposit;
    return { maturity, interestEarned, totalDeposit };
  };

  const results = calcType === "FD" ? calculateFDMaturity() : calculateRDMaturity();

  // Generate milestone schedule breakdown
  const generateSchedule = (): ScheduleRow[] => {
    const rows: ScheduleRow[] = [];
    const totalPeriods = tenureYears * 12;
    const step = totalPeriods <= 12 ? 3 : 6;

    for (let m = step; m <= totalPeriods; m += step) {
      const yearFraction = m / 12;
      let bal = 0;
      let dep = 0;

      if (calcType === "FD") {
        dep = depositAmount;
        bal = dep * Math.pow(1 + (annualRate / 100) / compoundingFreq, compoundingFreq * yearFraction);
      } else {
        dep = depositAmount * m;
        const i = annualRate / 12 / 100;
        bal = depositAmount * ((Math.pow(1 + i, m) - 1) / i) * (1 + i);
      }

      rows.push({
        period: `Month ${m} (${(m / 12).toFixed(1)} Yrs)`,
        depositAmount: dep,
        interestEarned: Math.max(0, bal - dep),
        totalBalance: bal,
      });
    }
    return rows;
  };

  const scheduleData = generateSchedule();

  const handleDownloadCSV = () => {
    exportToCSV(`DepositLK_${calcType}_Schedule`, scheduleData);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-10">
      {/* Breadcrumb Nav */}
      <nav className="flex items-center gap-2 text-sm text-[#4A4A47] mb-6 print:hidden">
        <Link href="/" className="hover:text-[#1F4E5F]">{tNav.home}</Link>
        <ChevronRight className="w-4 h-4 text-[#DADAD3]" />
        <span className="text-[#1F4E5F] font-semibold">{t.title}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 bg-[#EAF1EE] text-[#2E7D6B] text-xs font-bold rounded-full border border-[#2E7D6B]/20 flex items-center gap-1">
              <CalcIcon className="w-3.5 h-3.5" /> {t.clientSafe}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-[#1F4E5F] tracking-tight">{t.title}</h1>
          <p className="text-sm text-[#4A4A47] mt-1">
            {t.subtitle}
          </p>
        </div>

        {/* Export & Print actions */}
        <div className="flex items-center gap-2 print:hidden">
          <button
            onClick={handleDownloadCSV}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#FAF9F5] border border-[#DADAD3] text-[#1F4E5F] text-xs font-semibold rounded-lg hover:bg-[#EAF1EE] transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> {t.exportCsv}
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#1F4E5F] text-white text-xs font-semibold rounded-lg hover:bg-[#163845] transition-colors"
          >
            <Printer className="w-3.5 h-3.5" /> {t.print}
          </button>
        </div>
      </div>

      {/* Type Toggle */}
      <div className="flex border border-[#DADAD3] rounded-lg p-1 bg-[#F4F3EE] max-w-md mb-8 print:hidden">
        <button
          onClick={() => setCalcType("FD")}
          className={`flex-1 py-2 text-xs font-bold rounded-md transition-colors ${
            calcType === "FD" ? "bg-[#1F4E5F] text-white" : "text-[#4A4A47] hover:text-[#1F4E5F]"
          }`}
        >
          {t.fdTab}
        </button>
        <button
          onClick={() => setCalcType("RD")}
          className={`flex-1 py-2 text-xs font-bold rounded-md transition-colors ${
            calcType === "RD" ? "bg-[#1F4E5F] text-white" : "text-[#4A4A47] hover:text-[#1F4E5F]"
          }`}
        >
          {t.rdTab}
        </button>
      </div>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Controls Column */}
        <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-xl p-6 space-y-5 print:border-none print:p-0">
          <div>
            <label htmlFor={amountInputId} className="block text-xs font-semibold text-[#1F4E5F] mb-1.5">
              {calcType === "FD" ? t.amountLabelFD : t.amountLabelRD}
            </label>
            <input
              id={amountInputId}
              type="number"
              min="1000"
              step="5000"
              value={depositAmount}
              onChange={(e) => setDepositAmount(Math.max(0, Number(e.target.value)))}
              className="w-full p-2.5 bg-white border border-[#DADAD3] rounded-lg text-sm font-semibold text-[#1F4E5F] outline-none focus:ring-2 focus:ring-[#2E7D6B]"
            />
          </div>

          <div>
            <label htmlFor={rateInputId} className="block text-xs font-semibold text-[#1F4E5F] mb-1.5">
              {t.rateLabel}
            </label>
            <input
              id={rateInputId}
              type="number"
              min="1"
              max="40"
              step="0.25"
              value={annualRate}
              onChange={(e) => setAnnualRate(Math.max(0, Number(e.target.value)))}
              className="w-full p-2.5 bg-white border border-[#DADAD3] rounded-lg text-sm font-semibold text-[#1F4E5F] outline-none focus:ring-2 focus:ring-[#2E7D6B]"
            />
          </div>

          <div>
            <label htmlFor={tenureInputId} className="block text-xs font-semibold text-[#1F4E5F] mb-1.5">
              {t.tenureLabel}
            </label>
            <select
              id={tenureInputId}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full p-2.5 bg-white border border-[#DADAD3] rounded-lg text-sm font-semibold text-[#1F4E5F] outline-none focus:ring-2 focus:ring-[#2E7D6B]"
            >
              <option value={0.25}>{t.tenure3m}</option>
              <option value={0.5}>{t.tenure6m}</option>
              <option value={1}>{t.tenure1y}</option>
              <option value={2}>{t.tenure2y}</option>
              <option value={3}>{t.tenure3y}</option>
              <option value={5}>{t.tenure5y}</option>
            </select>
          </div>

          {calcType === "FD" && (
            <div>
              <label htmlFor={freqInputId} className="block text-xs font-semibold text-[#1F4E5F] mb-1.5">
                {t.freqLabel}
              </label>
              <select
                id={freqInputId}
                value={compoundingFreq}
                onChange={(e) => setCompoundingFreq(Number(e.target.value))}
                className="w-full p-2.5 bg-white border border-[#DADAD3] rounded-lg text-sm font-semibold text-[#1F4E5F] outline-none focus:ring-2 focus:ring-[#2E7D6B]"
              >
                <option value={1}>{t.freqAnnually}</option>
                <option value={4}>{t.freqQuarterly}</option>
                <option value={12}>{t.freqMonthly}</option>
              </select>
            </div>
          )}
        </div>

        {/* Results Banner Column */}
        <div className="lg:col-span-2 bg-[#EAF1EE] border border-[#2E7D6B]/30 rounded-xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-[#2E7D6B] uppercase tracking-wider block mb-1">
              {t.resultTitle}
            </span>
            <div className="text-4xl md:text-5xl font-extrabold text-[#1F4E5F] tracking-tight">
              LKR {results.maturity.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-[#4A4A47] mt-2">
              {t.basedOn} {annualRate}% {translations[language].common.perAnnum}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#2E7D6B]/20">
            <div>
              <span className="text-xs text-[#4A4A47] block">{t.totalPrincipal}</span>
              <span className="text-lg font-bold text-[#1F4E5F] mt-0.5 block">
                LKR {results.totalDeposit.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div>
              <span className="text-xs text-[#4A4A47] block">{t.totalInterest}</span>
              <span className="text-lg font-bold text-[#2E7D6B] mt-0.5 block">
                + LKR {results.interestEarned.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Milestone Schedule Breakdown Table */}
      <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-xl overflow-hidden shadow-xs">
        <div className="p-4 bg-[#F4F3EE] border-b border-[#DADAD3] flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#1F4E5F]">{t.milestoneTitle}</h2>
          <span className="text-xs text-[#4A4A47] flex items-center gap-1">
            <Info className="w-3.5 h-3.5 text-[#2E7D6B]" /> {t.milestoneDesc}
          </span>
        </div>
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-[#EAF1EE] border-b border-[#DADAD3] text-[#1F4E5F]">
            <tr>
              <th className="p-3.5 font-bold">{t.colPeriod}</th>
              <th className="p-3.5 font-bold">{t.colPrincipal}</th>
              <th className="p-3.5 font-bold">{t.colInterest}</th>
              <th className="p-3.5 font-bold">{t.colTotal}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DADAD3]">
            {scheduleData.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#EAF1EE]/20 transition-colors">
                <td className="p-3.5 font-semibold text-[#1F4E5F]">{row.period}</td>
                <td className="p-3.5 text-[#4A4A47]">
                  LKR {row.depositAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </td>
                <td className="p-3.5 font-semibold text-[#2E7D6B]">
                  + LKR {row.interestEarned.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </td>
                <td className="p-3.5 font-bold text-[#1F4E5F]">
                  LKR {row.totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}