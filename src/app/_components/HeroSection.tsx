"use client"
import { useThemeStore } from "@/stores/themeStore";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/MabelSamuel", label: "GitHub" },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/mabel-samuel-2bb9b42a9/",
    label: "LinkedIn",
  },
  { icon: FaTwitter, url: "https://x.com/Maple_berryblue", label: "X" },
  {
    icon: FaEnvelope,
    url: "mailto:mapleberrysamuel@gmail.com",
    label: "Email",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/maple_berryblue/",
    label: "Instagram",
  },
];

export default function HeroSection() {
  const { theme } = useThemeStore();
  return (
    <section
      id="home"
      className="min-h-screen lg:flex items-center justify-center px-10 lg:px-4 pt-24"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 lg:h-[70vh]">
          <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-auto">
            <Image
              src="/mabel-potrait.jpg"
              alt="Mabel Samuel"
              fill
              className="object-cover md:object-contain lg:object-cover rounded-xl "
              priority
            />
          </div>
          <div className="py-6 flex flex-col justify-center space-y-16 text-lg">
            <div className={theme === "dark" ? "text-white": "text-gray-800"}>
              <div>Hi, my name is</div>
              <h1 className="text-5xl md:text-6xl text-pink-500 bg-clip-text animate-pulse">
                Mabel Samuel.
              </h1>
              <p className="mt-16">Fondly called Mapleberry.</p>
              <p>
                I&apos;m a software engineer currently based in Rivers,
                Nigeria.
              </p>
              <p>
                Fun fact, I&apos;d rather read the documentation than watch a youtube
                video.
              </p>
            </div>
            <div className="flex lg:justify-between space-x-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-2xl ${theme === "dark" ? "text-white": "text-gray-600"}  hover:text-pink-500 transition-colors`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
