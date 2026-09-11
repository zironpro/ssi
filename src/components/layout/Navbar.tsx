"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const productCategories = [
  {
    title: "Sun Control Window Film",
    links: [
      { label: "LX Series (Non Reflective)", href: "https://ssiuae.ae/lx-series-non-reflective/" },
      { label: "Pure Vue Series", href: "https://ssiuae.ae/pure-vue-series/" },
      { label: "Sterling Series (Reflective)", href: "https://ssiuae.ae/sterling-series-reflective-solar-window-films/" },
      { label: "True Vue Series", href: "https://ssiuae.ae/true-vue-series/" },
      { label: "Stainless Steel Series", href: "https://ssiuae.ae/stainless-steel-series/" },
      { label: "Silver Series", href: "https://ssiuae.ae/silver-series/" },
      { label: "Solar Bronze Series", href: "https://ssiuae.ae/solar-bronze-series/" },
      { label: "Grey / Silver / Grey", href: "https://ssiuae.ae/grey-silver-grey/" },
      { label: "Opaque Films and Frost Films", href: "https://ssiuae.ae/opaque-films-and-frost-films/" },
    ],
  },
  {
    title: "Exterior Sun Control Window Film",
    links: [
      { label: "Sun Control Series OSW (Outside Weather)", href: "https://ssiuae.ae/sun-control-series-osw/" },
    ],
  },
  {
    title: "Safety & Security Window Film",
    links: [
      { label: "Clear Safety Film Series", href: "https://ssiuae.ae/clear-safety-film-series/" },
      { label: "Sun Control & Safety Film Series", href: "https://ssiuae.ae/sun-control-safety-film-series/" },
    ],
  },
  {
    title: "Anchor Systems",
    links: [
      { label: "Wet Glaze System", href: "https://ssiuae.ae/anchor-systems/" },
      { label: "Gullwing System", href: "https://ssiuae.ae/anchor-systems/" },
      { label: "Framegard System", href: "https://ssiuae.ae/anchor-systems/" },
    ],
  },
  {
    title: "Exterior Safety Window Film",
    links: [
      { label: "Safety & Security Series OSW", href: "https://ssiuae.ae/safetysecurity-series-osw/" },
      { label: "Polycarbonate OSW", href: "https://ssiuae.ae/polycarbonate-osw/" },
    ],
  },
  {
    title: "Marine Window Film",
    links: [
      { label: "Xenith IR", href: "https://ssiuae.ae/xenith-ir/" },
      { label: "Magnum IR", href: "https://ssiuae.ae/magnum-ir/" },
      { label: "Magnum Black", href: "https://ssiuae.ae/magnum-black/" },
    ],
  },
];

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<number | null>(null);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the element roughly at the center of the navbar's vertical position
      const yPos = 50; 
      const darkSections = document.querySelectorAll('.bg-black, .bg-\\[\\#070b14\\]');
      let overDark = false;
      
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= yPos && rect.bottom >= yPos) {
          overDark = true;
        }
      });
      
      setIsLightMode(overDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Small timeout to ensure DOM is ready on initial mount check
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Width grows in two steps: a small nudge on general hover, a bigger
  // jump once the mega menu is actually open, so the capsule reads as
  // one continuous surface expanding to fit its own content.
  const maxWidth = productsOpen ? "72rem" : "60rem";

  // Dynamic Theme Classes — drawn from brand palette CSS variables
  const capsuleClasses = isLightMode
    ? "border-[var(--border-light)] bg-[var(--color-arch-white)]/95 text-[var(--color-obsidian)]"
    : "border-[var(--border-dark)] bg-[var(--color-obsidian)]/90 text-[var(--color-arch-white)]";

  const linkClasses = isLightMode
    ? "text-[var(--text-secondary)] hover:bg-[var(--border-light)] hover:text-[var(--text-primary)]"
    : "text-[var(--text-on-dark-muted)] hover:bg-[var(--border-dark)] hover:text-[var(--text-on-dark)]";

  const btnClasses = isLightMode
    ? "bg-[var(--accent)] text-[var(--color-arch-white)] hover:bg-[var(--accent-muted)]"
    : "bg-[var(--accent)] text-[var(--color-arch-white)] hover:bg-[var(--accent-subtle)]";

  const logoClasses = isLightMode ? "brightness-0" : "brightness-0 invert";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        onMouseEnter={() => { }}
        onMouseLeave={() => setProductsOpen(false)}
        style={{ maxWidth }}
        className={`relative w-full overflow-hidden rounded-lg border shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out ${capsuleClasses}`}
      >
        <nav
          aria-label="Main"
          className="flex items-center justify-between gap-2 px-5 py-4 min-h-[72px]"
        >
          {/* Left Side: Navigation Links & Mobile Toggle */}
          <div className="flex flex-1 items-center justify-start">
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                aria-expanded={productsOpen}
                aria-haspopup="menu"
                onMouseEnter={() => setProductsOpen(true)}
                onClick={() => setProductsOpen((open) => !open)}
                className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${linkClasses}`}
              >
                Products
                <svg
                  className={`size-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <Link
                href="/about"
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${linkClasses}`}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${linkClasses}`}
              >
                Contact
              </Link>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className={`rounded-full p-2 transition-colors md:hidden ${linkClasses}`}
            >
              {mobileOpen ? (
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex shrink-0 items-center justify-center px-4">
            <Link href="/" className="flex items-center justify-center">
              <img
                src="/images/ssi"
                alt="SSI Logo"
                style={{ height: "3rem", width: "auto" }}
                className={`object-contain transition-all duration-300 ${logoClasses}`}
              />
            </Link>
          </div>

          {/* Right Side: Navigation Links & CTA */}
          <div className="flex flex-1 items-center justify-end">
            <div className="hidden items-center gap-2 md:flex mr-4">
              <Link
                href="/portfolio"
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${linkClasses}`}
              >
                Portfolio
              </Link>

              <Link
                href="/services"
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${linkClasses}`}
              >
                Services
              </Link>
            </div>

            <Link
              href="/quote"
              className={`hidden rounded-lg px-5 py-2 text-sm font-semibold transition-colors md:inline-flex whitespace-nowrap shrink-0 ${btnClasses}`}
            >
              Get a Quote
            </Link>
          </div>
        </nav>

        {/* Mega menu */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${productsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 pt-2">
              <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                {productCategories.map((category) => (
                  <div key={category.title}>
                    <p className={`mb-2 text-xs font-semibold ${isLightMode ? 'text-black/50' : 'text-white/50'}`}>
                      {category.title}
                    </p>
                    <ul className="space-y-1">
                      {category.links.map((link) => (
                        <li key={link.href + link.label}>
                          <Link
                            href={link.href}
                            role="menuitem"
                            onClick={() => setProductsOpen(false)}
                            className={`block rounded-md px-1.5 py-1 text-sm transition-colors ${isLightMode ? 'text-black/80 hover:bg-black/5 hover:text-black' : 'text-white/85 hover:bg-white/10 hover:text-white'}`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className={`absolute left-4 right-4 top-full mt-2 max-h-[70vh] overflow-y-auto rounded-2xl border px-4 pb-4 pt-3 shadow-2xl backdrop-blur-xl md:hidden ${capsuleClasses}`}>
          <p className={`px-2 py-1.5 text-xs font-semibold uppercase tracking-wider ${isLightMode ? 'text-black/50' : 'text-white/50'}`}>
            Navigation
          </p>

          <div className={`border-b ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className={`flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm font-medium transition-colors ${isLightMode ? 'text-black/90 hover:bg-black/5' : 'text-white/90 hover:bg-white/10'}`}
            >
              About Us
            </Link>
          </div>

          <div className={`border-b mb-2 ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm font-medium transition-colors ${isLightMode ? 'text-black/90 hover:bg-black/5' : 'text-white/90 hover:bg-white/10'}`}
            >
              Contact
            </Link>
          </div>

          <div className={`border-b ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
            <Link
              href="/portfolio"
              onClick={() => setMobileOpen(false)}
              className={`flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm font-medium transition-colors ${isLightMode ? 'text-black/90 hover:bg-black/5' : 'text-white/90 hover:bg-white/10'}`}
            >
              Portfolio
            </Link>
          </div>

          <div className={`border-b mb-2 ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className={`flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm font-medium transition-colors ${isLightMode ? 'text-black/90 hover:bg-black/5' : 'text-white/90 hover:bg-white/10'}`}
            >
              Services
            </Link>
          </div>

          <p className={`px-2 py-1.5 mt-2 text-xs font-semibold uppercase tracking-wider ${isLightMode ? 'text-black/50' : 'text-white/50'}`}>
            Products
          </p>
          {productCategories.map((category, index) => (
            <div key={category.title} className={`border-b last:border-b-0 ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
              <button
                type="button"
                onClick={() =>
                  setMobileCategoryOpen((open) => (open === index ? null : index))
                }
                className={`flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm font-medium ${isLightMode ? 'text-black/90' : 'text-white/90'}`}
              >
                {category.title}
                <svg
                  className={`size-4 shrink-0 transition-transform ${mobileCategoryOpen === index ? "rotate-180" : ""
                    }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {mobileCategoryOpen === index && (
                <div className="pb-2 pl-2">
                  {category.links.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg px-2 py-2 text-sm transition-colors ${isLightMode ? 'text-black/70 hover:bg-black/5' : 'text-white/70 hover:bg-white/10'}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/quote"
            onClick={() => setMobileOpen(false)}
            className={`mt-3 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${btnClasses}`}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}