"use client"
import React, { useState } from 'react';

export default function RegulatoryNotices() {
  const [activeSection, setActiveSection] = useState('regulator-contacts');

  const navItems = [
    { id: 'corporate-entity', label: '1 · Corporate entity' },
    { id: 'registration-details', label: '2 · Registration details' },
    { id: 'data-protection', label: '3 · Data protection' },
    { id: 'registrations-licenses', label: '4 · Registrations & licenses' },
    { id: 'consumer-notices', label: '5 · Consumer notices' },
    { id: 'complaints', label: '6 · Complaints' },
    { id: 'regulator-contacts', label: '7 · Regulator contacts' },
    { id: 'updates', label: '8 · Updates' },
    { id: 'contact', label: '9 · Contact' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-700 antialiased ">
     
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-fuchsia-700 to-sky-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-60 blur-md pointer-events-none">
          <div className="absolute w-96 h-96 -left-20 -top-20 bg-indigo-600/30 rounded-full mix-blend-screen"></div>
          <div className="absolute w-96 h-96 -right-20 -top-10 bg-cyan-500/30 rounded-full mix-blend-screen"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-white block mb-3">Regulatory & Ethical</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">Regulatory Notices</h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              <span>Updated June 1, 2026</span>
            </div>
            <div>Entity: <span className="text-white font-bold">Zoiko Tech Inc.</span></div>
            <div>Governing language: <span className="text-white font-bold">American English</span></div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* Sidebar Section */}
          <aside className="lg:col-span-1 lg:sticky lg:top-28 space-y-6">
            <div>
              <h2 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-4 px-4">On this page</h2>
              <nav className="border-l border-gray-200 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`block py-2 px-4 text-sm transition border-l-2 -ml-px ${
                      activeSection === item.id
                        ? 'text-indigo-600 font-semibold border-indigo-600 bg-indigo-50/40'
                        : 'text-gray-600 border-transparent hover:text-indigo-600 hover:border-indigo-600'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-semibold text-zinc-900 hover:bg-gray-50 transition">
              <svg className="w-4 h-4 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download PDF
            </button>
          </aside>

          {/* Legal Document Content */}
          <div className="lg:col-span-3 space-y-12 max-w-3xl">
            <p className="text-base leading-relaxed text-zinc-600">
              This page contains official corporate disclosures and regulatory notices for Zoiko Web Services, operated by Zoiko Tech Inc., as required by governing bodies in the jurisdictions where we operate.
            </p>

            {/* 1. Corporate Entity */}
            <article id="corporate-entity" className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-violet-100 text-indigo-600 text-xs font-extrabold flex items-center justify-center rounded-lg">1</span>
                  <h2 className="text-xl font-bold text-zinc-900">Corporate entity</h2>
                </div>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition">Copy link</button>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Zoiko Web Services is the trading name of Zoiko Tech Inc., the legal entity responsible for providing the Services. References to ZWS, we, us, and our throughout our legal documents refer to Zoiko Tech Inc. and its affiliates.
              </p>
            </article>

            {/* 2. Registration Details */}
            <article id="registration-details" className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-violet-100 text-indigo-600 text-xs font-extrabold flex items-center justify-center rounded-lg">2</span>
                  <h2 className="text-xl font-bold text-zinc-900">Registration details</h2>
                </div>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition">Copy link</button>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">
                The following corporate details are provided for transparency. Replace the placeholder values with your registered information before publishing.
              </p>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-sm text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold text-zinc-900 w-1/3">Legal name</td><td className="py-3 px-4 text-zinc-600">Zoiko Tech Inc.</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold text-zinc-900">Entity type</td><td className="py-3 px-4 text-zinc-600">Corporation</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold text-zinc-900">Registration number</td><td className="py-3 px-4 text-zinc-400 italic">[Company registration number]</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold text-zinc-900">Tax / VAT identifier</td><td className="py-3 px-4 text-zinc-400 italic">[Tax or VAT number]</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold text-zinc-900">Registered office</td><td className="py-3 px-4 text-zinc-400 italic">[Registered office address]</td></tr>
                    <tr><td className="py-4 px-4 font-semibold text-zinc-900">General contact</td><td className="py-4 px-4 text-indigo-600 font-semibold"><a href="mailto:legal@zoikoweb.com" className="hover:underline">legal@zoikoweb.com</a></td></tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* 3. Data Protection */}
            <article id="data-protection" className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-violet-100 text-indigo-600 text-xs font-extrabold flex items-center justify-center rounded-lg">3</span>
                  <h2 className="text-xl font-bold text-zinc-900">Data protection representation</h2>
                </div>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition">Copy link</button>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                We maintain a Data Protection Officer and, where applicable, representatives for data protection matters in the EEA and the UK. We cooperate with competent supervisory authorities. For details of how we handle personal data, see our <a href="#" className="text-indigo-600 font-semibold hover:underline">Privacy Policy</a> and <a href="#" className="text-indigo-600 font-semibold hover:underline">Data Processing Addendum</a>.
              </p>
            </article>

            {/* 4. Registrations and Licenses */}
            <article id="registrations-licenses" className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-violet-100 text-indigo-600 text-xs font-extrabold flex items-center justify-center rounded-lg">4</span>
                  <h2 className="text-xl font-bold text-zinc-900">Registrations and licenses</h2>
                </div>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition">Copy link</button>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Where our activities require registration or licensing with data protection, financial, or telecommunications authorities, we maintain those registrations and disclose them as required. Current registration references are available on request through the legal portal.
              </p>
            </article>

            {/* 5. Consumer Notices */}
            <article id="consumer-notices" className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-violet-100 text-indigo-600 text-xs font-extrabold flex items-center justify-center rounded-lg">5</span>
                  <h2 className="text-xl font-bold text-zinc-900">Consumer and customer notices</h2>
                </div>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition">Copy link</button>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Our Services are provided primarily to businesses. Where consumer-protection laws apply to any interaction, we honor the rights they provide, including any applicable rights to information, cancellation, or redress.
              </p>
            </article>

            {/* 6. Complaints */}
            <article id="complaints" className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-violet-100 text-indigo-600 text-xs font-extrabold flex items-center justify-center rounded-lg">6</span>
                  <h2 className="text-xl font-bold text-zinc-900">Complaints and dispute resolution</h2>
                </div>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition">Copy link</button>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                We aim to resolve concerns directly and quickly. Please contact us first at <a href="mailto:legal@zoikoweb.com" className="text-indigo-600 font-semibold hover:underline">legal@zoikoweb.com</a> so we can help. If a matter remains unresolved, you may be entitled to escalate it to the relevant regulator or dispute-resolution body in your jurisdiction.
              </p>
            </article>

            {/* 7. Regulator Contacts */}
            <article id="regulator-contacts" className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-violet-100 text-indigo-600 text-xs font-extrabold flex items-center justify-center rounded-lg">7</span>
                  <h2 className="text-xl font-bold text-zinc-900">Regulator contacts</h2>
                </div>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition">Copy link</button>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                You have the right to lodge a complaint with the supervisory or regulatory authority in your country. Contact details for the relevant authorities are published by those authorities; we will assist you in identifying the appropriate body where we can.
              </p>
            </article>

            {/* 8. Updates */}
            <article id="updates" className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-violet-100 text-indigo-600 text-xs font-extrabold flex items-center justify-center rounded-lg">8</span>
                  <h2 className="text-xl font-bold text-zinc-900">Updates</h2>
                </div>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition">Copy link</button>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                We update this page as our corporate details or regulatory obligations change. The effective date above reflects the latest version.
              </p>
            </article>

            {/* 9. Contact Us Box Grid */}
            <article id="contact" className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-violet-100 text-indigo-600 text-xs font-extrabold flex items-center justify-center rounded-lg">9</span>
                  <h2 className="text-xl font-bold text-zinc-900">Contact us</h2>
                </div>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition">Copy link</button>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <span className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Legal Team</span>
                  <a href="mailto:legal@zoikoweb.com" className="text-indigo-600 font-semibold text-base hover:underline">legal@zoikoweb.com</a>
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Data Protection Officer</span>
                  <a href="mailto:dpo@zoikoweb.com" className="text-indigo-600 font-semibold text-base hover:underline">dpo@zoikoweb.com</a>
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Legal Inquiries</span>
                  <a href="#" className="text-indigo-600 font-semibold text-base hover:underline">Open the portal</a>
                </div>
                <div className="md:col-span-3 pt-4 border-t border-gray-100">
                  <span className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Entity</span>
                  <p className="text-zinc-700 text-base">Zoiko Tech Inc.</p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </main>

 

    </div>
  );
}