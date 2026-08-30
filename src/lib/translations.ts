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
    amountLabelFD: string;
    amountLabelRD: string;
    rateLabel: string;
    tenureLabel: string;
    freqLabel: string;
    resultTitle: string;
    exportCsv: string;
    print: string;
    clientSafe: string;
    tenure3m: string;
    tenure6m: string;
    tenure1y: string;
    tenure2y: string;
    tenure3y: string;
    tenure5y: string;
    freqAnnually: string;
    freqQuarterly: string;
    freqMonthly: string;
    basedOn: string;
    totalPrincipal: string;
    totalInterest: string;
    milestoneTitle: string;
    milestoneDesc: string;
    colPeriod: string;
    colPrincipal: string;
    colInterest: string;
    colTotal: string;
  };
  quiz: {
    title: string;
    subtitle: string;
    duration: string;
    startBtn: string;
    skipBtn: string;
    calculating: string;
    recommended: string;
    fdTitle: string;
    rdTitle: string;
    savingsTitle: string;
    fdReason: string;
    rdReason: string;
    savingsReason: string;
    browseBtn: string;
    retakeBtn: string;
    neutrality: string;
    step: (current: number, total: number) => string;
    back: string;
    next: string;
    seeRecommendation: string;
  };
  browse: {
    title: string;
    subtitle: (count: number) => string;
    searchPlaceholder: string;
    allTypes: string;
    fdType: string;
    rdType: string;
    savingsType: string;
    activeFilters: string;
    typePrefix: string;
    queryPrefix: string;
    clearAll: string;
    noBanksTitle: string;
    noBanksDesc: string;
    clearFiltersBtn: string;
  };
  compare: {
    breadcrumbDir: string;
    breadcrumbCompare: string;
    title: string;
    subtitle: string;
    shareBtn: string;
    copiedBtn: string;
    bankSlot: (num: number) => string;
    addBankBtn: string;
    specHeader: string;
    availAccHeader: string;
    fdRateHeader: string;
    savingsRateHeader: string;
    penaltyHeader: string;
    websiteHeader: string;
    visitPortal: string;
    loading: string;
  };
  common: {
    fd: string;
    rd: string;
    savings: string;
    verified: string;
    perAnnum: string;
  };
  // Flat translations for page.tsx
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
      subtitle: "Understand Fixed Deposits, Recurring Deposits, and Savings accounts without sponsored rankings, predatory ads, or biased recommendations.",
      ctaQuiz: "Find My Account Type",
      ctaBrowse: "Browse All Banks A–Z",
    },
    calculator: {
      title: "Deposit Growth Calculator",
      subtitle: "Compute maturity schedules and compound interest projections with zero server tracking.",
      fdTab: "Fixed Deposit (Lump Sum)",
      rdTab: "Recurring Deposit (Monthly)",
      amountLabelFD: "Lump Sum Initial Deposit (LKR)",
      amountLabelRD: "Monthly Recurring Deposit (LKR)",
      rateLabel: "Annual Interest Rate (% p.a.)",
      tenureLabel: "Tenure / Duration (Years)",
      freqLabel: "Compounding Frequency",
      resultTitle: "Projected Maturity Balance",
      exportCsv: "Export CSV",
      print: "Print Statement",
      clientSafe: "Client-Side Privacy Safe",
      tenure3m: "3 Months (0.25 Yrs)",
      tenure6m: "6 Months (0.5 Yrs)",
      tenure1y: "1 Year",
      tenure2y: "2 Years",
      tenure3y: "3 Years",
      tenure5y: "5 Years",
      freqAnnually: "Annually (At Maturity)",
      freqQuarterly: "Quarterly (4x / year)",
      freqMonthly: "Monthly (12x / year)",
      basedOn: "Based on",
      totalPrincipal: "Total Principal Deposited",
      totalInterest: "Total Interest Yield",
      milestoneTitle: "Milestone Growth Schedule",
      milestoneDesc: "Indicative non-compounded withholding tax rates excluded",
      colPeriod: "Period Milestone",
      colPrincipal: "Principal Deposited",
      colInterest: "Accrued Interest",
      colTotal: "Total Estimated Value",
    },
    quiz: {
      title: "Find your ideal account type",
      subtitle: "Answer 4 quick questions. We'll suggest an account type — we'll never tell you which bank to choose.",
      duration: "~1 minute",
      startBtn: "Start the quiz",
      skipBtn: "Skip — Browse all banks",
      calculating: "Calculating your result…",
      recommended: "Recommended Account Type",
      fdTitle: "Fixed Deposit (FD)",
      rdTitle: "Recurring Deposit (RD)",
      savingsTitle: "Savings Account",
      fdReason: "Because you have a lump sum and want predictable returns by locking funds securely.",
      rdReason: "Because you save monthly and want steady, disciplined growth.",
      savingsReason: "Because you require easy, penalty-free access to your money at any time.",
      browseBtn: "Browse matching banks",
      retakeBtn: "Retake the quiz",
      neutrality: "DepositLK neutrality policy: No bank name will ever appear here.",
      step: (current, total) => `Step ${current} of ${total}`,
      back: "Back",
      next: "Next",
      seeRecommendation: "See my recommendation",
    },
    browse: {
      title: "All banks (A–Z)",
      subtitle: (count) => `Showing ${count} licensed deposit institutions`,
      searchPlaceholder: "Search banks or account types...",
      allTypes: "All Account Types",
      fdType: "Fixed Deposit (FD)",
      rdType: "Recurring Deposit (RD)",
      savingsType: "Savings Account",
      activeFilters: "Active filters:",
      typePrefix: "Type:",
      queryPrefix: "Query:",
      clearAll: "Clear all",
      noBanksTitle: "No banks match your filters",
      noBanksDesc: "Try searching a different bank name or reset the account type filter.",
      clearFiltersBtn: "Clear all filters",
    },
    compare: {
      breadcrumbDir: "Directory",
      breadcrumbCompare: "Side-by-Side Comparison",
      title: "Compare Bank Terms",
      subtitle: "Compare up to 3 licensed institutions side-by-side with verified rates and penalty rules.",
      shareBtn: "Share Comparison",
      copiedBtn: "Link Copied!",
      bankSlot: (num) => `Bank Slot ${num}`,
      addBankBtn: "+ Add Bank to Compare",
      specHeader: "Specification",
      availAccHeader: "Available Accounts",
      fdRateHeader: "1-Year FD Rate",
      savingsRateHeader: "Base Savings Rate",
      penaltyHeader: "Early Withdrawal Penalty",
      websiteHeader: "Official Website",
      visitPortal: "Visit portal",
      loading: "Loading comparison...",
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
      subtitle: "අනුග්‍රාහක ප්‍රචාරණයන්ගෙන් තොරව ස්ථාවර තැන්පතු, පුනරාවර්තී තැන්පතු සහ ඉතුරුම් ගිණුම් පිළිබඳ නිවැරදි තොරතුරු ලබා ගන්න.",
      ctaQuiz: "සුදුසු ගිණුම සොයන්න",
      ctaBrowse: "සියලු බැංකු A–Z",
    },
    calculator: {
      title: "තැන්පතු පොලී ගණකය",
      subtitle: "ප්‍රතිලාභ සහ පොලී වර්ධනය පුද්ගලිකව හා ක්ෂණිකව ගණනය කරගන්න.",
      fdTab: "ස්ථාවර තැන්පතු (තනි මුදලක්)",
      rdTab: "පුනරාවර්තී තැන්පතු (මාසික)",
      amountLabelFD: "ආරම්භක තැන්පතු මුදල (රු.)",
      amountLabelRD: "මාසික තැන්පතු මුදල (රු.)",
      rateLabel: "වාර්ෂික පොලී අනුපාතය (%)",
      tenureLabel: "තැන්පතු කාලය (වසර)",
      freqLabel: "පොලී ගණනය කරන වාර ගණන",
      resultTitle: "කල්පිරීමේ ඇස්තමේන්තුගත වටිනාකම",
      exportCsv: "CSV බාගන්න",
      print: "මුද්‍රණය කරන්න",
      clientSafe: "පෞද්ගලිකත්වය සුරක්ෂිතයි",
      tenure3m: "මාස 3",
      tenure6m: "මාස 6",
      tenure1y: "වසර 1",
      tenure2y: "වසර 2",
      tenure3y: "වසර 3",
      tenure5y: "වසර 5",
      freqAnnually: "වාර්ෂිකව (කල්පිරෙන විට)",
      freqQuarterly: "කාර්තුවකට වරක් (වසරකට 4 වතාවක්)",
      freqMonthly: "මාසිකව (වසරකට 12 වතාවක්)",
      basedOn: "මත පදනම්ව",
      totalPrincipal: "මුළු තැන්පතු මුදල",
      totalInterest: "මුළු පොලී ආදායම",
      milestoneTitle: "කාලසීමා වර්ධන සටහන",
      milestoneDesc: "අනුමාන අගයන් පමණි, බදු අඩු කිරීම් ඇතුළත් කර නැත",
      colPeriod: "කාලසීමාව",
      colPrincipal: "තැන්පතු මුදල",
      colInterest: "එකතු වූ පොලිය",
      colTotal: "ඇස්තමේන්තුගත මුළු අගය",
    },
    quiz: {
      title: "ඔබට වඩාත් සුදුසු ගිණුම තෝරන්න",
      subtitle: "ප්‍රශ්න 4කට පිළිතුරු දෙන්න. ඔබට ගැළපෙන ගිණුම් වර්ගය අපි යෝජනා කරන්නෙමු.",
      duration: "විනාඩියක් පමණි",
      startBtn: "ප්‍රශ්නාවලිය අරඹන්න",
      skipBtn: "මඟ හරින්න — බැංකු බලන්න",
      calculating: "ප්‍රතිඵල ගණනය කරමින්…",
      recommended: "නිර්දේශිත ගිණුම් වර්ගය",
      fdTitle: "ස්ථාවර තැන්පතු (FD)",
      rdTitle: "පුනරාවර්තී තැන්පතු (RD)",
      savingsTitle: "ඉතුරුම් ගිණුම",
      fdReason: "මක්නිසාද යත් ඔබට එකවර විශාල මුදලක් ආයෝජනය කර ස්ථිර ප්‍රතිලාභයක් ලබා ගැනීමට අවශ්‍ය බැවිනි.",
      rdReason: "මක්නිසාද යත් ඔබ මාසිකව ඉතුරුම් කරමින් ක්‍රමානුකූල වර්ධනයක් අපේක්ෂා කරන බැවිනි.",
      savingsReason: "මක්නිසාද යත් ඔබට අවශ්‍ය ඕනෑම වේලාවක ඔබේ මුදල් පහසුවෙන් ලබා ගැනීමට අවශ්‍ය බැවිනි.",
      browseBtn: "ගැළපෙන බැංකු බලන්න",
      retakeBtn: "ප්‍රශ්නාවලිය නැවත කරන්න",
      neutrality: "DepositLK ස්වාධීනත්ව ප්‍රතිපත්තිය: කිසිදු බැංකුවක නමක් මෙහි සඳහන් නොවේ.",
      step: (current, total) => `පියවර ${current} / ${total}`,
      back: "ආපසු",
      next: "ඊළඟට",
      seeRecommendation: "මගේ නිර්දේශය බලන්න",
    },
    browse: {
      title: "සියලු බැංකු (A–Z)",
      subtitle: (count) => `ලියාපදිංචි බැංකු සහ මූල්‍ය ආයතන ${count} ක් පෙන්වයි`,
      searchPlaceholder: "බැංකුවක් හෝ ගිණුම් වර්ගයක් සොයන්න...",
      allTypes: "සියලු ගිණුම් වර්ග",
      fdType: "ස්ථාවර තැන්පතු (FD)",
      rdType: "පුනරාවර්තී තැන්පතු (RD)",
      savingsType: "ඉතුරුම් ගිණුම",
      activeFilters: "ක්‍රියාකාරී ෆිල්ටර්:",
      typePrefix: "වර්ගය:",
      queryPrefix: "සෙවුම:",
      clearAll: "සියල්ල ඉවත් කරන්න",
      noBanksTitle: "ඔබගේ සෙවුමට ගැළපෙන බැංකු නොමැත",
      noBanksDesc: "වෙනත් නමක් සොයා බැලීමට හෝ ගිණුම් වර්ගය වෙනස් කිරීමට උත්සාහ කරන්න.",
      clearFiltersBtn: "ෆිල්ටර් ඉවත් කරන්න",
    },
    compare: {
      breadcrumbDir: "නාමාවලිය",
      breadcrumbCompare: "සංසන්දනය",
      title: "බැංකු කොන්දේසි සසඳන්න",
      subtitle: "බැංකු 3ක් දක්වා එකවර තෝරාගෙන ඔවුන්ගේ පොලී අනුපාත සහ නීති සංසන්දනය කරන්න.",
      shareBtn: "සංසන්දනය බෙදාගන්න",
      copiedBtn: "දිගුව පිටපත් කළා!",
      bankSlot: (num) => `බැංකුව ${num}`,
      addBankBtn: "+ බැංකුවක් එක් කරන්න",
      specHeader: "විශේෂාංගය",
      availAccHeader: "ලබා ගත හැකි ගිණුම්",
      fdRateHeader: "වසර 1 FD අනුපාතය",
      savingsRateHeader: "සාමාන්‍ය ඉතුරුම් අනුපාතය",
      penaltyHeader: "කල්පිරීමට පෙර මුදල් ගැනීමේ දඩුවම්",
      websiteHeader: "නිල වෙබ් අඩවිය",
      visitPortal: "වෙබ් අඩවියට පිවිසෙන්න",
      loading: "සංසන්දනය පූරණය වෙමින් පවතී...",
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
      subtitle: "விளம்பர சார்பின்றி நிலையான வைப்பு, தொடர் வைப்பு மற்றும் சேமிப்புக் கணக்குகள் பற்றிய துல்லியமான தகவல்களைப் பெறுங்கள்.",
      ctaQuiz: "பொருத்தமான கணக்கைக் காண்க",
      ctaBrowse: "அனைத்து வங்கிகள் A–Z",
    },
    calculator: {
      title: "வைப்பு வளர்ச்சி கணிப்பான்",
      subtitle: "முதிர்வுத் தொகை மற்றும் வட்டி வருமானங்களை பாதுகாப்பாக கணக்கிடுங்கள்.",
      fdTab: "நிலையான வைப்பு (ஒட்டுமொத்த)",
      rdTab: "தொடர் வைப்பு (மாதாந்த)",
      amountLabelFD: "ஆரம்ப வைப்புத் தொகை (LKR)",
      amountLabelRD: "மாதாந்த வைப்புத் தொகை (LKR)",
      rateLabel: "வருடாந்த வட்டி விகிதம் (%)",
      tenureLabel: "வைப்புக் காலம் (ஆண்டுகள்)",
      freqLabel: "வட்டி கணக்கிடப்படும் காலம்",
      resultTitle: "மதிப்பிடப்பட்ட முதிர்வுத் தொகை",
      exportCsv: "CSV பதிவிறக்குக",
      print: "அச்சிடுக",
      clientSafe: "பாதுகாப்பானது",
      tenure3m: "3 மாதங்கள்",
      tenure6m: "6 மாதங்கள்",
      tenure1y: "1 வருடம்",
      tenure2y: "2 வருடங்கள்",
      tenure3y: "3 வருடங்கள்",
      tenure5y: "5 வருடங்கள்",
      freqAnnually: "ஆண்டுதோறும்",
      freqQuarterly: "காலாண்டு (ஆண்டுக்கு 4 முறை)",
      freqMonthly: "மாதாந்தம் (ஆண்டுக்கு 12 முறை)",
      basedOn: "அடிப்படையில்",
      totalPrincipal: "மொத்த வைப்புத் தொகை",
      totalInterest: "மொத்த வட்டி வருமானம்",
      milestoneTitle: "கால கட்ட வளர்ச்சி அறிக்கை",
      milestoneDesc: "மதிப்பிடப்பட்ட தொகைகள், வரி கழிவுகள் உள்ளடக்கப்படவில்லை",
      colPeriod: "கால கட்டம்",
      colPrincipal: "வைப்புத் தொகை",
      colInterest: "பெறப்பட்ட வட்டி",
      colTotal: "மொத்த தொகை",
    },
    quiz: {
      title: "பொருத்தமான கணக்கைக் காண்க",
      subtitle: "4 கேள்விகளுக்கு பதிலளிக்கவும். உங்களுக்கு ஏற்ற கணக்கு வகையை பரிந்துரைக்கிறோம்.",
      duration: "1 நிமிடம்",
      startBtn: "தொடங்கவும்",
      skipBtn: "தவிர்க்க — வங்கிகளை பார்க்க",
      calculating: "முடிவை கணக்கிடுகிறது…",
      recommended: "பரிந்துரைக்கப்படும் கணக்கு",
      fdTitle: "நிலையான வைப்பு (FD)",
      rdTitle: "தொடர் வைப்பு (RD)",
      savingsTitle: "சேமிப்புக் கணக்கு",
      fdReason: "உங்களிடம் ஒரு பெரிய தொகை இருப்பதால், அதனை நிரந்தரமாக வைப்பிலிட்டு நிலையான வருமானத்தை பெற விரும்புகிறீர்கள்.",
      rdReason: "நீங்கள் மாதந்தோறும் சேமிக்க விரும்புகிறீர்கள் மற்றும் சீரான வளர்ச்சியை எதிர்பார்க்கிறீர்கள்.",
      savingsReason: "தேவையான எந்த நேரத்திலும் உங்கள் பணத்தை இலகுவாக பெற விரும்புகிறீர்கள்.",
      browseBtn: "பொருத்தமான வங்கிகளைப் பார்க்க",
      retakeBtn: "மீண்டும் தொடங்கவும்",
      neutrality: "DepositLK நடுநிலைக் கொள்கை: எந்த வங்கியின் பெயரும் இங்கு தோன்றாது.",
      step: (current, total) => `படி ${current} / ${total}`,
      back: "பின்செல்",
      next: "அடுத்து",
      seeRecommendation: "எனது பரிந்துரையை பார்க்க",
    },
    browse: {
      title: "அனைத்து வங்கிகள் (A–Z)",
      subtitle: (count) => `${count} உரிமம் பெற்ற நிதி நிறுவனங்களைக் காட்டுகிறது`,
      searchPlaceholder: "வங்கிகள் அல்லது கணக்கு வகைகளைத் தேட...",
      allTypes: "அனைத்து கணக்குகள்",
      fdType: "நிலையான வைப்பு (FD)",
      rdType: "தொடர் வைப்பு (RD)",
      savingsType: "சேமிப்புக் கணக்கு",
      activeFilters: "வடிகட்டிகள்:",
      typePrefix: "வகை:",
      queryPrefix: "தேடல்:",
      clearAll: "அனைத்தையும் நீக்க",
      noBanksTitle: "வடிகட்டிகளுக்கு ஏற்ற வங்கிகள் இல்லை",
      noBanksDesc: "வேறு வங்கிப் பெயரைத் தேடவும் அல்லது கணக்கு வகையை மாற்றவும்.",
      clearFiltersBtn: "வடிகட்டிகளை நீக்க",
    },
    compare: {
      breadcrumbDir: "வங்கி விபரம்",
      breadcrumbCompare: "ஒப்பீடு",
      title: "வங்கி நிபந்தனைகளை ஒப்பிடவும்",
      subtitle: "3 வங்கிகள் வரை ஒரே நேரத்தில் தெரிவு செய்து அவற்றின் வட்டி வீதங்களை ஒப்பிடவும்.",
      shareBtn: "பகிரவும்",
      copiedBtn: "பிரதி செய்யப்பட்டது!",
      bankSlot: (num) => `வங்கி ${num}`,
      addBankBtn: "+ வங்கியைச் சேர்க்க",
      specHeader: "விவரக்குறிப்பு",
      availAccHeader: "கணக்கு வகைகள்",
      fdRateHeader: "1-வருட FD வீதம்",
      savingsRateHeader: "சேமிப்பு வட்டி வீதம்",
      penaltyHeader: "முன்கூட்டியே பணம் எடுப்பதற்கான அபராதம்",
      websiteHeader: "உத்தியோகபூர்வ இணையத்தளம்",
      visitPortal: "இணையத்தளத்திற்குச் செல்ல",
      loading: "ஒப்பீட்டைப் ஏற்றுகிறது...",
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