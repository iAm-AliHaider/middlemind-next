"use client";

import { motion } from "framer-motion";

const words = ["HR platforms.", "AI accounting.", "Legal tech.", "Voice agents.", "Real estate.", "What's yours?"];

export default function HeroSection({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-white px-6 pt-24 pb-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full border border-purple/20 bg-purple/5 px-4 py-1.5 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-purple animate-pulse-dot" />
          <span className="text-xs font-semibold tracking-widest uppercase text-purple">AI Product Studio</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
        >
          We build what<br />
          <span className="text-purple">others can&apos;t.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-sm sm:max-w-xl text-base sm:text-lg leading-relaxed text-gray-600 px-2"
        >
          Enterprise AI products shipped at startup speed.
          10+ platforms live across HR, fintech, legal, real estate and more —
          all powered by voice, all built by MiddleMind.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onTalkToMaya}
            className="rounded-full bg-purple px-8 py-3.5 text-sm font-semibold text-white hover:bg-purple-dark transition-colors shadow-lg shadow-purple/20"
          >
            Talk to Maya — free consultation
          </button>
          <a
            href="#products"
            className="rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            See what we&apos;ve built
          </a>
        </motion.div>

        {/* Scrolling industry ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 overflow-hidden"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">We ship into</p>
          <div className="flex gap-6">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...words, ...words].map((w, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple/40" />
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
