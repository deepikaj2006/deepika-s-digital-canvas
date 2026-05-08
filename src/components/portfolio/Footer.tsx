import { useEffect, useState } from "react";
import { ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="border-t border-border py-10 mt-10 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} Deepika J — All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
          Built with <Heart className="w-3.5 h-3.5 text-neon-purple fill-neon-purple" /> by
          <span className="text-gradient font-semibold">Deepika J</span>
        </p>
      </div>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center hover:scale-110 transition-transform z-40"
        >
          <ArrowUp className="w-5 h-5 text-primary-foreground" />
        </button>
      )}
    </footer>
  );
}
