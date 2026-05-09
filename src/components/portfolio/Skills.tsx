import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  { title: "Languages", items: ["Java", "Python", "C", "JavaScript"] },
  { title: "Frontend", items: ["React JS", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Django", "REST APIs"] },
  { title: "Database", items: ["MongoDB", "MySQL"] },
  { title: "Machine Learning", items: ["Scikit-learn", "PyTorch", "Pandas", "NumPy", "Matplotlib"] },
  { title: "Cloud", items: ["AWS (Learning)", "Cloud Concepts", "Firebase"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Power BI"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title={<>Skills & <span className="text-gradient">Tooling</span></>}
      subtitle="My toolkit for building modern, intelligent applications."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass glass-hover rounded-2xl p-6 group relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
            <div className="flex items-center justify-between mb-4 relative">
              <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              <span className="font-mono text-xs text-neon-cyan">0{idx + 1}</span>
            </div>
            <div className="flex flex-wrap gap-2 relative">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-full bg-secondary/60 border border-border text-foreground/90 hover:border-primary hover:text-primary transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
