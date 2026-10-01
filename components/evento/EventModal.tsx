"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";

import { EASE } from "@/components/ui/Reveal";

type EventModalProps = {
  onClose: () => void;
  labelledBy: string;
  children: React.ReactNode;
  /** Ancho máximo del panel; por defecto el de una tarjeta individual. */
  className?: string;
};

export function EventModal({
  onClose,
  labelledBy,
  children,
  className = "max-w-md",
}: EventModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5 sm:p-8">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: EASE }}
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-md"
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.35, ease: EASE }}
        className={`gradient-frame relative w-full shadow-elevated ${className}`}
      >
        <div className="surface relative overflow-hidden">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-ink-900/80 text-white/70 backdrop-blur-sm transition-colors hover:border-white/25 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="max-h-[min(86vh,44rem)] overflow-y-auto p-6 pr-14 pt-7 sm:p-8 sm:pr-16 sm:pt-8">
            {children}
          </div>
        </div>
      </motion.div>
    </div>,
    document.body,
  );
}
