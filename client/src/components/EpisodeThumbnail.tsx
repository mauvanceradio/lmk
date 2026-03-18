/*
 * LMK EpisodeThumbnail — Ondes sinusoïdales par catégorie
 * Génère automatiquement un visuel SVG selon la catégorie de l'épisode
 */

type Category = "Culture & Musique" | "Santé Mentale" | "Entrepreneuriat" | string;

interface ThumbnailConfig {
  glowColor: string;
  glowColor2: string;
  waveColor: string;
  gridColor: string;
  pillBg: string;
  period: number; // amplitude de la sinusoïde
}

function getConfig(category: Category): ThumbnailConfig {
  switch (category) {
    case "Santé Mentale":
      return {
        glowColor: "#2E6DB4",
        glowColor2: "#4B0082",
        waveColor: "#A8E6CF",
        gridColor: "#2E6DB4",
        pillBg: "#2E6DB4",
        period: 160,
      };
    case "Entrepreneuriat":
      return {
        glowColor: "#D4AF37",
        glowColor2: "#4B0082",
        waveColor: "#D4AF37",
        gridColor: "#D4AF37",
        pillBg: "#4B0082",
        period: 80,
      };
    case "Culture & Musique":
    default:
      return {
        glowColor: "#4B0082",
        glowColor2: "#4B0082",
        waveColor: "#AFA9EC",
        gridColor: "#4B0082",
        pillBg: "#4B0082",
        period: 120,
      };
  }
}

function sineWavePath(
  width: number,
  height: number,
  amplitude: number,
  period: number,
  phaseShift: number = 0
): string {
  const cy = height / 2;
  const points: string[] = [];
  const steps = 200;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const y = cy + amplitude * Math.sin((2 * Math.PI * x) / period + phaseShift);
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return points.join(" ");
}

interface EpisodeThumbnailProps {
  title: string;
  category: Category;
  host: string;
  duration: string;
  className?: string;
}

export default function EpisodeThumbnail({
  title,
  category,
  host,
  duration,
  className = "",
}: EpisodeThumbnailProps) {
  const cfg = getConfig(category);
  const W = 320;
  const H = 180;
  const id = `thumb-${Math.random().toString(36).slice(2, 7)}`;

  const wave1 = sineWavePath(W, H, 42, cfg.period, 0);
  const wave2 = sineWavePath(W, H, 26, cfg.period, Math.PI / 3);
  const wave3 = sineWavePath(W, H, 58, cfg.period * 1.35, Math.PI / 6);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id={`${id}-g1`} cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor={cfg.glowColor} stopOpacity="0.55" />
          <stop offset="100%" stopColor="#050010" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-g2`} cx="80%" cy="20%" r="50%">
          <stop offset="0%" stopColor={cfg.glowColor2} stopOpacity="0.3" />
          <stop offset="100%" stopColor="#050010" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Fond */}
      <rect width={W} height={H} fill="#050010" />
      <rect width={W} height={H} fill={`url(#${id}-g1)`} />
      <rect width={W} height={H} fill={`url(#${id}-g2)`} />

      {/* Grille */}
      {[45, 90, 135].map((y) => (
        <line key={y} x1={0} y1={y} x2={W} y2={y} stroke={cfg.gridColor} strokeWidth="0.4" opacity="0.25" />
      ))}
      {[80, 160, 240].map((x) => (
        <line key={x} x1={x} y1={0} x2={x} y2={H} stroke={cfg.gridColor} strokeWidth="0.4" opacity="0.25" />
      ))}

      {/* Ondes sinusoïdales */}
      <path d={wave3} fill="none" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
      <path d={wave2} fill="none" stroke={cfg.waveColor} strokeWidth="1.2" strokeLinecap="round" opacity="0.28" />
      <path d={wave1} fill="none" stroke={cfg.waveColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />

      {/* Pill catégorie */}
      <rect x="14" y="12" width={Math.min(category.length * 6.5 + 16, 110)} height="14" rx="7"
        fill={cfg.pillBg} fillOpacity="0.5" />
      <rect x="14" y="12" width={Math.min(category.length * 6.5 + 16, 110)} height="14" rx="7"
        fill="none" stroke={cfg.waveColor} strokeWidth="0.6" opacity="0.6" />
      <text
        x={14 + Math.min(category.length * 6.5 + 16, 110) / 2}
        y="22"
        fontFamily="'DM Mono', monospace"
        fontSize="5.5"
        fill={cfg.waveColor}
        textAnchor="middle"
        letterSpacing="1"
      >
        {category.toUpperCase()}
      </text>

      {/* Rx */}
      <text x="306" y="22" fontFamily="'Playfair Display', Georgia, serif" fontSize="10"
        fontWeight="700" fill="#D4AF37" textAnchor="end">
        Rx
      </text>

      {/* Titre */}
      <text x="14" y="155" fontFamily="'Playfair Display', Georgia, serif" fontSize="11"
        fontWeight="700" fill="#F9F7FF">
        {title.length > 36 ? title.slice(0, 36) + "…" : title}
      </text>

      {/* Host + durée */}
      <text x="14" y="170" fontFamily="'DM Mono', monospace" fontSize="6"
        fill={cfg.waveColor} opacity="0.7">
        {host} · {duration}
      </text>
    </svg>
  );
}
