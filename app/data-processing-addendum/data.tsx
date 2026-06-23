"use client";
import React, { useState, useEffect } from 'react';

export default function DataProcessingAddendumPage() {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [copiedSection, setCopiedSection] = useState<number | null>(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);

  const tableOfContents = [
    { num: 1, label: 'Definitions' },
    { num: 2, label: 'Roles & Relationship' },
    { num: 3, label: 'Processing Instructions' },
    { num: 4, label: 'Data Subject Rights' },
    { num: 5, label: 'Sub-processors' },
    { num: 6, label: 'International Transfers' },
    { num: 7, label: 'Security Measures' },
    { num: 8, label: 'Breach Notification' },
    { num: 9, label: 'Data Retention & Deletion' },
    { num: 10, label: 'Audit Rights' },
    { num: 11, label: 'Liability' },
    { num: 12, label: 'Term & Termination' },
    { num: 13, label: 'Governing Law' },
    { num: 14, label: 'Schedule A — Processing Details' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const sectionNum = id === 'section-schedule-a' ? 14 : parseInt(id.split('-')[1]);
            setActiveSection(sectionNum);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );

    tableOfContents.forEach((item) => {
      const id = item.num === 14 ? 'section-schedule-a' : `section-${item.num}`;
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent, num: number) => {
    e.preventDefault();
    const id = num === 14 ? 'section-schedule-a' : `section-${num}`;
    const element = document.getElementById(id);
    if (element) {
      const offset = 56;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      setActiveSection(num);
      setIsMobileTocOpen(false);
    }
  };

  const handleCopyLink = (num: number) => {
    const id = num === 14 ? 'section-schedule-a' : `section-${num}`;
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedSection(num);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const CopyBtn = ({ num }: { num: number }) => (
    <button
      onClick={() => handleCopyLink(num)}
      className="h-8 px-3 border border-gray-200 bg-white hover:bg-neutral-50 text-gray-600 text-xs font-semibold rounded-lg shadow-sm transition-colors"
    >
      {copiedSection === num ? 'Copied!' : 'Copy link'}
    </button>
  );

  const SectionHeader = ({ num, title }: { num: number; title: string }) => (
    <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">{num <= 13 ? num : 'A'}</span>
        <h2 className="text-zinc-900 text-xl font-bold">{title}</h2>
      </div>
      <CopyBtn num={num} />
    </div>
  );

  const BulletList = ({ items }: { items: string[] }) => (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-zinc-600 text-base leading-7">
          <span className="text-indigo-600 mt-0.5 shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-700 antialiased selection:bg-indigo-100 selection:text-indigo-900">

      {/* BANNER */}
      <section className="w-full relative bg-gradient-to-r from-fuchsia-700 to-sky-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-60 blur-[60px] pointer-events-none">
          <div className="absolute size-96 left-[5%] top-[-30%] bg-indigo-600 rounded-full mix-blend-screen opacity-70"></div>
          <div className="absolute size-96 right-[5%] top-[-10%] bg-cyan-500 rounded-full mix-blend-screen opacity-70"></div>
          <div className="absolute size-96 left-[40%] bottom-[-40%] bg-violet-500 rounded-full mix-blend-screen opacity-60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-28 relative z-10 flex flex-col justify-center">
          <span className="text-white text-xs font-bold uppercase tracking-wider">Legal — Cluster 2</span>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">Data Processing Addendum</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-sm" />
              <span>Effective January 1, 2025</span>
            </div>
            <span className="text-white/40 hidden sm:inline">|</span>
            <div>Version <span className="font-bold text-white">3.0</span></div>
            <span className="text-white/40 hidden sm:inline">|</span>
            <div>Governing language: <span className="font-bold text-white">American English</span></div>
          </div>
        </div>
      </section>

      {/* LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-28 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-28 space-y-8">
          <div>
            <h3 className="text-gray-600 text-xs font-bold uppercase tracking-wider mb-4 px-3">Contents</h3>
            <nav className="border-l border-gray-200">
              {tableOfContents.map((item) => (
                <a
                  key={item.num}
                  href={item.num === 14 ? '#section-schedule-a' : `#section-${item.num}`}
                  onClick={(e) => scrollToSection(e, item.num)}
                  className={`block pl-4 py-2 text-sm border-l-2 transition-all -ml-[1px] ${
                    activeSection === item.num
                      ? 'border-indigo-600 text-indigo-600 font-semibold bg-indigo-50/40'
                      : 'border-transparent text-gray-500 hover:text-zinc-900'
                  }`}
                >
                  {item.num <= 13 ? `${item.num}.` : 'Sch. A'} {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <button className="w-full h-11 px-4 bg-white border border-gray-200 hover:bg-neutral-50 transition-colors rounded-lg flex items-center gap-3 text-zinc-900 text-sm font-semibold shadow-sm">
              {/* Download icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-zinc-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download PDF
            </button>
          </div>
        </aside>

        {/* MAIN */}
        <main className="lg:col-span-8 xl:col-span-9 space-y-16">

          {/* MOBILE TOC */}
          <div className="lg:hidden w-full bg-white border-b border-gray-200 sticky top-0 z-50">
            <button
              onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
              className="w-full h-14 px-6 flex items-center justify-between text-left bg-[#FAFAFA] hover:bg-neutral-100 transition-colors focus:outline-none select-none"
              aria-expanded={isMobileTocOpen}
              aria-controls="mobile-toc-menu"
            >
              <span className="text-[#14161C] text-base font-bold leading-6">On this page</span>
              <span className="text-[#5C6270] text-xl font-bold w-8 h-8 flex items-center justify-center">
                {isMobileTocOpen ? '−' : '+'}
              </span>
            </button>
            <div
              id="mobile-toc-menu"
              className={`${isMobileTocOpen ? 'block' : 'hidden'} max-h-[50vh] overflow-y-auto border-t border-[#E8E8EC] bg-white shadow-lg`}
            >
              <nav className="py-2 text-sm font-medium">
                {tableOfContents.map((item) => (
                  <a
                    key={item.num}
                    href={item.num === 14 ? '#section-schedule-a' : `#section-${item.num}`}
                    onClick={(e) => scrollToSection(e, item.num)}
                    className={`block px-6 py-3.5 transition-colors border-l-4 ${
                      activeSection === item.num
                        ? 'bg-indigo-50/60 text-indigo-600 border-indigo-600 font-bold'
                        : 'border-transparent text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.num <= 13 ? `${item.num}.` : 'Sch. A'} {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* INTRO */}
          <div className="text-zinc-700 text-base leading-7">
            This Data Processing Addendum ("DPA") forms part of the agreement between Zoiko Tech Inc. (operating as Zoiko Web Services, "ZWS") and the Customer, and governs the processing of personal data by ZWS on the Customer's behalf in connection with the ZWS services.
          </div>

          {/* AT A GLANCE */}
          <div className="border border-indigo-600/20 bg-violet-100 rounded-xl p-6 space-y-3">
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider block">At a Glance</span>
            {[
              'ZWS acts as a data processor; the Customer is the data controller.',
              'ZWS processes personal data only on documented Customer instructions.',
              'Sub-processor changes are notified 30 days in advance with a right to object.',
              'International transfers rely on EU SCCs and equivalent UK mechanisms.',
              'Personal data breaches are reported within 72 hours of ZWS becoming aware.',
              'Data is deleted or returned within 30 days of agreement termination.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-zinc-700 text-sm leading-6">
                <span className="text-indigo-600 font-bold mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* SECTION 1 */}
          <section id="section-1" className="scroll-mt-20">
            <SectionHeader num={1} title="Definitions" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>Unless separately defined herein, capitalized terms have the meanings assigned in the ZWS Terms of Service or in applicable data protection law. For this DPA:</p>
              <ul className="space-y-3 pl-1">
                {[
                  { term: 'Controller', def: 'means the natural or legal person who determines the purposes and means of processing of personal data (the Customer in most cases).' },
                  { term: 'Processor', def: 'means the entity that processes personal data on behalf of the Controller (ZWS in most cases).' },
                  { term: 'Data Protection Law', def: 'means GDPR (EU 2016/679), UK GDPR, CCPA/CPRA, and any other applicable national or state data protection legislation.' },
                  { term: 'Personal Data', def: 'has the meaning given in applicable Data Protection Law.' },
                  { term: 'Processing', def: 'means any operation performed on personal data including collection, storage, use, disclosure, and deletion.' },
                  { term: 'Standard Contractual Clauses (SCCs)', def: 'means the clauses adopted by the European Commission under Decision 2021/914/EU.' },
                  { term: 'Sub-processor', def: "means any third party engaged by ZWS to process Personal Data on the Customer's behalf." },
                ].map(({ term, def }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-0.5 shrink-0">•</span>
                    <span><strong className="text-zinc-800">{term}</strong> {def}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="section-2" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={2} title="Roles and Relationship" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>The Customer is the Controller of Personal Data it uploads to or processes through ZWS services. ZWS is a Processor acting on the Customer's documented instructions. In limited contexts where ZWS independently determines the purposes and means of processing (e.g., billing records, security logs), ZWS acts as an independent Controller; such processing is governed by the ZWS Privacy Policy.</p>
              <p>This DPA supplements and is incorporated into the agreement between the parties. By accepting the ZWS Terms of Service or executing an Order Form, the Customer agrees to this DPA.</p>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="section-3" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={3} title="Processing Instructions" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>ZWS shall process Personal Data only:</p>
              <BulletList items={[
                'On the documented instructions of the Customer, including those in the ZWS Terms of Service, Order Forms, and applicable service configuration; and',
                'To the extent necessary to provide, maintain, and improve the contracted services; and',
                'As required by applicable law, in which case ZWS shall inform the Customer unless prohibited by law.',
              ]} />
              <p>If ZWS determines that a Customer instruction violates applicable Data Protection Law, ZWS will promptly notify the Customer. ZWS is not required to follow an instruction that would result in a violation of law.</p>
              <p>ZWS personnel authorized to process Personal Data are subject to binding confidentiality obligations.</p>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="section-4" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={4} title="Data Subject Rights" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>As the Controller, the Customer is responsible for responding to data subject rights requests (access, rectification, erasure, portability, objection, restriction). ZWS will:</p>
              <BulletList items={[
                'Promptly forward to the Customer any rights request received directly by ZWS from a data subject',
                'Provide technically feasible assistance to the Customer in fulfilling such requests within the ZWS platform (e.g., data export tools, deletion APIs)',
                'Not respond directly to a data subject rights request without Customer authorization, except as required by law',
              ]} />
              <p>Reasonable assistance beyond standard platform capabilities may be subject to ZWS's professional-services rates.</p>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="section-5" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={5} title="Sub-processors" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>The Customer grants ZWS a general authorization to engage Sub-processors, subject to the following conditions:</p>
              <BulletList items={[
                'ZWS will maintain a current list of Sub-processors at zoikoweb.com/legal/subprocessors.',
                'ZWS will notify the Customer at least 30 days before adding or replacing a Sub-processor by email and by updating the Subprocessors page.',
                'The Customer may object to a new Sub-processor within 14 days of notice on reasonable grounds related to data protection. If the parties cannot resolve the objection, the Customer may terminate the affected services without penalty within 30 days of the original notice.',
                'ZWS will impose data protection obligations on Sub-processors that are substantially equivalent to those in this DPA and remain liable to the Customer for Sub-processor acts and omissions.',
              ]} />
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="section-6" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={6} title="International Transfers" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>Where ZWS transfers Personal Data from the European Economic Area (EEA), the United Kingdom, or Switzerland to a country not recognized as providing adequate protection, the parties agree that such transfers are subject to the EU SCCs (Module 2: Controller to Processor) as incorporated herein by reference, or the equivalent UK International Data Transfer Addendum where UK law applies.</p>
              <p>The Annexes to the SCCs are populated as follows: Annex I corresponds to Schedule A of this DPA; Annex II describes ZWS's technical and organizational measures as set out in Section 7; Annex III lists the Sub-processors at <a href="#" className="text-indigo-600 hover:underline">/legal/subprocessors</a>.</p>
              {/* Amber counsel callout */}
              <div className="border-l-4 border-amber-500 bg-amber-50 rounded-tr-xl rounded-br-xl px-5 py-4 mt-2">
                <span className="text-zinc-700 text-xs font-bold uppercase tracking-wider block mb-1">Counsel Review Required</span>
                <p className="text-zinc-700 text-sm leading-6">The SCCs must be executed as a standalone addendum or specifically referenced in a signed agreement. This document provides the contractual framework only; entities covered by GDPR or UK GDPR should consult qualified counsel.</p>
              </div>
            </div>
          </section>

          {/* SECTION 7 */}
          <section id="section-7" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={7} title="Security Measures" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>ZWS implements and maintains appropriate technical and organizational measures to protect Personal Data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. These measures include, at minimum:</p>
              <BulletList items={[
                'Encryption of Personal Data in transit (TLS 1.2 or higher) and at rest (AES-256 or equivalent)',
                'Role-based access control with principle of least privilege and mandatory MFA for privileged access',
                'Vulnerability management, penetration testing, and security patching programs',
                'Physical security controls at ZWS data centers including locked cages, CCTV, and access logs',
                'Business continuity and disaster recovery plans with regular testing',
                'Binding confidentiality and security training requirements for personnel with access to Personal Data',
                'Logging and monitoring of access to Personal Data systems',
              ]} />
            </div>
          </section>

          {/* SECTION 8 */}
          <section id="section-8" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={8} title="Breach Notification" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>ZWS will notify the Customer without undue delay, and in any event within 72 hours of ZWS becoming aware of a Personal Data Breach that affects Customer data. The notification will include, to the extent known at the time:</p>
              <BulletList items={[
                'A description of the nature of the breach, including categories and approximate number of data subjects and records affected',
                'The name and contact details of the ZWS Data Protection Officer or equivalent contact point',
                'A description of likely consequences of the breach',
                'A description of measures taken or proposed to address the breach and mitigate its effects',
              ]} />
              <p>ZWS may provide the above information in phases as it becomes available. The Customer is responsible for notifying relevant supervisory authorities and data subjects as required by applicable Data Protection Law. ZWS will provide reasonable cooperation to assist with such notifications.</p>
            </div>
          </section>

          {/* SECTION 9 */}
          <section id="section-9" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={9} title="Data Retention and Deletion" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>ZWS will retain Customer Personal Data for the duration of the applicable service agreement, plus any retention period required by law. Upon termination or expiration of the service agreement (or at Customer request, if sooner), ZWS will:</p>
              <BulletList items={[
                'Make Customer Personal Data available for export via the ZWS data-export tooling for a period of 30 days after the termination date; and',
                'Securely delete or anonymize all remaining Customer Personal Data within 60 days of the termination date, unless longer retention is required by applicable law; and',
                'On request, provide a written confirmation of deletion.',
              ]} />
              <p>Backup copies of deleted data are overwritten in the ordinary course of ZWS's backup rotation cycle, typically within 90 days.</p>
            </div>
          </section>

          {/* SECTION 10 */}
          <section id="section-10" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={10} title="Audit Rights" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>ZWS will make available all information reasonably necessary to demonstrate compliance with this DPA and will allow for and contribute to audits and inspections by the Customer or a mutually agreed auditor, subject to the following conditions:</p>
              <BulletList items={[
                "At least 30 days' prior written notice is provided",
                'Audits are conducted no more than once per calendar year absent a specific security concern',
                'The audit scope is limited to ZWS systems relevant to the processing of Customer Personal Data',
                'The auditor executes a confidentiality agreement with ZWS before commencing the audit',
                'Costs of the audit are borne by the Customer unless the audit reveals material non-compliance',
              ]} />
              <p>ZWS may satisfy audit obligations by providing up-to-date third-party audit reports (e.g., SOC 2 Type II, ISO 27001 certification) in lieu of on-site inspection where the Customer agrees.</p>
            </div>
          </section>

          {/* SECTION 11 */}
          <section id="section-11" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={11} title="Liability" />
            <div className="text-zinc-600 text-base leading-7">
              <p>Each party's liability under this DPA is subject to the limitations set out in the applicable service agreement. To the extent Data Protection Law mandates unlimited or higher liability (e.g., GDPR Article 82), those mandatory provisions prevail over any contractual cap solely with respect to claims brought by data subjects or supervisory authorities, and not for claims between the parties.</p>
            </div>
          </section>

          {/* SECTION 12 */}
          <section id="section-12" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={12} title="Term and Termination" />
            <div className="text-zinc-600 text-base leading-7">
              <p>This DPA is effective from the date the Customer accepts the ZWS Terms of Service or enters into an applicable Order Form, and remains in force until the underlying service agreement terminates. Obligations regarding confidentiality, deletion, and audit survive termination.</p>
            </div>
          </section>

          {/* SECTION 13 */}
          <section id="section-13" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={13} title="Governing Law" />
            <div className="text-zinc-600 text-base leading-7">
              <p>This DPA is governed by and construed in accordance with the laws of the state of [State — Placeholder], United States, except that the SCCs and UK Addendum shall be governed by the applicable EU or UK law as required for their validity. Disputes are subject to the jurisdiction clause in the ZWS Terms of Service.</p>
            </div>
          </section>

          {/* SCHEDULE A */}
          <section id="section-schedule-a" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">A</span>
                <h2 className="text-zinc-900 text-xl font-bold">Schedule A — Processing Details</h2>
              </div>
              <CopyBtn num={14} />
            </div>

            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-50 border-b border-gray-200">
                    <th className="p-4 text-gray-600 text-xs font-bold uppercase tracking-wider w-40">Attribute</th>
                    <th className="p-4 text-gray-600 text-xs font-bold uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 text-sm divide-y divide-gray-100">
                  {[
                    { attr: 'Subject matter', detail: 'Provision of cloud hosting, API, and managed services as described in the Order Form or ZWS Terms of Service' },
                    { attr: 'Duration', detail: 'Term of the applicable service agreement' },
                    { attr: 'Nature of processing', detail: 'Storage, transmission, computation, and backup on ZWS infrastructure as directed by the Customer' },
                    { attr: 'Purpose of processing', detail: 'To provide the contracted services; to maintain service performance, security, and availability' },
                    { attr: 'Categories of data subjects', detail: "Customer's end-users, employees, contractors, and any other individuals whose data the Customer uploads to ZWS services" },
                    { attr: 'Categories of personal data', detail: 'Determined by the Customer; may include contact details, account credentials, usage data, and any other data the Customer elects to process on ZWS infrastructure' },
                    { attr: 'Special categories', detail: 'None anticipated; Customer must notify ZWS before processing special category data and obtain additional controls' },
                    { attr: 'Controller contact', detail: "As specified in the Customer's account registration or Order Form" },
                  ].map(({ attr, detail }, i) => (
                    <tr key={i}>
                      <td className="p-4 font-semibold text-zinc-800 align-top">{attr}</td>
                      <td className="p-4 text-zinc-600">{detail}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="p-4 font-semibold text-zinc-800 align-top">Processor contact (DPO)</td>
                    <td className="p-4">
                      <a href="mailto:dpo@zoikoweb.com" className="text-indigo-600 hover:underline font-medium">dpo@zoikoweb.com</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CONTACT CARD */}
          <section className="pt-6 border-t border-gray-100">
            <h2 className="text-zinc-900 text-xl font-bold mb-6">Contact Channels</h2>
            <div className="border border-gray-200 bg-white rounded-2xl shadow-sm p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-neutral-50 rounded-lg p-4">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Data Protection Officer</span>
                <a href="mailto:dpo@zoikoweb.com" className="text-indigo-600 font-semibold text-sm hover:underline">dpo@zoikoweb.com</a>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Privacy Team</span>
                <a href="mailto:privacy@zoikoweb.com" className="text-indigo-600 font-semibold text-sm hover:underline">privacy@zoikoweb.com</a>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Legal Portal</span>
                <a href="#" className="text-indigo-600 font-semibold text-sm hover:underline">Submit inquiry</a>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Subprocessors</span>
                <a href="#" className="text-indigo-600 font-semibold text-sm hover:underline">View current list</a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}