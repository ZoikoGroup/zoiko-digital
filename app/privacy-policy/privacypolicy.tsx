"use client"
import React, { useState, useEffect } from 'react';

interface SidebarNav {
  num: number;
  label: string;
}

interface CookieData {
  cookie: string;
  provider: string;
  purpose: string;
}

export default function CookiePolicyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<number>(1);
  const [copiedSection, setCopiedSection] = useState<number | null>(null);

  // Updated to match the exact navigation from your Figma design
  const tableOfContents: SidebarNav[] = [
    { num: 1, label: 'What cookies are' },
    { num: 2, label: 'How we use cookies' },
    { num: 3, label: 'First-party cookies' },
    { num: 4, label: 'Essential cookies' },
    { num: 5, label: 'Performance & analytics' },
    { num: 6, label: 'Browser controls' },
    { num: 7, label: 'Do Not Track & GPC' },
    { num: 8, label: 'Third-party cookies' },
    { num: 9, label: 'Updates' },
    { num: 10, label: 'Contact us' },
  ];

  const cookiesData: CookieData[] = [
    { cookie: 'zws_session', provider: 'Zoiko (First-party)', purpose: 'Maintains your authenticated session.' },
    { cookie: 'zws_csrf', provider: 'Zoiko (First-party)', purpose: 'Protects against cross-site request forgery.' },
    { cookie: 'zws_consent', provider: 'Zoiko (First-party)', purpose: 'Stores your cookie preferences.' },
    { cookie: 'zws_lang', provider: 'Zoiko (First-party)', purpose: 'Remembers your language and region.' },
  ];

  // Intersection Observer to highlight active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionNum = parseInt(entry.target.id.split('-')[1]);
            setActiveSection(sectionNum);
          }
        });
      },
      { rootMargin: '-20% 0px -75% 0px' }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(`section-${item.num}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth Scroll Handler mapping directly to section-${num}
  const scrollToSection = (e: React.MouseEvent, num: number) => {
    e.preventDefault();
    const element = document.getElementById(`section-${num}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#section-${num}`);
      setActiveSection(num);
      setIsMobileMenuOpen(false);
    }
  };

  const handleCopyLink = (num: number) => {
    const url = `${window.location.origin}${window.location.pathname}#section-${num}`;
    navigator.clipboard.writeText(url);
    setCopiedSection(num);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-700 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* RICH BRAND HERO BANNER */}
      <section className="w-full relative bg-gradient-to-r from-fuchsia-700 to-sky-900 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10 flex flex-col justify-center h-full">
          <span className="text-white text-xs font-bold uppercase tracking-wider">Core Privacy & Usage</span>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">Cookie Policy</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-white text-sm">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-sm" />
              <span className="text-white/70">Last Updated: June 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE COMPACT MENU */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full h-14 px-6 flex items-center justify-between bg-neutral-50"
        >
          <span className="text-zinc-900 text-base font-bold">On this page</span>
          <span className={`transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-45' : ''}`}>+</span>
        </button>
        {isMobileMenuOpen && (
          <nav className="bg-white p-6 grid grid-cols-1 gap-2 shadow-inner">
            {tableOfContents.map((item) => (
              <a
                key={item.num}
                href={`#section-${item.num}`}
                onClick={(e) => scrollToSection(e, item.num)}
                className={`py-2 text-sm ${activeSection === item.num ? 'text-indigo-600 font-bold' : 'text-gray-600'}`}
              >
                {item.num} · {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* MAIN DOCUMENT INTERFACE */}
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-28 space-y-6">
          <div>
            <h3 className="text-gray-600 text-xs font-bold uppercase tracking-wider mb-3 px-3">On this page</h3>
            <nav className="border-l border-gray-200">
              {tableOfContents.map((item) => (
                <a
                  key={item.num}
                  href={`#section-${item.num}`}
                  onClick={(e) => scrollToSection(e, item.num)}
                  className={`block pl-4 py-1.5 text-sm border-l-2 transition-all -ml-[1px] ${
                    activeSection === item.num 
                      ? 'border-indigo-600 text-indigo-600 font-semibold' 
                      : 'border-transparent text-gray-600 hover:text-zinc-900'
                  }`}
                >
                  {item.num} · {item.label}
                </a>
              ))}
            </nav>
          </div>
 <button className="w-full h-11 px-4 bg-white border border-gray-200 hover:bg-neutral-50 transition-colors rounded-lg flex items-center gap-3 text-zinc-900 text-sm font-semibold shadow-sm">
              {/* Download icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-zinc-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download PDF
            </button>
        </aside>

        {/* POLICY CONTENT TARGETS */}
        <main className="lg:col-span-8 xl:col-span-9 space-y-12">
          
          <section id="section-1" className="scroll-mt-24 pt-4 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 1)}>
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">1</span>
                <h2 className="text-zinc-900 text-xl font-bold">What cookies are</h2>
              </div>
              <button onClick={() => handleCopyLink(1)} className="text-xs border p-1 rounded bg-white">
                {copiedSection === 1 ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="leading-7">Cookies are small text files placed on your device to store data that can be recalled by a web server.</p>
          </section>

          <section id="section-2" className="border-t border-gray-200 scroll-mt-24 pt-8 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 2)}>
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">2</span>
                <h2 className="text-zinc-900 text-xl font-bold">How we use cookies</h2>
              </div>
            </div>
            <p className="leading-7">We use cookies to remember your preferences, fight fraud, analyze service performance, and fulfill other legitimate operational intents.</p>
          </section>

          <section id="section-3" className="border-t border-gray-200 scroll-mt-24 pt-8 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 3)}>
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">3</span>
                <h2 className="text-zinc-900 text-xl font-bold">First-party cookies</h2>
              </div>
            </div>
            <p className="leading-7">These are set directly by the domain you are visiting to keep your workflows responsive and verified.</p>
          </section>

          <section id="section-4" className="border-t border-gray-200 scroll-mt-24 pt-8 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 4)}>
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">4</span>
                <h2 className="text-zinc-900 text-xl font-bold">Essential cookies</h2>
              </div>
            </div>
            <p className="leading-7">Mandatory cookies serving core operations such as network security layer and framework load balances.</p>
          </section>

          <section id="section-5" className="border-t border-gray-200 scroll-mt-24 pt-8 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 5)}>
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">5</span>
                <h2 className="text-zinc-900 text-xl font-bold">Performance & analytics</h2>
              </div>
            </div>
            <p className="leading-7">Tracks user telemetry patterns anonymously to isolate loading bottlenecks and interface improvements.</p>
          </section>

          <section id="section-6" className="border-t border-gray-200 scroll-mt-24 pt-8 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 6)}>
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">6</span>
                <h2 className="text-zinc-900 text-xl font-bold">Browser controls</h2>
              </div>
            </div>
            <p className="leading-7">Most web browsers automatically accept cookies but provide configuration panes allowing you to block or purge them completely.</p>
          </section>

          <section id="section-7" className="border-t border-gray-200 scroll-mt-24 pt-8 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 7)}>
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">7</span>
                <h2 className="text-zinc-900 text-xl font-bold">Do Not Track & GPC</h2>
              </div>
            </div>
            <p className="leading-7">Our applications parse Global Privacy Control signals sent programmatically via supporting ecosystem clients.</p>
          </section>

          <section id="section-8" className="border-t border-gray-200 scroll-mt-24 pt-8 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 8)}>
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">8</span>
                <h2 className="text-zinc-900 text-xl font-bold">Third-party cookies</h2>
              </div>
            </div>
            <p className="leading-7">Cookies provisioned by auxiliary processing platforms embedded into our systems to support edge integrations.</p>
          </section>

          <section id="section-9" className="border-t border-gray-200 scroll-mt-24 pt-8 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 9)}>
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">9</span>
                <h2 className="text-zinc-900 text-xl font-bold">Updates</h2>
              </div>
            </div>
            <p className="leading-7">We review this operational tracking overview periodically to reflect compliance adjustments correctly.</p>
          </section>

          <section id="section-10" className="border-t border-gray-200 scroll-mt-24 pt-8 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 10)}>
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">10</span>
                <h2 className="text-zinc-900 text-xl font-bold">Contact us</h2>
              </div>
            </div>
            <p className="leading-7">For support with data policy options, open a ticket via our legal inquiry dashboard directly.</p>
          </section>

        </main>
      </div>
    </div>
  );
}