import React from "react";
import { ClientLogoCarousel } from "./ClientCarousel";

export default function Hero() {
  return (
    <section className="bg-[#0A1F44] text-white">
      <div className="mx-auto w-full max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10  lg:grid-cols-2 lg:py-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs tracking-widest uppercase text-white/80">
              Chambers-Based Legal Counsel
              <span className="h-1 w-1 rounded-full bg-[#C9A227]" />
              Dhaka
            </p>

            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Strategic advocacy for{" "}
              <span className="text-[#C9A227]">corporate</span> and{" "}
              <span className="text-[#C9A227]">civil</span> matters.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              I represent companies and individuals in disputes, arbitration,
              and advisory work—delivering practical legal strategy, clear
              communication, and discreet handling from first consultation to
              resolution.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#0A1F44] hover:brightness-95 transition"
              >
                Request a Consultation
              </a>
              <a
                href="#practice"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-[#C9A227]/70 hover:text-[#C9A227] transition-colors"
              >
                View Practice Areas
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Commercial Litigation",
                "Arbitration & Mediation",
                "Contract Advisory",
                "Regulatory Matters",
                "Court Representation",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-widest text-white/70">
                  Focus
                </p>
                <p className="mt-2 text-sm text-white/90">
                  Dispute strategy & representation
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-widest text-white/70">
                  Clients
                </p>
                <p className="mt-2 text-sm text-white/90">
                  Corporate, founders, and individuals
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-widest text-white/70">
                  Standard
                </p>
                <p className="mt-2 text-sm text-white/90">
                  Confidential, precise, outcome-driven
                </p>
              </div>
            </div> */}
          </div>

          {/* Hero Visual */}
          {/* Hero Visual — Carousel Only */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="rounded-2xl border border-[#C9A227]/30 bg-gradient-to-b from-white/10 to-white/5 p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Trusted by selected clients
                  </p>

                  {/* Optional: keep these if you like the premium “control” feel.
            If you prefer no header at all, remove this whole div. */}
                  <div className="hidden sm:block text-xs text-white/60">
                    Swipe to view
                  </div>
                </div>

                <div className="mt-4">
                  <ClientLogoCarousel />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 hidden h-28 w-28 rounded-full border border-[#C9A227]/25 bg-[#C9A227]/10 lg:block" />
            <div className="pointer-events-none absolute -left-8 -bottom-8 hidden h-40 w-40 rounded-full border border-white/10 bg-white/5 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
