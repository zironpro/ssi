"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-600 mb-8">
              Official SolarGard Distributor in UAE
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-black leading-[1.1] mb-6 font-sans">
              Best Safety & Security<br />
              Window Films
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed mb-10 max-w-lg">
              Expertly delivered by Solar Safety Film Trading L.L.C. We provide advanced window film solutions designed to improve energy efficiency, enhance safety, and ensure maximum comfort—without compromising natural daylight or aesthetics.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-black pl-6 pr-2 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                <span>Contact Us</span>
                <span className="flex size-8 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:rotate-45">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/learn-more"
                className="group relative inline-flex items-center gap-3 rounded-full bg-neutral-100 pl-6 pr-2 py-2 text-sm font-semibold text-neutral-900 transition-transform hover:scale-105 hover:bg-neutral-200"
              >
                <span>Learn More</span>
                <span className="flex size-8 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition-transform group-hover:rotate-45">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </Link>
            </div>

          </div>

          {/* Right Column: Infinite Scroll Carousel */}
          <div
            className="grid grid-cols-2 gap-4 h-[600px] lg:h-[700px] w-full max-w-[600px] ml-auto overflow-hidden rounded-[2rem]"
            style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}
          >
            {/* Column 1 - Scroll Up */}
            <div className="flex flex-col gap-4 animate-scroll-up">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <img src="/images/low-angle-view-business-buildings-1-scaled.webp" alt="Business Buildings" className="w-full aspect-square object-cover rounded-2xl" />
                  <img src="/images/modern-skyscrapers-business-district-scaled.webp" alt="Skyscrapers" className="w-full aspect-square object-cover rounded-2xl" />
                  <img src="/images/modern-office-overlooking-city-skyline-sunset-scaled.webp" alt="Office View" className="w-full aspect-square object-cover rounded-2xl" />
                  <img src="/images/minimalist-office-interior-desig.webp" alt="Minimalist Office" className="w-full aspect-square object-cover rounded-2xl" />
                </div>
              ))}
            </div>

            {/* Column 2 - Scroll Down */}
            <div className="flex flex-col gap-4 animate-scroll-down" style={{ marginTop: "-150%" }}>
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <img src="/images/minimalist-office-interior-desig.webp" alt="Minimalist Office" className="w-full aspect-square object-cover rounded-2xl" />
                  <img src="/images/modern-office-overlooking-city-skyline-sunset-scaled.webp" alt="Office View" className="w-full aspect-square object-cover rounded-2xl" />
                  <img src="/images/low-angle-view-business-buildings-1-scaled.webp" alt="Business Buildings" className="w-full aspect-square object-cover rounded-2xl" />
                  <img src="/images/modern-skyscrapers-business-district-scaled.webp" alt="Skyscrapers" className="w-full aspect-square object-cover rounded-2xl" />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}