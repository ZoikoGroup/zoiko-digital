import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function CloudSecurity() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-slate-800">
      
      {/* Hero Section */}
      <section className="w-full bg-[#2a2d34] flex justify-center py-20 px-4 relative overflow-hidden">
        {/* Indigo radial gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 16% 10%, rgba(79,70,229,0.80) 0%, transparent 60%)',
            filter: 'blur(2px)',
            opacity: 0.9,
          }}
        />
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

          {/* Hero icon — layered glassmorphism (matches Figma exactly) */}
          <div className="mt-12 md:mt-0 relative flex-shrink-0 w-[502px] h-96 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl hidden md:block">
            <div className="absolute size-80 left-[83px] top-[28px] opacity-10 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[131px] top-[75px] opacity-5 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[134px] top-[78px] bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-[40px]"></div>
            <div className="absolute flex items-center justify-center size-60 left-[134px] top-[78px]">
              <Image
                src="/images/cloud/cloud-icon.svg"
                alt="Cloud security icon"
                width={141}
                height={100}
                className="opacity-80"
              />
            </div>
          </div>
          {/* Mobile fallback for hero icon */}
          <div className="mt-12 md:hidden relative flex-shrink-0 w-64 h-64 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl mx-auto flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-white"></div>
            <div className="absolute size-48 bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-3xl flex items-center justify-center">
              <Image
                src="/images/cloud/cloud-icon.svg"
                alt="Cloud security icon"
                width={100}
                height={71}
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full flex justify-center py-16 px-4">
        <div className="max-w-[1160px] w-full">
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            {/* Card 1 – Hardened infrastructure */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12">
                <Image
                  src="/images/cloud/hardened-infrastructure.svg"
                  alt="Hardened infrastructure icon"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Hardened infrastructure</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Secure-by-default configurations, patched<br/>continuously and continuously assessed.
              </p>
            </div>

            {/* Card 2 – Network isolation */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12">
                <Image
                  src="/images/cloud/network-isolation.svg"
                  alt="Network isolation icon"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Network isolation</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Segmentation, firewalls, and private networking<br/>limit exposure and lateral movement.
              </p>
            </div>

            {/* Card 3 – Resilient by design */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12">
                <Image
                  src="/images/cloud/resilient-by-design.svg"
                  alt="Resilient by design icon"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Resilient by design</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Multi-zone redundancy and automated failover<br/>keep services available.
              </p>
            </div>
          </div>

          {/* Shared Responsibility Section */}
          <div className="mb-16">
            <h2 className="text-zinc-900 text-2xl font-extrabold font-['Inter'] mb-6 flex items-center">
              <span className="text-indigo-600 mr-1">/</span> Shared responsibility
            </h2>
            
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">

                {/* Zoiko secures */}
                <div className="flex-1 bg-gradient-to-r from-indigo-600 to-cyan-500 p-10 flex flex-col items-center justify-center text-center">
                  <h3 className="text-white text-2xl font-bold font-['Inter'] mb-4">Zoiko secures</h3>
                  <p className="text-violet-100 text-xl font-normal font-['Inter']">
                    Physical, network, host, platform,<br/>service availability &amp; patching
                  </p>
                </div>

                {/* You secure */}
                <div className="flex-1 bg-indigo-50 border-l border-slate-200 p-10 flex flex-col items-center justify-center text-center">
                  <h3 className="text-zinc-900 text-2xl font-bold font-['Inter'] mb-4">You secure</h3>
                  <p className="text-zinc-700 text-xl font-normal font-['Inter']">
                    Your data, access, configuration<br/>and user management
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 pt-8 flex justify-between items-center">
            <Link href="/data-protection" className="group">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1">Previous</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center group-hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Data Protection
              </div>
            </Link>
            <Link href="/ai-governance" className="group text-right">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1">Next</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center justify-end group-hover:text-indigo-600 transition-colors">
                AI Governance <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
