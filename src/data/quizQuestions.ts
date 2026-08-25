import { QuizQuestion } from "@/types";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How soon might you need to access this money?",
    options: [
      { label: "Anytime — I want easy access", targetType: "Savings" },
      { label: "Not for about a year", targetType: "FD" },
      { label: "I can lock it away for 1–5 years", targetType: "FD" },
      { label: "I plan to save a fixed amount every month", targetType: "RD" },
    ],
  },
  {
    id: 2,
    question: "How are you planning to deposit your funds?",
    options: [
      { label: "One lump sum right now", targetType: "FD" },
      { label: "Small regular monthly amounts", targetType: "RD" },
      { label: "Flexible deposits whenever I have extra cash", targetType: "Savings" },
      { label: "Emergency backup funds only", targetType: "Savings" },
    ],
  },
  {
    id: 3,
    question: "What is your main savings goal?",
    options: [
      { label: "Guaranteed maximum returns on locked capital", targetType: "FD" },
      { label: "Building a disciplined monthly savings habit", targetType: "RD" },
      { label: "Everyday transactions and bill payments", targetType: "Savings" },
      { label: "Short-term buffer for sudden expenses", targetType: "Savings" },
    ],
  },
  {
    id: 4,
    question: "Can you commit to not withdrawing during the tenure?",
    options: [
      { label: "Yes, I won't touch it until maturity", targetType: "FD" },
      { label: "Yes, as long as I can contribute monthly", targetType: "RD" },
      { label: "No, I need the freedom to withdraw anytime", targetType: "Savings" },
      { label: "Unsure, I prefer zero withdrawal penalties", targetType: "Savings" },
    ],
  },
];