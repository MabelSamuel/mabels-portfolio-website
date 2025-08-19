import { useThemeStore } from "@/stores/themeStore";
import React from "react";

export default function AboutMeSection() {
  const { theme } = useThemeStore();
  return (
    <section
      id="aboutMe"
      className="min-h-screen lg:flex items-center justify-center px-10 lg:px-4 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div
          className={`rounded-2xl backdrop-blur-md border transition-all duration-500 hover:scale-105 ${
            theme === "dark"
              ? "bg-white/10 border-white/20 shadow-lg shadow-pink-500/20"
              : "bg-white/40 border-white/40 shadow-lg shadow-pink-300/30"
          }`}
        >
          <div className="p-8">
            <p
              className={`text-lg leading-relaxed mb-6 ${
                theme === "dark" ? "text-white/90" : "text-gray-700"
              }`}
            >
              I started my coding journey in 2023 learning python before transitioning to full stack web development. 
              I'm a passionate full-stack developer with almost 2 years of
              experience creating beautiful and functional web applications. I
              love turning complex problems into simple, beautiful designs.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-white/90" : "text-gray-700"
              }`}
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee while sketching new ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
