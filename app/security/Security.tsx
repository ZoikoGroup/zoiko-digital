import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, ArrowUpCircle } from 'lucide-react';

export default function Security() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-slate-800">
      
      {/* Hero Section */}
      <section className="w-full bg-[#353840] flex justify-center py-20 px-4 relative overflow-hidden">
        {/* Radial Background */}
        <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[150%] opacity-90 bg-[radial-gradient(ellipse_at_16%_10%,_var(--tw-gradient-stops))] from-indigo-600/80 to-indigo-600/0 to-60% blur-sm z-0"></div>

        <div className="max-w-[1160px] w-full relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl text-left">
            <Link href="/trust-center" className="inline-flex items-center text-white/70 hover:text-white mb-6 text-sm font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Trust Center
            </Link>
            <div className="text-white/90 text-xs font-bold uppercase tracking-wider mb-4">FOUNDATIONAL</div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Inter'] leading-tight mb-6">
              Defense in depth
            </h1>
            <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7">
              Security is foundational to everything we build. We layer controls<br className="hidden md:block"/>
              across people, process, and technology so that no single failure<br className="hidden md:block"/>
              exposes your data.
            </p>
          </div>

          {/* Hero icon — layered glassmorphism */}
          <div className="mt-12 md:mt-0 relative flex-shrink-0 w-[502px] h-96 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl hidden md:block">
            <div className="absolute size-80 left-[83px] top-[28px] opacity-10 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[131px] top-[75px] opacity-5 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[134px] top-[78px] bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-[40px]"></div>
            <div className="absolute flex items-center justify-center size-60 left-[134px] top-[78px]">
              <img src="/images/securityone/hero-icon.svg" className="w-[123px] h-[137px] object-contain opacity-80" alt="Security hero icon" />
            </div>
          </div>
          {/* Mobile fallback for hero icon */}
          <div className="mt-12 md:hidden relative flex-shrink-0 w-64 h-64 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl mx-auto flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-white"></div>
            <div className="absolute size-48 bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-3xl flex items-center justify-center">
              <img src="/images/securityone/hero-icon.svg" className="w-20 h-20 object-contain opacity-80" alt="Security hero icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full flex justify-center py-16 px-4">
        <div className="max-w-[1160px] w-full">
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative">
            <button className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800 text-white rounded-full items-center justify-center hover:bg-slate-700 transition-colors shadow-lg">
              <ArrowUpCircle className="w-6 h-6" />
            </button>
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-8 relative">
                <img src="/images/securityone/encryption.svg" alt="Encryption" className="w-5 h-5" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Encryption everywhere</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Data is encrypted in transit with TLS and at rest<br className="hidden md:block"/>with AES-256, with managed key rotation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-8 relative">
                <img src="/images/securityone/least-privilege.svg" alt="Least-privilege access" className="w-5 h-5" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Least-privilege access</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Role-based access, SSO, and mandatory MFA<br className="hidden md:block"/>limit access to what each role needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-8 relative">
                <img src="/images/securityone/monitoring.svg" alt="24/7 monitoring" className="w-5 h-5" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">24/7 monitoring</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                A security operations capability monitors, alerts,<br className="hidden md:block"/>and responds around the clock.
              </p>
            </div>
          </div>

          {/* How we protect the platform Section */}
          <div className="mb-16">
            <h2 className="text-zinc-900 text-2xl font-extrabold font-['Inter'] mb-8 flex items-center">
              <span className="text-indigo-600 mr-2">/</span> How we protect the platform
            </h2>
            
            <ul className="space-y-4">
              {[
                'Secure software development lifecycle with code review and dependency scanning.',
                'Regular third-party penetration testing and continuous vulnerability management.',
                'Hardened baselines, centralized logging, and tamper-evident audit trails.',
                'Security awareness training for all staff and background checks where permitted.'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-4 h-4 bg-violet-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-indigo-600" strokeWidth={4} />
                  </div>
                  <span className="text-zinc-700 text-base font-normal font-['Inter'] leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 pt-8 pb-16 flex justify-between items-center">
            <Link href="/trust-center" className="group">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1 transition-colors group-hover:text-indigo-600">Back</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center group-hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Trust Center
              </div>
            </Link>
            <Link href="/data-protection" className="group text-right">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1 transition-colors group-hover:text-indigo-600">Next</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center justify-end group-hover:text-indigo-600 transition-colors">
                Data Protection <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
