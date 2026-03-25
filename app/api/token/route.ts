import { AccessToken, AgentDispatchClient } from "livekit-server-sdk";
import { NextRequest, NextResponse } from "next/server";

const LIVEKIT_URL = process.env.LIVEKIT_URL || "wss://agent-ls5zwwm3.livekit.cloud";
const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY!;
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET!;

export async function GET(req: NextRequest) {
  const room = req.nextUrl.searchParams.get("room") || "maya-room";
  const username = req.nextUrl.searchParams.get("username") || `visitor-${Date.now()}`;

  // Generate access token
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

  // Dispatch the Maya agent to the room
  try {
    const httpUrl = LIVEKIT_URL.replace("wss://", "https://").replace("ws://", "http://");
    const dispatch = new AgentDispatchClient(httpUrl, LIVEKIT_API_KEY, LIVEKIT_API_SECRET);
    await dispatch.createDispatch(room, "middlemind-consultant");
  } catch {
    // Agent may already be in room - safe to ignore
  }

  return NextResponse.json({ token });
}
