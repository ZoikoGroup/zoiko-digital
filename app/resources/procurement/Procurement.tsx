import React from 'react';

export default function Procurement() {
  const docs = [
    {
      title: 'Data Processing Addendum',
      desc: 'Data protection & SCCs',
      iconUrl: '/images/pro/dpa.svg',
    },
    {
      title: 'Security & Trust Center',
      desc: 'SOC 2, ISO, pen tests',
      iconUrl: '/images/pro/trust-center.svg',
    },
    {
      title: 'Service Level Agreement',
      desc: 'Uptime & support terms',
      iconUrl: '/images/pro/sla.svg',
    },
    {
      title: 'Subprocessors',
      desc: 'Third-party processors',
      iconUrl: '/images/pro/subprocessors.svg',
    },
    {
      title: 'Master Terms of Service',
      desc: 'Contractual framework',
      iconUrl: '/images/pro/master-terms.svg',
    },
    {
      title: 'Request W-9 / vendor forms',
      desc: 'Tax & onboarding docs',
      iconUrl: '/images/pro/w9-vendor.svg',
    }
  ];

  const steps = [
    { num: 1, title: 'Evaluate', desc: 'Start a trial or request a demo and technical scoping.' },
    { num: 2, title: 'Review', desc: 'Access security docs and complete diligence via the Trust Center.' },
    { num: 3, title: 'Contract', desc: 'Agree on terms, DPA, and an order form with your account team.' },
    { num: 4, title: 'Onboard', desc: 'Provision access and kick off with your dedicated contact.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 font-['Inter']">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-fuchsia-700 to-sky-900 relative overflow-hidden pt-24 pb-32 px-4 lg:px-0">
        <div className="absolute top-[-100px] left-[-200px] w-[1000px] h-[500px] bg-radial-[at_20%_10%] from-indigo-600/60 to-indigo-600/0 opacity-50 blur-md pointer-events-none"></div>
        <div className="max-w-[1072px] mx-auto relative z-10">
          <p className="text-white/80 text-lg font-bold uppercase tracking-[2.51px] mb-6">For buyers</p>
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6">
            Procurement made simple
          </h1>
          <p className="text-white/80 text-lg font-normal leading-7 max-w-2xl">
            Everything your procurement, security, and legal teams need to evaluate<br className="hidden md:block" />
            and onboard Zoiko Web Services quickly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1072px] mx-auto pb-16 px-4 lg:px-0 relative z-20 -mt-12">
        
        {/* Floating Info Banner */}
        <div className="w-full bg-gray-200 rounded-2xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden mb-16 flex flex-col md:flex-row gap-[1px]">
          <div className="flex-1 bg-white px-5 py-[22px]">
            <div className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-2">Legal entity</div>
            <div className="text-zinc-900 text-base font-bold">Zoiko Tech Inc.</div>
          </div>
          <div className="flex-1 bg-white px-5 py-[22px]">
            <div className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-2">Standard terms</div>
            <div className="text-zinc-900 text-base font-bold">Net 30</div>
          </div>
          <div className="flex-1 bg-white px-5 py-[22px]">
            <div className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-2">Methods</div>
            <div className="text-zinc-900 text-base font-bold">ACH, wire, card</div>
          </div>
          <div className="flex-1 bg-white px-5 py-[22px]">
            <div className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-2">Security</div>
            <div className="text-zinc-900 text-base font-bold">SOC 2 · ISO 27001</div>
          </div>
        </div>
        
        {/* Documentation & assurance */}
        <section className="mb-20">
          <h2 className="text-zinc-900 text-2xl font-extrabold mb-4">Documentation & assurance</h2>
          <p className="text-gray-600 text-base leading-7 mb-10 max-w-2xl">
            Self-serve the documents most reviews require. Audit reports are available under NDA.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {docs.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-2xl h-20 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] flex items-center px-5 cursor-pointer hover:border-indigo-200 transition-colors group">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <img src={doc.iconUrl} alt={doc.title} className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-zinc-900 text-base font-bold group-hover:text-indigo-600 transition-colors">{doc.title}</h3>
                  <p className="text-gray-600 text-sm">{doc.desc}</p>
                </div>
                <div className="text-gray-300 group-hover:text-indigo-500 transition-colors">
                  <img src="/images/pro/chevron-right.svg" alt="Go" className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 py-3 px-4">
            <p className="text-gray-600 text-xs text-center">
              Placeholder links point to your existing legal/trust pages. Replace the W-9 / vendor-form link with a real document or intake form.
            </p>
          </div>
        </section>

        {/* How buying works */}
        <section className="mb-20">
          <h2 className="text-zinc-900 text-2xl font-extrabold mb-4">How buying works</h2>
          <p className="text-gray-600 text-base leading-7 mb-10">
            A straightforward path from evaluation to signed contract.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] h-44">
                <div className="w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center text-white text-base font-extrabold mb-6">
                  {step.num}
                </div>
                <h3 className="text-zinc-900 text-base font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-6">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Payment & terms */}
        <section className="mb-20">
          <h2 className="text-zinc-900 text-2xl font-extrabold mb-4">Payment & terms</h2>
          <p className="text-gray-600 text-base leading-7 mb-10">
            Standard commercial terms; custom terms available for enterprise agreements.
          </p>
          
          <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] overflow-hidden">
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <span className="text-gray-600 text-base font-semibold">Payment terms</span>
              <span className="text-zinc-900 text-base font-semibold text-right">Net 30 from invoice date</span>
            </div>
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <span className="text-gray-600 text-base font-semibold">Accepted methods</span>
              <span className="text-zinc-900 text-base font-semibold text-right">ACH, wire transfer, credit card</span>
            </div>
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <span className="text-gray-600 text-base font-semibold">Billing frequency</span>
              <span className="text-zinc-900 text-base font-semibold text-right">Monthly or annual</span>
            </div>
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <span className="text-gray-600 text-base font-semibold">Currencies</span>
              <span className="text-zinc-900 text-base font-semibold text-right">USD, EUR, GBP</span>
            </div>
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <span className="text-gray-600 text-base font-semibold">Purchase orders</span>
              <span className="text-zinc-900 text-base font-semibold text-right">Supported for annual contracts</span>
            </div>
            <div className="flex justify-between items-center px-5 py-4">
              <span className="text-gray-600 text-base font-semibold">Tax documentation</span>
              <span className="text-zinc-900 text-base font-semibold text-right">W-9 / W-8BEN-E on request</span>
            </div>
          </div>
        </section>

        {/* Talk to our procurement team CTA */}
        <div className="w-full bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] p-9 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-zinc-900 text-xl font-extrabold mb-2">Talk to our procurement team</h2>
            <p className="text-gray-600 text-base leading-7">Custom terms, security questionnaires, and contract support.</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-base font-bold py-3 px-6 rounded-xl transition-colors whitespace-nowrap shadow-sm">
            Contact procurement →
          </button>
        </div>
        
      </main>
    </div>
  );
}
