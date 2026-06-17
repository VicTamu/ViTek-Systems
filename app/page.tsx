import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LandingEffects } from "@/components/LandingEffects";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WorkShowcase } from "@/components/WorkShowcase";

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Nav />
      <LandingEffects />
      <main id="main-content">
        <Hero />
        <WorkShowcase />
        <WhatWeDo />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
