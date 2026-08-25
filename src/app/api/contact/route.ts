import { NextRequest, NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type = "general", name, phone, email, carName, message } = body;

    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide your name and either phone or email." },
        { status: 400 }
      );
    }

    const result = await sendContactNotification({
      type,
      name,
      phone,
      email,
      carName,
      message,
    });

    return NextResponse.json({
      ok: true,
      simulated: result.simulated,
      recipient: result.recipient,
      message: "Notification sent successfully.",
    });
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : "Failed to process contact request";
    console.error("[TurboRide Contact API Error]", error);
    return NextResponse.json({ ok: false, error: errMessage }, { status: 500 });
  }
}
