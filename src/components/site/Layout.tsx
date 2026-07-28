import type { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-obsidian-marble">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35 animate-hero-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian/85 via-obsidian/75 to-obsidian/95" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        {eyebrow && (
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}