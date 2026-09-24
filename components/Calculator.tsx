"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, RotateCcw, Sparkles } from "lucide-react";

import { useQuote } from "@/components/QuoteProvider";
import { EASE, Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { calculatorOptions, hourPackages } from "@/lib/content";

const MAX_PACKAGE = hourPackages[hourPackages.length - 1];

export function HoursCalculator() {
  const [selected, setSelected] = useState<string[]>([]);
  const { requestQuote } = useQuote();

  const toggle = (id: string) =>
    setSelected((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id],
    );

  const totalHours = useMemo(
    () =>
      calculatorOptions
        .filter((option) => selected.includes(option.id))
        .reduce((sum, option) => sum + option.hours, 0),
    [selected],
  );

  const recommended = useMemo(
    () => hourPackages.find((hours) => hours >= totalHours) ?? null,
    [totalHours],
  );

  const progress = Math.min(100, (totalHours / MAX_PACKAGE) * 100);

  const recommendationLabel = !totalHours
    ? "Selecciona al menos una necesidad"
    : recommended
      ? `Recomendado: Bolsa de ${recommended} Horas`
      : "Recomendado: Programa a medida";

  const handleRequest = () => {
    const detail = calculatorOptions
      .filter((option) => selected.includes(option.id))
      .map((option) => `• ${option.label} (${option.hours} hrs)`)
      .join("\n");

    requestQuote(
      `Hola Carlos, estimé mi proyecto en el calculador:\n\n${detail}\n\nTotal estimado: ${totalHours} hrs.\n${recommendationLabel}.\nQuisiera recibir una cotización por esa bolsa de horas.`,
    );
  };

  return (
    <section id="calculador" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Estimador de bolsas"
          title="Calculador Interactivo de Proyecto"
          description="Marca las necesidades de tu empresa y obtén al instante una estimación de horas y la bolsa recomendada para iniciar la conversación."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <Reveal className="gradient-frame">
            <div className="surface p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow">Necesidades detectadas</p>
                <button
                  type="button"
                  onClick={() => setSelected([])}
                  disabled={selected.length === 0}
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/40 transition-colors hover:text-white disabled:pointer-events-none disabled:opacity-30"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reiniciar
                </button>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {calculatorOptions.map((option) => {
                  const checked = selected.includes(option.id);

                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="checkbox"
                      aria-checked={checked}
                      onClick={() => toggle(option.id)}
                      className={`group relative flex gap-3.5 rounded-xl border p-4 text-left transition-all duration-300 ${
                        checked
                          ? "border-adobe-red/45 bg-adobe-red/[0.07]"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          checked
                            ? "border-adobe-red bg-adobe-red text-white"
                            : "border-white/20 bg-white/5 text-transparent"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="flex items-start justify-between gap-3">
                          <span className="text-[13.5px] font-medium leading-snug tracking-tight text-white">
                            {option.label}
                          </span>
                          <span
                            className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold transition-colors ${
                              checked
                                ? "bg-adobe-red/20 text-adobe-red"
                                : "bg-white/5 text-white/45"
                            }`}
                          >
                            {option.hours} hrs
                          </span>
                        </span>
                        <span className="mt-1.5 flex items-center gap-2 text-[12px] leading-snug text-white/45">
                          <option.icon className="h-3.5 w-3.5 shrink-0 text-white/30" />
                          {option.detail}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="gradient-frame lg:sticky lg:top-28">
            <div className="surface relative overflow-hidden p-6 sm:p-7">
              <div
                aria-hidden
                className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-doccloud/30 to-transparent blur-2xl"
              />

              <div className="relative">
                <p className="eyebrow">Estimación del proyecto</p>

                <div className="mt-5 flex items-end gap-2">
                  <motion.span
                    key={totalHours}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="text-6xl font-semibold leading-none tracking-tightest text-white"
                  >
                    {totalHours}
                  </motion.span>
                  <span className="pb-1.5 text-sm font-medium text-white/45">
                    horas estimadas
                  </span>
                </div>

                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-brand-gradient"
                    initial={false}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-[11px] text-white/30">
                  <span>0 hrs</span>
                  <span>{MAX_PACKAGE}+ hrs</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={recommendationLabel}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="mt-7 rounded-xl border border-white/10 bg-ink-950/70 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-adobe-red" />
                      <p className="text-[14px] font-semibold tracking-tight text-white">
                        {recommendationLabel}
                      </p>
                    </div>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-white/45">
                      {totalHours === 0
                        ? "El estimador sugiere la bolsa comercial más cercana a tu alcance."
                        : recommended
                          ? "Incluye levantamiento, ejecución y traspaso documentado del alcance seleccionado."
                          : "Tu alcance supera las bolsas estándar: se diseña un programa dedicado por fases."}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <ul className="mt-5 space-y-2">
                  {selected.length === 0 ? (
                    <li className="text-[12.5px] text-white/35">
                      Aún no has seleccionado componentes.
                    </li>
                  ) : (
                    calculatorOptions
                      .filter((option) => selected.includes(option.id))
                      .map((option) => (
                        <motion.li
                          key={option.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, ease: EASE }}
                          className="flex items-center justify-between gap-3 text-[12.5px]"
                        >
                          <span className="truncate text-white/60">
                            {option.label}
                          </span>
                          <span className="shrink-0 font-medium text-white/40">
                            {option.hours} h
                          </span>
                        </motion.li>
                      ))
                  )}
                </ul>

                <button
                  type="button"
                  onClick={handleRequest}
                  disabled={selected.length === 0}
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-[13px] font-semibold text-ink-950 transition-all hover:bg-white/85 hover:shadow-glow disabled:pointer-events-none disabled:bg-white/10 disabled:text-white/30"
                >
                  Solicitar cotización por {totalHours || "—"} hrs
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
