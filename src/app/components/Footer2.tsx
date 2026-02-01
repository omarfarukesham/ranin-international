import React from "react";

export default function Footer2() {
  return (
    <footer className="border-t border-white/10 bg-[#13496C] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white shadow-sm ring-1 ring-white/15">
                <span className="text-sm font-semibold">RI</span>
              </div>

              <div>
                <div className="text-sm font-semibold text-white">
                  Ranin International
                </div>
                <div className="mt-0.5 text-xs text-white/70">
                  Professional industrial services & supply
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              Built for clarity, trust, and modern corporate
              presentation—aligned with safety-first execution and reliable
              delivery.
            </p>

            {/* Optional quick contact row */}
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/75">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-[#AC2A2D]" />
                Saudi Arabia
              </span>
              <a
                href="mailto:info@ranininternational.com"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 transition hover:bg-white/15"
              >
                info@ranininternational.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-white">Company</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="#services"
                    className="text-white/75 transition hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#why"
                    className="text-white/75 transition hover:text-white"
                  >
                    Why us
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-white/75 transition hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-white/75 transition hover:text-white"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Contact</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="#contact"
                    className="text-white/75 transition hover:text-white"
                  >
                    Request a quote
                  </a>
                </li>
                <li className="text-white/75">Working hours: Sun–Thu</li>
                <li className="text-white/75">Phone: +966 XX XXX XXXX</li>
                <li className="text-white/75">WhatsApp: +966 XX XXX XXXX</li>
              </ul>

              {/* CTA button */}
              <div className="mt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#AC2A2D] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.98]"
                >
                  Get Quote
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tips / Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm ring-1 ring-white/10">
            <div className="text-sm font-semibold text-white">Quick notes</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Replace demo text with real service details.</li>
              <li>• Add project photos and client industries for trust.</li>
              <li>• Use red only for key CTAs & highlights.</li>
            </ul>

            <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold text-white/80">
                Want a custom proposal?
              </div>
              <div className="mt-1 text-sm text-white/70">
                Share your scope and timeline—we’ll respond within 24 hours.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} Ranin International. All rights
              reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
