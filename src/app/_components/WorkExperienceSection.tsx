import { useThemeStore } from "@/stores/themeStore";
import React from "react";
import { workExperience } from "../_lib/experience";
import { Card } from "@/components/ui/card";

export default function WorkExperienceSection() {
  const { theme } = useThemeStore();
  return (
    <section
      id="experience"
      className="min-h-screen lg:flex items-center justify-center px-10 lg:px-4 pt-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div
              key={job.title}
              className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card
                className={`backdrop-blur-md border p-8 transition-all duration-500 ${
                  theme == 'dark'
                    ? "bg-white/10 border-white/20 shadow-lg shadow-pink-500/20 hover:bg-white/15"
                    : "bg-white/40 border-white/40 shadow-lg shadow-pink-300/30 hover:bg-white/50"
                }`}
              >
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                    {job.title}
                  </h3>
                  <div
                    className={`text-lg mb-4 ${
                      theme == 'dark' ? "text-white/90" : "text-gray-700"
                    }`}
                  >
                    <span className="font-semibold">{job.company}</span>
                    <span
                      className={`ml-3 italic ${
                        theme == 'dark' ? "text-white/70" : "text-gray-600"
                      }`}
                    >
                      {job.duration}
                    </span>
                  </div>
                  <p
                    className={`text-base leading-relaxed mb-4 ${
                      theme == 'dark' ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {job.description}
                  </p>
                  {job.achievements && (
                    <ul
                      className={`text-base space-y-2 pl-5 ${
                        theme == 'dark' ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="list-disc">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
