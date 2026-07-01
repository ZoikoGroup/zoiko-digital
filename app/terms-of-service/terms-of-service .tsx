"use client";

import React from "react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-sky-900 dark:text-gray-100  antialiased transition-colors duration-300">
      
      {/* ================= HEADER NAVIGATION BAR ================= */}
      
      {/* ================= HERO TITLE BANNER ================= */}
      <section className="w-full bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 py-16 md:py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* ================= MAIN CONTENT ENVELOPE ================= */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        
        {/* Section 1: Introduction */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">1. Introduction</h2>
          </div>
          <div className="w-full bg-gradient-to-br from-fuchsia-700/5 to-sky-900/5 dark:from-gray-800 dark:to-gray-800/40 p-5 sm:p-6 rounded-xl border border-stone-200 dark:border-gray-700 space-y-4 text-sm sm:text-base leading-relaxed text-sky-900 dark:text-gray-300">
            <p><strong className="text-teal-700 dark:text-teal-400 font-semibold">Agreement:</strong> These Terms of Service (&quot;Terms&quot;) govern your access to and use of Zoiko Digital platforms, applications, and solutions.</p>
            <p><strong className="text-teal-700 dark:text-teal-400 font-semibold">Acceptance:</strong> By using ZOIKO DIGITAL services, you agree to these Terms, our Privacy Policy, and any applicable Service Level Agreements (SLAs).</p>
            <p><strong className="text-teal-700 dark:text-teal-400 font-semibold">Eligibility:</strong> Services are available only to entities and individuals legally capable of entering binding contracts in their jurisdiction.</p>
          </div>
        </section>

        {/* Section 2: Services Provided */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">2. Services Provided</h2>
          </div>
          <div className="space-y-3 text-sm sm:text-base leading-relaxed text-sky-900 dark:text-gray-300 pl-1">
            <p>ZOIKO DIGITAL provides <span className="text-teal-700 dark:text-teal-400 font-semibold">cloud, SaaS, compliance, AI, and connectivity solutions</span> across industries.</p>
            <p>Services may be subscription-based, usage-based, or project-based.</p>
            <p>Certain services may be governed by <span className="text-teal-700 dark:text-teal-400 font-semibold">additional agreements</span> (e.g., Master Services Agreement, Data Processing Addendum).</p>
          </div>
        </section>

        {/* Section 3: User Responsibilities */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">3. User Responsibilities</h2>
          </div>
          <ul className="space-y-3 text-sm sm:text-base text-sky-900 dark:text-gray-300 pl-1 list-none">
            <li><strong className="text-teal-700 dark:text-teal-400">• Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li><strong className="text-teal-700 dark:text-teal-400">• Compliance with Laws:</strong> Users must comply with all applicable laws, including GDPR (EU/UK), CCPA/CPRA (California), PIPEDA (Canada), NDPR (Nigeria), POPIA (South Africa), HIPAA, and telecom regulations.</li>
            <li><strong className="text-teal-700 dark:text-teal-400">• Acceptable Use:</strong> Users may not use services for unlawful purposes, distribution of malicious code, or intellectual property infringement.</li>
            <li><strong className="text-teal-700 dark:text-teal-400">• Accuracy of Information:</strong> Users must maintain accurate registration, billing, and compliance documentation.</li>
          </ul>
        </section>

        {/* Section 4: Service Uptime Panel */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">4. Service Levels & Availability</h2>
          </div>
          <div className="w-full bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-lg border border-teal-700/40 shadow-[0px_4px_20px_rgba(144,80,159,0.05)] text-sm sm:text-base leading-relaxed text-sky-900 dark:text-gray-300 space-y-3">
            <p>ZOIKO DIGITAL commits to <strong className="text-teal-700 dark:text-teal-400 font-semibold">99.9% uptime for core services</strong>, excluding scheduled maintenance, emergencies, or force majeure events.</p>
            <p><strong className="text-teal-700 dark:text-teal-400">EU/UK Consumers:</strong> In compliance with consumer law, users are entitled to standard remedies (repair, replacement, price reduction, or refund) if digital services fail to conform.</p>
            <p className="text-xs sm:text-sm text-slate-400">Specific service levels are defined in contextual localized SLAs.</p>
          </div>
        </section>

        {/* Section 5: Payments & Fees */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">5. Payments & Fees</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-sky-900 dark:text-gray-300">
            <div className="space-y-2">
              <p><strong className="text-teal-700 dark:text-teal-400 font-semibold">Billing:</strong> Fees are defined explicitly in your signed service agreements or active digital pricing lists.</p>
              <p><strong className="text-teal-700 dark:text-teal-400 font-semibold">Payment Terms:</strong> Settlements must arrive inside clear, pre-defined timelines. Late receipts trigger standard statutory interest penalties.</p>
              <p><strong className="text-teal-700 dark:text-teal-400 font-semibold">Taxes:</strong> Users are responsible for all applicable localized VAT, GST, or general sales taxes depending on delivery markets.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-xl space-y-2 border border-slate-100 dark:border-gray-700 text-xs sm:text-sm">
              <p><strong>• EU/UK Clause:</strong> VAT applies strictly in accordance with local e-commerce and digital service marketplace frameworks.</p>
              <p><strong>• Africa Clause:</strong> ZOIKO DIGITAL aligns processing with local continental tax models (e.g., Nigeria FIRS VAT, South Africa SARS VAT regulations).</p>
            </div>
          </div>
        </section>

        {/* Section 6: Intellectual Property */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">6. Intellectual Property</h2>
          </div>
          <ul className="space-y-2 text-sm sm:text-base text-sky-900 dark:text-gray-300 list-disc pl-5">
            <li><strong className="text-teal-700 dark:text-teal-400">Ownership:</strong> ZOIKO DIGITAL retains all active patent, trademark, code blueprint, and system asset rights to its global tools.</li>
            <li><strong className="text-teal-700 dark:text-teal-400">License:</strong> Customers receive a <span className="text-teal-700 dark:text-teal-400 font-semibold">limited, non-exclusive, revocable license</span> to interact with provisioning windows under active accounts.</li>
            <li><strong className="text-teal-700 dark:text-teal-400">Restrictions:</strong> Any form of reverse engineering, data injection compilation, scaling replication, or unauthorized platform reselling is prohibited.</li>
            <li><strong className="text-teal-700 dark:text-teal-400">Government Procurement:</strong> Standard framework clauses override specific baseline limitations where legal mandates require sovereign tech ownership flags.</li>
          </ul>
        </section>

        {/* Section 7: Data Protection Badges */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">7. Data Protection & Privacy</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white text-center">
            <div className="p-5 bg-sky-900 dark:bg-gray-800 rounded-xl border border-transparent dark:border-gray-700 flex flex-col justify-center">
              <span className="font-bold text-lg mb-1 block">EU/UK</span>
              <p className="text-xs text-gray-200">GDPR compliance with lawful bases and robust DPAs.</p>
            </div>
            <div className="p-5 bg-sky-900 dark:bg-gray-800 rounded-xl border border-transparent dark:border-gray-700 flex flex-col justify-center">
              <span className="font-bold text-lg mb-1 block">California</span>
              <p className="text-xs text-gray-200">CCPA/CPRA frameworks honored; zero data monetizing sales.</p>
            </div>
            <div className="p-5 bg-sky-900 dark:bg-gray-800 rounded-xl border border-transparent dark:border-gray-700 flex flex-col justify-center">
              <span className="font-bold text-lg mb-1 block">Canada</span>
              <p className="text-xs text-gray-200">PIPEDA-aligned data governance protocols enforced.</p>
            </div>
            <div className="p-5 bg-sky-900 dark:bg-gray-800 rounded-xl border border-transparent dark:border-gray-700 flex flex-col justify-center">
              <span className="font-bold text-lg mb-1 block">Africa</span>
              <p className="text-xs text-gray-200">POPIA/NDPR compliance with native cloud sovereignty paths.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed mt-2 pl-1">
            ZOIKO DIGITAL processes personal info in lockstep with our Privacy Policy guidelines. Users maintain complete ownership of injected core data matrices at all times.
          </p>
        </section>

        {/* Section 8 & 9 Row Split Frame */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-sky-900 dark:text-white border-b border-slate-200 dark:border-gray-800 pb-1">8. Confidentiality</h3>
            <p className="text-sm sm:text-base leading-relaxed text-sky-900/90 dark:text-gray-300">Both contractual parties agree to treat proprietary system insight logs as closed data assets. Disclosure to outside networks triggers legal breach parameters unless forced by jurisdictional subpoenas with verified advance warning tracks.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-sky-900 dark:text-white border-b border-slate-200 dark:border-gray-800 pb-1">9. Warranties & Disclaimers</h3>
            <p className="text-sm sm:text-base leading-relaxed text-sky-900/90 dark:text-gray-300"><strong className="text-teal-700 dark:text-teal-400">Service Warranty:</strong> Services will be delivered with reasonable skill and care. Except where explicitly forced by law, tools are delivered &quot;as is&quot; without implied suitability or non-infringement updates.</p>
          </section>
        </div>

        {/* Section 10: Liability Alert */}
        <section className="space-y-4">
          <div className="border-b-2 border-teal-700 dark:border-teal-500 pb-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-900 dark:text-white">10. Limitation of Liability</h2>
          </div>
          <div className="w-full bg-gradient-to-br from-sky-900/5 to-fuchsia-700/5 dark:from-gray-800 dark:to-gray-800/60 p-5 sm:p-6 rounded-xl border border-stone-200 dark:border-gray-700 text-sm sm:text-base leading-relaxed text-sky-900 dark:text-gray-300 space-y-3">
            <p>ZOIKO DIGITAL is not liable for indirect, incidental, or consequential damages (including loss of profits, data corruption, or operational goodwill metrics).</p>
            <p>Total cumulative liability caps securely at the net absolute value paid for provisioning tracks during the <strong className="text-teal-700 dark:text-teal-400 font-semibold">preceding 12 months</strong>.</p>
            <p className="text-xs sm:text-sm border-t border-slate-200 dark:border-gray-700 pt-3 text-slate-400"><strong>Regional Protections:</strong> Local consumer rules (e.g., UK Consumer Rights Act / EU Injury Liability standards) override this layout where absolute boundaries are required by courts.</p>
          </div>
        </section>

        {/* Section 11, 12 & 13 Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm sm:text-base text-sky-900 dark:text-gray-300">
          <div className="space-y-2">
            <h4 className="font-bold text-teal-700 dark:text-teal-400 border-b border-slate-200 dark:border-gray-800 pb-1">11. Termination</h4>
            <p className="text-sm leading-relaxed">Accounts terminate cleanly via mutual schedule provisions or immediate suspension bounds due to explicit contractual breach, local asset freezing, non-payment cycles, or illicit use loops.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-teal-700 dark:text-teal-400 border-b border-slate-200 dark:border-gray-800 pb-1">12. Governing Law</h4>
            <p className="text-sm leading-relaxed">Global accounts process under the legal frameworks of Sacramento, California, USA courts. Cross-border consumers maintain explicit priority recourse avenues matching local mandatory regional consumer boards.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-teal-700 dark:text-teal-400 border-b border-slate-200 dark:border-gray-800 pb-1">13. Amendments</h4>
            <p className="text-sm leading-relaxed">Terms receive regular security structural updates. Continued use of active dashboards past legal notification dates updates tracking permissions automatically to matching current policy baselines.</p>
          </div>
        </div>

        {/* Section 14: Corporate Legal Contacts */}
        <section className="w-full bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 text-white rounded-xl p-6 sm:p-8 space-y-6">
          <h3 className="text-xl font-bold border-b border-white/20 pb-2">14. Contact Our Legal Division</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm sm:text-base">
            <div className="space-y-2 col-span-1 md:col-span-1">
              <p className="font-bold text-lg text-teal-300">Privacy & Corporate Office</p>
              <p><strong>Primary Desk:</strong> legal@zoikoweb.com</p>
              <p><strong>HQ Node:</strong> Zoiko Digital, Sacramento, California, USA</p>
            </div>
            <div className="space-y-1 md:border-l md:border-white/20 md:pl-6 col-span-1 md:col-span-2">
              <p className="font-semibold text-teal-300 mb-1">Global Subsidiary Nodes:</p>
              <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm text-gray-200">
                <div>• Toronto, CA</div>
                <div>• London, UK</div>
                <div>• Madrid, ES</div>
                <div>• Lagos, NG</div>
                <div>• Nairobi, KE</div>
                <div>• Cape Town, ZA</div>
                <div>• Accra, GH</div>
                <div>• Orlando, US</div>
                <div>• Dover, US</div>
              </div>
            </div>
          </div>
        </section>

      </main>

      

    </div>
  );
}