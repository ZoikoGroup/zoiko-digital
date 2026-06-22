"use client";
import React, { useState, useEffect } from 'react';

interface SidebarNav {
  num: number;
  label: string;
}

export default function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [copiedSection, setCopiedSection] = useState<number | null>(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);
  const [consentSettings, setConsentSettings] = useState({
    essential: true,
    performance: false,
    functional: false,
    targeting: false
  });
  const [saveStatus, setSaveStatus] = useState(false);

  const tableOfContents: SidebarNav[] = [
    { num: 1, label: 'What cookies are' },
    { num: 2, label: 'Why we use them' },
    { num: 3, label: 'Categories of cookies' },
    { num: 4, label: 'Cookies we use' },
    { num: 5, label: 'Manage your preferences' },
    { num: 6, label: 'Browser controls' },
    { num: 7, label: 'Do Not Track & GPC' },
    { num: 8, label: 'Third-party cookies' },
    { num: 9, label: 'Updates' },
    { num: 10, label: 'Contact us' },
  ];

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
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(`section-${item.num}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent, num: number) => {
    e.preventDefault();
    const element = document.getElementById(`section-${num}`);
    if (element) {
      // Offset by 56px (h-14 height of the mobile bar) to ensure headings aren't hidden under it
      const offset = 56;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(num);
      setIsMobileTocOpen(false); // Close dropdown upon item tap
    }
  };

  const handleCopyLink = (num: number) => {
    const url = `${window.location.origin}${window.location.pathname}#section-${num}`;
    navigator.clipboard.writeText(url);
    setCopiedSection(num);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const triggerSaveNotification = () => {
    setSaveStatus(true);
    setTimeout(() => setSaveStatus(false), 2500);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-700  antialiased selection:bg-indigo-100 selection:text-indigo-900">
      


      {/* RICH MESH GRADIENT BANNER */}
      <section className="w-full relative bg-gradient-to-r from-fuchsia-700 to-sky-900 py-20 overflow-hidden">
        {/* Abstract Mesh Blobs */}
        <div className="absolute inset-0 opacity-60 blur-[60px] pointer-events-none">
          <div className="absolute size-96 left-[5%] top-[-30%] bg-indigo-600 rounded-full mix-blend-screen opacity-70"></div>
          <div className="absolute size-96 right-[5%] top-[-10%] bg-cyan-500 rounded-full mix-blend-screen opacity-70"></div>
          <div className="absolute size-96 left-[40%] bottom-[-40%] bg-violet-500 rounded-full mix-blend-screen opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-28 relative z-10 flex flex-col justify-center">
          <span className="text-white text-xs font-bold uppercase tracking-wider">Core Privacy & Usage</span>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">Cookie Policy</h1>
          
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-sm" />
              <span>Effective June 1, 2026</span>
            </div>
            <span className="text-white/40 hidden sm:inline">|</span>
            <div>Version <span className="font-bold text-white">2.1</span></div>
            <span className="text-white/40 hidden sm:inline">|</span>
            <div>Governing language: <span className="font-bold text-white">American English</span></div>
          </div>
        </div>
      </section>

      {/* COMPACT LAYOUT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-28 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* STICKY CONTROL SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-28 space-y-8">
          <div>
            <h3 className="text-gray-600 text-xs font-bold uppercase tracking-wider mb-4 px-3">On this page</h3>
            <nav className="border-l border-gray-200">
              {tableOfContents.map((item) => (
                <a
                  key={item.num}
                  href={`#section-${item.num}`}
                  onClick={(e) => scrollToSection(e, item.num)}
                  className={`block pl-4 py-2 text-sm border-l-2 transition-all -ml-[1px] ${
                    activeSection === item.num 
                      ? 'border-indigo-600 text-indigo-600 font-semibold bg-indigo-50/40' 
                      : 'border-transparent text-gray-500 hover:text-zinc-900'
                  }`}
                >
                  {item.num} · {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-200">
            <button className="w-full h-11 px-4 bg-white border border-gray-200 hover:bg-neutral-50 transition-colors rounded-lg flex items-center gap-3 text-zinc-900 text-sm font-semibold shadow-sm">
              <span className="text-base">⚙️</span> Cookie settings
            </button>
            <button className="w-full h-11 px-4 bg-white border border-gray-200 hover:bg-neutral-50 transition-colors rounded-lg flex items-center gap-3 text-zinc-900 text-sm font-semibold shadow-sm">
              <span className="text-base">📄</span> Download PDF
            </button>
          </div>
        </aside>

        {/* COMPREHENSIVE POLICY FRAMEWORK */}
        <main className="lg:col-span-8 xl:col-span-9 space-y-16">
          
          <div className="text-zinc-700 text-base leading-7">
            This Cookie Policy explains how Zoiko Tech Inc., operating as Zoiko Web Services (ZWS), uses cookies and similar tracking technologies on our public websites and platforms, and how you can control them. It supplements our <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
          </div>
                    {/* MOBILE STICKY TABLE OF CONTENTS TAB */}
      <div className="lg:hidden w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <button 
          onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
          className="w-full h-14 px-6 flex items-center justify-between text-left bg-[#FAFAFA] hover:bg-neutral-100 transition-colors focus:outline-none select-none"
                                                    aria-expanded={isMobileTocOpen}
          aria-controls="mobile-toc-menu"
        >
          <span className="text-[#14161C] text-base font-bold leading-6">
            On this page
          </span>
          <span className="text-[#5C6270] text-xl font-bold leading-8 w-8 h-8 flex items-center justify-center transition-transform duration-200">
            {isMobileTocOpen ? '−' : '+'}
          </span>
        </button>

        {/* Expandable Menu Panel */}
        <div 
          id="mobile-toc-menu" 
          className={`${isMobileTocOpen ? 'block' : 'hidden'} max-h-[50vh] overflow-y-auto border-t border-[#E8E8EC] bg-white shadow-lg`}
        >
          <nav className="py-2 text-sm font-medium">
            {tableOfContents.map((item) => (
              <a
                key={item.num}
                href={`#section-${item.num}`}
                onClick={(e) => scrollToSection(e, item.num)}
                className={`block px-6 py-3.5 transition-colors border-l-4 ${
                  activeSection === item.num 
                    ? 'bg-indigo-50/60 text-indigo-600 border-indigo-600 font-bold' 
                    : 'border-transparent text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.num}. {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
          {/* SECTION 1 */}
          <section id="section-1" className="scroll-mt-20">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">1</span>
                <h2 className="text-zinc-900 text-xl font-bold">What cookies are</h2>
              </div>
              <button onClick={() => handleCopyLink(1)} className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors">
                {copiedSection === 1 ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make sites work, to remember your preferences, and to provide reporting information. We also use similar technologies such as pixels, local storage, and software development kits, all of which we refer to collectively as cookies in this policy.</p>
              <p>Cookies may be first-party (set by us) or third-party (set by a provider we work with). They may last only for your browsing session (session cookies) or for a set period (persistent cookies).</p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="section-2" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">2</span>
                <h2 className="text-zinc-900 text-xl font-bold">Why we use cookies</h2>
              </div>
              <button onClick={() => handleCopyLink(2)} className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors">
                {copiedSection === 2 ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <ul className="space-y-3 text-zinc-600 text-base list-none pl-1">
              <li className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span> To keep the site secure and enable core functionality such as sign-in.</li>
              <li className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span> To remember your settings and preferences.</li>
              <li className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span> To understand how the site is used so we can improve performance.</li>
              <li className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span> To measure the effectiveness of our content and campaigns.</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section id="section-3" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">3</span>
                <h2 className="text-zinc-900 text-xl font-bold">Categories of cookies</h2>
              </div>
              <button onClick={() => handleCopyLink(3)} className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors">
                {copiedSection === 3 ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-100 border-b border-gray-200 text-zinc-900 text-xs font-bold uppercase tracking-wider">
                    <th className="p-4">Category</th>
                    <th className="p-4">Purpose</th>
                    <th className="p-4">Consent</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-semibold text-zinc-950">Essential</td>
                    <td className="p-4 text-zinc-600">Security, authentication, load balancing, and core site functionality.</td>
                    <td className="p-4 text-gray-500 font-medium">Always active</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-zinc-950">Performance</td>
                    <td className="p-4 text-zinc-600">Aggregated analytics that help us understand and improve usage.</td>
                    <td className="p-4 text-gray-500">Optional</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-zinc-950">Functional</td>
                    <td className="p-4 text-zinc-600">Remembering preferences such as language, region, and layout.</td>
                    <td className="p-4 text-gray-500">Optional</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-zinc-950">Targeting</td>
                    <td className="p-4 text-zinc-600">Measuring campaign relevance and effectiveness.</td>
                    <td className="p-4 text-gray-500">Optional</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="section-4" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">4</span>
                <h2 className="text-zinc-900 text-xl font-bold">Cookies we use</h2>
              </div>
              <button onClick={() => handleCopyLink(4)} className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors">
                {copiedSection === 4 ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-600 text-base mb-6">The table below lists representative cookies. The exact set may vary as we update the Services.</p>
            
            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-100 border-b border-gray-200 text-zinc-900 text-xs font-bold uppercase tracking-wider">
                    <th className="p-4">Cookie</th>
                    <th className="p-4">Provider</th>
                    <th className="p-4">Purpose</th>
                    <th className="p-4">Duration</th>
                    <th className="p-4">Category</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 text-sm divide-y divide-gray-100 whitespace-pre-line">
                  <tr>
                    <td className="p-4 font-semibold text-zinc-950">zws_session</td>
                    <td className="p-4 text-zinc-600">Zoiko (first-party)</td>
                    <td className="p-4 text-zinc-600">Maintains your authenticated session.</td>
                    <td className="p-4 text-zinc-500">Session</td>
                    <td className="p-4 font-medium text-zinc-700">Essential</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-zinc-950">zws_csrf</td>
                    <td className="p-4 text-zinc-600">Zoiko (first-party)</td>
                    <td className="p-4 text-zinc-600">Protects against cross-site request forgery.</td>
                    <td className="p-4 text-zinc-500">Session</td>
                    <td className="p-4 font-medium text-zinc-700">Essential</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-zinc-950">zws_consent</td>
                    <td className="p-4 text-zinc-600">Zoiko (first-party)</td>
                    <td className="p-4 text-zinc-600">Stores your cookie preferences.</td>
                    <td className="p-4 text-zinc-500">12 months</td>
                    <td className="p-4 font-medium text-zinc-700">Essential</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-zinc-950">zws_lang</td>
                    <td className="p-4 text-zinc-600">Zoiko (first-party)</td>
                    <td className="p-4 text-zinc-600">Remembers your language and region.</td>
                    <td className="p-4 text-zinc-500">12 months</td>
                    <td className="p-4 font-medium text-zinc-700">Functional</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-zinc-950">_zws_analytics</td>
                    <td className="p-4 text-zinc-600">Analytics provider</td>
                    <td className="p-4 text-zinc-600">Aggregated, privacy-respecting usage analytics.</td>
                    <td className="p-4 text-zinc-500">13 months</td>
                    <td className="p-4 font-medium text-zinc-700">Performance</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-zinc-950">_zws_campaign</td>
                    <td className="p-4 text-zinc-600">Marketing provider</td>
                    <td className="p-4 text-zinc-600">Measures campaign attribution and relevance.</td>
                    <td className="p-4 text-zinc-500">90 days</td>
                    <td className="p-4 font-medium text-zinc-700">Targeting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="section-5" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">5</span>
                <h2 className="text-zinc-900 text-xl font-bold">Manage your preferences</h2>
              </div>
              <button onClick={() => handleCopyLink(5)} className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors">
                {copiedSection === 5 ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-600 text-base mb-6">Use the controls below to choose which optional cookies we may use. Essential cookies are required for the site to function and cannot be switched off. You can return here to change your choice at any time.</p>
            
            {/* INTERACTIVE PREFERENCE CONTROL CORE */}
            <div className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden divide-y divide-gray-100">
              
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-zinc-900 font-bold text-base">Essential</h4>
                    <span className="bg-violet-100 text-indigo-600 text-[10px] uppercase tracking-wide font-extrabold px-2 py-0.5 rounded-md">Always On</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Required for security, authentication, and core functionality.</p>
                </div>
                <label className="relative inline-flex items-center cursor-not-allowed">
                  <input type="checkbox" checked disabled className="sr-only peer" />
                  <div className="w-11 h-6 bg-violet-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all shadow-inner"></div>
                </label>
              </div>

              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-zinc-900 font-bold text-base">Performance</h4>
                  <p className="text-gray-500 text-sm mt-1">Aggregated analytics to help us understand and improve the site.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={consentSettings.performance} onChange={(e) => setConsentSettings({...consentSettings, performance: e.target.checked})} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-zinc-900 font-bold text-base">Functional</h4>
                  <p className="text-gray-500 text-sm mt-1">Remembers preferences such as language, region, and layout.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={consentSettings.functional} onChange={(e) => setConsentSettings({...consentSettings, functional: e.target.checked})} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-zinc-900 font-bold text-base">Targeting</h4>
                  <p className="text-gray-500 text-sm mt-1">Measures the relevance and effectiveness of our campaigns.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={consentSettings.targeting} onChange={(e) => setConsentSettings({...consentSettings, targeting: e.target.checked})} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* ACTION PANELS FOOTER CONTAINER */}
              <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button onClick={triggerSaveNotification} className="h-10 px-5 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white text-sm font-bold rounded-lg shadow-sm">
                    Save preferences
                  </button>
                  <button onClick={() => { setConsentSettings({essential: true, performance: true, functional: true, targeting: true}); triggerSaveNotification(); }} className="h-10 px-5 bg-white border border-gray-200 hover:bg-neutral-50 transition-colors text-zinc-900 text-sm font-bold rounded-lg shadow-sm">
                    Accept all
                  </button>
                  <button onClick={() => { setConsentSettings({essential: true, performance: false, functional: false, targeting: false}); triggerSaveNotification(); }} className="h-10 px-5 bg-white border border-gray-200 hover:bg-neutral-50 transition-colors text-zinc-900 text-sm font-bold rounded-lg shadow-sm">
                    Reject non-essential
                  </button>
                </div>

                <div className={`text-emerald-600 text-xs font-semibold flex items-center gap-1 transition-opacity duration-300 ${saveStatus ? 'opacity-100' : 'opacity-0'}`}>
                  ✓ Preferences saved successfully
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 6 */}
          <section id="section-6" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">6</span>
                <h2 className="text-zinc-900 text-xl font-bold">Browser controls</h2>
              </div>
              <button onClick={() => handleCopyLink(6)} className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors">
                {copiedSection === 6 ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-600 text-base leading-7">Most browsers let you view, block, or delete cookies through their settings. Blocking some cookies may affect how the site works. Browser help pages explain how to manage cookies in Chrome, Safari, Firefox, and Edge.</p>
          </section>

          {/* SECTION 7 */}
          <section id="section-7" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">7</span>
                <h2 className="text-zinc-900 text-xl font-bold">Do Not Track and Global Privacy Control</h2>
              </div>
              <button onClick={() => handleCopyLink(7)} className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors">
                {copiedSection === 7 ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-600 text-base leading-7">Where required by law, we honor recognized opt-out preference signals such as Global Privacy Control (GPC). Because there is no common standard for Do Not Track, we respond to it consistent with applicable law and the preferences you set here.</p>
          </section>

          {/* SECTION 8 */}
          <section id="section-8" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">8</span>
                <h2 className="text-zinc-900 text-xl font-bold">Third-party cookies</h2>
              </div>
              <button onClick={() => handleCopyLink(8)} className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors">
                {copiedSection === 8 ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-600 text-base leading-7">Some cookies are set by trusted providers who deliver analytics, content delivery, or measurement on our behalf. These providers are subject to their own privacy notices and to our data protection obligations. The providers we engage are described in our <a href="#" className="text-indigo-600 font-semibold hover:underline">Subprocessors</a> page.</p>
          </section>

          {/* SECTION 9 */}
          <section id="section-9" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">9</span>
                <h2 className="text-zinc-900 text-xl font-bold">Updates to this policy</h2>
              </div>
              <button onClick={() => handleCopyLink(9)} className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors">
                {copiedSection === 9 ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-600 text-base leading-7">We may update this Cookie Policy as our use of cookies evolves or as legal requirements change. We will post the updated version here with a new effective date.</p>
          </section>

          {/* SECTION 10 */}
          <section id="section-10" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">10</span>
                <h2 className="text-zinc-900 text-xl font-bold">Contact us</h2>
              </div>
              <button onClick={() => handleCopyLink(10)} className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors">
                {copiedSection === 10 ? 'Copied!' : 'Copy link'}
              </button>
            </div>
            <p className="text-zinc-600 text-base mb-6">Questions about our use of cookies can be directed to the contacts below.</p>
            
            {/* DATA CARD COMPONENT */}
            <div className="border border-gray-200 bg-white rounded-2xl shadow-sm p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Privacy team</span>
                <a href="mailto:privacy@zoikoweb.com" className="text-indigo-600 font-semibold text-base hover:underline">privacy@zoikoweb.com</a>
              </div>
              <div>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Data Protection Officer</span>
                <a href="mailto:dpo@zoikoweb.com" className="text-indigo-600 font-semibold text-base hover:underline">dpo@zoikoweb.com</a>
              </div>
              <div>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Legal inquiries</span>
                <a href="#" className="text-indigo-600 font-semibold text-base hover:underline">Open the portal</a>
              </div>
              <div className="sm:col-span-2 md:col-span-3 pt-4 border-t border-gray-100">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Entity</span>
                <p className="text-zinc-700 text-base">Zoiko Tech Inc.</p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}