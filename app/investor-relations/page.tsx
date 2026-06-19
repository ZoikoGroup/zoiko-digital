import React from 'react';
import {
  Globe2, TrendingUp, Lightbulb, Users,
  Download, PlayCircle, BarChart3,
  ChevronRight, CheckCircle2, FileText, ArrowRight,
  Mail, Phone, MessageCircle
} from 'lucide-react';

export default function InvestorRelationsPage() {
  return (
    <div className="w-full bg-white overflow-hidden font-['Inter',sans-serif]">
      {/* HERO SECTION */}
      <section className="w-full py-20 bg-gradient-to-r from-fuchsia-700 to-sky-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Invest with Confidence | Partner in Global Growth
          </h1>
          <p className="text-white/90 text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Zoiko Web Services delivers resilient growth, governance integrity, and long-term
            <br className="hidden md:block" />
            value across cloud, AI, and compliance solutions.
          </p>
        </div>
      </section>

      {/* INVESTMENT THESIS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sky-900 text-3xl font-semibold mb-4">Investment Thesis</h2>
            <p className="text-stone-500 text-xl max-w-4xl mx-auto">
              A Tier-1 global digital transformation platform spanning AI, telecom-grade infrastructure, compliance, and fintech innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-sky-900 text-4xl font-bold mb-2">50+</h3>
              <p className="text-sky-900 text-lg font-bold mb-1">Countries</p>
              <p className="text-stone-500 text-sm">Global Reach</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center">
              <div className="text-5xl mb-6">📈</div>
              <h3 className="text-sky-900 text-4xl font-bold mb-2">145%</h3>
              <p className="text-sky-900 text-lg font-bold mb-1">YoY Growth</p>
              <p className="text-stone-500 text-sm">Annual Revenue</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center">
              <div className="text-5xl mb-6">💡</div>
              <h3 className="text-sky-900 text-4xl font-bold mb-2">250+</h3>
              <p className="text-sky-900 text-lg font-bold mb-1">Patents Filed</p>
              <p className="text-stone-500 text-sm">Innovation Pipeline</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center">
              <div className="text-5xl mb-6">👥</div>
              <h3 className="text-sky-900 text-4xl font-bold mb-2">15,000</h3>
              <p className="text-sky-900 text-lg font-bold mb-1">Employees</p>
              <p className="text-stone-500 text-sm">6 Continents</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIAL PERFORMANCE & FILINGS */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-emerald-400 text-2xl font-semibold mb-6">Financial Performance & Filings</h2>
            <div className="flex justify-center border-b-2 border-zinc-100">
              <div className="px-8 py-4 border-b-[3px] border-emerald-400">
                <span className="text-emerald-400 text-base font-semibold">Earnings & Reports</span>
              </div>
            </div>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Q4 2024 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 border-l-4 border-emerald-400 relative h-64">
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-emerald-400 text-xl font-bold">Q4 2024 Earnings Report</h3>
                <p className="text-stone-500 text-sm">March 15, 2025</p>
              </div>
              <div className="flex space-x-16">
                <div>
                  <p className="text-stone-500 text-sm mb-1 text-center">Revenue</p>
                  <p className="text-emerald-400 text-3xl font-bold mb-1 text-center">$2.4B</p>
                  <p className="text-emerald-400 text-sm font-bold text-center">+45% YoY</p>
                </div>
                <div>
                  <p className="text-stone-500 text-sm mb-1 text-center">EPS</p>
                  <p className="text-emerald-400 text-3xl font-bold mb-1 text-center">$3.85</p>
                  <p className="text-emerald-400 text-sm font-bold text-center">+52% YoY</p>
                </div>
              </div>
              <div className="flex space-x-8 absolute bottom-8 left-8">
                <button className="text-emerald-400 text-sm font-bold hover:underline">Download PDF</button>
                <button className="text-emerald-400 text-sm font-bold hover:underline">Webcast Replay</button>
                <button className="text-emerald-400 text-sm font-bold hover:underline">Presentation</button>
              </div>
            </div>

            {/* Annual Report */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 border-l-4 border-emerald-400 relative h-64">
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-emerald-400 text-xl font-bold">Annual Report 2024</h3>
                <p className="text-stone-500 text-sm">February 28, 2025</p>
              </div>
              <div className="flex space-x-16">
                <div>
                  <p className="text-stone-500 text-sm mb-1 text-center">Annual Revenue</p>
                  <p className="text-emerald-400 text-3xl font-bold mb-1 text-center">$8.7B</p>
                  <p className="text-emerald-400 text-sm font-bold text-center">+35% YoY</p>
                </div>
                <div>
                  <p className="text-stone-500 text-sm mb-1 text-center">Free Cash Flow</p>
                  <p className="text-emerald-400 text-3xl font-bold mb-1 text-center">$2.1B</p>
                  <p className="text-emerald-400 text-sm font-bold text-center">+28% YoY</p>
                </div>
              </div>
              <div className="flex space-x-8 absolute bottom-8 left-8">
                <button className="text-emerald-400 text-sm font-bold hover:underline">Download PDF</button>
                <button className="text-emerald-400 text-sm font-bold hover:underline">Interactive Report</button>
                <button className="text-emerald-400 text-sm font-bold hover:underline">Key Metrics</button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-emerald-400 text-emerald-400 text-lg font-bold hover:bg-emerald-100 transition-colors">
              View All Financials & Filings →
            </button>
          </div>
        </div>
      </section>

      {/* STOCK INFORMATION */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sky-900 text-2xl font-semibold mb-4">Stock Information</h2>
            <div className="w-20 h-1 bg-sky-900 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Stock Price Card */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 border-l-4 border-sky-900 lg:col-span-1 min-h-[29rem]">
              <div className="flex items-center mb-8">
                <h3 className="text-sky-900 text-3xl font-bold mr-4">ZOIKO</h3>
                <span className="px-3 py-1 bg-sky-50 text-sky-900 text-xs font-bold rounded-full">NASDAQ</span>
              </div>
              <p className="text-sky-900 text-4xl font-bold mb-6">$245.67</p>
              <p className="text-sky-900 text-lg font-bold mb-10">+$12.45 (+5.34%)</p>
              <p className="text-stone-500 text-sm">Last updated: 4:00 PM EST</p>
            </div>

            {/* Chart Area */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 lg:col-span-2 min-h-[29rem] flex flex-col justify-start">
              <div className="flex justify-center gap-2 mb-12">
                {['1D', '1M', '6M', '1Y', '5Y', 'MAX'].map((range, idx) => (
                  <button
                    key={range}
                    className={`w-14 h-9 rounded-md text-sm font-semibold border-2 outline-offset-[-2px] ${idx === 0
                        ? 'bg-sky-900 border-sky-900 text-white'
                        : 'border-neutral-200 text-stone-500 hover:border-sky-900 hover:text-sky-900'
                      }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
              {/* Placeholder for chart */}
              <div className="w-full h-72 bg-neutral-300/20 rounded-lg border border-zinc-100 flex items-center justify-center relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path 
                    d="M 0,80 C 20,70 35,45 45,45 C 55,45 60,60 65,60 C 70,60 80,20 90,20 C 95,20 100,25 100,25" 
                    fill="none" 
                    stroke="#0c4a6e" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dividends & Splits */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8">
              <h3 className="text-sky-900 text-2xl font-bold mb-6">Dividends & Splits</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-zinc-100 pb-4">
                  <span className="text-stone-500 font-bold">Current Dividend</span>
                  <span className="text-sky-900 font-bold">$2.40/share annually</span>
                </div>
                <div className="flex justify-between border-b border-zinc-100 pb-4">
                  <span className="text-stone-500 font-bold">Dividend Yield</span>
                  <span className="text-sky-900 font-bold">0.98%</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-stone-500 font-bold">Last Split</span>
                  <span className="text-sky-900 font-bold">2:1 (June 2023)</span>
                </div>
              </div>
            </div>

            {/* Analyst Coverage */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8">
              <h3 className="text-sky-900 text-2xl font-bold mb-6">Analyst Coverage</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-lg">
                  <span className="text-sky-900 font-bold">Goldman Sachs</span>
                  <span className="px-3 py-1 bg-emerald-100 text-green-900 text-xs font-bold rounded-full">Buy</span>
                  <span className="text-sky-900 font-bold">$280</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-lg">
                  <span className="text-sky-900 font-bold">Morgan Stanley</span>
                  <span className="px-3 py-1 bg-emerald-100 text-green-900 text-xs font-bold rounded-full">Buy</span>
                  <span className="text-sky-900 font-bold">$275</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-lg">
                  <span className="text-sky-900 font-bold">JP Morgan</span>
                  <span className="px-3 py-1 bg-amber-100 text-yellow-800 text-xs font-bold rounded-full">Hold</span>
                  <span className="text-sky-900 font-bold">$250</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE GOVERNANCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sky-900 text-3xl font-semibold mb-4">Corporate Governance</h2>
            <div className="w-20 h-1 bg-sky-900 mx-auto rounded mb-12"></div>
            <h3 className="text-sky-900 text-2xl font-bold mb-10">Board of Directors</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { name: 'Lennox McLeod', role: 'Executive Chairman', tenure: '15 years', committee: 'Risk & ESG Committee', image: '/images/investor/dev3.jpg' },
              { name: 'Sarah Chen', role: 'Independent Director', tenure: '8 years', committee: 'Audit Committee (Chair)' },
              { name: 'Marcus Rodriguez', role: 'Independent Director', tenure: '6 years', committee: 'Compensation Committee', image: '/images/investor/dev2.jpg' },
            ].map((director) => (
              <div key={director.name} className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-[3px] border-fuchsia-700 mb-6 flex items-center justify-center overflow-hidden p-1">
                  {director.image ? (
                    <img className="w-full h-full rounded-full object-cover" src={director.image} alt={director.name} />
                  ) : null}
                </div>
                <h4 className="text-sky-900 text-xl font-bold mb-2">{director.name}</h4>
                <p className="text-fuchsia-700 font-bold mb-4">{director.role}</p>
                <p className="text-stone-500 text-sm mb-2">Tenure: {director.tenure}</p>
                <p className="text-stone-500 text-sm">{director.committee}</p>
              </div>
            ))}
          </div>

          <h3 className="text-sky-900 text-2xl font-bold text-center mb-10">Committee Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
            {[
              { name: 'Audit Committee', desc: 'Oversees financial reporting, internal controls, and external audit processes.' },
              { name: 'Risk & ESG Committee', desc: 'Monitors enterprise risk management and ESG strategy implementation.' },
              { name: 'Compensation Committee', desc: 'Determines executive compensation and equity incentive programs.' },
              { name: 'Nominations Committee', desc: 'Identifies and recommends director candidates and succession planning.' }
            ].map((committee) => (
              <div key={committee.name} className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8">
                <h4 className="text-sky-900 text-xl font-bold mb-4">{committee.name}</h4>
                <p className="text-stone-500 mb-6">{committee.desc}</p>
                <button className="text-fuchsia-700 font-bold text-sm hover:underline">View Charter</button>
              </div>
            ))}
          </div>

          <h3 className="text-sky-900 text-2xl font-bold text-center mb-10">Governance Policies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {['Code of Conduct', 'Anti-Bribery Policy', 'Whistleblower Policy', 'Human Rights Policy', 'Supplier Code', 'Responsible AI Standard'].map((policy) => (
              <div key={policy} className="bg-white rounded-lg border border-zinc-300 p-4 text-center">
                <span className="text-sky-900 font-bold">{policy}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-sky-900 text-sky-900 text-lg font-bold hover:bg-sky-50 transition-colors">
              View Corporate Governance Library
            </button>
          </div>
        </div>
      </section>

      {/* ESG & RESPONSIBLE GROWTH */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sky-900 text-3xl font-semibold mb-4">ESG & Responsible Growth</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-fuchsia-700 mx-auto rounded mb-6"></div>
            <p className="text-stone-500 text-xl max-w-4xl mx-auto">
              Financial materiality and long-term value creation through sustainable business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center relative">
              <span className="absolute top-4 right-4 px-2 py-1 bg-emerald-100 text-green-900 text-xs font-bold rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Audited
              </span>
              <h3 className="text-stone-500 font-bold mb-6 h-12 flex items-center">Renewable<br />Energy</h3>
              <p className="text-emerald-400 text-5xl font-bold mb-4">87%</p>
              <p className="text-stone-500 text-sm">of total energy consumption</p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center relative">
              <span className="absolute top-4 right-4 px-2 py-1 bg-emerald-100 text-green-900 text-xs font-bold rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Audited
              </span>
              <h3 className="text-stone-500 font-bold mb-6 h-12 flex items-center">Carbon<br />Emissions</h3>
              <p className="text-emerald-400 text-5xl font-bold mb-4">-35%</p>
              <p className="text-stone-500 text-sm">Scope 1 & 2 reduction (vs 2020)</p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center relative">
              <span className="absolute top-4 right-4 px-2 py-1 bg-emerald-100 text-green-900 text-xs font-bold rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Audited
              </span>
              <h3 className="text-stone-500 font-bold mb-6 h-12 flex items-center">Pay Equity</h3>
              <p className="text-emerald-400 text-5xl font-bold mb-4">98%</p>
              <p className="text-stone-500 text-sm">gender pay parity achieved</p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center relative">
              <span className="absolute top-4 right-4 px-2 py-1 bg-emerald-100 text-green-900 text-xs font-bold rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Audited
              </span>
              <h3 className="text-stone-500 font-bold mb-6 h-12 flex items-center">AI Bias Testing</h3>
              <p className="text-emerald-400 text-5xl font-bold mb-4">100%</p>
              <p className="text-stone-500 text-sm">models pass ethics review</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 mb-12 max-w-5xl mx-auto flex flex-col items-center">
            <h3 className="text-sky-900 text-2xl font-bold mb-8">Independent Assurance</h3>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <div className="px-8 py-3 bg-sky-50 rounded-lg border-2 border-neutral-200 text-sky-900 font-bold text-lg">PwC</div>
              <div className="px-8 py-3 bg-sky-50 rounded-lg border-2 border-neutral-200 text-sky-900 font-bold text-lg">EY</div>
              <div className="px-8 py-3 bg-sky-50 rounded-lg border-2 border-neutral-200 text-sky-900 font-bold text-lg">Deloitte</div>
            </div>
            <p className="text-stone-500 text-sm">ESG metrics independently verified by leading audit firms</p>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-sky-900 text-sky-900 text-lg font-bold hover:bg-sky-100 transition-colors">
              Download ESG Investor Brief <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* INVESTOR EVENTS & ENGAGEMENT */}
      <section className="py-20 bg-fuchsia-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sky-900 text-2xl font-semibold mb-4">Investor Events & Engagement</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-fuchsia-700 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Upcoming Events */}
            <div className="lg:col-span-3">
              <h2 className="text-sky-900 text-2xl font-bold mb-8">Upcoming Events</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] flex items-center p-6 border-l-4 border-fuchsia-700">
                  <div className="bg-[#9b5de5] text-white flex flex-col justify-center items-center w-20 h-24 rounded-lg flex-shrink-0 mr-6">
                    <span className="text-2xl font-bold">28</span>
                    <span className="text-xs font-semibold uppercase tracking-wider mt-1">Mar</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sky-900 text-lg font-bold mb-1">Q1 2025 Earnings Call</h3>
                    <p className="text-[#9b5de5] font-bold text-sm mb-2">4:30 PM EST</p>
                    <p className="text-stone-500 text-sm">Quarterly financial results and management commentary</p>
                  </div>
                  <div className="flex flex-col space-y-4 ml-6 items-end flex-shrink-0">
                    <button className="text-[#9b5de5] font-bold text-sm hover:underline">Register</button>
                    <button className="text-[#9b5de5] font-bold text-sm hover:underline">Add to Calendar</button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] flex items-center p-6 border-l-4 border-fuchsia-700">
                  <div className="bg-[#9b5de5] text-white flex flex-col justify-center items-center w-20 h-24 rounded-lg flex-shrink-0 mr-6">
                    <span className="text-2xl font-bold">15</span>
                    <span className="text-xs font-semibold uppercase tracking-wider mt-1">Apr</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sky-900 text-lg font-bold mb-1">Investor Day 2025</h3>
                    <p className="text-[#9b5de5] font-bold text-sm mb-2">9:00 AM EST</p>
                    <p className="text-stone-500 text-sm">Annual strategic overview and long-term outlook</p>
                  </div>
                  <div className="flex flex-col space-y-4 ml-6 items-end flex-shrink-0">
                    <button className="text-[#9b5de5] font-bold text-sm hover:underline">Register</button>
                    <button className="text-[#9b5de5] font-bold text-sm hover:underline">Add to Calendar</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Events */}
            <div className="lg:col-span-2">
              <h2 className="text-sky-900 text-2xl font-bold mb-8">Past Events</h2>
              <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8">
                <h3 className="text-sky-900 text-lg font-bold mb-2">Q4 2024 Earnings Call</h3>
                <p className="text-stone-500 text-sm mb-4">March 15, 2025</p>
                <div className="flex flex-col space-y-3 items-start">
                  <button className="text-[#9b5de5] font-bold text-sm hover:underline">Webcast Replay</button>
                  <button className="text-[#9b5de5] font-bold text-sm hover:underline">Transcript</button>
                  <button className="text-[#9b5de5] font-bold text-sm hover:underline">Presentation</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-sky-900 text-sky-900 text-sm font-bold hover:bg-sky-100 transition-colors">
              Subscribe to Investor Calendar →
            </button>
          </div>
        </div>
      </section>

      {/* SHAREHOLDER & INVESTOR RESOURCES */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-400 text-2xl font-semibold mb-4">Shareholder & Investor Resources</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-fuchsia-700 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 border-t-4 border-emerald-400">
              <h3 className="text-emerald-400 text-xl font-bold mb-8">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div className="border-b border-zinc-100 pb-4">
                  <h4 className="text-emerald-400 font-bold mb-2">What is Zoiko's dividend policy?</h4>
                  <p className="text-stone-500 text-sm">We maintain a quarterly dividend with a target payout ratio of 25-30% of net income.</p>
                </div>
                <div className="border-b border-zinc-100 pb-4">
                  <h4 className="text-emerald-400 font-bold mb-2">Does Zoiko offer ADRs?</h4>
                  <p className="text-stone-500 text-sm">Yes, ADRs are available for international investors through major custodian banks.</p>
                </div>
              </div>
            </div>

            {/* Shareholder Services */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 border-t-4 border-emerald-400">
              <h3 className="text-emerald-400 text-xl font-bold mb-8">Shareholder Services</h3>
              <div className="space-y-4">
                {['Transfer Agent Information', 'Proxy Materials', 'Tax Forms & Documents', 'Stock Certificate Services'].map(item => (
                  <div key={item} className="p-4 rounded-md border border-zinc-100 cursor-pointer hover:border-emerald-400 transition-colors">
                    <p className="text-emerald-400 font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Investor Education */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 border-t-4 border-emerald-400">
              <h3 className="text-emerald-400 text-xl font-bold mb-8">Investor Education</h3>
              <div className="space-y-4">
                {['IR Glossary', 'How to Invest in Zoiko', 'Understanding Our Business', 'Investment Calculator'].map(item => (
                  <div key={item} className="p-4 rounded-md border border-zinc-100 cursor-pointer hover:border-emerald-400 transition-colors">
                    <p className="text-emerald-400 font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR NEWSROOM */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sky-900 text-2xl font-semibold mb-4">Investor Newsroom</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-fuchsia-700 mx-auto rounded"></div>
          </div>
          
          <div className="space-y-10">
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 border-l-4 border-sky-900 flex flex-col justify-between min-h-[13rem]">
              <div>
                <p className="text-sky-900 text-sm font-bold mb-2">March 15, 2025</p>
                <h3 className="text-sky-900 text-xl font-bold mb-4">Zoiko Reports Record Q4 2024 Results</h3>
                <p className="text-stone-500 text-base mb-6">Revenue growth of 45% year-over-year driven by strong AI and cloud adoption across global markets.</p>
              </div>
              <button className="text-sky-900 font-bold text-base hover:underline text-left">
                Read Full Release →
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 border-l-4 border-sky-900 flex flex-col justify-between min-h-[13rem]">
              <div>
                <p className="text-sky-900 text-sm font-bold mb-2">March 8, 2025</p>
                <h3 className="text-sky-900 text-xl font-bold mb-4">Board Authorizes $2B Share Repurchase Program</h3>
                <p className="text-stone-500 text-base mb-6">New authorization reflects confidence in long-term growth strategy and commitment to shareholder returns.</p>
              </div>
              <button className="text-sky-900 font-bold text-base hover:underline text-left">
                Read Full Release →
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-8 border-l-4 border-sky-900 flex flex-col justify-between min-h-[13rem]">
              <div>
                <p className="text-sky-900 text-sm font-bold mb-2">February 28, 2025</p>
                <h3 className="text-sky-900 text-xl font-bold mb-4">Zoiko Announces $500M Green Bond Issuance</h3>
                <p className="text-stone-500 text-base mb-6">Proceeds will fund renewable energy infrastructure and sustainable technology initiatives.</p>
              </div>
              <button className="text-sky-900 font-bold text-base hover:underline text-left">
                Read Full Release →
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-sky-900 text-sky-900 text-lg font-bold hover:bg-sky-100 transition-colors">
              View All Investor News →
            </button>
          </div>
        </div>
      </section>

      {/* INVESTOR RELATIONS CONTACTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sky-900 text-3xl font-semibold mb-4">Investor Relations Contacts</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-fuchsia-700 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Global IR Officer */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] p-10 border-t-4 border-sky-900 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-6 flex justify-center items-center">
                <img className="w-full h-full object-cover" src="/images/investor/dev.jpg" alt="Dr. Jennifer Walsh" />
              </div>
              <h3 className="text-sky-900 text-2xl font-bold mb-2">Dr. Jennifer Walsh</h3>
              <p className="text-sky-900 font-bold mb-4">Global IR Officer</p>
              <p className="text-stone-500 mb-2">investor.relations@zoiko.com</p>
              <p className="text-stone-500">+1 (916) 555-0123</p>
            </div>

            {/* Regional IR Teams */}
            <div className="flex flex-col justify-center">
              <h3 className="text-sky-900 text-2xl font-bold mb-8">Regional IR Teams</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 border-l-[4px] border-l-sky-900">
                  <h4 className="text-sky-900 font-bold text-lg mb-1">EMEA</h4>
                  <p className="text-stone-500">emea.ir@zoiko.com</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 border-l-[4px] border-l-sky-900">
                  <h4 className="text-sky-900 font-bold text-lg mb-1">APAC</h4>
                  <p className="text-stone-500">apac.ir@zoiko.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO TRANSFORM YOUR BUSINESS? */}
      <section className="py-24 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-zinc-800 text-3xl font-bold mb-6">
                Ready to Transform<br />Your Business?
              </h2>
              <p className="text-neutral-600 text-lg mb-12 max-w-md">
                Connect with our global team of experts to discuss your digital
                transformation journey and discover how we can accelerate your
                success.
              </p>

              <div className="space-y-8">
                {/* Email Us */}
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-sky-900 rounded-xl flex justify-center items-center mr-6 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-zinc-800 text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-zinc-400 text-base mb-1">hello@zws.com</p>
                    <p className="text-zinc-500 text-sm">Response within 4 hours</p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-sky-900 rounded-xl flex justify-center items-center mr-6 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-zinc-800 text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-zinc-400 text-base mb-1">+1 (555) 123-4567</p>
                    <p className="text-zinc-500 text-sm">24/7 Support Available</p>
                  </div>
                </div>

                {/* Live Chat */}
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-sky-900 rounded-xl flex justify-center items-center mr-6 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-zinc-800 text-lg font-semibold mb-1">Live Chat</h3>
                    <p className="text-zinc-400 text-base mb-1">Instant Support</p>
                    <p className="text-zinc-500 text-sm">Online now</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-10">
              <form className="space-y-6">
                <div>
                  <label className="block text-zinc-800 text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full h-12 bg-neutral-50 rounded-lg border border-stone-200 px-4 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-800 text-sm font-semibold mb-2">Business Email</label>
                  <input
                    type="email"
                    className="w-full h-12 bg-neutral-50 rounded-lg border border-stone-200 px-4 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-800 text-sm font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full h-12 bg-neutral-50 rounded-lg border border-stone-200 px-4 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-800 text-sm font-semibold mb-2">Service Interest</label>
                  <select defaultValue="" className="w-full h-14 bg-neutral-50 rounded-lg border border-stone-200 px-4 text-neutral-400 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors appearance-none">
                    <option value="" disabled>Select a service</option>
                    <option value="cloud">Cloud Infrastructure</option>
                    <option value="ai">AI Solutions</option>
                    <option value="compliance">Compliance Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-800 text-sm font-semibold mb-2">Project Budget</label>
                  <select defaultValue="" className="w-full h-14 bg-neutral-50 rounded-lg border border-stone-200 px-4 text-neutral-400 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors appearance-none">
                    <option value="" disabled>Select budget range</option>
                    <option value="under_50k">Under $50,000</option>
                    <option value="50k_250k">$50,000 - $250,000</option>
                    <option value="250k_1m">$250,000 - $1,000,000</option>
                    <option value="over_1m">Over $1,000,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-800 text-sm font-semibold mb-2">Project Details</label>
                  <textarea
                    className="w-full h-28 bg-neutral-50 rounded-lg border border-stone-200 p-4 text-neutral-600 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors resize-none placeholder-neutral-400"
                    placeholder="Tell us about your project requirements, timeline, and objectives..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="px-8 py-4 bg-gradient-to-r from-fuchsia-700 to-sky-900 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition-opacity">
                    Start Your Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
