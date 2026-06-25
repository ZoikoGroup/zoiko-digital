import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function DataProtection() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-slate-800">

      {/* Hero Section */}
      <section className="w-full bg-[#2a2d34] flex justify-center py-20 px-4 relative overflow-hidden">
        {/* Cyan radial gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 16% 10%, rgba(6,182,212,0.80) 0%, transparent 60%)',
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
            <div className="text-white/90 text-xs font-bold uppercase tracking-wider mb-4">PRIVACY</div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Inter'] leading-tight mb-6">
              Your data, protected by<br />design
            </h1>
            <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7">
              We apply privacy-by-design principles so protection is built in, not<br className="hidden md:block" />
              bolted on. You stay in control of your data throughout its lifecycle.
            </p>
          </div>

          {/* Hero icon — layered glassmorphism (matches Figma exactly) */}
          <div className="mt-12 md:mt-0 relative flex-shrink-0 w-[502px] h-96 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl hidden md:block">
            <div className="absolute size-80 left-[83px] top-[28px] opacity-10 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[131px] top-[75px] opacity-5 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[134px] top-[78px] bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-[40px]"></div>
            <div className="absolute flex items-center justify-center size-60 left-[134px] top-[78px]">
              <Image
                src="/images/data/database-icon.svg"
                alt="Data protection database icon"
                width={123}
                height={137}
                className="opacity-80"
              />
            </div>
          </div>
          {/* Mobile fallback for hero icon */}
          <div className="mt-12 md:hidden relative flex-shrink-0 w-64 h-64 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl mx-auto flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-white"></div>
            <div className="absolute size-48 bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-3xl flex items-center justify-center">
              <Image
                src="/images/data/database-icon.svg"
                alt="Data protection database icon"
                width={80}
                height={90}
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

            {/* Card 1 – Privacy by design */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12">
                <Image
                  src="/images/data/data-residency.svg"
                  alt="Privacy by design icon"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Privacy by design</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Data minimization and purpose limitation are built<br />into how we design features.
              </p>
            </div>

            {/* Card 2 – Data residency */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12">
                <Image
                  src="/images/data/privacy-by-design.svg"
                  alt="Data residency icon"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Data residency</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Choose supported regions to help meet data-<br />residency and sovereignty needs.
              </p>
            </div>

            {/* Card 3 – Lifecycle controls */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12">
                <Image
                  src="/images/data/lifecycle-controls.svg"
                  alt="Lifecycle controls icon"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Lifecycle controls</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                Clear retention, export, and deletion controls<br />across the data lifecycle.
              </p>
            </div>
          </div>

          {/* Your rights and our commitments Section */}
          <div className="mb-16">
            <h2 className="text-zinc-900 text-2xl font-extrabold font-['Inter'] mb-6 flex items-center">
              <span className="text-indigo-600 mr-1">/</span> Your rights and our commitments
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Image src="/images/data/check-icon.svg" alt="check" width={12} height={12} />
                </div>
                <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-7">
                  We act as processor for customer content under our Data Processing Addendum.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Image src="/images/data/check-icon.svg" alt="check" width={12} height={12} />
                </div>
                <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-7">
                  We support access, correction, deletion, and portability requests.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Image src="/images/data/check-icon.svg" alt="check" width={12} height={12} />
                </div>
                <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-7">
                  Encryption, access control, and monitoring safeguard personal data.
                </p>
              </div>
            </div>

            <p className="text-zinc-700 text-base font-normal font-['Inter']">
              For full details, see our{' '}
              <Link href="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>,{' '}
              <Link href="/dpa" className="text-indigo-600 hover:underline">DPA</Link>, and{' '}
              <Link href="/subprocessors" className="text-indigo-600 hover:underline">Subprocessors</Link>.
            </p>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 pt-8 flex justify-between items-center">
            <Link href="/trust-security" className="group">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1">Previous</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center group-hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Security
              </div>
            </Link>
            <Link href="/cloud-security" className="group text-right">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-1">Next</div>
              <div className="text-zinc-900 text-sm font-bold flex items-center justify-end group-hover:text-indigo-600 transition-colors">
                Cloud Security <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
