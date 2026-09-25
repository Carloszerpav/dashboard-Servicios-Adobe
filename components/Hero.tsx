"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, ShieldCheck } from "lucide-react";

import { EASE } from "@/components/ui/Reveal";
import { heroMetrics, profile, specialties } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 sm:pt-40">
      <AmbientBackdrop />

      <div className="container-page relative grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 backdrop-blur-md"
          >
            <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              Adobe
            </span>
            <span className="text-[12px] font-medium tracking-tight text-white/70">
              {profile.role}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="heading-xl mt-7 text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[3.5rem]"
          >
            Consultoría Especializada Adobe:{" "}
            <span className="text-gradient-brand">
              De la Gobernanza a la Automatización con IA
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg"
          >
            Acompañamiento estratégico, capacitaciones, evaluación de flujos e
            implementaciones avanzadas en Document Cloud y Creative Cloud para
            el ecosistema de Nexsys.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#planes"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-white/85 hover:shadow-glow"
            >
              Ver Planes y Bolsas
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#calculador"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10"
            >
              <Calculator className="h-4 w-4 text-white/60 transition-colors group-hover:text-adobe-red" />
              Calcular Proyecto
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3"
          >
            {heroMetrics.map((metric) => (
              <div key={metric.value} className="bg-ink-950/80 px-5 py-4">
                <dt className="text-sm font-semibold tracking-tight text-white">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-[12px] leading-snug text-white/45">
                  {metric.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          id="sobre-mi"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative mx-auto w-full max-w-md scroll-mt-32 lg:mx-0 lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-gradient opacity-20 blur-3xl"
          />
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <div className="glass rounded-3xl p-6 shadow-elevated sm:p-8">
      <div className="flex items-center gap-4">
        <div className="relative h-24 w-24 shrink-0 rounded-2xl bg-brand-gradient p-px">
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[15px] bg-ink-900">
            {profile.photoUrl ? (
              <Image
                src={profile.photoUrl}
                alt={`Fotografía de ${profile.name}`}
                width={240}
                height={240}
                className="h-full w-full object-cover"
                priority
              />
            ) : (
              <span className="text-2xl font-semibold tracking-tight text-white">
                {profile.initials}
              </span>
            )}
          </div>
          <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-ink-900 bg-adobe-red">
            <ShieldCheck className="h-3.5 w-3.5 text-white" />
          </span>
        </div>

        <div className="min-w-0">
          <p className="truncate text-lg font-semibold tracking-tight text-white">
            {profile.name}
          </p>
          <p className="mt-1 text-[13px] leading-snug text-white/50">
            Consultor / Preventa Adobe Enterprise
          </p>
          <p className="mt-0.5 text-[13px] font-medium text-white/70">
            {profile.company}
          </p>
        </div>
      </div>

      <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <p className="eyebrow">Especialidades</p>
      <ul className="mt-4 space-y-2.5">
        {specialties.map((specialty, index) => (
          <motion.li
            key={specialty.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 + index * 0.1, ease: EASE }}
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-colors group-hover:text-white">
              <specialty.icon className="h-4 w-4" />
            </span>
            <span className="text-[13px] font-medium tracking-tight text-white/80">
              {specialty.label}
            </span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3">
        <span className="text-[12px] text-white/45">Disponibilidad</span>
        <span className="flex items-center gap-2 text-[12px] font-medium text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
          Agenda abierta para evaluaciones
        </span>
      </div>
    </div>
  );
}

function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-grid-faint [background-size:64px_64px] mask-fade-b opacity-70" />
      <div className="absolute -left-40 -top-32 h-[32rem] w-[32rem] rounded-full bg-adobe-red/15 blur-[140px] animate-drift-slow" />
      <div className="absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-doccloud/20 blur-[150px] animate-drift-slow [animation-delay:3s]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
    </div>
  );
}
