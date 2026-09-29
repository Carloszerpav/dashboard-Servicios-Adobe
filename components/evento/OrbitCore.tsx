"use client";

import { motion } from "framer-motion";

import { EASE } from "@/components/ui/Reveal";

export const coreVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.1, ease: EASE },
  },
};

export function OrbitCore() {
  return (
    <motion.div
      variants={coreVariants}
      className="absolute left-1/2 top-1/2 h-[20%] w-[20%] -translate-x-1/2 -translate-y-1/2"
    >
      <div
        aria-hidden
        className="absolute -inset-1 rounded-full bg-brand-gradient opacity-20 blur-lg"
      />

      <div className="relative h-full w-full rounded-full bg-brand-gradient p-px shadow-elevated">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-ink-900 text-center">
          <p className="eyebrow text-[9px] sm:text-[10px]">Adobe</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85 sm:text-[11px]">
            Nexsys Chile
          </p>
          <p className="text-gradient-brand mt-1 text-xl font-semibold tracking-tightest sm:text-2xl lg:text-3xl">
            360°
          </p>
        </div>
      </div>
    </motion.div>
  );
}
