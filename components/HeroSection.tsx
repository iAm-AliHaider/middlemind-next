"use client";

import { motion } from "framer-motion";

const pills = ["HR AI", "Fintech AI", "Legal AI", "Real Estate AI", "Voice Agents", "Security AI"];

export default function HeroSection({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] right-[10%] w-64 h-40 rounded-2xl bg-gradient-to-br from-purple/10 to-teal/10 animate-float-1" />
        <div className="absolute bottom-[20%] left-[8%] w-48 h-32 rounded-2xl bg-gradient-to-tr from-purple/8 to-purple-dark/8 animate-float-2" />
        <div className="absolute top-[40%] left-[60%] w-36 h-36 rounded-2xl bg-gradient-to-bl from-teal/8 to-purple/5 animate-float-3" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple/20 bg-purple/5 px-4 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-purple animate-pulse" />
          <span className="text-xs font-semibold text-purple tracking-wide uppercase">AI Product Studio</span>
        </motion.div>

        <h1 className="font-heading text-5xl font-800 leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block"
          >
            We Build What
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block text-purple"
          >
            Others Can&apos;t.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600"
        >
          MiddleMind ships AI-powered enterprise products — from voice agents with 100+ tools
          to ZATCA-compliant fintech platforms. Whatever your industry, we have a solution running in production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#products"
            className="rounded-full bg-purple px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-dark hover:shadow-lg"
          >
            Explore Products
          </a>
          <button
            onClick={onTalkToMaya}
            className="rounded-full border border-purple/30 px-7 py-3 text-sm font-semibold text-purple transition-all hover:border-purple hover:bg-purple/5 cursor-pointer"
          >
            Talk to Maya
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {pills.map((pill, i) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.07 }}
              className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600 shadow-sm"
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
