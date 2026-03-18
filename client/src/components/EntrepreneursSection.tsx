/*
 * PULSE EntrepreneursSection — Dark Editorial Luxe
 * Gold-accented entrepreneur profiles with asymmetric layout
 */

import { useEffect, useRef, useState } from "react";
import { TrendingUp, ArrowUpRight, Quote } from "lucide-react";

const ENTREPRENEUR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414821828/mRXiQKAuvimrQvFYLdtNcm/hero-entrepreneur-LTf3YphTcYokCoZ6jgxRZc.webp";

const profiles = [
  {
    id: 1,
    name: "Layla Osei",
    title: "Founder, SoundVentures",
    quote: "The intersection of music and technology is where the next billion-dollar companies will be born.",
    tags: ["Music Tech", "VC", "Creator Economy"],
    featured: true,
    image: ENTREPRENEUR_IMG,
  },
  {
    id: 2,
    name: "Marcus Delacroix",
    title: "CEO, Frequency Labs",
    quote: "We're not building a streaming platform. We're building the infrastructure for how artists own their future.",
    tags: ["Web3", "Music Rights", "Blockchain"],
    featured: false,
    image: null,
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    title: "Co-Founder, Tempo AI",
    quote: "AI won't replace musicians. It will give them superpowers they never imagined.",
    tags: ["AI", "Music Generation", "Deep Tech"],
    featured: false,
    image: null,
  },
];

const articles = [
  {
    id: 1,
    category: "Profile",
    title: "From Bedroom Producer to $100M Exit: The Story of Layla Osei",
    excerpt: "How a self-taught beatmaker built one of the most influential music tech companies of the decade.",
    readTime: "12 min",
    date: "Mar 6, 2026",
  },
  {
    id: 2,
    category: "Opinion",
    title: "Why Every Entrepreneur Should Have a Signature Playlist",
    excerpt: "The psychology of music and peak performance — and the entrepreneurs who swear by it.",
    readTime: "5 min",
    date: "Mar 4, 2026",
  },
  {
    id: 3,
    category: "Report",
    title: "The Creator Economy: $250B and Still Growing",
    excerpt: "A deep dive into the numbers behind the creator revolution and what it means for the next generation of founders.",
    readTime: "9 min",
    date: "Mar 2, 2026",
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

export default function EntrepreneursSection() {
  const { ref: titleRef, inView: titleVisible } = useInView(0.2);
  const { ref: profileRef, inView: profileVisible } = useInView(0.1);

  return (
    <section id="entrepreneurs" className="py-24 bg-[oklch(0.14_0.013_260)]">
      <div className="container">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`flex items-end justify-between mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp size={16} className="text-[oklch(0.72_0.12_75)]" />
              <span
                className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.12_75)]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Entrepreneurs
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Visionaries &amp;
              <br />
              <em className="text-[oklch(0.72_0.12_75)]">Builders</em>
            </h2>
          </div>
          <button
            className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/40 hover:text-[oklch(0.72_0.12_75)] transition-colors"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            All Profiles
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Main layout: featured profile + articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Featured profile card */}
          <div
            ref={profileRef}
            className={`lg:col-span-5 transition-all duration-700 ${profileVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative overflow-hidden h-full min-h-[500px] group cursor-pointer">
              <img
                src={ENTREPRENEUR_IMG}
                alt="Featured Entrepreneur"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: "500px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.125_0.012_260)] via-[oklch(0.125_0.012_260/0.3)] to-transparent" />

              {/* Profile info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span
                  className="category-badge text-[oklch(0.72_0.12_75)] border-[oklch(0.72_0.12_75/0.5)] mb-3 inline-block"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Cover Story
                </span>

                <div className="flex items-start gap-3 mb-4">
                  <Quote size={20} className="text-[oklch(0.72_0.12_75)] flex-shrink-0 mt-1" />
                  <p
                    className="text-white/80 text-sm leading-relaxed italic"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {profiles[0].quote}
                  </p>
                </div>

                <div>
                  <div
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {profiles[0].name}
                  </div>
                  <div
                    className="text-xs text-[oklch(0.72_0.12_75)] tracking-wide mt-0.5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {profiles[0].title}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {profiles[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-white/10 text-white/60"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: articles + mini profiles */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Articles list */}
            {articles.map((article, i) => (
              <div
                key={article.id}
                className={`article-card group cursor-pointer pb-8 border-b border-white/5 last:border-0 transition-all duration-700 ${profileVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span
                      className="category-badge text-[oklch(0.72_0.12_75)] border-[oklch(0.72_0.12_75/0.4)] mb-3 inline-block"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {article.category}
                    </span>
                    <h3
                      className="text-xl font-bold text-white leading-snug mb-2 group-hover:text-[oklch(0.72_0.12_75)] transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {article.readTime} read
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {article.date}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-white/20 group-hover:text-[oklch(0.72_0.12_75)] transition-colors flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}

            {/* Mini profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {profiles.slice(1).map((profile, i) => (
                <div
                  key={profile.id}
                  className={`glass-card p-5 cursor-pointer group transition-all duration-700 hover:border-[oklch(0.72_0.12_75/0.3)] ${profileVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                >
                  <Quote size={14} className="text-[oklch(0.72_0.12_75/0.6)] mb-3" />
                  <p
                    className="text-xs text-white/60 leading-relaxed italic mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    "{profile.quote}"
                  </p>
                  <div
                    className="text-sm font-bold text-white group-hover:text-[oklch(0.72_0.12_75)] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {profile.name}
                  </div>
                  <div
                    className="text-xs text-white/40 mt-0.5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {profile.title}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {profile.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-1.5 py-0.5 bg-[oklch(0.72_0.12_75/0.1)] text-[oklch(0.72_0.12_75/0.7)]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
