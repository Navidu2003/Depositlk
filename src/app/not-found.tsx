import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-[600px] mx-auto px-5 py-20 text-center flex flex-col items-center">
      {/* Broken Staircase Illustration Motif */}
      <div className="flex items-end gap-3 h-24 mb-6">
        <div className="w-6 h-8 bg-[#1F4E5F] rounded-xs"></div>
        <div className="w-6 h-14 bg-[#2E7D6B] rounded-xs"></div>
        <div className="w-6 h-4 border-2 border-dashed border-[#DADAD3] rounded-xs"></div>
        <div className="w-6 h-24 bg-[#C9A227] rounded-xs"></div>
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-[#D85A30] mb-2 block">
        404 — Error
      </span>
      <h1 className="text-3xl font-bold text-[#1F4E5F] mb-3">Page not found</h1>
      <p className="text-sm text-[#4A4A47] mb-8 leading-relaxed max-w-md">
        This page doesn&apos;t exist or has moved. Explore our bank directory or use the quiz to find the right deposit account.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <Link
          href="/"
          className="px-6 py-3 bg-[#1F4E5F] text-white font-bold rounded-lg hover:opacity-95 transition-all text-sm flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <Link
          href="/browse"
          className="px-6 py-3 bg-[#F4F3EE] border border-[#DADAD3] text-[#4A4A47] font-semibold rounded-lg hover:bg-[#eae8e1] transition-colors text-sm"
        >
          Browse all banks
        </Link>
      </div>
    </div>
  );
}