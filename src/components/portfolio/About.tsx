import { motion } from "framer-motion";
import { GraduationCap, Brain, Rocket, Code2 } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: GraduationCap, title: "B.E Computer Science", text: "KPR Institute of Engineering and Technology, Coimbatore" },
  { icon: Brain, title: "AI/ML Enthusiast", text: "Building intelligent systems with PyTorch & Scikit-learn" },
  { icon: Code2, title: "Full Stack Developer", text: "MERN stack expert focused on scalable web apps" },
  { icon: Rocket, title: "Fast Learner", text: "Curious problem solver with a builder mindset" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Crafting code with <span className="text-gradient">curiosity</span></>}
      subtitle="A glimpse into who I am and what drives me."
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
            I'm a <span className="text-foreground font-semibold">Computer Science Engineering</span> student
            at KPR Institute of Engineering and Technology, Coimbatore — passionate about turning
            ideas into intelligent, scalable software.
          </p>
          <p>
            My journey blends <span className="text-neon-purple">AI/ML research</span>,{" "}
            <span className="text-neon-blue">full stack engineering</span>, and modern{" "}
            <span className="text-neon-cyan">cloud technologies</span>. I love shipping real products and
            exploring how data can power smarter user experiences.
          </p>
          <p>
            Outside of academics, I spend time solving competitive programming problems, contributing to
            open-source, and learning the latest in deep learning and web frameworks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <h.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
