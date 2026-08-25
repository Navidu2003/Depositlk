export interface RateSubmission {
  id: string;
  bankSlug: string;
  accountType: "FD" | "RD" | "Savings";
  proposedRate: number;
  sourceUrl?: string;
  userEmail?: string;
  submittedAt: string;
  status: "pending_review" | "approved" | "rejected";
}

// Global in-memory storage (persists during runtime, ready for MongoDB/PostgreSQL)
const globalForSubmissions = globalThis as unknown as {
  rateSubmissions: RateSubmission[];
};

export const rateSubmissions =
  globalForSubmissions.rateSubmissions ||
  ([
    {
      id: "sub_init_1",
      bankSlug: "boc",
      accountType: "FD",
      proposedRate: 11.85,
      sourceUrl: "https://www.boc.lk/rates",
      userEmail: "depositor@example.lk",
      submittedAt: new Date(Date.now() - 3600000).toISOString(),
      status: "pending_review",
    },
    {
      id: "sub_init_2",
      bankSlug: "commercial-bank",
      accountType: "Savings",
      proposedRate: 4.1,
      sourceUrl: "https://www.combank.lk",
      submittedAt: new Date(Date.now() - 7200000).toISOString(),
      status: "pending_review",
    },
  ] as RateSubmission[]);

if (process.env.NODE_ENV !== "production") {
  globalForSubmissions.rateSubmissions = rateSubmissions;
}

export function addSubmission(submission: Omit<RateSubmission, "id" | "submittedAt" | "status">): RateSubmission {
  const newEntry: RateSubmission = {
    ...submission,
    id: `sub_${Date.now()}`,
    submittedAt: new Date().toISOString(),
    status: "pending_review",
  };
  rateSubmissions.unshift(newEntry);
  return newEntry;
}

export function updateSubmissionStatus(id: string, status: "approved" | "rejected"): boolean {
  const item = rateSubmissions.find((s) => s.id === id);
  if (item) {
    item.status = status;
    return true;
  }
  return false;
}