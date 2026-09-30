"use client";

import { Users } from "lucide-react";

import { EventModal } from "@/components/evento/EventModal";
import { MemberCard } from "@/components/evento/MemberCard";
import type { TeamGroup } from "@/lib/team";

type SegmentPanelProps = {
  group: TeamGroup;
  onClose: () => void;
};

export function SegmentPanel({ group, onClose }: SegmentPanelProps) {
  const solo = group.members.length === 1;
  const headingId = `segmento-${group.id}-titulo`;

  return (
    <EventModal
      onClose={onClose}
      labelledBy={headingId}
      className={solo ? "max-w-md" : "max-w-3xl"}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b ${group.accent.glow} to-transparent opacity-60 blur-2xl`}
      />

      <div className="relative flex items-center gap-3">
        <span className={`h-px w-8 bg-current ${group.accent.text}`} />
        <span className="eyebrow">{group.eyebrow}</span>
      </div>

      <h2
        id={headingId}
        className="heading-xl relative mt-3 text-2xl sm:text-[1.75rem]"
      >
        {group.title}
      </h2>

      {solo ? null : (
        <p className="relative mt-2 inline-flex items-center gap-2 text-[12.5px] text-white/45">
          <Users className="h-3.5 w-3.5" />
          {group.members.length} integrantes
        </p>
      )}

      <div className="relative my-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {solo ? (
        <div className="relative pb-2">
          <MemberCard
            member={group.members[0]}
            variant="solo"
            fallbackCaption={group.title}
          />
        </div>
      ) : (
        <div className="relative grid gap-4 sm:grid-cols-2">
          {group.members.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              variant="group"
              index={index}
            />
          ))}
        </div>
      )}
    </EventModal>
  );
}
