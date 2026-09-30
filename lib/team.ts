/**
 * Datos del equipo Nexsys Chile para la experiencia orbital de `/evento`.
 *
 * Las fotografías viven en `public/equipo/` (ver README). Mientras un archivo
 * no exista, se deja `photoUrl: null` y la tarjeta muestra el avatar
 * tipográfico de respaldo, igual que `profile.photoUrl` en `lib/content.ts`.
 */

export type TeamMember = {
  id: string;
  name: string;
  /** Solo se renderiza cuando el dato existe. */
  role?: string;
  photoUrl: string | null;
  initials: string;
};

/**
 * Clases completas de Tailwind (no interpoladas) para que el escaneo de
 * `lib/**` las detecte, siguiendo la convención de `pillars` y `planCategories`.
 */
export type SegmentAccent = {
  text: string;
  glow: string;
  /** Color crudo para los trazos SVG de las conexiones. */
  stroke: string;
};

/** Grupo que abre el mismo panel (órbita o bloque de marca). */
export type TeamGroup = {
  id: string;
  title: string;
  eyebrow: string;
  accent: SegmentAccent;
  members: TeamMember[];
};

export type TeamSegment = TeamGroup & {
  /** Etiqueta breve que se muestra sobre la órbita. */
  label: string;
  orbit: OrbitLevel;
  /** Grados sexagesimales: 0 = derecha, 90 = abajo. */
  angle: number;
};

export type OrbitLevel = 1 | 2;

/** Radios en porcentaje del lienzo orbital cuadrado (SVG y CSS comparten escala). */
export const ORBIT_RADIUS: Record<OrbitLevel, number> = {
  1: 29,
  2: 41,
};

/** Anillos sin nodos que dan profundidad a la composición. */
export const DECOR_RADIUS = [14, 35, 47] as const;

const ACCENT = {
  red: {
    text: "text-adobe-red",
    glow: "from-adobe-red/25",
    stroke: "#E31B23",
  },
  ember: {
    text: "text-adobe-ember",
    glow: "from-adobe-ember/25",
    stroke: "#FF4B2B",
  },
  doccloud: {
    text: "text-doccloud",
    glow: "from-doccloud/25",
    stroke: "#7B2CBF",
  },
  creative: {
    text: "text-creative",
    glow: "from-creative/25",
    stroke: "#00A3FF",
  },
} satisfies Record<string, SegmentAccent>;

/** Carlos Zerpa lidera dos segmentos distintos y reutiliza la foto ya existente. */
const carlosZerpa = {
  name: "Carlos Zerpa",
  photoUrl: "/carlos-zerpa.jpg",
  initials: "CZ",
};

/**
 * Cuatro nodos interiores y cuatro exteriores, desfasados 45° para que ningún
 * par quede alineado. Gerencia queda en el vértice superior, junto al bloque
 * Adobe que vive fuera de la órbita.
 */
export const teamSegments: TeamSegment[] = [
  {
    id: "gerencia",
    label: "Gerencia",
    title: "Gerencia",
    eyebrow: "Nexsys Chile",
    orbit: 1,
    angle: 270,
    accent: ACCENT.red,
    members: [
      {
        id: "gerencia-hernan-ravier",
        name: "Hernán Ravier",
        photoUrl: "/equipo/hernan-ravier.jpg",
        initials: "HR",
      },
    ],
  },
  {
    id: "comercial",
    label: "Comercial",
    title: "Equipo Comercial",
    eyebrow: "Nexsys Chile",
    orbit: 1,
    angle: 0,
    accent: ACCENT.ember,
    members: [
      {
        id: "comercial-javiera-castro",
        name: "Javiera Castro",
        role: "Brand Manager",
        photoUrl: "/equipo/javiera-castro.jpg",
        initials: "JC",
      },
      {
        id: "comercial-constanza-moya",
        name: "Constanza Moya",
        role: "Senior Account Manager Adobe ETLA",
        photoUrl: "/equipo/constanza-moya.jpg",
        initials: "CM",
      },
    ],
  },
  {
    id: "preventa-posventa",
    label: "Preventa y Posventa",
    title: "Preventa y Posventa",
    eyebrow: "Nexsys Chile",
    orbit: 2,
    angle: 315,
    accent: ACCENT.doccloud,
    members: [{ id: "preventa-posventa-carlos-zerpa", ...carlosZerpa }],
  },
  {
    id: "servicios",
    label: "Servicios",
    title: "Servicios",
    eyebrow: "Nexsys Chile",
    orbit: 1,
    angle: 90,
    accent: ACCENT.creative,
    members: [{ id: "servicios-carlos-zerpa", ...carlosZerpa }],
  },
  {
    id: "renovaciones",
    label: "Renovaciones",
    title: "Renovaciones",
    eyebrow: "Nexsys Chile",
    orbit: 2,
    angle: 45,
    accent: ACCENT.ember,
    members: [
      {
        id: "renovaciones-khendra-hurtado",
        name: "Khendra Hurtado",
        photoUrl: "/equipo/khendra-hurtado.jpg",
        initials: "KH",
      },
      {
        id: "renovaciones-mayra-giraldo",
        name: "Mayra Giraldo",
        photoUrl: "/equipo/mayra-giraldo.jpg",
        initials: "MG",
      },
    ],
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Marketplace",
    eyebrow: "Nexsys Chile",
    orbit: 2,
    angle: 135,
    accent: ACCENT.creative,
    members: [
      {
        id: "marketplace-francisco-araya",
        name: "Francisco Araya",
        role: "Marketplace Owner",
        photoUrl: "/equipo/francisco-araya.jpg",
        initials: "FA",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    title: "Marketing",
    eyebrow: "Nexsys Chile",
    orbit: 1,
    angle: 180,
    accent: ACCENT.doccloud,
    members: [
      {
        id: "marketing-luis-atabales",
        name: "Luis Atabales",
        photoUrl: "/equipo/luis-atabales.jpg",
        initials: "LA",
      },
    ],
  },
  {
    id: "operaciones",
    label: "Operaciones",
    title: "Operaciones",
    eyebrow: "Nexsys Chile",
    orbit: 2,
    angle: 225,
    accent: ACCENT.red,
    members: [
      {
        id: "operaciones-jean-sanchez",
        name: "Jean Sanchez",
        photoUrl: "/equipo/jean-sanchez.jpg",
        initials: "JS",
      },
    ],
  },
];

/** Personas de Adobe, fuera de la órbita Nexsys: viven bajo el título. */
export const adobeBrand: TeamGroup = {
  id: "adobe-marca",
  title: "Adobe",
  eyebrow: "Marca",
  accent: ACCENT.red,
  members: [
    {
      id: "adobe-raimundo-valenzuela",
      name: "Raimundo Valenzuela",
      role: "Enterprise Sales Account Manager",
      photoUrl: "/equipo/raimundo-valenzuela.png",
      initials: "RV",
    },
    {
      id: "adobe-wendy-campos",
      name: "Wendy Campos",
      role: "Channel Account Manager SLAM-SUR",
      photoUrl: "/equipo/wendy-campos.jpg",
      initials: "WC",
    },
  ],
};

/** Centro del lienzo en el mismo sistema de porcentajes que los radios. */
export const ORBIT_CENTER = 50;

/**
 * Coordenadas polares en porcentaje del lienzo. Se redondean porque `Math.cos`
 * puede diferir en el último bit entre Node y el navegador, lo que provoca un
 * desajuste de hidratación al escribir la posición en el markup.
 */
export function polarPosition(radius: number, angle: number) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: round(ORBIT_CENTER + radius * Math.cos(radians)),
    y: round(ORBIT_CENTER + radius * Math.sin(radians)),
  };
}

export function orbitPosition(segment: TeamSegment) {
  return polarPosition(ORBIT_RADIUS[segment.orbit], segment.angle);
}

function round(value: number) {
  return Math.round(value * 1e4) / 1e4;
}

/** Imagen del canal de WhatsApp; reemplazable por otro archivo en `public/evento/`. */
export const whatsappChannel = {
  qrUrl: "/evento/whatsapp-qr.jpg",
  qrWidth: 536,
  qrHeight: 952,
};
