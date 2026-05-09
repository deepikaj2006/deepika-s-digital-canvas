import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/deepika-profile.jpeg";
import resumePdf from "@/assets/Deepika_J_Resume.pdf";

const techStack = [
  "React", "Node.js", "Python", "PyTorch", "MongoDB", "Express", "Tailwind",
  "Scikit-learn", "Django", "JavaScript", "Java", "MySQL", "Firebase", "Git",
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* animated background blobs */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-neon-purple/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 -right-32 w-[500px] h-[500px] bg-neon-blue/30 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-neon-cyan/20 rounded-full blur-3xl animate-blob [animation-delay:2s]" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-muted-foreground">Available for internships & opportunities</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
            Hi, I'm <span className="text-gradient">Deepika J</span>
          </h1>
          <p className="font-mono text-base md:text-lg text-muted-foreground mb-5">
            <span className="text-neon-cyan">{"<"}</span>
            AI/ML Enthusiast · Full Stack Developer · Problem Solver
            <span className="text-neon-cyan">{" />"}</span>
          </p>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-10">
            Passionate Computer Science student focused on building intelligent applications
            using <span className="text-foreground font-medium">Machine Learning</span>,{" "}
            <span className="text-foreground font-medium">Full Stack Development</span>, and{" "}
            <span className="text-foreground font-medium">Cloud Technologies</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group bg-gradient-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium inline-flex items-center gap-2 hover:shadow-glow transition-all"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={resumePdf}
              download="Deepika_J_Resume.pdf"
              className="glass glass-hover px-7 py-3.5 rounded-full font-medium inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
            <a
              href="#contact"
              className="glass glass-hover px-7 py-3.5 rounded-full font-medium inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </div>
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative animate-float"
        >
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-40" />
          <div className="relative glass rounded-3xl p-8 shadow-elegant">
            <div className="aspect-square rounded-2xl bg-gradient-primary mb-6 relative overflow-hidden">
              <img
                src={profileImg}
                alt="Deepika J - Computer Science Engineering Student"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-display text-xl font-bold">Deepika J</h3>
                <p className="text-xs text-muted-foreground">CSE @ KPRIET</p>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-neon-cyan">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" /> Online
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-border">
              <Stat n="300+" l="Problems" />
              <Stat n="2" l="Internships" />
              <Stat n="5+" l="Certs" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* tech marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-6 overflow-hidden border-t border-border bg-background/40 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((t, i) => (
            <span key={i} className="mx-6 text-sm font-mono text-muted-foreground">
              <span className="text-neon-purple mr-2">◆</span>{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="text-center">
      <div className="font-display font-bold text-gradient text-lg">{n}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
    </div>
  );
}
