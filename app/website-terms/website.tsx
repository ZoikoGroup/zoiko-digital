'use client';

import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'acceptance', num: '1', title: 'Acceptance of these terms' },
  { id: 'scope', num: '2', title: 'Scope' },
  { id: 'permitted-use', num: '3', title: 'Permitted use' },
  { id: 'content-ip', num: '4', title: 'Content and intellectual property' },
  { id: 'submissions', num: '5', title: 'Your submissions' },
  { id: 'third-party', num: '6', title: 'Third-party links' },
  { id: 'disclaimers', num: '7', title: 'Disclaimers' },
  { id: 'liability', num: '8', title: 'Limitation of liability' },
  { id: 'governing-law', num: '9', title: 'Governing law' },
  { id: 'changes', num: '10', title: 'Changes' },
  { id: 'contact', num: '11', title: 'Contact us' },
];

export default function WebsiteTerms() {
  const [activeSection, setActiveSection] = useState('acceptance');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = (id: string) => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-700 antialiased selection:bg-indigo-500 selection:text-white pb-24 lg:pb-0">
      
      {/* Hero Header Banner */}
      <section className="relative w-full h-60 bg-gradient-to-r from-fuchsia-700 to-sky-900 overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-60 blur-md pointer-events-none">
          <div className="absolute w-96 h-96 -left-12 -top-24 mix-blend-screen rounded-full bg-[radial-gradient(at_30%_30%,#4f46e5_0%,transparent_62%)]"></div>
          <div className="absolute w-96 h-96 right-12 -top-12 mix-blend-screen rounded-full bg-[radial-gradient(at_40%_40%,#06b6d4_0%,transparent_62%)]"></div>
          <div className="absolute w-96 h-96 left-1/2 bottom-[-150px] -translate-x-1/2 mix-blend-screen rounded-full bg-[radial-gradient(#8b5cf6_0%,transparent_62%)]"></div>
        </div>

        <div className="w-full max-w-[1224px] mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-2">
          <span className="text-indigo-300 text-xs font-bold uppercase tracking-wider">Regulatory & Ethical</span>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">Website Terms</h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-sm"></span>
              <span>Effective June 1, 2026</span>
            </div>
            <div>Version <span className="text-white font-medium">3.0</span></div>
            <div>Governing language: <span className="text-white font-medium">American English</span></div>
          </div>
        </div>
      </section>

      {/* Main Grid Workspace Layout */}
      <main className="w-full max-w-[1224px] mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        
        {/* Navigation Sidebar Drawer - Left Side Desktop */}
        <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 space-y-4 max-w-sm w-full">
          <div className="pl-3.5">
            <span className="text-gray-600 text-xs font-bold uppercase tracking-wider block mb-3">On This Page</span>
          </div>
          <nav className="border-l border-gray-200 flex flex-col">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`text-left px-3.5 py-1.5 border-l-2 text-sm transition-all ${
                  activeSection === sec.id
                    ? 'border-indigo-600 text-indigo-600 font-semibold'
                    : 'border-transparent text-gray-600 hover:text-indigo-600 font-normal'
                }`}
              >
                {sec.num} · {sec.title}
              </button>
            ))}
          </nav>
          <div className="pl-3.5 pt-1.5">
            <button className="w-60 h-10 bg-white hover:bg-zinc-50 border border-gray-200 rounded-[10px] shadow-sm inline-flex items-center justify-center gap-2 text-zinc-900 text-sm font-semibold transition-colors">
              <svg className="w-4 h-4 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Download PDF
            </button>
          </div>
        </aside>

        {/* Content Node Block */}
        <article className="lg:col-span-8 max-w-[760px] w-full space-y-8">
          <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-4">
            These Website Terms govern your access to and use of the public Zoiko Web Services (ZWS) website at <span className="font-medium text-zinc-900">zoikoweb.com</span> and related pages. They are separate from the <a href="#" className="text-indigo-600 hover:underline font-medium">Terms of Service</a> that govern the paid Services.
          </p>

          <section id="acceptance" className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 text-indigo-600 text-xs font-extrabold rounded-lg">1</span>
                <h2 className="text-zinc-900 text-xl font-bold">Acceptance of these terms</h2>
              </div>
              <button onClick={() => handleCopyLink('acceptance')} className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-gray-600 text-xs font-semibold shadow-sm transition-all">
                {copiedId === 'acceptance' ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-700 text-base leading-7">By accessing or using the website, you agree to these terms and our <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>. If you do not agree, please do not use the website.</p>
          </section>

          <section id="scope" className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 text-indigo-600 text-xs font-extrabold rounded-lg">2</span>
                <h2 className="text-zinc-900 text-xl font-bold">Scope</h2>
              </div>
              <button onClick={() => handleCopyLink('scope')} className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-gray-600 text-xs font-semibold shadow-sm transition-all">
                {copiedId === 'scope' ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-700 text-base leading-7">These terms apply to the informational and marketing website only. Access to and use of our cloud platforms and products are governed by your service agreement and the Terms of Service.</p>
          </section>

          <section id="permitted-use" className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 text-indigo-600 text-xs font-extrabold rounded-lg">3</span>
                <h2 className="text-zinc-900 text-xl font-bold">Permitted use</h2>
              </div>
              <button onClick={() => handleCopyLink('permitted-use')} className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-gray-600 text-xs font-semibold shadow-sm transition-all">
                {copiedId === 'permitted-use' ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-700 text-base leading-7">You may use the website for lawful, personal, and business-information purposes. You agree not to:</p>
            <ul className="pl-5 space-y-2 list-disc text-zinc-700 text-base leading-7">
              <li>Disrupt, damage, or impair the website or its security.</li>
              <li>Scrape, harvest, or systematically extract content except as permitted by law.</li>
              <li>Attempt to gain unauthorized access to any system or account.</li>
              <li>Use the website to transmit unlawful, infringing, or harmful material.</li>
            </ul>
          </section>

          <section id="content-ip" className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 text-indigo-600 text-xs font-extrabold rounded-lg">4</span>
                <h2 className="text-zinc-900 text-xl font-bold">Content and intellectual property</h2>
              </div>
              <button onClick={() => handleCopyLink('content-ip')} className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-gray-600 text-xs font-semibold shadow-sm transition-all">
                {copiedId === 'content-ip' ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-700 text-base leading-7">All content on the website, including text, graphics, logos, and design, is owned by or licensed to Zoiko Tech Inc. and protected by intellectual property laws. You may view and print pages for your own reference but may not otherwise reproduce, distribute, or create derivative works without our written permission. Use of our brand is governed by the <a href="#" className="text-indigo-600 hover:underline">Trademark Notice</a>.</p>
          </section>

          <section id="submissions" className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 text-indigo-600 text-xs font-extrabold rounded-lg">5</span>
                <h2 className="text-zinc-900 text-xl font-bold">Your submissions</h2>
              </div>
              <button onClick={() => handleCopyLink('submissions')} className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-gray-600 text-xs font-semibold shadow-sm transition-all">
                {copiedId === 'submissions' ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-700 text-base leading-7">If you submit content through forms, comments, or feedback, you grant us a non-exclusive, royalty-free license to use it for operating and improving our services. You are responsible for ensuring your submissions are lawful and do not infringe the rights of others.</p>
          </section>

          <section id="third-party" className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 text-indigo-600 text-xs font-extrabold rounded-lg">6</span>
                <h2 className="text-zinc-900 text-xl font-bold">Third-party links</h2>
              </div>
              <button onClick={() => handleCopyLink('third-party')} className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-gray-600 text-xs font-semibold shadow-sm transition-all">
                {copiedId === 'third-party' ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-700 text-base leading-7">The website may contain links to third-party sites we do not control. We provide these for convenience and are not responsible for their content, accuracy, or practices. Accessing third-party sites is at your own risk.</p>
          </section>

          <section id="disclaimers" className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 text-indigo-600 text-xs font-extrabold rounded-lg">7</span>
                <h2 className="text-zinc-900 text-xl font-bold">Disclaimers</h2>
              </div>
              <button onClick={() => handleCopyLink('disclaimers')} className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-gray-600 text-xs font-semibold shadow-sm transition-all">
                {copiedId === 'disclaimers' ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-700 text-base leading-7">Website content is provided for general information on an as-is and as-available basis, without warranties of any kind regarding accuracy, completeness, or fitness for a particular purpose. We may change or remove content at any time without notice.</p>
          </section>

          <section id="liability" className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 text-indigo-600 text-xs font-extrabold rounded-lg">8</span>
                <h2 className="text-zinc-900 text-xl font-bold">Limitation of liability</h2>
              </div>
              <button onClick={() => handleCopyLink('liability')} className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-gray-600 text-xs font-semibold shadow-sm transition-all">
                {copiedId === 'liability' ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-700 text-base leading-7">To the maximum extent permitted by law, Zoiko Tech Inc. is not liable for any indirect or consequential loss arising from your use of, or inability to use, the website. Nothing here excludes liability that cannot be excluded by law.</p>
          </section>

          <section id="governing-law" className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 text-indigo-600 text-xs font-extrabold rounded-lg">9</span>
                <h2 className="text-zinc-900 text-xl font-bold">Governing law</h2>
              </div>
              <button onClick={() => handleCopyLink('governing-law')} className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-gray-600 text-xs font-semibold shadow-sm transition-all">
                {copiedId === 'governing-law' ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-700 text-base leading-7">These terms are governed by the laws of the jurisdiction in which Zoiko Tech Inc. is incorporated, without regard to conflict-of-law principles, and the courts of that jurisdiction have exclusive jurisdiction over related disputes.</p>
          </section>

          <section id="changes" className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 text-indigo-600 text-xs font-extrabold rounded-lg">10</span>
                <h2 className="text-zinc-900 text-xl font-bold">Changes</h2>
              </div>
              <button onClick={() => handleCopyLink('changes')} className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-gray-600 text-xs font-semibold shadow-sm transition-all">
                {copiedId === 'changes' ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-700 text-base leading-7">We may update these Website Terms at any time. The current version is always posted here with its effective date, and continued use of the website constitutes acceptance.</p>
          </section>

          <section id="contact" className="pt-6 border-t border-gray-100 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 text-indigo-600 text-xs font-extrabold rounded-lg">11</span>
                <h2 className="text-zinc-900 text-xl font-bold">Contact us</h2>
              </div>
              <button onClick={() => handleCopyLink('contact')} className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-lg text-gray-600 text-xs font-semibold shadow-sm transition-all">
                {copiedId === 'contact' ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            
            <div className="w-full bg-white rounded-2xl border border-gray-200 p-6 shadow-md grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-gray-600 text-xs font-bold uppercase tracking-wide">LEGAL TEAM</span>
                <a href="mailto:legal@zoikoweb.com" className="text-indigo-600 hover:underline text-base font-semibold">legal@zoikoweb.com</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-600 text-xs font-bold uppercase tracking-wide">LEGAL INQUIRIES</span>
                <a href="#" className="text-indigo-600 hover:underline text-base font-semibold flex items-center gap-1">Open the portal</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-600 text-xs font-bold uppercase tracking-wide">ENTITY</span>
                <span className="text-zinc-700 text-base font-normal">Zoiko Tech Inc.</span>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Mobile Sticky Navigation Menu Trigger Block */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-neutral-200 px-6 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <div className="max-w-[760px] mx-auto relative">
          
          {/* Integrated Trigger Layout Container from Figma Properties */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full text-left self-stretch h-8 relative focus:outline-none select-none"
          >
            <div className="left-0 top-[3.22px] absolute justify-center text-zinc-900 text-base font-bold font-['Inter'] leading-6">
              On this page
            </div>
            <div className="w-3.5 h-8 right-0 top-0 absolute inline-flex flex-col justify-start items-start">
              <div className={`justify-center text-gray-600 text-xl font-bold font-['Inter'] leading-8 transform transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-45' : ''}`}>
                +
              </div>
            </div>
          </button>

          {/* Interactive Absolute Drawer Content Node */}
          {isMobileMenuOpen && (
            <>
              {/* Overlay dismissal target layer */}
              <div className="fixed inset-0 bg-black/10 -z-10" onClick={() => setIsMobileMenuOpen(false)} />
              
              <div className="absolute bottom-12 left-0 right-0 max-h-80 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-xl p-3 flex flex-col gap-1 animate-in slide-in-from-bottom-2 duration-150">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === sec.id
                        ? 'bg-indigo-50 text-indigo-600 font-semibold'
                        : 'text-zinc-700 hover:bg-neutral-50'
                    }`}
                  >
                    <span className="inline-block w-6 text-zinc-400 font-medium text-xs">{sec.num}</span>
                    {sec.title}
                  </button>
                ))}
              </div>
            </>
          )}

        </div>
      </div>

      {/* Back to top Utility Component */}
      <div className="fixed bottom-20 right-6 z-40 lg:bottom-6">
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-11 h-11 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-zinc-800 transition-transform active:scale-90" aria-label="Scroll to top">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"></path></svg>
        </button>
      </div>

    </div>
  );
}