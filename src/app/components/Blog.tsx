// BlogSection.tsx
// ✅ Demo blog data included
// ✅ 3 cards initially, "Load more" reveals more
// ✅ Smooth hover animations
// ✅ Matches Ranin International design flow (blue + red, clean corporate)
// Drop into any page/component. (Client component because it uses state)

"use client";

import React from "react";

const BRAND = {
  primary: "#13496C",
  accent: "#AC2A2D",
};

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // e.g. "Jan 15, 2026"
  readTime: string; // e.g. "5 min read"
  category: "Supply Chain" | "Safety (HSE)" | "Operations" | "Procurement";
  image: string; // replace with your real images
  href: string;
};

const BLOG_DEMO: BlogPost[] = [
  {
    id: "1",
    title: "How to Choose the Right Industrial Supplier in Saudi Arabia",
    excerpt:
      "A practical checklist to evaluate reliability, compliance documentation, delivery timelines, and after-sales support before you commit.",
    date: "Jan 18, 2026",
    readTime: "6 min read",
    category: "Procurement",
    image: "/images/blog1.png",
    href: "#",
  },
  {
    id: "2",
    title: "HSE Basics That Reduce Risk on Every Site",
    excerpt:
      "From toolbox talks to documentation discipline—small HSE habits that create a big impact on safety and execution quality.",
    date: "Jan 10, 2026",
    readTime: "5 min read",
    category: "Safety (HSE)",
    image: "/images/blog2.png",
    href: "#",
  },
  {
    id: "3",
    title: "Avoid Delays: A Simple Supply Chain Playbook for Projects",
    excerpt:
      "Learn how to plan procurement, validate materials early, and maintain delivery visibility to prevent last-minute surprises.",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    category: "Supply Chain",
    image: "/images/blog3.png",
    href: "#",
  },
  {
    id: "4",
    title: "Operational Reporting: What Clients Actually Want to See",
    excerpt:
      "A lightweight reporting structure that improves trust, keeps stakeholders aligned, and reduces unnecessary follow-ups.",
    date: "Dec 12, 2025",
    readTime: "4 min read",
    category: "Operations",
    image: "/images/blog2.png",
    href: "#",
  },
  {
    id: "5",
    title: "Procurement vs. Urgent Buying: When It Costs You More",
    excerpt:
      "Understand hidden costs of urgent buying and how early planning can secure better pricing, quality assurance, and timelines.",
    date: "Nov 30, 2025",
    readTime: "6 min read",
    category: "Procurement",
    image: "/images/blog1.png",
    href: "#",
  },
];

const badgeStyle: Record<BlogPost["category"], { bg: string; text: string }> = {
  "Supply Chain": { bg: "#13496C14", text: "#13496C" },
  "Safety (HSE)": { bg: "#AC2A2D14", text: "#AC2A2D" },
  Operations: { bg: "#0F172A14", text: "#0F172A" },
  Procurement: { bg: "#1A639214", text: "#1A6392" },
};

export default function BlogSection() {
  const INITIAL = 3; // show 3 first (nice on landing pages)
  const STEP = 3; // load more amount

  const [visible, setVisible] = React.useState(INITIAL);

  const posts = BLOG_DEMO.slice(0, visible);
  const canLoadMore = visible < BLOG_DEMO.length;

  return (
    <section id="blog" className="relative overflow-hidden">
      {/* soft background accents */}
      <div className="absolute inset-0 -z-10 bg-white" aria-hidden="true" />
      <div
        className="absolute -left-20 top-14 -z-10 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: `${BRAND.primary}14` }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 bottom-10 -z-10 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: `${BRAND.accent}12` }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: BRAND.accent }}
                aria-hidden="true"
              />
              Insights & updates
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Latest from our blog
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Short, practical articles on procurement, safety, and operational
              excellence— written for teams running real projects.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
          >
            Request a quote
            <span className="ml-2 text-slate-400">→</span>
          </a>
        </div>

        {/* Cards */}
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>

        {/* Load more */}
        <div className="mt-10 flex items-center justify-center">
          {canLoadMore ? (
            <button
              type="button"
              onClick={() =>
                setVisible((v) => Math.min(v + STEP, BLOG_DEMO.length))
              }
              className="group inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.98]"
              style={{ backgroundColor: BRAND.primary }}
            >
              Load more
              <svg
                viewBox="0 0 24 24"
                className="ml-2 h-4 w-4 transition group-hover:translate-y-0.5"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          ) : (
            <div className="text-sm text-slate-500">
              You’ve reached the end.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card ---------------- */

function BlogCard({ post }: { post: BlogPost }) {
  const badge = badgeStyle[post.category];

  return (
    <a
      href={post.href}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-[16/10] w-full">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
            loading="lazy"
          />
        </div>

        {/* image overlay */}
        <div
          className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.55) 100%)`,
          }}
          aria-hidden="true"
        />

        {/* Category badge */}
        <div className="absolute left-4 top-4">
          <span
            className="inline-flex items-center rounded-full border border-white/40 px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur"
            style={{ backgroundColor: badge.bg, color: badge.text }}
          >
            {post.category}
          </span>
        </div>

        {/* Accent corner glow */}
        <div
          className="absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl opacity-0 transition duration-300 group-hover:opacity-60"
          style={{ backgroundColor: `${BRAND.accent}33` }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>{post.date}</span>
          <span className="text-slate-300">•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
          {post.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
          <span className="text-slate-700 transition group-hover:text-slate-900">
            Read more
          </span>
          <span
            className="transition group-hover:translate-x-1"
            style={{ color: BRAND.primary }}
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </div>

      {/* bottom gradient line */}
      <div
        className="h-[3px] w-full"
        style={{
          background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.accent})`,
        }}
        aria-hidden="true"
      />
    </a>
  );
}
