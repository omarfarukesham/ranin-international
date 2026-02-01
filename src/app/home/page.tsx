import About from "../components/About";
import { ClientLogoCarousel } from "../components/ClientCarousel";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomesPage from "../components/TestHome";
import TestPage from "../components/TestHome";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0A1F44]">
      {/* Navbar */}
      {/* <Header /> */}

      <main>
        {/* Hero */}
        {/* <Hero /> */}

        <HomesPage />

        {/* About */}
        {/* <About /> */}

        {/* Practice Areas */}
        {/* <section id="practice" className="bg-[#0A1F44]/[0.03]">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="py-16 lg:py-20">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#0A1F44]/70">
                    Practice Areas
                  </p>
                  <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
                    Focused representation across key matters.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base text-[#0A1F44]/80 sm:text-lg">
                    Clear advice, careful drafting, and strong advocacy—tailored
                    to the specific legal and commercial context of each case.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0A1F44]/15 px-6 py-3 text-sm font-semibold hover:border-[#C9A227]/60 hover:text-[#C9A227] transition-colors"
                >
                  Ask About Your Matter
                </a>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Commercial Litigation",
                    desc: "Disputes arising from contracts, transactions, and business relationships.",
                  },
                  {
                    title: "Arbitration & Mediation",
                    desc: "Strategy and representation in ADR proceedings with disciplined case preparation.",
                  },
                  {
                    title: "Corporate & Regulatory Advisory",
                    desc: "Practical guidance for compliance, governance, and risk management.",
                  },
                  {
                    title: "Contract Drafting & Review",
                    desc: "Clear, enforceable agreements aligned with business objectives and risk tolerance.",
                  },
                  {
                    title: "Employment & Workplace Matters",
                    desc: "Advice on disputes, termination issues, and internal policy alignment.",
                  },
                  {
                    title: "Property & Land Disputes",
                    desc: "Representation in civil disputes involving ownership, possession, and related claims.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A227]/35"
                  >
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#0A1F44]/75">
                      {item.desc}
                    </p>
                    <div className="mt-6">
                      <a
                        href="#contact"
                        className="text-sm font-semibold text-[#0A1F44] underline decoration-[#0A1F44]/20 underline-offset-4 hover:text-[#C9A227] hover:decoration-[#C9A227]/40 transition"
                      >
                        Discuss this area
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-[#0A1F44]/10 bg-white p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#0A1F44]/70">
                      Engagement
                    </p>
                    <p className="mt-2 text-base text-[#0A1F44]/85">
                      Each matter begins with a structured review of facts, key
                      documents, and your objectives—followed by a clear plan of
                      action.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0A1F44]/95 transition"
                  >
                    Request Case Review
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Experience / Credentials */}
        {/* <section id="credentials" className="bg-[#0A1F44] text-white">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="grid gap-10 py-16 lg:grid-cols-12 lg:py-20">
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-widest text-white/70">
                  Experience
                </p>
                <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
                  Credentials that inspire confidence.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/80">
                  Clients choose counsel who is prepared, precise, and reliable.
                  My practice emphasizes careful analysis, disciplined drafting,
                  and strategic advocacy.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#0A1F44] hover:brightness-95 transition"
                  >
                    Request Consultation
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-[#C9A227]/70 hover:text-[#C9A227] transition-colors"
                  >
                    Ask a Question
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[
                      {
                        title: "Court & Tribunal Work",
                        items: [
                          "Civil disputes and interim applications",
                          "Commercial matters and injunctions",
                          "Written submissions and oral advocacy",
                        ],
                      },
                      {
                        title: "ADR & Settlement",
                        items: [
                          "Arbitration strategy and pleadings",
                          "Mediation preparation and negotiation",
                          "Settlement structuring and documentation",
                        ],
                      },
                      {
                        title: "Advisory & Drafting",
                        items: [
                          "Contracts, notices, and legal opinions",
                          "Risk review for business decisions",
                          "Regulatory alignment and compliance",
                        ],
                      },
                      {
                        title: "Professional Standards",
                        items: [
                          "Confidential handling of sensitive matters",
                          "Clear communication and documented advice",
                          "Conflicts checks before engagement",
                        ],
                      },
                    ].map((block) => (
                      <div
                        key={block.title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6"
                      >
                        <p className="text-sm font-semibold">{block.title}</p>
                        <ul className="mt-4 space-y-2 text-sm text-white/80">
                          {block.items.map((li) => (
                            <li key={li} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                              <span>{li}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Credentials snapshot
                    </p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-medium text-white">
                          Enrollment
                        </p>
                        <p className="mt-1 text-sm text-white/80">
                          Supreme Court Practice (details available on request)
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-medium text-white">
                          Consultations
                        </p>
                        <p className="mt-1 text-sm text-white/80">
                          Appointment-based, conflicts-checked
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-white/70">
                      Note: Specific case details are shared only where
                      appropriate and consistent with confidentiality
                      obligations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Why Choose Me */}
        {/* <section id="insights" className="bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="py-16 lg:py-20">
              <p className="text-xs uppercase tracking-widest text-[#0A1F44]/70">
                Approach
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
                Why clients choose my practice.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-[#0A1F44]/80 sm:text-lg">
                Clients value disciplined preparation, practical strategy, and
                steady guidance—especially when the stakes are high.
              </p>

              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {[
                  {
                    title: "Structured case assessment",
                    desc: "Early review of facts, documents, and risk to define the strongest route forward.",
                  },
                  {
                    title: "Clear communication",
                    desc: "Timely updates and plain-English explanations so you always know where matters stand.",
                  },
                  {
                    title: "Discreet handling",
                    desc: "Confidentiality-first practice, with careful conflict checks and professional conduct.",
                  },
                  {
                    title: "Courtroom preparedness",
                    desc: "Thorough drafting, evidence focus, and strategic advocacy aligned to your objectives.",
                  },
                  {
                    title: "Commercially practical advice",
                    desc: "Advice designed for real-world outcomes—cost, time, exposure, and settlement options.",
                  },
                  {
                    title: "Document discipline",
                    desc: "Pleadings, notices, and opinions prepared with precision and proper legal framing.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#0A1F44]/10 p-8 shadow-sm"
                  >
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#0A1F44]/75">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Video Section */}
        {/* <section className="bg-[#0A1F44]/[0.03]">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="py-16 lg:py-20">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#0A1F44]/70">
                    Message
                  </p>
                  <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
                    A brief introduction to my approach.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base text-[#0A1F44]/80 sm:text-lg">
                    This short video explains how I handle consultations,
                    strategy, and client communication—so you know what to
                    expect.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0A1F44]/15 px-6 py-3 text-sm font-semibold hover:border-[#C9A227]/60 hover:text-[#C9A227] transition-colors"
                >
                  Book a Consultation
                </a>
              </div>

              <div className="mt-10 rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl border border-[#C9A227]/25 bg-[#0A1F44]">
                  <div className="aspect-video w-full">
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="text-center px-6">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227]/60 bg-[#C9A227]/10">
                          <span className="ml-1 text-2xl text-[#C9A227]">
                            ▶
                          </span>
                        </div>
                        <p className="mt-4 text-sm text-white/80">
                          Video placeholder — embed your introduction (60–90
                          seconds)
                        </p>
                        <p className="mt-2 text-xs text-white/60">
                          “Confidential. Structured. Outcome-focused.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      t: "Consultation",
                      d: "Understand your goals, timeline, and documents.",
                    },
                    {
                      t: "Strategy",
                      d: "Identify best options—litigation, ADR, or settlement.",
                    },
                    { t: "Execution", d: "Disciplined drafting and advocacy." },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6"
                    >
                      <p className="font-semibold">{x.t}</p>
                      <p className="mt-2 text-sm text-[#0A1F44]/75">{x.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact CTA */}
        {/* <section id="contact" className="bg-[#0A1F44] text-white">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="py-16 lg:py-20">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Contact
                  </p>
                  <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
                    Request a consultation.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-white/80">
                    Share a brief outline of your matter. I will review and
                    respond to arrange the next appropriate step, subject to
                    conflicts checks and professional obligations.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <p className="text-sm font-semibold">Chambers</p>
                      <p className="mt-2 text-sm text-white/80">
                        Supreme Court Area, Dhaka, Bangladesh
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <p className="text-sm font-semibold">Phone</p>
                      <p className="mt-2 text-sm text-white/80">
                        +880 1X XXX XXXX (replace with official number)
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <p className="text-sm font-semibold">Email</p>
                      <p className="mt-2 text-sm text-white/80">
                        chambers@example.com (replace with official email)
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-xs text-white/60">
                    Information submitted via this form does not create a
                    barrister-client relationship. Do not send sensitive
                    documents until requested.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="rounded-2xl border border-white/10 bg-white p-8 text-[#0A1F44] shadow-sm">
                    <p className="text-sm font-semibold">
                      Consultation Request
                    </p>
                    <p className="mt-2 text-sm text-[#0A1F44]/75">
                      Please provide accurate contact details and a short
                      summary of your matter.
                    </p>

                    <form className="mt-8 grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-[#0A1F44]/70">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          autoComplete="name"
                          placeholder="Your name"
                          className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C9A227]/60"
                        />
                      </div>

                      <div className="sm:col-span-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-[#0A1F44]/70">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          placeholder="Your phone number"
                          className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C9A227]/60"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-[#0A1F44]/70">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="Your email address"
                          className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C9A227]/60"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-[#0A1F44]/70">
                          Matter Type
                        </label>
                        <select
                          name="matter"
                          className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C9A227]/60"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select a category
                          </option>
                          <option>Commercial Dispute</option>
                          <option>Arbitration / Mediation</option>
                          <option>Contract Review / Drafting</option>
                          <option>Corporate / Regulatory Advisory</option>
                          <option>Employment Matter</option>
                          <option>Property / Land Dispute</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-[#0A1F44]/70">
                          Brief Summary
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Share a short summary, key dates, and what outcome you are seeking."
                          className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C9A227]/60"
                        />
                        <p className="mt-2 text-xs text-[#0A1F44]/60">
                          Please avoid sharing highly sensitive documents until
                          requested.
                        </p>
                      </div>

                      <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center rounded-xl bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#0A1F44] hover:brightness-95 transition"
                        >
                          Submit Request
                        </button>
                        <p className="text-xs text-[#0A1F44]/65">
                          Typical response window: 24–48 hours (if available)
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      {/* <footer className="bg-[#0A1F44] text-white">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="border-t border-white/10 py-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="font-serif text-lg">A. Rahman</p>
                <p className="mt-2 text-sm text-white/70">
                  Barrister-at-Law • Dispute Resolution • Advisory
                </p>
              </div>

              <div className="text-sm">
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Quick Links
                </p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="hover:text-[#C9A227] transition"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#practice"
                      className="hover:text-[#C9A227] transition"
                    >
                      Practice Areas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#credentials"
                      className="hover:text-[#C9A227] transition"
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#C9A227] transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-sm">
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Legal Notice
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  The information on this website is for general purposes only
                  and does not constitute legal advice. Submitting an inquiry
                  does not create a barrister-client relationship.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} A. Rahman. All rights reserved.
              </p>
              <p>
                Designed for professional legal services • Navy / Gold / White
              </p>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
