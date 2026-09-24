"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheckBig, Loader, Mail, Send } from "lucide-react";

import { useQuote } from "@/components/QuoteProvider";
import { EASE, Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { footerHighlights, profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent";

const emptyForm = { name: "", company: "", email: "", message: "" };

export function Contact() {
  const { request, clearRequest } = useQuote();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (request) {
      setForm((current) => ({ ...current, message: request }));
      setStatus("idle");
    }
  }, [request]);

  const update = (field: keyof typeof emptyForm) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    // Sustituir por la llamada real al endpoint/CRM de Nexsys.
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("sent");
    setForm(emptyForm);
    clearRequest();
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(55%_50%_at_50%_0%,rgba(227,27,35,0.14),transparent_70%)]"
      />

      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contacto directo"
            title="Agenda tu evaluación"
            description="Cuéntame el escenario de tu empresa o de tu cliente final. Respondo con una propuesta de alcance y la bolsa de horas sugerida."
          />

          <Reveal delay={0.1} className="mt-10 space-y-3">
            {footerHighlights.map((highlight) => (
              <div
                key={highlight.label}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5"
              >
                <span className="flex items-center gap-3 text-[12.5px] text-white/45">
                  <highlight.icon className="h-4 w-4 text-white/30" />
                  {highlight.label}
                </span>
                <span className="text-[13px] font-medium text-white/80">
                  {highlight.value}
                </span>
              </div>
            ))}

            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              <span className="flex items-center gap-3 text-[12.5px] text-white/45">
                <Mail className="h-4 w-4 text-white/30" />
                Email
              </span>
              <span className="text-[13px] font-medium text-white/80 transition-colors group-hover:text-white">
                {profile.email}
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="gradient-frame">
          <div className="surface p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10">
                    <CircleCheckBig className="h-6 w-6 text-emerald-400" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                    Solicitud enviada
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
                    Gracias por escribir. Revisaré el alcance y te contactaré
                    con una propuesta de evaluación junto al equipo de Nexsys.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-7 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Enviar otra solicitud
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="name"
                      label="Nombre"
                      placeholder="Nombre y apellido"
                      value={form.name}
                      onChange={update("name")}
                      required
                    />
                    <Field
                      id="company"
                      label="Empresa"
                      placeholder="Reseller o cliente final"
                      value={form.company}
                      onChange={update("company")}
                      required
                    />
                  </div>

                  <Field
                    id="email"
                    label="Email corporativo"
                    type="email"
                    placeholder="nombre@empresa.cl"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />

                  <div>
                    <label htmlFor="message" className="eyebrow">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={7}
                      required
                      value={form.message}
                      onChange={(event) => update("message")(event.target.value)}
                      placeholder="Describe el flujo, el producto Adobe involucrado y el resultado esperado."
                      className="mt-2.5 w-full resize-none rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-[13.5px] text-white placeholder:text-white/25 transition-colors focus:border-white/25"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-[13px] font-semibold text-ink-950 transition-all hover:bg-white/85 hover:shadow-glow disabled:pointer-events-none disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader className="h-4 w-4 animate-spin" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        Enviar solicitud
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11.5px] leading-relaxed text-white/30">
                    Al enviar aceptas ser contactado por Carlos Zerpa y el
                    equipo comercial de Nexsys Chile.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
};

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2.5 w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-[13.5px] text-white placeholder:text-white/25 transition-colors focus:border-white/25"
      />
    </div>
  );
}
