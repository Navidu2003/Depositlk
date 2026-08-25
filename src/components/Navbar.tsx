"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink-teal text-white h-16 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-end gap-[2px] h-6">
            <span className="w-1.5 h-2 bg-brass-gold rounded-xs"></span>
            <span className="w-1.5 h-3.5 bg-brass-gold rounded-xs"></span>
            <span className="w-1.5 h-5 bg-brass-gold rounded-xs"></span>
            <span className="w-1.5 h-6 bg-brass-gold rounded-xs"></span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">DepositLK</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-brass-gold transition-colors">Home</Link>
          <Link href="/browse" className="hover:text-brass-gold transition-colors">Browse banks</Link>
          <Link href="/quiz" className="hover:text-brass-gold transition-colors">Quiz</Link>
          <Link href="/calculator" className="hover:text-brass-gold transition-colors">Calculator</Link>
          <Link href="/about" className="hover:text-brass-gold transition-colors">About</Link>
          
          <Link href="/browse" aria-label="Search" className="p-1 hover:text-brass-gold transition-colors">
            <Search className="w-4 h-4" />
          </Link>
        </nav>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-white hover:text-brass-gold"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-ink-teal border-t border-teal-800 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-2 hover:text-brass-gold">Home</Link>
          <Link href="/browse" onClick={() => setIsOpen(false)} className="py-2 hover:text-brass-gold">Browse banks</Link>
          <Link href="/quiz" onClick={() => setIsOpen(false)} className="py-2 hover:text-brass-gold">Quiz</Link>
          <Link href="/calculator" onClick={() => setIsOpen(false)} className="py-2 hover:text-brass-gold">Calculator</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="py-2 hover:text-brass-gold">About</Link>
        </div>
      )}
    </header>
  );
}