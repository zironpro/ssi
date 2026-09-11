"use client";

import Link from "next/link";

const stats = [
  { value: "15+", label: "Years Industry Experience" },
  { value: "82%", label: "Solar Heat Rejection" },
  { value: "30%", label: "Reduced Cooling Energy Costs" },
  { value: "99%", label: "UV Protection" },
  { value: "1,000+", label: "Satisfied Clients" },
];

const carouselImagesA = [
  { src: "/images/low-angle-view-business-buildings-1-scaled.webp", alt: "Business Buildings" },
  { src: "/images/modern-skyscrapers-business-district-scaled.webp", alt: "Skyscrapers" },
  { src: "/images/modern-office-overlooking-city-skyline-sunset-scaled.webp", alt: "Office View" },
  { src: "/images/minimalist-office-interior-desig.webp", alt: "Minimalist Office" },
];

const carouselImagesB = [
  { src: "/images/minimalist-office-interior-desig.webp", alt: "Minimalist Office" },
  { src: "/images/modern-office-overlooking-city-skyline-sunset-scaled.webp", alt: "Office View" },
  { src: "/images/low-angle-view-business-buildings-1-scaled.webp", alt: "Business Buildings" },
  { src: "/images/modern-skyscrapers-business-district-scaled.webp", alt: "Skyscrapers" },
];

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "var(--surface-primary)" }}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(176,138,87,0.055) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ════════════════════════════════════════════════
          MAIN CONTENT
          — uses container-master from globals.css
          — padding-top accounts for fixed navbar (~72px)
          ════════════════════════════════════════════════ */}
      <div
        className="container-master relative z-10"
        style={{ paddingTop: "clamp(5rem, 10vw, 9rem)", paddingBottom: 0 }}
      >
        {/*
          Grid behaviour:
            mobile (< 768px)  : 1 col, carousel hidden
            md (768–1023px)   : 1 col, carousel shown below text as shorter strip
            lg (1024–1279px)  : 2 col, text left · carousel right
            xl (1280px+)      : 2 col with more breathing room
            2xl (1536px+)     : inherits, container caps at 1440 px
        */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.1fr_0.9fr] gap-0 lg:gap-10 xl:gap-16 items-start">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col items-start pb-10 lg:pb-16">



            {/* H1 — fluid from 1.9rem (mobile) → 4rem (large desktop) */}
            <h1
              className="font-bold tracking-tight leading-[1.08] mb-5 md:mb-6 font-sans"
              style={{
                fontSize: "clamp(1.9rem, 3.8vw, 4rem)",
                color: "var(--text-primary)",
              }}
            >
              Advanced Safety &amp; Security{" "}
              <span style={{ color: "var(--accent)" }}>Window Film</span>{" "}
              in UAE You Can Trust
            </h1>

            {/* Description */}
            <p
              className="leading-relaxed mb-7 md:mb-8"
              style={{
                fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
                color: "var(--text-secondary)",
                maxWidth: "56ch",
              }}
            >
              Expertly delivered by{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                Solar Safety Film Trading L.L.C
              </strong>
              , the official distributor and certified applicator of SolarGard
              Saint-Gobain products in the UAE. We provide advanced window film
              solutions designed to improve building energy efficiency, enhance
              safety, and ensure maximum comfort—without compromising natural
              daylight or aesthetics.
            </p>

            {/* Mission card */}
            <div
              className="w-full rounded-2xl p-4 md:p-5 mb-8 md:mb-10"
              style={{
                background: "var(--surface-dark)",
                border: "1px solid rgba(176,138,87,0.15)",
              }}
            >
              <p
                className="font-semibold uppercase tracking-widest mb-1.5"
                style={{ fontSize: "0.68rem", color: "var(--accent)" }}
              >
                Our Mission
              </p>
              <p
                style={{
                  fontSize: "clamp(0.82rem, 0.95vw, 0.95rem)",
                  color: "var(--text-on-dark-muted)",
                  lineHeight: 1.6,
                }}
              >
                To provide energy-efficient window film solutions that improve
                comfort, safety, and sustainability.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <Link
                href="https://ssiuae.ae/about-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full pl-5 md:pl-6 pr-2 py-2 font-semibold transition-transform hover:scale-105"
                style={{
                  fontSize: "clamp(0.8rem, 0.9vw, 0.875rem)",
                  background: "var(--surface-dark)",
                  color: "var(--text-on-dark)",
                }}
              >
                <span>Discover More</span>
                <span
                  className="flex size-7 md:size-8 items-center justify-center rounded-full transition-transform group-hover:rotate-45"
                  style={{ background: "var(--color-arch-white)", color: "var(--color-obsidian)" }}
                >
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full pl-5 md:pl-6 pr-2 py-2 font-semibold transition-transform hover:scale-105"
                style={{
                  fontSize: "clamp(0.8rem, 0.9vw, 0.875rem)",
                  background: "rgba(176,138,87,0.10)",
                  color: "var(--color-obsidian)",
                  border: "1px solid rgba(176,138,87,0.30)",
                }}
              >
                <span>Contact Us</span>
                <span
                  className="flex size-7 md:size-8 items-center justify-center rounded-full shadow-sm transition-transform group-hover:rotate-45"
                  style={{ background: "var(--color-arch-white)", color: "var(--color-obsidian)" }}
                >
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Infinite scroll carousel ──
              hidden on pure mobile (<768px), shown md+ as shorter height
              grows taller on lg+ screens
          ── */}
          <div
            className="hidden md:grid grid-cols-2 gap-3 lg:gap-4 w-full overflow-hidden rounded-[1.5rem] lg:rounded-[2rem]"
            style={{
              height: "clamp(340px, 50vw, 720px)",
              maskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
            }}
          >
            {/* Column A — Scroll Up */}
            <div className="flex flex-col gap-3 lg:gap-4 animate-scroll-up">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-col gap-3 lg:gap-4">
                  {carouselImagesA.map((img) => (
                    <img
                      key={img.alt}
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-square object-cover rounded-xl lg:rounded-2xl"
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Column B — Scroll Down */}
            <div
              className="flex flex-col gap-3 lg:gap-4 animate-scroll-down"
              style={{ marginTop: "-150%" }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-col gap-3 lg:gap-4">
                  {carouselImagesB.map((img) => (
                    <img
                      key={img.alt}
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-square object-cover rounded-xl lg:rounded-2xl"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile-only: single feature image instead of carousel */}
          <div className="md:hidden w-full rounded-2xl overflow-hidden" style={{ height: "220px" }}>
            <img
              src="/images/modern-skyscrapers-business-district-scaled.webp"
              alt="Window film on skyscrapers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          STATS STRIP
          — full bleed dark bar flush below hero content
          ════════════════════════════════════════════════ */}
      <div
        className="relative z-10 w-full mt-8 md:mt-10"
        style={{
          background: "var(--surface-dark)",
          borderTop: "1px solid rgba(176,138,87,0.15)",
        }}
      >
        <div className="container-master">
          {/*
            Stats grid:
              mobile  : 2 col (last item spans full width)
              sm      : 3 col
              md      : 5 col (all on one row)
              lg+     : 5 col
          */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center text-center px-3 ${
                  /* last item on 2-col mobile: span full row */
                  i === 4 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                style={{
                  paddingBlock: "clamp(1.25rem, 2.5vw, 2rem)",
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(245,245,242,0.07)"
                      : "none",
                }}
              >
                <span
                  className="font-black leading-none mb-1.5"
                  style={{
                    fontSize: "clamp(1.5rem, 2.2vw, 2.25rem)",
                    color: "var(--accent)",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="font-medium uppercase tracking-wider leading-tight"
                  style={{
                    fontSize: "clamp(0.6rem, 0.65vw, 0.7rem)",
                    color: "var(--color-glass-silver)",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}