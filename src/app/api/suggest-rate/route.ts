import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Fetch all submissions for Admin Verification Queue
export async function GET() {
  try {
    const submissions = await prisma.rateSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      data: submissions,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to retrieve rate submissions." },
      { status: 500 }
    );
  }
}

// POST: Save a new rate suggestion from the public modal
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

    const rateNum = Number(proposedRate);
    if (isNaN(rateNum) || rateNum <= 0 || rateNum > 50) {
      return NextResponse.json(
        { error: "Invalid rate value. Must be a percentage between 0 and 50." },
        { status: 422 }
      );
    }

    const newSubmission = await prisma.rateSubmission.create({
      data: {
        bankSlug,
        accountType,
        proposedRate: rateNum,
        sourceUrl: sourceUrl || null,
        userEmail: userEmail || null,
        status: "pending_review",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Rate suggestion received and saved to verification database.",
        data: newSubmission,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to persist rate suggestion." },
      { status: 500 }
    );
  }
}

// PATCH: Approve or Reject a rate submission
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

    const updated = await prisma.rateSubmission.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({
      success: true,
      message: `Submission status updated to ${status}.`,
      data: updated,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to update submission status or record not found." },
      { status: 500 }
    );
  }
}