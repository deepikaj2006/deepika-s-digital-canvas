import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Terminal } from "lucide-react";
import { Section } from "./Section";

const profiles = [
  { name: "GitHub", url: "https://github.com/deepikaj2006", icon: Github, handle: "@deepikaj2006", color: "from-neon-blue to-neon-purple" },
  { name: "LinkedIn", url: "https://linkedin.com/in/deepika-j-474a93378", icon: Linkedin, handle: "Deepika J", color: "from-neon-cyan to-neon-blue" },
  { name: "LeetCode", url: "https://leetcode.com/u/deepi_2006/", icon: Code2, handle: "deepi_2006", color: "from-neon-purple to-neon-cyan" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/23CS032_KPRIET", icon: Terminal, handle: "23CS032_KPRIET", color: "from-neon-blue to-neon-cyan" },
];

export function CodingProfiles() {
  return (
    <Section
      id="profiles"
      eyebrow="Around the Web"
      title={<>Social <span className="text-gradient">Profiles</span></>}
      subtitle="Connect with me across platforms."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-hover rounded-2xl p-6 group relative overflow-hidden block"
          >
            <div className={`absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br ${p.color} opacity-20 blur-3xl group-hover:opacity-50 transition-opacity`} />
            <div className="relative">
              <p.icon className="w-8 h-8 mb-4 text-foreground group-hover:text-neon-cyan transition-colors" />
              <h3 className="font-display font-semibold">{p.name}</h3>
              <p className="text-xs text-muted-foreground font-mono mt-1">{p.handle}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
