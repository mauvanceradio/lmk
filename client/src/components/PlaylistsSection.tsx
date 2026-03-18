/*
 * PULSE PlaylistsSection — Dark Editorial Luxe
 * Curated playlists with waveform visuals and cyan accents
 */

import { useEffect, useRef, useState } from "react";
import { Music2, Play, ArrowUpRight, Clock } from "lucide-react";

const WAVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414821828/mRXiQKAuvimrQvFYLdtNcm/playlist-feature-fJpmxhTzE4NFf7foPHif5M.webp";

const playlists = [
  {
    id: 1,
    title: "Midnight Drive",
    subtitle: "Late-night electronic & ambient",
    tracks: 42,
    duration: "2h 38m",
    mood: "Focus",
    color: "oklch(0.80_0.15_210)",
    bars: [6, 10, 14, 8, 16, 12, 6, 14, 10, 8, 16, 6, 12, 10, 14],
  },
  {
    id: 2,
    title: "Golden Hour",
    subtitle: "Soul, jazz & warm vibes",
    tracks: 35,
    duration: "1h 52m",
    mood: "Relax",
    color: "oklch(0.72_0.12_75)",
    bars: [8, 14, 10, 16, 6, 12, 14, 8, 16, 10, 6, 14, 8, 12, 10],
  },
  {
    id: 3,
    title: "Founder Mode",
    subtitle: "High-energy beats for deep work",
    tracks: 58,
    duration: "3h 14m",
    mood: "Energy",
    color: "oklch(0.80_0.15_210)",
    bars: [14, 8, 16, 10, 14, 6, 12, 16, 8, 14, 10, 16, 6, 12, 14],
  },
  {
    id: 4,
    title: "Cultural Reset",
    subtitle: "World music & global sounds",
    tracks: 29,
    duration: "1h 45m",
    mood: "Explore",
    color: "oklch(0.72_0.12_75)",
    bars: [10, 16, 8, 14, 12, 6, 16, 10, 8, 14, 12, 6, 16, 10, 8],
  },
  {
    id: 5,
    title: "Raw Sessions",
    subtitle: "Live recordings & acoustic sets",
    tracks: 22,
    duration: "1h 18m",
    mood: "Intimate",
    color: "oklch(0.72_0.12_75)",
    bars: [6, 12, 16, 8, 14, 10, 6, 16, 12, 8, 14, 6, 10, 16, 12],
  },
  {
    id: 6,
    title: "Neon Pulse",
    subtitle: "Synthwave & retro-futurism",
    tracks: 47,
    duration: "2h 55m",
    mood: "Vibe",
    color: "oklch(0.80_0.15_210)",
    bars: [14, 6, 10, 16, 8, 14, 12, 6, 16, 10, 14, 8, 12, 6, 16],
  },
];

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

function WaveformBars({ bars, color, animate }: { bars: number[]; color: string; animate: boolean }) {
  return (
    <div className="flex items-end gap-[2px] h-8">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-[3px] rounded-sm transition-all"
          style={{
            height: `${h}px`,
            backgroundColor: color,
            opacity: animate ? 0.8 : 0.3,
            animation: animate ? `waveform ${0.8 + (i % 5) * 0.15}s ease-in-out infinite` : "none",
            animationDelay: `${i * 0.06}s`,
          }}
        />
      ))}
    </div>
  );
}

function PlaylistCard({ playlist, index }: { playlist: typeof playlists[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="glass-card p-5 transition-all duration-300 hover:border-white/15"
        style={{ borderColor: hovered ? `${playlist.color}40` : undefined }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className="text-xs tracking-widest uppercase mb-1 block"
              style={{ color: playlist.color, fontFamily: "'DM Mono', monospace" }}
            >
              {playlist.mood}
            </span>
            <h3
              className="text-lg font-bold text-white group-hover:text-white transition-colors"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {playlist.title}
            </h3>
            <p className="text-xs text-white/40 mt-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>
              {playlist.subtitle}
            </p>
          </div>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300"
            style={{
              borderColor: hovered ? playlist.color : "oklch(1 0 0 / 0.1)",
              color: hovered ? playlist.color : "oklch(1 0 0 / 0.3)",
            }}
          >
            <Play size={14} fill="currentColor" />
          </div>
        </div>

        {/* Waveform */}
        <div className="mb-4">
          <WaveformBars bars={playlist.bars} color={playlist.color} animate={hovered} />
        </div>

        {/* Bottom meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>
              <Music2 size={10} />
              {playlist.tracks} tracks
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1 text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>
              <Clock size={10} />
              {playlist.duration}
            </span>
          </div>
          <ArrowUpRight
            size={14}
            className="transition-colors"
            style={{ color: hovered ? playlist.color : "oklch(1 0 0 / 0.2)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function PlaylistsSection() {
  const { ref: titleRef, inView: titleVisible } = useInView(0.2);

  return (
    <section id="playlists" className="py-24 bg-[oklch(0.14_0.013_260)]">
      <div className="container">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Music2 size={16} className="text-[oklch(0.80_0.15_210)]" />
                <span
                  className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.80_0.15_210)]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Playlists
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Curated
                <br />
                <em className="text-[oklch(0.80_0.15_210)]">Frequencies</em>
              </h2>
            </div>

            {/* Featured waveform image */}
            <div className="hidden lg:block w-48 h-24 overflow-hidden opacity-60">
              <img
                src={WAVE_IMG}
                alt="Waveform"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="mt-4 text-sm text-white/40 max-w-xl" style={{ fontFamily: "'Syne', sans-serif" }}>
            Hand-picked playlists for every state of mind — from deep work to late-night sessions. Updated weekly by our editors.
          </p>
        </div>

        {/* Playlists grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {playlists.map((playlist, i) => (
            <PlaylistCard key={playlist.id} playlist={playlist} index={i} />
          ))}
        </div>

        {/* Browse all CTA */}
        <div className="mt-12 flex justify-center">
          <button
            className="flex items-center gap-3 px-8 py-4 border border-white/10 text-xs font-semibold tracking-widest uppercase text-white/50 hover:border-[oklch(0.80_0.15_210)] hover:text-[oklch(0.80_0.15_210)] transition-all duration-300"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Browse All 240+ Playlists
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
