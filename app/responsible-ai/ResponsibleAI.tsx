import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, User, Scale, Eye, Users, Shield, Check, ArrowUpCircle } from 'lucide-react';

export default function ResponsibleAI() {
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
              AI we can stand behind
            </h1>
            <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7">
              Responsible AI means building systems that are fair, transparent,<br className="hidden md:block" />
              safe, and under meaningful human oversight.
            </p>
          </div>

          <div className="mt-12 md:mt-0 relative flex-shrink-0 w-[502px] h-96 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl hidden md:block">
            <div className="absolute size-80 left-[83px] top-[28px] opacity-10 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[131px] top-[75px] opacity-5 bg-white rounded-full"></div>
            <div className="absolute size-60 left-[134px] top-[78px] bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-[40px]"></div>
            <div className="absolute flex items-center justify-center size-60 left-[134px] top-[78px]">
              <User className="w-[123px] h-[137px] text-white opacity-80" strokeWidth={1.5} />
            </div>
          </div>
          {/* Mobile fallback for hero icon */}
          <div className="mt-12 md:hidden relative flex-shrink-0 w-64 h-64 shadow-[0px_30px_50px_0px_rgba(0,0,0,0.40)] overflow-hidden rounded-3xl mx-auto flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-white"></div>
            <div className="absolute size-48 bg-gradient-to-br from-white/25 to-white/5 outline outline-2 outline-offset-[-1px] outline-white/30 rounded-3xl flex items-center justify-center">
              <User className="w-20 h-20 text-white opacity-80" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full flex justify-center py-16 px-4">
        <div className="max-w-[1160px] w-full">

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 relative">
            <button className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800 text-white rounded-full items-center justify-center hover:bg-slate-700 transition-colors">
              <ArrowUpCircle className="w-6 h-6" />
            </button>

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12 relative">
                <img src="/images/ai/fairness.svg" alt="Fairness" className="w-5 h-5" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Fairness</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                We test for harmful bias and work to ensure equitable outcomes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12 relative">
                <img src="/images/ai/transparency.svg" alt="Transparency" className="w-5 h-5" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Transparency</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                We are clear about where and how AI is used and its limitations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12 relative">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Human oversight</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                People stay in the loop for consequential decisions.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center mb-12 relative">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-zinc-900 text-base font-bold font-['Inter'] leading-7 mb-2">Safety & privacy</h3>
              <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                We safeguard data and test for misuse before release.
              </p>
            </div>
          </div>

          {/* In Practice Section */}
          <div className="mb-16">
            <h2 className="text-slate-900 text-2xl font-extrabold font-['Inter'] mb-8 flex items-center">
              <span className="text-indigo-600 mr-2">/</span> In practice
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-indigo-600" />
                </div>
                <p className="text-slate-700 text-base font-normal font-['Inter']">
                  Evaluations for accuracy, robustness, and bias before launch.
                </p>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-indigo-600" />
                </div>
                <p className="text-slate-700 text-base font-normal font-['Inter']">
                  Guardrails and abuse-prevention controls on AI features.
                </p>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-indigo-600" />
                </div>
                <p className="text-slate-700 text-base font-normal font-['Inter']">
                  Customer data is not used to train shared models without consent.
                </p>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="border-t border-slate-200 pt-8 flex justify-between items-center">
            <Link href="/ai-governance" className="group">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Previous</div>
              <div className="text-slate-900 text-sm font-bold flex items-center group-hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> AI Governance
              </div>
            </Link>
            <Link href="/compliance" className="group text-right">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Next</div>
              <div className="text-slate-900 text-sm font-bold flex items-center justify-end group-hover:text-indigo-600 transition-colors">
                Compliance <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
