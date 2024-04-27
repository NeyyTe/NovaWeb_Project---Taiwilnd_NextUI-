import React from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriterFolder/typewriter-effect";

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Bienvenue",
    },
    {
      text: "sur",
    },
    {
      text: "mon",
    },
    {
      text: "Portfolio",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="  flex flex-col items-center justify-center h-[20rem] z-50">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        Le chemin vers la liberté commence ici
      </p> */}
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",

  plugins: [require("tailwindcss-animate")],
};
