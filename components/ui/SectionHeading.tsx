import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"
      }
    >
      <div
        className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-adobe-red to-doccloud" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="heading-xl mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
