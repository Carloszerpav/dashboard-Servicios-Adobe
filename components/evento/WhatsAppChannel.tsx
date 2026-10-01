"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { QrCode } from "lucide-react";

import { EventModal } from "@/components/evento/EventModal";
import { whatsappChannel } from "@/lib/team";

const HEADING_ID = "whatsapp-canal-titulo";

export function WhatsAppChannel() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-white/85 hover:shadow-glow"
      >
        <QrCode className="h-4 w-4 transition-transform group-hover:scale-110" />
        Únete a nuestro canal de WhatsApp
      </button>

      <AnimatePresence>
        {open ? (
          <EventModal
            onClose={close}
            labelledBy={HEADING_ID}
            className="max-w-sm"
          >
            <div className="flex items-center gap-3 pr-12">
              <span className="h-px w-8 bg-gradient-to-r from-adobe-red to-doccloud" />
              <span className="eyebrow">Canal de WhatsApp</span>
            </div>

            <h2
              id={HEADING_ID}
              className="heading-xl mt-3 text-xl sm:text-[1.4rem]"
            >
              Únete a nuestro canal
            </h2>

            <p className="mt-2 text-[13px] leading-relaxed text-white/50">
              Escanea el código con la cámara de tu teléfono para seguir el
              canal.
            </p>

            <div className="mt-6">
              <Image
                src={whatsappChannel.qrUrl}
                alt="Código QR del canal de WhatsApp Adobe Partner · Nexsys Chile"
                width={whatsappChannel.qrWidth}
                height={whatsappChannel.qrHeight}
                unoptimized
                priority
                className="mx-auto h-auto w-full max-w-[19rem] rounded-xl"
              />
            </div>
          </EventModal>
        ) : null}
      </AnimatePresence>
    </>
  );
}
