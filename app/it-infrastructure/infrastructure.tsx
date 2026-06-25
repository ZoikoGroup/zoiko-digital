import React from 'react';

export default function ManagedITServicesPage() {
  return (
    <main className="bg-neutral-50 antialiased selection:bg-fuchsia-200">
    

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
             <img 
              className= " rounded-2xl w-full h-full object-cover md:hidden block mb-4 " 
              src="/images/it-infrastructure/IT operations center.png" 
              alt="IT Management Visualization" 
            />
          <div className="inline-block bg-violet-100 rounded-full px-4 py-1 mb-4">
            <span className="text-[#4F46E5] md:text-fuchsia-700 text-xs font-bold uppercase tracking-wider">
              Managed IT Services
            </span>
          </div>
          <h1 className="text-zinc-900 text-4xl md:text-6xl font-black leading-tight">
            IT that just works.
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Round-the-clock monitoring, helpdesk, cloud management, and backups — so your team stays productive and your systems stay up.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[#4F46E5] md:bg-fuchsia-700 hover:bg-fuchsia-800 transition rounded-xl text-white font-bold shadow-md">
              Get started
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-200 text-zinc-900 hover:bg-gray-50 transition font-bold">
              How it works
            </button>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className=" md:block hidden rounded-2xl shadow-xl overflow-hidden aspect-[539/431]">
            <img 
              className="w-full h-full object-cover md:block hidden " 
              src="/images/it-infrastructure/it-hero.jpg" 
              alt="IT Management Visualization" 
            />
          </div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100 overflow-hidden">
          {[
            { value: "24/7", label: "Monitoring & support" },
            { value: "99.95%", label: "Uptime SLA" },
            { value: "<15m", label: "Critical response" },
            { value: "500+", label: "Endpoints managed" },
          ].map((stat, i) => (
            <div key={i} className="p-6 text-center">
              <div className="text-[#0EA5E9] md:text-fuchsia-700 text-2xl md:text-3xl font-black">{stat.value}</div>
              <div className="text-gray-600 text-sm font-semibold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="max-w-screen-xl mx-auto px-6 py-20 text-center">
  <h2 className="text-indigo-600 text-xs font-bold uppercase tracking-wider">What we deliver</h2>
  <h3 className="mt-2 text-zinc-900 text-2xl md:text-4xl font-extrabold">Your IT department, managed</h3>
  <p className="mt-4 text-gray-600">Proactive support that prevents problems instead of just reacting to them.</p>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
            { title: "24/7 monitoring", desc: "Continuous monitoring of servers, networks, and endpoints with proactive alerts.",icon:"/images/it-infrastructure/Frame (12).png" },
            { title: "Helpdesk & support", desc: "Responsive support for your team across email, chat, and phone.",icon:"/images/it-infrastructure/Frame (13).png" },
            { title: "Cloud management", desc: "Provisioning, cost optimization, and management of your cloud estate.",icon:"/images/it-infrastructure/Frame (14).png" },
            { title: "Backup & recovery", desc: "Automated, encrypted backups and tested disaster-recovery plans.",icon:"/images/it-infrastructure/Frame (15).png" },
            { title: "Patching & updates", desc: "Scheduled patching and updates to keep systems secure and current.",icon:"/images/it-infrastructure/Frame (16).png" },
            { title: "Security & compliance", desc: "Endpoint protection, access control, and compliance reporting.",icon:"/images/it-infrastructure/Frame (17).png" },
          ].map((service, i) => (
      <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col md:items-center">
        {/* Icon */}
        <div className="w-12 h-12 bg-[#0EA5E9] md:bg-fuchsia-700 rounded-xl flex items-center justify-center mb-4">
          <img src={service.icon} alt={`${service.title} icon`} className="w-6 h-6" />
        </div>
        {/* Title & Description */}
        <h4 className="text-lg font-bold text-zinc-900">{service.title}</h4>
        <p className="mt-2 text-sm text-zinc-700">{service.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* ================= PROCESS (HOW IT WORKS) ================= */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <h2 className="text-[#4F46E5] md:text-fuchsia-700 text-xs font-bold uppercase tracking-wider">How it works</h2>
        <h3 className="mt-2 text-zinc-900 text-3xl md:text-4xl font-extrabold">Onboarding to ongoing care</h3>
        <p className="mt-2 text-gray-600">A smooth handover and a partner that's always watching.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Assess", desc: "Audit your systems, risks, and gaps." },
            { step: "2", title: "Onboard", desc: "Deploy monitoring and document your environment." },
            { step: "3", title: "Manage", desc: "Proactive monitoring, patching, and support." },
            { step: "4", title: "Improve", desc: "Regular reviews and roadmap planning." },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="w-8 h-8 bg-[#14161C] md:bg-fuchsia-700 rounded-lg flex items-center justify-center text-white font-extrabold">{s.step}</div>
              <div className="mt-4 text-[#14161C] md:text-fuchsia-700 font-bold text-lg">{s.title}</div>
              <div className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VALUE SHOWCASE ================= */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
                   <img className="w-full h-full object-cover md:hidden block" src="/images/it-infrastructure/Server room infrastructure.png" alt="Value presentation" />

          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="md:block hidden rounded-2xl shadow-xl overflow-hidden aspect-[555/416]">
              <img className="w-full h-full object-cover md:block hidden" src="/images/it-infrastructure/it-section.jpg" alt="Value presentation" />
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <h3 className="text-zinc-900 text-3xl font-extrabold mb-4">Predictable costs, fewer surprises</h3>
            <p className="text-zinc-700 mb-6 leading-relaxed">
              A flat monthly fee, clear SLAs, and a team that catches issues before they become outages.
            </p>
            <ul className="space-y-4 text-zinc-700">
              {["SLA-backed response times", "Monthly reporting & reviews", "Dedicated account manager"].map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold text-xl">✓</span>
                  <span className="font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PRICING / SCALING SHOWCASE ================= */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <h3 className="text-zinc-900 text-3xl md:text-4xl font-extrabold text-center">Support that scales with you</h3>
        <p className="mt-4 text-gray-600 text-center">
          Choose the level of coverage you need. Sample pricing for illustration.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Essential", price: "$1,200/mo", note: "Up to 25 endpoints", features: ["Monitoring & patching", "Business-hours helpdesk", "Backups"], button: "Get a quote" },
            { title: "Business", price: "$3,500/mo", note: "Up to 100 endpoints", features: ["24/7 monitoring & support", "Cloud management", "99.95% SLA"], button: "Talk to us", featured: true },
            { title: "Enterprise", price: "Custom", note: "Unlimited endpoints", features: ["Custom SLAs", "Dedicated team", "Compliance support"], button: "Contact sales" },
          ].map((plan, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 text-left flex flex-col justify-between transition ${
                plan.featured ? "border-2 border-[#4F46E5] md:border-fuchsia-700 shadow-md relative" : "border border-gray-200 shadow-sm"
              }`}
            >
              <div>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-xs font-bold uppercase bg-[#4F46E5] md:bg-fuchsia-700 text-white rounded-full px-4 py-1">
                    Most popular
                  </div>
                )}
                <div className="text-lg font-extrabold text-zinc-900 mt-2">{plan.title}</div>
                <div className="text-3xl font-black mt-2 text-zinc-900">{plan.price}</div>
                <div className="text-xs text-gray-500 mt-1">{plan.note}</div>
                
                <ul className="mt-6 space-y-3 text-sm text-zinc-700 border-t border-gray-100 pt-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 w-full py-3 rounded-xl font-bold transition ${
                  plan.featured
                    ? "bg-[#4F46E5] md:bg-fuchsia-700 hover:bg-fuchsia-800 text-white shadow"
                    : "border border-gray-200 text-zinc-900 hover:bg-gray-50"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="max-w-screen-md mx-auto px-6 py-20">
        <h3 className="text-zinc-900 text-3xl font-extrabold text-center mb-12">Common questions</h3>
        <div className="space-y-4">
          {[
            "What's included in the monthly fee?",
            "How fast do you respond to issues?",
            "Can you work alongside our internal IT?",
            "Do you handle security and compliance?",
          ].map((q, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 shadow-sm transition"
            >
              <span className="text-zinc-900 font-bold">{q}</span>
              <span className="text-indigo-600 text-xl font-bold">+</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="bg-black md:bg-sky-900 rounded-3xl shadow-xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/30 to-transparent blur-xl pointer-events-none" />
          <h2 className="text-white text-3xl font-extrabold tracking-wide relative z-10">
            Let's take IT off your plate
          </h2>
          <p className="text-white/75 text-base mt-4 max-w-lg mx-auto relative z-10">
            Tell us about your environment and we'll propose a plan and a quote.
          </p>
          <button className="mt-8 px-8 py-3.5 bg-white hover:bg-gray-100 rounded-xl font-bold text-sky-900 transition shadow-lg relative z-10">
            Get started &rarr;
          </button>
        </div>
      </section>

     
    </main>
  );
}