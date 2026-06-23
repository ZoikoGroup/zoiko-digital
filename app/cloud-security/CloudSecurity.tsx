import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Cloud, Server, Network, Shield, ArrowUpCircle } from 'lucide-react';

export default function CloudSecurity() {
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
            <div className="text-white/90 text-xs font-bold uppercase tracking-wider mb-4">INFRASTRUCTURE</div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Inter'] leading-tight mb-6">
              A secure foundation in<br/>the cloud
            </h1>
            <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7">
              Our platform runs on hardened, redundant infrastructure with strong<br className="hidden md:block"/>
              isolation between tenants and clearly defined responsibilities.
            </p>
          </div>

          <div className="mt-12 md:mt-0 relative flex-shrink-0">
            <div className="w-64 h-64 bg-white/5 rounded-full absolute -top-8 -left-8 blur-2xl"></div>
            <div className="w-48 h-48 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 flex items-center justify-center relative z-10 shadow-2xl">
              <Cloud className="w-24 h-24 text-white opacity-80" strokeWidth={1.5} />
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
                <Server className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-slate-900 text-base font-bold font-['Inter'] mb-3">Hardened infrastructure</h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-6">
                Secure-by-default configurations, patched continuously and continuously assessed.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-slate-900 text-base font-bold font-['Inter'] mb-3">Network isolation</h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-6">
                Segmentation, firewalls, and private networking limit exposure and lateral movement.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Network className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-slate-900 text-base font-bold font-['Inter'] mb-3">Resilient by design</h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-6">
                Multi-zone redundancy and automated failover keep services available.
              </p>
            </div>
          </div>

          {/* Shared Responsibility Section */}
          <div className="mb-16">
            <h2 className="text-slate-900 text-2xl font-extrabold font-['Inter'] mb-8 flex items-center">
              <span className="text-indigo-600 mr-2">/</span> Shared responsibility
            </h2>
            
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col md:flex-row gap-6">
              
              {/* Zoiko secures */}
              <div className="flex-1 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl p-10 flex flex-col items-center justify-center text-center shadow-inner">
                <h3 className="text-white text-2xl font-bold font-['Inter'] mb-6">Zoiko secures</h3>
                <p className="text-indigo-100 text-lg font-normal font-['Inter']">
                  Physical, network, host, platform,<br/>service availability & patching
                </p>
              </div>

              {/* You secure */}
              <div className="flex-1 bg-indigo-50/50 border border-slate-200 rounded-xl p-10 flex flex-col items-center justify-center text-center">
                <h3 className="text-slate-900 text-2xl font-bold font-['Inter'] mb-6">You secure</h3>
                <p className="text-slate-600 text-lg font-normal font-['Inter']">
                  Your data, access, configuration<br/>and user management
                </p>
              </div>

            </div>
          </div>

          {/* Pagination */}
          <div className="border-t border-slate-200 pt-8 flex justify-between items-center">
            <Link href="/data-protection" className="group">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Previous</div>
              <div className="text-slate-900 text-sm font-bold flex items-center group-hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Data Protection
              </div>
            </Link>
            <Link href="/ai-governance" className="group text-right">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Next</div>
              <div className="text-slate-900 text-sm font-bold flex items-center justify-end group-hover:text-indigo-600 transition-colors">
                AI Governance <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
