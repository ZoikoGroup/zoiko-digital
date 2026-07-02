"use client";

import React from "react";

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#114769] dark:bg-teal-400" />
          <span className="text-sky-900 dark:text-gray-200 leading-relaxed text-sm sm:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-sky-900 dark:text-white antialiased pb-20 transition-colors duration-300">
      {/* Banner */}
      <section className="relative overflow-hidden bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 py-16 md:py-20 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-24 -top-24 size-[32rem] rounded-full bg-indigo-600/50 blur-3xl mix-blend-screen" />
          <div className="absolute -right-24 -top-12 size-96 rounded-full bg-cyan-500/30 blur-3xl mix-blend-screen" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Accessibility Statement
          </h1>
        </div>
      </section>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-28 py-10 sm:py-16 space-y-12 w-full">
        {/* Section 1 */}
        <section id="section-1" className="scroll-mt-24 space-y-4 md:space-y-6">
          <div className="border-b-2 border-[#114769] dark:border-gray-700 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">1. Our Commitment</h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-sky-900 dark:text-gray-300 font-normal">
            <p>
              Zoiko Digital (&quot;ZOIKO DIGITAL&quot;) is committed to ensuring that all users, including people with
              disabilities, have equal access to our websites, applications, and digital services.
            </p>
            <p>
              We continuously align our platforms with the{" "}
              <span className="text-[#114769] dark:text-teal-400 font-semibold">Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</span>, the{" "}
              <span className="text-[#114769] dark:text-teal-400 font-semibold">Americans with Disabilities Act (ADA)</span>, and global
              standards such as <span className="text-[#114769] dark:text-teal-400 font-semibold font-['Inter']">EN 301 549 (EU)</span>.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="scroll-mt-24 space-y-4 md:space-y-6">
          <div className="border-b-2 border-[#114769] dark:border-gray-700 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">2. Accessibility Features</h2>
          </div>
          <div className="px-1 sm:pl-2">
            <BulletList
              items={[
                <>
                  <span className="text-[#114769] dark:text-teal-400 font-semibold">Keyboard Navigation:</span> Full navigation using only a keyboard.
                </>,
                <>
                  <span className="text-[#114769] dark:text-teal-400 font-semibold">Screen Reader Compatibility:</span> Optimized for assistive technologies (JAWS, NVDA, VoiceOver).
                </>,
                <>
                  <span className="text-[#114769] dark:text-teal-400 font-semibold">Alt Text & Descriptions:</span> Images, icons, and media tagged with descriptive text.
                </>,
                <>
                  <span className="text-[#114769] dark:text-teal-400 font-semibold">Color Contrast:</span> Meets WCAG minimum standards for readability.
                </>,
                <>
                  <span className="text-[#114769] dark:text-teal-400 font-semibold">Resizable Text:</span> Supports text resizing without loss of function.
                </>,
                <>
                  <span className="text-[#114769] dark:text-teal-400 font-semibold">Captions & Transcripts:</span> Closed captions and transcripts for multimedia.
                </>,
                <>
                  <span className="text-[#114769] dark:text-teal-400 font-semibold">Error Prevention:</span> Accessible forms with clear instructions, error identification, and correction support.
                </>,
              ]}
            />
          </div>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="scroll-mt-24 space-y-4 md:space-y-6">
          <div className="border-b-2 border-[#114769] dark:border-gray-700 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">3. Ongoing Efforts</h2>
          </div>
          <div className="rounded-lg border-l-4 border-[#114769] dark:border-teal-500 bg-linear-80 from-[#114769]/5 to-sky-900/5 dark:from-slate-800/40 dark:to-slate-800/20 p-5 sm:p-6 shadow-xs px-4 sm:pl-8">
            <BulletList
              items={[
                "Regular audits for accessibility compliance.",
                <>
                  Accessibility embedded in <span className="text-[#114769] dark:text-teal-400 font-semibold">design, development, and QA cycles</span>.
                </>,
                <>
                  Training programs for staff and contractors on <span className="text-[#114769] dark:text-teal-400 font-semibold">inclusive design principles</span>.
                </>,
                "Partnerships with accessibility consultants and user communities for testing.",
              ]}
            />
          </div>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="scroll-mt-24 space-y-4 md:space-y-6">
          <div className="border-b-2 border-[#114769] dark:border-gray-700 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">4. Compliance Standards</h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm sm:text-base leading-relaxed font-normal text-sky-900 dark:text-gray-300">Our program is guided by:</p>
            <div className="px-1 sm:pl-2">
              <BulletList
                items={[
                  <>
                    <span className="text-[#114769] dark:text-teal-400 font-semibold">WCAG 2.1 Level AA</span> (global benchmark).
                  </>,
                  <>
                    <span className="text-[#114769] dark:text-teal-400 font-semibold">ADA Title III</span> (United States).
                  </>,
                  <>
                    <span className="text-[#114769] dark:text-teal-400 font-semibold">Section 508 of the Rehabilitation Act</span> (US Federal).
                  </>,
                  <>
                    <span className="text-[#114769] dark:text-teal-400 font-semibold">Equality Act 2010</span> (United Kingdom).
                  </>,
                  <>
                    <span className="text-[#114769] dark:text-teal-400 font-semibold">EN 301 549</span> (European Union).
                  </>,
                  <>
                    National accessibility laws in <span className="text-[#114769] dark:text-teal-400 font-semibold font-['Inter']">Canada, Nigeria, South Africa, and other regions</span>.
                  </>,
                ]}
              />
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="scroll-mt-24 space-y-4 md:space-y-6">
          <div className="border-b-2 border-[#114769] dark:border-gray-700 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">5. Feedback & Assistance</h2>
          </div>
          <div className="rounded-xl bg-sky-900 dark:bg-gray-800 p-5 sm:p-8 text-white shadow-md space-y-4 w-full">
            <h3 className="text-lg sm:text-xl font-semibold leading-snug">We welcome accessibility feedback:</h3>
            <div className="space-y-2.5 text-sm sm:text-base font-normal leading-relaxed text-gray-100">
              <p>
                <span className="font-semibold text-white">Email:</span> accessibility@zoikoweb.com
              </p>
              <p>
                <span className="font-semibold text-white">Phone (US HQ):</span> +1 (800) 484-5574
              </p>
              <p>
                <span className="font-semibold text-white">Mailing Address:</span> Zoiko Digital, Sacramento, California, USA
              </p>
              <p className="mt-4 pt-4 border-t border-white/20 text-xs sm:text-sm">
                We respond to accessibility concerns within <span className="font-semibold text-white">5 business days</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="scroll-mt-24 space-y-4 md:space-y-6">
          <div className="border-b-2 border-[#114769] dark:border-gray-700 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">6. Accessibility Roadmap</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border-2 border-[#114769] dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 sm:p-6 shadow-[0px_4px_6px_0px_rgba(144,80,159,0.05)] flex flex-col justify-start">
              <h4 className="font-bold text-[#114769] dark:text-teal-400 text-base sm:text-lg mb-2">Short-Term (0-6 months)</h4>
              <p className="text-sm sm:text-base leading-relaxed text-sky-900 dark:text-gray-300 font-normal">
                Audit all existing services for WCAG compliance.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#114769] dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 sm:p-6 shadow-[0px_4px_6px_0px_rgba(144,80,159,0.05)] flex flex-col justify-start">
              <h4 className="font-bold text-[#114769] dark:text-teal-400 text-base sm:text-lg mb-2">Medium-Term (6-18 months)</h4>
              <p className="text-sm sm:text-base leading-relaxed text-sky-900 dark:text-gray-300 font-normal">
                Achieve full <span className="text-[#114769] dark:text-teal-400 font-semibold">WCAG 2.1 Level AA compliance</span>.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#114769] dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 sm:p-6 shadow-[0px_4px_6px_0px_rgba(144,80,159,0.05)] flex flex-col justify-start sm:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-[#114769] dark:text-teal-400 text-base sm:text-lg mb-2">Long-Term (18+ months)</h4>
              <p className="text-sm sm:text-base leading-relaxed text-sky-900 dark:text-gray-300 font-normal font-['Inter']">
                Adapt to WCAG 2.2/3.0, integrate AI-driven accessibility enhancements.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="scroll-mt-24 space-y-4">
          <div className="border-b-2 border-[#114769] dark:border-gray-700 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">7. Date of Last Review</h2>
          </div>
          <p className="leading-relaxed text-sky-900 dark:text-gray-300 text-sm sm:text-base font-normal">
            This Accessibility Statement was last reviewed on{" "}
            <span className="text-[#114769] dark:text-teal-400 font-semibold font-['Inter']">22 August 2025</span>. Updates are made annually or as accessibility standards evolve.
          </p>
        </section>
      </main>
    </div>
  );
}
