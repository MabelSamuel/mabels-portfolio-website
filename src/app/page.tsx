"use client"
import AboutMeSection from "@/app/_components/AboutMeSection";
import HeroSection from "@/app/_components/HeroSection";
import ProjectSection from "@/app/_components/ProjectSection";
import SkillsSection from "@/app/_components/SkillsSection";
import { useThemeStore } from "@/stores/themeStore";
import CertificationSection from "./_components/CertificationSection";
import FooterSection from "./_components/FooterSection";

export default function Home() {
  const { theme } = useThemeStore();
  return (
    <main className={`min-h-screen transition-all duration-500 ${
        theme === "dark"
          ? "bg-[#161320]"
          : "bg-[#fff0f6]"
      }`}>
      <HeroSection />
      <AboutMeSection/>
      <SkillsSection/>
      <ProjectSection/>
      <CertificationSection/>
      <FooterSection/>
    </main>
  );
}
