import Link from "next/link";
import { Bank } from "@/types";

export default function BankCard({ bank }: { bank: Bank }) {
  return (
    <div className="bg-neutral-light border border-neutral-border rounded-lg p-6 flex flex-col items-center text-center justify-between h-[280px] hover:shadow-[0_2px_8px_rgba(31,78,95,0.08)] transition-shadow">
      <div className="w-16 h-16 rounded-full bg-pale-teal flex items-center justify-center text-ink-teal font-bold text-lg mb-4">
        {bank.initials}
      </div>

      <h3 className="font-semibold text-lg text-ink-teal line-clamp-1 mb-3">
        {bank.name}
      </h3>

      <div className="flex flex-wrap justify-center gap-1.5 mb-5">
        {bank.accountTypes.map((type) => (
          <span 
            key={type} 
            className="px-2.5 py-0.5 bg-pale-teal text-deep-teal text-xs font-medium rounded-pill"
          >
            {type}
          </span>
        ))}
      </div>

      <Link 
        href={`/browse/${bank.slug}`}
        className="w-full py-2 bg-pale-teal text-ink-teal hover:bg-teal-100 font-semibold text-sm rounded-lg transition-colors text-center"
      >
        View details
      </Link>
    </div>
  );
}