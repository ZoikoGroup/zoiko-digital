import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpCircle } from 'lucide-react';

export default function SecurityContact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-800">
      
      {/* Hero Section */}
      <section className="w-full bg-[#353840] flex justify-center py-20 px-4 relative overflow-hidden">
        <div className="max-w-[1160px] w-full relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl text-left">
            <Link href="/trust-center" className="inline-flex items-center text-white/70 hover:text-white mb-6 text-sm font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Trust Center
            </Link>
            <div className="text-white/90 text-xs font-bold uppercase tracking-wider mb-4">GET IN TOUCH</div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Inter'] leading-tight mb-6">
              Report a security issue
            </h1>
            <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7">
              We welcome reports from security researchers and customers.<br className="hidden md:block"/>
              Coordinated disclosure helps us keep everyone safe.
            </p>
          </div>

          {/* Hero icon — layered glassmorphism */}
          <div className="mt-12 md:mt-0 relative flex-shrink-0 w-[502px] h-96 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl hidden md:block">
            <div className="absolute size-80 left-[83px] top-[28px] opacity-10 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[131px] top-[75px] opacity-5 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[134px] top-[78px] bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-[40px]"></div>
            <div className="absolute flex items-center justify-center size-60 left-[134px] top-[78px]">
              <img src="/images/security/hero-icon.svg" className="w-[123px] h-[116px] object-contain opacity-80" alt="Security contact hero icon" />
            </div>
          </div>
          {/* Mobile fallback for hero icon */}
          <div className="mt-12 md:hidden relative flex-shrink-0 w-64 h-64 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl mx-auto flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-white"></div>
            <div className="absolute size-48 bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-3xl flex items-center justify-center">
              <img src="/images/security/hero-icon.svg" className="w-20 h-20 object-contain opacity-80" alt="Security contact hero icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full flex justify-center py-16 px-4">
        <div className="max-w-[1160px] w-full">
          
          <div className="flex flex-col lg:flex-row gap-8 mb-16 relative">
            <button className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#353840] text-white rounded-full items-center justify-center hover:bg-slate-700 transition-colors shadow-lg">
              <ArrowUpCircle className="w-6 h-6" />
            </button>
            
            {/* Submit a report form */}
            <div className="flex-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)]">
              <h2 className="text-zinc-900 text-lg font-extrabold font-['Inter'] mb-6">Submit a report</h2>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-zinc-900 text-[13px] font-bold font-['Inter'] mb-2">Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm placeholder:text-gray-400 text-zinc-900 font-medium" />
                </div>
                
                <div>
                  <label className="block text-zinc-900 text-[13px] font-bold font-['Inter'] mb-2">Email</label>
                  <input type="email" placeholder="you@example.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm placeholder:text-gray-400 text-zinc-900 font-medium" />
                </div>
                
                <div>
                  <label className="block text-zinc-900 text-[13px] font-bold font-['Inter'] mb-2">Severity</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm appearance-none bg-white text-zinc-900 font-medium">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-zinc-900 text-[13px] font-bold font-['Inter'] mb-2">Description</label>
                  <textarea placeholder="What did you find? Steps to reproduce, impact, affected URLs." rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none placeholder:text-gray-400 text-zinc-900 font-medium"></textarea>
                </div>
                
                <button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white text-[15px] font-semibold py-2.5 px-6 rounded-lg transition-colors mt-2">
                  Send report
                </button>
              </form>
              
              <p className="text-gray-400 text-xs font-medium font-['Inter'] mt-10 leading-relaxed max-w-sm">
                This demo form does not transmit data. On the live site it would route to the security team.
              </p>
            </div>

            {/* Direct channels side */}
            <div className="flex-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)] flex flex-col">
              <h2 className="text-zinc-900 text-lg font-extrabold font-['Inter'] mb-6">Direct channels</h2>
              
              <div className="space-y-5 mb-10">
                <div className="flex">
                  <span className="w-24 text-zinc-900 text-[13px] font-bold font-['Inter'] flex-shrink-0">Email</span>
                  <a href="mailto:security@zoikoweb.com" className="text-indigo-600 text-[13px] font-medium font-['Inter'] hover:underline">security@zoikoweb.com</a>
                </div>
                <div className="flex">
                  <span className="w-24 text-zinc-900 text-[13px] font-bold font-['Inter'] flex-shrink-0">security.txt</span>
                  <a href="/.well-known/security.txt" className="text-indigo-600 text-[13px] font-medium font-['Inter'] hover:underline">/.well-known/security.txt</a>
                </div>
                <div className="flex">
                  <span className="w-24 text-zinc-900 text-[13px] font-bold font-['Inter'] flex-shrink-0">PGP</span>
                  <span className="text-zinc-600 text-[13px] font-medium font-['Inter']">Available on request for encrypted reports</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-zinc-900 text-[13px] font-bold font-['Inter'] flex-shrink-0">Response</span>
                  <span className="text-zinc-600 text-[13px] font-medium font-['Inter']">Acknowledgment within 2 business days</span>
                </div>
              </div>

              <h3 className="text-zinc-900 text-[13px] font-bold font-['Inter'] mb-5">Coordinated disclosure</h3>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start">
                  <img src="/images/security/checkmark.svg" alt="Check" className="w-[11px] h-[11px] mt-1.5 mr-3 flex-shrink-0" />
                  <span className="text-zinc-600 text-[13px] font-medium font-['Inter'] leading-relaxed">Report privately and give us reasonable time to remediate.</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/security/checkmark.svg" alt="Check" className="w-[11px] h-[11px] mt-1.5 mr-3 flex-shrink-0" />
                  <span className="text-zinc-600 text-[13px] font-medium font-['Inter'] leading-relaxed">Avoid privacy violations, data destruction, and service disruption.</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/security/checkmark.svg" alt="Check" className="w-[11px] h-[11px] mt-1.5 mr-3 flex-shrink-0" />
                  <span className="text-zinc-600 text-[13px] font-medium font-['Inter'] leading-relaxed">We will not pursue good-faith research conducted under this policy.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 pt-8 flex justify-between items-center">
            <Link href="/accessibility" className="group">
              <div className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-1 transition-colors group-hover:text-indigo-600">Previous</div>
              <div className="text-zinc-900 text-[13px] font-extrabold flex items-center group-hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Accessibility
              </div>
            </Link>
            <Link href="/trust-center" className="group text-right">
              <div className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-1 transition-colors group-hover:text-indigo-600">DONE</div>
              <div className="text-zinc-900 text-[13px] font-extrabold flex items-center justify-end group-hover:text-indigo-600 transition-colors">
                Trust Center <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
