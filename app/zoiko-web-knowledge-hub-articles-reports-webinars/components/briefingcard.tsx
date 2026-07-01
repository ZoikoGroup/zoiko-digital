"use client";
import React from "react";

interface BriefingCard {
  title: string;
  description: string;
  features: string[];
  iconPath: string;
}

export default function ExecutiveBriefings() {
  const cards: BriefingCard[] = [
    {
      title: "Executive Updates",
      description: "Strategic insights, industry trends, and business impact analysis.",
      iconPath: "/images/Knowledgehub/basil_user-solid.png",
      features: [
        "Monthly executive briefings",
        "Industry trend reports",
        "Strategic recommendations",
      ],
    },
    {
      title: "Developer Alerts",
      description: "API updates, new features, technical documentation, and code examples.",
      iconPath: "/images/Knowledgehub/mingcute_code-fill.png",
      features: [
        "API release notifications",
        "Technical tutorials",
        "Code samples & guides",
      ],
    },
    {
      title: "Compliance Digest",
      description: "Regulatory updates, compliance requirements, and legal changes.",
      iconPath: "/images/Knowledgehub/si_lock-fill.png",
      features: [
        "Weekly compliance updates",
        "Regulatory change alerts",
        "Best practice guides",
      ],
    },
  ];

  return (
    <>
      {/* ================================= UPDATES BRIEFING GRID ================================ */}
      <section className="w-full bg-fuchsia-50/40 dark:bg-gray-950 border-t border-b border-slate-200 dark:border-gray-800 py-16 px-4 sm:px-8 lg:px-[108px] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          
          {/* ================= SECTION HEADER ================= */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 dark:text-white leading-tight">
              Executive Briefings, Developer Alerts & Compliance Updates
            </h2>
            <p className="mt-3 text-slate-500 dark:text-gray-400 text-base sm:text-lg font-normal">
              Curated updates tailored to your role — straight to your inbox.
            </p>
          </div>

          {/* ================= SUBSCRIPTION CARDS GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-slate-200 dark:border-gray-800 flex flex-col justify-between shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-md dark:hover:shadow-black/20 transition-all duration-200 min-h-[460px]"
              >
                <div>
                  {/* Icon Wrapper Frame */}
                  <div className="w-10 h-10 bg-slate-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6 overflow-hidden p-2">
                    <img
                      className="w-full h-full object-contain dark:brightness-0 dark:invert"
                      src={card.iconPath}
                      alt={`${card.title} icon`}
                    />
                  </div>

                  {/* Card Context */}
                  <h3 className="text-[#207373] dark:text-teal-400 text-xl font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 dark:text-gray-300 text-base font-normal leading-relaxed mb-6 min-h-[72px]">
                    {card.description}
                  </p>

                  {/* Checklist Features mapping block */}
                  <ul className="flex flex-col gap-3.5">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <span className="text-emerald-500 dark:text-teal-400 text-base font-semibold select-none leading-none">
                          ✓
                        </span>
                        <span className="text-slate-500 dark:text-gray-400 text-sm font-normal leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Subscribe Button */}
                <div className="pt-6">
                  <button className="w-full h-11 border border-[#207373] dark:border-teal-500 text-[#207373] dark:text-teal-400 hover:bg-[#207373] dark:hover:bg-teal-600 hover:text-white dark:hover:text-white text-sm font-semibold rounded-lg transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ================= PRIMARY MASTER GLOBAL CTA BUTTON ================= */}
          <div className="flex justify-center">
            <button className="h-12 px-8 bg-[#207373] dark:bg-teal-600 hover:bg-[#195959] dark:hover:bg-teal-500 text-white font-semibold text-base rounded-lg shadow-sm hover:shadow active:scale-[0.99] transition-all duration-200">
              Subscribe to All Updates
            </button>
          </div>

        </div>
      </section>

      {/* ================================= CONTACT SECTION ================================ */}
      <section className="w-full bg-zinc-100 py-16 px-6 md:px-15 transition-colors duration-300 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ================= LEFT COLUMN: DETAILS ================= */}
          <div className="flex flex-col gap-12 pt-8 lg:max-w-[552px]">
            <div className="flex flex-col gap-[34px]">
              <h2 className="text-zinc-800 dark:text-white text-xl lg:text-[32px] font-bold leading-8 lg:leading-9">
                Ready to Transform
                <br />
                Your Business?
              </h2>
              <p className="text-neutral-600 dark:text-gray-300 text-base lg:text-lg font-normal leading-7">
                Connect with our global team of experts to discuss your digital
                <br className="hidden lg:block" />
                transformation journey and discover how we can accelerate your
                <br className="hidden lg:block" />
                success.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 dark:bg-teal-600 rounded-xl border border-zinc-800 dark:border-transparent flex items-center justify-center shrink-0">
                  <img
                    src="/images/about/SVG.svg"
                    alt="Email Icon"
                    className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert"
                  />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@zoikodigital.com"
                    className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-teal-300 transition-colors"
                  >
                    hello@zoikodigital.com
                  </a>
                  <span className="text-zinc-400 dark:text-gray-500 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">
                    Response within 4 hours
                  </span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 dark:bg-teal-600 rounded-xl border border-zinc-800 dark:border-transparent flex items-center justify-center shrink-0">
                  <img
                    src="/images/about/SVG-1.svg"
                    alt="Phone Icon"
                    className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert"
                  />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">
                    Call Us
                  </h4>
                  <a
                    href="tel:+15551234567"
                    className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6 hover:text-sky-900 dark:hover:text-teal-300 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                  <span className="text-zinc-400 dark:text-gray-500 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">
                    24/7 Support Available
                  </span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 dark:bg-teal-600 rounded-xl border border-zinc-800 dark:border-transparent flex items-center justify-center shrink-0">
                  <img
                    src="/images/about/SVG-2.svg"
                    alt="Chat Icon"
                    className="w-5 h-5 md:w-6 md:h-6 dark:brightness-0 dark:invert"
                  />
                </div>
                <div className="flex flex-col mt-1 lg:gap-1">
                  <h4 className="text-zinc-800 dark:text-white text-base lg:text-lg font-semibold leading-7">
                    Live Chat
                  </h4>
                  <span className="text-zinc-500 dark:text-teal-400 text-sm lg:text-base font-normal leading-6">
                    Instant Support
                  </span>
                  <div className="flex items-center gap-2 mt-0 lg:mt-1">
                    <span className="text-zinc-400 dark:text-gray-500 text-xs lg:text-sm font-normal leading-6">
                      Online now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
          <div className="bg-white dark:bg-gray-800 rounded-[20px] p-8 md:p-10 border border-neutral-300 dark:border-gray-700 w-full lg:max-w-[572px] lg:ml-auto shadow-sm dark:shadow-black/20 transition-colors duration-300">
            <form className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Business Email
                </label>
                <input
                  type="email"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-neutral-100 dark:bg-gray-900 text-zinc-800 dark:text-white rounded-lg border border-stone-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Service Interest
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-14 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled className="text-neutral-400 dark:text-gray-500">
                      Select a service
                    </option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="web">Web Development</option>
                    <option value="compliance">Compliance</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-zinc-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Project Budget
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-14 px-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 appearance-none text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled className="text-neutral-400 dark:text-gray-500">
                      Select budget range
                    </option>
                    <option value="small">Under $10,000</option>
                    <option value="medium">$10,000 - $50,000</option>
                    <option value="large">$50,000+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-zinc-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-zinc-800 dark:text-gray-200 text-sm font-semibold leading-6">
                  Project Details
                </label>
                <textarea
                  className="w-full h-28 p-4 bg-neutral-100 dark:bg-gray-900 rounded-lg border border-stone-300 dark:border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900 dark:focus:ring-teal-500 focus:border-transparent transition-all text-zinc-800 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500"
                  placeholder="Tell us about your project requirements, timeline, and objectives..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-4 w-56 h-14 self-start bg-linear-57 from-indigo-950 via-teal-700 to-teal-400 hover:from-teal-600 hover:to-indigo-900 dark:from-teal-600 dark:via-teal-700 dark:to-teal-500 text-white text-base font-semibold rounded-xl transition-all shadow-sm"
              >
                Start Your Project
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}