"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const TOC = [
  { num: 1, label: "Introduction" },
  { num: 2, label: "Our organization" },
  { num: 3, label: "Our supply chains" },
  { num: 4, label: "Policies" },
  { num: 5, label: "Risk assessment" },
  { num: 6, label: "Due diligence" },
  { num: 7, label: "Training" },
  { num: 8, label: "Effectiveness" },
  { num: 9, label: "Approval" },
  { num: 10, label: "Contact" },
];

const MILESTONES = {
  2023: {
    title: "Vetting & Audit Launch",
    description: "Rolled out ZWS Supplier Code of Conduct vetting to 100% of direct Tier-1 hardware partners. Completed 24 on-site compliance audits.",
    impact: "Established baseline supplier risk profiles.",
  },
  2024: {
    title: "Global Training Expansion",
    description: "Mandated ethical procurement training for all global operations and logistics teams. Launched automated supplier self-assessment tools.",
    impact: "94% supplier self-assessment completion rate.",
  },
  2025: {
    title: "Full Alignment & Tier-2 Vetting",
    description: "Officially aligned procurement processes with ISO 20400 Sustainable Procurement guidelines. Commenced auditing Tier-2 network infrastructure suppliers.",
    impact: "100% of identified high-risk vendors verified.",
  },
  2026: {
    title: "Advanced AI Risk Mapping (Plan)",
    description: "Integrate geographic and environmental AI risk-scoring systems to automate vendor monitoring. Roll out direct worker feedback channels.",
    impact: "Targeting zero unresolved compliance issues across Tier-1/Tier-2.",
  },
} as const;

type MilestoneYear = keyof typeof MILESTONES;

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CopyLink({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 transition hover:bg-neutral-50 hover:text-zinc-900 cursor-pointer shadow-sm"
    >
      {copied ? (
        <>
          <svg className="size-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-emerald-600">Copied!</span>
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3.5">
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
          </svg>
          Copy link
        </>
      )}
    </button>
  );
}

export default function ModernSlaveryStatement() {
  const [activeSection, setActiveSection] = useState(1);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [timelineYear, setTimelineYear] = useState<MilestoneYear>(2025);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(Number(entry.target.id.replace("section-", "")));
          }
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0.05 },
    );

    TOC.forEach(({ num }) => {
      const section = document.getElementById(`section-${num}`);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, num: number) => {
    event.preventDefault();
    document.getElementById(`section-${num}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(num);
    setMobileTocOpen(false);
  };

  const SectionHeader = ({ num, title }: { num: number; title: string }) => (
    <div className="mb-6 flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
      <div className="flex items-center gap-3">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-xs font-extrabold text-indigo-600">
          {num}
        </span>
        <h2 className="text-xl font-bold tracking-tight text-zinc-900">
          {title}
        </h2>
      </div>
      <CopyLink id={`section-${num}`} />
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-700 antialiased">
      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-fuchsia-700 to-sky-900 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-24 -top-24 size-[32rem] rounded-full bg-indigo-600/50 blur-3xl mix-blend-screen" />
          <div className="absolute -right-24 -top-12 size-96 rounded-full bg-cyan-500/30 blur-3xl mix-blend-screen" />
          <div className="absolute left-[35%] top-[50%] size-96 rounded-full bg-violet-500/40 blur-3xl mix-blend-screen" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-28">
          <p className="text-xs font-bold uppercase tracking-wider text-white">Regulatory & Ethical</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Modern Slavery Statement
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75 items-center">
            <span className="inline-block size-2 rounded-full bg-emerald-400"></span>
            <span>Financial year 2025-2026</span>
            <span>Approved by the Board</span>
            <span>Governing language: American English</span>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 py-14 lg:grid-cols-12 lg:gap-16 lg:px-28 lg:py-16">
        {/* Desktop Sidebar */}
        <aside className="sticky top-28 hidden lg:col-span-4 lg:block xl:col-span-3">
          <p className="mb-4 px-3 text-xs font-bold uppercase tracking-wider text-gray-600">On this page</p>
          <nav className="border-l border-gray-200" aria-label="Statement contents">
            {TOC.map((item) => (
              <a
                key={item.num}
                href={`#section-${item.num}`}
                onClick={(event) => scrollToSection(event, item.num)}
                className={`-ml-px block border-l-2 py-2 pl-4 text-sm transition ${
                  activeSection === item.num
                    ? "border-indigo-600 bg-violet-100 font-semibold text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-zinc-900"
                }`}
              >
                {item.num} · {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 border-t border-gray-200 pt-5">
            <button
              type="button"
              onClick={() => window.print()}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition hover:bg-neutral-50 cursor-pointer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" />
              </svg>
              Download PDF
            </button>
          </div>
        </aside>

        {/* Content Main Area */}
        <main className="min-w-0 space-y-14 lg:col-span-8 xl:col-span-9">
          {/* Mobile TOC */}
          <div className="sticky top-0 z-30 rounded-xl border border-gray-200 bg-white shadow-sm lg:hidden">
            <button
              type="button"
              onClick={() => setMobileTocOpen((open) => !open)}
              className="flex w-full items-center justify-between px-5 py-4 font-bold text-zinc-800 cursor-pointer"
              aria-expanded={mobileTocOpen}
            >
              On this page <span className="text-xl text-indigo-600">{mobileTocOpen ? "−" : "+"}</span>
            </button>
            {mobileTocOpen && (
              <nav className="max-h-72 overflow-y-auto border-t border-gray-200 py-2">
                {TOC.map((item) => (
                  <a
                    key={item.num}
                    href={`#section-${item.num}`}
                    onClick={(event) => scrollToSection(event, item.num)}
                    className="block px-5 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {item.num} · {item.label}
                  </a>
                ))}
              </nav>
            )}
          </div>

          {/* Intro Text */}
          <div className="text-zinc-700 text-base leading-7 space-y-4">
            <p>
              Zoiko Tech Inc. is committed to acting ethically and with integrity, and to taking steps to ensure
              that modern slavery and human trafficking are not taking place in our business or supply
              chains. This statement is made on a voluntary basis and in the spirit of applicable
              transparency in supply chains legislation.
            </p>
          </div>

          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-24">
            <SectionHeader num={1} title="Introduction" />
            <div className="space-y-4 leading-7">
              <p>
                Modern slavery is a crime and a violation of fundamental human rights. It takes various forms,
                including slavery, servitude, forced or compulsory labor, and human trafficking. We have a zero-tolerance
                approach and are committed to preventing it in our operations and supply chains.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-24">
            <SectionHeader num={2} title="Our organization" />
            <div className="space-y-4 leading-7">
              <p>
                Zoiko Web Services is operated by Zoiko Tech Inc., providing cloud infrastructure and software
                services to enterprise customers. Our workforce consists primarily of skilled professionals
                employed under fair terms in the jurisdictions where we operate.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-24">
            <SectionHeader num={3} title="Our business and supply chains" />
            <div className="space-y-4 leading-7">
              <p>
                Our supply chain includes data-center and infrastructure providers, hardware manufacturers,
                software vendors, and professional-services firms. We recognize that risk can be higher in
                hardware manufacturing and certain outsourced services, and we focus our diligence
                accordingly.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-24">
            <SectionHeader num={4} title="Policies" />
            <div className="space-y-4 leading-7">
              <BulletList
                items={[
                  "Supplier code of conduct setting expectations on labor rights and ethical sourcing.",
                  "Whistleblowing policy enabling confidential reporting of concerns.",
                  "Recruitment and employment practices that respect freedom of association and fair wages.",
                  <>
                    Anti-bribery and ethics policies that reinforce responsible conduct, described in our{" "}
                    <Link href="/anti-bribery-policy" className="text-indigo-600 hover:underline">
                      Anti-Bribery Policy
                    </Link>
                    .
                  </>,
                ]}
              />
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-24">
            <SectionHeader num={5} title="Risk assessment" />
            <div className="space-y-4 leading-7">
              <p>
                We assess modern-slavery risk based on factors such as country, sector, and the nature of
                goods and services procured. Higher-risk suppliers receive enhanced scrutiny before and during
                engagement.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-24">
            <SectionHeader num={6} title="Due diligence" />
            <div className="space-y-4 leading-7">
              <BulletList
                items={[
                  "Including contractual commitments against forced and child labor in supplier agreements.",
                  "Requesting suppliers to confirm compliance and, where appropriate, evidence of their own controls.",
                  "Investigating and acting on any concerns identified, up to ending a supplier relationship.",
                ]}
              />
            </div>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-24">
            <SectionHeader num={7} title="Training and awareness" />
            <div className="space-y-4 leading-7">
              <p>
                Relevant staff, particularly in procurement and people functions, receive training to recognize the
                signs of modern slavery and to understand how to escalate concerns.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="scroll-mt-24">
            <SectionHeader num={8} title="Measuring effectiveness" />
            <div className="space-y-6 leading-7">
              <p>
                We review the effectiveness of our approach using indicators such as supplier code acceptance,
                completion of training, and the number and resolution of reported concerns, and we refine our
                controls over time.
              </p>

              {/* Embedded Interactive Metrics Dashboard */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-zinc-900 flex items-center gap-2">
                  <svg className="size-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" />
                  </svg>
                  Ethical Sourcing & Supply Chain Dashboard
                </h3>

                {/* Progress Counters Grid */}
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-gray-100 bg-neutral-50 p-4 text-center">
                    <span className="text-3xl font-extrabold text-indigo-600 block">98.4%</span>
                    <span className="mt-1 text-xs font-semibold text-gray-500 uppercase tracking-wider block">Tier-1 Audits Done</span>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-neutral-50 p-4 text-center">
                    <span className="text-3xl font-extrabold text-indigo-600 block">100%</span>
                    <span className="mt-1 text-xs font-semibold text-gray-500 uppercase tracking-wider block">Procurement Staff Trained</span>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-neutral-50 p-4 text-center">
                    <span className="text-3xl font-extrabold text-indigo-600 block">0</span>
                    <span className="mt-1 text-xs font-semibold text-gray-500 uppercase tracking-wider block">Unresolved Concerns</span>
                  </div>
                </div>

                {/* Interactive Timeline Tabs */}
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">Compliance Program Milestones</p>
                  <div className="flex gap-2">
                    {(Object.keys(MILESTONES) as unknown as MilestoneYear[]).map((year) => (
                      <button
                        key={year}
                        type="button"
                        onClick={() => setTimelineYear(Number(year) as MilestoneYear)}
                        className={`rounded-lg px-4 py-2 text-xs font-bold transition cursor-pointer ${
                          timelineYear === Number(year)
                            ? "bg-indigo-600 text-white shadow-xs"
                            : "bg-neutral-100 text-gray-600 hover:bg-neutral-200"
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  {/* Milestone Detail Card */}
                  <div className="mt-4 rounded-lg bg-neutral-100 p-4 border border-neutral-200/50">
                    <p className="text-sm font-bold text-zinc-900">{MILESTONES[timelineYear].title}</p>
                    <p className="mt-2 text-xs text-zinc-700 leading-5">{MILESTONES[timelineYear].description}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded bg-white px-2 py-1 text-[10px] font-bold text-indigo-600 border border-gray-200 shadow-3xs">
                      <span>Impact:</span>
                      <span className="text-zinc-600 font-normal">{MILESTONES[timelineYear].impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="scroll-mt-24">
            <SectionHeader num={9} title="Approval" />
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Approved by</p>
              <p className="text-base text-zinc-700 leading-7 font-medium">
                The Board of Directors of Zoiko Tech Inc. This statement is reviewed and updated annually and
                relates to the financial year ending 2026.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="scroll-mt-24">
            <SectionHeader num={10} title="Contact us" />
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Ethics & compliance</p>
                  <a href="mailto:compliance@zoikoweb.com" className="mt-1 block text-sm font-semibold text-indigo-600 hover:underline">
                    compliance@zoikoweb.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Whistleblowing</p>
                  <a href="mailto:speakup@zoikoweb.com" className="mt-1 block text-sm font-semibold text-indigo-600 hover:underline">
                    speakup@zoikoweb.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Entity</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-700">Zoiko Tech Inc.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Scroll to Top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 flex size-11 items-center justify-center rounded-full bg-indigo-600 text-xl text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700 cursor-pointer"
      >
        ↑
      </button>
    </div>
  );
}
