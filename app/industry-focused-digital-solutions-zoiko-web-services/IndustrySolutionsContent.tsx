"use client";
import { useState,useEffect ,useRef} from "react";
import Image from "next/image";
import ContactTransformationSection from "../services-solutions/components/contactsection";

const industries = [
  "Telecommunications",
  "Financial Services & FinTech",
  "Healthcare & Life Sciences",
  "Government & Public Sector",
  "Retail & Consumer Brands",
  "Travel & Mobility",
  "Media & Entertainment",
  "SMEs & Enterprise SaaS",
  "Cybersecurity & Data Privacy",
];
const chooseCards = [
  {
    icon: "/images/industry/vaadin_globe@2x.png",
    title: "Multi-jurisdictional Compliance Expertise",
    description:
      "Navigate complex regulatory landscapes with confidence across global markets",
  },
  {
    icon: "/images/industry/bxs_rocket.png",
    title: "Industry-Specific Customization",
    description:
      "Tailored solutions that address unique sector challenges and requirements",
  },
  {
    icon: "/images/industry/mingcute_lightning-fill.png",
    title: "SLA-Backed Reliability",
    description:
      "99.9% uptime guarantee with enterprise-grade infrastructure and support",
  },
  {
    icon: "/images/industry/Vector.png",
    title: "Global Scalability",
    description:
      "Scale seamlessly across regions with our worldwide infrastructure network",
  },
];
const impactCards = [
  {
    icon: "/images/industry/streamline-flex_satellite-dish-solid.png",
    title: "Tier-1 Telecom Transformation",
    description:
      "Cut infrastructure costs by 25% with ZWS Cloud migration and optimization",
    result: "25% Cost Reduction",
  },
  {
    icon: "/images/industry/solar_hospital-bold.png",
    title: "Healthcare Compliance Success",
    description:
      "Achieve HIPAA compliance in half the time with ZWS Compliance Suite",
    result: "50% Faster Compliance",
  },
  {
    icon: "/images/industry/famicons_card.png" ,
    title: "FinTech Security Enhancement",
    description:
      "Reduced fraud by 40% with AI-powered transaction monitoring",
    result: "40% Fraud Reduction",
  },
  {
    icon: "/images/industry/streamline-plump_web-solid.png",
    title: "Government Digital Services",
    description:
      "Improved citizen satisfaction by 65% with governance platform",
    result: "65% Satisfaction Increase",
  },
];

export default function IndustriesPage() {

const scrollRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  const interval = setInterval(() => {
    container.scrollLeft += 1;

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
  }, 20);

  return () => clearInterval(interval);
}, []);

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* ================================= HERO SECTION ================================ */}

      <section className="bg-gradient-to-r from-[#8B3DB5] to-[#1B6D97]">
        <div className="max-w-[1280px] mx-auto px-9 py-16 lg:py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-white text-xl lg:text-5xl font-semibold leading-tight">
                Powering Transformation
                <br />
                Across Every Industry
              </h1>

              <p className="text-white/80 mt-6 text-lg leading-8">
                From telecom and financial services to healthcare,
                government, and retail — Zoiko Web Services delivers
                cloud, compliance, and digital solutions that adapt
                to every sector's unique challenges.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-white text-[#A33EC2] px-6 py-3 rounded-lg font-semibold">
                  Explore Industry Solutions
                </button>

                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold">
                  Talk to an Expert
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/industry/engineers-wearing-safety-gear-including-hard-hats-2025-03-16-03-21-16-utc 1.png"
                alt=""
                width={650}
                height={400}
                className="w-full h-[380px] object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================== INDUSTRY TABS =========================== */}

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 py-6">

      <div
        ref={scrollRef}
className="flex gap-4 overflow-x-hidden whitespace-nowrap"      >
{[...industries, ...industries].map((industry, index) => (
  <button
    key={index}
    className="flex-shrink-0 whitespace-nowrap px-6 py-3 rounded-xl border border-slate-200 bg-white text-black"
  >
    {industry}
  </button>
))}

          </div>

        </div>
      </section>

      {/* ======================== INDUSTRY DETAILS ======================== */}

      <section className="bg-[#FDF1FA] py-16">

        <div className="max-w-[1280px] mx-auto px-9">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h2 className="text-4xl font-semibold text-slate-800">
                Telecommunications:
                <br />
                Built for Scale & Compliance
              </h2>

              <p className="mt-6 text-slate-500 text-lg leading-8">
                Empower your telecom infrastructure with cloud-native
                solutions designed for massive scale, regulatory
                compliance and 99.9% uptime.
              </p>

              <h3 className="mt-8 mb-5 font-semibold">
                Use Case Highlights:
              </h3>

              <div className="space-y-4">

                <div className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span>5G network infrastructure and optimization</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span>OSS/BSS modernization and automation</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Customer experience platforms and analytics</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Regulatory compliance and data sovereignty</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span>IoT connectivity and edge computing solutions</span>
                </div>

              </div>

              <button className="mt-8 bg-[#A33EC2] text-white px-6 py-3 rounded-lg font-semibold">
                View Industry Solutions
              </button>

            </div>

            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/industry/telecommunication.png"
                alt=""
                width={500}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>

          </div>

        </div>

      </section>

      {/* ======================== IMPACT SECTION ======================== */}

      <section className="py-20">

        <div className="max-w-[1280px] mx-auto px-6">

          <h2 className="text-center text-3xl font-semibold mb-3">
            Proven Impact Across Industries
          </h2>

          <p className="text-center text-slate-500 mb-12">
            Real results from our industry-specific solutions
          </p>
         <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {impactCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-8 text-center"
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="mx-auto mb-4"
                  />

                  <h3 className="font-semibold text-xl text-[#A33EC2]">
                    {card.title}
                  </h3>

                  <p className="text-slate-500 mt-4">
                    {card.description}
                  </p>

                  <div className="mt-6 inline-block bg-gradient-to-r from-[#A33EC2] to-[#1B6D97] text-white px-5 py-2 rounded-full">
                    {card.result}
                  </div>
                </div>
                  ))}
            </div>
          </div>

      </section>
<section className="py-4 bg-white">
  <div className="max-w-[1280px] mx-auto px-6">
    
    <h3 className="text-center text-xl font-semibold text-slate-800 mb-10">
      Trusted by Industry Leaders
    </h3>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {[
        "GlobalTech",
        "MedCorp",
        "CityGov",
        "RetailMax",
        "TravelPro",
        "MediaFlow",
      ].map((company) => (
        <div
          key={company}
          className="h-[76px] bg-white border border-slate-200 rounded-lg flex items-center justify-center"
        >
          <span className="text-slate-500 text-base font-semibold">
            {company}
          </span>
        </div>
      ))}
    </div>

  </div>
</section>
      {/* ====================== WHY CHOOSE SECTION ====================== */}

      <section className="bg-sky-50 py-20">

        <div className="max-w-[1280px] mx-auto px-6">

          <h2 className="text-center text-3xl font-semibold text-sky-900 mb-16">
            Why Industries Choose Zoiko Web Services
          </h2>

         <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {chooseCards.map((card, index) => (
                <div
                  key={index}
                  className="  p-8 text-center"
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="mx-auto mb-4"
                  />

                  <h3 className="font-semibold text-xl text-[rgba(17, 71, 105, 1)]">
                    {card.title}
                  </h3>

                  <p className="text-slate-500 mt-4">
                    {card.description}
                  </p>
                </div>
                  ))}
            </div>

        </div>

      </section>

      {/* ====================== CONTACT SECTION ====================== */}

      <ContactTransformationSection/>

    </main>
  );
}