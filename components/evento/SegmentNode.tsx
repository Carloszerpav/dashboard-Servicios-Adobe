"use client";

import { motion } from "framer-motion";

import { EASE } from "@/components/ui/Reveal";
import { orbitPosition, type TeamSegment } from "@/lib/team";

export const nodeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

type SegmentNodeProps = {
  segment: TeamSegment;
  active: boolean;
  /** Atenúa el nodo cuando otro segmento está seleccionado. */
  dimmed: boolean;
  onSelect: (id: string) => void;
  onHighlight: (id: string | null) => void;
};

export function SegmentNode({
  segment,
  active,
  dimmed,
  onSelect,
  onHighlight,
}: SegmentNodeProps) {
  const { x, y } = orbitPosition(segment);

  return (
    <motion.button
      type="button"
      variants={nodeVariants}
      onClick={() => onSelect(segment.id)}
      onPointerEnter={() => onHighlight(segment.id)}
      onPointerLeave={() => onHighlight(null)}
      onFocus={() => onHighlight(segment.id)}
      onBlur={() => onHighlight(null)}
      aria-haspopup="dialog"
      aria-pressed={active}
      className={`group absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-opacity duration-300 ${
        segment.accent.text
      } ${dimmed ? "opacity-35" : "opacity-100"}`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span
        aria-hidden
        className={`absolute inset-0 rounded-full bg-current blur-lg transition-opacity duration-300 ${
          active ? "opacity-30" : "opacity-0 group-hover:opacity-20"
        }`}
      />

      <span
        aria-hidden
        className={`relative flex items-center justify-center rounded-full border bg-ink-900/90 backdrop-blur-sm transition-all duration-300 ${
          active
            ? "h-6 w-6 border-white/45"
            : "h-5 w-5 border-white/20 group-hover:h-6 group-hover:w-6 group-hover:border-white/40"
        }`}
      >
        <span
          className={`rounded-full bg-current transition-all duration-300 ${
            active ? "h-2.5 w-2.5" : "h-2 w-2 group-hover:h-2.5 group-hover:w-2.5"
          }`}
        />
      </span>

      <span
        className={`absolute left-1/2 top-[calc(100%-0.35rem)] w-24 -translate-x-1/2 text-balance text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] transition-colors duration-300 sm:w-32 sm:text-[11.5px] lg:w-36 lg:text-[13px] ${
          active ? "text-white" : "text-white/55 group-hover:text-white"
        }`}
      >
        {segment.label}
      </span>
    </motion.button>
  );
}
