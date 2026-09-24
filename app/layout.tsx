import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Carlos Zerpa · Consultoría Adobe Enterprise | Nexsys Chile",
    template: "%s | Nexsys Adobe Enterprise Consulting",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Adobe Enterprise",
    "Acrobat Sign",
    "Document Cloud",
    "Creative Cloud",
    "Firefly Services",
    "Power Automate",
    "Nexsys Chile",
    "Consultoría Adobe",
  ],
  authors: [{ name: "Carlos Zerpa" }],
  openGraph: {
    title: "Consultoría Especializada Adobe · Carlos Zerpa | Nexsys Chile",
    description:
      "De la gobernanza a la automatización con IA: bolsas de horas de consultoría Adobe para resellers y clientes enterprise.",
    url: "/",
    siteName,
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría Especializada Adobe · Carlos Zerpa | Nexsys Chile",
    description:
      "De la gobernanza a la automatización con IA: bolsas de horas de consultoría Adobe para resellers y clientes enterprise.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} dark`}>
      <body className="bg-ink-950">{children}</body>
    </html>
  );
}
