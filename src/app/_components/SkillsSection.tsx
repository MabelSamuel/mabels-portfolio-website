import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import { Moon, Sun, Menu, X, ExternalLink, Mail, Linkedin, Github } from "lucide-react"
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiPython,
  SiFigma,
  SiTailwindcss,
  SiNodedotjs,
  SiGithub,
  SiDjango
} from "react-icons/si"

export default function SkillsSection() {
  const { theme } = useThemeStore();
  const skills = [
    { name: "React", icon: <SiReact className="w-6 h-6" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
    { name: "Vue.js", icon: <SiVuedotjs className="w-6 h-6" /> },
    { name: "Nuxt.js", icon: <SiNuxtdotjs className="w-6 h-6" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6" /> },
    { name: "Python", icon: <SiPython className="w-6 h-6" /> },
    { name: "Django", icon: <SiDjango className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
    { name: "GitHub", icon: <SiGithub className="w-6 h-6" /> },
    { name: "Figma", icon: <SiFigma className="w-6 h-6" /> },
  ]
  return (
    <section
      id="skills"
      className="min-h-screen lg:flex items-center justify-center px-10 lg:px-4 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Skills
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="w-full animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`backdrop-blur-md border p-6 transition-all duration-500 hover:scale-105 text-center group rounded-2xl${
                    theme === "dark"
                      ? "bg-white/10 border-white/20 shadow-lg shadow-pink-500/20 hover:bg-white/15"
                      : "bg-white/40 border-white/40 shadow-lg shadow-pink-300/30 hover:bg-white/50"
                  }`}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <div className="text-white text-xl">{skill.icon}</div>
                    </div>
                    <span className={`font-semibold text-lg ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
