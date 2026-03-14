"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LiveKitRoom,
  RoomAudioRenderer,
  useVoiceAssistant,
  useRoomContext,
} from "@livekit/components-react";
import { RoomEvent } from "livekit-client";

const LIVEKIT_URL = "wss://agent-ls5zwwm3.livekit.cloud";

type WidgetState = "idle" | "pre-call" | "connecting" | "in-call" | "post-call";

interface TranscriptEntry {
  speaker: "agent" | "visitor";
  text: string;
}

export default function VoiceWidget({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [state, setState] = useState<WidgetState>("idle");
  const [token, setToken] = useState<string | null>(null);

  const openModal = useCallback(() => {
    setState("pre-call");
  }, []);

  useEffect(() => {
    if (isOpen && state === "idle") {
      openModal();
    }
    if (!isOpen) {
      setState("idle");
      setToken(null);
    }
  }, [isOpen, state, openModal]);

  const startCall = async () => {
    setState("connecting");
    try {
      const username = `visitor-${Date.now()}`;
      const res = await fetch(`/api/token?room=maya-room&username=${username}`);
      const data = await res.json();
      setToken(data.token);
      setState("in-call");
    } catch {
      setState("pre-call");
    }
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={openModal}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-purple px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-purple-dark hover:shadow-xl cursor-pointer"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-teal animate-pulse-ring" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
          </span>
          Talk to Maya
        </button>
      )}

      {/* Modal overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            >
              {state === "pre-call" && <PreCallView onStart={startCall} onDismiss={onClose} />}
              {state === "connecting" && <ConnectingView />}
              {state === "in-call" && token && (
                <LiveKitRoom
                  serverUrl={LIVEKIT_URL}
                  token={token}
                  connect={true}
                  audio={true}
                >
                  <RoomAudioRenderer />
                  <InCallView onEnd={() => setState("post-call")} />
                </LiveKitRoom>
              )}
              {state === "post-call" && <PostCallView onNewCall={() => setState("pre-call")} onClose={onClose} />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PreCallView({ onStart, onDismiss }: { onStart: () => void; onDismiss: () => void }) {
  const chips = ["Product Inquiries", "Technical Questions", "Partnership Discussions"];
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple to-teal">
        <span className="font-heading text-2xl font-800 text-white">M</span>
      </div>
      <h3 className="mt-4 font-heading text-xl font-700 text-gray-900">Maya</h3>
      <p className="text-sm text-gray-500">AI Consultant at MiddleMind</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {chips.map((chip) => (
          <span key={chip} className="rounded-full bg-purple/10 px-3 py-1 text-xs font-medium text-purple">
            {chip}
          </span>
        ))}
      </div>
      <button
        onClick={onStart}
        className="mt-6 w-full rounded-full bg-purple py-3 text-sm font-semibold text-white transition-all hover:bg-purple-dark cursor-pointer"
      >
        Start Call
      </button>
      <button
        onClick={onDismiss}
        className="mt-3 text-sm text-gray-400 transition-colors hover:text-gray-600 cursor-pointer"
      >
        Dismiss
      </button>
    </div>
  );
}

function ConnectingView() {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-purple/20 animate-ripple" />
        <span className="absolute inset-0 rounded-full bg-purple/15 animate-ripple-delay-1" />
        <span className="absolute inset-0 rounded-full bg-purple/10 animate-ripple-delay-2" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple to-teal">
          <span className="font-heading text-xl font-800 text-white">M</span>
        </div>
      </div>
      <p className="mt-6 text-sm font-medium text-gray-600">Connecting to Maya...</p>
    </div>
  );
}

function InCallView({ onEnd }: { onEnd: () => void }) {
  const [seconds, setSeconds] = useState(0);
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const voiceAssistant = useVoiceAssistant();
  const room = useRoomContext();

  const agentState = voiceAssistant.state;

  // Timer
  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // Listen for disconnection
  useEffect(() => {
    const handler = () => onEnd();
    room.on(RoomEvent.Disconnected, handler);
    return () => { room.off(RoomEvent.Disconnected, handler); };
  }, [room, onEnd]);

  // Listen for transcription data
  useEffect(() => {
    const handler = (payload: Uint8Array) => {
      try {
        const text = new TextDecoder().decode(payload);
        const data = JSON.parse(text);
        if (data.text) {
          setTranscript((prev) => [
            ...prev,
            { speaker: data.speaker === "agent" ? "agent" : "visitor", text: data.text },
          ]);
        }
      } catch {
        // ignore non-JSON data
      }
    };
    room.on(RoomEvent.DataReceived, handler);
    return () => { room.off(RoomEvent.DataReceived, handler); };
  }, [room]);

  // Auto-scroll transcript
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [transcript]);

  const toggleMute = () => {
    const localParticipant = room.localParticipant;
    localParticipant.setMicrophoneEnabled(isMuted);
    setIsMuted(!isMuted);
  };

  const endCall = () => {
    room.disconnect();
    onEnd();
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const statusText =
    agentState === "speaking"
      ? "Maya is speaking..."
      : agentState === "listening"
        ? "Listening..."
        : "Connected";

  return (
    <div className="flex flex-col items-center text-center">
      {/* Breathing orb */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-purple to-teal animate-breathe" />
      </div>

      <p className="mt-4 text-sm font-medium text-gray-600">{statusText}</p>
      <p className="mt-1 text-xs text-gray-400">{formatTime(seconds)}</p>

      {/* Transcript */}
      <div ref={transcriptRef} className="mt-4 w-full max-h-[200px] overflow-y-auto rounded-lg bg-gray-50 p-3 text-left">
        {transcript.length === 0 && (
          <p className="text-xs text-gray-400 text-center">Conversation will appear here...</p>
        )}
        {transcript.map((entry, i) => (
          <div key={i} className={`mb-2 ${entry.speaker === "visitor" ? "text-right" : "text-left"}`}>
            <span className={`text-xs font-semibold ${entry.speaker === "agent" ? "text-purple" : "text-gray-500"}`}>
              {entry.speaker === "agent" ? "Maya" : "You"}
            </span>
            <p className="text-sm text-gray-700">{entry.text}</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={toggleMute}
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all cursor-pointer ${
            isMuted ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
          }`}
        >
          <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {isMuted ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 19L5 5m14 0v6a3 3 0 01-5.356 1.857M12 19.5v1.25M8.25 21h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 016 0v1" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            )}
          </svg>
        </button>
        <button
          onClick={endCall}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white transition-all hover:bg-red-600 cursor-pointer"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function PostCallView({ onNewCall, onClose }: { onNewCall: () => void; onClose: () => void }) {
  const nextSteps = [
    "Review our product portfolio",
    "Schedule a technical deep-dive",
    "Request a custom demo",
  ];

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
        <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h3 className="mt-4 font-heading text-xl font-700 text-gray-900">Call Complete</h3>

      <div className="mt-6 w-full text-left">
        <h4 className="text-sm font-semibold text-gray-900">Topics Discussed</h4>
        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple" />
            MiddleMind product capabilities
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple" />
            AI integration opportunities
          </li>
        </ul>
      </div>

      <div className="mt-4 w-full text-left">
        <h4 className="text-sm font-semibold text-gray-900">Next Steps</h4>
        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          {nextSteps.map((step) => (
            <li key={step} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
              {step}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex w-full gap-3">
        <a
          href="mailto:hello@middlemind.ai"
          className="flex-1 rounded-full border border-purple/30 py-2.5 text-sm font-semibold text-purple transition-all hover:bg-purple/5"
        >
          Contact Us
        </a>
        <button
          onClick={onNewCall}
          className="flex-1 rounded-full bg-purple py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-dark cursor-pointer"
        >
          New Call
        </button>
      </div>
      <button
        onClick={onClose}
        className="mt-3 text-sm text-gray-400 transition-colors hover:text-gray-600 cursor-pointer"
      >
        Close
      </button>
    </div>
  );
}
