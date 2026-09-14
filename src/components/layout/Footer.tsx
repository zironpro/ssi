"use client";

import React from "react";
import Link from "next/link";

const navigation = {
  solutions: [
    { name: "Sun Control Film", href: "#" },
    { name: "Safety & Security", href: "#" },
    { name: "Decorative & Privacy", href: "#" },
    { name: "Commercial Projects", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Process", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Warranty Info", href: "#" },
  ],
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "var(--surface-dark)",
        borderTop: "1px solid var(--border-dark)",
      }}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Bronze glow blob */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] rounded-[100%] blur-[100px] pointer-events-none"
        style={{ background: "rgba(176,138,87,0.07)" }}
      />

      {/* ── Main content — uses globals container ── */}
      <div className="container-master pt-16 pb-8 lg:pt-24 lg:pb-12 relative z-10">

        {/* ────────────────────────────────────────────────────────────
            Top grid
            mobile  : single column (brand → nav)
            lg      : brand col left, 4-col nav right
            ──────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">

          {/* ── Brand Column ── */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-4 w-fit">
              <img
                src="/images/ssi"
                alt="Solar Safety Films logo"
                className="object-contain brightness-0 invert"
                style={{ height: "60px", width: "auto" }}
              />
              <span className="text-xl font-thin text-white/20">|</span>
              <img
                src="/images/solargard.png"
                alt="Solar Gard Logo"
                className="object-contain"
                style={{ height: "90px", width: "auto" }}
              />
            </Link>

            <p
              className="text-fluid-sm leading-relaxed"
              style={{ color: "var(--text-on-dark-muted)", maxWidth: "32ch" }}
            >
              Engineered for excellence. We provide premium window film solutions that protect your investments, enhance privacy, and maximise energy efficiency.
            </p>

            {/* Social icons */}
            <div className="flex gap-5">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition-colors duration-200"
                  style={{ color: "var(--color-glass-silver)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-glass-silver)")}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Bronze divider */}
            <div className="h-px w-16 rounded-full" style={{ background: "var(--accent)" }} />

            {/* Contact info */}
            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@ssiuae.ae"
                className="text-fluid-sm transition-colors"
                style={{ color: "var(--text-on-dark-muted)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-on-dark-muted)")}
              >
                info@ssiuae.ae
              </a>
              <span className="text-fluid-sm" style={{ color: "var(--text-on-dark-muted)" }}>
                Dubai, United Arab Emirates
              </span>
            </div>
          </div>

          {/* ── Navigation Columns ──
              mobile : 2 col
              sm     : 2 col (wider)
              lg     : 4 col
          ── */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-4">

            {/* Solutions */}
            <div>
              <h3
                className="text-fluid-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "var(--accent)" }}
              >
                Solutions
              </h3>
              <ul className="flex flex-col gap-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-fluid-sm transition-colors"
                      style={{ color: "var(--text-on-dark-muted)" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-on-dark)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-on-dark-muted)")}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3
                className="text-fluid-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "var(--accent)" }}
              >
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-fluid-sm transition-colors"
                      style={{ color: "var(--text-on-dark-muted)" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-on-dark)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-on-dark-muted)")}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3
                className="text-fluid-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "var(--accent)" }}
              >
                Legal
              </h3>
              <ul className="flex flex-col gap-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-fluid-sm transition-colors"
                      style={{ color: "var(--text-on-dark-muted)" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-on-dark)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-on-dark-muted)")}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter — spans 2 cols on mobile so form isn't squeezed */}
            <div className="col-span-2 lg:col-span-1">
              <h3
                className="text-fluid-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "var(--accent)" }}
              >
                Newsletter
              </h3>
              <p
                className="text-fluid-sm leading-relaxed mb-5"
                style={{ color: "var(--text-on-dark-muted)" }}
              >
                Stay updated with expert advice and the latest film solutions.
              </p>
              <form className="flex flex-col gap-3 max-w-xs">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="footer-email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg px-4 py-2.5 text-fluid-sm outline-none transition-all"
                  style={{
                    background: "rgba(245,245,242,0.06)",
                    border: "1px solid var(--border-dark)",
                    color: "var(--text-on-dark)",
                  }}
                  onFocus={e => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--accent)")}
                  onBlur={e => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--border-dark)")}
                />
                <button
                  type="submit"
                  className="w-full rounded-lg px-4 py-2.5 text-fluid-sm font-semibold transition-all hover:scale-[1.02]"
                  style={{ background: "var(--accent)", color: "var(--color-arch-white)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--accent-muted)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--accent)")}
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border-dark)" }}
        >
          <p
            className="text-fluid-xs"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            &copy; {new Date().getFullYear()} Solar Safety Film Trading L.L.C. All rights reserved.
          </p>

          {/* Official distributor badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-fluid-xs font-medium"
            style={{
              background: "rgba(176,138,87,0.10)",
              color: "var(--accent-subtle)",
              border: "1px solid rgba(176,138,87,0.20)",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            Official SolarGard Distributor — UAE
          </div>
        </div>
      </div>
    </footer>
  );
}
