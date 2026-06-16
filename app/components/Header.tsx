"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 h-19 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/ZoikoDigital_Logo-2048x737.png"
            alt="ZoikoDigital"
            width={180}
            height={40}
          />
        </Link>

        {/* Desktop Navigation (UNCHANGED) */}
        <nav className="hidden lg:flex items-center gap-11 text-sm font-medium text-slate-600">
          <Link
            href="/services-solutions"
            className="flex items-center gap-1 hover:text-sky-600"
          >
            Services & Solutions
          </Link>

          <Link href="#" className="hover:text-sky-600">
            Industries
          </Link>

          <Link href="#" className="hover:text-sky-600">
            Knowledge Hub
          </Link>

          <Link href="#" className="hover:text-sky-600">
            Partners & Ecosystem
          </Link>

          <Link href="#" className="hover:text-sky-600">
            Pricing & Packages
          </Link>

          <Link href="#" className="hover:text-sky-600">
            About
          </Link>
          <Link
            href="/request-a-demo"
            className="px-5 py-2 bg-[#90509F] text-white rounded-xl text-sm font-semibold shadow-md"
          >
            Request a Demo
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 text-slate-600 focus:outline-none"
          aria-label="Open Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Backdrop & Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Dimmed Background Overlay */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* White Side Draw Panel */}
          <div className="relative w-[80%] max-w-sm bg-white h-full shadow-xl flex flex-col p-6 animate-in slide-in-from-left duration-200">
            
            {/* Header inside Mobile Menu */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/images/ZoikoDigital_Logo-2048x737.png"
                  alt="ZoikoDigital"
                  width={140}
                  height={32}
                />
              </Link>
              {/* Close (X) button with matching background color */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded bg-[#90509F] text-white hover:bg-[#7b4388] transition-colors"
                aria-label="Close Menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-6 text-base font-normal text-slate-700">
              <Link
                href="/service&solution"
                onClick={() => setIsOpen(false)}
                className="hover:text-sky-600 transition-colors"
              >
                Services & Solutions
              </Link>

              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-sky-600 transition-colors"
              >
                Industries
              </Link>

              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-sky-600 transition-colors"
              >
                Knowledge Hub
              </Link>

              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-sky-600 transition-colors"
              >
                Partners & Ecosystem
              </Link>

              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-sky-600 transition-colors"
              >
                Pricing & Packages
              </Link>

              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-sky-600 transition-colors"
              >
                About
              </Link>

              <Link
                href="/request-a-demo"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full text-center py-3 bg-[#90509F] text-white rounded-xl text-sm font-semibold shadow-md active:bg-[#7b4388]"
              >
                Request a Demo
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}