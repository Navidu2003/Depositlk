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
  // Newly added flat translations for the updated page.tsx
  fdTitle: string;
  fdDesc: string;
  savingsTitle: string;
  savingsDesc: string;
  seniorTitle: string;
  seniorDesc: string;
  childrenTitle: string;
  childrenDesc: string;
  heroTitle: string;
  heroSubtitle: string;
  takeQuizBtn: string;
  howItWorksTitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  exploreTypesTitle: string;
  exploreTypesSubtitle: string;
  viewRatesBtn: string;
  whyNoRankTitle: string;
  whyNoRankP1: string;
  whyNoRankP2: string;
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
    fdTitle: "Fixed Deposit (FD)",
    fdDesc: "Lock away a lump sum for a fixed tenure with guaranteed high returns.",
    savingsTitle: "Savings Account",
    savingsDesc: "Maintain full daily liquidity with continuous modest interest earnings.",
    seniorTitle: "Senior Citizens",
    seniorDesc: "Special higher interest rates for citizens over 60 years of age.",
    childrenTitle: "Children's Savings",
    childrenDesc: "Secure your child's future with bonus interest and rewards.",
    heroTitle: "Find the right deposit account. Compare every bank fairly.",
    heroSubtitle: "Understand Fixed Deposits, Recurring Deposits, and Savings accounts without sponsored rankings, predatory ads, or biased recommendations.",
    takeQuizBtn: "Find My Account Type",
    howItWorksTitle: "How DepositLK Works",
    step1Title: "Take the 1-minute quiz",
    step1Desc: "Answer 4 quick questions about your savings goals and time horizon.",
    step2Title: "Discover account type",
    step2Desc: "Learn whether a Fixed Deposit, Recurring Deposit, or Savings fits you best.",
    step3Title: "Browse terms fairly",
    step3Desc: "Compare rates across all Sri Lankan banks listed strictly in alphabetical order.",
    exploreTypesTitle: "Explore Account Types",
    exploreTypesSubtitle: "Understand the different ways to grow your money safely in Sri Lanka.",
    viewRatesBtn: "View Rates",
    whyNoRankTitle: "Why we don't rank banks",
    whyNoRankP1: "We never take sponsorships or recommend one bank over another. Financial decisions depend on individual requirements, not arbitrary rankings.",
    whyNoRankP2: "Our directory lists all licensed commercial banks in strict alphabetical order. You see exactly what they offer, nothing hidden.",
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
    fdTitle: "ස්ථාවර තැන්පතු (FD)",
    fdDesc: "නියමිත කාලයක් සඳහා මුදල් තැන්පත් කර සහතික කළ ඉහළ ප්‍රතිලාභ ලබාගන්න.",
    savingsTitle: "ඉතුරුම් ගිණුම්",
    savingsDesc: "අවශ්‍ය ඕනෑම වේලාවක මුදල් ලබාගැනීමේ පහසුව සමඟ අඛණ්ඩ පොලී ආදායමක්.",
    seniorTitle: "ජ්‍යෙෂ්ඨ පුරවැසි",
    seniorDesc: "වයස අවුරුදු 60ට වැඩි පුරවැසියන් සඳහා විශේෂිත ඉහළ පොලී අනුපාත.",
    childrenTitle: "ළමා ඉතුරුම්",
    childrenDesc: "බෝනස් පොලී සහ ත්‍යාග සමඟින් ඔබේ දරුවාගේ අනාගතය සුරක්ෂිත කරන්න.",
    heroTitle: "ඔබට ගැළපෙන තැන්පතු ගිණුම සොයා ගන්න. සියලුම බැංකු සාධාරණව සසඳන්න.",
    heroSubtitle: "අනුග්‍රාහක ප්‍රචාරණයන්ගෙන් තොරව ස්ථාවර තැන්පතු, පුනරාවර්තී තැන්පතු සහ ඉතුරුම් ගිණුම් පිළිබඳ නිවැරදි තොරතුරු ලබා ගන්න.",
    takeQuizBtn: "සුදුසු ගිණුම සොයන්න",
    howItWorksTitle: "DepositLK ක්‍රියාත්මක වන ආකාරය",
    step1Title: "විනාඩියක ප්‍රශ්නාවලිය",
    step1Desc: "ඔබේ ඉතුරුම් අරමුණු සහ කාලසීමාව පිළිබඳ කෙටි ප්‍රශ්න 4කට පිළිතුරු දෙන්න.",
    step2Title: "ගිණුම් වර්ගය හඳුනාගන්න",
    step2Desc: "ස්ථාවර තැන්පතු, පුනරාවර්තී තැන්පතු හෝ ඉතුරුම් ගිණුම් අතුරින් ඔබට වඩාත් සුදුසු කුමක්දැයි දැනගන්න.",
    step3Title: "සාධාරණව සසඳන්න",
    step3Desc: "ශ්‍රී ලංකාවේ සියලුම බැංකු වල පොලී අනුපාත අකාරාදී පිළිවෙලින් සසඳන්න.",
    exploreTypesTitle: "ගිණුම් වර්ග ගවේෂණය කරන්න",
    exploreTypesSubtitle: "ශ්‍රී ලංකාව තුළ මුදල් සුරක්ෂිතව වර්ධනය කරගත හැකි විවිධ ක්‍රම අවබෝධ කරගන්න.",
    viewRatesBtn: "පොලී අනුපාත බලන්න",
    whyNoRankTitle: "අපි බැංකු ශ්‍රේණිගත නොකරන්නේ ඇයි",
    whyNoRankP1: "අපි කිසිවිටෙකත් අනුග්‍රාහකත්වයන් ලබාගන්නේ නැත, එසේම එක් බැංකුවක් තවත් බැංකුවකට වඩා නිර්දේශ නොකරමු. මූල්‍ය තීරණ රඳා පවතින්නේ තනි පුද්ගල අවශ්‍යතා මත මිස අත්තනෝමතික ශ්‍රේණිගත කිරීම් මත නොවේ.",
    whyNoRankP2: "අපගේ නාමාවලිය සියලුම බලපත්‍රලාභී වාණිජ බැංකු අකාරාදී පිළිවෙලින් දක්වයි. ඔබට සැඟවුණු කිසිවක් නොමැතිව ඔවුන් ලබාදෙන දේ හරියටම දැකගත හැකිය.",
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
    fdTitle: "நிலையான வைப்பு (FD)",
    fdDesc: "ஒரு குறிப்பிட்ட காலத்திற்கு பணத்தை வைப்பிட்டு உத்தரவாதமான அதிக வருமானத்தைப் பெறுங்கள்.",
    savingsTitle: "சேமிப்புக் கணக்குகள்",
    savingsDesc: "தேவையான நேரத்தில் பணத்தை எடுக்கும் வசதியுடன் தொடர்ச்சியான வட்டி வருமானம்.",
    seniorTitle: "மூத்த குடிமக்கள்",
    seniorDesc: "60 வயதிற்கு மேற்பட்ட குடிமக்களுக்கான விசேட அதிக வட்டி வீதங்கள்.",
    childrenTitle: "சிறுவர் சேமிப்பு",
    childrenDesc: "மேலதிக வட்டி மற்றும் பரிசுகளுடன் உங்கள் குழந்தையின் எதிர்காலத்தைப் பாதுகாக்கவும்.",
    heroTitle: "உங்களுக்கு ஏற்ற வைப்புக் கணக்கைத் தெரிவு செய்யுங்கள். வங்கிகளை ஒப்பிடுங்கள்.",
    heroSubtitle: "விளம்பர சார்பின்றி நிலையான வைப்பு, தொடர் வைப்பு மற்றும் சேமிப்புக் கணக்குகள் பற்றிய துல்லியமான தகவல்களைப் பெறுங்கள்.",
    takeQuizBtn: "பொருத்தமான கணக்கைக் காண்க",
    howItWorksTitle: "DepositLK எவ்வாறு செயல்படுகிறது",
    step1Title: "ஒரு நிமிட வினாடிவினா",
    step1Desc: "உங்கள் சேமிப்பு இலக்குகள் மற்றும் காலம் பற்றிய 4 சிறு வினாக்களுக்கு பதிலளிக்கவும்.",
    step2Title: "கணக்கு வகையை அறியவும்",
    step2Desc: "நிலையான வைப்பு, தொடர் வைப்பு அல்லது சேமிப்புக் கணக்குகளில் உங்களுக்கு ஏற்றதை தெரிந்து கொள்ளவும்.",
    step3Title: "நடுநிலையாக ஒப்பிடவும்",
    step3Desc: "இலங்கையிலுள்ள அனைத்து வங்கிகளின் வட்டி வீதங்களையும் அகர வரிசைப்படி ஒப்பிட்டுப் பாருங்கள்.",
    exploreTypesTitle: "கணக்கு வகைகளை ஆராயுங்கள்",
    exploreTypesSubtitle: "இலங்கையில் உங்கள் பணத்தை பாதுகாப்பாக வளர்ப்பதற்கான வெவ்வேறு வழிகளைப் புரிந்து கொள்ளுங்கள்.",
    viewRatesBtn: "வட்டி வீதங்களைப் பார்க்க",
    whyNoRankTitle: "நாங்கள் வங்கிகளை ஏன் தரவரிசைப்படுத்துவதில்லை",
    whyNoRankP1: "நாங்கள் ஒருபோதும் அனுசரணை பெறுவதில்லை அல்லது ஒரு வங்கியை விட மற்றொன்றை பரிந்துரைப்பதில்லை. நிதி முடிவுகள் தனிநபர் தேவைகளைச் சார்ந்ததே தவிர, தன்னிச்சையான தரவரிசைகளை அல்ல.",
    whyNoRankP2: "எங்கள் கோப்பகம் அனைத்து உரிமம் பெற்ற வணிக வங்கிகளையும் அகர வரிசைப்படி பட்டியலிடுகிறது. மறைமுகமான எதுவுமின்றி அவர்கள் வழங்குவதை நீங்கள் சரியாகப் பார்க்கலாம்.",
  },
};