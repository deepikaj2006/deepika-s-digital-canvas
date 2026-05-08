import { motion } from "framer-motion";
import { Trophy, Users, Bug } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Trophy, title: "250+ Coding Problems", text: "Solved across LeetCode, HackerRank, and GeeksforGeeks." },
  { icon: Users, title: "IEEE Education Society", text: "Active member contributing to academic & technical events." },
  { icon: Bug, title: "Strong Problem Solver", text: "Sharp debugging instincts and a love for clean code." },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Milestones"
      title={<>Achievements & <span className="text-gradient">Highlights</span></>}
    >
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-hover rounded-2xl p-7 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-5 animate-glow">
              <it.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{it.title}</h3>
            <p className="text-sm text-muted-foreground">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
