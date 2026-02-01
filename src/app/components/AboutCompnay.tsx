// AboutCompanySection.tsx
// Drop this component anywhere in your Next.js + Tailwind page.
// ✅ Layout inspired by your screenshot: left image card, right content.
// ✅ Uses Ranin colors (blue + red).
// ✅ Replace the image src when you have the final link.
"use client";

import Image from "next/image";

const BRAND = {
  primary: "#13496C", // Ranin blue
  accent: "#AC2A2D", // Ranin red
};

export default function AboutCompanySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 ">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: Image block */}
          <div className="relative">
            {/* subtle decorative frame */}
            {/* <div
              className="absolute -left-5 top-10 hidden h-[78%] w-[70%] rounded-[28px] border lg:block"
              style={{ borderColor: `${BRAND.primary}33` }}
              aria-hidden="true"
            /> */}
            <div className="rounded-[28px] border border-[#13496C] bg-white p-4 shadow-sm">
              <div className="overflow-hidden rounded-[22px] hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/about66.png"
                  alt="Ranin International team on site"
                  width={720}
                  height={520}
                  className=" w-full object-fit h-[520px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div>
            {/* Top label */}
            <div className="flex items-center gap-3 text-sm font-semibold tracking-wide">
              <span
                className="h-[2px] w-10 rounded-full"
                style={{ backgroundColor: BRAND.primary }}
                aria-hidden="true"
              />
              <span className="uppercase" style={{ color: BRAND.primary }}>
                About our company
              </span>
              <span
                className="h-[2px] w-10 rounded-full"
                style={{ backgroundColor: BRAND.primary }}
                aria-hidden="true"
              />
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Dedicated to delivering{" "}
              <span style={{ color: BRAND.primary }}>reliable</span> industrial
              support.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Ranin International provides professional industrial support and
              supply services for critical operations. Our approach is built on
              safety-first execution, transparent coordination, and dependable
              delivery—so clients can run projects with confidence.
            </p>

            {/* Bullet points */}
            <div className="mt-7 space-y-4">
              <Bullet text="Engineered, value-focused support aligned with project scope and timelines." />
              <Bullet text="Optimized sourcing and supply with clear documentation and reporting." />
              <Bullet text="Long-term partnerships built on quality, responsiveness, and trust." />
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: BRAND.primary }}
              >
                Explore More
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

              {/* secondary accent note (optional) */}
              <div className="mt-3 text-xs text-slate-500">
                Prefer WhatsApp?{" "}
                <span
                  className="font-semibold mx-5"
                  style={{ color: BRAND.accent }}
                >
                  +966 13 363 1167
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full"
        style={{ backgroundColor: "#F1F5F9" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M9.5 12l1.8 1.8L15.8 9.3"
            stroke="#13496C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p className="text-sm leading-relaxed text-slate-700">{text}</p>
    </div>
  );
}
