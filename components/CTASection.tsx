"use client";

import { motion } from "framer-motion";

export default function CTASection({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  return (
    <section className="py-24 bg-light-purple-bg">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-heading text-3xl font-800 tracking-tight text-gray-900 sm:text-4xl">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Talk to Maya — our AI consultant — right now. No forms, no waiting.
          </p>
          <button
            onClick={onTalkToMaya}
            className="mt-8 rounded-full bg-purple px-8 py-4 text-base font-semibold text-white transition-all hover:bg-purple-dark hover:shadow-lg cursor-pointer"
          >
            Start the Conversation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
