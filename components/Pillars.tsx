import { Check } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section id="pilares" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pilares de alcance"
          title="¿Cómo te ayudo?"
          description="Cuatro frentes de trabajo que cubren el ciclo completo: desde habilitar a los equipos hasta dejar la automatización corriendo en producción."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.index} delay={index * 0.08} className="h-full">
              <article className="gradient-frame group h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="surface relative flex h-full flex-col overflow-hidden p-6">
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 -top-24 h-40 bg-gradient-to-b ${pillar.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors group-hover:border-white/20 group-hover:text-white">
                      <pillar.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-white/20">
                      {pillar.index}
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-lg font-semibold leading-snug tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-[13.5px] leading-relaxed text-white/50">
                    {pillar.description}
                  </p>

                  <ul className="relative mt-6 space-y-2.5 border-t border-white/5 pt-5">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-adobe-red" />
                        <span className="text-[12.5px] leading-snug text-white/60">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
