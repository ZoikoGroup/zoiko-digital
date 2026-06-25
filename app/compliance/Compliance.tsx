import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckSquare, Check, ArrowUpCircle } from 'lucide-react';

export default function Compliance() {
  const badges = [
    'SOC 2 Type II',
    'ISO/IEC 27001',
    'ISO/IEC 42001',
    'GDPR',
    'HIPAA',
    'PCI DSS'
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-slate-800">
      
      {/* Hero Section */}
      <section className="w-full bg-[#2a2d34] flex justify-center py-20 px-4 relative overflow-hidden">
        <div className="max-w-[1160px] w-full relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl text-left">
            <Link href="/trust-security" className="inline-flex items-center text-white/70 hover:text-white mb-6 text-sm font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Trust Center
            </Link>
            <div className="text-white/90 text-xs font-bold uppercase tracking-wider mb-4">ASSURANCE</div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Inter'] leading-tight mb-6">
              Independently validated
            </h1>
            <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7">
              Our controls are tested by independent auditors and mapped to<br className="hidden md:block"/>
              recognized standards, so you can verify rather than just trust.
            </p>
          </div>

          {/* Hero icon — layered glassmorphism */}
          <div className="mt-12 md:mt-0 relative flex-shrink-0 w-[502px] h-96 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl hidden md:block">
            <div className="absolute size-80 left-[83px] top-[28px] opacity-10 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[131px] top-[75px] opacity-5 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[134px] top-[78px] bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-[40px]"></div>
            <div className="absolute flex items-center justify-center size-60 left-[134px] top-[78px]">
              <CheckSquare className="w-[123px] h-[137px] text-white opacity-80" strokeWidth={1.5} />
            </div>
          </div>
          {/* Mobile fallback for hero icon */}
          <div className="mt-12 md:hidden relative flex-shrink-0 w-64 h-64 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl mx-auto flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-white"></div>
            <div className="absolute size-48 bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-3xl flex items-center justify-center">
              <CheckSquare className="w-20 h-20 text-white opacity-80" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full flex justify-center py-16 px-4">
        <div className="max-w-[1160px] w-full">
          
          {/* Badges Row */}
          <div className="flex flex-wrap gap-4 mb-16 relative">
            <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800 text-white rounded-full items-center justify-center hover:bg-slate-700 transition-colors z-10 translate-x-16">
              <ArrowUpCircle className="w-6 h-6" />
            </button>
            
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-sm font-bold text-slate-800">{badge}</span>
              </div>
            ))}
          </div>

          {/* Requesting Reports Section */}
          <div className="mb-16">
            <h2 className="text-zinc-900 text-2xl font-extrabold font-['Inter'] mb-6 flex items-center">
              <span className="text-indigo-600 mr-2">/</span> Requesting reports
            </h2>
            <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-7 mb-6 max-w-3xl">
              Enterprise customers and prospects can request our SOC 2 report, ISO certificates,<br className="hidden md:block"/>
              penetration-test summaries, and completed security questionnaires under NDA.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Audit reports and certificates available on request.',
                'Pre-filled CAIQ and SIG questionnaires to speed up reviews.',
                'Mapping of controls to your framework on request.'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-indigo-600" strokeWidth={3} />
                  </div>
                  <span className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-7">
              <Link href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors">Browse the legal repository</Link> for our policies and agreements.
            </p>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 pt-8 pb-4 flex justify-between items-center">
            <Link href="/responsible-ai" className="group">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1 transition-colors group-hover:text-indigo-600">Previous</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center group-hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Responsible AI
              </div>
            </Link>
            <Link href="/business-continuity" className="group text-right">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1 transition-colors group-hover:text-indigo-600">Next</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center justify-end group-hover:text-indigo-600 transition-colors">
                Business Continuity <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
