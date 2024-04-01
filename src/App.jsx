import React from "react";
import { HeroScrollDemo } from "./components/test/hero-animation";
import Navbar from "./components/test/navbar";
import StickyScrollRevealDemo from "./components/test/scroll";
import TypewriterEffectDemo from "./components/test/typer";
import CardHoverEffectDemo from "./components/test/card";
import Footer from "./components/test/footer";
import TryForFree from "./components/TryForFree";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-[#070A0F] text-white">
      <Navbar />
      <HeroScrollDemo />
      <TypewriterEffectDemo />
      <StickyScrollRevealDemo />
      <CardHoverEffectDemo />

      <Testimonials />

      <TryForFree />
      <Footer />
    </div>
  );
}

export default App;
