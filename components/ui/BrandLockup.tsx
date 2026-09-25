import Image from "next/image";

/** Proporciones reales de los archivos en `public/`. */
const NEXSYS_RATIO = 180 / 34;
const ADOBE_RATIO = 480 / 116;

const SIZES = {
  sm: { nexsys: 20, adobe: 15, divider: "h-5" },
  lg: { nexsys: 30, adobe: 22, divider: "h-7" },
} as const;

type BrandLockupProps = {
  size?: keyof typeof SIZES;
  priority?: boolean;
};

export function BrandLockup({ size = "sm", priority }: BrandLockupProps) {
  const { nexsys, adobe, divider } = SIZES[size];

  return (
    <span className={`flex items-center ${size === "sm" ? "gap-3" : "gap-4"}`}>
      <Image
        src="/nexsys-logo.png"
        alt="Nexsys"
        width={Math.round(nexsys * NEXSYS_RATIO)}
        height={nexsys}
        priority={priority}
        unoptimized
        className="w-auto"
        style={{ height: nexsys }}
      />
      <span className={`${divider} w-px shrink-0 bg-white/15`} />
      <Image
        src="/adobe-logo.png"
        alt="Adobe"
        width={Math.round(adobe * ADOBE_RATIO)}
        height={adobe}
        priority={priority}
        unoptimized
        className="w-auto"
        style={{ height: adobe }}
      />
    </span>
  );
}
