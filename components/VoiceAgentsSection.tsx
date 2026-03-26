"use client";

import { motion } from "framer-motion";

const bars = [2, 5, 8, 4, 9, 6, 3, 7, 5, 9, 4, 8, 3, 6, 9, 5, 7, 4, 8, 6, 3, 9, 5, 7];

function Waveform({ color = "#7c3aed", size = "sm" }: { color?: string; size?: "sm" | "lg" }) {
  const h = size === "lg" ? 5 : 3;
  return (
    <div className={`flex items-center gap-0.5 ${size === "lg" ? "h-10" : "h-6"}`}>
      {bars.map((v, i) => (
        <div
          key={i}
          className="rounded-full w-0.5"
          style={{
            height: `${v * h}px`,
            backgroundColor: color,
            animation: `waveform ${0.5 + (i % 4) * 0.15}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.04}s`,
            opacity: 0.35 + (v / 9) * 0.65,
          }}
        />
      ))}
    </div>
  );
}

// Visual flow steps — icon-driven, no spec text
const flowSteps = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="20" fill="#f5f3ff"/>
        <path d="M20 12a4 4 0 014 4v4a4 4 0 01-8 0v-4a4 4 0 014-4z" fill="#7c3aed"/>
        <path d="M14 22a6 6 0 0012 0" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="28" x2="20" y2="31" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "You speak",
    visual: <Waveform />,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="20" fill="#f0fdf4"/>
        <rect x="11" y="15" width="18" height="3" rx="1.5" fill="#16a34a"/>
        <rect x="11" y="21" width="13" height="3" rx="1.5" fill="#16a34a" opacity="0.5"/>
      </svg>
    ),
    label: "Transcribed",
    visual: (
      <div className="flex gap-0.5 items-end h-4">
        {[3,6,4,7,5,3,6,4,5,7,3,6].map((v,i) => (
          <div key={i} className="w-1 rounded-sm bg-green-400" style={{ height: `${v*2}px`, opacity: 0.5 + v/14 }}/>
        ))}
      </div>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="20" fill="#fff7ed"/>
        <circle cx="20" cy="20" r="5" fill="#ea580c"/>
        <circle cx="20" cy="11" r="2" fill="#ea580c" opacity="0.4"/>
        <circle cx="20" cy="29" r="2" fill="#ea580c" opacity="0.4"/>
        <circle cx="11" cy="20" r="2" fill="#ea580c" opacity="0.4"/>
        <circle cx="29" cy="20" r="2" fill="#ea580c" opacity="0.4"/>
        <line x1="20" y1="13" x2="20" y2="15" stroke="#ea580c" strokeWidth="1.5" opacity="0.4"/>
        <line x1="20" y1="25" x2="20" y2="27" stroke="#ea580c" strokeWidth="1.5" opacity="0.4"/>
        <line x1="13" y1="20" x2="15" y2="20" stroke="#ea580c" strokeWidth="1.5" opacity="0.4"/>
        <line x1="25" y1="20" x2="27" y2="20" stroke="#ea580c" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
    label: "AI reasons",
    visual: (
      <div className="flex gap-1">
        {[1,2,3].map(i => (
          <div key={i} className="h-2 w-2 rounded-full bg-orange-400" style={{ animation: `pulse-dot 1s ease-in-out ${i*0.2}s infinite` }}/>
        ))}
      </div>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="20" fill="#eff6ff"/>
        <rect x="12" y="14" width="7" height="7" rx="2" fill="#2563eb"/>
        <rect x="21" y="14" width="7" height="7" rx="2" fill="#2563eb" opacity="0.5"/>
        <rect x="12" y="23" width="7" height="7" rx="2" fill="#2563eb" opacity="0.5"/>
        <rect x="21" y="23" width="7" height="7" rx="2" fill="#2563eb" opacity="0.3"/>
      </svg>
    ),
    label: "Tools fire",
    visual: (
      <div className="flex gap-1 items-center">
        {["📅","📋","💳"].map((e,i) => (
          <span key={i} className="text-sm" style={{ animation: `pulse-dot 1.2s ease-in-out ${i*0.15}s infinite` }}>{e}</span>
        ))}
      </div>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="20" fill="#f5f3ff"/>
        <path d="M12 17h16a2 2 0 012 2v7a2 2 0 01-2 2H12a2 2 0 01-2-2v-7a2 2 0 012-2z" fill="#7c3aed" opacity="0.15" stroke="#7c3aed" strokeWidth="1.5"/>
        <path d="M16 12h8a2 2 0 012 2v3H14v-3a2 2 0 012-2z" fill="#7c3aed"/>
      </svg>
    ),
    label: "You hear it",
    visual: <Waveform color="#7c3aed" />,
  },
];

const agents = [
  { name: "Maya", role: "Consultant", color: "#7c3aed", bg: "#f5f3ff", emoji: "🧠", tagline: "Book demos, answer questions, scope projects — 24/7." },
  { name: "Taliq", role: "HR Agent", color: "#059669", bg: "#f0fdf4", emoji: "📋", tagline: "Leave, attendance, GOSI, loans — spoken and resolved." },
  { name: "Finvox", role: "Finance Agent", color: "#2563eb", bg: "#eff6ff", emoji: "💬", tagline: "Loan apps, portfolios, OTP onboarding — voice first." },
];

export default function VoiceAgentsSection({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  return (
    <section id="voice" className="py-24 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-4">Voice AI</p>
          <h2 className="font-heading font-extrabold tracking-tight text-gray-900" style={{ fontSize: "clamp(1.75rem, 6vw, 3.5rem)" }}>
            The interface is<br />your voice.
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-sm mx-auto">
            Speak naturally. The agent listens, thinks, and acts — in under 200ms.
          </p>
        </motion.div>

        {/* Visual flow */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center gap-3 flex-1">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {step.icon}
                </motion.div>

                {/* Visual indicator */}
                <div className="h-6 flex items-center">
                  {step.visual}
                </div>

                {/* Label */}
                <p className="text-xs font-semibold text-gray-600 text-center">{step.label}</p>

                {/* Arrow between steps — horizontal on desktop, hidden on mobile */}
                {i < flowSteps.length - 1 && (
                  <div className="hidden sm:flex absolute" style={{ display: "none" }} />
                )}
              </div>
            ))}
          </div>

          {/* Horizontal connector line on desktop */}
          <div className="hidden sm:flex items-center justify-between px-6 mt-2 -mb-6 relative">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
          </div>

          {/* CTA inside card */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse-dot" />
              <p className="text-sm font-medium text-gray-600">Maya is live right now</p>
            </div>
            <button
              onClick={onTalkToMaya}
              className="w-full sm:w-auto rounded-full bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 transition-colors shadow-md shadow-purple-100"
            >
              Try it — talk to Maya
            </button>
          </div>
        </motion.div>

        {/* Live agent cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {agents.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6"
              style={{ backgroundColor: a.bg }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{a.emoji}</span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse-dot" />
                  Live
                </span>
              </div>
              <h4 className="font-heading text-lg font-extrabold text-gray-900">{a.name}</h4>
              <p className="text-xs font-semibold mb-2" style={{ color: a.color }}>{a.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{a.tagline}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
