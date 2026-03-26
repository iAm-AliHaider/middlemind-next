"use client";

import { motion } from "framer-motion";

const words = ["HR platforms.", "AI accounting.", "Legal tech.", "Voice agents.", "Real estate.", "What's yours?"];

export default function HeroSection({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  return (
    <section className="relative bg-white overflow-hidden px-5 pt-24 pb-16">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 mb-7"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-purple-600 animate-pulse-dot" />
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-600">AI Product Studio</span>
        </motion.div>

        {/* Headline — controlled size at every breakpoint */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold leading-tight tracking-tight text-gray-900"
          style={{ fontSize: "clamp(2rem, 8vw, 4.5rem)" }}
        >
          We build what<br />
          <span className="text-purple-600">others can&apos;t.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-gray-500"
        >
          Enterprise AI products shipped at startup speed —
          voice agents, fintech platforms, legal tech, and more.
          10+ live products across 5 industries.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={onTalkToMaya}
            className="w-full sm:w-auto rounded-full bg-purple-600 px-7 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200"
          >
            Talk to Maya — free
          </button>
          <a
            href="#products"
            className="w-full sm:w-auto rounded-full border border-gray-200 px-7 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors text-center"
          >
            See what we&apos;ve built
          </a>
        </motion.div>

        {/* Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 overflow-hidden"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">Industries</p>
          <div className="relative overflow-hidden">
            <div className="flex gap-5 animate-marquee whitespace-nowrap">
              {[...words, ...words].map((w, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                  <span className="h-1 w-1 rounded-full bg-purple-400" />
                  {w}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
