import { NextResponse } from "next/server";
import { rateSubmissions, addSubmission, updateSubmissionStatus } from "@/lib/rateStore";

// GET: Fetch all submissions for the Admin Panel
export async function GET() {
  return NextResponse.json({
    success: true,
    data: rateSubmissions,
  });
}

// POST: Add a new rate suggestion from the public modal
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { bankSlug, accountType, proposedRate, sourceUrl, userEmail } = body;

    if (!bankSlug || !accountType || proposedRate === undefined || proposedRate === null) {
      return NextResponse.json(
        { error: "Missing required fields: bankSlug, accountType, and proposedRate are required." },
        { status: 400 }
      );
    }

    if (typeof proposedRate !== "number" || proposedRate <= 0 || proposedRate > 50) {
      return NextResponse.json(
        { error: "Invalid rate value. Must be a percentage between 0 and 50." },
        { status: 422 }
      );
    }

    const newSubmission = addSubmission({
      bankSlug,
      accountType,
      proposedRate,
      sourceUrl: sourceUrl || undefined,
      userEmail: userEmail || undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Rate suggestion received and queued for verification.",
        data: newSubmission,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process request payload." },
      { status: 500 }
    );
  }
}

// PATCH: Update review status (approve / reject)
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !["approved", "rejected"].includes(status)) {
      return NextResponse.json(
        { error: "Valid ID and status ('approved' | 'rejected') are required." },
        { status: 400 }
      );
    }

    const updated = updateSubmissionStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: "Submission not found." }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Submission status updated to ${status}.`,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}