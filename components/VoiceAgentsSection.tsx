"use client";

import { motion } from "framer-motion";

const bars = [2, 4, 7, 5, 9, 6, 3, 8, 4, 6, 9, 5, 7, 3, 8, 6, 4, 7, 5, 9, 6, 8, 3, 5, 7, 4, 9, 6];

function Waveform() {
  return (
    <div className="flex items-center justify-center gap-1 h-12">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-purple"
          style={{
            height: `${h * 4}px`,
            animation: `waveform ${0.6 + (i % 5) * 0.15}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.04}s`,
            opacity: 0.4 + (h / 9) * 0.6,
          }}
        />
      ))}
    </div>
  );
}

const agents = [
  { name: "Maya", role: "AI Consultant", color: "#7c3aed", bg: "#f5f3ff", desc: "24/7 product consultation and demo booking. Speak naturally — she handles the rest.", tools: "Always on" },
  { name: "Taliq", role: "HR Voice Agent", color: "#059669", bg: "#f0fdf4", desc: "116 tools built in. Leave requests, GOSI queries, Saudi Labor Law compliance — all by voice.", tools: "116 tools" },
  { name: "Finvox", role: "Financial Voice", color: "#2563eb", bg: "#eff6ff", desc: "Loan apps, portfolio queries, OTP onboarding — post-call summaries sent to WhatsApp.", tools: "33 tools" },
];

const stats = [
  { value: "<200ms", label: "Voice response latency" },
  { value: "100+", label: "Live voice tools" },
  { value: "24/7", label: "Agent uptime" },
  { value: "3", label: "Agents in production" },
];

export default function VoiceAgentsSection({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  return (
    <section id="voice" className="py-32 bg-surface-2 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple mb-4">Voice AI</p>
          <h2 className="font-heading text-5xl font-extrabold tracking-tight text-ink leading-tight sm:text-6xl">
            The interface<br />is your voice.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            No forms. No menus. No waiting. Speak to our agents and they respond, 
            act, and follow up — in under 200ms.
          </p>
        </div>

        {/* Waveform visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 rounded-3xl bg-white border border-gray-100 shadow-sm p-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            {/* Left: live demo prompt */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" style={{ animation: "pulse-dot 1.5s ease-in-out infinite" }} />
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Maya is live</span>
              </div>
              <p className="font-heading text-2xl font-bold text-ink leading-snug">
                &ldquo;Tell me about your HR challenges<br />and I&apos;ll show you what Taliq can do.&rdquo;
              </p>
              <p className="mt-3 text-sm text-gray-400">— Example of what Maya handles</p>
              <button
                onClick={onTalkToMaya}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-purple px-6 py-3 text-sm font-semibold text-white hover:bg-purple-dark transition-colors shadow-lg shadow-purple/20"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
                Start talking now
              </button>
            </div>

            {/* Right: waveform */}
            <div className="flex-shrink-0 w-full sm:w-64">
              <Waveform />
              <p className="mt-3 text-center text-xs text-gray-400">LiveKit · Deepgram · Claude</p>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-gray-100 p-6 text-center"
            >
              <p className="font-heading text-3xl font-extrabold text-purple">{s.value}</p>
              <p className="mt-1 text-xs text-gray-400 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Agent cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {agents.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{ backgroundColor: a.bg }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-heading text-xl font-extrabold text-ink">{a.name}</h4>
                  <p className="text-xs font-semibold mt-0.5" style={{ color: a.color }}>{a.role}</p>
                </div>
                <span className="rounded-full px-2.5 py-1 text-xs font-bold text-white" style={{ backgroundColor: a.color }}>
                  {a.tools}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8 text-center">How it works</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            {[
              { step: "Speak", sub: "Natural language" },
              { step: "Transcribe", sub: "Deepgram <80ms" },
              { step: "Reason", sub: "Claude / GPT-4o" },
              { step: "Act", sub: "100+ live tools" },
              { step: "Respond", sub: "Voice + WhatsApp" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-purple flex items-center justify-center text-white font-bold text-sm shadow-md shadow-purple/20">
                    {i + 1}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-ink">{item.step}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
                {i < 4 && (
                  <svg className="h-4 w-4 text-gray-300 shrink-0 hidden sm:block mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
