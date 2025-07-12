import { useThemeStore } from "@/stores/themeStore";
import React from "react";

export default function CertificationSection() {
  const { theme } = useThemeStore();
  return (
    <section
      id="certifications"
      className="min-h-screen lg:flex items-center justify-center px-10 lg:px-4 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
