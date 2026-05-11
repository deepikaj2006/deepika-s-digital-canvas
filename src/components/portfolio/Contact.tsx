import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import { Section } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:deepikajagnathan283@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email app to send the message...");
      setLoading(false);
    }, 400);
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title={<>Let's build something <span className="text-gradient">together</span></>}
      subtitle="Have an opportunity, idea, or just want to say hi? My inbox is open."
    >
      <Toaster theme="dark" position="top-center" />
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <a href="mailto:deepikajagnathan283@gmail.com" className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 block">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-medium text-sm break-all">deepikajagnathan283@gmail.com</p>
            </div>
          </a>
          <a href="tel:+919345495399" className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 block">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="font-medium">+91 9345495399</p>
            </div>
          </a>
          <div className="glass rounded-2xl p-5">
            <p className="text-xs text-muted-foreground mb-3">Find me on</p>
            <div className="flex gap-3">
              {[
                { icon: Github, url: "https://github.com/deepikaj2006", external: true },
                { icon: Linkedin, url: "https://www.linkedin.com/in/deepika-j-474a93378/", external: true },
                { icon: Mail, url: "mailto:deepikajagnathan283@gmail.com", external: false },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (s.external) {
                      e.preventDefault();
                      window.open(s.url, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-gradient-primary hover:shadow-glow transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-7 space-y-5"
        >
          <div>
            <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full mt-2 bg-input/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="w-full mt-2 bg-input/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="w-full mt-2 bg-input/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell me about your project or idea..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-primary text-primary-foreground py-3.5 rounded-xl font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
