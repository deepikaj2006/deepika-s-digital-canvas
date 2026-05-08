import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Trophy, Award, Code, Users } from "lucide-react";

const stats = [
  { icon: Code, value: 250, suffix: "+", label: "Problems Solved" },
  { icon: Trophy, value: 6, suffix: "+", label: "Certifications" },
  { icon: Award, value: 2, suffix: "", label: "Internships" },
  { icon: Users, value: 1, suffix: "", label: "IEEE Member" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [rounded]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center glass-hover"
            >
              <s.icon className="w-7 h-7 text-neon-cyan mx-auto mb-3" />
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
