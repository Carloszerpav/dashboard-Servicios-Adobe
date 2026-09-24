import { HoursCalculator } from "@/components/Calculator";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pillars } from "@/components/Pillars";
import { Plans } from "@/components/Plans";
import { QuoteProvider } from "@/components/QuoteProvider";

export default function HomePage() {
  return (
    <QuoteProvider>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <SectionDivider />
        <Plans />
        <SectionDivider />
        <HoursCalculator />
        <Contact />
      </main>
      <Footer />
    </QuoteProvider>
  );
}

function SectionDivider() {
  return (
    <div
      aria-hidden
      className="container-page h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
    />
  );
}
