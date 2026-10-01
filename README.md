# Consultoría Adobe — Landing Page

Landing page de la oferta de consultoría Adobe de **Carlos Zerpa** (Preventa Adobe · Systems Analyst), distribuida a través de **Nexsys Chile**.

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

## Despliegue en Vercel

El proyecto no necesita configuración adicional: Vercel detecta Next.js y usa `npm run build` con la salida estática de la App Router.

1. En [vercel.com/new](https://vercel.com/new) importa el repositorio `dashboard-Servicios-Adobe`.
2. Deja el framework preset en **Next.js** y el root directory en `./`.
3. Pulsa **Deploy**. No hay variables de entorno obligatorias.

Cada push a `main` genera un deployment de producción y cada pull request su propio preview.

`vercel.json` fija el framework en `nextjs` junto con el comando de build e instalación. Esto importa cuando el proyecto de Vercel se creó **antes** de que el repositorio tuviera código: en ese caso Vercel guarda el preset "Other" y el build falla buscando un directorio `public` de salida. Con `vercel.json` el preset del archivo manda por sobre el del dashboard.

### Dominio y URLs absolutas

`lib/site.ts` resuelve la URL canónica que usan `metadataBase`, el sitemap y `robots.txt`. Sin configurar nada toma las variables que Vercel inyecta (`VERCEL_PROJECT_PRODUCTION_URL` en producción, `VERCEL_URL` en previews). Al conectar un dominio propio, define la variable de entorno `NEXT_PUBLIC_SITE_URL` (ej. `https://consultoria.nexsys.cl`) para fijarlo.

Requiere Node 20 o superior (desarrollado y verificado en Node 22). No se fija la versión en el repositorio para que Vercel use la de su propia configuración de proyecto y no haya conflicto.

## Estructura

```
app/
  layout.tsx          Metadata, fuente Inter y clase dark
  page.tsx            Composición de la landing
  globals.css         Tokens base, utilidades (.gradient-frame, .surface, .glass)
  icon.svg            Favicon con el gradiente de marca
  opengraph-image.tsx Imagen 1200x630 para compartir el enlace
  robots.ts           robots.txt
  sitemap.ts          sitemap.xml
components/
  Navbar.tsx          Header fijo, badge "Partner" y menú móvil
  Hero.tsx            Branding personal + tarjeta de perfil glassmorphism
  Pillars.tsx         4 pilares de alcance
  Plans.tsx           Catálogo de planes con pestañas (Tabs)
  Calculator.tsx      Estimador de horas y bolsa recomendada
  Contact.tsx         Formulario de contacto
  Footer.tsx          Legales y branding
  QuoteProvider.tsx   Contexto que precarga el mensaje del formulario
  ui/                 BrandLockup (logos), Reveal (scroll reveal) y SectionHeading
public/               Logos Nexsys y Adobe + fotografía de perfil
lib/
  content.ts          Contenido editable: perfil, pilares, planes, calculador
  site.ts             URL canónica del sitio según el entorno
```

Todo el contenido comercial (planes, horas, alcances, especialidades) vive en `lib/content.ts`; no hace falta tocar los componentes para actualizar la oferta.

## Detalles de implementación

- **Sin precios numéricos.** Cada plan expone dedicación y alcance, y cierra con `Solicitar Evaluación`.
- **Flujo conectado.** Los botones de los planes y del calculador precargan el mensaje del formulario de contacto (`QuoteProvider`) y hacen scroll hasta él.
- **Bolsa recomendada.** El calculador suma las horas marcadas y sugiere la primera bolsa comercial que las cubre (`hourPackages` en `lib/content.ts`); si el total las supera, propone un programa a medida.
- **Animaciones.** `Reveal` aplica `initial={{ opacity: 0, y: 20 }}` + `whileInView` con `viewport={{ once: true }}`; las transiciones se desactivan bajo `prefers-reduced-motion`.
- **Paleta.** `#0D0D0D` / `#141414` de base, con acentos Adobe Red `#E31B23`, Document Cloud `#7B2CBF` y Creative `#00A3FF` definidos en `tailwind.config.ts`.

## Personalización

**Imágenes de marca.** En `public/` viven `nexsys-logo.png` (180x34, blanco con transparencia), `adobe-logo.png` (480x116) y `carlos-zerpa.jpg` (640x640, encuadre a rostro y hombros). Los logos se muestran con `components/ui/BrandLockup.tsx`, que los sirve sin optimizar para mantener los bordes nítidos; si reemplazas un archivo por otro de distinta proporción, actualiza las constantes `NEXSYS_RATIO` / `ADOBE_RATIO` de ese componente.

**Fotografía de perfil:** apunta `profile.photoUrl` en `lib/content.ts` al archivo dentro de `public/`. Si queda en `null` se muestra el avatar tipográfico con las iniciales.

**Envío del formulario:** `handleSubmit` en `components/Contact.tsx` simula el envío. Reemplaza el `setTimeout` por la llamada real al endpoint, CRM o servicio de correo de Nexsys.

## Experiencia de evento (`/evento`)

Pantalla de apertura para presentaciones presenciales, disponible **solo en la rama `evento-2026`**. Es un mapa orbital del equipo Adobe de Nexsys Chile: un núcleo central y dos órbitas con los siete segmentos, donde cada segmento abre un panel con las personas que lo integran.

Vive aislada del resto de la landing para poder retirarse sin reconstruir nada: basta con borrar `app/evento/`, `components/evento/`, `lib/team.ts` y `public/evento/`. No modifica ningún componente, estilo ni dato existente.

```
app/evento/page.tsx                     Ruta, metadata (noindex) y composición
components/evento/
  OrbitalExperience.tsx                 Orquestador: secuencia, selección y panel
  OrbitField.tsx                        Anillos, conexiones y puntos orbitantes (SVG)
  OrbitCore.tsx                         Núcleo Adobe · Nexsys Chile · 360°
  SegmentNode.tsx                       Nodo interactivo de cada segmento
  SegmentPanel.tsx                      Panel del segmento (individual o grupal)
  MemberCard.tsx                        Tarjeta de persona
  EventModal.tsx                        Modal base (overlay, Escape, foco)
  WhatsAppChannel.tsx                   Botón y modal con el QR del canal
lib/team.ts                             Segmentos, personas y geometría orbital
public/equipo/                          Fotografías del equipo
public/evento/whatsapp-qr.jpg           QR del canal de WhatsApp
```

### Fotografías del equipo

Coloca cada archivo en `public/equipo/` y apunta su `photoUrl` en `lib/team.ts`. Mientras el valor sea `null` la tarjeta muestra el avatar tipográfico con las iniciales, igual que el perfil de la landing.

| Persona | Archivo esperado |
| --- | --- |
| Luis Atabales | `public/equipo/luis-atabales.jpg` |
| Francisco Araya | `public/equipo/francisco-araya.jpg` |
| Jean Sanchez | `public/equipo/jean-sanchez.jpg` |
| Javiera Castro | `public/equipo/javiera-castro.jpg` |
| Constanza Moya | `public/equipo/constanza-moya.jpg` |
| Khendra Hurtado | `public/equipo/khendra-hurtado.jpg` |
| Mayra Giraldo | `public/equipo/mayra-giraldo.jpg` |

Formato recomendado: JPG cuadrado de 640x640 con encuadre a rostro y hombros, igual que `carlos-zerpa.jpg`. Carlos Zerpa reutiliza esa fotografía ya existente en la raíz de `public/`, sin duplicarla.

### QR del canal de WhatsApp

`public/evento/whatsapp-qr.jpg` se muestra tal cual en el modal, sin generación por código ni servicios externos. Para cambiarlo, reemplaza el archivo y actualiza `whatsappChannel` en `lib/team.ts` si la imagen tiene otras dimensiones.

### Animación

La secuencia de apertura encadena núcleo, anillos y nodos con la curva `EASE` del proyecto. Solo los detalles decorativos (puntos sobre las órbitas) mantienen movimiento continuo; los nodos de segmento son estáticos para no dificultar la lectura ni el click. Todo el movimiento se desactiva con `prefers-reduced-motion`.
