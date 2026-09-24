# Adobe Enterprise Consulting — Landing Page

Landing page de la oferta de consultoría Adobe de **Carlos Zerpa** (Preventa Adobe Enterprise · Systems Analyst), distribuida a través de **Nexsys Chile**.

Construida con **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion** y **TypeScript**, con estética dark minimalista inspirada en Adobe Spectrum.

## Puesta en marcha

```bash
npm install
npm run dev     # http://localhost:3000
```

Otros comandos:

```bash
npm run build      # build de producción
npm start          # servir el build
npm run lint       # ESLint (next/core-web-vitals)
npm run typecheck  # TypeScript sin emitir
```

## Estructura

```
app/
  layout.tsx          Metadata, fuente Inter y clase dark
  page.tsx            Composición de la landing
  globals.css         Tokens base, utilidades (.gradient-frame, .surface, .glass)
components/
  Navbar.tsx          Header fijo, badge "Partner" y menú móvil
  Hero.tsx            Branding personal + tarjeta de perfil glassmorphism
  Pillars.tsx         4 pilares de alcance
  Plans.tsx           Catálogo de planes con pestañas (Tabs)
  Calculator.tsx      Estimador de horas y bolsa recomendada
  Contact.tsx         Formulario de contacto
  Footer.tsx          Legales y branding
  QuoteProvider.tsx   Contexto que precarga el mensaje del formulario
  ui/                 Reveal (scroll reveal) y SectionHeading
lib/
  content.ts          Contenido editable: perfil, pilares, planes, calculador
```

Todo el contenido comercial (planes, horas, alcances, especialidades) vive en `lib/content.ts`; no hace falta tocar los componentes para actualizar la oferta.

## Detalles de implementación

- **Sin precios numéricos.** Cada plan expone dedicación y alcance, y cierra con `Solicitar Evaluación`.
- **Flujo conectado.** Los botones de los planes y del calculador precargan el mensaje del formulario de contacto (`QuoteProvider`) y hacen scroll hasta él.
- **Bolsa recomendada.** El calculador suma las horas marcadas y sugiere la primera bolsa comercial que las cubre (`hourPackages` en `lib/content.ts`); si el total las supera, propone un programa a medida.
- **Animaciones.** `Reveal` aplica `initial={{ opacity: 0, y: 20 }}` + `whileInView` con `viewport={{ once: true }}`; las transiciones se desactivan bajo `prefers-reduced-motion`.
- **Paleta.** `#0D0D0D` / `#141414` de base, con acentos Adobe Red `#E31B23`, Document Cloud `#7B2CBF` y Creative `#00A3FF` definidos en `tailwind.config.ts`.

## Personalización

**Fotografía de perfil:** deja el archivo en `public/` y apunta `profile.photoUrl` en `lib/content.ts` (ej. `"/carlos-zerpa.jpg"`). Mientras sea `null` se muestra el avatar tipográfico con las iniciales.

**Envío del formulario:** `handleSubmit` en `components/Contact.tsx` simula el envío. Reemplaza el `setTimeout` por la llamada real al endpoint, CRM o servicio de correo de Nexsys.
