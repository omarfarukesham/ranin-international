// ✅ ClientLogoCarousel.jsx (or paste above your page component)
// Requirements:
// - install: npm i embla-carousel-react
// - uses ONLY embla-carousel-react (no autoplay dependency)
// - uses next/image static images from /public/clients/*.png

"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";

export function ClientLogoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  // ✅ Put your real client logos inside /public/clients/
  const logos = useMemo(
    () => [
      { src: "/images/BarristerSunny.jpg", alt: "Client 1" },
      { src: "/images/BarristerSunny.jpg", alt: "Client 2" },
      { src: "/images/BarristerSunny.jpg", alt: "Client 3" },
      { src: "/images/BarristerSunny.jpg", alt: "Client 4" },
      { src: "/images/BarristerSunny.jpg", alt: "Client 5" },
      { src: "/images/BarristerSunny.jpg", alt: "Client 6" },
      { src: "/images/BarristerSunny.jpg", alt: "Client 7" },
      { src: "/images/BarristerSunny.jpg", alt: "Client 8" },
    ],
    [],
  );

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-widest text-white/70">
          Trusted by selected clients
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canPrev}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition hover:border-[#C9A227]/50 hover:text-[#C9A227] disabled:opacity-40"
            aria-label="Previous logos"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canNext}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition hover:border-[#C9A227]/50 hover:text-[#C9A227] disabled:opacity-40"
            aria-label="Next logos"
          >
            ›
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mt-4">
        {/* subtle edge fades (premium look) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0A1F44] to-transparent opacity-60 rounded-l-xl" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0A1F44] to-transparent opacity-60 rounded-r-xl" />

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {logos.map((logo, idx) => (
              <div
                key={`${logo.src}-${idx}`}
                className="min-w-0 flex-[0_0_60%] sm:flex-[0_0_40%] lg:flex-[0_0_30%] pr-4"
              >
                <div className="group flex h-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 transition hover:border-[#C9A227]/30 hover:bg-white/[0.07]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={60}
                    className="h-8 w-auto object-contain opacity-90 transition group-hover:opacity-100"
                    priority={idx < 3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* small legal-safe microcopy */}
      <p className="mt-3 text-xs text-white/60">
        Client logos are shown only where permission has been granted.
      </p>
    </div>
  );
}
