import React from 'react';
import {
  Globe2, TrendingUp, Lightbulb, Users,
  Download, PlayCircle, BarChart3,
  ChevronRight, CheckCircle2, FileText, ArrowRight,
  Mail, Phone, MessageCircle
} from 'lucide-react';

export default function InvestorRelationsPage() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 text-slate-800 dark:text-white transition-colors duration-300 font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 dark:from-slate-950 dark:via-teal-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Invest with Confidence | Partner in Global Growth
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Zoiko Digital delivers resilient growth, governance integrity, and long-term value across cloud, AI, and compliance solutions.
          </p>
        </div>
      </section>

      {/* INVESTMENT THESIS */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-sky-900 dark:text-teal-400 text-2xl md:text-3xl font-semibold mb-4">
              Investment Thesis
            </h2>
            <p className="text-stone-500 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-4xl mx-auto">
              A Tier-1 global digital transformation platform spanning AI, telecom-grade infrastructure, compliance, and fintech innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 flex flex-col items-center text-center transition hover:shadow-md">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">🌍</div>
              <h3 className="text-sky-900 dark:text-white text-3xl md:text-4xl font-bold mb-2">50+</h3>
              <p className="text-sky-900 dark:text-teal-400 text-base md:text-lg font-bold mb-1">Countries</p>
              <p className="text-stone-500 dark:text-gray-400 text-sm">Global Reach</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 flex flex-col items-center text-center transition hover:shadow-md">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">📈</div>
              <h3 className="text-sky-900 dark:text-white text-3xl md:text-4xl font-bold mb-2">145%</h3>
              <p className="text-sky-900 dark:text-teal-400 text-base md:text-lg font-bold mb-1">YoY Growth</p>
              <p className="text-stone-500 dark:text-gray-400 text-sm">Annual Revenue</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 flex flex-col items-center text-center transition hover:shadow-md">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">💡</div>
              <h3 className="text-sky-900 dark:text-white text-3xl md:text-4xl font-bold mb-2">250+</h3>
              <p className="text-sky-900 dark:text-teal-400 text-base md:text-lg font-bold mb-1">Patents Filed</p>
              <p className="text-stone-500 dark:text-gray-400 text-sm">Innovation Pipeline</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 flex flex-col items-center text-center transition hover:shadow-md">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">👥</div>
              <h3 className="text-sky-900 dark:text-white text-3xl md:text-4xl font-bold mb-2">15,000</h3>
              <p className="text-sky-900 dark:text-teal-400 text-base md:text-lg font-bold mb-1">Employees</p>
              <p className="text-stone-500 dark:text-gray-400 text-sm">6 Continents</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIAL PERFORMANCE & FILINGS */}
      <section className="py-16 md:py-20 bg-emerald-50/50 dark:bg-gray-800/10 border-y border-emerald-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-emerald-500 dark:text-emerald-400 text-2xl font-semibold mb-6">
              Financial Performance & Filings
            </h2>
            <div className="flex justify-center border-b border-slate-200 dark:border-gray-700">
              <div className="px-6 md:px-8 py-3 border-b-[3px] border-emerald-400">
                <span className="text-emerald-500 dark:text-emerald-400 text-sm md:text-base font-semibold">Earnings & Reports</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Q4 2024 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 border-l-4 border-emerald-400 flex flex-col justify-between gap-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <h3 className="text-emerald-500 dark:text-emerald-400 text-lg md:text-xl font-bold">Q4 2024 Earnings Report</h3>
                <p className="text-stone-400 dark:text-gray-400 text-xs md:text-sm">March 15, 2025</p>
              </div>
              
              <div className="flex flex-wrap gap-8 sm:gap-16">
                <div>
                  <p className="text-stone-400 dark:text-gray-400 text-xs md:text-sm mb-1">Revenue</p>
                  <p className="text-emerald-500 dark:text-white text-2xl md:text-3xl font-bold">$2.4B</p>
                  <p className="text-emerald-400 text-xs md:text-sm font-bold">+45% YoY</p>
                </div>
                <div>
                  <p className="text-stone-400 dark:text-gray-400 text-xs md:text-sm mb-1">EPS</p>
                  <p className="text-emerald-500 dark:text-white text-2xl md:text-3xl font-bold">$3.85</p>
                  <p className="text-emerald-400 text-xs md:text-sm font-bold">+52% YoY</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-100 dark:border-gray-700 pt-4 text-xs md:text-sm font-bold">
                <button className="text-emerald-500 dark:text-emerald-400 hover:underline">Download PDF</button>
                <button className="text-emerald-500 dark:text-emerald-400 hover:underline">Webcast Replay</button>
                <button className="text-emerald-500 dark:text-emerald-400 hover:underline">Presentation</button>
              </div>
            </div>

            {/* Annual Report */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 border-l-4 border-emerald-400 flex flex-col justify-between gap-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <h3 className="text-emerald-500 dark:text-emerald-400 text-lg md:text-xl font-bold">Annual Report 2024</h3>
                <p className="text-stone-400 dark:text-gray-400 text-xs md:text-sm">February 28, 2025</p>
              </div>
              
              <div className="flex flex-wrap gap-8 sm:gap-16">
                <div>
                  <p className="text-stone-400 dark:text-gray-400 text-xs md:text-sm mb-1">Annual Revenue</p>
                  <p className="text-emerald-500 dark:text-white text-2xl md:text-3xl font-bold">$8.7B</p>
                  <p className="text-emerald-400 text-xs md:text-sm font-bold">+35% YoY</p>
                </div>
                <div>
                  <p className="text-stone-400 dark:text-gray-400 text-xs md:text-sm mb-1">Free Cash Flow</p>
                  <p className="text-emerald-500 dark:text-white text-2xl md:text-3xl font-bold">$2.1B</p>
                  <p className="text-emerald-400 text-xs md:text-sm font-bold">+28% YoY</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-100 dark:border-gray-700 pt-4 text-xs md:text-sm font-bold">
                <button className="text-emerald-500 dark:text-emerald-400 hover:underline">Download PDF</button>
                <button className="text-emerald-500 dark:text-emerald-400 hover:underline">Interactive Report</button>
                <button className="text-emerald-500 dark:text-emerald-400 hover:underline">Key Metrics</button>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-12 text-center">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 h-12 md:h-14 rounded-lg border-2 border-emerald-400 text-emerald-500 dark:text-emerald-400 text-sm md:text-base font-bold hover:bg-emerald-400 hover:text-white dark:hover:bg-emerald-500 transition-colors">
              View All Financials & Filings &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* STOCK INFORMATION */}
      <section className="py-16 md:py-20 bg-sky-50/50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-sky-900 dark:text-white text-2xl font-semibold mb-4">Stock Information</h2>
            <div className="w-20 h-1 bg-sky-900 dark:bg-teal-500 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Stock Price Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 border-l-4 border-sky-900 dark:border-teal-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-sky-900 dark:text-white text-2xl md:text-3xl font-bold tracking-tight">ZOIKO</h3>
                  <span className="px-2.5 py-0.5 bg-sky-50 dark:bg-gray-700 text-sky-900 dark:text-teal-400 text-xs font-bold rounded-full">NASDAQ</span>
                </div>
                <p className="text-sky-900 dark:text-white text-4xl md:text-5xl font-bold mb-4 tracking-tight">$245.67</p>
                <p className="text-emerald-500 dark:text-emerald-400 text-base md:text-lg font-bold mb-6">+$12.45 (+5.34%)</p>
              </div>
              <p className="text-stone-400 dark:text-gray-400 text-xs">Last updated: 4:00 PM EST</p>
            </div>

            {/* Chart Area */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-4 md:p-6 lg:col-span-2 flex flex-col justify-between">
              <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                {['1D', '1M', '6M', '1Y', '5Y', 'MAX'].map((range, idx) => (
                  <button
                    key={range}
                    className={`px-3 md:px-4 h-8 rounded-md text-xs md:text-sm font-semibold border transition-all ${idx === 0
                        ? 'bg-sky-900 border-sky-900 dark:bg-teal-600 dark:border-teal-600 text-white shadow-sm'
                        : 'border-neutral-200 dark:border-gray-700 text-stone-500 dark:text-gray-400 hover:border-sky-900 dark:hover:border-teal-500 hover:text-sky-900 dark:hover:text-white'
                      }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
              {/* Responsive SVG Chart Line */}
              <div className="w-full h-48 md:h-64 bg-neutral-50 dark:bg-gray-900/50 rounded-xl border border-slate-100 dark:border-gray-800 flex items-center justify-center relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full p-4" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path 
                    d="M 0,80 C 20,70 35,45 45,45 C 55,45 60,60 65,60 C 70,60 80,20 90,20 C 95,20 100,25 100,25" 
                    fill="none" 
                    stroke="#0ea5e9" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Dividends & Splits */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8">
              <h3 className="text-sky-900 dark:text-white text-xl md:text-2xl font-bold mb-6">Dividends & Splits</h3>
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex justify-between border-b border-slate-100 dark:border-gray-700 pb-4">
                  <span className="text-stone-400 dark:text-gray-400 font-medium">Current Dividend</span>
                  <span className="text-sky-900 dark:text-teal-400 font-bold text-right">$2.40/share annually</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-gray-700 pb-4">
                  <span className="text-stone-400 dark:text-gray-400 font-medium">Dividend Yield</span>
                  <span className="text-sky-900 dark:text-teal-400 font-bold text-right">0.98%</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-stone-400 dark:text-gray-400 font-medium">Last Split</span>
                  <span className="text-sky-900 dark:text-teal-400 font-bold text-right">2:1 (June 2023)</span>
                </div>
              </div>
            </div>

            {/* Analyst Coverage */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8">
              <h3 className="text-sky-900 dark:text-white text-xl md:text-2xl font-bold mb-6">Analyst Coverage</h3>
              <div className="space-y-3 text-xs md:text-sm">
                <div className="flex justify-between items-center bg-slate-50 dark:bg-gray-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-gray-800">
                  <span className="text-sky-900 dark:text-white font-bold">Goldman Sachs</span>
                  <span className="px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 font-bold rounded-full">Buy</span>
                  <span className="text-sky-900 dark:text-teal-400 font-bold">$280</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 dark:bg-gray-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-gray-800">
                  <span className="text-sky-900 dark:text-white font-bold">Morgan Stanley</span>
                  <span className="px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 font-bold rounded-full">Buy</span>
                  <span className="text-sky-900 dark:text-teal-400 font-bold">$275</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 dark:bg-gray-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-gray-800">
                  <span className="text-sky-900 dark:text-white font-bold">JP Morgan</span>
                  <span className="px-2.5 py-0.5 bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 font-bold rounded-full">Hold</span>
                  <span className="text-sky-900 dark:text-teal-400 font-bold">$250</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE GOVERNANCE */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sky-900 dark:text-white text-2xl md:text-3xl font-semibold mb-4">Corporate Governance</h2>
            <div className="w-20 h-1 bg-sky-900 dark:bg-teal-500 mx-auto rounded mb-10"></div>
            <h3 className="text-sky-900 dark:text-teal-400 text-xl md:text-2xl font-bold">Board of Directors</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {[
              { name: 'Lennox McLeod', role: 'Executive Chairman', tenure: '15 years', committee: 'Risk & ESG Committee', image: '/images/investor/dev3.jpg' },
              { name: 'Sarah Chen', role: 'Independent Director', tenure: '8 years', committee: 'Audit Committee (Chair)' },
              { name: 'Marcus Rodriguez', role: 'Independent Director', tenure: '6 years', committee: 'Compensation Committee', image: '/images/investor/dev2.jpg' },
            ].map((director) => (
              <div key={director.name} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 flex flex-col items-center text-center transition hover:shadow-md">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-100 dark:bg-gray-900 border-2 border-[#207373] mb-4 flex items-center justify-center overflow-hidden p-1">
                  {director.image ? (
                    <img className="w-full h-full rounded-full object-cover" src={director.image} alt={director.name} />
                  ) : (
                    <Users className="w-8 h-8 text-slate-400" />
                  )}
                </div>
                <h4 className="text-sky-900 dark:text-white text-lg md:text-xl font-bold mb-1">{director.name}</h4>
                <p className="text-[#207373] dark:text-teal-400 font-semibold text-sm md:text-base mb-3">{director.role}</p>
                <p className="text-stone-400 dark:text-gray-400 text-xs md:text-sm mb-1">Tenure: {director.tenure}</p>
                <p className="text-stone-500 dark:text-gray-300 text-xs md:text-sm font-medium">{director.committee}</p>
              </div>
            ))}
          </div>

          <h3 className="text-sky-900 dark:text-white text-xl md:text-2xl font-bold text-center mb-8">Committee Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {[
              { name: 'Audit Committee', desc: 'Oversees financial reporting, internal controls, and external audit processes.' },
              { name: 'Risk & ESG Committee', desc: 'Monitors enterprise risk management and ESG strategy implementation.' },
              { name: 'Compensation Committee', desc: 'Determines executive compensation and equity incentive programs.' },
              { name: 'Nominations Committee', desc: 'Identifies and recommends director candidates and succession planning.' }
            ].map((committee) => (
              <div key={committee.name} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-sky-900 dark:text-white text-lg font-bold mb-3">{committee.name}</h4>
                  <p className="text-stone-500 dark:text-gray-300 text-sm leading-relaxed mb-4">{committee.desc}</p>
                </div>
                <button className="text-[#207373] dark:text-teal-400 font-bold text-sm hover:underline self-start">View Charter &rarr;</button>
              </div>
            ))}
          </div>

          <h3 className="text-sky-900 dark:text-white text-xl md:text-2xl font-bold text-center mb-8">Governance Policies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {['Code of Conduct', 'Anti-Bribery Policy', 'Whistleblower Policy', 'Human Rights Policy', 'Supplier Code', 'Responsible AI Standard'].map((policy) => (
              <div key={policy} className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 p-4 text-center flex items-center justify-center shadow-xs">
                <span className="text-sky-900 dark:text-gray-200 text-xs md:text-sm font-semibold">{policy}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 h-12 md:h-14 rounded-lg border-2 border-sky-900 dark:border-teal-500 text-sky-900 dark:text-teal-400 text-sm md:text-base font-bold hover:bg-sky-900 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-colors">
              View Corporate Governance Library
            </button>
          </div>
        </div>
      </section>

      {/* ESG & RESPONSIBLE GROWTH */}
      <section className="py-16 md:py-20 bg-sky-50/50 dark:bg-gray-800/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sky-900 dark:text-white text-2xl md:text-3xl font-semibold mb-4">ESG & Responsible Growth</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-fuchsia-700 mx-auto rounded mb-6"></div>
            <p className="text-stone-500 dark:text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
              Financial materiality and long-term value creation through sustainable business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {[
              { name: 'Renewable Energy', val: '87%', sub: 'of total energy consumption' },
              { name: 'Carbon Emissions', val: '-35%', sub: 'Scope 1 & 2 reduction (vs 2020)' },
              { name: 'Pay Equity', val: '98%', sub: 'gender pay parity achieved' },
              { name: 'AI Bias Testing', val: '100%', sub: 'models pass ethics review' },
            ].map((metric) => (
              <div key={metric.name} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 flex flex-col items-center text-center relative pt-12">
                <span className="absolute top-4 right-4 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-2xs md:text-xs font-bold rounded flex items-center gap-1 border border-emerald-200/50 dark:border-emerald-800/50">
                  <CheckCircle2 className="w-3 h-3" /> Audited
                </span>
                <h3 className="text-stone-400 dark:text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-3">{metric.name}</h3>
                <p className="text-emerald-500 dark:text-emerald-400 text-4xl md:text-5xl font-bold mb-2">{metric.val}</p>
                <p className="text-stone-500 dark:text-gray-300 text-xs md:text-sm leading-relaxed">{metric.sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 mb-12 max-w-3xl mx-auto text-center">
            <h3 className="text-sky-900 dark:text-white text-lg md:text-xl font-bold mb-6">Independent Assurance</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <div className="px-5 py-2 bg-slate-50 dark:bg-gray-900 rounded-lg border border-slate-200 dark:border-gray-700 text-sky-900 dark:text-white font-bold text-base">PwC</div>
              <div className="px-5 py-2 bg-slate-50 dark:bg-gray-900 rounded-lg border border-slate-200 dark:border-gray-700 text-sky-900 dark:text-white font-bold text-base">EY</div>
              <div className="px-5 py-2 bg-slate-50 dark:bg-gray-900 rounded-lg border border-slate-200 dark:border-gray-700 text-sky-900 dark:text-white font-bold text-base">Deloitte</div>
            </div>
            <p className="text-stone-400 dark:text-gray-400 text-xs">ESG metrics independently verified by leading global audit firms</p>
          </div>

          <div className="text-center">
            <button className="w-full sm:w-auto inline-flex items-center justify-center h-12 md:h-14 px-8 rounded-lg border-2 border-sky-900 dark:border-teal-500 text-sky-900 dark:text-teal-400 text-sm md:text-base font-bold hover:bg-sky-100 dark:hover:bg-gray-800 transition-colors">
              Download ESG Investor Brief <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* INVESTOR EVENTS & ENGAGEMENT */}
      <section className="py-16 md:py-20 bg-fuchsia-50/30 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sky-900 dark:text-white text-2xl font-semibold mb-4">Investor Events & Engagement</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-fuchsia-700 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Upcoming Events */}
            <div className="lg:col-span-3">
              <h3 className="text-sky-900 dark:text-white text-xl font-bold mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center p-5 border-l-4 border-[#207373]">
                  <div className="bg-[#207373] text-white flex sm:flex-col justify-center items-center gap-2 sm:gap-0 w-full sm:w-20 h-12 sm:h-24 rounded-xl shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <span className="text-xl sm:text-2xl font-bold">28</span>
                    <span className="text-xs font-semibold uppercase tracking-wider">Mar</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sky-900 dark:text-white font-bold text-base md:text-lg mb-0.5">Q1 2025 Earnings Call</h4>
                    <p className="text-[#207373] dark:text-teal-400 font-bold text-xs md:text-sm mb-2">4:30 PM EST</p>
                    <p className="text-stone-500 dark:text-gray-300 text-xs md:text-sm leading-relaxed">Quarterly financial results and management commentary</p>
                  </div>
                  <div className="flex sm:flex-col gap-3 ml-0 sm:ml-6 mt-4 sm:mt-0 items-end shrink-0 w-full sm:w-auto text-xs md:text-sm font-bold border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-gray-700">
                    <button className="text-[#207373] dark:text-teal-400 hover:underline">Register</button>
                    <button className="text-[#207373] dark:text-teal-400 hover:underline">Add to Calendar</button>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center p-5 border-l-4 border-[#207373]">
                  <div className="bg-[#207373] text-white flex sm:flex-col justify-center items-center gap-2 sm:gap-0 w-full sm:w-20 h-12 sm:h-24 rounded-xl shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <span className="text-xl sm:text-2xl font-bold">15</span>
                    <span className="text-xs font-semibold uppercase tracking-wider">Apr</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sky-900 dark:text-white font-bold text-base md:text-lg mb-0.5">Investor Day 2025</h4>
                    <p className="text-[#207373] dark:text-teal-400 font-bold text-xs md:text-sm mb-2">9:00 AM EST</p>
                    <p className="text-stone-500 dark:text-gray-300 text-xs md:text-sm leading-relaxed">Annual strategic overview and long-term outlook</p>
                  </div>
                  <div className="flex sm:flex-col gap-3 ml-0 sm:ml-6 mt-4 sm:mt-0 items-end shrink-0 w-full sm:w-auto text-xs md:text-sm font-bold border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-gray-700">
                    <button className="text-[#207373] dark:text-teal-400 hover:underline">Register</button>
                    <button className="text-[#207373] dark:text-teal-400 hover:underline">Add to Calendar</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Events */}
            <div className="lg:col-span-2">
              <h3 className="text-sky-900 dark:text-white text-xl font-bold mb-6">Past Events</h3>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-sky-900 dark:text-white font-bold text-base md:text-lg mb-1">Q4 2024 Earnings Call</h4>
                  <p className="text-stone-400 dark:text-gray-400 text-xs md:text-sm mb-4">March 15, 2025</p>
                </div>
                <div className="flex flex-col gap-2.5 items-start text-xs md:text-sm font-bold border-t dark:border-gray-700 border-slate-100 pt-4 w-full">
                  <button className="text-[#207373] dark:text-teal-400 hover:underline">Webcast Replay &rarr;</button>
                  <button className="text-[#207373] dark:text-teal-400 hover:underline">Transcript &rarr;</button>
                  <button className="text-[#207373] dark:text-teal-400 hover:underline">Presentation &rarr;</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-12 text-center">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 rounded-lg border-2 border-sky-900 dark:border-teal-500 text-sky-900 dark:text-teal-400 text-xs md:text-sm font-bold hover:bg-sky-100 dark:hover:bg-gray-800 transition-colors">
              Subscribe to Investor Calendar &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* SHAREHOLDER & INVESTOR RESOURCES */}
      <section className="py-16 md:py-20 bg-emerald-50/50 dark:bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-emerald-500 dark:text-emerald-400 text-2xl font-semibold mb-4">Shareholder & Investor Resources</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-fuchsia-700 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* FAQ */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 border-t-4 border-emerald-400">
              <h3 className="text-emerald-500 dark:text-emerald-400 text-lg md:text-xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6 text-xs md:text-sm">
                <div className="border-b border-slate-100 dark:border-gray-700 pb-4">
                  <h4 className="text-sky-900 dark:text-white font-bold mb-1.5">What is Zoiko's dividend policy?</h4>
                  <p className="text-stone-500 dark:text-gray-300 leading-relaxed">We maintain a quarterly dividend with a target payout ratio of 25-30% of net income.</p>
                </div>
                <div className="pb-2">
                  <h4 className="text-sky-900 dark:text-white font-bold mb-1.5">Does Zoiko offer ADRs?</h4>
                  <p className="text-stone-500 dark:text-gray-300 leading-relaxed">Yes, ADRs are available for international investors through major custodian banks.</p>
                </div>
              </div>
            </div>

            {/* Shareholder Services */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 border-t-4 border-emerald-400">
              <h3 className="text-emerald-500 dark:text-emerald-400 text-lg md:text-xl font-bold mb-6">Shareholder Services</h3>
              <div className="space-y-3 text-xs md:text-sm">
                {['Transfer Agent Information', 'Proxy Materials', 'Tax Forms & Documents', 'Stock Certificate Services'].map(item => (
                  <div key={item} className="p-3.5 rounded-xl border border-slate-100 dark:border-gray-700 cursor-pointer hover:border-emerald-400 dark:hover:border-emerald-500 transition-colors bg-slate-50/50 dark:bg-gray-900/50">
                    <p className="text-sky-900 dark:text-gray-200 font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Investor Education */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 border-t-4 border-emerald-400">
              <h3 className="text-emerald-500 dark:text-emerald-400 text-lg md:text-xl font-bold mb-6">Investor Education</h3>
              <div className="space-y-3 text-xs md:text-sm">
                {['IR Glossary', 'How to Invest in Zoiko', 'Understanding Our Business', 'Investment Calculator'].map(item => (
                  <div key={item} className="p-3.5 rounded-xl border border-slate-100 dark:border-gray-700 cursor-pointer hover:border-emerald-400 dark:hover:border-emerald-500 transition-colors bg-slate-50/50 dark:bg-gray-900/50">
                    <p className="text-sky-900 dark:text-gray-200 font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR NEWSROOM */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sky-900 dark:text-white text-2xl font-semibold mb-4">Investor Newsroom</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-fuchsia-700 mx-auto rounded"></div>
          </div>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 border-l-4 border-sky-900 dark:border-teal-500 flex flex-col justify-between transition hover:shadow-md">
              <div>
                <p className="text-sky-900 dark:text-teal-400 text-xs md:text-sm font-bold mb-1.5">March 15, 2025</p>
                <h3 className="text-sky-900 dark:text-white text-lg md:text-xl font-bold mb-3">Zoiko Reports Record Q4 2024 Results</h3>
                <p className="text-stone-500 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">Revenue growth of 45% year-over-year driven by strong AI and cloud adoption across global markets.</p>
              </div>
              <button className="text-sky-900 dark:text-teal-400 font-bold text-sm md:text-base hover:underline text-left self-start">
                Read Full Release &rarr;
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 border-l-4 border-sky-900 dark:border-teal-500 flex flex-col justify-between transition hover:shadow-md">
              <div>
                <p className="text-sky-900 dark:text-teal-400 text-xs md:text-sm font-bold mb-1.5">March 8, 2025</p>
                <h3 className="text-sky-900 dark:text-white text-lg md:text-xl font-bold mb-3">Board Authorizes $2B Share Repurchase Program</h3>
                <p className="text-stone-500 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">New authorization reflects confidence in long-term growth strategy and commitment to shareholder returns.</p>
              </div>
              <button className="text-sky-900 dark:text-teal-400 font-bold text-sm md:text-base hover:underline text-left self-start">
                Read Full Release &rarr;
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8 border-l-4 border-sky-900 dark:border-teal-500 flex flex-col justify-between transition hover:shadow-md">
              <div>
                <p className="text-sky-900 dark:text-teal-400 text-xs md:text-sm font-bold mb-1.5">February 28, 2025</p>
                <h3 className="text-sky-900 dark:text-white text-lg md:text-xl font-bold mb-3">Zoiko Announces $500M Green Bond Issuance</h3>
                <p className="text-stone-500 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">Proceeds will fund renewable energy infrastructure and sustainable technology initiatives.</p>
              </div>
              <button className="text-sky-900 dark:text-teal-400 font-bold text-sm md:text-base hover:underline text-left self-start">
                Read Full Release &rarr;
              </button>
            </div>
          </div>

          <div className="mt-10 md:mt-12 text-center">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 h-12 md:h-14 rounded-lg border-2 border-sky-900 dark:border-teal-500 text-sky-900 dark:text-teal-400 text-sm md:text-base font-bold hover:bg-sky-100 dark:hover:bg-gray-800 transition-colors">
              View All Investor News &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* INVESTOR RELATIONS CONTACTS */}
      <section className="py-16 md:py-20 bg-sky-50/50 dark:bg-gray-800/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sky-900 dark:text-white text-2xl md:text-3xl font-semibold mb-4">Investor Relations Contacts</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-fuchsia-700 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Global IR Officer */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-8 flex flex-col items-center text-center justify-center">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900 mb-6 border-2 border-sky-900 dark:border-teal-500 p-1">
                <img className="w-full h-full object-cover rounded-full" src="/images/investor/dev.jpg" alt="Dr. Jennifer Walsh" />
              </div>
              <h3 className="text-sky-900 dark:text-white text-xl md:text-2xl font-bold mb-1">Dr. Jennifer Walsh</h3>
              <p className="text-teal-700 dark:text-teal-400 font-bold text-sm md:text-base mb-4">Global IR Officer</p>
              <a href="mailto:investor.relations@zoiko.com" className="text-stone-500 dark:text-gray-300 text-sm hover:underline block mb-1">investor.relations@zoiko.com</a>
              <a href="tel:+19165550123" className="text-stone-500 dark:text-gray-300 text-sm hover:underline block">+1 (916) 555-0123</a>
            </div>

            {/* Regional IR Teams */}
            <div className="flex flex-col justify-center gap-4">
              <h3 className="text-sky-900 dark:text-white text-lg md:text-xl font-bold hidden md:block">Regional IR Teams</h3>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-gray-700 border-l-4 border-l-sky-900 dark:border-l-teal-500">
                <h4 className="text-sky-900 dark:text-white font-bold text-base md:text-lg mb-1">EMEA</h4>
                <a href="mailto:emea.ir@zoiko.com" className="text-stone-500 dark:text-teal-400 text-sm hover:underline">emea.ir@zoiko.com</a>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-gray-700 border-l-4 border-l-sky-900 dark:border-l-teal-500">
                <h4 className="text-sky-900 dark:text-white font-bold text-base md:text-lg mb-1">APAC</h4>
                <a href="mailto:apac.ir@zoiko.com" className="text-stone-500 dark:text-teal-400 text-sm hover:underline">apac.ir@zoiko.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORM CONTACT AND FORM CONTEXT */}
      <section className="w-full bg-zinc-100 py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: DETAILS */}
          <div className="flex flex-col gap-10 pt-4 max-w-xl mx-auto lg:mx-0">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h2 className="text-zinc-800 dark:text-white text-2xl lg:text-3xl font-bold leading-snug">
                Ready to Transform Your Business?
              </h2>
              <p className="text-neutral-600 dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed">
                Connect with our global team of experts to discuss your digital transformation journey and discover how we can accelerate your success.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Email Icon Block */}
              <div className="flex items-start gap-4 md:gap-6 bg-white dark:bg-gray-800 p-4 rounded-2xl border border-slate-100 dark:border-gray-800 shadow-2xs">
                <div className="w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center shrink-0 text-white text-lg font-bold">
                  ✉️
                </div>
                <div className="flex flex-col">
                  <h4 className="text-zinc-800 dark:text-white text-base font-semibold">Email Us</h4>
                  <a href="mailto:hello@zoikodigital.com" className="text-zinc-500 dark:text-teal-400 text-sm md:text-base hover:underline mt-0.5">
                    hello@zoikodigital.com
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs mt-1">Response within 4 hours</span>
                </div>
              </div>

              {/* Phone Icon Block */}
              <div className="flex items-start gap-4 md:gap-6 bg-white dark:bg-gray-800 p-4 rounded-2xl border border-slate-100 dark:border-gray-800 shadow-2xs">
                <div className="w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center shrink-0 text-white text-lg font-bold">
                  📞
                </div>
                <div className="flex flex-col">
                  <h4 className="text-zinc-800 dark:text-white text-base font-semibold">Call Us</h4>
                  <a href="tel:+15551234567" className="text-zinc-500 dark:text-teal-400 text-sm md:text-base hover:underline mt-0.5">
                    +1 (555) 123-4567
                  </a>
                  <span className="text-zinc-400 dark:text-gray-400 text-xs mt-1">24/7 Support Available</span>
                </div>
              </div>

              {/* Chat Icon Block */}
              <div className="flex items-start gap-4 md:gap-6 bg-white dark:bg-gray-800 p-4 rounded-2xl border border-slate-100 dark:border-gray-800 shadow-2xs">
                <div className="w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center shrink-0 text-white text-lg font-bold">
                  💬
                </div>
                <div className="flex flex-col">
                  <h4 className="text-zinc-800 dark:text-white text-base font-semibold">Live Chat</h4>
                  <span className="text-zinc-500 dark:text-teal-400 text-sm md:text-base mt-0.5">Instant Support</span>
                  <span className="text-emerald-500 text-xs font-bold mt-1">Online now</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM */}
          <div className="bg-white dark:bg-gray-800 rounded-[20px] p-6 md:p-8 border border-neutral-300 dark:border-gray-700 w-full max-w-xl mx-auto lg:ml-auto shadow-sm transition-colors duration-300">
            <form className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">Full Name</label>
                <input
                  type="text"
                  className="w-full h-11 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">Business Email</label>
                <input
                  type="email"
                  className="w-full h-11 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">Company</label>
                <input
                  type="text"
                  className="w-full h-11 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">Service Interest</label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="web">Web Development</option>
                    <option value="compliance">Compliance</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-zinc-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">Project Budget</label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                  >
                    <option value="" disabled>Select budget range</option>
                    <option value="small">Under $10,000</option>
                    <option value="medium">$10,000 - $50,000</option>
                    <option value="large">$50,000+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-zinc-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold">Project Details</label>
                <textarea
                  rows={3}
                  className="w-full p-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all text-zinc-800 dark:text-white placeholder-neutral-400 text-sm"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-2 w-full sm:w-52 h-12 bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 text-white text-sm font-bold rounded-xl transition-all shadow-sm hover:opacity-90"
              >
                Start Your Project
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}