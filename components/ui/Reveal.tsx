"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({ delay = 0, y = 20, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...props}
    />
  );
}
