import { NextResponse } from "next/server";
import { sendCounsellingEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, phone, email, course, interestedIn, preferredContact, message, sourcePage } = body;

    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, error: "Full name and phone number are required." },
        { status: 400 }
      );
    }

    const result = await sendCounsellingEmail({
      fullName,
      phone,
      email,
      course,
      interestedIn,
      preferredContact,
      message,
      sourcePage,
    });

    return NextResponse.json({
      success: true,
      message: "Counselling enquiry received successfully.",
      data: result,
    });
  } catch (error) {
    console.error("API /api/send-counselling error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
