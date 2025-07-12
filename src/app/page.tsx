"use client"
import AboutMeSection from "@/app/_components/AboutMeSection";
import HeroSection from "@/app/_components/HeroSection";
import ProjectSection from "@/app/_components/ProjectSection";
import SkillsSection from "@/app/_components/SkillsSection";
import { useThemeStore } from "@/stores/themeStore";

export default function Home() {
  const { theme } = useThemeStore();
  return (
    <main className={`min-h-screen transition-all duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900"
          : "bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100"
      }`}>
      <HeroSection />
      <AboutMeSection/>
      <SkillsSection/>
      <ProjectSection/>
    </main>
  );
}
