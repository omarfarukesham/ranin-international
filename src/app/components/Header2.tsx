"use client";

import React from "react";

const BRAND = {
  primary: "#13496C", // logo blue
  accent: "#AC2A2D", // logo red
};

export default function Header2() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-[#13496C] border-b border-white/10"
          : "bg-white border-b border-slate-200/70",
      ].join(" ")}
    >
      {/* subtle blur only when scrolled (optional, feels premium) */}
      <div className={scrolled ? "backdrop-blur-sm" : ""}>
        <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8 max-w-7xl">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className={[
                "grid h-10 w-10 place-items-center rounded-xl shadow-sm ring-1 transition-colors duration-300",
                scrolled
                  ? "bg-white/10 text-white ring-white/15"
                  : "text-white ring-slate-200/60",
              ].join(" ")}
              style={!scrolled ? { backgroundColor: BRAND.primary } : undefined}
              aria-hidden="true"
            >
              <span className="text-sm font-semibold">RI</span>
            </div>

            <div className="leading-tight">
              <div
                className={[
                  "text-sm font-semibold tracking-tight transition-colors duration-300",
                  scrolled ? "text-white" : "text-slate-900",
                ].join(" ")}
              >
                Ranin International
              </div>
              <div
                className={[
                  "text-xs transition-colors duration-300",
                  scrolled ? "text-white/70" : "text-slate-500",
                ].join(" ")}
              >
                Industrial Support • Supply • Services
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
              { label: "Blog", href: "#blog" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={[
                  "text-base font-medium transition-colors duration-200",
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-slate-600 hover:text-slate-900",
                ].join(" ")}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className={[
                "rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.98]",
                scrolled ? "ring-1 ring-white/15" : "",
              ].join(" ")}
              style={{ backgroundColor: BRAND.accent }}
            >
              Request a Quote
            </a>
          </nav>

          {/* Mobile CTA */}
          <a
            href="#contact"
            className={[
              "md:hidden rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.98]",
              scrolled ? "ring-1 ring-white/15" : "",
            ].join(" ")}
            style={{ backgroundColor: BRAND.accent }}
          >
            Quote
          </a>
        </div>
      </div>
    </header>
  );
}
