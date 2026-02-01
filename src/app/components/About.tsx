import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <div className="flex items-start gap-4">
              <div className="mt-2 h-10 w-1 rounded-full bg-[#C9A227]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[#0A1F44]/70">
                  About
                </p>
                <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
                  Calm counsel. Strong representation.
                </h2>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#0A1F44]/85 sm:text-lg">
              I advise and represent corporate clients, entrepreneurs, and
              individuals on disputes and legal strategy. My practice is built
              on thorough preparation, practical analysis, and clear guidance—so
              clients can make informed decisions with confidence.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  k: "Client-first clarity",
                  v: "Plain-English advice, timely updates, and a disciplined case plan.",
                },
                {
                  k: "Discretion & professionalism",
                  v: "Sensitive matters handled with confidentiality and care.",
                },
                {
                  k: "Courtroom readiness",
                  v: "Structured pleadings, evidence focus, and strong advocacy.",
                },
                {
                  k: "Commercially practical",
                  v: "Solutions designed around business reality and risk.",
                },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-[#0A1F44]/10 p-6"
                >
                  <p className="font-medium">{item.k}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#0A1F44]/75">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0A1F44]/95 transition"
              >
                Discuss Your Matter
              </a>
              <a
                href="#credentials"
                className="inline-flex items-center justify-center rounded-xl border border-[#0A1F44]/15 px-6 py-3 text-sm font-semibold hover:border-[#C9A227]/60 hover:text-[#C9A227] transition-colors"
              >
                View Credentials
              </a>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#0A1F44]/[0.03] p-8">
              <p className="text-xs uppercase tracking-widest text-[#0A1F44]/70">
                Quick Facts
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex items-start justify-between gap-4 border-b border-[#0A1F44]/10 pb-4">
                  <p className="text-sm font-medium">Primary Practice</p>
                  <p className="text-sm text-[#0A1F44]/75 text-right">
                    Civil & Commercial Disputes
                  </p>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[#0A1F44]/10 pb-4">
                  <p className="text-sm font-medium">Consultation Format</p>
                  <p className="text-sm text-[#0A1F44]/75 text-right">
                    In-person / Virtual
                  </p>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[#0A1F44]/10 pb-4">
                  <p className="text-sm font-medium">Office Hours</p>
                  <p className="text-sm text-[#0A1F44]/75 text-right">
                    Sunday–Thursday
                  </p>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-[#0A1F44]/75 text-right">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-[#C9A227]/30 bg-white p-5">
                <p className="text-sm font-medium">
                  Confidential inquiries welcome
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#0A1F44]/75">
                  Share a brief outline of your matter and preferred contact
                  time. A conflicts check may be required before formal
                  engagement.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#C9A227] px-4 py-2 text-sm font-semibold text-[#0A1F44] hover:brightness-95 transition"
                >
                  Request a Call Back
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
