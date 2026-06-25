import React from 'react';

export default function EcommerceDevelopmentPage() {
  return (
    <main className="bg-neutral-50 antialiased selection:bg-fuchsia-200">
      
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
             <img
            className="rounded-2xl shadow-lg object-cover w-full h-96 md:hidden block mb-4"
            src="/images/e-commerce-development/Online shopping on a device (1).png"
            alt="Store Hero Visual"
          />
          <h1 className="text-zinc-900 text-4xl md:text-6xl font-black leading-tight">
            Storefronts <br /> built to sell.
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            High-converting online stores — custom or headless — with secure checkout, fast pages, and the integrations your business runs on.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-[#4F46E5] md:bg-fuchsia-700 hover:bg-fuchsia-800 transition rounded-xl text-white font-bold">
              Start selling
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-200 text-zinc-900 hover:bg-gray-50 transition font-bold">
              How we work
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="rounded-2xl shadow-lg object-cover w-full h-96 md:block hidden"
            src="/images/e-commerce-development/Online shopping on a device.png"
            alt="Store Hero Visual"
          />
           

        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "200+", label: "Stores launched" },
          { value: "+38%", label: "Avg. conversion lift" },
          { value: "<1s", label: "Page loads" },
          { value: "PCI", label: "Compliant checkout" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 text-center">
            <div className="text-[#10B981] md:text-fuchsia-700 text-2xl font-black">{stat.value}</div>
            <div className="text-gray-600 text-sm font-semibold">{stat.label}</div>
          </div>
        ))}
      </section>

   <section className="max-w-screen-xl mx-auto px-6 py-20 text-center">
  <h2 className="text-indigo-600 text-xs font-bold uppercase tracking-wider">What we deliver</h2>
  <h3 className="mt-2 text-zinc-900 text-3xl md:text-4xl font-extrabold">Commerce that converts</h3>
  <p className="mt-4 text-gray-600">From storefront to fulfillment, engineered for revenue.</p>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { title: "Custom storefronts", desc: "Branded, responsive stores designed around your products and customers.", icon: "/images/e-commerce-development/Frame (6).png" },
      { title: "Headless commerce", desc: "Decoupled front-ends on Shopify, commercetools, or custom backends.", icon: "/images/e-commerce-development/Frame (7).png" },
      { title: "Payments", desc: "Secure, PCI-compliant checkout with the gateways you prefer.", icon: "/images/e-commerce-development/Frame (8).png" },
      { title: "Integrations", desc: "ERP, inventory, shipping, tax, and marketing tools connected cleanly.", icon: "/images/e-commerce-development/Frame (9).png" },
      { title: "Conversion & CRO", desc: "Performance, UX, and A/B testing that turn visits into orders.", icon: "/images/e-commerce-development/Frame (10).png" },
      { title: "SEO foundations", desc: "Search-friendly architecture and structured data built in.", icon: "/images/e-commerce-development/Frame (11).png" },
    ].map((service, i) => (
      <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col md:items-center">
        {/* Icon */}
        <div className="w-12 h-12 bg-[#10B981] md:bg-fuchsia-700 rounded-xl flex items-center justify-center mb-4">
          <img src={service.icon} alt={`${service.title} icon`} className="w-6 h-6" />
        </div>
        {/* Title & Description */}
        <h4 className="text-lg font-bold text-zinc-900">{service.title}</h4>
        <p className="mt-2 text-sm text-zinc-700">{service.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* ================= PROCESS ================= */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <h2 className="text-zinc-900 text-3xl md:text-4xl font-extrabold">From catalog to checkout</h2>
        <p className="mt-2 text-gray-600">A focused process that gets you selling sooner.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Discover", desc: "Products, customers, and the buying journey." },
            { step: "2", title: "Design", desc: "Storefront UX and a conversion-focused layout." },
            { step: "3", title: "Build", desc: "Catalog, checkout, and integrations wired up." },
            { step: "4", title: "Launch & optimize", desc: "Go live, measure, and improve conversion." },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-6">
              <div className="size-8 bg-[#14161C] md:bg-fuchsia-700 rounded-lg flex items-center justify-center text-white font-extrabold">{s.step}</div>
              <div className="mt-3 text-[#14161C] md:text-fuchsia-700 font-bold">{s.title}</div>
              <div className="mt-1 text-gray-600 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURE SHOWCASE ================= */}
      <section className="max-w-screen-xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          className="rounded-2xl shadow-lg object-cover w-full h-96 md:block hidden"
          src="/images/e-commerce-development/mobile ecommerce.jpg"
          alt="Reliability Showcase"
        />
        <img
          className="rounded-2xl shadow-lg object-cover w-full h-96 block md:hidden"
          src="/images/e-commerce-development/Warehouse and order fulfillment.png"
          alt="Reliability Showcase"
        />
        <div>
          <h3 className="text-zinc-900 text-2xl font-extrabold mb-4">Fast, reliable, and ready for peak</h3>
          <p className="text-zinc-700 mb-6">
            Built to handle launch-day traffic and holiday spikes without breaking a sweat — and to recover gracefully when things go wrong.
          </p>
         <ul className="space-y-3 text-zinc-700">
  <li className="flex items-center gap-2">
    <span className="text-emerald-500 font-bold">✓</span>
    <span>Edge-cached, sub-second pages</span>
  </li>
  <li className="flex items-center gap-2">
    <span className="text-emerald-500 font-bold">✓</span>
    <span>Secure, compliant checkout</span>
  </li>
  <li className="flex items-center gap-2">
    <span className="text-emerald-500 font-bold">✓</span>
    <span>Analytics and abandoned-cart recovery</span>
  </li>
</ul>

        </div>
      </section>

 {/* ================= ENGAGEMENTS ================= */}
<section className="max-w-screen-xl mx-auto px-6 py-20">
  <h2 className="text-indigo-600 text-xs font-bold uppercase tracking-wider text-center">Engagements</h2>
  <h3 className="mt-2 text-zinc-900 text-3xl md:text-4xl font-extrabold text-center">Ways to work with us</h3>
  <p className="mt-4 text-gray-600 text-center">
    Pick the path that fits your stage. Sample pricing for illustration.
  </p>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { title: "Launch store", price: "from $20k", time: "5–7 weeks", features: ["Storefront + checkout", "Core integrations", "Launch support"], button: "Get a quote" },
      { title: "Headless build", price: "Custom", time: "Scalable commerce", features: ["Headless architecture", "Custom integrations", "CRO program"], button: "Talk to us", featured: true },
      { title: "Enterprise", price: "Custom", time: "High volume", features: ["Multi-region & B2B", "ERP & OMS integration", "SLA support"], button: "Contact sales" },
    ].map((plan, i) => (
      <div
        key={i}
        className={`bg-white rounded-2xl shadow p-6 text-left ${
          plan.featured ? "border-2 border-[#4F46E5] md:border-fuchsia-700 relative" : "border border-gray-200"
        }`}
      >
        {plan.featured && (
          <div className="mb-4 text-xs font-bold uppercase bg-[#4F46E5] md:bg-fuchsia-700 text-white rounded-full px-3 py-1 inline-block">
            Most popular
          </div>
        )}
        <div className="text-lg font-extrabold text-zinc-900">{plan.title}</div>
        <div className="text-3xl font-black mt-2">{plan.price}</div>
        <div className="text-xs text-gray-600 mt-1">{plan.time}</div>
        
        {/* Features with tick marks */}
        <ul className="mt-4 space-y-2 text-sm text-zinc-700">
          {plan.features.map((f, j) => (
            <li key={j} className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          className={`mt-6 w-full py-3 rounded-xl font-bold transition ${
            plan.featured
              ? "bg-[#4F46E5] md:bg-fuchsia-700 hover:bg-fuchsia-800 text-white"
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
      <section className="max-w-screen-md mx-auto px-6 py-20 text-center">
        <h2 className="text-indigo-600 text-xs font-bold uppercase tracking-wider">FAQ</h2>
        <h3 className="mt-2 text-zinc-900 text-3xl md:text-4xl font-extrabold">Common questions</h3>

        <div className="mt-12 space-y-4">
          {[
            "Shopify, headless, or fully custom?",
            "Can you migrate my existing store?",
            "Do you integrate payments and shipping?",
            "Will the store be SEO-ready?",
          ].map((q, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 shadow-sm"
            >
              <span className="text-zinc-900 text-base font-bold">{q}</span>
              <span className="text-indigo-600 text-xl">+</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="bg-sky-900 rounded-3xl shadow-lg p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black md:bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.5),transparent_50%)] blur-[5px]" />
          <h2 className="text-white text-3xl font-extrabold tracking-wide relative z-10">
            Let&apos;s grow your sales
          </h2>
          <p className="text-white/75 text-base mt-2 relative z-10">
            Tell us about your products and we&apos;ll map a store and a quote.
          </p>
          <button className="mt-6 px-8 py-3 bg-white hover:bg-gray-100 rounded-xl font-bold text-sky-900 transition shadow relative z-10">
            Start selling &rarr;
          </button>
        </div>
      </section>
    </main>
  );
}
