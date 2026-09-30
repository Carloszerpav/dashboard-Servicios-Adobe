"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { OrbitCore } from "@/components/evento/OrbitCore";
import { OrbitField } from "@/components/evento/OrbitField";
import { SegmentNode } from "@/components/evento/SegmentNode";
import { SegmentPanel } from "@/components/evento/SegmentPanel";
import { EASE } from "@/components/ui/Reveal";
import { teamSegments } from "@/lib/team";

/**
 * Secuencia de apertura: núcleo → anillos (`OrbitField`) → nodos → pista de uso.
 * Los retardos de los anillos viven en `OrbitField`; aquí se encadenan los nodos.
 */
const nodeLayer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 1.25 } },
};

export function OrbitalExperience() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const active = teamSegments.find((segment) => segment.id === activeId) ?? null;
  const highlightedId = activeId ?? hoveredId;

  const close = useCallback(() => setActiveId(null), []);

  return (
    <div className="relative w-full">
      {/* En proyector 16:9 el lado lo manda la altura libre. Las etiquetas
          salen hacia afuera del nodo, sobre el fondo, sin recortarse. */}
      <motion.div
        initial="hidden"
        animate="show"
        className="relative mx-auto aspect-square w-[min(94vw,calc(100vh-16rem))] max-w-[58rem]"
      >
        <OrbitField highlightedId={highlightedId} />
        <OrbitCore />

        <motion.div variants={nodeLayer} className="absolute inset-0">
          {teamSegments.map((segment) => (
            <SegmentNode
              key={segment.id}
              segment={segment}
              active={segment.id === activeId}
              dimmed={activeId !== null && segment.id !== activeId}
              onSelect={setActiveId}
              onHighlight={setHoveredId}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 0 : 1 }}
        transition={{ duration: 0.6, delay: active ? 0 : 2.2, ease: EASE }}
        className="mt-3 text-center text-[12.5px] text-white/35"
      >
        Selecciona un segmento para conocer al equipo
      </motion.p>

      <AnimatePresence>
        {active ? <SegmentPanel group={active} onClose={close} /> : null}
      </AnimatePresence>
    </div>
  );
}
