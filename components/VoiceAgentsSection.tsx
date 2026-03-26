"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Instant Responses",
    description:
      "Sub-200ms voice latency powered by LiveKit and Deepgram. No lag, no awkward pauses — just natural conversation at the speed of thought.",
    icon: (
      <svg className="h-7 w-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Deep Tool Integration",
    description:
      "Agents don't just talk — they act. Create tickets, check compliance, process loan forms, query databases, and send WhatsApp summaries in real time.",
    icon: (
      <svg className="h-7 w-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Always Available",
    description:
      "24/7 uptime on dedicated production servers. No queues, no hold music, no human fatigue. Your AI agent is ready the moment your customer speaks.",
    icon: (
      <svg className="h-7 w-7 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const flow = [
  { step: "Speak", detail: "User talks naturally" },
  { step: "Transcribe", detail: "Deepgram STT < 80ms" },
  { step: "Reason", detail: "Claude / GPT-4o" },
  { step: "Act", detail: "100+ live tools" },
  { step: "Respond", detail: "LiveKit TTS playback" },
];

const liveAgents = [
  { name: "Maya", role: "AI Consultant", desc: "Handles product inquiries, scoping, and booking consultations 24/7." },
  { name: "Taliq", role: "HR Voice Agent", desc: "116 tools — leave requests, attendance, GOSI queries, Saudi Labor Law." },
  { name: "Finvox", role: "Financial Voice Agent", desc: "Loan apps, portfolio queries, OTP onboarding, WhatsApp post-call summaries." },
];

export default function VoiceAgentsSection({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  return (
    <section id="voice-agents" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-purple/10 px-4 py-1.5 text-xs font-semibold text-purple uppercase tracking-widest mb-4">
            Voice AI
          </span>
          <h2 className="font-heading text-3xl font-800 tracking-tight text-gray-900 sm:text-4xl">
            The Future of Human-AI Interaction
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Sub-second latency. Real-time tool calling. Enterprise-grade reliability.
            Our voice agents don&apos;t just respond — they work.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl border border-gray-100 bg-light-bg p-7"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple/10">
                {b.icon}
              </div>
              <h3 className="font-heading text-lg font-700 text-gray-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{b.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 rounded-2xl bg-gradient-to-r from-purple/5 to-teal/5 border border-purple/10 p-10"
        >
          <h3 className="text-center font-heading text-xl font-700 text-gray-900 mb-10">
            How It Works
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            {flow.map((item, i) => (
              <div key={item.step} className="flex items-center gap-3">
                <div className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple text-white font-bold text-sm shadow-md">
                    {i + 1}
                  </div>
                  <p className="mt-2 font-semibold text-sm text-gray-900">{item.step}</p>
                  <p className="text-xs text-gray-400">{item.detail}</p>
                </div>
                {i < flow.length - 1 && (
                  <svg className="h-5 w-5 text-purple/40 hidden sm:block shrink-0 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Live Agents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16"
        >
          <h3 className="text-center font-heading text-xl font-700 text-gray-900 mb-8">
            3 Voice Agents Live in Production
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {liveAgents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-xl border border-purple/15 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-3 w-3 rounded-full bg-green-400 shadow-sm shadow-green-300" />
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Live</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-gray-900">{agent.name}</h4>
                <p className="text-xs font-medium text-purple mb-2">{agent.role}</p>
                <p className="text-sm text-gray-600">{agent.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 text-base mb-5">Experience it yourself — right now, no signup needed.</p>
          <button
            onClick={onTalkToMaya}
            className="rounded-full bg-purple px-8 py-4 text-base font-semibold text-white transition-all hover:bg-purple-dark hover:shadow-lg cursor-pointer"
          >
            Talk to Maya
          </button>
        </motion.div>

      </div>
    </section>
  );
}
