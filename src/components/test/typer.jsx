import { TypewriterEffect } from "../ui/typewriter-effect";

function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "plans",
    },
    {
      text: "with",
    },
    {
      text: "EliteBluPrint.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] mt-[-350px] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10 ">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      
    </div>
  );
}

export default TypewriterEffectDemo;
