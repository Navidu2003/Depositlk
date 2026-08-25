import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { bankSlug, accountType, proposedRate, sourceUrl, userEmail } = body;

    // Validate incoming payload
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

    // In-memory or logging placeholder (ready to connect to a DB like MongoDB/PostgreSQL)
    const submission = {
      id: `sub_${Date.now()}`,
      bankSlug,
      accountType,
      proposedRate,
      sourceUrl: sourceUrl || null,
      userEmail: userEmail || null,
      submittedAt: new Date().toISOString(),
      status: "pending_review",
    };

    return NextResponse.json(
      {
        success: true,
        message: "Rate suggestion received and queued for verification.",
        data: submission,
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