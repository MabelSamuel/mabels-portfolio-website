"use client";
import { useThemeStore } from "@/stores/themeStore";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Opportunity Board",
    description:
      "Fullstack opportunity platform built to centralize career and development opportunities. Owned the engineering implementation across backend architecture, APIs, database integration, admin workflows, and deployment.",
    live: "https://opportunity.techrity.org",
    preview: "https://opportunity.techrity.org",
    tech: ["Next.js", "TypeScript", "Node.js", "Hapi", "MySQL", "Tailwind CSS"],
    image: "/opportunity-board.png",
  },
  {
    title: "TMP",
    description:
      "A mentorship and opportunity management platform built to connect mentors, mentees, and organizations through structured onboarding, opportunity listings, and administrative workflows.",
    live: "https://tmp.techrity.org",
    tech: ["Next.js", "Node.js", "Hapi", "MySQL", "Tailwind CSS"],
    image: "/tmp.png",
  },
  {
    title: "Amabilis",
    description:
      "A fullstack e-commerce platform with product listings, cart management, authentication, and secure checkout. Built efficient backend APIs and responsive interfaces for a seamless shopping experience.",
    image: "/amabilis.png",
    tech: ["Next.js", "JavaScript", "Tailwind", "Express.js", "mongodb"],
    github:
      "https://github.com/MabelSamuel/amabilis-e-commerce-website-expressJs",
    live: "https://amabilis-e-commerce-website-express-js.vercel.app/",
  },
  {
    title: "Ngbuka",
    description:
      "A fullstack automotive marketplace connecting car owners with mechanics and spare-parts suppliers. Built features for product listings, service bookings, authentication, and seamless API-driven interactions.",
    image: "/ngbukaa.png",
    tech: ["React", "Firebase", "Next", "Typescript", "Tailwind"],
    github: "#",
    live: "https://app.ngbuka.com/",
  },
];
export default function ProjectSection() {
  const { theme } = useThemeStore();
  return (
    <section
      id="projects"
      className="min-h-screen lg:flex items-center justify-center px-10 lg:px-4 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Projects
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project?.title}
              className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div
                className={`backdrop-blur-md border overflow-hidden transition-all duration-500 group rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/10 border-white/20 shadow-lg shadow-pink-500/20"
                    : "bg-white/70 border-white/40 shadow-lg shadow-pink-300/30"
                }`}
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  {project.preview ? (
                    <div className="absolute inset-0 overflow-hidden">
                      <iframe
                        src={project.preview}
                        title={`${project.title} live preview`}
                        className="absolute left-0 top-0 h-[600px] w-[1000px] origin-top-left pointer-events-none"
                        style={{
                          transform: "scale(0.4)",
                          transformOrigin: "top left",
                        }}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <Image
                      src={project?.image || "/placeholder.svg"}
                      alt={project?.title || "project"}
                      fill
                      className="object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {project?.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      theme === "dark" ? "text-white/80" : "text-gray-600"
                    }`}
                    style={{
                      lineHeight: "1.25em",
                      height: "calc(7 * 1.25em)",
                      overflow: "hidden",
                      margin: 0,
                    }}
                  >
                    {project?.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-700 hover:bg-pink-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-pink-400 text-sm font-medium text-pink-700 hover:bg-pink-100 transition"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project?.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-pink-600 text-sm font-medium text-white hover:opacity-90 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
