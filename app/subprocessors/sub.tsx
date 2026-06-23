"use client";
import React, { useState, useEffect, useMemo } from 'react';

type Category = 'Infrastructure' | 'Analytics' | 'Support' | 'Payments' | 'Communications' | 'Security';

type Subprocessor = {
  id: number;
  vendor: string;
  category: Category;
  purpose: string;
  location: string;
  section: number;
};

const ALL_SUBPROCESSORS: Subprocessor[] = [
  { id: 1, vendor: 'Cloud Provider A',      category: 'Infrastructure',    purpose: 'Primary cloud compute, block storage, and managed database hosting',              location: 'United States, EU (Frankfurt)', section: 3 },
  { id: 2, vendor: 'CDN Vendor B',          category: 'Infrastructure',    purpose: 'Edge caching and content delivery network for static assets and API acceleration', location: 'Global (100+ PoPs)',             section: 3 },
  { id: 3, vendor: 'DNS Vendor C',          category: 'Infrastructure',    purpose: 'Managed DNS resolution and DDoS-resilient authoritative DNS',                      location: 'United States',                  section: 3 },
  { id: 4, vendor: 'Analytics Vendor D',    category: 'Analytics',         purpose: 'Product usage analytics and customer behavioral event tracking within the ZWS portal', location: 'United States',              section: 4 },
  { id: 5, vendor: 'Observability Vendor E',category: 'Analytics',         purpose: 'Application error tracking, performance monitoring, and log aggregation',          location: 'United States, EU',              section: 4 },
  { id: 6, vendor: 'Support Platform F',    category: 'Support',           purpose: 'Help desk ticketing system and customer support CRM used by ZWS support agents',   location: 'United States',                  section: 5 },
  { id: 7, vendor: 'Payment Processor G',   category: 'Payments',          purpose: 'Subscription billing, invoicing, and credit card processing',                      location: 'United States, EU',              section: 6 },
  { id: 8, vendor: 'Email Vendor H',        category: 'Communications',    purpose: 'Transactional email delivery for account notifications, invoices, and security alerts', location: 'United States',             section: 7 },
  { id: 9, vendor: 'SMS Vendor I',          category: 'Communications',    purpose: 'SMS delivery for two-factor authentication and critical security alerts',          location: 'United States',                  section: 7 },
  { id: 10,vendor: 'Security Vendor J',     category: 'Security',          purpose: 'DDoS mitigation, web application firewall (WAF), and bot management',             location: 'Global',                         section: 8 },
];

const CATEGORY_META = {
  Infrastructure:   { bg: 'bg-indigo-50',  text: 'text-indigo-700'  },
  Analytics:        { bg: 'bg-green-50',   text: 'text-green-700'   },
  Support:          { bg: 'bg-orange-50',  text: 'text-orange-700'  },
  Payments:         { bg: 'bg-fuchsia-50', text: 'text-purple-700'  },
  Communications:   { bg: 'bg-cyan-50',    text: 'text-cyan-700'    },
  Security:         { bg: 'bg-rose-50',    text: 'text-rose-700'    },
};

const FILTERS = ['All', 'Infrastructure', 'Analytics', 'Support', 'Payments', 'Communications', 'Security'];

const SECTIONS = [
  { num: 3, label: 'Infrastructure',         category: 'Infrastructure' },
  { num: 4, label: 'Analytics & Monitoring', category: 'Analytics' },
  { num: 5, label: 'Customer Support',       category: 'Support' },
  { num: 6, label: 'Payments',               category: 'Payments' },
  { num: 7, label: 'Communications',         category: 'Communications' },
  { num: 8, label: 'Security',               category: 'Security' },
];

const TOC = [
  { num: 1, label: 'About This List' },
  { num: 2, label: 'Change Notification' },
  { num: 3, label: 'Infrastructure' },
  { num: 4, label: 'Analytics & Monitoring' },
  { num: 5, label: 'Customer Support' },
  { num: 6, label: 'Payments' },
  { num: 7, label: 'Communications' },
  { num: 8, label: 'Security' },
];

function CategoryBadge({ category }: { category: Category }) {
  const meta = CATEGORY_META[category] || { bg: 'bg-gray-100', text: 'text-gray-700' };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${meta.bg} ${meta.text}`}>
      {category}
    </span>
  );
}

function SubprocessorTable({ rows }: { rows: Subprocessor[] }) {
  if (rows.length === 0) return (
    <div className="border border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm">No sub-processors match your search.</div>
  );
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-neutral-50 border-b border-gray-200">
            <th className="p-4 text-gray-600 text-xs font-bold uppercase tracking-wider">Vendor</th>
            <th className="p-4 text-gray-600 text-xs font-bold uppercase tracking-wider">Category</th>
            <th className="p-4 text-gray-600 text-xs font-bold uppercase tracking-wider">Purpose</th>
            <th className="p-4 text-gray-600 text-xs font-bold uppercase tracking-wider whitespace-nowrap">Data Location</th>
            <th className="p-4 text-gray-600 text-xs font-bold uppercase tracking-wider whitespace-nowrap">Privacy Policy</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-neutral-50/60 transition-colors">
              <td className="p-4 font-bold text-zinc-800 text-sm align-top whitespace-nowrap">{row.vendor}</td>
              <td className="p-4 align-top"><CategoryBadge category={row.category} /></td>
              <td className="p-4 text-zinc-600 text-sm align-top leading-5">{row.purpose}</td>
              <td className="p-4 text-zinc-600 text-sm align-top whitespace-nowrap">{row.location}</td>
              <td className="p-4 align-top">
                <a href="#" className="text-indigo-600 text-sm hover:underline inline-flex items-center gap-1">
                  Privacy Policy
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SubprocessorsPage() {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [copiedSection, setCopiedSection] = useState<number | null>(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const n = parseInt(entry.target.id.split('-')[1]);
            setActiveSection(n);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );
    TOC.forEach(({ num }) => {
      const el = document.getElementById(`section-${num}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent, num: number) => {
    e.preventDefault();
    const el = document.getElementById(`section-${num}`);
    if (el) {
      const offset = 56;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      setActiveSection(num);
      setIsMobileTocOpen(false);
    }
  };

  const handleCopyLink = (num: number) => {
    navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#section-${num}`);
    setCopiedSection(num);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const CopyBtn = ({ num }: { num: number }) => (
    <button onClick={() => handleCopyLink(num)} className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors">
      {copiedSection === num ? 'Copied!' : 'Copy link'}
    </button>
  );

  const SectionHeader = ({ num, title }: { num: number; title: string }) => (
    <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">{num}</span>
        <h2 className="text-zinc-900 text-xl font-bold">{title}</h2>
      </div>
      <CopyBtn num={num} />
    </div>
  );

  const filtered = useMemo(() => {
    return ALL_SUBPROCESSORS.filter((sp) => {
      const matchesFilter = activeFilter === 'All' || sp.category === activeFilter;
      const q = search.toLowerCase();
      const matchesSearch = !q || sp.vendor.toLowerCase().includes(q) || sp.category.toLowerCase().includes(q) || sp.location.toLowerCase().includes(q) || sp.purpose.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [search, activeFilter]);

  const isFiltering = search.length > 0 || activeFilter !== 'All';

  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-700 antialiased selection:bg-indigo-100 selection:text-indigo-900">

      {/* BANNER */}
      <section className="w-full relative bg-gradient-to-r from-fuchsia-700 to-sky-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-60 blur-[60px] pointer-events-none">
          <div className="absolute size-96 left-[5%] top-[-30%] bg-indigo-600 rounded-full mix-blend-screen opacity-70" />
          <div className="absolute size-96 right-[5%] top-[-10%] bg-cyan-500 rounded-full mix-blend-screen opacity-70" />
          <div className="absolute size-96 left-[40%] bottom-[-40%] bg-violet-500 rounded-full mix-blend-screen opacity-60" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-28 relative z-10">
          <span className="text-white text-xs font-bold uppercase tracking-wider">Legal — Cluster 2</span>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">Subprocessors</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-sm" />
              <span>Last updated: January 1, 2025</span>
            </div>
            <span className="text-white/40 hidden sm:inline">|</span>
            <div>Governing language: <span className="font-bold text-white">American English</span></div>
          </div>
        </div>
      </section>

      {/* LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-28 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-28 space-y-8">
          <div>
            <h3 className="text-gray-600 text-xs font-bold uppercase tracking-wider mb-4 px-3">Contents</h3>
            <nav className="border-l border-gray-200">
              {TOC.map((item) => (
                <a key={item.num} href={`#section-${item.num}`} onClick={(e) => scrollToSection(e, item.num)}
                  className={`block pl-4 py-2 text-sm border-l-2 transition-all -ml-[1px] ${activeSection === item.num ? 'border-indigo-600 text-indigo-600 font-semibold bg-indigo-50/40' : 'border-transparent text-gray-500 hover:text-zinc-900'}`}>
                  {item.num}. {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <button className="w-full h-11 px-4 bg-white border border-gray-200 hover:bg-neutral-50 transition-colors rounded-lg flex items-center gap-3 text-zinc-900 text-sm font-semibold shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-zinc-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download PDF
            </button>
          </div>
        </aside>

        {/* MAIN */}
        <main className="lg:col-span-8 xl:col-span-9 space-y-16">

          {/* MOBILE TOC */}
          <div className="lg:hidden w-full bg-white border-b border-gray-200 sticky top-0 z-50">
            <button onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
              className="w-full h-14 px-6 flex items-center justify-between bg-[#FAFAFA] hover:bg-neutral-100 transition-colors focus:outline-none select-none"
              aria-expanded={isMobileTocOpen} aria-controls="mobile-toc-menu">
              <span className="text-[#14161C] text-base font-bold">On this page</span>
              <span className="text-[#5C6270] text-xl font-bold w-8 h-8 flex items-center justify-center">{isMobileTocOpen ? '−' : '+'}</span>
            </button>
            <div id="mobile-toc-menu" className={`${isMobileTocOpen ? 'block' : 'hidden'} max-h-[50vh] overflow-y-auto border-t border-[#E8E8EC] bg-white shadow-lg`}>
              <nav className="py-2 text-sm font-medium">
                {TOC.map((item) => (
                  <a key={item.num} href={`#section-${item.num}`} onClick={(e) => scrollToSection(e, item.num)}
                    className={`block px-6 py-3.5 transition-colors border-l-4 ${activeSection === item.num ? 'bg-indigo-50/60 text-indigo-600 border-indigo-600 font-bold' : 'border-transparent text-gray-600 hover:bg-gray-50'}`}>
                    {item.num}. {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* AT A GLANCE */}
          <div className="border border-indigo-600/20 bg-violet-100 rounded-xl p-6 space-y-3">
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider block">At a Glance</span>
            {[
              'All sub-processors are vetted against ZWS security and privacy standards.',
              'Customers receive 30 days\' notice before new sub-processors are activated.',
              'Customers may object within 14 days; unresolved objections trigger a no-penalty exit right.',
              'Each sub-processor has a binding data processing agreement with ZWS.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-zinc-700 text-sm leading-6">
                <span className="text-indigo-600 font-bold mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* SECTION 1 */}
          <section id="section-1" className="scroll-mt-20">
            <SectionHeader num={1} title="About This List" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>This page lists the third-party vendors (sub-processors) that Zoiko Tech Inc. engages to process customer personal data in connection with ZWS services. This list is maintained in accordance with Article 28 of the GDPR and is incorporated by reference into the ZWS Data Processing Addendum.</p>
              <p>Sub-processors are categorized by function. The personal data processed by each sub-processor is limited to the minimum necessary to perform its function. All sub-processors have executed data processing agreements with ZWS that impose obligations substantially equivalent to those in the ZWS DPA.</p>
              {/* Amber callout */}
              <div className="border-l-4 border-amber-500 bg-amber-50 rounded-tr-xl rounded-br-xl px-5 py-4">
                <span className="text-zinc-700 text-xs font-bold uppercase tracking-wider block mb-1">Placeholder Data</span>
                <p className="text-zinc-700 text-sm leading-6">The vendor names and details below are illustrative placeholders. Replace with your actual sub-processor roster before publishing.</p>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="section-2" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={2} title="Change Notification" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>ZWS notifies customers of additions to or replacements of sub-processors at least 30 days before the change takes effect, by email to the primary account holder and by updating this page. The date at the top of this page reflects the last modification.</p>
              <p>Customers who wish to subscribe to change notifications should enable the "Sub-processor alerts" toggle in the ZWS customer portal under Settings → Privacy & Compliance.</p>
              <p>To object to a new sub-processor, submit a written notice to <a href="mailto:dpo@zoikoweb.com" className="text-indigo-600 hover:underline font-semibold">dpo@zoikoweb.com</a> within 14 days of the change notification. See Section 5 of the DPA for the full objection and exit process.</p>
            </div>
          </section>

          {/* SEARCH + FILTER BAR */}
          <div className="space-y-4 pt-6 border-t border-gray-100">
            {/* Search */}
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search sub-processors by name, category, or location…"
                className="w-full h-10 pl-10 pr-4 text-sm bg-white border border-gray-200 rounded-xl text-zinc-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all shadow-sm"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
              )}
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)}
                  className={`h-7 px-3.5 rounded-full text-xs font-semibold transition-all border ${activeFilter === f ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-zinc-800'}`}>
                  {f}
                </button>
              ))}
            </div>

            {/* Count */}
            <p className="text-gray-500 text-xs">
              {isFiltering
                ? `Showing ${filtered.length} of ${ALL_SUBPROCESSORS.length} sub-processors`
                : `Showing all ${ALL_SUBPROCESSORS.length} sub-processors`}
            </p>
          </div>

          {/* FILTERED VIEW — show single unified table */}
          {isFiltering ? (
            <div className="space-y-4">
              <SubprocessorTable rows={filtered} />
            </div>
          ) : (
            /* SECTION-BY-SECTION VIEW */
            SECTIONS.map((sec) => {
              const rows = ALL_SUBPROCESSORS.filter((sp) => sp.section === sec.num);
              return (
                <section key={sec.num} id={`section-${sec.num}`} className="scroll-mt-20 pt-6 border-t border-gray-100 space-y-4">
                  <SectionHeader num={sec.num} title={sec.label} />
                  {sec.num === 6 && (
                    <p className="text-zinc-600 text-base leading-7">ZWS does not store payment card data. Payment processing is handled exclusively by PCI-DSS Level 1 certified processors. Customer financial data is passed directly to the payment processor and is not transmitted to ZWS servers.</p>
                  )}
                  <SubprocessorTable rows={rows} />
                </section>
              );
            })
          )}

          {/* CONTACT CARD */}
          <section className="pt-6 border-t border-gray-100">
            <h2 className="text-zinc-900 text-xl font-bold mb-6">Contact Channels</h2>
            <div className="border border-gray-200 bg-white rounded-2xl shadow-sm p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-neutral-50 rounded-lg p-4">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Data Protection Officer</span>
                <a href="mailto:dpo@zoikoweb.com" className="text-indigo-600 font-semibold text-sm hover:underline">dpo@zoikoweb.com</a>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Sub-processor Objections</span>
                <a href="mailto:dpo@zoikoweb.com" className="text-indigo-600 font-semibold text-sm hover:underline">dpo@zoikoweb.com</a>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">DPA</span>
                <a href="#" className="text-indigo-600 font-semibold text-sm hover:underline">View DPA</a>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Legal Portal</span>
                <a href="#" className="text-indigo-600 font-semibold text-sm hover:underline">Submit inquiry</a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
