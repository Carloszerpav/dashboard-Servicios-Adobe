"use client";

import { motion, useReducedMotion } from "framer-motion";

import { EASE } from "@/components/ui/Reveal";
import {
  DECOR_RADIUS,
  ORBIT_CENTER,
  ORBIT_RADIUS,
  orbitPosition,
  polarPosition,
  teamSegments,
} from "@/lib/team";

/** Anillos en orden de aparición, con el retardo de su entrada. */
const RINGS = [
  { radius: DECOR_RADIUS[0], delay: 0.35, dashed: true },
  { radius: ORBIT_RADIUS[1], delay: 0.5, dashed: false },
  { radius: DECOR_RADIUS[1], delay: 0.65, dashed: true },
  { radius: ORBIT_RADIUS[2], delay: 0.8, dashed: false },
  { radius: DECOR_RADIUS[2], delay: 0.95, dashed: true },
];

/** Puntos decorativos que orbitan lentamente, en posiciones fijas. */
const DRIFT_LAYERS = [
  {
    duration: 210,
    direction: 1,
    dots: [
      { radius: DECOR_RADIUS[0], angle: 18, size: 0.4, fill: "fill-white/35" },
      { radius: DECOR_RADIUS[0], angle: 142, size: 0.3, fill: "fill-white/25" },
      { radius: DECOR_RADIUS[0], angle: 254, size: 0.35, fill: "fill-adobe-red/60" },
      { radius: DECOR_RADIUS[1], angle: 76, size: 0.34, fill: "fill-white/30" },
      { radius: DECOR_RADIUS[1], angle: 198, size: 0.42, fill: "fill-doccloud/70" },
      { radius: DECOR_RADIUS[1], angle: 312, size: 0.3, fill: "fill-white/25" },
    ],
  },
  {
    duration: 280,
    direction: -1,
    dots: [
      { radius: ORBIT_RADIUS[2], angle: 8, size: 0.32, fill: "fill-white/25" },
      { radius: ORBIT_RADIUS[2], angle: 168, size: 0.38, fill: "fill-creative/60" },
      { radius: ORBIT_RADIUS[2], angle: 288, size: 0.3, fill: "fill-white/30" },
      { radius: DECOR_RADIUS[2], angle: 52, size: 0.36, fill: "fill-white/25" },
      { radius: DECOR_RADIUS[2], angle: 132, size: 0.3, fill: "fill-adobe-ember/55" },
      { radius: DECOR_RADIUS[2], angle: 226, size: 0.34, fill: "fill-white/30" },
      { radius: DECOR_RADIUS[2], angle: 336, size: 0.3, fill: "fill-white/20" },
    ],
  },
];

type OrbitFieldProps = {
  /** Segmento resaltado por hover, foco o selección. */
  highlightedId: string | null;
};

export function OrbitField({ highlightedId }: OrbitFieldProps) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {teamSegments.map((segment) => {
        const { x, y } = orbitPosition(segment);
        const highlighted = segment.id === highlightedId;

        return (
          <line
            key={`spoke-${segment.id}`}
            x1={ORBIT_CENTER}
            y1={ORBIT_CENTER}
            x2={x}
            y2={y}
            vectorEffect="non-scaling-stroke"
            className="transition-all duration-300"
            style={{
              stroke: highlighted ? segment.accent.stroke : "#FFFFFF",
              strokeWidth: highlighted ? 1.5 : 1,
              opacity: highlighted ? 0.75 : 0.12,
            }}
          />
        );
      })}

      {RINGS.map((ring) => (
        <motion.circle
          key={`ring-${ring.radius}`}
          cx={ORBIT_CENTER}
          cy={ORBIT_CENTER}
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity={ring.dashed ? 0.05 : 0.1}
          strokeDasharray={ring.dashed ? "0.6 1.4" : undefined}
          vectorEffect="non-scaling-stroke"
          initial={{ opacity: 0, r: ring.radius * 0.88 }}
          animate={{ opacity: 1, r: ring.radius }}
          transition={{ duration: 0.8, delay: ring.delay, ease: EASE }}
        />
      ))}

      {DRIFT_LAYERS.map((layer) => (
        <motion.g
          key={`drift-${layer.duration}`}
          style={{ transformOrigin: `${ORBIT_CENTER}px ${ORBIT_CENTER}px` }}
          initial={{ opacity: 0 }}
          animate={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, rotate: 360 * layer.direction }
          }
          transition={{
            opacity: { duration: 1.2, delay: 1.6, ease: EASE },
            rotate: { duration: layer.duration, repeat: Infinity, ease: "linear" },
          }}
        >
          {layer.dots.map((dot) => {
            const { x, y } = polarPosition(dot.radius, dot.angle);

            return (
              <circle
                key={`dot-${dot.radius}-${dot.angle}`}
                cx={x}
                cy={y}
                r={dot.size}
                className={`${dot.fill} animate-pulse-soft`}
                style={{ animationDelay: `${dot.angle / 90}s` }}
              />
            );
          })}
        </motion.g>
      ))}
    </svg>
  );
}
