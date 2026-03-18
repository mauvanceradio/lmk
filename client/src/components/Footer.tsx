/*
 * LMK Footer — Le Média Kif
 * Footer avec concept ordonnance / pharmacie poétique
 */

export default function Footer() {
  const year = new Date().getFullYear();

  const sections = [
    {
      title: "Contenu",
      links: ["Doses / Épisodes", "Sessions Live", "Articles", "Archives"],
    },
    {
      title: "Média",
      links: ["À Propos", "Contact", "Partenariats", "Presse"],
    },
    {
      title: "Légal",
      links: ["Politique de Confidentialité", "Conditions d'Utilisation", "Cookies"],
    },
  ];

  return (
    <footer className="bg-[oklch(0.10_0.010_260)] border-t border-white/5">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
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
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs" style={{ fontFamily: "'Syne', sans-serif" }}>
              Un média conversationnel et musical pour les millennials qui veulent vivre pleinement.
            </p>
            <div className="mt-4 p-3 border border-white/5 inline-block">
              <div className="text-xs text-white/20 tracking-widest uppercase mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                LMK Pharma™
              </div>
              <div className="text-xs text-[oklch(0.72_0.12_75)] tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>
                Sans ordonnance · 100% kif
              </div>
              <div className="text-xs text-white/20 mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                Est. 2026 · Vol. 1
              </div>
            </div>
          </div>

          {/* Nav sections */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h4
                  className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.12_75)] mb-4"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/40 hover:text-white transition-colors"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                        onClick={(e) => e.preventDefault()}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-line mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/20" style={{ fontFamily: "'DM Mono', monospace" }}>
            © {year} LMK — Le Média Kif. Tous droits réservés.
          </span>
          <span className="text-xs text-white/20 italic" style={{ fontFamily: "'DM Mono', monospace" }}>
            Créé avec passion pour les créatifs de la Caraïbe et de l'Afrique francophone.
          </span>
        </div>
      </div>
    </footer>
  );
}
