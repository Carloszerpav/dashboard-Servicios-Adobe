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

export type TeamSegment = {
  id: string;
  /** Etiqueta breve que se muestra sobre la órbita. */
  label: string;
  /** Nombre completo del segmento, usado en el panel. */
  title: string;
  orbit: OrbitLevel;
  /** Grados sexagesimales: 0 = derecha, 90 = abajo. */
  angle: number;
  accent: SegmentAccent;
  members: TeamMember[];
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
 * Distribución con simetría bilateral: 3 nodos en la órbita interior y 4 en la
 * exterior, con al menos 30° de separación entre nodos de distinto anillo. El
 * recorrido horario desde el vértice superior sigue el ciclo de vida del
 * cliente y deja los segmentos de soporte en la mitad inferior.
 */
export const teamSegments: TeamSegment[] = [
  {
    id: "comercial",
    label: "Comercial",
    title: "Equipo Comercial",
    orbit: 1,
    angle: 270,
    accent: ACCENT.red,
    members: [
      {
        id: "comercial-javiera-castro",
        name: "Javiera Castro",
        role: "Brand Manager",
        photoUrl: null,
        initials: "JC",
      },
      {
        id: "comercial-constanza-moya",
        name: "Constanza Moya",
        role: "Senior Account Manager Adobe ETLA",
        photoUrl: null,
        initials: "CM",
      },
    ],
  },
  {
    id: "preventa-posventa",
    label: "Preventa y Posventa",
    title: "Preventa y Posventa",
    orbit: 2,
    angle: 330,
    accent: ACCENT.doccloud,
    members: [{ id: "preventa-posventa-carlos-zerpa", ...carlosZerpa }],
  },
  {
    id: "servicios",
    label: "Servicios",
    title: "Servicios",
    orbit: 1,
    angle: 30,
    accent: ACCENT.creative,
    members: [{ id: "servicios-carlos-zerpa", ...carlosZerpa }],
  },
  {
    id: "renovaciones",
    label: "Renovaciones",
    title: "Renovaciones",
    orbit: 2,
    angle: 60,
    accent: ACCENT.ember,
    members: [
      {
        id: "renovaciones-khendra-hurtado",
        name: "Khendra Hurtado",
        photoUrl: null,
        initials: "KH",
      },
      {
        id: "renovaciones-mayra-giraldo",
        name: "Mayra Giraldo",
        photoUrl: null,
        initials: "MG",
      },
    ],
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Marketplace",
    orbit: 2,
    angle: 120,
    accent: ACCENT.creative,
    members: [
      {
        id: "marketplace-francisco-araya",
        name: "Francisco Araya",
        role: "Marketplace Owner",
        photoUrl: null,
        initials: "FA",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    title: "Marketing",
    orbit: 1,
    angle: 150,
    accent: ACCENT.doccloud,
    members: [
      {
        id: "marketing-luis-atabales",
        name: "Luis Atabales",
        photoUrl: null,
        initials: "LA",
      },
    ],
  },
  {
    id: "operaciones",
    label: "Operaciones",
    title: "Operaciones",
    orbit: 2,
    angle: 210,
    accent: ACCENT.red,
    members: [
      {
        id: "operaciones-jean-sanchez",
        name: "Jean Sanchez",
        photoUrl: null,
        initials: "JS",
      },
    ],
  },
];

/** Coordenadas en porcentaje del lienzo, con el centro en (50, 50). */
export function orbitPosition(segment: TeamSegment) {
  const radians = (segment.angle * Math.PI) / 180;
  const radius = ORBIT_RADIUS[segment.orbit];

  return {
    x: 50 + radius * Math.cos(radians),
    y: 50 + radius * Math.sin(radians),
  };
}

/** Imagen del canal de WhatsApp; reemplazable por otro archivo en `public/evento/`. */
export const whatsappChannel = {
  qrUrl: "/evento/whatsapp-qr.jpg",
  qrWidth: 536,
  qrHeight: 952,
};
