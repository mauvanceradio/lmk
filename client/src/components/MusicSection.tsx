/*
 * LMK — Section "Dernières Doses"
 * Cards d'épisodes avec thumbnails SVG ondes sinusoïdales par catégorie
 */

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import EpisodeThumbnail from "./EpisodeThumbnail";

const episodes = [
  {
    id: 1,
    category: "Santé Mentale",
    title: "La Musique comme Thérapie",
    excerpt: "Exploration profonde de la relation entre la musique et la santé mentale.",
    host: "Amara Diallo",
    duration: "45 min",
    date: "15 Mar 2026",
    lot: "SM-015",
    effet: "Esprit apaisé, résilience accrue",
  },
  {
    id: 2,
    category: "Entrepreneuriat",
    title: "Créer en Afrique Francophone",
    excerpt: "Les défis et opportunités pour les créateurs en Afrique francophone.",
    host: "Marcus Jean",
    duration: "52 min",
    date: "12 Mar 2026",
    lot: "EP-052",
    effet: "Vision élargie, ambition décuplée",
  },
  {
    id: 3,
    category: "Culture & Musique",
    title: "Reggae, Zouk et Identité",
    excerpt: "Comment les genres musicaux caribéens façonnent notre identité culturelle.",
    host: "Yuki Tanaka",
    duration: "38 min",
    date: "10 Mar 2026",
    lot: "CM-038",
    effet: "Âme nourrie, identité renforcée",
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

function EpisodeCard({ episode, index }: { episode: typeof episodes[0]; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="relative overflow-hidden aspect-video mb-4 border border-white/5 group-hover:border-[oklch(0.72_0.12_75/0.3)] transition-colors">
        <EpisodeThumbnail
          title={episode.title}
          category={episode.category}
          host={episode.host}
          duration={episode.duration}
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-xs tracking-widest uppercase"
          style={{
            fontFamily: "'DM Mono', monospace",
            color: episode.category === "Santé Mentale"
              ? "oklch(0.80 0.15 210)"
              : episode.category === "Entrepreneuriat"
              ? "oklch(0.72 0.12 75)"
              : "#AFA9EC",
          }}
        >
          {episode.category}
        </span>
        <span className="text-white/20">·</span>
        <span className="text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>
          lot #{episode.lot}
        </span>
      </div>
      <h3
        className="text-lg font-bold text-white leading-snug mb-2 group-hover:text-[oklch(0.72_0.12_75)] transition-colors"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {episode.title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
        {episode.excerpt}
      </p>
      <div className="text-xs text-white/25 mb-3 italic" style={{ fontFamily: "'DM Mono', monospace" }}>
        Effets: {episode.effet}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/40" style={{ fontFamily: "'DM Mono', monospace" }}>
            {episode.host}
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1 text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>
            <Clock size={10} />
            {episode.duration}
          </span>
        </div>
        <ArrowUpRight size={16} className="text-white/20 group-hover:text-[oklch(0.72_0.12_75)] transition-colors" />
      </div>
    </div>
  );
}

export default function MusicSection() {
  const { ref: titleRef, inView: titleVisible } = useInView(0.2);
  return (
    <section id="doses" className="py-24 bg-[oklch(0.125_0.012_260)]">
      <div className="container">
        <div
          ref={titleRef}
          className={`flex items-end justify-between mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.12_75)]" style={{ fontFamily: "'DM Mono', monospace" }}>
                Rx — Dernières Doses
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Les conversations les plus récentes
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/40 hover:text-[oklch(0.72_0.12_75)] transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
            Voir tous les épisodes <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {episodes.map((ep, i) => (
            <EpisodeCard key={ep.id} episode={ep} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
