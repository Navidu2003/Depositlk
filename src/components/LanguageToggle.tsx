"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-[#EAF1EE] border border-[#DADAD3] rounded-lg p-1 text-xs font-semibold">
      <Globe className="w-3.5 h-3.5 text-[#1F4E5F] ml-1 mr-0.5" />
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-0.5 rounded transition-colors ${
          language === "en" ? "bg-[#1F4E5F] text-white" : "text-[#4A4A47] hover:text-[#1F4E5F]"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("si")}
        className={`px-2 py-0.5 rounded transition-colors ${
          language === "si" ? "bg-[#1F4E5F] text-white" : "text-[#4A4A47] hover:text-[#1F4E5F]"
        }`}
      >
        සිං
      </button>
      <button
        onClick={() => setLanguage("ta")}
        className={`px-2 py-0.5 rounded transition-colors ${
          language === "ta" ? "bg-[#1F4E5F] text-white" : "text-[#4A4A47] hover:text-[#1F4E5F]"
        }`}
      >
        தம
      </button>
    </div>
  );
}