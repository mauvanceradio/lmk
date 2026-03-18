/*
 * LMK Navbar — Le Média Kif
 * Sticky top nav with gold accent, Playfair + Syne + DM Mono
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Doses", href: "#doses" },
  { label: "Sessions Live", href: "#sessions" },
  { label: "Articles", href: "#articles" },
  { label: "À Propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.125_0.012_260/0.95)] backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <span
              className="text-xs font-bold tracking-widest text-[oklch(0.72_0.12_75)] border border-[oklch(0.72_0.12_75/0.5)] px-2 py-1"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              K
            </span>
            <span
              className="text-lg font-black tracking-widest text-white"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.15em" }}
            >
              LMK
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.70_0.010_260)] hover:text-[oklch(0.72_0.12_75)] transition-colors duration-200"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button
              className="hidden md:flex items-center px-4 py-2 text-xs font-semibold tracking-widest uppercase border border-[oklch(0.72_0.12_75)] text-[oklch(0.72_0.12_75)] hover:bg-[oklch(0.72_0.12_75)] hover:text-[oklch(0.125_0.012_260)] transition-all duration-200"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Ordonnance
            </button>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.16_0.014_260)] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-semibold tracking-widest uppercase text-left text-white/70 hover:text-white transition-colors"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <div className="gold-line mt-2" />
          <button className="text-sm font-semibold tracking-widest uppercase text-left text-[oklch(0.72_0.12_75)]">
            Subscribe
          </button>
        </div>
      )}
    </header>
  );
}
