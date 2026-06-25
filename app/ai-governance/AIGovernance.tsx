import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Settings, ShieldAlert, Eye, Cpu, ArrowUpCircle } from 'lucide-react';

export default function AIGovernance() {
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
            <div className="text-white/90 text-xs font-bold uppercase tracking-wider mb-4">AI</div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Inter'] leading-tight mb-6">
              Governing AI with<br/>accountability
            </h1>
            <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7">
              We manage AI through a structured governance framework, with<br className="hidden md:block"/>
              clear ownership and risk controls across the full model lifecycle.
            </p>
          </div>

          <div className="mt-12 md:mt-0 relative flex-shrink-0 w-[502px] h-96 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl hidden md:block">
            <div className="absolute size-80 left-[83px] top-[28px] opacity-10 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[131px] top-[75px] opacity-5 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[134px] top-[78px] bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-[40px]"></div>
            
            {/* Pure CSS CPU Icon */}
            <div className="absolute size-40 left-[174px] top-[118px] outline outline-[10.46px] outline-offset-[-5.23px] outline-white rounded-2xl"></div>
            <div className="absolute size-20 left-[209px] top-[153px] outline outline-[10.46px] outline-offset-[-5.23px] outline-white rounded-xl"></div>
            <div className="absolute size-9 left-[234px] top-[178px] outline outline-[10.46px] outline-offset-[-5.23px] outline-white rounded-md"></div>
          </div>
          {/* Mobile fallback for hero icon */}
          <div className="mt-12 md:hidden relative flex-shrink-0 w-64 h-64 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl mx-auto flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-white"></div>
            <div className="absolute size-48 bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-3xl flex items-center justify-center">
              <div className="relative size-24">
                <div className="absolute inset-0 outline outline-[6px] outline-offset-[-3px] outline-white rounded-2xl"></div>
                <div className="absolute size-12 left-6 top-6 outline outline-[6px] outline-offset-[-3px] outline-white rounded-xl"></div>
                <div className="absolute size-4 left-10 top-10 outline outline-[6px] outline-offset-[-3px] outline-white rounded-md"></div>
              </div>
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
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl mb-6 relative">
                <div className="absolute size-5 left-[10px] top-[10px]">
                  <div className="absolute size-2.5 left-[5px] top-[5px] outline outline-[1.67px] outline-offset-[-0.83px] outline-white rounded-sm"></div>
                  <div className="absolute size-5 left-[0.83px] top-[0.83px] outline outline-[1.67px] outline-offset-[-0.83px] outline-white rounded-[4px]"></div>
                </div>
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Oversight structure</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Defined roles and review gates govern how AI<br className="hidden md:block"/>systems are approved and operated.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl mb-6 relative">
                <div className="absolute size-5 left-[10px] top-[10px]">
                  <div className="absolute size-3.5 left-[3.33px] top-[2.50px] outline outline-[1.67px] outline-offset-[-0.83px] outline-white rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Risk management</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                We assess AI risks for impact, fairness, and<br className="hidden md:block"/>security before and after deployment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl mb-6 relative">
                <div className="absolute size-5 left-[10px] top-[10px]">
                  <div className="absolute w-4 h-3 left-[1.67px] top-[4.17px] outline outline-[1.67px] outline-offset-[-0.83px] outline-white rounded-sm"></div>
                  <div className="absolute size-[5px] left-[7.50px] top-[7.50px] outline outline-[1.67px] outline-offset-[-0.83px] outline-white rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Monitoring</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Deployed models are monitored for performance,<br className="hidden md:block"/>drift, and unexpected behavior.
              </p>
            </div>
          </div>

          {/* Lifecycle Controls */}
          <div className="mb-16">
            <h2 className="text-slate-900 text-2xl font-extrabold font-['Inter'] mb-8 flex items-center">
              <span className="text-indigo-600 mr-2">/</span> Lifecycle controls
            </h2>
            
            <div className="bg-white rounded-xl border border-slate-200 p-10 flex items-center justify-between mb-8 overflow-x-auto">
              <div className="flex items-center min-w-[800px] w-full justify-between relative">
                {/* Connecting Line */}
                <div className="absolute left-10 right-10 h-0.5 bg-slate-200 top-1/2 -translate-y-1/2 z-0"></div>
                
                {['Design', 'Data', 'Train', 'Evaluate', 'Deploy', 'Monitor'].map((step, index) => (
                  <div key={index} className="bg-indigo-50 border-2 border-white shadow-sm rounded-full py-3 px-8 relative z-10 text-indigo-700 font-semibold text-sm">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-slate-600 text-sm font-normal font-['Inter'] max-w-2xl">
              Our approach aligns with recognized frameworks such as ISO/IEC 42001 and the NIST AI Risk Management Framework.
            </p>
          </div>

          {/* Pagination */}
          <div className="border-t border-slate-200 pt-8 flex justify-between items-center">
            <Link href="/cloud-security" className="group">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Previous</div>
              <div className="text-slate-900 text-sm font-bold flex items-center group-hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Cloud Security
              </div>
            </Link>
            <Link href="/responsible-ai" className="group text-right">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Next</div>
              <div className="text-slate-900 text-sm font-bold flex items-center justify-end group-hover:text-indigo-600 transition-colors">
                Responsible AI <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
