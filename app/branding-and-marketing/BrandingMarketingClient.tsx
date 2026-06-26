"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Compass,
  Users,
  Network,
  MessageSquare,
  Layers,
  Palette,
  Eye,
  Zap,
  Calendar,
  Video,
  Megaphone,
  TrendingUp,
  BarChart2,
  FlaskConical,
  Mail,
  Phone,
  MessageCircle,
  FileText,
  Check,
  Smartphone,
  Target,
  Search,
  Camera,
  Share2
} from "lucide-react";
const SitemapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="9" y="2" width="6" height="5" rx="1" />
    <path d="M12 7v5" />
    <path d="M5 12h14" />
    <path d="M5 12v5" />
    <path d="M12 12v5" />
    <path d="M19 12v5" />
    <rect x="2" y="17" width="6" height="5" rx="1" />
    <rect x="9" y="17" width="6" height="5" rx="1" />
    <rect x="16" y="17" width="6" height="5" rx="1" />
  </svg>
);

const DoubleMessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 8c0-2.21-2.01-4-4.5-4S5 5.79 5 8c0 1.05.46 2.01 1.22 2.76L5 13.5l2.84-.95c.67.29 1.4.45 2.16.45 2.49 0 4.5-1.79 4.5-4z" opacity="0.6" />
    <path d="M19 13.5c0-1.93-1.76-3.5-3.94-3.5-2.18 0-3.94 1.57-3.94 3.5 0 .92.4 1.76 1.07 2.42L11 18.5l2.49-.83c.58.25 1.23.4 1.89.4 2.18 0 3.94-1.57 3.94-3.5z" />
  </svg>
);

export default function BrandingMarketingClient() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    details: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const stats = [
    { value: "+25%", label: "Awareness ↑" },
    { value: "-18%", label: "CAC ↓" },
    { value: "+32%", label: "LTV ↑" },
    { value: "+21%", label: "Conversion Rate ↑" }
  ];

  const positioningCards = [
    {
      title: "Positioning & Narrative\nDevelopment",
      icon: <Target className="w-10 h-10 text-sky-900" />
    },
    {
      title: "Audience Research & Personas",
      icon: <Users className="w-10 h-10 text-sky-900" />
    },
    {
      title: "Competitive Mapping &\nDifferentiation",
      icon: <Search className="w-10 h-10 text-sky-900" />
    },
    {
      title: "Voice, Tone & Messaging Matrix",
      icon: <DoubleMessageIcon className="w-10 h-10 text-sky-900" />
    },
    {
      title: "Architecture (Masterbrand,\nEndorsed, House of Brands)",
      icon: <SitemapIcon className="w-10 h-10 text-sky-900" />
    }
  ];

  const identityCards = [
    {
      title: "Logos, Typography, Color\nSystems",
      icon: <Palette className="w-10 h-10 text-sky-900" />
    },
    {
      title: "Accessibility-first palettes\n(contrast ≥ 4.5:1)",
      icon: <Eye className="w-10 h-10 text-sky-900" />
    },
    {
      title: "Motion & Interaction Guidelines",
      icon: <Zap className="w-10 h-10 text-sky-900" />
    }
  ];

  const campaignCards = [
    {
      title: "Editorial Calendars",
      iconPath: "/images/brand/calendar.png"
    },
    {
      title: "Creative Production (photo,\nvideo, 3D)",
      iconPath: "/images/brand/camera.png"
    },
    {
      title: "Social Media & Paid Creative",
      iconPath: "/images/brand/share.png"
    }
  ];

  const performanceCards = [
    {
      title: "Channel Mix Strategy (Search, Social, Display, Affiliate)",
      icon: <TrendingUp className="w-8 h-8 text-fuchsia-700" />
    },
    {
      title: "KPI Framework (CAC, CPA, ROAS, LTV)",
      icon: <BarChart2 className="w-8 h-8 text-fuchsia-700" />
    },
    {
      title: "Experimentation & CRO",
      icon: <FlaskConical className="w-8 h-8 text-fuchsia-700" />
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Rebrand",
      description: "Complete brand transformation resulting in\n45% increase in brand recognition and 28%\nboost in conversion rates.",
      metric: "+45% Recognition",
      category: "B2C",
      outcome: "Growth",
      iconPath: "/images/brand/cart.svg"
    },
    {
      title: "Healthcare Identity",
      description: "New healthcare brand identity with\naccessibility-first approach, improving patient\ntrust scores by 35%.",
      metric: "+35% Trust Score",
      category: "B2B",
      outcome: "Trust",
      iconPath: "/images/brand/pulse.svg"
    },
    {
      title: "EdTech Campaign",
      description: "Multi-channel marketing campaign for\neducation platform, achieving 60% reduction\nin customer acquisition cost.",
      metric: "-60% CAC",
      category: "B2C",
      outcome: "CAC Reduction",
      iconPath: "/images/brand/cap.svg"
    }
  ];

  const pricingAnchors = [
    {
      title: "Brand Foundation",
      price: "$15k–$40k",
      duration: "2–4 weeks"
    },
    {
      title: "Identity System",
      price: "$25k–$75k",
      duration: "4–8 weeks"
    },
    {
      title: "Go-to-Market Campaign",
      price: "$20k–$60k",
      duration: "6–10 weeks"
    },
    {
      title: "Growth Retainer",
      price: "$8k–$25k/mo",
      duration: "performance + content"
    }
  ];

  const faqs = [
    {
      question: "How do you measure branding ROI?",
      answer: "We measure branding through both leading brand metrics (like awareness increase, organic search volume growth, and net promoter score) and lagging performance indicators (like customer acquisition cost reduction, client lifetime value growth, and improved conversion rates)."
    },
    {
      question: "What is your typical brand project timeline?",
      answer: "A typical brand foundation or identity system takes between 4 to 8 weeks depending on the complexity of your company architecture, market research depth, and deliverables needed."
    },
    {
      question: "Do we own all creative assets?",
      answer: "Yes, once final payments are complete, you own 100% of all intellectual property, Figma design systems, libraries, raw video files, and graphic assets generated during our engagement."
    },
    {
      question: "How do you handle multi-language or global brands?",
      answer: "Our global creative team has experience delivering localization, accessibility contrast compliance (WCAG 2.1), and multi-region messaging frameworks across North America, Europe, and Asia."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 animate-fade-in">
      
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-fuchsia-700 to-sky-900 text-white flex justify-center px-5 relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[1180px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans leading-tight tracking-tight">
              Build Brands People<br/>Trust and Remember
            </h1>
            
            <p className="max-w-[550px] text-white/90 text-lg sm:text-xl font-normal leading-relaxed font-sans">
              Strategy-led identity, design systems, and performance marketing that move metrics.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a
                href="#contact"
                className="px-6 py-4 bg-white text-fuchsia-700 rounded-xl text-base font-bold shadow-md hover:bg-neutral-50 transition-all duration-200"
              >
                Book a Brand Strategy Session
              </a>
              <a
                href="#portfolio"
                className="px-6 py-4 border border-white text-white rounded-xl text-base font-bold hover:bg-white/10 transition-all duration-200"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Right Translucent Badges stack and grid */}
          <div className="lg:col-span-5 w-full flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-end">
            
            {/* Mobile badges (shown only on mobile < sm) */}
            <div className="flex sm:hidden flex-wrap justify-center gap-3 select-none">
              <span className="px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/10 shadow-sm whitespace-nowrap">
                ISO 9001 Creative Processes
              </span>
              <span className="px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/10 shadow-sm whitespace-nowrap">
                Accessibility in Design
              </span>
              <span className="px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/10 shadow-sm whitespace-nowrap">
                Data-Driven Campaigns
              </span>
            </div>

            {/* Desktop pills stack (aligned with top of cards) */}
            <div className="hidden sm:flex flex-col items-end gap-3 select-none shrink-0 sm:self-start pt-2">
              <span className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-white text-xs font-semibold shadow-sm whitespace-nowrap">
                ISO 9001 Creative Processes
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-white text-xs font-semibold shadow-sm whitespace-nowrap">
                Accessibility in Design
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-white text-xs font-semibold shadow-sm whitespace-nowrap">
                Data-Driven Campaigns
              </span>
            </div>

            {/* Grid of 4 floating cards with design/performance icons */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[280px] xs:max-w-[320px] shrink-0">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl flex items-center justify-center aspect-[5/4] group hover:bg-white/15 transition-all">
                <Palette className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl flex items-center justify-center aspect-[5/4] group hover:bg-white/15 transition-all">
                <Smartphone className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl flex items-center justify-center aspect-[5/4] group hover:bg-white/15 transition-all">
                <TrendingUp className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl flex items-center justify-center aspect-[5/4] group hover:bg-white/15 transition-all">
                <Megaphone className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="w-full bg-purple-50/50 py-10 flex justify-center px-5 border-b border-purple-100">
        <div className="max-w-[1180px] w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center">
              <div className="text-fuchsia-700 text-4xl md:text-5xl font-black mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-base font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Categories */}
      
      {/* Category 1: Positioning */}
      <section className="w-full py-16 flex justify-center px-5 bg-sky-50 border-b border-sky-100">
        <div className="max-w-[1180px] w-full flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl sm:text-3xl font-bold text-center mb-10">
            Define Your Position in the Market
          </h2>

          <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1200px]">
            {positioningCards.map((card, i) => (
              <div
                key={i}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[384px] h-[176px] bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all duration-200 select-none"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h3 className="text-sky-900 text-xl font-medium font-sans text-center leading-7 whitespace-pre-line">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-500 text-base font-medium">
            <span className="font-bold">Deliverables:</span> Brand Book · Messaging Matrix · Persona Deck
          </div>
        </div>
      </section>

      {/* Category 2: Scalable Identity */}
      <section className="w-full py-16 flex justify-center px-5 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1180px] w-full flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl sm:text-3xl font-bold text-center mb-10">
            Create a Distinctive Identity that Scales
          </h2>

          <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1200px]">
            {identityCards.map((card, i) => (
              <div
                key={i}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[384px] h-[176px] bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all duration-200 select-none"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h3 className="text-sky-900 text-xl font-medium font-sans text-center leading-7 whitespace-pre-line">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-500 text-base font-medium">
            <span className="font-bold">Artifact Preview:</span> Figma Library · Design Token Export
          </div>
        </div>
      </section>

      {/* Category 3: Content & Campaigns */}
      <section className="w-full py-16 flex justify-center px-5 bg-fuchsia-50/50 border-b border-fuchsia-100">
        <div className="max-w-[1180px] w-full flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl sm:text-3xl font-bold text-center mb-10">
            Content & Campaigns
          </h2>

          <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1200px]">
            {campaignCards.map((card, i) => (
              <div
                key={i}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[384px] h-[176px] bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all duration-200 select-none"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-3">
                  <img src={card.iconPath} alt={card.title} className="h-10 object-contain" />
                </div>
                <h3 className="text-sky-900 text-xl font-medium font-sans text-center leading-7 whitespace-pre-line">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-500 text-base font-normal">
            Campaign Timelines (sample: 6 weeks)
          </div>
        </div>
      </section>

      {/* Category 4: Performance Marketing */}
      <section className="w-full py-16 flex justify-center px-5 bg-white border-b border-gray-100">
        <div className="max-w-[1180px] w-full flex flex-col items-center">
          <h2 className="text-sky-900 text-2xl sm:text-3xl font-bold text-center mb-10">
            Performance Marketing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {performanceCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-250 flex flex-col items-center text-center justify-center gap-4 hover:shadow-md transition-shadow duration-200 min-h-[160px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-sky-900 text-lg font-bold leading-snug">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-500 text-base font-medium">
            <span className="font-bold">Artifact:</span> Sample Performance Dashboard (CTR, ROAS, CAC)
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="w-full py-16 flex justify-center px-5 bg-sky-50 border-b border-sky-100">
        <div className="max-w-[1180px] w-full flex flex-col items-center">
          <h2 className="text-sky-900 text-3xl font-bold text-center mb-8">
            Portfolio Showcase
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {["All", "Industry", "Deliverable Type", "Outcome"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm transition-all select-none border-2 ${
                  activeFilter === filter
                    ? "bg-sky-900 text-white border-sky-900 font-semibold"
                    : "bg-white text-gray-500 border-zinc-200 hover:bg-gray-50 font-normal"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio grid */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1200px]">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[384px] h-[320px] bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-200 select-none"
              >
                <div className="flex flex-col items-center text-center mt-2">
                  <div className="w-16 h-12 flex items-center justify-center mb-4">
                    <img src={item.iconPath} alt={item.title} className="h-12 object-contain" />
                  </div>
                  <h3 className="text-sky-900 text-2xl font-bold font-sans mb-3 leading-7">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-base font-normal leading-6 max-w-[320px] whitespace-pre-line">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto mb-2 w-full px-2">
                  <div className="px-4 py-2 bg-fuchsia-700/10 text-sky-900 rounded-[20px] text-base font-bold">
                    {item.metric}
                  </div>
                  <a
                    href="#contact"
                    className="text-sky-900 hover:text-sky-700 font-bold text-base underline shrink-0"
                  >
                    Full Case Study →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Anchors Section */}
      <section className="w-full py-16 flex justify-center px-5 bg-fuchsia-50/50 border-b border-fuchsia-100">
        <div className="max-w-[1180px] w-full flex flex-col items-center">
          <h2 className="text-sky-900 text-3xl font-bold text-center mb-10">
            Pricing Anchors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {pricingAnchors.map((anchor, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center justify-center min-h-[220px] hover:shadow-md transition-shadow"
              >
                <h3 className="text-sky-900 text-xl font-bold mb-3">
                  {anchor.title}
                </h3>
                <div className="text-fuchsia-700 text-3xl font-bold mb-2">
                  {anchor.price}
                </div>
                <div className="text-gray-500 text-sm">
                  {anchor.duration}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-500 text-base font-normal">
            Scope confirmed after Discovery Workshop.
          </div>
        </div>
      </section>

      {/* Sarah Chen Quote Section */}
      <section className="w-full py-16 bg-white border-b border-gray-150 flex justify-center px-5">
        <div className="max-w-[800px] w-full text-center flex flex-col items-center gap-6">
          <blockquote className="text-zinc-700 text-xl sm:text-2xl font-normal leading-relaxed italic">
            "Zoiko transformed our brand from generic to genuinely distinctive. ROI was clear within 90 days."
          </blockquote>
          <cite className="text-gray-500 text-base font-medium not-italic">
            — Sarah Chen, CMO at TechFlow
          </cite>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full py-16 md:py-24 bg-white flex justify-center px-5">
        <div className="max-w-[780px] w-full flex flex-col items-center">
          
          <h2 className="text-sky-900 text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="w-full flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = activeFAQ === i;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-zinc-900 text-base font-bold leading-relaxed pr-4">
                      {faq.question}
                    </span>
                    <span className="text-indigo-600 text-xl font-normal shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-0 border-t border-gray-50 animate-slide-down">
                      <p className="text-zinc-700 text-base font-normal leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to Transform Contact Form */}
      <section id="contact" className="w-full py-16 bg-zinc-100 flex justify-center px-5 border-t border-zinc-200">
        <div className="max-w-[1180px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h2 className="text-zinc-800 text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform<br/>Your Business?
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                Connect with our global team of experts to discuss your digital transformation journey and discover how we can accelerate your success.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              
              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-sky-900 rounded-xl flex items-center justify-center shrink-0 border border-zinc-800">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-zinc-800 font-semibold text-lg">Email Us</h4>
                  <div className="text-zinc-500 font-medium">hello@zws.com</div>
                  <div className="text-zinc-400 text-sm">Response within 4 hours</div>
                </div>
              </div>

              {/* Call */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-sky-900 rounded-xl flex items-center justify-center shrink-0 border border-zinc-800">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-zinc-800 font-semibold text-lg">Call Us</h4>
                  <div className="text-zinc-500 font-medium">+1 (555) 123-4567</div>
                  <div className="text-zinc-400 text-sm">24/7 Support Available</div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-sky-900 rounded-xl flex items-center justify-center shrink-0 border border-zinc-800">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-zinc-800 font-semibold text-lg">Live Chat</h4>
                  <div className="text-zinc-500 font-medium">Instant Support</div>
                  <div className="text-zinc-400 text-sm">Online now</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Form Card column */}
          <div className="lg:col-span-7 w-full bg-white border border-stone-200 rounded-[20px] p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center text-fuchsia-700 mb-2">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-zinc-950 text-2xl font-bold">Project Inquiry Submitted!</h3>
                <p className="text-zinc-500 max-w-[400px]">
                  Thank you for reaching out. A branding and marketing strategist will contact you within the next 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Full name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-zinc-800 text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 bg-neutral-100 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-700/20 focus:border-fuchsia-700 transition"
                  />
                </div>

                {/* Business email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-zinc-800 text-sm font-semibold">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="name@company.com"
                    className="w-full h-12 px-4 bg-neutral-100 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-700/20 focus:border-fuchsia-700 transition"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-zinc-800 text-sm font-semibold">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    placeholder="Company Name"
                    className="w-full h-12 px-4 bg-neutral-100 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-700/20 focus:border-fuchsia-700 transition"
                  />
                </div>

                {/* Service dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-zinc-800 text-sm font-semibold">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 px-4 bg-neutral-100 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-700/20 focus:border-fuchsia-700 transition text-zinc-650"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="brand-strategy">Brand Strategy & Positioning</option>
                    <option value="identity-design">Identity System Design</option>
                    <option value="content-campaigns">Content & Campaign Marketing</option>
                    <option value="performance-marketing">Performance Marketing & CRO</option>
                  </select>
                </div>

                {/* Budget dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-zinc-800 text-sm font-semibold">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 px-4 bg-neutral-100 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-700/20 focus:border-fuchsia-700 transition text-zinc-650"
                  >
                    <option value="" disabled>Select budget range</option>
                    <option value="15k-40k">$15k – $40k</option>
                    <option value="40k-75k">$40k – $75k</option>
                    <option value="75k-100k">$75k – $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>

                {/* Project details */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="details" className="text-zinc-800 text-sm font-semibold">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your project requirements, timeline, and objectives..."
                    className="w-full p-4 bg-neutral-100 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-700/20 focus:border-fuchsia-700 transition"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 text-center justify-center text-white text-base font-semibold bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-xl hover:opacity-95 shadow-md transition-all mt-4"
                >
                  Start Your Project
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
