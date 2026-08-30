import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SiteHeader from "@/components/SiteHeader";

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
          <SiteHeader />

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