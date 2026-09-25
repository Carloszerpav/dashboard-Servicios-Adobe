import type { LucideIcon } from "lucide-react";
import {
  Aperture,
  BadgeCheck,
  Blocks,
  BrainCircuit,
  CodeXml,
  FileCheck,
  GraduationCap,
  Layers,
  Network,
  Paintbrush,
  Plug,
  ScanSearch,
  Signature,
  Sparkles,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Carlos Zerpa",
  role: "Preventa Adobe Enterprise · Systems Analyst",
  company: "Nexsys Chile",
  email: "carlos.zerpav@nexsysla.com",
  /** Si es null se muestra el avatar tipográfico de respaldo. */
  photoUrl: "/carlos-zerpa.jpg" as string | null,
  initials: "CZ",
};

export const navLinks = [
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Pilares", href: "#pilares" },
  { label: "Planes de Consultoría", href: "#planes" },
  { label: "Calculador de Horas", href: "#calculador" },
  { label: "Contacto", href: "#contacto" },
];

export const specialties = [
  { label: "Acrobat Sign & APIs", icon: Signature },
  { label: "Power Automate & M365", icon: Workflow },
  { label: "Firefly Services & Custom Models", icon: Sparkles },
];

export const heroMetrics = [
  { value: "Document Cloud", label: "Acrobat Sign · PDF Services" },
  { value: "Creative Cloud", label: "Firefly · Express · UXP" },
  { value: "No-Code / Low-Code", label: "Power Platform · M365" },
];

export type Pillar = {
  index: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  accent: string;
};

export const pillars: Pillar[] = [
  {
    index: "01",
    title: "Sesiones & Capacitación",
    description:
      "Adopción de plataformas, Admin Console, SSO e IA Generativa con foco en usuarios reales y equipos de TI.",
    bullets: [
      "Onboarding y planes de adopción por perfil",
      "Administración de Admin Console y SSO",
      "Buenas prácticas de IA Generativa aplicada",
    ],
    icon: GraduationCap,
    accent: "from-adobe-red/70 to-adobe-red/0",
  },
  {
    index: "02",
    title: "Evaluación & Diagnóstico",
    description:
      "Auditoría de flujos actuales, detección de cuellos de botella y propuesta de arquitectura objetivo.",
    bullets: [
      "Levantamiento de procesos documentales y creativos",
      "Matriz de hallazgos priorizada por impacto",
      "Roadmap de arquitectura y quick wins",
    ],
    icon: ScanSearch,
    accent: "from-doccloud/70 to-doccloud/0",
  },
  {
    index: "03",
    title: "Automatización No-Code / Low-Code",
    description:
      "Conexión de Acrobat Sign con Power Automate, Teams y SharePoint sin fricción para el negocio.",
    bullets: [
      "Flujos de firma end-to-end en Power Automate",
      "Aprobaciones nativas en Teams y SharePoint",
      "Trazabilidad y notificaciones automatizadas",
    ],
    icon: Plug,
    accent: "from-creative/70 to-creative/0",
  },
  {
    index: "04",
    title: "Implementación Técnica & APIs",
    description:
      "Desarrollos REST API, Webhooks, PDF Services API y Firefly Services para escenarios enterprise.",
    bullets: [
      "Integración REST con ERP/CRM y middleware",
      "Webhooks en tiempo real y reintentos",
      "PDF Services API y Firefly Services a escala",
    ],
    icon: CodeXml,
    accent: "from-adobe-ember/70 to-adobe-ember/0",
  },
];

export type Plan = {
  id: string;
  name: string;
  dedication: string;
  summary: string;
  scope: string[];
  icon: LucideIcon;
  tag: string;
  featured?: boolean;
};

export type PlanCategory = {
  id: string;
  label: string;
  caption: string;
  accent: string;
  glow: string;
  plans: Plan[];
};

export const planCategories: PlanCategory[] = [
  {
    id: "document-cloud",
    label: "Document Cloud",
    caption:
      "Firma electrónica, gobernanza documental e integración con el ecosistema Microsoft y sistemas core.",
    accent: "text-doccloud",
    glow: "from-doccloud/25",
    plans: [
      {
        id: "dc-1",
        name: "Sign Enablement & PDF SPACES",
        dedication: "Bolsa de 10 hrs",
        tag: "Habilitación",
        icon: Signature,
        summary:
          "Puesta en marcha guiada de Acrobat Sign con plantillas listas para operar.",
        scope: [
          "Diseño de 5 plantillas complejas con campos dinámicos",
          "Capacitación a administradores y usuarios finales",
          "Soporte post-salida y acompañamiento inicial",
        ],
      },
      {
        id: "dc-2",
        name: "Workflow & Microsoft Integration",
        dedication: "Bolsa de 24 hrs",
        tag: "Automatización",
        icon: Workflow,
        featured: true,
        summary:
          "Los procesos de firma viven donde ya trabaja tu equipo: Teams y SharePoint.",
        scope: [
          "Integración con M365 (Teams / SharePoint)",
          "3 flujos automatizados en Power Automate",
          "Modelo de permisos, alertas y trazabilidad",
        ],
      },
      {
        id: "dc-3",
        name: "Enterprise Integration & API",
        dedication: "Bolsa de 50 hrs",
        tag: "Integración",
        icon: Network,
        summary:
          "Firma electrónica embebida en los sistemas críticos de la organización.",
        scope: [
          "Integración vía REST API con ERP/CRM (SAP, Salesforce)",
          "Webhooks en tiempo real y manejo de estados",
          "Documentación técnica y traspaso al equipo interno",
        ],
      },
    ],
  },
  {
    id: "creative-cloud",
    label: "Creative Cloud",
    caption:
      "Productividad creativa, IA generativa corporativa y automatización de producción a escala.",
    accent: "text-creative",
    glow: "from-creative/25",
    plans: [
      {
        id: "cc-1",
        name: "Creative Productivity & AI Enablement",
        dedication: "Bolsa de 10 hrs",
        tag: "Adopción IA",
        icon: Sparkles,
        summary:
          "Equipos creativos produciendo con IA generativa de forma consistente y segura.",
        scope: [
          "Talleres hands-on de IA Generativa",
          "Gestión y gobierno de CC Libraries",
          "Guía de prompts y criterios de marca",
        ],
      },
      {
        id: "cc-2",
        name: "Creative Production & Automation",
        dedication: "Bolsa de 24 hrs",
        tag: "Producción",
        icon: Paintbrush,
        featured: true,
        summary:
          "Menos trabajo repetitivo en el pipeline creativo, más piezas por sprint.",
        scope: [
          "Automatización de retoque masivo con scripts UXP",
          "Plantillas corporativas en Adobe Express",
          "Estandarización de entregables multiformato",
        ],
      },
      {
        id: "cc-3",
        name: "Enterprise AI & Firefly Services APIs",
        dedication: "Bolsa de 100 hrs",
        tag: "IA Enterprise",
        icon: Aperture,
        summary:
          "Generación de contenido a escala industrial con modelos propios y trazabilidad.",
        scope: [
          "Integración de Firefly APIs para volumen masivo",
          "Entrenamiento de Custom Models de marca",
          "Trazabilidad de contenido con C2PA",
        ],
      },
    ],
  },
  {
    id: "modulares",
    label: "Servicios Modulares",
    caption:
      "Acompañamiento continuo y capacidad técnica disponible según la demanda real de tu operación.",
    accent: "text-adobe-red",
    glow: "from-adobe-red/25",
    plans: [
      {
        id: "mod-1",
        name: "Soporte Nivel 2 & Acompañamiento",
        dedication: "Bolsas Flexibles (50 hrs, 120 hrs o Mensual)",
        tag: "Continuidad",
        icon: BadgeCheck,
        featured: true,
        summary:
          "Un especialista disponible para resolver, auditar y sostener la operación Adobe.",
        scope: [
          "Auditoría documental o creativa sobre demanda",
          "Matriz de hallazgos con plan de remediación",
          "Gestión avanzada de consola y escalamiento con Adobe",
        ],
      },
    ],
  },
];

export type CalculatorOption = {
  id: string;
  label: string;
  hours: number;
  detail: string;
  icon: LucideIcon;
};

export const calculatorOptions: CalculatorOption[] = [
  {
    id: "sso",
    label: "Configuración SSO y Gobernanza",
    hours: 10,
    detail: "Admin Console, dominios, perfiles de producto y políticas.",
    icon: FileCheck,
  },
  {
    id: "sign",
    label: "Plantillas y Flujos Acrobat Sign",
    hours: 15,
    detail: "Formularios complejos, roles de firma y recordatorios.",
    icon: Signature,
  },
  {
    id: "power-automate",
    label: "Integración Power Automate + M365",
    hours: 25,
    detail: "Teams, SharePoint y aprobaciones automatizadas.",
    icon: Workflow,
  },
  {
    id: "api",
    label: "Integración REST API / Webhooks",
    hours: 30,
    detail: "Conexión con ERP/CRM y eventos en tiempo real.",
    icon: Network,
  },
  {
    id: "firefly",
    label: "Capacitación en IA & Firefly",
    hours: 10,
    detail: "Talleres de IA generativa y guía de prompts corporativos.",
    icon: BrainCircuit,
  },
  {
    id: "scripts",
    label: "Automatización Creativa con Scripts",
    hours: 15,
    detail: "UXP, procesamiento por lotes y plantillas Express.",
    icon: Blocks,
  },
];

/** Bolsas comerciales disponibles; se recomienda la primera que cubra las horas estimadas. */
export const hourPackages = [10, 24, 50, 100, 120] as const;

export const footerHighlights = [
  { label: "Cobertura", value: "Chile", icon: Layers },
  { label: "Modalidad", value: "Remoto / Híbrido", icon: Plug },
  { label: "Facturación", value: "Directa o vía Nexsys", icon: BadgeCheck },
];
