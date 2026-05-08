import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    company: "Softech System Solution",
    location: "Salem",
    role: "AI/ML Intern",
    duration: "Jun 2025 – Jul 2025",
    bullets: [
      "Built and evaluated machine learning models using Python and Scikit-learn",
      "Performed data preprocessing and model evaluation",
      "Worked on real-world AI datasets and ML workflows",
    ],
  },
  {
    company: "Litz Tech",
    location: "Coimbatore",
    role: "Full Stack Development Intern",
    duration: "Jan 2025 – Feb 2025",
    bullets: [
      "Developed backend and frontend components",
      "Worked with Java for web-based applications",
      "Integrated APIs and tested application features",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title={<>Where I've <span className="text-gradient">worked</span></>}
      subtitle="Hands-on experience across AI/ML and full stack engineering."
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
        {items.map((it, i) => (
          <motion.div
            key={it.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-12 md:grid md:grid-cols-2 md:gap-12 ${
              i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
            }`}
          >
            <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
              <div className="absolute left-2.5 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
              <div className="glass rounded-2xl p-6 glass-hover">
                <div className="flex items-center gap-2 text-xs text-neon-cyan font-mono mb-2 md:justify-start">
                  <Calendar className="w-3.5 h-3.5" /> {it.duration}
                </div>
                <h3 className="font-display text-xl font-bold">{it.role}</h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1 mb-4 md:justify-start">
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {it.company}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {it.location}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-neon-purple mt-1.5 w-1 h-1 rounded-full bg-neon-purple flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
