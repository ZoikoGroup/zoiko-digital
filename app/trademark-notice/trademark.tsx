"use client";

import { useEffect, useState } from "react";

const TOC = [
  { num: 1, label: "Ownership" },
  { num: 2, label: "Our marks" },
  { num: 3, label: "Permitted use" },
  { num: 4, label: "Prohibited use" },
  { num: 5, label: "Brand guidelines" },
  { num: 6, label: "Third-party marks" },
  { num: 7, label: "Requesting permission" },
  { num: 8, label: "Reporting misuse" },
  { num: 9, label: "Contact" },
];

const REPRESENTATIVE_MARKS = [
  { mark: "Zoiko", type: "Word mark", status: "Registered / pending" },
  { mark: "Zoiko Web Services", type: "Word mark", status: "Registered / pending" },
  { mark: "ZWS", type: "Word mark", status: "Common-law" },
  { mark: "Zoiko logo", type: "Logo / device", status: "Registered / pending" },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 text-zinc-700 text-base leading-7">
          {/* Precise alignment for the neutral dark bullet point */}
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

export default function TrademarkNotice() {
  const [activeSection, setActiveSection] = useState(6);
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
          <h1 className="mt-[6.79px] text-white text-6xl font-extrabold leading-[57.12px]">Trademark Notice</h1>
          <div className="mt-[21.13px] flex items-center gap-6">
            <span className="size-1.5 bg-emerald-400 rounded-sm"></span>
            <p className="text-white/70 text-sm font-normal leading-6">Updated June 1, 2026</p>
            <p className="text-white/70 text-sm font-normal leading-6">Owner: <span className="text-white font-bold">Zoiko Tech Inc.</span></p>
            <p className="text-white/70 text-sm font-normal leading-6">Governing language: <span className="text-white font-bold">American English</span></p>
          </div>
        </div>
      </section>

      {/* --- MAIN PAGE CONTENT GRID --- */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-start px-[154px] pt-[38px] pb-24 gap-16">
        
        {/* --- DESKTOP SIDEBAR --- */}
        <aside className="sticky top-28 hidden lg:col-span-4 lg:block xl:col-span-3">
          <p className="pl-3.5 text-gray-600 text-xs font-bold uppercase tracking-wider leading-5 mb-[14.96px]">On this page</p>
          <nav className="w-64 border-l border-gray-200" aria-label="Trademark page links">
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

        {/* --- CONTENT WORKSPACE --- */}
        <main className="min-w-0 lg:col-span-8 xl:col-span-9 max-w-[760px] w-full flex flex-col">
          
          {/* Mobile TOC */}
          <div className="sticky top-20 z-30 rounded-xl border border-gray-200 bg-white shadow-sm lg:hidden w-full mb-6">
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

          {/* Intro Description Block */}
          <div className="text-zinc-700 text-base font-normal leading-7 mb-10">
            <p>
              Zoiko, the Zoiko logo, Zoiko Web Services, and related names, logos, and slogans are
              trademarks of Zoiko Tech Inc. This notice explains how our brand may and may not be used.
            </p>
          </div>

          {/* Section 1: Ownership */}
          <section id="section-1" className="scroll-mt-24">
            <div className="flex items-center justify-between gap-4 pb-3">
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-xs font-extrabold text-indigo-600">1</span>
                <h2 className="text-xl font-bold text-zinc-900">Ownership</h2>
              </div>
              <CopyLink id="section-1" />
            </div>
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.79px]">
              All trademarks, service marks, trade names, and trade dress displayed on our properties are
              owned by or licensed to Zoiko Tech Inc. and are protected by trademark and other laws. Nothing
              on our website grants any license or right to use any mark without our prior written permission.
            </p>
          </section>

          {/* Section 2: Our marks */}
          <section id="section-2" className="scroll-mt-24">
            <SectionHeader num={2} title="Our marks" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.79px] mb-[17.44px]">
              The following are representative marks of Zoiko Tech Inc. This list is not exhaustive, and the
              absence of a mark does not waive our rights.
            </p>
            <div className="w-full overflow-hidden bg-white/0 rounded-xl shadow-[0px_10px_34px_-20px_rgba(16,18,24,0.28)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] border border-gray-200">
              <table className="w-full min-w-[700px] text-left text-sm bg-white border-collapse">
                <thead className="bg-neutral-100 border-b border-gray-100 text-zinc-900 text-xs font-bold uppercase tracking-wide h-10">
                  <tr>
                    <th className="px-[18px]">Mark</th>
                    <th className="px-[18px] w-52">Type</th>
                    <th className="px-[18px] w-72">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {REPRESENTATIVE_MARKS.map((item) => (
                    <tr key={item.mark} className="h-11 hover:bg-neutral-50/50 transition-colors">
                      <td className="px-[18px] font-semibold text-zinc-900">{item.mark}</td>
                      <td className="px-[18px] text-zinc-700 font-normal">{item.type}</td>
                      <td className="px-[18px] text-zinc-700 font-normal">{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Permitted use */}
          <section id="section-3" className="scroll-mt-24">
            <SectionHeader num={3} title="Permitted use" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.80px] mb-6">
              You may make truthful, nominative references to our products and services, for example to state
              that your product integrates with Zoiko Web Services, provided that the reference:
            </p>
            <BulletList
              items={[
                "Is accurate and not misleading.",
                "Does not imply sponsorship, endorsement, or affiliation without our consent.",
                "Uses our marks only as adjectives, followed by the appropriate generic term.",
              ]}
            />
          </section>

          {/* Section 4: Prohibited use */}
          <section id="section-4" className="scroll-mt-24">
            <SectionHeader num={4} title="Prohibited use" />
            <div className="mt-[16.80px]">
              <BulletList
                items={[
                  "Altering, distorting, recoloring, or combining our marks with other elements.",
                  "Using our marks in your company name, product name, domain name, or social handle.",
                  "Using our marks in a way that is confusing, disparaging, or implies endorsement.",
                  "Registering our marks or confusingly similar marks anywhere.",
                ]}
              />
            </div>
          </section>

          {/* Section 5: Brand guidelines */}
          <section id="section-5" className="scroll-mt-24">
            <SectionHeader num={5} title="Brand guidelines" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.80px]">
              Approved logos, color values, and usage rules are provided in our brand guidelines, available to
              partners on request. When using our marks under permission, you must follow those guidelines,
              including clear-space, minimum-size, and color requirements.
            </p>
          </section>

          {/* Section 6: Third-party marks */}
          <section id="section-6" className="scroll-mt-24">
            <SectionHeader num={6} title="Third-party marks" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.79px]">
              Other product and company names referenced on our properties may be trademarks of their
              respective owners. Their use does not indicate any affiliation with or endorsement by those
              owners.
            </p>
          </section>

          {/* Section 7: Requesting permission */}
          <section id="section-7" className="scroll-mt-24">
            <SectionHeader num={7} title="Requesting permission" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.80px]">
              To request permission for any use of our marks beyond nominative reference, contact our brand
              team with a description of the intended use, audience, and duration.
            </p>
          </section>

          {/* Section 8: Reporting misuse */}
          <section id="section-8" className="scroll-mt-24">
            <SectionHeader num={8} title="Reporting misuse" />
            <p className="text-zinc-700 text-base font-normal leading-7 mt-[16.80px]">
              If you become aware of any misuse, infringement, or counterfeiting of our marks, please report it
              to our brand team so we can take appropriate action.
            </p>
          </section>

          {/* Section 9: Contact area */}
          <section id="section-9" className="scroll-mt-24">
            <SectionHeader num={9} title="Contact us" />
            <div className="mt-[16.79px] w-full bg-white rounded-2xl border border-gray-200 p-[25px] shadow-[0px_10px_34px_-20px_rgba(16,18,24,0.28)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)]">
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="text-gray-600 text-xs font-bold uppercase tracking-wide leading-5">Brand team</p>
                  <a href="mailto:brand@zoikoweb.com" className="mt-2 block text-indigo-600 text-base font-semibold leading-7 hover:underline transition">
                    brand@zoikoweb.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-bold uppercase tracking-wide leading-5">Legal inquiries</p>
                  <button className="mt-2 block text-indigo-600 text-base font-semibold leading-7 hover:underline transition bg-transparent border-none p-0 cursor-pointer text-left">
                    Open the portal
                  </button>
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


      {/* Floating Action Elements */}
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