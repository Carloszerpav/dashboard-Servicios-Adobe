import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandTeamTrigger } from "@/components/evento/BrandTeamTrigger";
import { OrbitalExperience } from "@/components/evento/OrbitalExperience";
import { WhatsAppChannel } from "@/components/evento/WhatsAppChannel";
import { BrandLockup } from "@/components/ui/BrandLockup";

export const metadata: Metadata = {
  title: "Ecosistema Adobe 360°",
  description:
    "Mapa orbital del equipo Adobe de Nexsys Chile: marketing, marketplace, operaciones, comercial, preventa y posventa, servicios y renovaciones.",
  /** Experiencia de uso interno para presentaciones presenciales. */
  robots: { index: false, follow: false },
};

export default function EventoPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden px-5 py-6 sm:px-8 sm:py-8">
      <AmbientBackdrop />

      <header className="animate-fade-up flex flex-col items-center text-center">
        <BrandLockup size="lg" priority />
        <p className="eyebrow mt-6">Equipo 360°</p>
        <h1 className="heading-xl mt-2 text-2xl sm:text-3xl">
          Ecosistema <span className="text-gradient-brand">Adobe</span> · Nexsys
          Chile
        </h1>
        <BrandTeamTrigger />
      </header>

      <div className="flex min-h-0 w-full flex-1 items-center justify-center py-3">
        <OrbitalExperience />
      </div>

      <footer className="animate-fade-up w-full [animation-delay:2.2s]">
        <div
          aria-hidden
          className="mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppChannel />
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10"
          >
            Ver planes y servicios
            <ArrowRight className="h-4 w-4 text-white/60 transition-all group-hover:translate-x-1 group-hover:text-white" />
          </Link>
        </div>
      </footer>
    </main>
  );
}

function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-grid-faint [background-size:64px_64px] opacity-50" />
      <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-adobe-red/10 blur-[150px] animate-drift-slow" />
      <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-doccloud/15 blur-[150px] animate-drift-slow [animation-delay:3s]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_45%,transparent_35%,rgb(var(--ink-950)/0.92)_100%)]" />
    </div>
  );
}
