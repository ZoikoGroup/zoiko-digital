import React from 'react';

export default function ZoikoTermsOfService() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 text-zinc-900 dark:text-slate-100 selection:bg-blue-600/10 transition-colors duration-300">
      
      {/* HEADER SECTION */}
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-8 border-b border-stone-200 dark:border-slate-800">
        <div className="text-blue-700 dark:text-blue-400 text-xs font-semibold font-['Hanken_Grotesk'] uppercase tracking-widest mb-3">
          Legal
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-zinc-700 dark:text-slate-400 text-base max-w-3xl leading-relaxed mb-6">
          The complete contractual framework governing enterprise use of Zoiko Web Services infrastructure, proprietary platforms, and digital solutions. Every standard service term is published here for immediate, transparent review.
        </p>
        <div className="flex flex-wrap items-center gap-6 text-xs text-gray-600 dark:text-slate-500">
          <div className="flex items-center gap-2">
            <span className="size-2 bg-green-500 rounded-full inline-block"></span>
            <span>Effective June 1, 2026</span>
          </div>
          <div>Version 4.2</div>
          <div>Governing language: American English</div>
        </div>
      </header>

      {/* CORE FRAME LAYOUT */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: NAVIGATION OUTLINE */}
        <aside className="lg:col-span-3 lg:sticky lg:top-8 self-start space-y-8">
          <div>
            <h2 className="text-gray-600 dark:text-slate-400 text-xs font-semibold font-['Hanken_Grotesk'] uppercase tracking-wider mb-4">
              On this page
            </h2>
            <nav className="border-l border-stone-200 dark:border-slate-800 space-y-1">
              <a href="#tos" className="block pl-4 py-2 text-sm text-gray-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 border-l-2 border-transparent transition-colors">
                1 · Terms of Service Agreement
              </a>
              <a href="#sla" className="block pl-4 py-2 text-sm text-gray-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 border-l-2 border-transparent transition-colors">
                2 · Service Level Agreement
              </a>
              <a href="#licensing" className="block pl-4 py-2 text-sm text-gray-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 border-l-2 border-transparent transition-colors">
                3 · Software Licensing & Usage Rights
              </a>
              <a href="#compliance" className="block pl-4 py-2 text-sm text-blue-700 dark:text-blue-400 font-semibold font-['Hanken_Grotesk'] border-l-2 border-blue-700 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-950/20">
                4 · Commercial Compliance & Fair Dealing
              </a>
            </nav>
          </div>

          <div className="pt-4 border-t border-stone-200 dark:border-slate-800">
            <a href="#briefing" className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 text-sm font-semibold font-['Hanken_Grotesk'] hover:gap-3 transition-all">
              Request a briefing <span>→</span>
            </a>
          </div>
        </aside>

        {/* RIGHT COLUMN: REVIEWS & CLAUSES */}
        <div className="lg:col-span-9 space-y-16">
          
          {/* SECTION 1 */}
          <section id="tos" className="space-y-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="text-blue-700 dark:text-blue-400 text-xl font-semibold font-['Fraunces'] leading-none pt-1">01</span>
                <div>
                  <h2 className="text-zinc-900 dark:text-white text-3xl font-bold leading-tight">Terms of Service Agreement</h2>
                  <p className="text-gray-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
                    The foundational master agreement governing the use of Zoiko Web Services infrastructure, proprietary platforms, and enterprise digital solutions.
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-white dark:bg-slate-900 ring-1 ring-stone-200 dark:ring-slate-800 hover:bg-stone-50 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-300 text-xs font-semibold font-['Hanken_Grotesk'] rounded-lg shadow-sm transition-colors shrink-0">
                Copy link
              </button>
            </div>

            <div className="space-y-6 pl-0 md:pl-8">
              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">1.1 Acceptance of terms</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  By creating an account, accessing, or using any Zoiko Web Services (ZWS) product, you agree to be bound by this agreement on behalf of yourself and the organization you represent. If you do not agree, you must not access or use the services. Where a separately executed master agreement exists between your organization and ZWS, that agreement controls to the extent of any conflict.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-3">1.2 Definitions</h3>
                <ul className="space-y-3 text-sm text-zinc-700 dark:text-slate-400 list-none pl-0">
                  <li className="border-l-2 border-stone-200 dark:border-slate-800 pl-3">
                    <strong className="text-zinc-900 dark:text-white font-medium">Services</strong> means the ZWS cloud infrastructure, proprietary platforms, APIs, dashboards, and related support made available to you.
                  </li>
                  <li className="border-l-2 border-stone-200 dark:border-slate-800 pl-3">
                    <strong className="text-zinc-900 dark:text-white font-medium">Customer Content</strong> means any data, code, or materials you submit to or process through the Services.
                  </li>
                  <li className="border-l-2 border-stone-200 dark:border-slate-800 pl-3">
                    <strong className="text-zinc-900 dark:text-white font-medium">Account</strong> means the registered tenant through which you access the Services.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">1.3 Eligibility and accounts</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  You must be authorized to enter into this agreement and responsible for all activity under your Account. You agree to keep credentials confidential, to configure access controls appropriately, and to notify ZWS promptly of any suspected unauthorized use.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">1.4 Acceptable use</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  You will not use the Services to violate applicable law, infringe third-party rights, transmit malicious code, attempt to gain unauthorized access, or interfere with the integrity or performance of the platform. ZWS may suspend access where use poses a security, legal, or operational risk, with notice where practicable.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">1.5 Fees and billing</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  Fees are described in your order or subscription plan and are payable in the currency and on the cycle stated there. Unless noted otherwise, fees are non-refundable and exclusive of applicable taxes. Continued use after a published price change constitutes acceptance of the revised fees from the next billing period.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">1.6 Term, suspension, and termination</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  This agreement remains in effect for as long as you use the Services. Either party may terminate for material breach that remains uncured after a reasonable notice period. On termination, your right to access the Services ends and you may export Customer Content during a defined retrieval window before deletion.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">1.7 Disclaimers and limitation of liability</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  The Services are provided on an as-available basis except as expressly warranted in the Service Level Agreement below. To the maximum extent permitted by law, neither party is liable for indirect or consequential losses, and aggregate liability is limited as set out in your order. Nothing in this section limits liability that cannot be excluded by law.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">1.8 Changes to these terms</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  ZWS may update this agreement to reflect new features, legal requirements, or operational changes. Material changes will be communicated through the platform or by email, with the effective date shown above. The current version is always published at this address for transparent review.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="sla" className="pt-12 border-t border-stone-200 dark:border-slate-800 space-y-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="text-blue-700 dark:text-blue-400 text-xl font-semibold font-['Fraunces'] leading-none pt-1">02</span>
                <div>
                  <h2 className="text-zinc-900 dark:text-white text-3xl font-bold leading-tight">Service Level Agreement Commitment</h2>
                  <p className="text-gray-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
                    Formalized uptime, performance, and support reliability commitments for mission-critical cloud deployments.
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-white dark:bg-slate-900 ring-1 ring-stone-200 dark:ring-slate-800 hover:bg-stone-50 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-300 text-xs font-semibold font-['Hanken_Grotesk'] rounded-lg shadow-sm transition-colors shrink-0">
                Copy link
              </button>
            </div>

            <div className="space-y-6 pl-0 md:pl-8">
              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">2.1 Availability commitment</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  ZWS commits to a Monthly Uptime Percentage of at least 99.95% for production-tier services, measured across each calendar month and excluding the conditions described in section 2.4. Uptime is calculated as total minutes in the month, minus minutes of unavailability, divided by total minutes.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-4">2.2 Service credits</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  If the Monthly Uptime Percentage falls below the commitment, you may request a service credit applied against a future invoice, according to the following schedule:
                </p>
                
                {/* UPTIME GRID DATA TABLE */}
                <div className="w-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-stone-200 dark:border-slate-800">
                  <div className="grid grid-cols-2 bg-stone-50 dark:bg-slate-800 border-b border-stone-200 dark:border-slate-700 px-6 py-3 text-xs font-semibold font-['Hanken_Grotesk'] uppercase tracking-wide text-zinc-900 dark:text-slate-200">
                    <div>Monthly uptime</div>
                    <div>Service credit</div>
                  </div>
                  <div className="grid grid-cols-2 px-6 py-4 border-b border-stone-100 dark:border-slate-800 text-sm items-center">
                    <div className="font-semibold text-zinc-900 dark:text-white">99.0% to &lt; 99.95%</div>
                    <div className="text-zinc-700 dark:text-slate-400">10% of the monthly service fee</div>
                  </div>
                  <div className="grid grid-cols-2 px-6 py-4 border-b border-stone-100 dark:border-slate-800 text-sm items-center">
                    <div className="font-semibold text-zinc-900 dark:text-white">95.0% to &lt; 99.0%</div>
                    <div className="text-zinc-700 dark:text-slate-400">25% of the monthly service fee</div>
                  </div>
                  <div className="grid grid-cols-2 px-6 py-4 text-sm items-center">
                    <div className="font-semibold text-zinc-900 dark:text-white">Below 95.0%</div>
                    <div className="text-zinc-700 dark:text-slate-400">50% of the monthly service fee</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-3">2.3 Support response targets</h3>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-slate-400 list-none pl-0">
                  <li className="border-l-2 border-red-500 pl-3">
                    <strong className="text-zinc-900 dark:text-white font-medium">Critical (production down):</strong> first response within 30 minutes, 24/7.
                  </li>
                  <li className="border-l-2 border-orange-500 pl-3">
                    <strong className="text-zinc-900 dark:text-white font-medium">High (major function impaired):</strong> first response within 2 business hours.
                  </li>
                  <li className="border-l-2 border-blue-500 pl-3">
                    <strong className="text-zinc-900 dark:text-white font-medium">Normal (general inquiry):</strong> first response within 1 business day.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">2.4 Exclusions</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  The commitment does not apply to unavailability caused by scheduled maintenance announced in advance, factors outside ZWS reasonable control, your equipment or third-party services, or use inconsistent with the documentation. Performance is tracked on the ZWS reliability dashboard and reported through automated reliability reporting.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">2.5 Claim process</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  To receive a credit, submit a request through the legal and support portal within 30 days of the affected period, including the dates, times, and affected resources. Approved credits are your sole and exclusive remedy for any failure to meet the availability commitment.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="licensing" className="pt-12 border-t border-stone-200 dark:border-slate-800 space-y-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="text-blue-700 dark:text-blue-400 text-xl font-semibold font-['Fraunces'] leading-none pt-1">03</span>
                <div>
                  <h2 className="text-zinc-900 dark:text-white text-3xl font-bold leading-tight">Software Licensing & Usage Rights</h2>
                  <p className="text-gray-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
                    Clarification of rights, restrictions, and intellectual property ownership regarding ZWS tools and developed digital assets.
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-white dark:bg-slate-900 ring-1 ring-stone-200 dark:ring-slate-800 hover:bg-stone-50 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-300 text-xs font-semibold font-['Hanken_Grotesk'] rounded-lg shadow-sm transition-colors shrink-0">
                Copy link
              </button>
            </div>

            <div className="space-y-6 pl-0 md:pl-8">
              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">3.1 License grant</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  Subject to this agreement and payment of applicable fees, ZWS grants you a non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes during the subscription term.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-3">3.2 Restrictions</h3>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-slate-400 list-disc pl-5">
                  <li>You may not copy, modify, reverse engineer, or create derivative works from the Services except as permitted by law.</li>
                  <li>You may not resell, sublicense, or provide the Services to third parties except as expressly authorized.</li>
                  <li>You may not remove proprietary notices or use ZWS branding without written permission.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">3.3 Intellectual property ownership</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  ZWS retains all right, title, and interest in the Services, platforms, and underlying technology, including all improvements. You retain all right, title, and interest in your Customer Content. No ownership transfers except as expressly stated.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">3.4 Customer content license</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  You grant ZWS a limited license to host, process, and transmit Customer Content solely to provide and support the Services. ZWS does not claim ownership of Customer Content and processes it in accordance with the applicable data protection terms.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">3.5 Developed digital assets</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  Where ZWS develops deliverables specifically for you under a statement of work, ownership of those deliverables is allocated as that statement of work provides. Absent express terms, pre-existing materials and reusable components remain owned by their originating party.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">3.6 Open source and feedback</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  Open-source components are licensed under their respective terms, which prevail for those components. Any feedback you provide may be used by ZWS to improve the Services without obligation or attribution.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="compliance" className="pt-12 border-t border-stone-200 dark:border-slate-800 space-y-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="text-blue-700 dark:text-blue-400 text-xl font-semibold font-['Fraunces'] leading-none pt-1">04</span>
                <div>
                  <h2 className="text-zinc-900 dark:text-white text-3xl font-bold leading-tight">Commercial Compliance &<br />Fair Dealing Protocols</h2>
                  <p className="text-gray-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
                    Ethical business conduct mandates regarding commercial operations, platform integrity, and fair use of our global technology stack.
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-white dark:bg-slate-900 ring-1 ring-stone-200 dark:ring-slate-800 hover:bg-stone-50 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-300 text-xs font-semibold font-['Hanken_Grotesk'] rounded-lg shadow-sm transition-colors shrink-0">
                Copy link
              </button>
            </div>

            <div className="space-y-6 pl-0 md:pl-8">
              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">4.1 Ethical conduct</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  Both parties commit to honest, fair, and transparent dealing in all commercial interactions, including accurate representations, good-faith negotiation, and timely performance of obligations.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">4.2 Anti-corruption and sanctions</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  You agree to comply with applicable anti-bribery, anti-corruption, and economic sanctions laws. You will not use the Services to facilitate any unlawful payment, nor make the Services available to sanctioned parties or restricted jurisdictions.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">4.3 Fair use of the technology stack</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  Shared resources must be used reasonably so that no single tenant degrades performance for others. ZWS may apply rate limits, fair-use thresholds, or capacity controls to protect overall platform integrity, with notice where practicable.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-3">4.4 Platform integrity and security</h3>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-slate-400 list-disc pl-5">
                  <li>Do not probe, scan, or test the vulnerability of the platform without prior written authorization.</li>
                  <li>Do not circumvent access controls, usage metering, or security safeguards.</li>
                  <li>Report suspected vulnerabilities responsibly through the security disclosure channel.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">4.5 Export and trade compliance</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  You are responsible for complying with export control and trade laws applicable to your use of the Services and any data you transfer across borders.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 dark:text-slate-200 text-lg font-semibold font-['Hanken_Grotesk'] mb-2">4.6 Enforcement</h3>
                <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                  Violations of these protocols may result in suspension or termination under section 1.6. ZWS will act proportionately and, where appropriate, give you an opportunity to remediate before enforcement.
                </p>
              </div>
            </div>
          </section>

          {/* 3-COLUMN METRICS/TRANSPARENCY BENEFITS BAR */}
          <section className="grid grid-cols-1 md:grid-cols-3 bg-white dark:bg-slate-900 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-md divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-slate-800 overflow-hidden">
            {/* Box 1 */}
            <div className="p-8 space-y-4">
              <div className="size-8 bg-indigo-50 dark:bg-blue-950/40 rounded-lg flex items-center justify-center text-blue-700 dark:text-blue-400">
                {/* [Icon Insert Zone: Contractual Transparency] */}
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-zinc-900 dark:text-white text-sm font-semibold font-['Hanken_Grotesk'] uppercase tracking-wide">
                Contractual transparency
              </h4>
              <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                A core pillar of enterprise onboarding — standard terms are open and reviewable from day one.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-8 space-y-4">
              <div className="size-8 bg-indigo-50 dark:bg-blue-950/40 rounded-lg flex items-center justify-center text-blue-700 dark:text-blue-400">
                {/* [Icon Insert Zone: Accelerated Review] */}
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-zinc-900 dark:text-white text-sm font-semibold font-['Hanken_Grotesk'] uppercase tracking-wide">
                Accelerated review
              </h4>
              <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                Immediate retrieval of standard service terms shortens legal review cycles for procurement teams.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-8 space-y-4">
              <div className="size-8 bg-indigo-50 dark:bg-blue-950/40 rounded-lg flex items-center justify-center text-blue-700 dark:text-blue-400">
                {/* [Icon Insert Zone: Standards Aligned] */}
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-zinc-900 dark:text-white text-sm font-semibold font-['Hanken_Grotesk'] uppercase tracking-wide">
                Standards-aligned
              </h4>
              <p className="text-zinc-700 dark:text-slate-400 text-sm leading-relaxed">
                Architecture engineered to satisfy international contract law and enterprise procurement standards.
              </p>
            </div>
          </section>

          {/* CTA MARKETING / BRIEFING PANEL BANNER */}
          <section id="briefing" className="relative rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-900 dark:from-blue-900 dark:to-slate-900 p-8 md:p-12 text-white overflow-hidden shadow-xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] leading-tight">
                  Review ZWS service terms & request a contractual briefing
                </h3>
                <p className="text-neutral-200 dark:text-slate-300 text-sm leading-relaxed max-w-2xl">
                  For general counsel and procurement leads: request technical clarity on platform usage, reliability guarantees, and licensing to accelerate contract execution.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <button className="w-full lg:w-auto px-6 py-3.5 bg-white text-blue-700 hover:bg-neutral-50 font-semibold font-['Hanken_Grotesk'] rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center">
                  Schedule Briefing
                </button>
              </div>
            </div>
            
            {/* Background design layer mask */}
            <div className="absolute inset-0 bg-white/[0.03] pointer-events-none mix-blend-overlay"></div>
          </section>

        </div>
      </main>
    </div>
  );
}