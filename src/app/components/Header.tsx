"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#0A1F44]/10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-serif text-lg tracking-tight">M. Rahman</span>
            <span className="text-sm text-[#0A1F44]/70">Barrister-at-Law</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-md font-medium text-[#0A1F44]/90">
            <a href="#about" className="hover:text-[#C9A227]">
              About
            </a>
            <a href="#practice" className="hover:text-[#C9A227]">
              Practice Areas
            </a>
            <a href="#credentials" className="hover:text-[#C9A227]">
              Experience
            </a>
            <a href="#insights" className="hover:text-[#C9A227]">
              Approach
            </a>
            <a href="#contact" className="hover:text-[#C9A227]">
              Contact
            </a>
          </nav>

          {/* Right buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex rounded-xl border px-4 py-2 text-sm hover:border-[#C9A227] hover:text-[#C9A227]"
            >
              Call Request
            </a>

            <a
              href="#contact"
              className="hidden sm:inline-flex rounded-xl bg-[#C9A227] px-4 py-2 text-sm text-[#0A1F44] hover:bg-white hover:border hover:border-[#C9A227]"
            >
              Request Consultation
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2"
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0A1F44] border-t border-[#0A1F44]/10">
          <nav className="flex flex-col gap-4 px-6 py-6 text-md font-medium text-white">
            <a onClick={() => setOpen(false)} href="#about">
              About
            </a>
            <a onClick={() => setOpen(false)} href="#practice">
              Practice Areas
            </a>
            <a onClick={() => setOpen(false)} href="#credentials">
              Experience
            </a>
            <a onClick={() => setOpen(false)} href="#insights">
              Approach
            </a>
            <a onClick={() => setOpen(false)} href="#contact">
              Contact
            </a>

            <a
              href="#contact"
              className="mt-2 rounded-xl bg-[#C9A227] px-4 py-2 text-center text-[#fff] hover:bg-white hover:text-[#0A1F44] hover:border hover:border-[#C9A227]"
            >
              Request Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
