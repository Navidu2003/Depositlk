-- CreateTable
CREATE TABLE "RateSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bankSlug" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,
    "proposedRate" REAL NOT NULL,
    "sourceUrl" TEXT,
    "userEmail" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending_review',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
