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
import Steps from "./components/Steps";

function App() {
  return (
    <div className="bg-[#070A0F] text-white relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <DesignFaster />
      <Steps />
      <HeroScrollDemo />
      <TypewriterEffectDemo />
      <StickyScrollRevealDemo />
      <CardHoverEffectDemo />
      <UserFriendly />
      <LovedByArchi />
      <Testimonials />
      <TryForFree />
      <Footer />
      <div className="bg1 h-[300px] w-[800px] rotate-45 absolute top-[88vh] left-[-15vw] z-0 opacity-50" />
      <div className="bg2 h-[1200px] w-[500px] rotate-[35deg] absolute top-[-10vh] right-[-10vh] z-0 opacity-50" />
    </div>
  );
}

export default App;
