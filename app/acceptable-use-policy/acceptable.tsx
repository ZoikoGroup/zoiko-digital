"use client";
import React, { useState, useEffect } from 'react';

export default function AcceptableUsePolicyPage() {
  const [activeSection, setActiveSection] = useState(1);
 const [copiedSection, setCopiedSection] = useState<number | null>(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  const tableOfContents = [
    { num: 1, label: 'Purpose & Scope' },
    { num: 2, label: 'Covered Services' },
    { num: 3, label: 'Prohibited Conduct' },
    { num: 4, label: 'Content Standards' },
    { num: 5, label: 'Security Obligations' },
    { num: 6, label: 'Resource Fair Use' },
    { num: 7, label: 'Monitoring & Enforcement' },
    { num: 8, label: 'Reporting Violations' },
    { num: 9, label: 'Suspension & Termination' },
    { num: 10, label: 'Amendments' },
    { num: 11, label: 'Contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionNum = parseInt(entry.target.id.split('-')[1]);
            setActiveSection(sectionNum);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );
    tableOfContents.forEach((item) => {
      const element = document.getElementById(`section-${item.num}`);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent, num: number) => {
    e.preventDefault();
    const element = document.getElementById(`section-${num}`);
    if (element) {
      const offset = 56;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(num);
      setIsMobileTocOpen(false);
    }
  };

  const handleCopyLink = (num: number) => {
    const url = `${window.location.origin}${window.location.pathname}#section-${num}`;
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
        <span className="w-7 h-7 flex items-center justify-center bg-violet-100 rounded-lg text-indigo-600 text-xs font-extrabold">{num}</span>
        <h2 className="text-zinc-900 text-xl font-bold">{title}</h2>
      </div>
      <CopyBtn num={num} />
    </div>
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
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">Acceptable Use Policy</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-sm" />
              <span>Effective January 1, 2025</span>
            </div>
            <span className="text-white/40 hidden sm:inline">|</span>
            <div>Version <span className="font-bold text-white">2.1</span></div>
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
            <h3 className="text-gray-600 text-xs font-bold uppercase tracking-wider mb-4 px-3">On this page</h3>
            <nav className="border-l border-gray-200">
              {tableOfContents.map((item) => (
                <a
                  key={item.num}
                  href={`#section-${item.num}`}
                  onClick={(e) => scrollToSection(e, item.num)}
                  className={`block pl-4 py-2 text-sm border-l-2 transition-all -ml-[1px] ${
                    activeSection === item.num
                      ? 'border-indigo-600 text-indigo-600 font-semibold bg-indigo-50/40'
                      : 'border-transparent text-gray-500 hover:text-zinc-900'
                  }`}
                >
                  {item.num} · {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="space-y-3 pt-4 border-t border-gray-200">
 <button className="w-full h-11 px-4 bg-white border border-gray-200 hover:bg-neutral-50 transition-colors rounded-lg flex items-center gap-3 text-zinc-900 text-sm font-semibold shadow-sm">
              {/* Download icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-zinc-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download PDF
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
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
              <span className="text-[#5C6270] text-xl font-bold leading-8 w-8 h-8 flex items-center justify-center transition-transform duration-200">
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
                    href={`#section-${item.num}`}
                    onClick={(e) => scrollToSection(e, item.num)}
                    className={`block px-6 py-3.5 transition-colors border-l-4 ${
                      activeSection === item.num
                        ? 'bg-indigo-50/60 text-indigo-600 border-indigo-600 font-bold'
                        : 'border-transparent text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.num}. {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* INTRO TEXT */}
          <div className="text-zinc-700 text-base leading-7">
            This Acceptable Use Policy ("Policy") governs all use of services, software, APIs, and infrastructure provided by Zoiko Tech Inc. and its subsidiaries operating under the Zoiko Web Services brand (collectively "ZWS," "we," "our"). By accessing or using any ZWS service, you ("Customer," "User") agree to comply with this Policy.
          </div>

          {/* AT A GLANCE */}
          <div className="border border-indigo-600/20 bg-violet-100 rounded-xl p-6 space-y-3">
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider block">At a Glance</span>
            {[
              'You may only use ZWS services for lawful purposes.',
              'Prohibited activities include distributing malware, sending spam, and scraping without authorization.',
              'You are responsible for all activity occurring under your account.',
              'ZWS may suspend services immediately for material policy violations.',
              'Report suspected abuse to abuse@zoikoweb.com.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-zinc-700 text-sm leading-6">
                <span className="text-indigo-600 font-bold mt-0.5">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* SECTION 1 */}
          <section id="section-1" className="scroll-mt-20">
            <SectionHeader num={1} title="Purpose and Scope" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>This Acceptable Use Policy ("Policy") governs all use of services, software, APIs, and infrastructure provided by Zoiko Tech Inc. and its subsidiaries operating under the Zoiko Web Services brand (collectively "ZWS," "we," "our"). By accessing or using any ZWS service, you ("Customer," "User") agree to comply with this Policy.</p>
              <p>This Policy supplements and is incorporated into the ZWS Terms of Service and any applicable service agreement. In the event of conflict, the more restrictive provision applies unless expressly stated otherwise in writing by ZWS.</p>
              <p>This Policy applies to all users of ZWS services, including administrators, end-users, contractors, and third-party integrations acting on your behalf.</p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="section-2" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={2} title="Covered Services" />
            <div className="space-y-3 text-zinc-600 text-base leading-7">
              <p>This Policy applies to all ZWS products and services, including but not limited to:</p>
              <ul className="space-y-2 pl-1">
                {[
                  'Managed cloud hosting and virtual machine environments',
                  'Content delivery network (CDN) and edge services',
                  'Managed databases and storage buckets',
                  'Developer APIs and SDKs',
                  'Email relay, transactional mail, and SMS gateway services',
                  'DNS management and domain registration ancillary services',
                  'Analytics, monitoring, and observability platforms',
                  'ZWS customer portal, documentation sites, and support systems',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="section-3" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={3} title="Prohibited Conduct" />
            <div className="space-y-6 text-zinc-600 text-base leading-7">
              <p>The following activities are strictly prohibited on ZWS infrastructure:</p>

              {/* Zero Tolerance callout */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-tr-xl rounded-br-xl px-5 py-4">
                <span className="text-zinc-700 text-xs font-bold uppercase tracking-wider block mb-1">Zero Tolerance</span>
                <p className="text-zinc-700 text-sm leading-6">The items in Section 3.1 result in immediate suspension without notice and may be referred to law enforcement.</p>
              </div>

              <div>
                <h4 className="text-zinc-800 font-bold mb-3">3.1 Illegal and Harmful Activity</h4>
                <ul className="space-y-2 pl-1">
                  {[
                    'Distributing, hosting, or transmitting child sexual abuse material (CSAM) or any content that exploits minors',
                    'Facilitating terrorism, violent extremism, or activities designated as unlawful under applicable international or domestic law',
                    'Engaging in human trafficking, forced labor, or slavery-related activities',
                    'Unauthorized access to computer systems, networks, or data (hacking)',
                    'Creating, distributing, or deploying malware, ransomware, spyware, or any malicious code',
                    'Operating botnets or command-and-control infrastructure for malicious purposes',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-zinc-800 font-bold mb-3">3.2 Network and Infrastructure Abuse</h4>
                <ul className="space-y-2 pl-1">
                  {[
                    'Launching or facilitating denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks',
                    'Conducting unauthorized port scans, vulnerability scans, or penetration tests against third-party systems',
                    'Forging network packet headers (IP spoofing, ARP poisoning)',
                    'Intercepting or monitoring network traffic without authorization',
                    'Attempting to bypass network security measures, firewalls, or rate limits',
                    'Operating open mail relays or anonymous proxy services used for abuse',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-zinc-800 font-bold mb-3">3.3 Spam and Unsolicited Communication</h4>
                <ul className="space-y-2 pl-1">
                  {[
                    'Sending unsolicited bulk email (spam) or SMS messages',
                    'Harvesting or scraping email addresses or other personal data without authorization',
                    'Operating phishing campaigns, spear-phishing infrastructure, or credential-harvesting pages',
                    'Sending commercial electronic messages in violation of CAN-SPAM, CASL, PECR, or equivalent legislation',
                    'Falsifying message headers or sender identity',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-zinc-800 font-bold mb-3">3.4 Intellectual Property Infringement</h4>
                <ul className="space-y-2 pl-1">
                  {[
                    'Hosting, distributing, or transmitting content that infringes copyrights, trademarks, patents, or trade secrets',
                    'Operating piracy sites, torrent trackers, or similar platforms that facilitate infringement',
                    'Circumventing digital rights management (DRM) or technological protection measures',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-zinc-800 font-bold mb-3">3.5 Fraud and Deception</h4>
                <ul className="space-y-2 pl-1">
                  {[
                    'Operating fraudulent websites, fake payment pages, or counterfeit storefronts',
                    'Impersonating any person, entity, or ZWS itself',
                    'Conducting investment fraud, pyramid schemes, or any form of financial deception',
                    'Submitting false or misleading information to ZWS',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="section-4" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={4} title="Content Standards" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>You are responsible for all content stored, processed, or transmitted through ZWS services. Content must not:</p>
              <ul className="space-y-2 pl-1">
                {[
                  'Incite hatred or violence against individuals or groups on the basis of protected characteristics',
                  'Constitute defamation, harassment, or threats directed at identifiable individuals',
                  "Violate any individual's reasonable expectation of privacy (e.g., non-consensual intimate imagery)",
                  'Contain misleading health claims or promote unlicensed pharmaceutical products',
                  'Constitute unlawful gambling operations where prohibited by applicable law',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span>{item}</li>
                ))}
              </ul>
              <div className="border-l-4 border-indigo-600 bg-violet-100 rounded-tr-xl rounded-br-xl px-5 py-4 mt-4">
                <span className="text-zinc-700 text-xs font-bold uppercase tracking-wider block mb-1">Note</span>
                <p className="text-zinc-700 text-sm leading-6">Certain content categories — adult content, high-risk financial services, alcohol and tobacco, firearms information — may be permitted subject to ZWS approval, applicable law, age-gating, and additional terms. Contact <a href="mailto:legal@zoikoweb.com" className="text-indigo-600 hover:underline">legal@zoikoweb.com</a> for guidance.</p>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="section-5" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={5} title="Security Obligations" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>All customers are expected to maintain reasonable security hygiene for their ZWS accounts and deployments, including:</p>
              <ul className="space-y-2 pl-1">
                {[
                  'Enabling multi-factor authentication (MFA) on all administrative accounts',
                  'Rotating API keys, secrets, and credentials at regular intervals and immediately upon suspected compromise',
                  'Applying security patches and updates to software running on ZWS infrastructure in a timely manner',
                  'Restricting access to the principle of least privilege',
                  'Promptly notifying ZWS of any security incident or suspected breach affecting ZWS infrastructure at abuse@zoikoweb.com',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span>{item}</li>
                ))}
              </ul>
              <p>Customers who conduct authorized security research involving ZWS systems must first obtain written approval through the ZWS vulnerability disclosure program.</p>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="section-6" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={6} title="Resource Fair Use" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>ZWS services are shared infrastructure. Customers must not consume resources in a manner that materially degrades service quality for other customers. Specifically:</p>
              <ul className="space-y-2 pl-1">
                {[
                  'Shared hosting plans may not be used to run resource-intensive batch processing, cryptocurrency mining, or sustained CPU-bound workloads; upgrade to dedicated compute plans for such workloads.',
                  'Bandwidth-intensive operations (large media delivery, software distribution) must use the CDN product rather than origin servers where that option is available.',
                  'Automated API requests must implement exponential backoff and respect rate-limit response headers (429 Too Many Requests).',
                  'Accounts exhibiting abusive resource patterns will receive notification and a reasonable remediation window before throttling or suspension is applied.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* SECTION 7 */}
          <section id="section-7" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={7} title="Monitoring and Enforcement" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>ZWS monitors network-level activity (traffic patterns, metadata) for abuse signals. ZWS does not routinely inspect customer content; however, ZWS may review content when:</p>
              <ul className="space-y-2 pl-1">
                {[
                  'A credible abuse complaint is received',
                  'Automated systems flag activity for human review',
                  'Required to do so by valid legal process',
                  'Necessary to protect the security or integrity of ZWS infrastructure',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span>{item}</li>
                ))}
              </ul>
              <p>Enforcement actions are proportionate to the severity of the violation and may include a warning, content removal request, traffic throttling, account suspension, or permanent termination.</p>
            </div>
          </section>

          {/* SECTION 8 */}
          <section id="section-8" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={8} title="Reporting Violations" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>To report suspected abuse of ZWS services, email <a href="mailto:abuse@zoikoweb.com" className="text-indigo-600 hover:underline font-semibold">abuse@zoikoweb.com</a> with the following details:</p>
              <ul className="space-y-2 pl-1">
                {[
                  'A description of the observed activity',
                  'Relevant URLs, IP addresses, or account identifiers',
                  'Date, time, and time zone of the observation',
                  'Any supporting evidence (screenshots, log extracts)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-indigo-600 mt-0.5">•</span>{item}</li>
                ))}
              </ul>
              <p>ZWS acknowledges abuse reports within two business days and provides a final disposition within ten business days where possible. ZWS does not publicly disclose enforcement actions.</p>
            </div>
          </section>

          {/* SECTION 9 */}
          <section id="section-9" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={9} title="Suspension and Termination" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>For non-critical violations, ZWS will generally provide a written notice specifying the violation and granting a 48-hour cure period before taking enforcement action. For violations listed under Section 3.1, ZWS reserves the right to suspend services immediately and without prior notice.</p>
              <p>Following termination for cause, ZWS may retain data for up to 30 days to facilitate legal holds or law enforcement requests, after which it will be securely deleted in accordance with the Privacy Policy.</p>
              <p>Customers who believe a suspension was issued in error may appeal by contacting <a href="mailto:legal@zoikoweb.com" className="text-indigo-600 hover:underline font-semibold">legal@zoikoweb.com</a> within 14 days of receiving the suspension notice.</p>
            </div>
          </section>

          {/* SECTION 10 */}
          <section id="section-10" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={10} title="Amendments" />
            <div className="space-y-4 text-zinc-600 text-base leading-7">
              <p>ZWS may amend this Policy at any time. Material changes will be communicated by email to the primary account holder and by posting a notice on the ZWS status and blog pages at least 14 days before the effective date, except where immediate amendment is required to respond to security threats or legal obligations.</p>
              <p>Continued use of ZWS services after the effective date of an amendment constitutes acceptance of the revised Policy.</p>
            </div>
          </section>

          {/* SECTION 11 */}
          <section id="section-11" className="scroll-mt-20 pt-6 border-t border-gray-100">
            <SectionHeader num={11} title="Contact" />
            <p className="text-zinc-600 text-base mb-6">For questions about this Policy, contact the ZWS Trust and Safety team:</p>
            <div className="border border-gray-200 bg-white rounded-2xl shadow-sm p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-neutral-50 rounded-lg p-4">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Abuse Reports</span>
                <a href="mailto:abuse@zoikoweb.com" className="text-indigo-600 font-semibold text-sm hover:underline">abuse@zoikoweb.com</a>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Legal & Appeals</span>
                <a href="mailto:legal@zoikoweb.com" className="text-indigo-600 font-semibold text-sm hover:underline">legal@zoikoweb.com</a>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Legal Portal</span>
                <a href="#" className="text-indigo-600 font-semibold text-sm hover:underline">Submit inquiry</a>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4 sm:col-span-2 md:col-span-3">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Postal Address</span>
                <p className="text-zinc-700 text-base">Zoiko Tech Inc., Legal Dept.<br />[Address — Placeholder]</p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}