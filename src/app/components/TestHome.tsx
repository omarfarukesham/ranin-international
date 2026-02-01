// app/page.tsx
// Landing page for Ranin International (Next.js + Tailwind)
// Drop into a Next.js app (App Router). No extra setup needed.
"use client";

import Link from "next/link";
import { HeroSection } from "./Hero2";
// import { use } from "react";

const BRAND = {
  primary: "#13496C", // logo blue
  accent: "#AC2A2D", // logo red
};

const services = [
  {
    title: "Industrial Support Services",
    desc: "Reliable on-site support with safety-first operations and rapid mobilization.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 21V9a2 2 0 0 1 2-2h3V4h6v3h3a2 2 0 0 1 2 2v12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21v-6h6v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Manpower Supply",
    desc: "Skilled, screened teams aligned with project needs—deployment-ready and compliant.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 11a4 4 0 1 0-8 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M4 20a6 6 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 7.5V5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Equipment & Tools",
    desc: "Cost-effective sourcing and support for tools/equipment with clear documentation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 7l3 3-8 8H6v-3l8-8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 8l3 3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Material Supply",
    desc: "Transparent procurement with quality checks, delivery tracking, and reporting.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 8l-8-4-8 4v8l8 4 8-4V8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 20v-8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M20 8l-8 4-8-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "HSE & Compliance Support",
    desc: "Documentation, safety workflows, and on-site practices that reduce operational risk.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12l1.8 1.8L15.8 9.3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Project Coordination",
    desc: "Structured planning, reporting, and stakeholder coordination for smooth execution.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 11h6M9 15h6M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const highlights = [
  { k: "Safety-first", v: "HSE aligned workflows & documentation" },
  { k: "Fast mobilization", v: "Rapid deployment based on scope" },
  { k: "Transparent delivery", v: "Clear reporting and communication" },
  { k: "Quality control", v: "Checks on supply & materials" },
];

const faqs = [
  {
    q: "How quickly can you mobilize?",
    a: "Timelines depend on scope and resource availability, but we prioritize rapid onboarding and clear deployment planning.",
  },
  {
    q: "Do you provide compliance documentation?",
    a: "Yes—supporting documentation, checklists, and reporting can be included depending on project requirements.",
  },
  {
    q: "Can I request a custom quote?",
    a: "Absolutely. Share your scope, timeline, and location, and we’ll provide a tailored quotation.",
  },
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function HomesPage() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900 antialiased px-0 py-0 mx-0">
      {/* Top bar */}
      <div className="border-b border-slate-200/70 bg-white">
        <div className="mx-auto flex  items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {/* Simple brand mark (replace with your logo image if you want) */}
            <div
              className="grid h-10 w-10 place-items-center rounded-xl text-white shadow-sm"
              style={{ backgroundColor: BRAND.primary }}
              aria-hidden="true"
            >
              <span className="text-sm font-semibold">RI</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                Ranin International
              </div>
              <div className="text-xs text-slate-500">
                Industrial Support • Supply • Services
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <a
              href="#services"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Services
            </a>
            <a
              href="#why"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Why us
            </a>
            <a
              href="#faq"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: BRAND.accent }}
            >
              Request a Quote
            </a>
          </div>

          <a
            href="#contact"
            className="md:hidden rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-sm"
            style={{ backgroundColor: BRAND.accent }}
          >
            Quote
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#13496C] text-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-4 ">
          <HeroSection />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Core services
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                A focused set of services designed to support industrial
                operations with measurable reliability.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              Get pricing
              <span className="ml-2 text-slate-400">→</span>
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-2xl text-white shadow-sm"
                    style={{ backgroundColor: BRAND.primary }}
                  >
                    {s.icon}
                  </div>
                  <div className="text-base font-semibold text-slate-900">
                    {s.title}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold">
                  <span className="text-slate-700 group-hover:text-slate-900">
                    Learn more
                  </span>
                  <span className="text-slate-400">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="border-t border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Why companies choose us
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Elegant operations come from simple fundamentals: safety,
                clarity, and consistent delivery. We build processes that scale
                with your project.
              </p>

              <div className="mt-6 grid gap-3">
                {highlights.map((h) => (
                  <div
                    key={h.k}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div
                      className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl text-white"
                      style={{ backgroundColor: BRAND.accent }}
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                        <path
                          d="M9.5 12l1.8 1.8L15.8 9.3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {h.k}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">{h.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">
                  Delivery approach
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                  Simple & professional
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <Step
                  n="01"
                  title="Understand scope"
                  desc="Confirm requirements, constraints, and compliance needs."
                />
                <Step
                  n="02"
                  title="Plan & mobilize"
                  desc="Resource allocation, timelines, and documentation prepared."
                />
                <Step
                  n="03"
                  title="Deliver with visibility"
                  desc="Tracking, reporting, and clear communication throughout."
                />
                <Step
                  n="04"
                  title="Close & improve"
                  desc="Handover, lessons learned, and continuous refinement."
                />
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-700">
                  Good to add on your site
                </div>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                  <li>• Real project photos (site/team/equipment)</li>
                  <li>• Client industries served (logos if allowed)</li>
                  <li>• Certifications & HSE policy link</li>
                  <li>• Clear service pages (no placeholder text)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              FAQ
            </h2>
            <p className="text-sm text-slate-600">
              Quick answers to common questions clients ask before starting.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-slate-900">
                      {f.q}
                    </span>
                    <span
                      className="grid h-8 w-8 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Need a custom proposal?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Share your scope and timeline. We’ll respond with clear next
                steps and pricing.
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <InfoRow label="Email" value="info@ranininternational.com" />
                <InfoRow label="Phone" value="+966 XX XXX XXXX" />
                <InfoRow label="WhatsApp" value="+966 XX XXX XXXX" />
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: BRAND.primary }}
              >
                Contact us
              </a>

              <div className="mt-3 text-xs text-slate-500">
                Replace phone/WhatsApp with your real numbers.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Request a quote
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Send your requirements and we’ll respond with a clear plan and
                pricing. Keep it short—just the essentials.
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  What to include
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    • Service needed (manpower, materials, equipment,
                    coordination)
                  </li>
                  <li>• Location + timeline</li>
                  <li>• Quantity / scope details</li>
                  <li>• Any compliance or HSE requirements</li>
                </ul>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" placeholder="Your name" />
                <Field label="Company" placeholder="Company name" />
                <Field
                  label="Email"
                  placeholder="you@company.com"
                  type="email"
                />
                <Field label="Phone" placeholder="+966..." />
              </div>

              <div className="mt-4">
                <label className="text-sm font-semibold text-slate-700">
                  Service
                </label>
                <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none ring-0 focus:border-slate-300">
                  <option>Industrial Support</option>
                  <option>Manpower Supply</option>
                  <option>Material Supply</option>
                  <option>Equipment & Tools</option>
                  <option>HSE & Compliance</option>
                  <option>Project Coordination</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your scope, location, and timeline..."
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none focus:border-slate-300"
                />
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: BRAND.accent }}
                >
                  Submit request
                </button>
                <a
                  href="mailto:info@ranininternational.com"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  Email instead
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                This form is UI-only. Hook it to your API route later if needed.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 bg-[#13496C] text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-xl text-white shadow-sm"
                  style={{ backgroundColor: BRAND.primary }}
                  aria-hidden="true"
                >
                  <span className="text-sm font-semibold">RI</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Ranin International
                  </div>
                  <div className="text-xs text-slate-500">
                    Professional industrial services & supply
                  </div>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-sm text-slate-600">
                Built for clarity, trust, and modern corporate
                presentation—based on your brand colors.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Company
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    <a href="#services" className="hover:text-slate-900">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#why" className="hover:text-slate-900">
                      Why us
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-slate-900">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Contact
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    <a
                      href="mailto:info@ranininternational.com"
                      className="hover:text-slate-900"
                    >
                      info@ranininternational.com
                    </a>
                  </li>
                  <li className="text-slate-500">Saudi Arabia</li>
                  <li>
                    <a href="#contact" className="hover:text-slate-900">
                      Request a quote
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Design tips
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Replace demo text with real service details.</li>
                <li>• Add project photos and client industries for trust.</li>
                <li>• Keep red only for key CTAs & highlights.</li>
              </ul>
              <div className="mt-5 text-xs text-slate-500">
                © {new Date().getFullYear()} Ranin International. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating quick action (optional) */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
          style={{ backgroundColor: BRAND.primary }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: BRAND.accent }}
            aria-hidden="true"
          />
          Get Quote
        </a>
      </div>
    </div>
  );
}

/* ---------- Small UI helpers ---------- */

function CardStat({
  title,
  value,
  hint,
}: {
  title: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="text-xs font-semibold text-slate-600">{title}</div>
      <div className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
        {value}
      </div>
      <div className="mt-1 text-xs text-slate-500">{hint}</div>
    </div>
  );
}

function ProgressRow({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-slate-600">
        <span className="font-medium">{label}</span>
        <span className="text-slate-500">{pct}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-white border border-slate-200 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.accent})`,
          }}
        />
      </div>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200">
        <span className="text-xs font-semibold text-slate-700">{n}</span>
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-1 text-sm text-slate-600">{desc}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none focus:border-slate-300"
      />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3">
      <div className="text-xs font-semibold text-slate-600">{label}</div>
      <div className="text-xs font-medium text-slate-800">{value}</div>
    </div>
  );
}
