/*
 * PULSE NewsletterSection — Dark Editorial Luxe
 * Email subscription with gold accent and editorial typography
 */

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

export default function NewsletterSection() {
  const { ref, inView } = useInView(0.2);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-[oklch(0.16_0.014_260)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, oklch(0.72_0.12_75) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container relative z-10">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
            <span
              className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.12_75)] mb-4 block"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Newsletter
            </span>

          <h2
            className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reste branché à
            <br />
            <em className="text-[oklch(0.72_0.12_75)]">Le Média Kif</em>
          </h2>

          <p className="text-sm text-white/50 leading-relaxed mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>
            Des dispatches hebdomadaires sur la musique, la culture, et les entrepreneurs qui façonnent demain. Pas de bruit — que du signal.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors"
                style={{ fontFamily: "'DM Mono', monospace" }}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[oklch(0.72_0.12_75)] text-[oklch(0.125_0.012_260)] text-xs font-bold tracking-widest uppercase hover:bg-[oklch(0.78_0.12_75)] transition-colors whitespace-nowrap"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-[oklch(0.72_0.12_75)]">
              <div className="w-8 h-8 rounded-full border border-[oklch(0.72_0.12_75)] flex items-center justify-center">
                <Check size={14} />
              </div>
              <span className="text-sm font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>
                Tu es sur la liste. Bienvenue au Kif.
              </span>
            </div>
          )}

          <p className="text-xs text-white/20 mt-4" style={{ fontFamily: "'DM Mono', monospace" }}>
            Pas de spam. Désabonne-toi quand tu veux.
          </p>
        </div>
      </div>
    </section>
  );
}
