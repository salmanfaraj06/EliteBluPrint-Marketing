import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Effortless Floor Plan Creation",
    description:
      "Skip the frustration of complex design software! With EliteBlueprint, simply describe your dream floor plan in plain English and watch it come to life on screen. Effortlessly create professional-looking layouts in seconds, no technical expertise required.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--fuchsia-500))] flex items-center justify-center text-white">
        <img
          src="public/effortless.jpg" // Replace with actual image path
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="EliteBlueprint Effortless Floor Plan Creation"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Visualization",
    description:
      "See your floor plan come to life as you create! Every adjustment and edit is reflected instantly, allowing everyone involved to visualize the evolving design. No more confusion about the latest version – collaborate with confidence and clarity.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="public/realtime.jpg" // Replace with actual image path
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="EliteBlueprint real-time floor plan visualization"
        />
      </div>
    ),
  },
  {
    title: "Expert Guidance at Your Fingertips",
    description:
      "Elevate your floor plan with professional consultations from experienced architects. Connect seamlessly with qualified professionals through EliteBlueprint and get tailored advice to bring your vision to life. From initial layout suggestions to optimization strategies, our architects are here to empower your design journey.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--blue-500))] flex items-center justify-center text-white">
        <img
          src="public/expert.jpg" // Replace with actual image path
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="EliteBlueprint professional consultations"
        />
      </div>
    ),
  },
  {
    title: "Intuitive Interface, Powerful Results",
    description:
      "EliteBlueprint offers a user-friendly interface that empowers anyone to create professional-looking floor plans. Don't let complex software hinder your creativity! Drag, drop, and customize elements with ease, bringing your dream space to life in minutes.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        <img
          src="public/interface.jpg" // Replace with actual image path
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="user-friendly interface of EliteBlueprint"
        />
      </div>
    ),
  },
];
function StickyScrollRevealDemo() {
  return (
    <div className="p-10 min-h-screen center flex-col space-y-8" id="features">
      <h1 className="text-7xl font-semibold text-center font-space-grotesk mb-2">
        Features
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default StickyScrollRevealDemo;
