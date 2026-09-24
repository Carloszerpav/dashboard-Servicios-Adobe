/**
 * URL canónica del sitio.
 *
 * En Vercel las variables se inyectan automáticamente: `VERCEL_PROJECT_PRODUCTION_URL`
 * apunta siempre al dominio de producción y `VERCEL_URL` al deployment actual
 * (útil en previews de PR). `NEXT_PUBLIC_SITE_URL` permite forzar un dominio propio.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit.startsWith("http") ? explicit : `https://${explicit}`;
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) {
    return `https://${production}`;
  }

  const deployment = process.env.VERCEL_URL;
  if (deployment) {
    return `https://${deployment}`;
  }

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const siteName = "Nexsys | Adobe Enterprise Consulting";

export const siteDescription =
  "Consultoría especializada Adobe: gobernanza, capacitación, automatización No-Code/Low-Code e integración de APIs en Document Cloud y Creative Cloud. Servicios distribuidos a través de Nexsys Chile.";
