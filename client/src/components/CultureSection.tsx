/*
 * PULSE CultureSection — Dark Editorial Luxe
 * Culture articles with full-bleed images and editorial layout
 */

import { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowUpRight, Clock } from "lucide-react";

const CULTURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414821828/mRXiQKAuvimrQvFYLdtNcm/hero-culture-Zytb5eFzz2r3ETGqgTk47h.webp";
const ART_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414821828/mRXiQKAuvimrQvFYLdtNcm/culture-art-286o3ftoxz2pgoYP3qfSGT.webp";

const cultureArticles = [
  {
    id: 1,
    category: "Essay",
    title: "The New Aesthetic: How Street Art Became the Language of a Generation",
    excerpt: "From subway walls to gallery walls — the journey of urban art into the cultural mainstream and what it reveals about our collective identity.",
    author: "Amara Diallo",
    readTime: "7 min",
    date: "Mar 7, 2026",
    image: CULTURE_IMG,
    size: "large",
  },
  {
    id: 2,
    category: "Review",
    title: "Dark Rooms: The Art of Immersive Exhibitions",
    excerpt: "A new wave of gallery experiences is blurring the line between art and environment.",
    author: "Léa Fontaine",
    readTime: "5 min",
    date: "Mar 5, 2026",
    image: ART_IMG,
    size: "medium",
  },
  {
    id: 3,
    category: "Trend",
    title: "The Slow Living Movement: Culture's Answer to Burnout",
    excerpt: "Why more creatives are choosing depth over speed in their work and life.",
    author: "Kai Nakamura",
    readTime: "4 min",
    date: "Mar 3, 2026",
    image: null,
    size: "small",
  },
  {
    id: 4,
    category: "Feature",
    title: "Fashion & Music: The Symbiosis That Defines Cool",
    excerpt: "How the most iconic musical moments are inseparable from the clothes that made them.",
    author: "Priya Sharma",
    readTime: "6 min",
    date: "Mar 1, 2026",
    image: null,
    size: "small",
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

export default function CultureSection() {
  const { ref: titleRef, inView: titleVisible } = useInView(0.2);
  const { ref: gridRef, inView: gridVisible } = useInView(0.1);

  const large = cultureArticles.find((a) => a.size === "large")!;
  const medium = cultureArticles.find((a) => a.size === "medium")!;
  const smalls = cultureArticles.filter((a) => a.size === "small");

  return (
    <section id="culture" className="py-24 bg-[oklch(0.125_0.012_260)]">
      <div className="container">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`flex items-end justify-between mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Sparkles size={16} className="text-[oklch(0.72_0.12_75)]" />
              <span
                className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.12_75)]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Culture
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Art, Ideas &amp;
              <br />
              <em className="text-[oklch(0.72_0.12_75)]">Identity</em>
            </h2>
          </div>
          <button
            className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/40 hover:text-[oklch(0.72_0.12_75)] transition-colors"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            All Culture
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Editorial grid */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large feature */}
          <div
            className={`lg:col-span-8 transition-all duration-700 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="article-card group cursor-pointer">
              <div className="relative overflow-hidden aspect-[16/9] mb-5">
                <img
                  src={large.image!}
                  alt={large.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.125_0.012_260/0.7)] to-transparent" />
                <span
                  className="absolute top-4 left-4 category-badge text-[oklch(0.72_0.12_75)] border-[oklch(0.72_0.12_75/0.5)]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {large.category}
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-black text-white leading-tight mb-3 group-hover:text-[oklch(0.72_0.12_75)] transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {large.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4 max-w-2xl" style={{ fontFamily: "'Syne', sans-serif" }}>
                {large.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/40" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {large.author}
                </span>
                <span className="text-white/20">·</span>
                <span className="flex items-center gap-1 text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>
                  <Clock size={10} />
                  {large.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Medium article */}
            <div
              className={`article-card group cursor-pointer transition-all duration-700 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "0.15s" }}
            >
              <div className="relative overflow-hidden aspect-square mb-4">
                <img
                  src={medium.image!}
                  alt={medium.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.125_0.012_260/0.6)] to-transparent" />
                <span
                  className="absolute top-3 left-3 category-badge text-[oklch(0.72_0.12_75)] border-[oklch(0.72_0.12_75/0.5)]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {medium.category}
                </span>
              </div>
              <h3
                className="text-base font-bold text-white leading-snug mb-2 group-hover:text-[oklch(0.72_0.12_75)] transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {medium.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "'Syne', sans-serif" }}>
                {medium.excerpt}
              </p>
            </div>

            {/* Small articles */}
            <div className="border-t border-white/5 pt-6 flex flex-col gap-5">
              {smalls.map((article, i) => (
                <div
                  key={article.id}
                  className={`article-card group cursor-pointer flex items-start gap-4 transition-all duration-700 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="flex-1">
                    <span
                      className="category-badge text-[oklch(0.80_0.15_210)] border-[oklch(0.80_0.15_210/0.4)] mb-2 inline-block"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {article.category}
                    </span>
                    <h4
                      className="text-sm font-bold text-white leading-snug group-hover:text-[oklch(0.72_0.12_75)] transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {article.readTime}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {article.author}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-[oklch(0.72_0.12_75)] transition-colors flex-shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
