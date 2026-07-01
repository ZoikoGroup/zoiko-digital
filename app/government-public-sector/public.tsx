import React from 'react';

export default function ZoikoGovServices() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 text-sky-900 dark:text-slate-100  selection:bg-sky-900/10 transition-colors duration-300">
      
      {/* SECTION 1: HERO BANNER */}
      <section className="relative bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 dark:from-indigo-950 dark:via-teal-900 dark:to-slate-900 text-white overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15]">
              Secure, Transparent, and<br />Citizen-Centric Digital<br />Government Solutions
            </h1>
            <p className="text-lg font-normal leading-relaxed opacity-90 max-w-2xl">
              Zoiko Web Services empowers governments, agencies, and public institutions with AI-powered, cloud-native platforms that modernize infrastructure, protect sensitive data and improve citizen trust — all with telecom-grade resilience.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[510px] h-80 bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl">
              <img 
                className="w-full h-full object-cover" 
                src="/images/government-public/selective-focus.png" 
                alt="Digital Government Solutions" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INDUSTRY CHALLENGES */}
      <section className="bg-sky-50 dark:bg-slate-900/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-sky-900 dark:text-sky-400 text-3xl font-bold leading-[52px] mb-12">
            Industry Challenges We Solve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none flex flex-col justify-between min-h-[240px]">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold leading-snug mb-4">
                Legacy IT Infrastructure
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                70% of government IT budgets go to maintaining outdated systems.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none flex flex-col justify-between min-h-[240px]">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold leading-snug mb-4">
                Cybersecurity & Data Privacy
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Public sector is the #1 target of ransomware attacks; sovereign data is non-negotiable.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none flex flex-col justify-between min-h-[240px]">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold leading-snug mb-4">
                Regulatory Complexity
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Governments must meet FedRAMP, NIST, GDPR, ISO 27001, and national compliance standards simultaneously.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none flex flex-col justify-between min-h-[240px]">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold leading-snug mb-4">
                Procurement & Inter-Agency Complexity
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Long procurement cycles and siloed agencies delay modernization.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none flex flex-col justify-between min-h-[240px]">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold leading-snug mb-4">
                Budget Pressures & Public Accountability
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Citizens demand efficiency, but funding is constrained.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none flex flex-col justify-between min-h-[240px]">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold leading-snug mb-4">
                Talent & Skills Gaps
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Lack of digital expertise limits innovation and transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CAPABILITIES */}
      <section className="bg-white dark:bg-slate-950 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-sky-900 dark:text-sky-400 text-3xl font-bold leading-[52px] mb-12">
            Our Capabilities (Outcome-Driven)
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Capability 1 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[192px]">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold mb-4">
                Cloud Modernization
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Transition legacy systems to secure, compliant cloud platforms, cutting IT costs by up to 25%.
              </p>
            </div>

            {/* Capability 2 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[192px]">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold mb-4">
                AI-Powered Citizen Services
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Chatbots, digital portals, and predictive analytics reducing case resolution times by 40%.
              </p>
            </div>

            {/* Capability 3 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[240px]">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold mb-4">
                Cybersecurity & Sovereign Cloud (ZoikoShield)
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Protect sensitive government data with Tier-1 security and national sovereignty controls.
              </p>
            </div>

            {/* Capability 4 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[240px]">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold mb-4">
                Regulatory & Compliance Platforms (ZoikoAssure)
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Automated compliance reporting, audit readiness, and regulatory alignment across jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PLATFORMS */}
      <section className="bg-fuchsia-50 dark:bg-fuchsia-950/20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-sky-900 dark:text-sky-400 text-3xl font-bold leading-[52px] mb-12">
            Featured Public Sector Platforms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Platform 1 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[240px] flex flex-col justify-between">
              <div>
                <h3 className="text-fuchsia-700 dark:text-fuchsia-400 text-3xl font-bold mb-2">
                  ZoikoAssure
                </h3>
                <div className="text-sky-900/80 dark:text-slate-300 text-base font-bold mb-4">
                  Compliance & RegTech Platform
                </div>
              </div>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Reduces audit workloads by 50%, ensuring multi-jurisdictional readiness.
              </p>
            </div>

            {/* Platform 2 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[240px] flex flex-col justify-between">
              <div>
                <h3 className="text-fuchsia-700 dark:text-fuchsia-400 text-3xl font-bold mb-2">
                  ZoikoShield
                </h3>
                <div className="text-sky-900/80 dark:text-slate-300 text-base font-bold mb-4">
                  Cybersecurity for Government
                </div>
              </div>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Sovereign cloud architecture ensuring zero data leakage.
              </p>
            </div>

            {/* Platform 3 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[240px] flex flex-col justify-between">
              <div>
                <h3 className="text-fuchsia-700 dark:text-fuchsia-400 text-3xl font-bold mb-2">
                  ZoikoAxis
                </h3>
                <div className="text-sky-900/80 dark:text-slate-300 text-base font-bold mb-4">
                  Smart Public Sector Engineering
                </div>
              </div>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                IoT and AI solutions for smart cities and critical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CASE STUDIES */}
      <section className="bg-sky-50 dark:bg-slate-900/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-sky-900 dark:text-sky-400 text-3xl font-bold leading-[52px] mb-12">
            Case Studies & Client Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[256px] flex flex-col justify-between">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold leading-snug mb-4">
                E-Government<br />Transformation
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                Migrated 10M+ citizen records to a compliant cloud, reducing service delivery times by 35%.
              </p>
            </div>

            {/* Case 2 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[256px] flex flex-col justify-between">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold leading-snug mb-4">
                Cybersecurity Upgrade
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                ZoikoShield cut cyber incident response times by 40%, saving millions in potential damages.
              </p>
            </div>

            {/* Case 3 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[256px] flex flex-col justify-between">
              <h3 className="text-sky-900 dark:text-slate-200 text-2xl font-bold leading-snug mb-4">
                Smart City Deployment
              </h3>
              <p className="text-sky-800 dark:text-slate-400 text-lg font-normal leading-7">
                AI-driven traffic optimization reduced congestion by 25% and CO₂ emissions by 15% annually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY GOVERNMENTS TRUST ZOIKO */}
      <section className="bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 dark:from-indigo-950 dark:to-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-white text-3xl font-bold leading-[52px] mb-12">
            Why Governments Trust Zoiko
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Trust Card 1 */}
            <div className="bg-white/10 dark:bg-slate-900/40 p-8 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] backdrop-blur-[5px] min-h-[192px]">
              <h3 className="text-white text-2xl font-bold mb-4">
                Compliance-First DNA
              </h3>
              <p className="text-white/90 dark:text-slate-300 text-lg font-normal leading-7">
                Certified for FedRAMP, NIST, GDPR, ISO 27001, and CCPA.
              </p>
            </div>

            {/* Trust Card 2 */}
            <div className="bg-white/10 dark:bg-slate-900/40 p-8 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] backdrop-blur-[5px] min-h-[192px]">
              <h3 className="text-white text-2xl font-bold mb-4">
                Vendor-Neutral Partner
              </h3>
              <p className="text-white/90 dark:text-slate-300 text-lg font-normal leading-7">
                Sovereign cloud and open APIs prevent vendor lock-in.
              </p>
            </div>

            {/* Trust Card 3 */}
            <div className="bg-white/10 dark:bg-slate-900/40 p-8 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] backdrop-blur-[5px] min-h-[192px]">
              <h3 className="text-white text-2xl font-bold mb-4">
                Proven Deployments
              </h3>
              <p className="text-white/90 dark:text-slate-300 text-lg font-normal leading-7">
                Trusted by agencies and municipalities worldwide.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Trust Card 4 */}
            <div className="bg-white/10 dark:bg-slate-900/40 p-8 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] backdrop-blur-[5px] min-h-[240px]">
              <h3 className="text-white text-2xl font-bold mb-4">
                Telecom + Public Sector Dual DNA
              </h3>
              <p className="text-white/90 dark:text-slate-300 text-lg font-normal leading-7">
                Unmatched reliability, resilience, and scale.
              </p>
            </div>

            {/* Trust Card 5 */}
            <div className="bg-white/10 dark:bg-slate-900/40 p-8 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] backdrop-blur-[5px] min-h-[240px]">
              <h3 className="text-white text-2xl font-bold mb-4">
                Social Impact & ESG Commitment
              </h3>
              <p className="text-white/90 dark:text-slate-300 text-lg font-normal leading-7">
                Inclusive digital services, sustainable infrastructure, and ethical AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: INSIGHTS & LEADERSHIP */}
      <section className="bg-white dark:bg-slate-950 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-sky-900 dark:text-sky-400 text-3xl font-bold leading-[52px] mb-12">
            Insights & Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[192px] flex flex-col justify-between">
              <h3 className="text-sky-900 dark:text-sky-400 text-2xl font-bold mb-4">
                Whitepaper
              </h3>
              <p className="text-sky-800 dark:text-slate-300 text-lg font-normal leading-7">
                Digital Government 2025 — Building Citizen Trust with AI
              </p>
            </div>

            {/* Article 2 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[192px] flex flex-col justify-between">
              <h3 className="text-sky-900 dark:text-sky-400 text-2xl font-bold mb-4">
                Webinar
              </h3>
              <p className="text-sky-800 dark:text-slate-300 text-lg font-normal leading-7">
                Securing the Public Sector — Best Practices for Cyber Resilience
              </p>
            </div>

            {/* Article 3 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] dark:shadow-none min-h-[192px] flex flex-col justify-between">
              <h3 className="text-sky-900 dark:text-sky-400 text-2xl font-bold mb-4">
                Report
              </h3>
              <p className="text-sky-800 dark:text-slate-300 text-lg font-normal leading-7">
                Smart Cities & Digital Infrastructure — Global Benchmarks for 2025
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-zinc-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div className="flex flex-col gap-12 pt-8 lg:max-w-[552px]">
            <div className="flex flex-col gap-[34px]">
              <h2 className="text-zinc-800 text-xl lg:text-[32px] font-bold    leading-8 lg:leading-9">
                Ready to Transform<br />Your Business?
              </h2>
              <p className="text-neutral-600 text-base lg:text-lg font-normal    leading-7">
                Connect with our global team of experts to discuss your digital<br className="hidden lg:block" />transformation journey and discover how we can accelerate your<br className="hidden lg:block" />success.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG.svg" alt="Email Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold    leading-7">Email Us</h4>
                  <a href="mailto:hello@zws.com" className="text-zinc-400 text-sm lg:text-base font-normal    leading-6 hover:text-sky-900 transition-colors">hello@zws.com</a>
                  <span className="text-zinc-500 text-xs lg:text-sm font-normal    leading-6 mt-0 lg:mt-1">Response within 4 hours</span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG-1.svg" alt="Phone Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold    leading-7">Call Us</h4>
                  <a href="tel:+15551234567" className="text-zinc-400 text-sm lg:text-base font-normal    leading-6 hover:text-sky-900 transition-colors">+1 (555) 123-4567</a>
                  <span className="text-zinc-500 text-xs lg:text-sm font-normal    leading-6 mt-0 lg:mt-1">24/7 Support Available</span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 flex items-center justify-center shrink-0">
                  <img src="/images/about/SVG-2.svg" alt="Chat Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 text-base lg:text-lg font-semibold    leading-7">Live Chat</h4>
                  <span className="text-zinc-400 text-sm lg:text-base font-normal    leading-6">Instant Support</span>
                  <div className="flex items-center gap-2 mt-0 lg:mt-1">
                    <span className="text-zinc-500 text-xs lg:text-sm font-normal    leading-6">Online now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-8 md:p-10 border border-neutral-400 w-full lg:max-w-[572px] lg:ml-auto">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Full Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Business Email</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Company</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Service Interest</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-14 px-4 bg-neutral-100 rounded-lg border border-stone-300 appearance-none text-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all">
                    <option value="" disabled className="text-neutral-400">Select a service</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="web">Web Development</option>
                    <option value="compliance">Compliance</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Project Budget</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-14 px-4 bg-neutral-100 rounded-lg border border-stone-300 appearance-none text-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all">
                    <option value="" disabled className="text-neutral-400">Select budget range</option>
                    <option value="small">Under $10,000</option>
                    <option value="medium">$10,000 - $50,000</option>
                    <option value="large">$50,000+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 text-sm font-semibold    leading-6">Project Details</label>
                <textarea
                  className="w-full h-28 p-4 bg-neutral-100 rounded-lg border border-stone-300 resize-none focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all text-zinc-800 placeholder-neutral-400"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-4 w-56 h-14 self-start bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 hover:from-indigo-900 hover:via-teal-800 hover:to-teal-500 text-white text-base font-semibold    rounded-xl transition-all cursor-pointer"
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