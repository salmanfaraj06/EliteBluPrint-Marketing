import React from "react";
import { HeroScrollDemo } from "./components/test/hero-animation";
import Navbar from "./components/test/navbar";
import StickyScrollRevealDemo from "./components/test/scroll";
import TypewriterEffectDemo from "./components/test/typer";
import CardHoverEffectDemo from "./components/test/card";
import Footer from "./components/test/footer";
import TryForFree from "./components/TryForFree";
import Testimonials from "./components/Testimonials";
import LovedByArchi from "./components/LovedByArchi";
import UserFriendly from "./components/UserFriendly";
import Hero from "./components/Hero";
import DesignFaster from "./components/DesignFaster";

function App() {
  return (
    <div className="bg-[#070A0F] text-white">
      <Navbar />

      <Hero />
      <DesignFaster />
      <HeroScrollDemo />
      <TypewriterEffectDemo />
      <StickyScrollRevealDemo />
      <CardHoverEffectDemo />

      <UserFriendly />
      <LovedByArchi />
      <Testimonials />
      <TryForFree />

      <Footer />
    </div>
  );
}

export default App;
