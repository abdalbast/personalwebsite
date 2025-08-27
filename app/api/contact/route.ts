import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await req.json();
    // Stub: Plug your email service (e.g., Resend) here.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
