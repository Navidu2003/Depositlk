import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-teal text-white border-t border-teal-900 mt-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-end gap-[2px] h-5">
              <span className="w-1 h-1.5 bg-brass-gold rounded-xs"></span>
              <span className="w-1 h-2.5 bg-brass-gold rounded-xs"></span>
              <span className="w-1 h-3.5 bg-brass-gold rounded-xs"></span>
              <span className="w-1 h-4 bg-brass-gold rounded-xs"></span>
            </div>
            <span className="font-bold text-lg">DepositLK</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            DepositLK does not rank or endorse any bank. All banks are listed alphabetically. We provide transparent, open rate data to guide you to the right account type fairly.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-brass-gold">Platform</span>
            <Link href="/browse" className="text-gray-300 hover:text-white">Browse Banks</Link>
            <Link href="/quiz" className="text-gray-300 hover:text-white">Account Quiz</Link>
            <Link href="/calculator" className="text-gray-300 hover:text-white">Calculator</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-brass-gold">Account Types</span>
            <Link href="/guides/fd" className="text-gray-300 hover:text-white">Fixed Deposit</Link>
            <Link href="/guides/rd" className="text-gray-300 hover:text-white">Recurring Deposit</Link>
            <Link href="/guides/savings" className="text-gray-300 hover:text-white">Savings Account</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-brass-gold">Policy</span>
            <Link href="/about" className="text-gray-300 hover:text-white">Neutrality Policy</Link>
            <Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
          </div>
        </div>
      </div>
      
      <div className="border-t border-teal-900/50 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} DepositLK. All rate data indicative from public records.
      </div>
    </footer>
  );
}