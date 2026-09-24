"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Clock } from "lucide-react";

import { useQuote } from "@/components/QuoteProvider";
import { EASE, Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { planCategories, type Plan } from "@/lib/content";

export function Plans() {
  const [activeId, setActiveId] = useState(planCategories[0].id);
  const active =
    planCategories.find((category) => category.id === activeId) ??
    planCategories[0];

  return (
    <section id="planes" className="relative py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-96 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(123,44,191,0.14),transparent_70%)]"
      />

      <div className="container-page">
        <SectionHeading
          eyebrow="Catálogo de servicios"
          title="Planes de Consultoría · Bolsas de Horas"
          description="Cada bolsa define una dedicación y un alcance concreto. El detalle comercial se ajusta en la evaluación inicial junto a Nexsys."
          align="center"
        />

        <Reveal
          delay={0.1}
          className="mt-12 flex justify-center"
          aria-label="Categorías de planes"
        >
          <div
            role="tablist"
            aria-label="Categorías de planes"
            className="flex w-full max-w-2xl flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-md sm:flex-row"
          >
            {planCategories.map((category) => {
              const selected = category.id === active.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`tab-${category.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${category.id}`}
                  onClick={() => setActiveId(category.id)}
                  className={`relative flex-1 rounded-xl px-4 py-2.5 text-[13px] font-medium transition-colors ${
                    selected ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {selected ? (
                    <motion.span
                      layoutId="plan-tab-indicator"
                      transition={{ duration: 0.35, ease: EASE }}
                      className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.08] shadow-elevated"
                    />
                  ) : null}
                  <span className="relative">{category.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-white/45">
              {active.caption}
            </p>

            <div
              className={`mt-10 grid gap-5 ${
                active.plans.length > 1
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "mx-auto max-w-2xl"
              }`}
            >
              {active.plans.map((plan, index) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  categoryLabel={active.label}
                  accent={active.accent}
                  glow={active.glow}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.15} className="mt-10">
          <p className="text-center text-[12.5px] text-white/35">
            Las bolsas son acumulables y combinables entre líneas de servicio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

type PlanCardProps = {
  plan: Plan;
  categoryLabel: string;
  accent: string;
  glow: string;
  index: number;
};

function PlanCard({ plan, categoryLabel, accent, glow, index }: PlanCardProps) {
  const { requestQuote } = useQuote();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
      className={`gradient-frame group h-full transition-transform duration-300 hover:-translate-y-1 ${
        plan.featured ? "shadow-glow" : ""
      }`}
    >
      <div className="surface relative flex h-full flex-col overflow-hidden p-6 sm:p-7">
        <div
          aria-hidden
          className={`absolute inset-x-0 -top-28 h-48 bg-gradient-to-b ${glow} to-transparent opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-90`}
        />

        <div className="relative flex items-center justify-between gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
            <plan.icon className="h-[18px] w-[18px]" />
          </span>
          <span
            className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] ${accent}`}
          >
            {plan.tag}
          </span>
        </div>

        <h3 className="relative mt-6 text-[1.15rem] font-semibold leading-snug tracking-tight text-white">
          {plan.name}
        </h3>

        <div className="relative mt-3 inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-ink-950/70 px-3 py-1.5">
          <Clock className="h-3.5 w-3.5 text-white/45" />
          <span className="text-[12px] font-medium text-white/75">
            {plan.dedication}
          </span>
        </div>

        <p className="relative mt-4 text-[13.5px] leading-relaxed text-white/50">
          {plan.summary}
        </p>

        <div className="relative mt-6 flex-1 border-t border-white/5 pt-5">
          <p className="eyebrow">Alcance</p>
          <ul className="mt-3.5 space-y-2.5">
            {plan.scope.map((line) => (
              <li key={line} className="flex gap-2.5">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-adobe-red" />
                <span className="text-[12.5px] leading-snug text-white/60">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() =>
            requestQuote(
              `Hola Carlos, quiero solicitar una evaluación para el plan "${plan.name}" (${categoryLabel} · ${plan.dedication}).`,
            )
          }
          className="relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[13px] font-semibold text-white transition-all hover:border-white/30 hover:bg-white group-hover:shadow-glow hover:text-ink-950"
        >
          Solicitar Evaluación
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.article>
  );
}
