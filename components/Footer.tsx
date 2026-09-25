import { BrandLockup } from "@/components/ui/BrandLockup";
import { navLinks, profile } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-900/40">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <BrandLockup size="lg" />
            <p className="mt-5 text-[12.5px] leading-relaxed text-white/45">
              Enterprise Consulting · {profile.name}
              <span className="block text-white/30">{profile.role}</span>
            </p>
            <p className="mt-5 text-[12.5px] leading-relaxed text-white/40">
              Servicios distribuidos oficialmente a través de Nexsys Chile.
              Adobe, Acrobat Sign, Creative Cloud, Document Cloud y Firefly son
              marcas registradas de Adobe Inc.
            </p>
          </div>

          <nav aria-label="Enlaces del pie de página">
            <p className="eyebrow">Navegación</p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Líneas de servicio</p>
            <ul className="mt-4 space-y-2.5 text-[13px] text-white/50">
              <li>Document Cloud · Acrobat Sign</li>
              <li>Creative Cloud · Firefly Services</li>
              <li>Integraciones No-Code / Low-Code</li>
              <li>Soporte Nivel 2 & Acompañamiento</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name} · Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-adobe-red" />
            Adobe Enterprise Partner — Nexsys Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
