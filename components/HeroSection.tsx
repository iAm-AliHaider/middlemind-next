"use client";

import { motion } from "framer-motion";

const headlineWords1 = ["Enterprise", "AI,"];
const headlineWords2 = ["Engineered", "to", "Scale."];

export default function HeroSection({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      {/* Floating gradient cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] right-[10%] w-64 h-40 rounded-2xl bg-gradient-to-br from-purple/10 to-teal/10 animate-float-1" />
        <div className="absolute bottom-[20%] left-[8%] w-48 h-32 rounded-2xl bg-gradient-to-tr from-purple/8 to-purple-dark/8 animate-float-2" />
        <div className="absolute top-[40%] left-[60%] w-36 h-36 rounded-2xl bg-gradient-to-bl from-teal/8 to-purple/5 animate-float-3" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <h1 className="font-heading text-5xl font-800 leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          <span className="block">
            {headlineWords1.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block text-purple">
            {headlineWords2.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (headlineWords1.length + i) * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600"
        >
          MiddleMind designs and deploys AI systems that transform how enterprises
          operate — from intelligent voice agents to end-to-end ERP automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 flex items-center justify-center gap-4"
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
      </div>
    </section>
  );
}
