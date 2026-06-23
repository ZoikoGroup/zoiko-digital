"use client"
import React, { useState } from 'react';

export default function ServiceLevelAgreement() {
  const [activeSection, setActiveSection] = useState('planned-maintenance');
  const [selectedPlan, setSelectedPlan] = useState('starter');
  const [selectedMonth, setSelectedMonth] = useState('31');

  const navItems = [
    { id: 'scope', label: '1. Scope' },
    { id: 'uptime', label: '2. Uptime Commitment' },
    { id: 'definition', label: '3. Downtime Definition' },
    { id: 'credits', label: '4. Service Credits' },
    { id: 'incident-response', label: '5. Incident Response' },
    { id: 'credit-claims', label: '6. Credit Claims' },
    { id: 'exclusions', label: '7. Exclusions' },
    { id: 'sole-remedy', label: '8. Sole Remedy' },
    { id: 'planned-maintenance', label: '9. Planned Maintenance' },
    { id: 'amendments', label: '10. Amendments' },
  ];

  // Live calculation logic helper based on selections
  const getCalculationText = () => {
    if (selectedPlan === 'starter') {
      const time = selectedMonth === '31' ? '0h 44.6m' : '0h 43.2m';
      const total = selectedMonth === '31' ? '44.6 minutes' : '43.2 minutes';
      return { rate: '99.9% uptime', allowed: time, detail: ` (${total} total).` };
    } else {
      const time = selectedMonth === '31' ? '0h 22.3m' : '0h 21.6m';
      const total = selectedMonth === '31' ? '22.3 minutes' : '21.6 minutes';
      return { rate: '99.95% uptime', allowed: time, detail: ` (${total} total).` };
    }
  };

  const calc = getCalculationText();

  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-700 antialiased ">
      
      {/* Skip to Content Utility Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-4 focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-b-lg focus:z-[100] focus:font-semibold">
        Skip to main content
      </a>

   

      {/* SLA Hero Section */}
      <section className="relative bg-gradient-to-r from-fuchsia-700 to-sky-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-radial-[at_20%_50%] from-indigo-600 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 opacity-60 bg-radial from-white/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>Legal — Cluster 2</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Service Level Agreement</h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/50">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>Effective: January 1, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span>Version 4.2</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2 2 0 002-2V8.065M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout Container */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation Component */}
          <aside className="lg:col-span-1 lg:sticky lg:top-28 space-y-6 hidden md:block">
            <div>
              <h2 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-4">Contents</h2>
              <nav className="border-l border-gray-200 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`block py-2 px-4 text-xs transition border-l-2 -ml-px ${
                      activeSection === item.id
                        ? 'text-indigo-600 font-medium border-indigo-600 bg-violet-100 rounded-r-sm'
                        : 'text-gray-600 border-transparent hover:text-indigo-600 hover:border-indigo-600'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-xs font-medium text-zinc-700 hover:bg-gray-50 transition">
                <svg className="w-3.5 h-3.5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Download PDF
              </button>
            </div>
          </aside>

          {/* Legal Document Content Component */}
          <div className="lg:col-span-3 space-y-12 max-w-4xl">
            
            {/* At a Glance Callout Summary Box */}
            <section className="bg-violet-100 border border-indigo-600/20 rounded-xl p-6">
              <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-4">At a Glance</h3>
              <ul className="space-y-3.5 text-sm text-zinc-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-indigo-600 font-bold shrink-0">→</span>
                  <span>Standard plans: 99.9% monthly uptime commitment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-indigo-600 font-bold shrink-0">→</span>
                  <span>Business/Enterprise plans: 99.95% monthly uptime commitment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-indigo-600 font-bold shrink-0">→</span>
                  <span>Service credits issued automatically; no credit request needed for outages exceeding 1 hour.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-indigo-600 font-bold shrink-0">→</span>
                  <span>Credits are capped at 50% of the affected month's fee and are the sole remedy for SLA breaches.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-indigo-600 font-bold shrink-0">→</span>
                  <span>Planned maintenance windows are excluded from downtime calculations.</span>
                </li>
              </ul>
            </section>

            {/* Section 1: Scope */}
            <article id="scope" className="pt-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-700">1. Scope</h2>
                <button className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition shadow-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  Copy link
                </button>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-zinc-700">
                <p>
                  This Service Level Agreement ("SLA") sets forth the availability commitments of Zoiko Tech Inc. ("ZWS") for ZWS managed cloud hosting, API gateway, and platform services ("Covered Services") to paying customers ("Customer") under a current ZWS service agreement.
                </p>
                <p>
                  Free tier, trial accounts, and beta features are expressly excluded from this SLA. Where an Order Form specifies higher or different SLA tiers, the Order Form terms prevail.
                </p>
              </div>
            </article>

            {/* Section 2: Uptime Commitment */}
            <article id="uptime" className="pt-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-700">2. Uptime Commitment</h2>
                <button className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition shadow-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  Copy link
                </button>
              </div>
              <p className="text-base leading-relaxed mb-6">
                ZWS commits to the following monthly uptime percentages, calculated as: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-semibold text-indigo-700">(Total Minutes in Month − Downtime Minutes) / Total Minutes in Month × 100</code>.
              </p>
              
              {/* Plan Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-indigo-600"></div>
                  <span className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Starter Plan</span>
                  <div className="flex items-baseline mb-3">
                    <span className="text-3xl font-bold text-zinc-900">99.9</span>
                    <span className="text-sm font-medium text-gray-600 ml-0.5">%</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">Up to ~43.8 min/mo downtime</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-500 to-amber-600"></div>
                  <span className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Business Plan</span>
                  <div className="flex items-baseline mb-3">
                    <span className="text-3xl font-bold text-zinc-900">99.95</span>
                    <span className="text-sm font-medium text-gray-600 ml-0.5">%</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">Up to ~21.9 min/mo downtime</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-500 to-amber-600"></div>
                  <span className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Enterprise Plan</span>
                  <div className="flex items-baseline mb-3">
                    <span className="text-3xl font-bold text-zinc-900">99.95</span>
                    <span className="text-sm font-medium text-gray-600 ml-0.5">%</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">Custom SLA available on request</p>
                </div>
              </div>

              {/* Informative Placeholder Notice */}
              <div className="bg-amber-50 border-l-[3px] border-amber-500 rounded-r-xl p-4 mb-8">
                <span className="block text-xs font-bold text-zinc-700 uppercase tracking-wide mb-1">Placeholder</span>
                <p className="text-sm text-zinc-700">
                  These uptime figures and plan names are illustrative. Replace with your actual plan tiers and commitments reviewed by counsel before publishing.
                </p>
              </div>

              {/* Interactive Built-in Uptime Calculator widget */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h4 className="text-sm font-bold text-zinc-900 mb-4">Uptime Calculator</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-zinc-700 mb-1.5 font-medium">Plan</label>
                    <select 
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full bg-neutral-50 border border-gray-200 text-sm rounded-md px-3 py-2 text-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      <option value="starter">Starter (99.9%)</option>
                      <option value="business">Business (99.95%)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-700 mb-1.5 font-medium">Month</label>
                    <select 
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="w-full bg-neutral-50 border border-gray-200 text-sm rounded-md px-3 py-2 text-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      <option value="31">31-day month</option>
                      <option value="30">30-day month</option>
                    </select>
                  </div>
                </div>
                <div className="bg-violet-100 rounded-lg p-4 text-sm text-zinc-700">
                  With <span className="text-indigo-700 font-bold">{calc.rate}</span> in a {selectedMonth}-day month, the allowed downtime is <span className="text-indigo-700 font-bold">{calc.allowed}</span>{calc.detail}
                </div>
              </div>
            </article>

            {/* Section 3: Downtime Definition */}
            <article id="definition" className="pt-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-700">3. Downtime Definition</h2>
                <button className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition shadow-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  Copy link
                </button>
              </div>
              <p className="text-base leading-relaxed mb-4">
                "Downtime" means any period during which the Covered Service is unavailable or returning error rates above 5% for all customer requests, as measured by ZWS's monitoring systems. Downtime begins when ZWS's monitoring detects the failure and ends when the service is restored to normal operation.
              </p>
              <p className="text-base font-medium mb-3">Downtime does not include:</p>
              <ul className="list-disc list-inside space-y-2 text-base text-zinc-700 pl-2">
                <li>Unavailability resulting from Scheduled Maintenance (see Section 9)</li>
                <li>Degradation affecting a single customer due to their own configuration errors or resource exhaustion</li>
                <li>Emergency maintenance required to respond to a critical security threat, with notice provided as soon as practicable</li>
                <li>Events listed under Section 7 (Exclusions)</li>
              </ul>
            </article>

            {/* Section 4: Service Credits */}
            <article id="credits" className="pt-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-700">4. Service Credits</h2>
                <button className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition shadow-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  Copy link
                </button>
              </div>
              <p className="text-base leading-relaxed mb-6">
                If ZWS fails to meet the monthly uptime commitment, the Customer is eligible for a service credit applied to the next billing cycle, calculated as a percentage of the monthly fee for the affected Covered Service:
              </p>
              
              {/* Credits Table */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-neutral-50 border-b border-gray-200 text-xs font-bold uppercase tracking-wide text-gray-600">
                        <th className="py-3 px-4 w-2/3">Monthly Uptime</th>
                        <th className="py-3 px-4">Credit Percentage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-zinc-700">
                      <tr>
                        <td className="py-3.5 px-4">99.9% to &lt;100% (Starter) / 99.95% to &lt;100% (Business)</td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 bg-violet-100 text-indigo-700 rounded-full text-xs font-bold">
                            0% — SLA met
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4">99.0% to &lt;99.9%</td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 bg-orange-50 text-orange-700 rounded-full text-xs font-bold">
                            10%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4">95.0% to &lt;99.0%</td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 bg-orange-50 text-orange-700 rounded-full text-xs font-bold">
                            25%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-medium">Below 95.0%</td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 bg-red-50 text-red-600 rounded-full text-xs font-bold">
                            50%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                Credits are non-transferable, have no cash value, and may not exceed 50% of the monthly fee for the affected service in any single month.
              </p>
            </article>

            {/* Section 5: Incident Response Targets */}
            <article id="incident-response" className="pt-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-700">5. Incident Response Targets</h2>
                <button className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition shadow-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  Copy link
                </button>
              </div>
              
              {/* Incident Response Matrix Table */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-neutral-50 border-b border-gray-200 text-xs font-bold uppercase tracking-wide text-gray-600">
                        <th className="py-3.5 px-4">Severity</th>
                        <th className="py-3.5 px-4 w-2/5">Definition</th>
                        <th className="py-3.5 px-4">Initial Response</th>
                        <th className="py-3.5 px-4">Status Update Cadence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-zinc-700">
                      <tr>
                        <td className="py-4 px-4 font-bold text-zinc-800">P1 — Critical</td>
                        <td className="py-4 px-4">Full service outage affecting all customers</td>
                        <td className="py-4 px-4">30 minutes</td>
                        <td className="py-4 px-4">Every 30 minutes</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-bold text-zinc-800">P2 — High</td>
                        <td className="py-4 px-4">Significant degradation affecting a subset of customers or a major feature</td>
                        <td className="py-4 px-4">2 hours</td>
                        <td className="py-4 px-4">Every 2 hours</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-bold text-zinc-800">P3 — Medium</td>
                        <td className="py-4 px-4">Minor degradation with a workaround available</td>
                        <td className="py-4 px-4">8 business hours</td>
                        <td className="py-4 px-4">Daily</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-bold text-zinc-800">P4 — Low</td>
                        <td className="py-4 px-4">Cosmetic or documentation issues with no service impact</td>
                        <td className="py-4 px-4">2 business days</td>
                        <td className="py-4 px-4">Weekly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                Response targets are measured from the time ZWS's monitoring system detects the incident or the Customer submits a support ticket, whichever is earlier. Updates are posted on the ZWS status page at <a href="#" className="text-indigo-600 font-medium hover:underline">status.zoikoweb.com</a>.
              </p>
            </article>

            {/* Section 6: Credit Claims */}
            <article id="credit-claims" className="pt-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-700">6. Credit Claims</h2>
                <button className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition shadow-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 00-5.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  Copy link
                </button>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-zinc-700">
                <p>
                  For outages exceeding 60 minutes that are reflected in ZWS's status page history, ZWS will issue credits automatically within two billing cycles without a claim being required.
                </p>
                <p>
                  For other qualifying downtime events, Customers must submit a credit request to <a href="mailto:legal@zoikoweb.com" className="text-indigo-600 font-medium hover:underline">legal@zoikoweb.com</a> within 30 days of the end of the month in which the downtime occurred. The request must include the date, time, and duration of the downtime as experienced by the Customer, along with any supporting evidence.
                </p>
                <p>
                  ZWS will evaluate the claim against its own monitoring data and respond within 10 business days.
                </p>
              </div>
            </article>

            {/* Section 7: Exclusions */}
            <article id="exclusions" className="pt-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-700">7. Exclusions</h2>
                <button className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition shadow-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 00-5.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  Copy link
                </button>
              </div>
              <p className="text-base font-medium mb-3">The following are excluded from Downtime calculations and do not give rise to service credits:</p>
              <ul className="list-disc list-inside space-y-2 text-base text-zinc-700 pl-2">
                <li>Scheduled Maintenance announced at least 48 hours in advance via the ZWS status page</li>
                <li>Emergency maintenance required to address a critical security vulnerability</li>
                <li>Downtime caused by Customer's acts or omissions, including misconfiguration, AUP violations, or unauthorized modification of ZWS-managed infrastructure</li>
                <li>Force majeure events (natural disasters, acts of war, government actions, fiber cuts outside ZWS's network)</li>
                <li>Third-party connectivity issues outside ZWS's control, including internet routing anomalies and last-mile ISP failures</li>
                <li>Attacks (DDoS, brute force) directed at the Customer's specific services rather than ZWS infrastructure generally</li>
                <li>Downtime during a free trial or free tier usage period</li>
                <li>Accounts in arrears or suspended for non-payment</li>
              </ul>
            </article>

            {/* Section 8: Sole Remedy */}
            <article id="sole-remedy" className="pt-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-700">8. Sole Remedy</h2>
                <button className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition shadow-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 00-5.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  Copy link
                </button>
              </div>
              <p className="text-base leading-relaxed text-zinc-700">
                Service credits issued under this SLA are the Customer's sole and exclusive remedy for any failure by ZWS to meet the uptime commitments set forth herein. Nothing in this SLA limits ZWS's liability caps as set out in the ZWS Terms of Service.
              </p>
            </article>

            {/* Section 9: Planned Maintenance */}
            <article id="planned-maintenance" className="pt-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-700">9. Planned Maintenance</h2>
                <button className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition shadow-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 00-5.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  Copy link
                </button>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-zinc-700">
                <p>
                  ZWS schedules routine maintenance during low-traffic windows (typically 02:00–06:00 UTC, Sunday) and provides at least 48 hours' advance notice on the ZWS status page. Customers may subscribe to status-page notifications at <a href="#" className="text-indigo-600 font-medium hover:underline">status.zoikoweb.com</a>.
                </p>
                <p>
                  Planned maintenance windows that result in service interruption exceeding 60 minutes per month are credited at the P3 rate (10%) at ZWS's discretion, as a goodwill gesture and not as an SLA obligation.
                </p>
              </div>
            </article>

            {/* Section 10: Amendments */}
            <article id="amendments" className="pt-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-700">10. Amendments</h2>
                <button className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition shadow-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 00-5.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  Copy link
                </button>
              </div>
              <p className="text-base leading-relaxed text-zinc-700">
                ZWS may amend this SLA at any time, provided that ZWS will not reduce the uptime commitment applicable to a Customer's current plan mid-term without providing at least 30 days' notice and the right to terminate without penalty.
              </p>
            </article>

            {/* Contact Channels Grid Boxes Container */}
            <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-base font-bold text-zinc-900 mb-4">Contact Channels</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-neutral-50 rounded-lg p-4">
                  <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Support & Incidents</span>
                  <a href="#" className="text-sm font-semibold text-indigo-600 hover:underline">support.zoikoweb.com</a>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Status Page</span>
                  <a href="#" className="text-sm font-semibold text-indigo-600 hover:underline">status.zoikoweb.com</a>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Credit Claims</span>
                  <a href="mailto:legal@zoikoweb.com" className="text-sm font-semibold text-indigo-600 hover:underline">legal@zoikoweb.com</a>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Legal Portal</span>
                  <a href="#" className="text-sm font-semibold text-indigo-600 hover:underline">Submit inquiry</a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

    

    </div>
  );
}