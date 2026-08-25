import Link from "next/link";
import { ShieldCheck, CheckCircle2, ChevronRight, Scale, Eye, FileText, Ban } from "lucide-react";

export default function AboutPage() {
  const policyPoints = [
    {
      title: "Alphabetical Ordering Always",
      description: "No bank can pay to be at the top. We list every institution in strict A–Z order without exception.",
      icon: Scale,
    },
    {
      title: "No Paid Placements or Sponsored Results",
      description: "We do not host banner ads, sponsored badges, or featured partner promotions.",
      icon: Ban,
    },
    {
      title: "Open & Public Rate Data",
      description: "All indicative figures are extracted directly from published bank filings and statutory disclosures.",
      icon: FileText,
    },
    {
      title: "Account-Type Guidance Only",
      description: "Our recommendation engine only identifies suitable account categories (FD, RD, Savings) — never a specific bank.",
      icon: Eye,
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-10">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-[#4A4A47] mb-6">
        <Link href="/" className="hover:text-[#1F4E5F]">Home</Link>
        <ChevronRight className="w-4 h-4 text-[#DADAD3]" />
        <span className="text-[#1F4E5F] font-semibold">About DepositLK</span>
      </nav>

      {/* Main 2-Column Hero / Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        
        {/* Left: Narrative */}
        <div className="lg:col-span-7 space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1F4E5F] tracking-tight">
            About DepositLK
          </h1>
          <p className="text-base text-[#4A4A47] leading-relaxed">
            DepositLK is an independent, non-commercial financial comparison utility designed to empower Sri Lankan depositors with clear, unbiased account information.
          </p>
          <p className="text-sm text-[#4A4A47] leading-relaxed">
            Most financial comparison tools prioritize sponsored listings and affiliate partnerships. DepositLK was built on a foundational commitment to radical neutrality: guiding you to understand financial product types first, and presenting institutional data fairly without editorial bias.
          </p>
        </div>

        {/* Right: Flat Illustration with Growth Staircase Motif */}
        <div className="lg:col-span-5 bg-[#EAF1EE] border border-[#DADAD3] rounded-lg p-8 flex flex-col items-center justify-center text-center relative overflow-hidden h-72 shadow-xs">
          <div className="flex items-end gap-4 h-40 mb-4">
            <div className="w-10 bg-[#1F4E5F] rounded-t-xs h-1/4"></div>
            <div className="w-10 bg-[#2E7D6B] rounded-t-xs h-2/4"></div>
            <div className="w-10 bg-[#8FAE8B] rounded-t-xs h-3/4"></div>
            <div className="w-10 bg-[#C9A227] rounded-t-xs h-full"></div>
          </div>
          <span className="text-xs font-bold text-[#1F4E5F] tracking-wide uppercase">
            Fair · Transparent · Independent
          </span>
        </div>

      </div>

      {/* Neutrality Policy Section */}
      <div className="mb-16">
        <div className="border-b border-[#DADAD3] pb-4 mb-8">
          <h2 className="text-2xl font-bold text-[#1F4E5F] flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-[#2E7D6B]" />
            Our Neutrality Policy
          </h2>
          <p className="text-sm text-[#4A4A47] mt-1">
            Core principles that govern how data is structured and presented across DepositLK.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {policyPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F4F3EE] border border-[#DADAD3] rounded-lg p-6 flex flex-col justify-between hover:shadow-[0_2px_8px_rgba(31,78,95,0.08)] transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#DCEAE4] flex items-center justify-center text-[#2E7D6B] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1F4E5F] text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4A4A47] leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#DADAD3]/60 flex items-center gap-1.5 text-xs font-semibold text-[#2E7D6B]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Enforced Standard
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Callout Box */}
      <div className="bg-[#FBF3E3] border border-[#C9A227] rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-[#1F4E5F] text-base mb-1">Have questions or found a rate discrepancy?</h3>
          <p className="text-sm text-[#4A4A47]">
            Review our frequently asked questions or report an update directly.
          </p>
        </div>
        <Link
          href="/faq"
          className="px-5 py-2.5 bg-[#2E7D6B] text-white font-bold text-sm rounded-lg hover:opacity-95 transition-opacity shrink-0"
        >
          View FAQs
        </Link>
      </div>

    </div>
  );
}