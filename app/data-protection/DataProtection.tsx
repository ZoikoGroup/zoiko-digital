import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, Database, RefreshCw, Check, DatabaseBackup, ArrowUpCircle } from 'lucide-react';

export default function DataProtection() {
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
            <div className="text-white/90 text-xs font-bold uppercase tracking-wider mb-4">PRIVACY</div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Inter'] leading-tight mb-6">
              Your data, protected by<br/>design
            </h1>
            <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7">
              We apply privacy-by-design principles so protection is built in, not<br className="hidden md:block"/>
              bolted on. You stay in control of your data throughout its lifecycle.
            </p>
          </div>

          <div className="mt-12 md:mt-0 relative flex-shrink-0">
            <div className="w-64 h-64 bg-white/5 rounded-full absolute -top-8 -left-8 blur-2xl"></div>
            <div className="w-48 h-48 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 flex items-center justify-center relative z-10 shadow-2xl">
              <DatabaseBackup className="w-24 h-24 text-white opacity-80" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full flex justify-center py-16 px-4">
        <div className="max-w-[1160px] w-full">
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative">
            <button className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800 text-white rounded-full items-center justify-center hover:bg-slate-700 transition-colors">
              <ArrowUpCircle className="w-6 h-6" />
            </button>
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-slate-900 text-base font-bold font-['Inter'] mb-3">Privacy by design</h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-6">
                Data minimization and purpose limitation are built into how we design features.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-slate-900 text-base font-bold font-['Inter'] mb-3">Data residency</h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-6">
                Choose supported regions to help meet data-residency and sovereignty needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <RefreshCw className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-slate-900 text-base font-bold font-['Inter'] mb-3">Lifecycle controls</h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-6">
                Clear retention, export, and deletion controls across the data lifecycle.
              </p>
            </div>
          </div>

          {/* Your rights and our commitments Section */}
          <div className="mb-16">
            <h2 className="text-slate-900 text-2xl font-extrabold font-['Inter'] mb-8 flex items-center">
              <span className="text-indigo-600 mr-2">/</span> Your rights and our commitments
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-indigo-600" />
                </div>
                <p className="text-slate-700 text-base font-normal font-['Inter']">
                  We act as processor for customer content under our Data Processing Addendum.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-indigo-600" />
                </div>
                <p className="text-slate-700 text-base font-normal font-['Inter']">
                  We support access, correction, deletion, and portability requests.
                </p>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-indigo-600" />
                </div>
                <p className="text-slate-700 text-base font-normal font-['Inter']">
                  Encryption, access control, and monitoring safeguard personal data.
                </p>
              </div>
            </div>

            <p className="text-slate-700 text-base font-normal font-['Inter']">
              For full details, see our <Link href="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>, <Link href="/dpa" className="text-indigo-600 hover:underline">DPA</Link>, and <Link href="/subprocessors" className="text-indigo-600 hover:underline">Subprocessors</Link>.
            </p>
          </div>

          {/* Pagination */}
          <div className="border-t border-slate-200 pt-8 flex justify-between items-center">
            <Link href="/trust-security" className="group">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Previous</div>
              <div className="text-slate-900 text-sm font-bold flex items-center group-hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Security
              </div>
            </Link>
            <Link href="/cloud-security" className="group text-right">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Next</div>
              <div className="text-slate-900 text-sm font-bold flex items-center justify-end group-hover:text-indigo-600 transition-colors">
                Cloud Security <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
