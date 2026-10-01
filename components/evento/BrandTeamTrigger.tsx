"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { SegmentPanel } from "@/components/evento/SegmentPanel";
import { adobeBrand } from "@/lib/team";

export function BrandTeamTrigger() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-pressed={open}
        className="group mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-2 pl-2 pr-5 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.08]"
      >
        <span className="relative flex h-8 w-8 items-center justify-center">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-adobe-red/40 blur-md opacity-0 transition-opacity group-hover:opacity-100"
          />
          <span className="relative flex h-5 w-5 items-center justify-center rounded-full border border-white/25 bg-ink-900 transition-transform duration-300 group-hover:scale-110">
            <span className="h-2 w-2 rounded-full bg-adobe-red" />
          </span>
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 transition-colors group-hover:text-white/70">
            Marca
          </span>
          <span className="text-[13px] font-semibold tracking-tight text-white/80 transition-colors group-hover:text-white">
            Adobe
          </span>
        </span>
      </button>

      <AnimatePresence>
        {open ? <SegmentPanel group={adobeBrand} onClose={close} /> : null}
      </AnimatePresence>
    </>
  );
}
