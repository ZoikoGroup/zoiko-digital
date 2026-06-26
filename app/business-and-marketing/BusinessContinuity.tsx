import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, History, RefreshCcw, HardDrive, Clock, ArrowUpCircle } from 'lucide-react';

export default function BusinessContinuity() {
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
            <div className="text-white/90 text-xs font-bold uppercase tracking-wider mb-4">RESILIENCE</div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Inter'] leading-tight mb-6">
              Resilience<br/>you can rely on
            </h1>
            <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7">
              We design for failure so the service keeps running. Our continuity<br className="hidden md:block"/>
              and disaster-recovery plans are documented and regularly tested.
            </p>
          </div>

          {/* Hero icon — layered glassmorphism */}
          <div className="mt-12 md:mt-0 relative flex-shrink-0 w-[502px] h-96 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl hidden md:block">
            <div className="absolute size-80 left-[83px] top-[28px] opacity-10 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[131px] top-[75px] opacity-5 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[134px] top-[78px] bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-[40px]"></div>
            <div className="absolute flex items-center justify-center size-60 left-[134px] top-[78px]">
              <img src="/images/bussiness/hero-icon.svg" className="w-[137px] h-[137px] object-contain opacity-80" alt="Resilience hero icon" />
            </div>
          </div>
          {/* Mobile fallback for hero icon */}
          <div className="mt-12 md:hidden relative flex-shrink-0 w-64 h-64 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl mx-auto flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-white"></div>
            <div className="absolute size-48 bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-3xl flex items-center justify-center">
              <img src="/images/bussiness/hero-icon.svg" className="w-20 h-20 object-contain opacity-80" alt="Resilience hero icon" />
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
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12 relative">
                <img src="/images/bussiness/redundancy.svg" alt="Redundancy" className="w-5 h-5" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Redundancy</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Multi-zone architecture with automated failover<br className="hidden md:block"/>and no single point of failure.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12 relative">
                <img src="/images/bussiness/backups.svg" alt="Backups" className="w-5 h-5" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Backups</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Encrypted, regularly tested backups with point-<br className="hidden md:block"/>in-time recovery.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12 relative">
                <img src="/images/bussiness/tested-plans.svg" alt="Tested plans" className="w-5 h-5" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Tested plans</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Continuity and recovery plans are exercised and<br className="hidden md:block"/>improved on a regular cadence.
              </p>
            </div>
          </div>

          {/* Recovery Objectives Section */}
          <div className="mb-16">
            <h2 className="text-zinc-900 text-2xl font-extrabold font-['Inter'] mb-8 flex items-center">
              <span className="text-indigo-600 mr-2">/</span> Recovery objectives
            </h2>
            
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* RTO Block */}
                <div className="bg-[#EEEDFB] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                  <div className="text-[#5D46E1] text-[40px] font-bold font-['Inter'] tracking-tight mb-3">
                    RTO &lt; 4h
                  </div>
                  <div className="text-[#4B5563] text-base font-normal font-['Inter']">
                    Time to restore service
                  </div>
                </div>

                {/* RPO Block */}
                <div className="bg-[#ECFDF3] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                  <div className="text-[#027A48] text-[40px] font-bold font-['Inter'] tracking-tight mb-3">
                    RPO &lt; 1h
                  </div>
                  <div className="text-[#4B5563] text-base font-normal font-['Inter']">
                    Maximum data loss window
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 pt-8 pb-4 flex justify-between items-center">
            <Link href="/compliance" className="group">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1 transition-colors group-hover:text-indigo-600">Previous</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center group-hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Compliance
              </div>
            </Link>
            <Link href="/incident-response" className="group text-right">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1 transition-colors group-hover:text-indigo-600">Next</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center justify-end group-hover:text-indigo-600 transition-colors">
                Incident Response <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
