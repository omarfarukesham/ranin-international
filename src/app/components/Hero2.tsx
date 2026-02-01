// Replace your HERO <section> with this clean version:
// - Uses a BACKGROUND IMAGE (no inline gradient issues)
// - Adds a dark/brand overlay for readability
// - Right side: Embla carousel (image slides)
// - Removes the “Operational Snapshot” box completely

"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const BRAND = {
  primary: "#13496C",
  accent: "#AC2A2D",
};

// ✅ Put your own images here (public folder)
const SLIDES = [
  { src: "/images/33.png", alt: "Industrial site operations" },
  { src: "/images/44.png", alt: "Material supply and logistics" },
  { src: "/images/55.png", alt: "Team and safety compliance" },
];

export function HeroSection() {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi],
  );

  return (
    <section className="relative overflow-hidden">
      {/* ✅ Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero/bg.jpg')", // ✅ add /public/hero/bg.jpg
        }}
        aria-hidden="true"
      />

      {/* ✅ Overlay for readability (brand + dark) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.35) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background: `radial-gradient(900px 500px at 20% 10%, ${hexToRgba(
            BRAND.primary,
            0.35,
          )}, transparent 60%), radial-gradient(900px 500px at 90% 30%, ${hexToRgba(
            BRAND.accent,
            0.25,
          )}, transparent 55%)`,
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: Text (clean) */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white shadow-sm backdrop-blur">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: BRAND.accent }}
                aria-hidden="true"
              />
              Professional, compliant, and on-time delivery
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Industrial support & supply services{" "}
              <span className="text-white/80">built for reliability.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              We help projects run smoothly with dependable manpower, material
              supply, equipment support, and HSE-aligned processes—designed for
              speed, safety, and transparency.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: BRAND.primary }}
              >
                Get a Free Consultation
                <svg
                  viewBox="0 0 24 24"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/15"
              >
                View Services
              </a>

              <div className="text-xs text-white/70 sm:ml-2">
                Response within{" "}
                <span className="font-semibold text-white">24 hours</span>
              </div>
            </div>

            {/* Trust row */}
            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "HSE mindset", sub: "Safety-first operations" },
                { label: "Clear reporting", sub: "Transparent delivery" },
                { label: "Scalable teams", sub: "Right fit resources" },
                { label: "On-time support", sub: "Strong coordination" },
              ].map((x) => (
                <div
                  key={x.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur"
                >
                  <div className="text-sm font-semibold text-white">
                    {x.label}
                  </div>
                  <div className="mt-1 text-xs text-white/70">{x.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Embla Carousel */}
          <div className="relative">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">
                  Project highlights
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={scrollPrev}
                    className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/10 text-white/90 transition hover:bg-white/15"
                    aria-label="Previous slide"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M15 18l-6-6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={scrollNext}
                    className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/10 text-white/90 transition hover:bg-white/15"
                    aria-label="Next slide"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                  {SLIDES.map((s) => (
                    <div key={s.src} className="min-w-0 flex-[0_0_100%]">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                        {/* Use next/image if you want; keeping <img> simple */}
                        <Image
                          src={s.src}
                          alt={s.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={false}
                        />

                        {/* slide gradient for text contrast */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.55) 100%)",
                          }}
                          aria-hidden="true"
                        />
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: BRAND.accent }}
                              aria-hidden="true"
                            />
                            {s.alt}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick CTAs */}
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="flex-1 rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: BRAND.accent }}
                >
                  Request a Quote
                </a>
                <a
                  href="#services"
                  className="flex-1 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/15"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="mt-3 text-center text-xs text-white/60">
              Add your real project/site photos for higher trust.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Tiny helper: HEX => rgba() */
function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
