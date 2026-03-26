"use client";

import { motion } from "framer-motion";

export default function CTASection({ onTalkToMaya }: { onTalkToMaya: () => void }) {
  return (
    <section className="py-32 bg-[#0f0f14] relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple/20 blur-[150px]" />
      
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Have a Problem?
            <span className="block gradient-text mt-2">We Can Solve It.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
            If you&apos;ve been told it can&apos;t be done, talk to us. We specialize in building 
            what others won&apos;t even attempt. Start a conversation with Maya — our AI consultant.
          </p>
          <button
            onClick={onTalkToMaya}
            className="mt-10 group relative rounded-full bg-white px-10 py-4 text-base font-semibold text-black transition-all hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Start the Conversation
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}