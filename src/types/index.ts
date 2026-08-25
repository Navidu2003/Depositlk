export type AccountType = "FD" | "RD" | "Savings";

export interface QuizOption {
  label: string;
  targetType: AccountType;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface BankRate {
  accountType: AccountType;
  tenure: string;
  interestRate: number;
  minDeposit?: number;
  payoutFrequency?: string;
}

export interface Bank {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  initials?: string;
  accountTypes: AccountType[];
  websiteUrl: string;
  earlyWithdrawalPenalty: string;
  documents?: string[];
  requiredDocuments?: string[];
  rates: BankRate[];
}