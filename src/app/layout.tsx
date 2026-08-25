import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DepositLK - Independent Sri Lankan Bank Deposit Comparison",
  description: "Radically neutral bank deposit comparison and financial literacy portal for Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FAF9F5] text-[#1F4E5F] antialiased min-h-screen flex flex-col`}>
        <LanguageProvider>
          {/* Header Navigation */}
          <header className="border-b border-[#DADAD3] bg-[#FAF9F5]/90 backdrop-blur-md sticky top-0 z-40">
            <div className="max-w-[1200px] mx-auto px-5 md:px-20 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold text-lg text-[#1F4E5F] tracking-tight">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227] flex items-center justify-center text-[#1F4E5F] font-black text-sm">
                  D
                </div>
                <span>DepositLK</span>
              </Link>

              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4A4A47]">
                <Link href="/browse" className="hover:text-[#1F4E5F] transition-colors">Directory</Link>
                <Link href="/compare" className="hover:text-[#1F4E5F] transition-colors">Compare</Link>
                <Link href="/calculator" className="hover:text-[#1F4E5F] transition-colors">Calculator</Link>
                <Link href="/quiz" className="hover:text-[#1F4E5F] transition-colors">Account Finder</Link>
              </nav>

              <div className="flex items-center gap-3">
                <LanguageToggle />
                <Link
                  href="/quiz"
                  className="hidden sm:inline-flex px-3.5 py-1.5 bg-[#1F4E5F] text-white text-xs font-semibold rounded-lg hover:bg-[#163845] transition-colors"
                >
                  Start Quiz
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-[#DADAD3] bg-[#F4F3EE] py-8 text-xs text-[#4A4A47] text-center">
            <p>© 2026 DepositLK · Built for Radical Financial Literacy in Sri Lanka · Non-Commercial & Independent</p>
          </footer>
        </LanguageProvider>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}