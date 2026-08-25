import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "DepositLK | Compare Sri Lankan Deposit Rates",
  description: "Compare transparent deposit rates and account types from licensed Sri Lankan banks.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FBF3E3] text-[#4A4A47]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script id="service-worker-registration" strategy="afterInteractive">
          {`if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js');
  });
}`}
        </Script>
      </body>
    </html>
  );
}