"use client";

import React, { useState } from 'react';
import { Check, Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    { question: "Can I change plans later?", answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings." },
    { question: "What does annual billing save?", answer: "Annual billing saves you 20% compared to monthly billing on the Team plan." },
    { question: "Is there a free trial?", answer: "Yes, we offer a 14-day free trial on our Team plan so you can test all the premium features." },
    { question: "Do you offer a DPA and security documentation?", answer: "Yes, Enterprise customers get full access to our security documentation and a customized Data Processing Agreement." },
    { question: "How does enterprise pricing work?", answer: "Enterprise pricing is custom-tailored based on your specific scale, support requirements, and compliance needs. Contact our sales team for a custom quote." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Inter']">
      
      {/* Hero / Pricing Cards Section */}
      <section className="w-full pt-20 pb-16 px-4 flex flex-col items-center">
        <div className="max-w-[1000px] w-full flex flex-col items-center">
          
          <div className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.15em] mb-4">Pricing</div>
          <h1 className="text-zinc-900 text-4xl md:text-[44px] font-extrabold tracking-tight mb-4 text-center">
            Simple, transparent pricing
          </h1>
          <p className="text-gray-500 text-[15px] mb-10 text-center max-w-lg leading-relaxed">
            Start free, scale as you grow. Placeholder pricing — replace amounts<br className="hidden md:block"/> and features with your real plans.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center gap-2 mb-16 bg-white border border-gray-200 rounded-full p-1 shadow-sm">
            <button 
              className={`text-[13px] font-bold px-4 py-1.5 rounded-full transition-colors ${!isAnnual ? 'bg-zinc-900 text-white' : 'text-gray-600 hover:text-zinc-900'}`} 
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button 
              className={`text-[13px] font-bold px-4 py-1.5 rounded-full flex items-center transition-colors ${isAnnual ? 'bg-zinc-900 text-white' : 'text-gray-600 hover:text-zinc-900'}`} 
              onClick={() => setIsAnnual(true)}
            >
              Annual <span className="text-emerald-500 text-[10px] font-bold ml-2 bg-emerald-50 px-1.5 py-0.5 rounded-sm">Save 20%</span>
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative md:pt-4">
            
            {/* Starter */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col">
              <h3 className="text-zinc-900 text-[17px] font-bold mb-2">Starter</h3>
              <p className="text-gray-500 text-[13px] mb-6 min-h-[40px] leading-relaxed">For side projects and getting started.</p>
              <div className="flex items-end mb-1 text-zinc-900">
                <span className="text-[40px] font-extrabold leading-none">$0</span>
                <span className="text-gray-500 text-[13px] font-medium ml-1 mb-1.5">/mo</span>
              </div>
              <p className="text-gray-400 text-[12px] mb-6">Free forever</p>
              <button className="w-full py-2.5 rounded-[10px] border border-gray-200 shadow-sm text-zinc-900 text-[13px] font-bold hover:bg-gray-50 transition-colors mb-8">
                Start free
              </button>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-600 text-[13px]">1 project</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-600 text-[13px]">Community support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-600 text-[13px]">Shared compute</span>
                </li>
              </ul>
            </div>

            {/* Team */}
            <div className="bg-white rounded-2xl p-8 border-2 border-indigo-500 shadow-lg flex flex-col relative md:-mt-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full whitespace-nowrap shadow-sm">
                MOST POPULAR
              </div>
              <h3 className="text-zinc-900 text-[17px] font-bold mb-2">Team</h3>
              <p className="text-gray-500 text-[13px] mb-6 min-h-[40px] leading-relaxed">For growing teams shipping to production.</p>
              <div className="flex items-end mb-1 text-zinc-900">
                <span className="text-[40px] font-extrabold leading-none">${isAnnual ? '39' : '49'}</span>
                <span className="text-gray-500 text-[13px] font-medium ml-1 mb-1.5">/mo</span>
              </div>
              <p className="text-gray-400 text-[12px] mb-6">per seat, billed {isAnnual ? 'annually' : 'monthly'}</p>
              <button className="w-full py-2.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-bold transition-colors mb-8 shadow-sm">
                Start 14-day trial
              </button>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-600 text-[13px]">Unlimited projects</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-600 text-[13px]">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-600 text-[13px]">Autoscaling</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-600 text-[13px]">99.99% SLA</span>
                </li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col">
              <h3 className="text-zinc-900 text-[17px] font-bold mb-2">Enterprise</h3>
              <p className="text-gray-500 text-[13px] mb-6 min-h-[40px] leading-relaxed">For organizations with advanced needs.</p>
              <div className="flex items-end mb-1 text-zinc-900 h-[40px]">
                <span className="text-[28px] font-extrabold leading-none">Custom</span>
              </div>
              <p className="text-gray-400 text-[12px] mb-6">Volume pricing & terms</p>
              <button className="w-full py-2.5 rounded-[10px] border border-gray-200 shadow-sm text-zinc-900 text-[13px] font-bold hover:bg-gray-50 transition-colors mb-8">
                Contact sales
              </button>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-600 text-[13px]">Everything in Team</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-600 text-[13px]">SSO & SAML</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-600 text-[13px]">Custom SLA & support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-600 text-[13px]">Dedicated CSM</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Compare Plans Section */}
      <section className="w-full py-16 px-4 flex flex-col items-center bg-white">
        <div className="max-w-[700px] w-full">
          <h2 className="text-zinc-900 text-[20px] font-bold mb-10 text-center">Compare plans</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-4 text-zinc-900 text-[13px] font-bold w-2/5">Feature</th>
                  <th className="pb-4 text-zinc-900 text-[13px] font-bold text-center w-1/5">Starter</th>
                  <th className="pb-4 text-indigo-600 text-[13px] font-bold text-center w-1/5">Team</th>
                  <th className="pb-4 text-zinc-900 text-[13px] font-bold text-center w-1/5">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-[13px]">
                <tr className="border-b border-gray-100">
                  <td className="py-4 text-zinc-900 font-semibold">Projects</td>
                  <td className="py-4 text-gray-500 text-center">1</td>
                  <td className="py-4 text-gray-500 text-center">Unlimited</td>
                  <td className="py-4 text-gray-500 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 text-zinc-900 font-semibold">Team members</td>
                  <td className="py-4 text-gray-500 text-center">1</td>
                  <td className="py-4 text-gray-500 text-center">Up to 50</td>
                  <td className="py-4 text-gray-500 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 text-zinc-900 font-semibold">Autoscaling</td>
                  <td className="py-4 text-gray-400 text-center">—</td>
                  <td className="py-4"><div className="flex justify-center"><Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /></div></td>
                  <td className="py-4"><div className="flex justify-center"><Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /></div></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 text-zinc-900 font-semibold">SLA</td>
                  <td className="py-4 text-gray-400 text-center">—</td>
                  <td className="py-4 text-gray-500 text-center">99.99%</td>
                  <td className="py-4 text-gray-500 text-center">Custom</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 text-zinc-900 font-semibold">SSO / SAML</td>
                  <td className="py-4 text-gray-400 text-center">—</td>
                  <td className="py-4 text-gray-400 text-center">—</td>
                  <td className="py-4"><div className="flex justify-center"><Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /></div></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 text-zinc-900 font-semibold">Support</td>
                  <td className="py-4 text-gray-500 text-center">Community</td>
                  <td className="py-4 text-gray-500 text-center">Priority</td>
                  <td className="py-4 text-gray-500 text-center">Dedicated</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 text-zinc-900 font-semibold">DPA & security review</td>
                  <td className="py-4 text-gray-400 text-center">—</td>
                  <td className="py-4"><div className="flex justify-center"><Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /></div></td>
                  <td className="py-4"><div className="flex justify-center"><Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Section */}
      <section className="w-full py-16 px-4 flex flex-col items-center bg-white">
        <div className="max-w-[600px] w-full">
          <h2 className="text-zinc-900 text-[20px] font-bold mb-8 text-center">Frequently asked</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-[12px] overflow-hidden shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[14px] font-bold text-zinc-900">{faq.question}</span>
                  {openFaq === idx ? (
                    <Minus className="w-4 h-4 text-indigo-500 flex-shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-4 h-4 text-indigo-500 flex-shrink-0 ml-4" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-[14px] text-gray-500 bg-white leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to get started CTA */}
      <section className="w-full py-20 px-4 flex justify-center">
        <div className="max-w-[800px] w-full bg-sky-900 rounded-[24px] p-12 flex flex-col items-center text-center shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] relative overflow-hidden">
          {/* Subtle gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          
          <h2 className="text-white text-2xl md:text-[28px] font-bold mb-4 relative z-10">
            Ready to get started?
          </h2>
          <p className="text-white/80 text-[15px] mb-8 relative z-10 max-w-sm">
            Deploy your first app free, or talk to our team about enterprise.
          </p>
          <button className="bg-white hover:bg-gray-100 text-zinc-900 text-[14px] font-bold py-3 px-6 rounded-xl transition-colors flex items-center relative z-10 shadow-sm">
            Start free <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

    </div>
  );
}
