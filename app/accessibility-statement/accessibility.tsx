"use client";

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-700" />
          <span className="text-sky-900 leading-6">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen bg-white text-sky-900 antialiased pb-20">
      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-900 to-teal-400 py-16 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-24 -top-24 size-[32rem] rounded-full bg-indigo-600/50 blur-3xl mix-blend-screen" />
          <div className="absolute -right-24 -top-12 size-96 rounded-full bg-cyan-500/30 blur-3xl mix-blend-screen" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[64px]">
            Accessibility Statement
          </h1>
        </div>
      </section>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-6 lg:px-28 py-14 sm:py-16 space-y-12">
        {/* Section 1 */}
        <section id="section-1" className="scroll-mt-24 space-y-6">
          <div className="border-b-2 border-teal-700 pb-2">
            <h2 className="text-2xl font-semibold text-sky-900">1. Our Commitment</h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-sky-900 font-normal">
            <p>
              Zoiko Digital (&quot;ZOIKO DIGITAL&quot;) is committed to ensuring that all users, including people with
              disabilities, have equal access to our websites, applications, and digital services.
            </p>
            <p>
              We continuously align our platforms with the{" "}
              <span className="text-teal-700 font-semibold">Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</span>, the{" "}
              <span className="text-teal-700 font-semibold">Americans with Disabilities Act (ADA)</span>, and global
              standards such as <span className="text-teal-700 font-semibold font-['Inter']">EN 301 549 (EU)</span>.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="scroll-mt-24 space-y-6">
          <div className="border-b-2 border-teal-700 pb-2">
            <h2 className="text-2xl font-semibold text-sky-900">2. Accessibility Features</h2>
          </div>
          <div className="pl-2">
            <BulletList
              items={[
                <>
                  <span className="text-teal-700 font-semibold">Keyboard Navigation:</span> Full navigation using only a keyboard.
                </>,
                <>
                  <span className="text-teal-700 font-semibold">Screen Reader Compatibility:</span> Optimized for assistive technologies (JAWS, NVDA, VoiceOver).
                </>,
                <>
                  <span className="text-teal-700 font-semibold">Alt Text & Descriptions:</span> Images, icons, and media tagged with descriptive text.
                </>,
                <>
                  <span className="text-teal-700 font-semibold">Color Contrast:</span> Meets WCAG minimum standards for readability.
                </>,
                <>
                  <span className="text-teal-700 font-semibold">Resizable Text:</span> Supports text resizing without loss of function.
                </>,
                <>
                  <span className="text-teal-700 font-semibold">Captions & Transcripts:</span> Closed captions and transcripts for multimedia.
                </>,
                <>
                  <span className="text-teal-700 font-semibold">Error Prevention:</span> Accessible forms with clear instructions, error identification, and correction support.
                </>,
              ]}
            />
          </div>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="scroll-mt-24 space-y-6">
          <div className="border-b-2 border-teal-700 pb-2">
            <h2 className="text-2xl font-semibold text-sky-900">3. Ongoing Efforts</h2>
          </div>
          <div className="rounded-lg border-l-4 border-teal-700 bg-linear-80 from-teal-700/5 to-sky-900/5 p-6 shadow-xs pl-8">
            <BulletList
              items={[
                "Regular audits for accessibility compliance.",
                <>
                  Accessibility embedded in <span className="text-teal-700 font-semibold">design, development, and QA cycles</span>.
                </>,
                <>
                  Training programs for staff and contractors on <span className="text-teal-700 font-semibold">inclusive design principles</span>.
                </>,
                "Partnerships with accessibility consultants and user communities for testing.",
              ]}
            />
          </div>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="scroll-mt-24 space-y-6">
          <div className="border-b-2 border-teal-700 pb-2">
            <h2 className="text-2xl font-semibold text-sky-900">4. Compliance Standards</h2>
          </div>
          <div className="space-y-4">
            <p className="text-base leading-6 font-normal">Our program is guided by:</p>
            <div className="pl-2">
              <BulletList
                items={[
                  <>
                    <span className="text-teal-700 font-semibold">WCAG 2.1 Level AA</span> (global benchmark).
                  </>,
                  <>
                    <span className="text-teal-700 font-semibold">ADA Title III</span> (United States).
                  </>,
                  <>
                    <span className="text-teal-700 font-semibold">Section 508 of the Rehabilitation Act</span> (US Federal).
                  </>,
                  <>
                    <span className="text-teal-700 font-semibold">Equality Act 2010</span> (United Kingdom).
                  </>,
                  <>
                    <span className="text-teal-700 font-semibold">EN 301 549</span> (European Union).
                  </>,
                  <>
                    National accessibility laws in <span className="text-teal-700 font-semibold font-['Inter']">Canada, Nigeria, South Africa, and other regions</span>.
                  </>,
                ]}
              />
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="scroll-mt-24 space-y-6">
          <div className="border-b-2 border-teal-700 pb-2">
            <h2 className="text-2xl font-semibold text-sky-900">5. Feedback & Assistance</h2>
          </div>
          <div className="rounded-xl bg-sky-900 p-8 text-white shadow-md space-y-4">
            <h3 className="text-xl font-semibold leading-8">We welcome accessibility feedback:</h3>
            <div className="space-y-2.5 text-base font-normal leading-6">
              <p>
                <span className="font-semibold">Email:</span> accessibility@zoikoweb.com
              </p>
              <p>
                <span className="font-semibold">Phone (US HQ):</span> +1 (800) 484-5574
              </p>
              <p>
                <span className="font-semibold">Mailing Address:</span> Zoiko Digital, Sacramento, California, USA
              </p>
              <p className="mt-4 pt-4 border-t border-white/20">
                We respond to accessibility concerns within <span className="font-semibold">5 business days</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="scroll-mt-24 space-y-6">
          <div className="border-b-2 border-teal-700 pb-2">
            <h2 className="text-2xl font-semibold text-sky-900">6. Accessibility Roadmap</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-teal-700 bg-white p-6 shadow-sm flex flex-col justify-start">
              <h4 className="font-bold text-teal-700 text-lg mb-3">Short-Term (0-6 months)</h4>
              <p className="text-base leading-6 text-sky-900 font-normal">
                Audit all existing services for WCAG compliance.
              </p>
            </div>
            <div className="rounded-lg border border-teal-700 bg-white p-6 shadow-sm flex flex-col justify-start">
              <h4 className="font-bold text-teal-700 text-lg mb-3">Medium-Term (6-18 months)</h4>
              <p className="text-base leading-6 text-sky-900 font-normal">
                Achieve full <span className="text-teal-700 font-semibold">WCAG 2.1 Level AA compliance</span>.
              </p>
            </div>
            <div className="rounded-lg border border-teal-700 bg-white p-6 shadow-sm flex flex-col justify-start">
              <h4 className="font-bold text-teal-700 text-lg mb-3">Long-Term (18+ months)</h4>
              <p className="text-base leading-6 text-sky-900 font-normal font-['Inter']">
                Adapt to WCAG 2.2/3.0, integrate AI-driven accessibility enhancements.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="scroll-mt-24 space-y-6">
          <div className="border-b-2 border-teal-700 pb-2">
            <h2 className="text-2xl font-semibold text-sky-900">7. Date of Last Review</h2>
          </div>
          <p className="leading-7 text-sky-900 text-base font-normal">
            This Accessibility Statement was last reviewed on{" "}
            <span className="text-teal-700 font-semibold font-['Inter']">22 August 2025</span>. Updates are made annually or as accessibility standards evolve.
          </p>
        </section>
      </main>
    </div>
  );
}
