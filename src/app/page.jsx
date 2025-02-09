import AboutMeSection from "@/app/_components/AboutMeSection";
import HeroSection from "@/app/_components/HeroSection";
import ProjectSection from "@/app/_components/ProjectSection";
import SkillsSection from "@/app/_components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-10">
      <HeroSection />
      <AboutMeSection/>
      <SkillsSection/>
      <ProjectSection/>
    </main>
  );
}
