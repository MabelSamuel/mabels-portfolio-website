"use client";
import { useThemeStore } from "@/stores/themeStore";
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration.",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React", "Firebase", "Material-UI", "WebSocket"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with glassmorphism design.",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    github: "#",
    live: "#",
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
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div
                className={`backdrop-blur-md border overflow-hidden transition-all duration-500 hover:scale-105 group rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/10 border-white/20 shadow-lg shadow-pink-500/20"
                    : "bg-white/40 border-white/40 shadow-lg shadow-pink-300/30"
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      theme === "dark" ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/20 text-pink-600 hover:bg-pink-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-pink-400 text-sm font-medium text-pink-600 hover:bg-pink-100 transition"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-sm font-medium text-white hover:opacity-90 transition"
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
