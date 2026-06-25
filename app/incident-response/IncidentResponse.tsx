import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TriangleAlert, Users, Clock, ArrowUpCircle } from 'lucide-react';

export default function IncidentResponse() {
  const lifecycleSteps = ['Prepare', 'Detect', 'Contain', 'Eradicate', 'Recover', 'Learn'];

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
            <div className="text-white/90 text-xs font-bold uppercase tracking-wider mb-4">OPERATIONS</div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Inter'] leading-tight mb-6">
              Ready when it matters
            </h1>
            <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7">
              Our 24/7 incident-response program is built to detect, contain, and<br className="hidden md:block"/>
              recover quickly — and to keep you informed throughout.
            </p>
          </div>

          {/* Hero icon — layered glassmorphism */}
          <div className="mt-12 md:mt-0 relative flex-shrink-0 w-[502px] h-96 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl hidden md:block">
            <div className="absolute size-80 left-[83px] top-[28px] opacity-10 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[131px] top-[75px] opacity-5 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[134px] top-[78px] bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-[40px]"></div>
            <div className="absolute flex items-center justify-center size-60 left-[134px] top-[78px]">
              <TriangleAlert className="w-[123px] h-[137px] text-white opacity-80" strokeWidth={1.5} />
            </div>
          </div>
          {/* Mobile fallback for hero icon */}
          <div className="mt-12 md:hidden relative flex-shrink-0 w-64 h-64 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl mx-auto flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-white"></div>
            <div className="absolute size-48 bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-3xl flex items-center justify-center">
              <TriangleAlert className="w-20 h-20 text-white opacity-80" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full flex justify-center py-16 px-4">
        <div className="max-w-[1160px] w-full">
          
          {/* Our response lifecycle Section */}
          <div className="mb-12 relative">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-zinc-900 text-2xl font-extrabold font-['Inter'] flex items-center">
                <span className="text-indigo-600 mr-2">/</span> Our response lifecycle
              </h2>
              <button className="hidden md:flex w-10 h-10 bg-slate-800 text-white rounded-full items-center justify-center hover:bg-slate-700 transition-colors mr-[-4rem]">
                <ArrowUpCircle className="w-6 h-6" />
              </button>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 flex items-center justify-between overflow-x-auto shadow-sm">
              <div className="flex items-center min-w-[700px] w-full justify-between relative px-2">
                {/* Connecting Line */}
                <div className="absolute left-10 right-10 h-0.5 bg-gray-200 top-1/2 -translate-y-1/2 z-0"></div>
                
                {lifecycleSteps.map((step, index) => (
                  <div key={index} className="bg-indigo-50 border border-indigo-100 shadow-sm rounded-full py-3 px-8 relative z-10 text-indigo-700 font-bold text-sm">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12 relative">
                <TriangleAlert className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Always-on detection</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Centralized monitoring and alerting flag issues<br className="hidden md:block"/>fast, day or night.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12 relative">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Defined roles</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                A trained response team with clear runbooks and<br className="hidden md:block"/>escalation paths.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12 relative">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Customer notification</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                We notify affected customers without undue<br className="hidden md:block"/>delay, consistent with our commitments.
              </p>
            </div>
          </div>

          {/* Statement Section */}
          <div className="mb-16">
            <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-7">
              Track real-time service health on our status page, and report urgent issues via the <Link href="/security-contact" className="text-indigo-600 hover:text-indigo-700 transition-colors">Security Contact</Link>.
            </p>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 pt-8 pb-4 flex justify-between items-center">
            <Link href="/business-continuity" className="group">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1 transition-colors group-hover:text-indigo-600">Previous</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center group-hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Business Continuity
              </div>
            </Link>
            <Link href="/vendor-risk" className="group text-right">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1 transition-colors group-hover:text-indigo-600">Next</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center justify-end group-hover:text-indigo-600 transition-colors">
                Vendor Risk <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
