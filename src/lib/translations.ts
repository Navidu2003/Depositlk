export type Language = "en" | "si" | "ta";

export interface TranslationDictionary {
  nav: {
    home: string;
    directory: string;
    compare: string;
    calculator: string;
    quiz: string;
    admin: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaQuiz: string;
    ctaBrowse: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    fdTab: string;
    rdTab: string;
    amountLabel: string;
    rateLabel: string;
    tenureLabel: string;
    resultTitle: string;
    exportCsv: string;
    print: string;
  };
  common: {
    fd: string;
    rd: string;
    savings: string;
    verified: string;
    perAnnum: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: "Home",
      directory: "Bank Directory",
      compare: "Compare Banks",
      calculator: "Calculator",
      quiz: "Find Account",
      admin: "Admin",
    },
    hero: {
      badge: "Radical Neutrality · 100% Unbiased",
      title: "Find the right deposit account. Compare every bank fairly.",
      subtitle:
        "Understand Fixed Deposits, Recurring Deposits, and Savings accounts without sponsored rankings, predatory ads, or biased recommendations.",
      ctaQuiz: "Find My Account Type",
      ctaBrowse: "Browse All Banks A–Z",
    },
    calculator: {
      title: "Deposit Growth Calculator",
      subtitle: "Compute maturity schedules and compound interest projections with zero server tracking.",
      fdTab: "Fixed Deposit (Lump Sum)",
      rdTab: "Recurring Deposit (Monthly)",
      amountLabel: "Deposit Amount (LKR)",
      rateLabel: "Annual Interest Rate (% p.a.)",
      tenureLabel: "Tenure / Duration",
      resultTitle: "Projected Maturity Balance",
      exportCsv: "Export CSV",
      print: "Print Statement",
    },
    common: {
      fd: "Fixed Deposit",
      rd: "Recurring Deposit",
      savings: "Savings Account",
      verified: "CBSL Licensed",
      perAnnum: "% p.a.",
    },
  },
  si: {
    nav: {
      home: "මුල් පිටුව",
      directory: "බැංකු නාමාවලිය",
      compare: "සංසන්දනය",
      calculator: "ගණකය",
      quiz: "ගිණුම තෝරන්න",
      admin: "පරිපාලක",
    },
    hero: {
      badge: "ස්වාධීන හා අපක්ෂපාතී සේවාවක්",
      title: "ඔබට ගැළපෙන තැන්පතු ගිණුම සොයා ගන්න. සියලුම බැංකු සාධාරණව සසඳන්න.",
      subtitle:
        "අනුග්‍රාහක ප්‍රචාරණයන්ගෙන් තොරව ස්ථාවර තැන්පතු, පුනරාවර්තී තැන්පතු සහ ඉතුරුම් ගිණුම් පිළිබඳ නිවැරදි තොරතුරු ලබා ගන්න.",
      ctaQuiz: "සුදුසු ගිණුම සොයන්න",
      ctaBrowse: "සියලු බැංකු A–Z",
    },
    calculator: {
      title: "තැන්පතු පොලී ගණකය",
      subtitle: "ප්‍රතිලාභ සහ පොලී වර්ධනය පුද්ගලිකව හා ක්ෂණිකව ගණනය කරගන්න.",
      fdTab: "ස්ථාවර තැන්පතු (තනි මුදලක්)",
      rdTab: "පුනරාවර්තී තැන්පතු (මාසික)",
      amountLabel: "තැන්පතු මුදල (රු.)",
      rateLabel: "වාර්ෂික පොලී අනුපාතය (%)",
      tenureLabel: "තැන්පතු කාලය",
      resultTitle: "කල්පිරීමේ ඇස්තමේන්තුගත වටිනාකම",
      exportCsv: "CSV බාගන්න",
      print: "මුද්‍රණය කරන්න",
    },
    common: {
      fd: "ස්ථාවර තැන්පතු",
      rd: "පුනරාවර්තී තැන්පතු",
      savings: "ඉතුරුම් ගිණුම",
      verified: "ශ්‍රී ලංකා මහ බැංකු ලියාපදිංචි",
      perAnnum: "වාර්ෂිකව %",
    },
  },
  ta: {
    nav: {
      home: "முகப்பு",
      directory: "வங்கி விபரம்",
      compare: "ஒப்பீடு",
      calculator: "கணிப்பான்",
      quiz: "கணக்கை தேடுக",
      admin: "நிர்வாகம்",
    },
    hero: {
      badge: "முழுமையான நடுநிலை வழிகாட்டல்",
      title: "உங்களுக்கு ஏற்ற வைப்புக் கணக்கைத் தெரிவு செய்யுங்கள். வங்கிகளை ஒப்பிடுங்கள்.",
      subtitle:
        "விளம்பர சார்பின்றி நிலையான வைப்பு, தொடர் வைப்பு மற்றும் சேமிப்புக் கணக்குகள் பற்றிய துல்லியமான தகவல்களைப் பெறுங்கள்.",
      ctaQuiz: "பொருத்தமான கணக்கைக் காண்க",
      ctaBrowse: "அனைத்து வங்கிகள் A–Z",
    },
    calculator: {
      title: "வைப்பு வளர்ச்சி கணிப்பான்",
      subtitle: "முதிர்வுத் தொகை மற்றும் வட்டி வருமானங்களை பாதுகாப்பாக கணக்கிடுங்கள்.",
      fdTab: "நிலையான வைப்பு (ஒட்டுமொத்த)",
      rdTab: "தொடர் வைப்பு (மாதாந்த)",
      amountLabel: "வைப்புத் தொகை (LKR)",
      rateLabel: "வருடாந்த வட்டி விகிதம் (%)",
      tenureLabel: "வைப்புக் காலம்",
      resultTitle: "மதிப்பிடப்பட்ட முதிர்வுத் தொகை",
      exportCsv: "CSV பதிவிறக்குக",
      print: "அச்சிடுக",
    },
    common: {
      fd: "நிலையான வைப்பு",
      rd: "தொடர் வைப்பு",
      savings: "சேமிப்புக் கணக்கு",
      verified: "மத்திய வங்கி அனுமதி பெற்றது",
      perAnnum: "வருடாந்தம் %",
    },
  },
};