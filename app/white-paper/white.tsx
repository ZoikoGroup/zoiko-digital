"use client";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  Download,
  Users,
  Trophy,
  Award,
  Star,
  FileText,
  PhoneCall,
  BarChart3,
  Calendar,
  Video,
  Code,
  ArrowRight
} from "lucide-react";

// 1. Dataset Type Definitions & Data
const downloads = [
  {
    id: 1,
    rank: "#1",
    title: "Enterprise AI Strategy Framework",
    description: "Complete guide to implementing AI across enterprise operations.",
    downloads: "12,847 downloads",
    useful: "94% useful",
    cited: "Cited by 47+ boardrooms",
    badge: "gold",
  },
  {
    id: 2,
    rank: "#2",
    title: "Zero Trust Security Implementation",
    description: "Comprehensive roadmap for modern security architecture.",
    downloads: "9,234 downloads",
    useful: "91% useful",
    cited: "Cited by 32+ boardrooms",
    badge: "silver",
  },
  {
    id: 3,
    rank: "#3",
    title: "Multi-Cloud Strategy Playbook",
    description: "Best practices for managing complex cloud environments.",
    downloads: "7,891 downloads",
    useful: "89% useful",
    cited: "Cited by 28+ boardrooms",
    badge: "bronze",
  },
  {
    id: 4,
    rank: "#4",
    title: "Digital Transformation Metrics",
    description: "KPIs and benchmarks for measuring transformation success.",
    downloads: "6,542 downloads",
    useful: "87% useful",
    cited: "Cited by 19+ boardrooms",
    badge: "normal",
  },
  {
    id: 5,
    rank: "#5",
    title: "Enterprise Data Governance",
    description: "Framework for managing data quality and compliance.",
    downloads: "5,987 downloads",
    useful: "85% useful",
    cited: "Cited by 15+ boardrooms",
    badge: "normal",
  },
];

export default function WhitepaperSection() {
  const researchItems = [
    {
      id: 1,
      title: "The Future of AI in Financial Services",
      image: "/images/white/three.jpg",
      description: "Comprehensive analysis of artificial intelligence adoption trends, regulatory compliance, and ROI metrics across global financial institutions in 2025.",
      bullets: [
        "87% reduction in fraud detection time",
        "$2.3B saved through automated compliance",
        "45% improvement in customer experience scores"
      ],
      quote: "This Zoiko Digital report guided our cloud migration strategy and saved us millions in implementation costs.",
      author: "CTO, Fortune 100 Bank"
    },
    {
      id: 2,
      title: "Enterprise Cloud Security Benchmarks",
      image: "/images/white/two.jpg",
      description: "In-depth study of security frameworks, threat landscapes, and best practices for enterprise cloud infrastructure across 1,200+ organizations.",
      bullets: [
        "92% reduction in security incidents",
        "$5.7M average cost savings per breach prevented",
        "60% faster compliance certification"
      ],
      quote: "Zoiko Digital research helped us achieve SOC 2 compliance 6 months ahead of schedule.",
      author: "CISO, Global Healthcare Provider"
    },
    {
      id: 3,
      title: "Digital Transformation ROI Metrics",
      image: "/images/white/one.jpg",
      description: "Comprehensive analysis of digital transformation initiatives, measuring actual ROI and business impact across Fortune 500 companies.",
      bullets: [
        "300% average ROI within 18 months",
        "55% improvement in operational efficiency",
        "40% reduction in time-to-market"
      ],
      quote: "This research validated our transformation strategy and secured board approval for $50M investment.",
      author: "Chief Digital Officer, Manufacturing Leader"
    }
  ];

  const journeyItems = [
    {
      id: 1,
      title: "Case Studies",
      description: "See how insights become impact",
      actionText: "Explore Success Stories",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
    },
    {
      id: 2,
      title: "Webinars",
      description: "Watch thought leaders discuss these findings live",
      actionText: "Join Live Sessions",
      icon: <Video className="w-8 h-8 text-white" />,
    },
    {
      id: 3,
      title: "Technical Docs",
      description: "Translate research into implementation",
      actionText: "View Documentation",
      icon: <Code className="w-8 h-8 text-white" />,
    },
  ];

  const renderBadge = (badge: string) => {
    switch (badge) {
      case "gold":
        return <Trophy className="w-6 h-6 text-yellow-500 fill-yellow-400 shrink-0" />;
      case "silver":
        return <Award className="w-6 h-6 text-gray-400 fill-gray-200 shrink-0" />;
      case "bronze":
        return <Award className="w-6 h-6 text-amber-600 fill-amber-500 shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 text-zinc-800 dark:text-white font-sans antialiased transition-colors duration-300">
      {/* Top Accent Gradient Border */}
      <div className="w-full h-1 bg-gradient-to-r from-fuchsia-700 to-sky-900"></div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-teal-800 to-[#207373] dark:from-gray-900 dark:via-gray-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(315deg,transparent_35%,rgba(255,255,255,0.08)_50%,transparent_65%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-10 lg:py-10">
          <div className="flex justify-center mb-8">
            <div className="rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3">
              <p className="text-sm md:text-base font-semibold text-white">
                Trusted by <span className="text-yellow-400 mx-1">500+</span> enterprises worldwide
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
              Insights That Power Innovation
            </h1>
            <p className="mt-6 text-lg text-gray-200 dark:text-gray-300">
              Exclusive research shaping decisions across industries.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <button className="rounded-lg bg-white px-6 py-4 font-semibold text-[#114769] hover:bg-gray-100 transition">
              Browse Whitepapers
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white text-white px-6 py-4 font-semibold hover:bg-white hover:text-slate-900 transition">
              Download Executive Brief
            </button>
          </div>
        </div>
      </section>

      {/* ================= EXECUTIVE BRIEFING FORM SECTION ================= */}
      <section className="w-full bg-white dark:bg-gray-900 py-20 px-4 md:px-8 flex justify-center">
        <div className="max-w-[800px] w-full flex flex-col items-center">
          
          {/* Executive Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 rounded-full px-5 py-2 mb-6 shadow-sm">
            <Trophy className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm font-bold tracking-wide">Executive Service</span>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-sky-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Boardroom-ready insights, tailored to you
            </h2>
            <p className="text-stone-500 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Exclusive research and analysis reserved for senior leadership teams & enterprise clients
            </p>
          </div>

          {/* Configuration Card Interface Container */}
          <div className="w-full bg-white dark:bg-gray-800 rounded-2xl border border-neutral-100 dark:border-gray-700 shadow-[0px_12px_40px_0px_rgba(144,80,159,0.12)] p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Industry Selector */}
                <div>
                  <label className="block text-sky-900 dark:text-gray-200 text-base font-bold mb-2">Industry Focus</label>
                  <div className="relative">
                    <select className="w-full h-12 bg-zinc-50 dark:bg-gray-900 rounded-lg border border-neutral-200 dark:border-gray-700 px-4 text-sm text-stone-700 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-teal-700">
                      <option>Select Your Industry</option>
                      <option>Finance & Banking</option>
                      <option>Healthcare & Life Sciences</option>
                      <option>Retail & E-Commerce</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-4 text-stone-500 dark:text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Geographic Region */}
                <div>
                  <label className="block text-sky-900 dark:text-gray-200 text-base font-bold mb-2">Geographic Region</label>
                  <div className="relative">
                    <select className="w-full h-12 bg-zinc-50 dark:bg-gray-900 rounded-lg border border-neutral-200 dark:border-gray-700 px-4 text-sm text-stone-700 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-teal-700">
                      <option>Select Primary Region</option>
                      <option>Global / Multi-Region</option>
                      <option>North America</option>
                      <option>Europe</option>
                      <option>Asia Pacific</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-4 text-stone-500 dark:text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Challenge Textarea */}
              <div>
                <label className="block text-sky-900 dark:text-gray-200 text-base font-bold mb-2">Primary Business Challenge</label>
                <textarea 
                  rows={3}
                  placeholder="Describe your key strategic challenge, technology initiative, or research question. Our analysts will tailor the report to address your specific needs."
                  className="w-full p-4 bg-white dark:bg-gray-900 rounded-lg border border-neutral-200 dark:border-gray-700 text-sm text-stone-700 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-700 resize-none"
                />
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-sky-900 dark:text-gray-200 text-base font-bold mb-2">Company Size</label>
                <div className="relative">
                  <select className="w-full h-12 bg-zinc-50 dark:bg-gray-900 rounded-lg border border-neutral-200 dark:border-gray-700 px-4 text-sm text-stone-700 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-teal-700">
                    <option>Select Company Size</option>
                    <option>Enterprise (10,000+ employees)</option>
                    <option>Large Business (1,000 - 9,999 employees)</option>
                    <option>Mid-Market (500 - 999 employees)</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-4 text-stone-500 dark:text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Inclusion Highlights Box */}
              <div className="w-full bg-white dark:bg-gray-800 rounded-xl border border-teal-700 p-6 md:p-8">
                <h4 className="text-sky-900 dark:text-teal-400 text-lg font-bold mb-6">What's Included:</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                  {/* Item 1 */}
                  <div className="flex items-start gap-4">
                    <FileText className="w-5 h-5 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-800 dark:text-gray-200 text-sm leading-relaxed">Custom 25-50 page research report</span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-4">
                    <PhoneCall className="w-5 h-5 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-800 dark:text-gray-200 text-sm leading-relaxed">60-minute analyst briefing call</span>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-4">
                    <BarChart3 className="w-5 h-5 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-800 dark:text-gray-200 text-sm leading-relaxed">Industry benchmarks & competitive analysis</span>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-start gap-4">
                    <Users className="w-5 h-5 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-800 dark:text-gray-200 text-sm leading-relaxed">Executive summary for board presentation</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button className="w-full h-14 bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 hover:opacity-95 text-white font-semibold text-base rounded-lg flex items-center justify-center gap-2 shadow-md transition-all">
                <Calendar className="w-5 h-5" />
                <span>Schedule Analyst Briefing</span>
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* ================= FEATURED RESEARCH SECTION ================= */}
      <section className="w-full bg-[#f0f4f8] dark:bg-gray-950 py-20 px-4 md:px-8 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-[#2c5378] dark:text-teal-400 text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Featured Research
            </h2>
            <p className="text-stone-500 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto">
              Essential insights from our latest industry analysis
            </p>
          </div>

          <div className="w-full max-w-[1000px] flex flex-col gap-12 rounded-2xl shadow-[0px_12px_40px_0px_rgba(32,115,115,0.12)] overflow-hidden">
            {researchItems.map((item) => (
              <div 
                key={item.id} 
                className="w-full bg-white dark:bg-gray-800 rounded-xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.05)] hover:shadow-lg transition-shadow duration-300 border border-transparent dark:border-gray-700"
              >
                <div className="w-full lg:w-80 h-72 lg:h-[500px] relative shrink-0 rounded-xl overflow-hidden bg-neutral-600 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]">
                  <Image 
                    className="object-cover" 
                    src={item.image} 
                    alt={item.title}
                    fill
                    sizes="(max-w-1024px) 100vw, 320px"
                    priority={item.id === 1}
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sky-900 dark:text-white text-2xl font-bold mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 dark:text-gray-300 text-base font-normal leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <h4 className="text-sky-900 dark:text-teal-400 text-base font-bold mb-3">
                      Why it matters:
                    </h4>

                    <ul className="space-y-3 mb-8">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-zinc-800 dark:text-gray-200 text-sm md:text-base leading-relaxed">
                          <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="w-full bg-slate-50 dark:bg-gray-900 rounded-xl shadow-[inset_0px_1px_3px_rgba(0,0,0,0.02)] border-l-4 border-sky-900 dark:border-teal-500 p-6 mb-8">
                      <p className="text-zinc-800 dark:text-gray-300 text-sm italic font-normal leading-relaxed mb-3">
                        "{item.quote}"
                      </p>
                      <span className="text-sky-900 dark:text-teal-400 text-sm font-bold block">
                        {item.author}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <button className="flex-1 sm:flex-initial h-11 px-6 bg-white dark:bg-gray-700 border border-neutral-200 dark:border-gray-600 rounded-lg shadow-[0px_4px_12px_0px_rgba(17,71,105,0.08)] flex items-center justify-center gap-2 text-sky-900 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-gray-600 transition-colors">
                      <span>Download PDF</span>
                    </button>
                    <button className="flex-1 sm:flex-initial h-11 px-6 bg-sky-900 dark:bg-teal-700 rounded-lg flex items-center justify-center gap-2 text-white font-bold text-sm hover:bg-sky-950 dark:hover:bg-teal-800 transition-colors shadow-md">
                      <span>Read Online</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESEARCH LIBRARY SECTION ================= */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-sky-900 dark:text-white">
              Research Library
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Discover insights tailored to your industry and role
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" size={22} />
            <input
              type="text"
              placeholder="Try: AI compliance, FinTech automation, Cloud migration..."
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white px-14 py-4 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div className="mt-10 rounded-2xl border-2 border-[#207373] bg-white dark:bg-gray-800 p-8 text-center shadow-lg">
            <div className="flex justify-center items-center gap-2">
              <Star className="text-yellow-500 fill-yellow-500" size={20} />
              <h3 className="text-2xl font-bold text-[#207373] dark:text-teal-400">
                Recommended For You
              </h3>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Based on your industry profile and browsing history.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="font-semibold text-sky-900 dark:text-white block mb-2">Industry</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white px-4 py-3 focus:ring-2 focus:ring-teal-600">
                  <option>All Industries</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Retail</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            <div>
              <label className="font-semibold text-sky-900 dark:text-white block mb-2">Role</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white px-4 py-3">
                  <option>All Roles</option>
                  <option>Developer</option>
                  <option>Manager</option>
                  <option>CTO</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            <div>
              <label className="font-semibold text-sky-900 dark:text-white block mb-2">Region</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white px-4 py-3">
                  <option>Global</option>
                  <option>North America</option>
                  <option>Europe</option>
                  <option>Asia</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            <div>
              <label className="font-semibold text-sky-900 dark:text-white block mb-2">Format</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white px-4 py-3">
                  <option>All Formats</option>
                  <option>PDF</option>
                  <option>Whitepaper</option>
                  <option>Case Study</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <button className="rounded-lg bg-[#207373] hover:bg-[#1a5e5e] text-white font-semibold px-10 py-4 transition">
              Load More Research
            </button>
          </div>
        </div>
      </section>

      {/* ================= MOST DOWNLOADED SECTION ================= */}
      <section className="w-full bg-[#207373]/5 dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-[900px] w-full">
          <div className="text-center mb-12">
            <h2 className="text-sky-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Most Downloaded This Month
            </h2>
            <p className="text-stone-500 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto">
              Join thousands of leaders accessing our top insights
            </p>
          </div>

          <div className="space-y-6">
            {downloads.map((item) => (
              <div
                key={item.id}
                className="w-full bg-white dark:bg-gray-800 rounded-2xl border border-neutral-200 dark:border-gray-700 shadow-[0px_4px_20px_0px_rgba(17,71,105,0.05)] hover:shadow-lg transition-all duration-300 p-8 flex flex-col md:flex-row gap-6 md:gap-0"
              >
                <div className="w-[60px] flex flex-col items-center justify-center gap-1 mx-auto md:mx-0">
                  {renderBadge(item.badge)}
                  <span className="text-stone-500 dark:text-gray-400 text-base font-bold leading-8">
                    {item.rank}
                  </span>
                </div>

                <div className="flex-1 md:pl-8 md:pr-6 flex flex-col justify-center text-center md:text-left">
                  <h3 className="text-sky-900 dark:text-white text-xl font-bold leading-8">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-stone-500 dark:text-gray-300 text-base font-normal leading-6">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-stone-500 dark:text-gray-400 font-normal">
                    <div className="flex items-center gap-2">
                      <Download size={16} className="text-green-600 font-black" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={16} fill="#FFD700" color="#FFD700" />
                      <span>{item.useful}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-[#207373] dark:text-teal-400 font-black" />
                      <span>{item.cited}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-44 flex flex-col gap-3 justify-center items-center">
                  <button className="w-44 h-9 bg-[#207373] hover:bg-[#1a5e5e] text-white rounded-lg font-semibold text-sm transition-colors duration-200 flex items-center justify-center">
                    Download Now
                  </button>
                  <button className="w-44 h-9 border border-[#207373] dark:border-teal-500 text-[#207373] dark:text-teal-400 rounded-lg font-semibold text-sm hover:bg-[#207373] dark:hover:bg-teal-500 hover:text-white dark:hover:text-white transition-all duration-200 flex items-center justify-center">
                    Preview Key Findings
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTINUE YOUR JOURNEY SECTION ================= */}
      <section className="w-full bg-white dark:bg-gray-900 border-t border-neutral-200 dark:border-gray-800 py-16 px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-center text-sky-900 dark:text-white text-2xl md:text-3xl font-bold mb-12 tracking-tight">
          Continue Your Journey
        </h2>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {journeyItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 flex items-start gap-5 hover:shadow-md transition-shadow duration-200 border border-transparent dark:border-gray-700"
            >
              {/* Gradient Icon Badge */}
              <div className="w-20 h-20 shrink-0 bg-gradient-to-br from-indigo-950 via-teal-700 to-teal-400 rounded-full flex items-center justify-center shadow-sm">
                {item.icon}
              </div>

              {/* Content Context Block */}
              <div className="flex flex-col justify-center pt-2">
                <h3 className="text-sky-900 dark:text-white text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-stone-500 dark:text-gray-300 text-sm md:text-base font-normal leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Action Link Button Interface */}
                <button className="inline-flex items-center gap-1.5 text-[#207373] dark:text-teal-400 text-sm font-semibold hover:opacity-80 group transition-all w-fit">
                  <span>{item.actionText}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= READY TO TRANSFORM SECTION ================= */}
      <section className="w-full bg-zinc-100 dark:bg-gray-950 py-16 px-6 md:px-15 transition-colors duration-300">
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
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
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
                  <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">
                    Response within 4 hours
                  </span>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
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
                  <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6 mt-0 lg:mt-1">
                    24/7 Support Available
                  </span>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-700 rounded-xl border border-zinc-800 dark:border-gray-700 flex items-center justify-center shrink-0">
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
                    <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-normal leading-6">
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
                className="mt-4 w-56 h-14 self-start bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 hover:from-teal-600 hover:to-indigo-900 dark:from-teal-600 dark:via-teal-700 dark:to-teal-500 text-white text-base font-semibold rounded-xl transition-all shadow-sm"
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