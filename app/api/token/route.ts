import { AccessToken } from "livekit-server-sdk";
import { NextRequest, NextResponse } from "next/server";

const LIVEKIT_API_KEY = "APIuZr5fSExnTri";
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || "your-secret-here";

export async function GET(req: NextRequest) {
  const room = req.nextUrl.searchParams.get("room") || "maya-room";
  const username = req.nextUrl.searchParams.get("username") || `visitor-${Date.now()}`;

  const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
    identity: username,
  });

  at.addGrant({
    roomJoin: true,
    room,
    canPublish: true,
    canSubscribe: true,
  });

  const token = await at.toJwt();

  return NextResponse.json({ token });
}
