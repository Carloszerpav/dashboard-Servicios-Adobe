"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { EASE } from "@/components/ui/Reveal";
import type { TeamMember } from "@/lib/team";

const SIZES = {
  solo: { frame: "h-32 w-32 sm:h-36 sm:w-36", initials: "text-3xl" },
  group: { frame: "h-20 w-20", initials: "text-xl" },
} as const;

type MemberCardProps = {
  member: TeamMember;
  /** `solo` centra la tarjeta; `group` la alinea en fila dentro del grid. */
  variant: keyof typeof SIZES;
  /** Texto bajo el nombre cuando la persona no tiene cargo. */
  fallbackCaption?: string;
  index?: number;
};

export function MemberCard({
  member,
  variant,
  fallbackCaption,
  index = 0,
}: MemberCardProps) {
  const { frame, initials } = SIZES[variant];
  const caption = member.role ?? fallbackCaption;
  const solo = variant === "solo";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.08, ease: EASE }}
      className={
        solo
          ? "flex flex-col items-center text-center"
          : "flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
      }
    >
      <div className={`relative shrink-0 rounded-2xl bg-brand-gradient p-px ${frame}`}>
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[15px] bg-ink-900">
          {member.photoUrl ? (
            <Image
              src={member.photoUrl}
              alt={`Fotografía de ${member.name}`}
              width={320}
              height={320}
              className="h-full w-full object-cover"
            />
          ) : (
            <span
              className={`font-semibold tracking-tight text-white/85 ${initials}`}
            >
              {member.initials}
            </span>
          )}
        </div>
      </div>

      <div className={solo ? "mt-5" : "min-w-0"}>
        <p
          className={`font-semibold tracking-tight text-white ${
            solo ? "text-xl sm:text-[1.35rem]" : "text-[15px]"
          }`}
        >
          {member.name}
        </p>
        {caption ? (
          <p
            className={`leading-snug text-white/50 ${
              solo ? "mt-2 text-sm" : "mt-1 text-[12.5px]"
            }`}
          >
            {caption}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
