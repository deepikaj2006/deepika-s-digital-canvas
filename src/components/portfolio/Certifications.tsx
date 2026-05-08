import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Section } from "./Section";

const certs = [
  { title: "NPTEL — Practical Cyber Security", issuer: "NPTEL" },
  { title: "Natural Language Processing", issuer: "Course" },
  { title: "Cyber Security and Privacy", issuer: "Course" },
  { title: "Problem Solving", issuer: "HackerRank" },
  { title: "Frontend Developer (React)", issuer: "HackerRank" },
  { title: "Front End Development", issuer: "Great Learning" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title={<>Certifications & <span className="text-gradient">Courses</span></>}
      subtitle="Continuous learning across security, AI, and modern web."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass glass-hover rounded-2xl p-5 flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <BadgeCheck className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-medium leading-snug mb-1">{c.title}</h3>
              <p className="text-xs text-muted-foreground font-mono">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
