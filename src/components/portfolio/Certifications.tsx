import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Section } from "./Section";

const certs = [
  // Infosys Springboard
  { title: "Principles of Generative AI Certification", issuer: "Infosys Springboard" },
  { title: "Artificial Intelligence Primer Certification", issuer: "Infosys Springboard" },
  { title: "Introduction to Artificial Intelligence", issuer: "Infosys Springboard" },
  { title: "Introduction to Deep Learning", issuer: "Infosys Springboard" },
  { title: "Deep Learning for Developers", issuer: "Infosys Springboard" },
  { title: "Introduction to Natural Language Processing", issuer: "Infosys Springboard" },
  { title: "Introduction to Data Science", issuer: "Infosys Springboard" },
  { title: "Computer Vision 101", issuer: "Infosys Springboard" },
  { title: "Introduction to OpenAI GPT Models", issuer: "Infosys Springboard" },
  { title: "OpenAI GPT-3 for Developers", issuer: "Infosys Springboard" },
  { title: "Generative Models for Developers", issuer: "Infosys Springboard" },
  { title: "Generative AI Unleashing", issuer: "Infosys Springboard" },
  { title: "Prompt Engineering", issuer: "Infosys Springboard" },
  { title: "Introduction to Robotic Process Automation", issuer: "Infosys Springboard" },
  { title: "Agile Scrum in Practice", issuer: "Infosys Springboard" },
  // Others
  { title: "NPTEL — Practical Cyber Security", issuer: "NPTEL" },
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
      subtitle="Continuous learning across AI, GenAI, security, and modern web — including 15+ Infosys Springboard certifications."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
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
