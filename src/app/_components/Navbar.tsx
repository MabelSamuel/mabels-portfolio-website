"use client";
import { navLinks } from "@/app/_lib/nav-links";
import { useThemeStore } from "@/stores/themeStore";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const link of navLinks) {
        const element = document.getElementById(link.link);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.link);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/mabel-resume-dev.pdf";
    link.download = "Mabel-Samuel-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-5xl">
      <nav
        className={`backdrop-blur-md rounded-2xl border transition-all duration-300 ${
          theme === "dark"
            ? "bg-white/10 border-white/20 shadow-lg shadow-pink-500/20"
            : "bg-white/30 border-white/40 shadow-lg shadow-pink-300/30"
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <span className=" text-pink-500 text-2xl font-medium bg-clip-text">
              Mabel.
            </span>
            <div className="hidden lg:flex space-x-8 items-center">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.link)}
                  className={`capitalize font-semibold transition-all duration-300 hover:scale-105 ${
                    activeSection === link.link
                      ? "text-pink-500 "
                      : theme === "dark"
                      ? "text-white/80 hover:text-pink-400"
                      : "text-gray-700 hover:text-pink-600"
                  }`}
                >
                  {link.title}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={downloadResume}
                className="flex bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-all duration-300 gap-2"
              >
                <FaDownload className="w-4 h-4" />
                <span className="hidden lg:block">Resume</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-pink-500/20"
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5 text-white/80" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full hover:bg-pink-500/20"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X
                    className={`${
                      theme === "dark" ? "text-white/80" : ""
                    } w-5 h-5`}
                  />
                ) : (
                  <Menu
                    className={`${
                      theme === "dark" ? "text-white/80" : ""
                    } w-5 h-5`}
                  />
                )}
              </Button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white/20 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-3">
                {navLinks.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.link)}
                    className={` text-left py-2 transition-all duration-300 ${
                      activeSection === item.title
                        ? "text-pink-500 font-semibold"
                        : theme === "dark"
                        ? "text-white/80 hover:text-pink-400"
                        : "text-gray-700 hover:text-pink-600"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
