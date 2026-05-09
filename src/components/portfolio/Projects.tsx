import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";

type Category = "All" | "AI/ML" | "Full Stack" | "Web Apps";

const projects = [
  {
    title: "Real Estate Marketplace",
    description:
      "Full-stack MERN real estate platform where users can search, list, and manage properties. JWT auth, Redux state management, and Firebase image uploads.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Redux"],
    categories: ["Full Stack", "Web Apps"] as Category[],
    github: "https://github.com/deepikaj2006/mern-estate",
    demo: "https://mern-estate-lz33.onrender.com/" as string | null,
    accent: "from-neon-blue to-neon-purple",
  },
  {
    title: "Intelligent Threat Detection",
    description:
      "AI-powered system using PyTorch & MobileNetV2 to detect fights and suspicious activities from images and videos. Built with a clean Django monitoring interface.",
    tech: ["Python", "Django", "PyTorch", "OpenCV", "Deep Learning"],
    categories: ["AI/ML", "Web Apps"] as Category[],
    github: "https://github.com/Harini-Moorthi/Threat-detector",
    demo: null,
    accent: "from-neon-purple to-neon-cyan",
  },
];

const filters: Category[] = ["All", "AI/ML", "Full Stack", "Web Apps"];

export function Projects() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={<>Selected <span className="text-gradient">Projects</span></>}
      subtitle="A few things I've built recently."
    >
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === f
                ? "bg-gradient-primary text-primary-foreground shadow-glow"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass glass-hover rounded-3xl p-7 group relative overflow-hidden"
            >
              <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
              <div className="relative">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.categories.map((c) => (
                    <span key={c} className="text-[10px] uppercase tracking-wider font-mono text-neon-cyan border border-neon-cyan/30 px-2 py-0.5 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 glass rounded-full px-4 py-2.5 text-sm font-medium hover:border-primary transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground rounded-full px-4 py-2.5 text-sm font-medium hover:shadow-glow transition-all"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
