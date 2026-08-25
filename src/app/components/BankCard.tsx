import Link from "next/link";
import { Bank } from "@/types";

export default function BankCard({ bank }: { bank: Bank }) {
  return (
    <div className="bg-[#F4F3EE] border border-[#DADAD3] rounded-lg p-6 flex flex-col items-center text-center justify-between h-[280px] hover:shadow-[0_2px_8px_rgba(31,78,95,0.08)] transition-shadow">
      {/* 64px Circular Logo Placeholder */}
      <div className="w-16 h-16 rounded-full bg-[#DCEAE4] flex items-center justify-center text-[#1F4E5F] font-bold text-lg mb-4">
        {bank.initials}
      </div>

      {/* Bank Name */}
      <h3 className="font-semibold text-lg text-[#1F4E5F] line-clamp-1 mb-3">
        {bank.name}
      </h3>

      {/* Account Type Pills */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-5">
        {bank.accountTypes.map((type) => (
          <span 
            key={type} 
            className="px-2.5 py-0.5 bg-[#DCEAE4] text-[#2E7D6B] text-xs font-semibold rounded-full"
          >
            {type}
          </span>
        ))}
      </div>

      {/* View Details Action Button */}
      <Link 
        href={`/browse/${bank.slug}`}
        className="w-full py-2 bg-[#DCEAE4] text-[#1F4E5F] hover:bg-[#d0e2db] font-semibold text-sm rounded-lg transition-colors text-center"
      >
        View details
      </Link>
    </div>
  );
}