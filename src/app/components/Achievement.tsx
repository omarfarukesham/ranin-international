// AchievementsSection.tsx
// ✅ Section inspired by your screenshot (left: title + text + 2x2 stats cards, right: image).
// ✅ Uses Ranin brand colors (blue + red).
// ✅ Replace image src later.

import Image from "next/image";
import React from "react";

const BRAND = {
  primary: "#13496C", // Ranin blue
  accent: "#AC2A2D", // Ranin red
};

type Stat = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

const stats: Stat[] = [
  {
    value: "900+",
    label: "Projects Completed",
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
      </svg>
    ),
  },
  {
    value: "25K+",
    label: "Active Clients",
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
    value: "35K+",
    label: "Materials & Products",
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
      </svg>
    ),
  },
  {
    value: "2.4K+",
    label: "Successful Deliveries",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 7h10v10H7V7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function AchievementsSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background pattern layer */}
      <div className="absolute inset-0 -z-10 bg-slate-50" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.18) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: `${BRAND.primary}22` }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-10 -z-10 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: `${BRAND.accent}22` }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Our Achievements
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Ranin International is committed to reliable delivery,
              safety-first operations, and long-term client satisfaction. Over
              time, that focus has helped us reach key milestones across
              projects and service delivery.
            </p>

            {/* Stats grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((s) => (
                <StatCard key={s.label} stat={s} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Decorative vertical line like the screenshot */}
            <div
              className="absolute -left-4 top-1/2 hidden h-20 w-[4px] -translate-y-1/2 rounded-full lg:block"
              style={{ backgroundColor: `${BRAND.primary}CC` }}
              aria-hidden="true"
            />

            <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="overflow-hidden rounded-[22px] hover:scale-105">
                <Image
                  src="/images/goal.png" // ✅ replace later
                  width={720}
                  height={520}
                  alt="Industrial facility and operations"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Small label pill */}
            <div className="mt-4 flex justify-center lg:justify-end">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: BRAND.accent }}
                  aria-hidden="true"
                />
                Real results • Trusted delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center gap-5 p-6">
        {/* Icon box */}
        <div
          className="grid h-16 w-16 place-items-center rounded-2xl text-white"
          style={{ backgroundColor: BRAND.primary }}
          aria-hidden="true"
        >
          {stat.icon}
        </div>

        {/* Text */}
        <div>
          <div className="text-4xl font-semibold tracking-tight text-slate-900">
            {stat.value}
          </div>
          <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
        </div>
      </div>

      {/* subtle bottom accent line */}
      {/* <div
        className="h-[3px] w-full rounded-b-3xl"
        style={{
          background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.accent})`,
        }}
        aria-hidden="true"
      /> */}
    </div>
  );
}
