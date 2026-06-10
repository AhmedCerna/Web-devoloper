/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingCTAs from "./components/FloatingCTAs";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-gray-200">
      {/* Structural Nav row */}
      <Navigation />

      {/* Main Single Page Contents */}
      <main>
        {/* Section 1: Hero Container */}
        <Hero />

        {/* Section 2: Credibility tech & speeds */}
        <TechStack />

        {/* Section 3: Core Conversion Services */}
        <Services />

        {/* Section 4: Showcase Work deploys */}
        <Portfolio />

        {/* Section 5 & 6: Strategic execution roadmap */}
        <Process />

        {/* Section 7: Resolute Rates tables */}
        <Pricing />

        {/* Section 8: FAQ Objections Panel */}
        <FAQs />

        {/* Section 9: Splitted Form Brief & WhatsApp panels */}
        <ContactSection />
      </main>

      {/* Section 10: Column and branding footer */}
      <Footer />

      {/* Section 11: Persistent Conversions floats */}
      <FloatingCTAs />
    </div>
  );
}

