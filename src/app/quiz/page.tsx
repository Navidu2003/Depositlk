"use client";

import { useState } from "react";
import Link from "next/link";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";
import { AccountType } from "@/types";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

export default function QuizPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<AccountType[]>([]);
  const [selectedOption, setSelectedOption] = useState<AccountType | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<AccountType | null>(null);

  const totalSteps = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleNext = () => {
    if (!selectedOption) return;

    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);
    setSelectedOption(null);

    if (currentStep + 1 < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        const counts = updatedAnswers.reduce((acc, curr) => {
          acc[curr] = (acc[curr] || 0) + 1;
          return acc;
        }, {} as Record<AccountType, number>);

        const derivedResult = (Object.keys(counts) as AccountType[]).reduce((a, b) =>
          counts[a] > counts[b] ? a : b
        );

        setResult(derivedResult);
        setIsCalculating(false);
      }, 800);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setSelectedOption(answers[currentStep - 1] || null);
      setAnswers((prev) => prev.slice(0, -1));
    }
  };

  const restartQuiz = () => {
    setHasStarted(false);
    setCurrentStep(0);
    setAnswers([]);
    setSelectedOption(null);
    setResult(null);
  };

  if (!hasStarted) {
    return (
      <div className="max-w-[1200px] mx-auto px-5 py-16 flex justify-center">
        <div className="max-w-[480px] w-full bg-[#EAF1EE] border border-[#DADAD3] rounded-lg p-8 text-center">
          <div className="flex justify-center items-end gap-[3px] h-8 mb-6">
            <span className="w-2 h-3 bg-[#C9A227] rounded-xs"></span>
            <span className="w-2 h-5 bg-[#C9A227] rounded-xs"></span>
            <span className="w-2 h-7 bg-[#C9A227] rounded-xs"></span>
            <span className="w-2 h-8 bg-[#C9A227] rounded-xs"></span>
          </div>
          <h1 className="text-2xl font-bold text-[#1F4E5F] mb-3">Find your ideal account type</h1>
          <p className="text-sm text-[#4A4A47] mb-6 leading-relaxed">
            Answer 4 quick questions. We&apos;ll suggest an account type — we&apos;ll never tell you which bank to choose.
          </p>
          <span className="inline-block text-xs font-semibold text-[#2E7D6B] mb-6 bg-[#DCEAE4] px-3 py-1 rounded-full">
            ~1 minute
          </span>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setHasStarted(true)}
              className="w-full py-3 bg-[#C9A227] text-[#1F4E5F] font-bold rounded-lg hover:opacity-95 transition-all text-sm"
            >
              Start the quiz
            </button>
            <Link
              href="/browse"
              className="w-full py-2.5 border border-[#DADAD3] text-[#4A4A47] font-semibold rounded-lg hover:bg-white transition-colors text-sm"
            >
              Skip — Browse all banks
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isCalculating) {
    return (
      <div className="max-w-[1200px] mx-auto px-5 py-24 flex flex-col items-center justify-center">
        <div className="flex items-end gap-2 h-10 mb-4 animate-pulse">
          <div className="w-2.5 h-4 bg-[#C9A227] rounded-xs"></div>
          <div className="w-2.5 h-6 bg-[#C9A227] rounded-xs"></div>
          <div className="w-2.5 h-8 bg-[#C9A227] rounded-xs"></div>
          <div className="w-2.5 h-10 bg-[#C9A227] rounded-xs"></div>
        </div>
        <p className="text-sm font-semibold text-[#1F4E5F]">Calculating your result…</p>
      </div>
    );
  }

  if (result) {
    const titles: Record<AccountType, string> = {
      FD: "Fixed Deposit (FD)",
      RD: "Recurring Deposit (RD)",
      Savings: "Savings Account",
    };

    const reasons: Record<AccountType, string> = {
      FD: "Because you have a lump sum and want predictable returns by locking funds securely.",
      RD: "Because you save monthly and want steady, disciplined growth.",
      Savings: "Because you require easy, penalty-free access to your money at any time.",
    };

    return (
      <div className="max-w-[1200px] mx-auto px-5 py-16 flex justify-center">
        <div className="max-w-[480px] w-full bg-[#EAF1EE] border-2 border-[#2E7D6B] rounded-lg p-8 text-center shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D6B] mb-2 block">
            Recommended Account Type
          </span>
          <h1 className="text-3xl font-bold text-[#1F4E5F] mb-4">{titles[result]}</h1>
          <p className="text-sm text-[#4A4A47] mb-8 leading-relaxed">{reasons[result]}</p>

          <div className="flex flex-col gap-3 mb-6">
            <Link
              href={`/browse?type=${result}`}
              className="w-full py-3 bg-[#C9A227] text-[#1F4E5F] font-bold rounded-lg hover:opacity-95 transition-all text-sm block"
            >
              Browse matching banks
            </Link>
            <button
              onClick={restartQuiz}
              className="w-full py-2.5 border border-[#DADAD3] text-[#4A4A47] font-semibold rounded-lg hover:bg-white transition-colors text-sm flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Retake the quiz
            </button>
          </div>

          <p className="text-xs text-gray-500">
            DepositLK neutrality policy: No bank name will ever appear here.
          </p>
        </div>
      </div>
    );
  }

  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="max-w-[600px] mx-auto px-5 py-12">
      <div className="mb-6">
        <div className="flex justify-between items-center text-xs font-bold text-[#1F4E5F] mb-2">
          <span>Step {currentStep + 1} of {totalSteps}</span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="w-full h-2 bg-[#DADAD3] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C9A227] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-[#1F4E5F] mb-6">
        {currentQuestion.question}
      </h2>

      {/* Radio Option Cards (Min 56px height) */}
      <div className="flex flex-col gap-3 mb-8">
        {currentQuestion.options.map((option, idx) => {
          const isSelected = selectedOption === option.targetType;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedOption(option.targetType)}
              className={`w-full min-h-[56px] p-4 rounded-lg border text-left flex items-center gap-3 transition-all ${
                isSelected
                  ? "bg-[#DCEAE4] border-[#2E7D6B] text-[#1F4E5F]"
                  : "bg-[#F4F3EE] border-[#DADAD3] text-[#4A4A47] hover:bg-[#eae8e1]"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                  isSelected ? "border-[#2E7D6B] bg-white" : "border-gray-400"
                }`}
              >
                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#2E7D6B]"></div>}
              </div>
              <span className="text-sm font-medium">{option.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-lg border border-[#DADAD3] ${
            currentStep === 0
              ? "opacity-40 cursor-not-allowed text-gray-400"
              : "text-[#4A4A47] hover:bg-gray-100"
          }`}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className={`flex items-center gap-1 text-sm font-bold px-6 py-2.5 rounded-lg transition-all ${
            !selectedOption
              ? "bg-[#2E7D6B]/40 text-white cursor-not-allowed"
              : "bg-[#2E7D6B] text-white hover:opacity-95"
          }`}
        >
          {currentStep === totalSteps - 1 ? "See my recommendation" : "Next"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}