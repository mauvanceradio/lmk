/*
 * PULSE HeroSection — Dark Editorial Luxe
 * Full-height hero with featured article overlay, waveform animation, gold accents
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414821828/mRXiQKAuvimrQvFYLdtNcm/hero-music-bEfEHXi9RsgW7bYWLrHtTc.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Pulse Hero"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.125_0.012_260)] via-[oklch(0.125_0.012_260/0.5)] to-[oklch(0.125_0.012_260/0.2)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.125_0.012_260/0.7)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pb-20 pt-32">
        <div className="max-w-3xl">
          {/* Issue label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span
              className="category-badge text-[oklch(0.72_0.12_75)] border-[oklch(0.72_0.12_75/0.5)]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              EN DIRECT
            </span>
            <span
              className="text-xs text-white/40 tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Mars 2026
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontFamily: "'Playfair Display', serif", transitionDelay: "0.2s" }}
          >
            Ta Dose
            <br />
            <em className="text-[oklch(0.72_0.12_75)] not-italic">Quotidienne de Kif</em>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontFamily: "'Syne', sans-serif", transitionDelay: "0.35s" }}
          >
            La culture qui soigne. Conversations et sessions live autour de la créativité, de la musique et de la santé mentale.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex items-center gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.5s" }}
          >
            <button
              className="flex items-center gap-2 px-6 py-3 bg-[oklch(0.72_0.12_75)] text-[oklch(0.125_0.012_260)] text-xs font-bold tracking-widest uppercase hover:bg-[oklch(0.78_0.12_75)] transition-colors"
              style={{ fontFamily: "'Syne', sans-serif" }}
              onClick={() => document.getElementById("doses")?.scrollIntoView({ behavior: "smooth" })}
            >
              Prendre sa dose
              <ArrowRight size={14} />
            </button>
            <button
              className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/60 hover:text-white transition-colors"
              style={{ fontFamily: "'Syne', sans-serif" }}
              onClick={() => document.getElementById("sessions")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[oklch(0.72_0.12_75)] hover:text-[oklch(0.72_0.12_75)] transition-colors">
                <Play size={12} fill="currentColor" />
              </div>
              Sessions Live
            </button>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className={`mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.65s" }}
        >
          {[
            { value: "150+", label: "Épisodes" },
            { value: "50K+", label: "Auditeurs" },
            { value: "12", label: "Live Sessions" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-2xl font-black text-[oklch(0.72_0.12_75)]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs text-white/40 tracking-widest uppercase mt-1"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
        <div
          className="text-xs text-white/30 tracking-widest uppercase"
          style={{ fontFamily: "'DM Mono', monospace", writingMode: "vertical-rl" }}
        >
          Scroll
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
