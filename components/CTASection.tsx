"use client";

import { motion } from "framer-motion";

export default function CTASection({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  return (
    <section className="py-32 bg-ink relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-light mb-6">Get started</p>
          <h2 className="font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Have an idea?<br />
            <span className="text-purple-light">We&apos;ll build it.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
            Talk to Maya right now. No forms, no intro calls, no decks. 
            Describe your problem and walk away with a plan.
          </p>
          <button
            onClick={onTalkToMaya}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-ink hover:bg-gray-100 transition-colors shadow-xl"
          >
            <span className="h-2 w-2 rounded-full bg-purple animate-pulse-dot" />
            Start talking to Maya
          </button>
          <p className="mt-4 text-sm text-gray-500">Free. Instant. No signup.</p>
        </motion.div>
      </div>
    </section>
  );
}
