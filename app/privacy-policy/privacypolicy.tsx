"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-sky-900 dark:text-gray-100  transition-colors duration-300">
      
     

      {/* ================= HERO BANNER ================= */}
      <section className="w-full bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 py-16 md:py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* ================= MAIN CONFIGURABLE CONTENT ================= */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-14">
        
        {/* Section 1: Introduction */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">1. Introduction</h2>
          </div>
          <div className="w-full bg-linear-78 from-fuchsia-700/5 to-sky-900/5 dark:from-gray-800 dark:to-gray-800/40 p-5 sm:p-6 rounded-xl border border-stone-200 dark:border-gray-700 space-y-4 text-sm sm:text-base leading-relaxed text-sky-900 dark:text-gray-300">
            <p>
              <strong className="text-teal-700 dark:text-teal-400 font-semibold block sm:inline">Commitment Statement: </strong> 
              Zoiko Digital (&quot;ZOIKO DIGITAL&quot;) values your privacy and is committed to protecting personal data in compliance with global, regional, and national privacy laws, including GDPR (EU/UK), CCPA/CPRA (California), PIPEDA (Canada), NDPR (Nigeria), POPIA (South Africa), and other applicable frameworks.
            </p>
            <p>
              <strong className="text-teal-700 dark:text-teal-400 font-semibold block sm:inline">Purpose: </strong> 
              This Privacy Policy explains how we collect, use, share, and protect personal information.
            </p>
            <p>
              <strong className="text-teal-700 dark:text-teal-400 font-semibold block sm:inline">Scope: </strong> 
              Applies to all users, customers, and visitors of ZOIKO DIGITAL services globally.
            </p>
          </div>
        </section>

        {/* Section 2: Information We Collect */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">2. Information We Collect</h2>
          </div>
          <ul className="space-y-3 text-sm sm:text-base pl-1 text-sky-900 dark:text-gray-300 list-none">
            <li className="flex gap-2 items-start"><span className="text-teal-700 dark:text-teal-400 font-bold">•</span><div><strong className="text-teal-700 dark:text-teal-400">Personal Information:</strong> Name, email, phone, billing information, government IDs (for regulated services).</div></li>
            <li className="flex gap-2 items-start"><span className="text-teal-700 dark:text-teal-400 font-bold">•</span><div><strong className="text-teal-700 dark:text-teal-400">Usage Data:</strong> Device identifiers, IP address, browser, OS, and interactions with ZOIKO DIGITAL platforms.</div></li>
            <li className="flex gap-2 items-start"><span className="text-teal-700 dark:text-teal-400 font-bold">•</span><div><strong className="text-teal-700 dark:text-teal-400">Cookies & Tracking:</strong> See Cookie Policy links.</div></li>
            <li className="flex gap-2 items-start"><span className="text-teal-700 dark:text-teal-400 font-bold">•</span><div><strong className="text-teal-700 dark:text-teal-400">Special Categories:</strong> Health or biometric data only when required and with explicit consent (GDPR/POPIA compliant).</div></li>
          </ul>
        </section>

        {/* Section 3: Usage Matrix */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">3. How We Use Your Information</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base text-sky-900 dark:text-gray-300 list-disc pl-5">
            <li>Delivering and improving ZOIKO DIGITAL services.</li>
            <li>Authentication, fraud prevention, and account security.</li>
            <li>Billing, payments, and operational support.</li>
            <li>Compliance with legal and regulatory obligations.</li>
            <li>Personalization and marketing (where permitted).</li>
          </ul>
        </section>

        {/* Section 4: Legal Bases */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">4. Legal Bases for Processing</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm sm:text-base text-sky-900 dark:text-gray-300">
            <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-xl"><strong className="text-teal-700 dark:text-teal-400 block mb-1">EU/UK (GDPR):</strong> Contractual necessity, legal obligations, legitimate interests, and consent.</div>
            <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-xl"><strong className="text-teal-700 dark:text-teal-400 block mb-1">California (CCPA/CPRA):</strong> Business purposes, service provision, and compliance.</div>
            <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-xl"><strong className="text-teal-700 dark:text-teal-400 block mb-1">Canada (PIPEDA):</strong> Knowledge and consent, subject to exceptions.</div>
            <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-xl"><strong className="text-teal-700 dark:text-teal-400 block mb-1">Africa (NDPR, POPIA):</strong> Explicit consent, lawful processing, data minimization.</div>
          </div>
        </section>

        {/* Section 5: Sharing Info */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">5. Information Sharing & Disclosure</h2>
          </div>
          <div className="space-y-4">
            <ul className="space-y-2 text-sm sm:text-base text-sky-900 dark:text-gray-300 list-none pl-1">
              <li><strong className="text-teal-700 dark:text-teal-400">Service Providers:</strong> Cloud hosting, analytics, payment processors (bound by DPA contracts).</li>
              <li><strong className="text-teal-700 dark:text-teal-400">Affiliates:</strong> Zoiko Group subsidiaries (compliance maintained across entities).</li>
              <li><strong className="text-teal-700 dark:text-teal-400">Regulators & Authorities:</strong> As legally required.</li>
              <li><strong className="text-teal-700 dark:text-teal-400">Business Transactions:</strong> In mergers or acquisitions, subject to safeguards.</li>
            </ul>
            <div className="w-full bg-fuchsia-700/5 dark:bg-fuchsia-500/5 rounded-md border-l-[4px] border-teal-700 dark:border-teal-400 p-4 mt-2">
              <p className="text-sm sm:text-base font-semibold text-teal-700 dark:text-teal-400">Prohibition on Sale: <span className="font-normal text-sky-900 dark:text-gray-300">ZOIKO DIGITAL does not sell personal information under CCPA/CPRA definitions.</span></p>
            </div>
          </div>
        </section>

        {/* Section 6: Security Measures Block */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">6. Data Security</h2>
          </div>
          <div className="w-full bg-sky-900 dark:bg-gray-800 text-white rounded-xl p-5 sm:p-6 space-y-4">
            <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Data Security Measures</h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-100 list-disc pl-5">
              <li><strong>Encryption & Storage:</strong> AES-256 encryption, multi-factor authentication, zero-trust architecture.</li>
              <li><strong>Certifications:</strong> ISO 27001, SOC 2 Type II, PCI DSS (for payments).</li>
              <li><strong>Breach Notifications:</strong> In line with GDPR (72-hour rule), CCPA, NDPR, and POPIA frameworks.</li>
            </ul>
          </div>
        </section>

        {/* Section 7 & 8 Row Frame */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-sky-900 dark:text-white border-b border-slate-200 dark:border-gray-800 pb-1">7. Data Retention</h3>
            <p className="text-sm sm:text-base leading-relaxed text-sky-900/90 dark:text-gray-300">Retained only as necessary for business and legal purposes. Subject to statutory retention rules (e.g., 7 years for financial records in the US/EU). Right to erasure requests handled within 30 days under GDPR standards.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-sky-900 dark:text-white border-b border-slate-200 dark:border-gray-800 pb-1">8. International Data Transfers</h3>
            <p className="text-sm sm:text-base leading-relaxed text-sky-900/90 dark:text-gray-300">Transfers safeguarded via Standard Contractual Clauses (SCCs) and adequacy rules. Cloud setups are globally distributed across secure redundant setups across the US, EU, APAC, and African continents.</p>
          </section>
        </div>

        {/* Section 9: Regional Framework Cards */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">9. Your Global Privacy Rights</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-2 border-sky-950 dark:border-gray-700 shadow-xs">
              <h4 className="font-bold text-teal-700 dark:text-teal-400 text-lg mb-2">EU/UK (GDPR)</h4>
              <p className="text-sm text-sky-900 dark:text-gray-300">Access, rectification, erasure, restriction, portability, and objection mandates.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-2 border-sky-950 dark:border-gray-700 shadow-xs">
              <h4 className="font-bold text-teal-700 dark:text-teal-400 text-lg mb-2">California (CCPA/CPRA)</h4>
              <p className="text-sm text-sky-900 dark:text-gray-300">Right to know, delete, opt-out of sharing or selling, and non-discrimination tracking safeguards.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-2 border-sky-950 dark:border-gray-700 shadow-xs">
              <h4 className="font-bold text-teal-700 dark:text-teal-400 text-lg mb-2">Canada (PIPEDA)</h4>
              <p className="text-sm text-sky-900 dark:text-gray-300">Right to access, correction, and tracking escalation loops directly to the Privacy Commissioner.</p>
            </div>
          </div>
        </section>

        {/* Section 10 & 11: Extra Disclosures */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">10. Children&apos;s Privacy Mandate</h2>
          </div>
          <div className="w-full bg-linear-57 from-fuchsia-700/5 to-sky-900/5 dark:from-gray-800 p-5 rounded-lg border border-teal-700/30 text-sm sm:text-base text-sky-900 dark:text-gray-300 leading-relaxed">
            <p className="mb-2">ZOIKO DIGITAL does not knowingly collect personal data from children under:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>16</strong> (EU/UK GDPR)</li>
              <li><strong>13</strong> (US COPPA)</li>
              <li><strong>18</strong> (NDPR/POPIA without verified guardian authorization workflows).</li>
            </ul>
          </div>
        </section>

        {/* Section 12: Updates */}
        <section className="space-y-2 text-sm sm:text-base text-sky-900 dark:text-gray-300">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2 mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">11. Privacy Policy Updates</h2>
          </div>
          <p>This statement is updated periodically. Material revisions will be broadcast natively inside core dashboards or verified user contact feeds.</p>
        </section>

        {/* Section 13: Privacy Contact Form */}
        <section className="w-full bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 text-white rounded-xl p-6 sm:p-8 space-y-6">
          <h3 className="text-xl font-bold border-b border-white/20 pb-2">12. Contact the Privacy Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base">
            <div className="space-y-2">
              <p><strong>Data Protection Officer (DPO):</strong> dpo@zoikoweb.com</p>
              <p><strong>General Inquiries:</strong> privacy@zoikoweb.com</p>
              <p><strong>Headquarters:</strong> Zoiko Digital, Sacramento, California, USA</p>
            </div>
            <div className="space-y-1 md:border-l md:border-white/20 md:pl-6">
              <p className="font-semibold text-teal-300">Regional Escalation Links:</p>
              <p>• EU/UK Routing: privacy.eu@zoikoweb.com</p>
              <p>• Africa Systems: privacy.africa@zoikoweb.com</p>
              <p>• Canada Frameworks: privacy.ca@zoikoweb.com</p>
            </div>
          </div>
        </section>

      </main>

      
    </div>
  );
}