"use client";

import { useEffect, useState } from "react";

const TOC = [
  { num: 1, label: "Purpose & scope" },
  { num: 2, label: "What is bribery" },
  { num: 3, label: "Prohibited conduct" },
  { num: 4, label: "Gifts & hospitality" },
  { num: 5, label: "Facilitation payments" },
  { num: 6, label: "Donations & sponsorship" },
  { num: 7, label: "Third parties" },
  { num: 8, label: "Records" },
  { num: 9, label: "Reporting" },
  { num: 10, label: "Consequences" },
  { num: 11, label: "Contact" },
];

const PROHIBITED_ITEMS = [
  "Offering, promising, or giving a bribe to anyone, including public officials.",
  "Requesting, agreeing to receive, or accepting a bribe.",
  "Using a third party to do anything this policy prohibits.",
  "Retaliating against anyone who refuses to pay a bribe or who raises a concern.",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 mt-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 text-zinc-700 text-base leading-7">
          {/* Neutral dark bullet point matched to Figma specification */}
          <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-zinc-800" />
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
      className="w-20 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-center text-xs font-semibold text-gray-600 shadow-sm transition hover:bg-neutral-50 hover:text-zinc-900 cursor-pointer"
    >
      {copied ? <span className="text-emerald-600 font-bold">Copied!</span> : "Copy link"}
    </button>
  );
}

export default function AntiBriberyPolicy() {
  const [activeSection, setActiveSection] = useState(1);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

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
    <div className="flex items-center justify-between gap-4 border-t border-gray-100 pt-[31px] mt-12">
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
    <div className="w-full min-h-screen bg-neutral-50 text-zinc-700 antialiased  relative">
      
      {/* --- HERO BANNER --- */}
      <section className="w-full max-w-[1440px] mx-auto h-64 relative bg-gradient-to-r from-fuchsia-700 to-sky-900 overflow-hidden">
        <div className="pointer-events-none absolute w-[1728px] h-[458.31px] left-[-144px] top-[-101.84px] opacity-60 blur-[6px]">
          <div className="w-96 h-96 left-[69.11px] top-[-137.49px] absolute mix-blend-screen bg-radial-[at_30%_30%] from-indigo-600 to-indigo-600/0 to-62% rounded-[210px]"></div>
          <div className="w-96 h-96 left-[1264.33px] top-[-45.83px] absolute mix-blend-screen bg-radial-[at_40%_40%] from-cyan-500 to-cyan-500/0 to-62% rounded-full"></div>
          <div className="w-96 h-96 left-[656.63px] top-[353.29px] absolute mix-blend-screen bg-radial from-violet-500 to-violet-500/0 to-62% rounded-[190px]"></div>
        </div>
        <div className="absolute left-[154px] top-[66px] flex flex-col justify-center">
          <p className="text-white text-xs font-bold uppercase tracking-wider leading-5">Regulatory & Ethical</p>
          <h1 className="mt-[6.79px] text-white text-6xl font-extrabold leading-[57.12px]">Anti-Bribery Policy</h1>
          <div className="mt-[21.13px] flex items-center gap-6">
            <span className="size-1.5 bg-emerald-400 rounded-sm"></span>
            <p className="text-white/70 text-sm font-normal leading-6">Effective June 1, 2026</p>
            <p className="text-white/70 text-sm font-normal leading-6">Version <span className="text-white font-bold">2.0</span></p>
            <p className="text-white/70 text-sm font-normal leading-6">Governing language: <span className="text-white font-bold">American English</span></p>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-start px-[154px] pt-[38px] pb-24 gap-16">
        
        {/* --- DESKTOP SIDEBAR --- */}
        <aside className="sticky top-8 hidden lg:col-span-4 lg:block xl:col-span-3">
          <p className="pl-3.5 text-gray-600 text-xs font-bold uppercase tracking-wider leading-5 mb-[14.96px]">On this page</p>
          <nav className="w-64 border-l border-gray-200" aria-label="Policy page links">
            {TOC.map((item) => (
              <a
                key={item.num}
                href={`#section-${item.num}`}
                onClick={(event) => scrollToSection(event, item.num)}
                className={`block h-8 pl-4 text-sm leading-5 border-l-2 transition-all flex items-center ${
                  activeSection === item.num
                    ? "border-indigo-600 text-indigo-600 font-semibold"
                    : "border-transparent text-gray-500 hover:text-zinc-900"
                }`}
              >
                {item.num} · {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-[34.98px]">
            <button
              type="button"
              onClick={() => window.print()}
              className="w-60 h-11 bg-white hover:bg-neutral-50 text-zinc-900 text-sm font-semibold rounded-[10px] border border-gray-200 flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
            >
              <svg className="size-3.5 shrink-0 text-zinc-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
          </div>
        </aside>

        {/* --- CONTENT AREA --- */}
        <main className="min-w-0 lg:col-span-8 xl:col-span-9 max-w-[760px] w-full flex flex-col">
          
          {/* Mobile TOC Component */}
          <div className="sticky top-4 z-30 rounded-xl border border-gray-200 bg-white shadow-sm lg:hidden w-full mb-6">
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

          {/* Statement Introduction Block */}
          <div className="text-zinc-700 text-base font-normal leading-7 mb-10">
            <p>
              Zoiko Tech Inc. is committed to conducting business honestly and ethically. We take a zero-tolerance
              approach to bribery and corruption and comply with applicable laws, including the US Foreign Corrupt 
              Practices Act (FCPA) and the UK Bribery Act.
            </p>
          </div>

          {/* Section 1: Purpose & scope */}
          <section id="section-1" className="scroll-mt-12">
            <div className="flex items-center justify-between gap-4 pb-3">
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-xs font-extrabold text-indigo-600">1</span>
                <h2 className="text-xl font-bold text-zinc-900">Purpose and scope</h2>
              </div>
              <CopyLink id="section-1" />
            </div>
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.79px]">
              This policy sets out our responsibilities, and those of people working for or on behalf of us, in
              observing and upholding our position on bribery and corruption. It applies to all employees,
              officers, directors, contractors, agents, and other third parties acting for or on our behalf.
            </p>
          </section>

          {/* Section 2: What is bribery */}
          <section id="section-2" className="scroll-mt-12">
            <SectionHeader num={2} title="What is bribery" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.79px]">
              A bribe is an inducement or reward offered, promised, given, requested, or accepted to gain a
              commercial, contractual, regulatory, or personal advantage improperly. It can take many forms,
              including cash, gifts, hospitality, services, or favors, and may be direct or through a third party.
            </p>
          </section>

          {/* Section 3: Prohibited conduct */}
          <section id="section-3" className="scroll-mt-12">
            <SectionHeader num={3} title="Prohibited conduct" />
            <BulletList items={PROHIBITED_ITEMS} />
          </section>

          {/* Section 4: Gifts & hospitality */}
          <section id="section-4" className="scroll-mt-12">
            <SectionHeader num={4} title="Gifts and hospitality" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.80px]">
              This policy does not prohibit reasonable and proportionate gifts and hospitality that are given
              openly, not intended to improperly influence, comply with local law, and are appropriately
              recorded. Gifts of cash or cash equivalents are not permitted. When in doubt, seek approval
              before offering or accepting.
            </p>
          </section>

          {/* Section 5: Facilitation payments */}
          <section id="section-5" className="scroll-mt-12">
            <SectionHeader num={5} title="Facilitation payments" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.80px]">
              We do not make and will not accept facilitation payments or kickbacks of any kind, regardless of
              local custom. If you are asked to make such a payment, you must refuse and report it.
            </p>
          </section>

          {/* Section 6: Donations & sponsorship */}
          <section id="section-6" className="scroll-mt-12">
            <SectionHeader num={6} title="Donations and sponsorship" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.79px]">
              Charitable donations and sponsorships must be lawful, transparent, and approved in advance.
              We do not make political contributions to influence business decisions.
            </p>
          </section>

          {/* Section 7: Third parties */}
          <section id="section-7" className="scroll-mt-12">
            <SectionHeader num={7} title="Third parties and due diligence" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.80px]">
              Third parties acting on our behalf can expose us to risk. We conduct risk-based due diligence on
              intermediaries, include anti-bribery commitments in contracts, and monitor ongoing relationships.
            </p>
          </section>

          {/* Section 8: Records */}
          <section id="section-8" className="scroll-mt-12">
            <SectionHeader num={8} title="Record-keeping" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.80px]">
              We keep accurate books and records, and gifts, hospitality, and expenses are recorded
              transparently. False or misleading records are prohibited.
            </p>
          </section>

          {/* Section 9: Reporting */}
          <section id="section-9" className="scroll-mt-12">
            <SectionHeader num={9} title="Reporting and whistleblowing" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.80px] mb-6">
              You must report any suspected bribery or breach of this policy as soon as possible. Reports can
              be made confidentially and, where permitted, anonymously through our whistleblowing channel.
            </p>
            <div className="w-full bg-violet-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-violet-200 p-5">
              <p className="text-indigo-900 text-base font-normal leading-6">
                Speak up: report concerns confidentially at <span className="text-indigo-600 font-semibold">speakup@zoikoweb.com</span>. We prohibit retaliation against anyone who reports in good faith.
              </p>
            </div>
          </section>

          {/* Section 10: Consequences */}
          <section id="section-10" className="scroll-mt-12">
            <SectionHeader num={10} title="Consequences of breach" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.80px]">
              Breaching this policy may result in disciplinary action up to and including termination, and
              termination of contracts with third parties. Bribery is a criminal offense that can lead to significant
              penalties for individuals and the company, and matters may be referred to authorities.
            </p>
          </section>

          {/* Section 11: Contact */}
          <section id="section-11" className="scroll-mt-12">
            <SectionHeader num={11} title="Contact us" />
            <div className="mt-[16.79px] w-full bg-white rounded-2xl border border-gray-200 p-[25px] shadow-[0px_10px_34px_-20px_rgba(16,18,24,0.28)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)]">
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="text-gray-600 text-xs font-bold uppercase tracking-wide leading-5">Ethics & compliance</p>
                  <a href="mailto:compliance@zoikoweb.com" className="mt-2 block text-indigo-600 text-base font-semibold leading-7 hover:underline transition">
                    compliance@zoikoweb.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-bold uppercase tracking-wide leading-5">Whistleblowing</p>
                  <a href="mailto:speakup@zoikoweb.com" className="mt-2 block text-indigo-600 text-base font-semibold leading-7 hover:underline transition">
                    speakup@zoikoweb.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-bold uppercase tracking-wide leading-5">Entity</p>
                  <p className="mt-2 text-zinc-700 text-base font-normal leading-7">
                    Zoiko Tech Inc.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Floating Action Scroll-to-Top Button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 flex size-11 items-center justify-center rounded-full bg-indigo-600 text-xl text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700 cursor-pointer z-50"
      >
        ↑
      </button>
    </div>
  );
}