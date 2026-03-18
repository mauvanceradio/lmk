/*
 * PULSE Home Page — Dark Editorial Luxe
 * Assembles all sections: Hero, Music, Entrepreneurs, Culture, Playlists, Newsletter, Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import EntrepreneursSection from "@/components/EntrepreneursSection";
import CultureSection from "@/components/CultureSection";
import PlaylistsSection from "@/components/PlaylistsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.125_0.012_260)]">
      <Navbar />
      <HeroSection />
      <MusicSection />
      <EntrepreneursSection />
      <CultureSection />
      <PlaylistsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
