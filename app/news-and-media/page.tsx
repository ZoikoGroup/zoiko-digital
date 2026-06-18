import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Image as ImageIcon } from "lucide-react";

export default function NewsAndMedia() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-[144px] pb-[160px] flex justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="/images/news/Gradient.png" alt="News and Media" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 w-full max-w-[1224px] px-6 flex flex-col items-center text-center">
          <div className="px-[16px] py-[6px] rounded-full outline outline-1 outline-white/50 mb-[32px]">
            <span className="text-white text-sm font-bold tracking-wide uppercase">Global Partnership</span>
          </div>
          <h1 className="text-center justify-center text-white text-4xl font-semibold font-sans leading-[89.60px] mb-[24px]">
            Shaping the Future | Sharing the Story
          </h1>
          <p className="text-white/90 text-[18px] md:text-[20px] font-light max-w-[800px] leading-relaxed">
            Explore the latest news, insights, and thought leadership from Zoiko Web Services where innovation meets impact.
          </p>
        </div>
      </section>

      {/* 2. Global Highlights */}
      <section className="py-[100px] px-6 flex justify-center bg-white">
        <div className="w-full max-w-[1224px]">
          <h2 className="text-center text-sky-900 text-[32px] font-semibold mb-[60px]">Global Highlights</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
            {/* Main Highlight */}
            <div className="lg:col-span-6 bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group cursor-pointer border border-zinc-100">
              <div className="relative w-full h-[380px] bg-slate-100">
                <img src="/images/news/page1.jpg" alt="Next-Gen AI" className="w-full h-full object-cover" />
                <div className="absolute top-[16px] left-[16px] bg-[#9e63af] px-[16px] py-[4px] rounded-full">
                  <span className="text-white text-[12px] font-bold">Product Launch</span>
                </div>
              </div>
              <div className="p-[32px] flex flex-col flex-1">
                <h3 className="text-sky-900 text-[24px] font-semibold leading-tight mb-[16px] group-hover:text-fuchsia-700 transition-colors">
                  Next-Gen AI Compliance Platform Launches Globally
                </h3>
                <p className="text-stone-500 text-[16px] leading-[26px] mb-[24px] flex-1">
                  Revolutionary platform automates regulatory compliance across 15 jurisdictions, reducing manual oversight by 75%.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-fuchsia-700 text-[14px] font-bold">March 15, 2025</span>
                  <span className="text-sky-900 text-[14px] font-bold flex items-center group-hover:text-fuchsia-700 transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>
            </div>

            {/* Smaller Highlights */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group cursor-pointer border border-zinc-100">
                <div className="relative w-full h-[180px] bg-slate-100">
                  <img src="/images/news/page4.jpg" alt="Strategic Alliance" className="w-full h-full object-cover" />
                  <div className="absolute top-[16px] left-[16px] bg-[#9e63af] px-[16px] py-[4px] rounded-full">
                    <span className="text-white text-[12px] font-bold">Partnership</span>
                  </div>
                </div>
                <div className="p-[24px] flex flex-col flex-1 justify-center">
                  <h3 className="text-sky-900 text-[18px] font-semibold leading-tight mb-[12px] group-hover:text-fuchsia-700 transition-colors">
                    Strategic Alliance with European Fintech Leaders
                  </h3>
                  <p className="text-stone-500 text-[14px] leading-relaxed line-clamp-2">
                    New partnership enables seamless integration and borderless payments.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group cursor-pointer border border-zinc-100">
                <div className="relative w-full h-[180px] bg-slate-100">
                  <img src="/images/news/page2.jpg" alt="Digital Inclusion" className="w-full h-full object-cover" />
                  <div className="absolute top-[16px] left-[16px] bg-[#9e63af] px-[16px] py-[4px] rounded-full">
                    <span className="text-white text-[12px] font-bold">ESG Impact</span>
                  </div>
                </div>
                <div className="p-[24px] flex flex-col flex-1 justify-center">
                  <h3 className="text-sky-900 text-[18px] font-semibold leading-tight mb-[12px] group-hover:text-fuchsia-700 transition-colors">
                    Digital Inclusion Program Reaches 500K Students
                  </h3>
                  <p className="text-stone-500 text-[14px] leading-relaxed line-clamp-2">
                    Zoiko Academy coding and digital literacy programs bridge the gap.
                  </p>
                </div>
              </div>

              {/* Card 3 (Now matching the other small cards) */}
              <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group cursor-pointer border border-zinc-100">
                <div className="relative w-full h-[180px] bg-slate-100">
                  <img src="/images/news/page3.jpg" alt="Customer Success" className="w-full h-full object-cover" />
                  <div className="absolute top-[16px] left-[16px] bg-[#9e63af] px-[16px] py-[4px] rounded-full">
                    <span className="text-white text-[12px] font-bold">Customer Success</span>
                  </div>
                </div>
                <div className="p-[24px] flex flex-col flex-1 justify-center">
                  <h3 className="text-sky-900 text-[18px] font-semibold leading-tight group-hover:text-[#9e63af] transition-colors">
                    Fortune 100 Client Achieves 60% Cost Reduction
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filter Banner */}
      <section className="bg-slate-50 border-y border-neutral-200 py-[32px] flex justify-center sticky top-[76px] z-40 backdrop-blur-md">
        <div className="w-full max-w-[1224px] px-6 relative flex flex-col gap-[24px]">
          <div className="flex flex-wrap items-center justify-center gap-[12px]">
            <button className="px-[24px] py-[8px] bg-fuchsia-700 text-white text-sm font-semibold rounded-3xl outline outline-2 outline-offset-[-2px] outline-fuchsia-700 font-sans">All Content</button>
            <button className="px-[24px] py-[8px] bg-white rounded-3xl outline outline-2 outline-offset-[-2px] outline-neutral-200 text-stone-500 hover:text-sky-900 text-sm font-semibold font-sans transition-colors">News</button>
            <button className="px-[24px] py-[8px] bg-white rounded-3xl outline outline-2 outline-offset-[-2px] outline-neutral-200 text-stone-500 hover:text-sky-900 text-sm font-semibold font-sans transition-colors">Press Releases</button>
            <button className="px-[24px] py-[8px] bg-white rounded-3xl outline outline-2 outline-offset-[-2px] outline-neutral-200 text-stone-500 hover:text-sky-900 text-sm font-semibold font-sans transition-colors">Thought Leadership</button>
            <button className="px-[24px] py-[8px] bg-white rounded-3xl outline outline-2 outline-offset-[-2px] outline-neutral-200 text-stone-500 hover:text-sky-900 text-sm font-semibold font-sans transition-colors">Media Coverage</button>
            <button className="px-[24px] py-[8px] bg-white rounded-3xl outline outline-2 outline-offset-[-2px] outline-neutral-200 text-stone-500 hover:text-sky-900 text-sm font-semibold font-sans transition-colors">ESG Stories</button>
          </div>

          <div className="bg-white rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.08)] px-[24px] py-[16px] flex flex-col sm:flex-row items-center justify-between">
            <span className="text-zinc-800 text-[16px] mb-4 sm:mb-0">Stay informed with our latest updates</span>
            <Link href="#" className="text-fuchsia-700 font-bold hover:text-fuchsia-800 transition-colors flex items-center">
              Subscribe to News Alerts <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Press Releases */}
      <section className="py-[100px] px-6 flex justify-center bg-white">
        <div className="w-full max-w-[1224px] flex flex-col items-center">
          <h2 className="text-[32px] font-semibold text-sky-900 mb-[16px] relative inline-block">
            Press Releases
            <div className="absolute -bottom-[8px] left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-fuchsia-700 to-sky-900"></div>
          </h2>
          <p className="text-stone-500 text-[20px] mb-[64px] text-center max-w-[800px]">
            Official updates from Zoiko Web Services, trusted by global stakeholders and Tier-1 media.
          </p>

          <div className="flex gap-[16px] mb-[48px] w-full max-w-[900px] justify-center md:justify-center">
            <button className="w-[160px] h-[48px] bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 flex items-center justify-center text-black font-medium text-base font-sans hover:bg-slate-50 transition-colors">
              All Regions
            </button>
            <button className="w-[176px] h-[48px] bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 flex items-center justify-center text-black font-medium text-base font-sans hover:bg-slate-50 transition-colors">
              All Categories
            </button>
          </div>

          <div className="w-full max-w-[900px] flex flex-col gap-[40px]">
            {/* PR 1 */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border-l-[4px] border-fuchsia-700 p-[32px] flex flex-col hover:translate-x-1 transition-transform">
              <div className="flex items-center gap-[16px] mb-[16px]">
                <span className="text-fuchsia-700 font-bold text-[14px]">March 15, 2025</span>
                <span className="px-[12px] py-[4px] bg-sky-50 text-sky-900 font-bold text-[12px] rounded-full">Global</span>
              </div>
              <h3 className="text-[24px] font-semibold text-sky-900 mb-[16px]">
                Zoiko Web Services Announces Q1 2025 Record Growth
              </h3>
              <p className="text-[16px] text-stone-500 mb-[32px]">
                Company reports 150% YoY growth in AI compliance solutions, expanding operations to 12 new markets across emerging economies.
              </p>
              <div className="flex flex-wrap items-center gap-[32px]">
                <Link href="#" className="text-fuchsia-700 font-bold text-[14px] font-sans hover:opacity-80">
                  Read Full Release
                </Link>
                <Link href="#" className="text-fuchsia-700 font-bold text-[14px] font-sans hover:opacity-80">
                  Download PDF
                </Link>
                <Link href="#" className="text-fuchsia-700 font-bold text-[14px] font-sans hover:opacity-80">
                  Media Assets
                </Link>
              </div>
            </div>

            {/* PR 2 */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border-l-[4px] border-fuchsia-700 p-[32px] flex flex-col hover:translate-x-1 transition-transform">
              <div className="flex items-center gap-[16px] mb-[16px]">
                <span className="text-fuchsia-700 font-bold text-[14px]">March 12, 2025</span>
                <span className="px-[12px] py-[4px] bg-sky-50 text-sky-900 font-bold text-[12px] rounded-full">Europe</span>
              </div>
              <h3 className="text-[24px] font-semibold text-sky-900 mb-[16px]">
                European Expansion: New Regional HQ Opens in Frankfurt
              </h3>
              <p className="text-[16px] text-stone-500 mb-[32px]">
                Strategic investment strengthens European operations, creating 200 high-tech jobs and establishing center of excellence for GDPR compliance.
              </p>
              <div className="flex flex-wrap items-center gap-[32px]">
                <Link href="#" className="text-fuchsia-700 font-bold text-[14px] font-sans hover:opacity-80">
                  Read Full Release
                </Link>
                <Link href="#" className="text-fuchsia-700 font-bold text-[14px] font-sans hover:opacity-80">
                  Download PDF
                </Link>
                <Link href="#" className="text-fuchsia-700 font-bold text-[14px] font-sans hover:opacity-80">
                  Media Assets
                </Link>
              </div>
            </div>

            {/* PR 3 */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border-l-[4px] border-fuchsia-700 p-[32px] flex flex-col hover:translate-x-1 transition-transform">
              <div className="flex items-center gap-[16px] mb-[16px]">
                <span className="text-fuchsia-700 font-bold text-[14px]">March 8, 2025</span>
                <span className="px-[12px] py-[4px] bg-sky-50 text-sky-900 font-bold text-[12px] rounded-full">Africa</span>
              </div>
              <h3 className="text-[24px] font-semibold text-sky-900 mb-[16px]">
                Zoiko Academy Graduates 10,000th Student in Nigeria
              </h3>
              <p className="text-[16px] text-stone-500 mb-[32px]">
                Milestone achievement in digital skills training program, with 85% of graduates securing employment in technology sector within six months.
              </p>
              <div className="flex flex-wrap items-center gap-[32px]">
                <Link href="#" className="text-fuchsia-700 font-bold text-[14px] font-sans hover:opacity-80">
                  Read Full Release
                </Link>
                <Link href="#" className="text-fuchsia-700 font-bold text-[14px] font-sans hover:opacity-80">
                  Download PDF
                </Link>
                <Link href="#" className="text-fuchsia-700 font-bold text-[14px] font-sans hover:opacity-80">
                  Media Assets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. As Featured In */}
      <section className="py-[100px] px-6 bg-gradient-to-b from-slate-50 to-white flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col items-center">
          <h2 className="text-[32px] font-semibold text-sky-900 mb-[16px] relative inline-block text-center">
            As Featured In
            <div className="absolute -bottom-[8px] left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-fuchsia-700 to-sky-900"></div>
          </h2>

          <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] py-[32px] px-[32px] w-full grid grid-cols-2 md:grid-cols-6 gap-[16px] lg:gap-[24px] mt-[48px] mb-[80px]">
            <div className="h-[64px] bg-slate-50 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 flex items-center justify-center opacity-70">
              <span className="text-sky-900 text-lg lg:text-xl font-bold font-sans">Forbes</span>
            </div>
            <div className="h-[64px] bg-slate-50 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 flex items-center justify-center opacity-70">
              <span className="text-sky-900 text-lg lg:text-xl font-bold font-sans">WSJ</span>
            </div>
            <div className="h-[64px] bg-slate-50 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 flex items-center justify-center opacity-70">
              <span className="text-sky-900 text-lg lg:text-xl font-bold font-sans">Financial Times</span>
            </div>
            <div className="h-[64px] bg-slate-50 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 flex items-center justify-center opacity-70">
              <span className="text-sky-900 text-lg lg:text-xl font-bold font-sans">TechCrunch</span>
            </div>
            <div className="h-[64px] bg-slate-50 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 flex items-center justify-center opacity-70">
              <span className="text-sky-900 text-lg lg:text-xl font-bold font-sans">CNBC</span>
            </div>
            <div className="h-[64px] bg-slate-50 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 flex items-center justify-center opacity-70">
              <span className="text-sky-900 text-lg lg:text-xl font-bold font-sans">Bloomberg</span>
            </div>
          </div>

          <h3 className="text-[32px] font-semibold text-sky-900 mb-[16px] text-center">
            Zoiko Partners with Fortune 500 Leaders
          </h3>
          <p className="text-[20px] text-sky-900 font-normal mb-[40px] text-center max-w-[800px]">
            Strategic alliance strengthens AI compliance frameworks across three continents
          </p>

          <div className="w-full bg-sky-900 rounded-xl py-[24px] px-[32px] flex items-center justify-center gap-[12px] flex-wrap text-center">
            <span className="text-white font-bold text-[18px]">Forbes:</span>
            <span className="text-white italic text-[18px]">"Zoiko's AI Governance Platform Sets New Industry Standard"</span>
          </div>
        </div>
      </section>

      {/* 6. Executive Insights & Thought Leadership */}
      <section className="py-[100px] px-6 bg-white flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col items-center">
          <h2 className="text-[32px] font-semibold text-sky-900 mb-[16px] relative inline-block text-center">
            Executive Insights & Thought Leadership
            <div className="absolute -bottom-[8px] left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-fuchsia-700 to-sky-900"></div>
          </h2>

          <div className="flex border-b-2 border-zinc-100 w-full mb-[64px] mt-[48px] overflow-x-auto no-scrollbar justify-center">
            <button className="px-[32px] py-[16px] border-b-[3px] border-fuchsia-700 text-fuchsia-700 font-semibold text-[16px] whitespace-nowrap">AI & Cloud</button>
            <button className="px-[32px] py-[16px] border-b-[3px] border-transparent text-stone-500 hover:text-sky-900 font-semibold text-[16px] whitespace-nowrap transition-colors">Cybersecurity & Trust</button>
            <button className="px-[32px] py-[16px] border-b-[3px] border-transparent text-stone-500 hover:text-sky-900 font-semibold text-[16px] whitespace-nowrap transition-colors">Fintech & Payments</button>
            <button className="px-[32px] py-[16px] border-b-[3px] border-transparent text-stone-500 hover:text-sky-900 font-semibold text-[16px] whitespace-nowrap transition-colors">ESG & Sustainable Tech</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] w-full mb-[64px]">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group cursor-pointer">
              <div className="w-full h-[192px] bg-slate-100 relative">
                <img src="/images/news/page6.jpg" alt="CTO Perspective" className="w-full h-full object-cover" />
              </div>
              <div className="p-[26px] flex flex-col flex-1">
                <h3 className="text-sky-900 text-xl font-semibold font-sans leading-6 mb-[16px] group-hover:text-fuchsia-700 transition-colors">
                  The Future of Enterprise AI: A CTO's Perspective
                </h3>
                <span className="text-fuchsia-700 text-sm font-bold font-sans leading-6 mb-[16px]">
                  Dr. Priya Sharma, Chief Technology Officer
                </span>
                <p className="text-stone-500 text-sm font-normal font-sans leading-5">
                  15-minute deep dive into responsible AI implementation and the next generation of enterprise automation.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group cursor-pointer">
              <div className="w-full h-[192px] bg-slate-100 relative">
                <img src="/images/news/page7.jpg" alt="Cloud Infrastructure" className="w-full h-full object-cover" />
              </div>
              <div className="p-[26px] flex flex-col flex-1">
                <h3 className="text-sky-900 text-xl font-semibold font-sans leading-6 mb-[16px] group-hover:text-fuchsia-700 transition-colors">
                  Building Resilient Cloud Infrastructure at Global Scale
                </h3>
                <span className="text-fuchsia-700 text-sm font-bold font-sans leading-6 mb-[16px]">
                  David Kim, Chief Executive Officer
                </span>
                <p className="text-stone-500 text-sm font-normal font-sans leading-5">
                  Strategic insights on architecting enterprise cloud solutions that scale across continents while maintaining security and compliance.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group cursor-pointer">
              <div className="w-full h-[192px] bg-slate-100 relative">
                <img src="/images/news/page5.jpg" alt="AI Ethics" className="w-full h-full object-cover" />
              </div>
              <div className="p-[26px] flex flex-col flex-1">
                <h3 className="text-sky-900 text-xl font-semibold font-sans leading-6 mb-[16px] group-hover:text-fuchsia-700 transition-colors">
                  AI Ethics in Practice: Beyond Compliance
                </h3>
                <span className="text-fuchsia-700 text-sm font-bold font-sans leading-6 mb-[16px]">
                  Elena Vasquez, Chief Legal Officer
                </span>
                <p className="text-stone-500 text-sm font-normal font-sans leading-5">
                  Exploring practical approaches to ethical AI implementation in highly regulated industries.
                </p>
              </div>
            </div>
          </div>

          <button className="w-80 h-16 bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-lg shadow-[0px_4px_15px_0px_rgba(144,80,159,0.30)] flex items-center justify-center hover:opacity-90 transition-opacity">
            <span className="text-white text-lg font-bold font-sans leading-7">Explore Thought Leadership →</span>
          </button>
        </div>
      </section>

      {/* 7. Media Kit & Press Resources */}
      <section className="py-[100px] px-6 bg-gradient-to-br from-slate-50 to-white flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col">
          <h2 className="text-[32px] font-semibold text-sky-900 mb-[16px] font-sans">Media Kit & Press Resources</h2>
          <p className="text-[20px] text-stone-500 font-normal font-sans leading-8 mb-[48px] max-w-[580px]">
            Everything journalists and partners need to tell the Zoiko story accurately and compellingly.
          </p>

          <div className="flex flex-col lg:flex-row gap-[64px] items-start">
            <div className="w-full lg:w-1/2 flex flex-col gap-[32px]">
              <div className="bg-white h-20 rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-center px-[20px] cursor-pointer hover:outline-fuchsia-700 transition-colors">
                <span className="text-sky-900 text-base font-bold font-sans leading-6">Brand Assets</span>
                <span className="text-stone-500 text-sm font-normal font-sans leading-5">High-resolution logos, color palettes, and brand guidelines</span>
              </div>
              <div className="bg-white h-20 rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-center px-[20px] cursor-pointer hover:outline-fuchsia-700 transition-colors">
                <span className="text-sky-900 text-base font-bold font-sans leading-6">Leadership Profiles</span>
                <span className="text-stone-500 text-sm font-normal font-sans leading-5">Executive bios, high-resolution headshots, and contact information</span>
              </div>
              <div className="bg-white h-20 rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-center px-[20px] cursor-pointer hover:outline-fuchsia-700 transition-colors">
                <span className="text-sky-900 text-base font-bold font-sans leading-6">Corporate Facts</span>
                <span className="text-stone-500 text-sm font-normal font-sans leading-5">Company overview, key statistics, and milestone timeline</span>
              </div>
              <div className="bg-white h-20 rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-center px-[20px] cursor-pointer hover:outline-fuchsia-700 transition-colors">
                <span className="text-sky-900 text-base font-bold font-sans leading-6">Press Contacts</span>
                <span className="text-stone-500 text-sm font-normal font-sans leading-5">Direct access to regional press representatives and subject matter experts</span>
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 p-[32px] grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
              <div className="h-28 rounded-lg outline outline-2 outline-offset-[-2px] outline-zinc-100 flex items-center justify-center p-[24px] cursor-pointer hover:outline-fuchsia-700 transition-colors">
                <span className="text-stone-500 text-sm font-bold font-sans leading-5 text-center mt-auto">Corporate Fact Sheet</span>
              </div>
              <div className="h-28 rounded-lg outline outline-2 outline-offset-[-2px] outline-zinc-100 flex items-center justify-center p-[24px] cursor-pointer hover:outline-fuchsia-700 transition-colors">
                <span className="text-stone-500 text-sm font-bold font-sans leading-5 text-center mt-auto">Brand Guidelines</span>
              </div>
              <div className="h-28 rounded-lg outline outline-2 outline-offset-[-2px] outline-zinc-100 flex items-center justify-center p-[24px] cursor-pointer hover:outline-fuchsia-700 transition-colors">
                <span className="text-stone-500 text-sm font-bold font-sans leading-5 text-center mt-auto">Leadership Bios</span>
              </div>
              <div className="h-28 rounded-lg outline outline-2 outline-offset-[-2px] outline-zinc-100 flex items-center justify-center p-[24px] cursor-pointer hover:outline-fuchsia-700 transition-colors">
                <span className="text-stone-500 text-sm font-bold font-sans leading-5 text-center mt-auto">Company Statistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Upcoming Events */}
      <section className="py-[100px] px-6 bg-white flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col items-center">
          <h2 className="text-[32px] font-semibold text-sky-900 mb-[16px] relative inline-block text-center">
            Connect With Us Worldwide
            <div className="absolute -bottom-[8px] left-1/2 transform -translate-x-1/2 w-[60px] h-[3px] bg-gradient-to-r from-fuchsia-700 to-sky-900"></div>
          </h2>

          <div className="flex border-b-2 border-zinc-100 w-full mb-[64px] mt-[48px] overflow-x-auto no-scrollbar justify-center">
            <button className="px-[32px] py-[16px] border-b-[3px] border-fuchsia-700 text-fuchsia-700 font-semibold text-[16px] whitespace-nowrap">Upcoming Events</button>
            <button className="px-[32px] py-[16px] border-b-[3px] border-transparent text-stone-500 hover:text-sky-900 font-semibold text-[16px] whitespace-nowrap transition-colors">Webinars</button>
            <button className="px-[32px] py-[16px] border-b-[3px] border-transparent text-stone-500 hover:text-sky-900 font-semibold text-[16px] whitespace-nowrap transition-colors">On-Demand</button>
          </div>

          <div className="w-full flex flex-col gap-[24px]">
            {/* Event 1 */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-neutral-200 p-[32px] flex flex-col md:flex-row items-center gap-[32px] hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-[80px] h-[96px] bg-gradient-to-b from-fuchsia-700 to-sky-900 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
                <span className="text-[32px] font-bold leading-none mb-1">25</span>
                <span className="text-[14px] font-bold">MAR</span>
              </div>
              <div className="flex flex-col flex-1 text-center md:text-left">
                <h3 className="text-sky-900 text-[24px] font-semibold mb-[8px]">AI Governance Summit 2025</h3>
                <span className="text-fuchsia-700 font-bold text-[16px] mb-[8px]">London, UK</span>
                <p className="text-stone-500 text-[16px]">CEO keynote on the future of responsible AI in enterprise environments</p>
              </div>
              <Link href="#" className="text-fuchsia-700 font-bold text-[16px] flex items-center hover:opacity-80 whitespace-nowrap mt-[16px] md:mt-0">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-neutral-200 p-[32px] flex flex-col md:flex-row items-center gap-[32px] hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-[80px] h-[96px] bg-gradient-to-b from-fuchsia-700 to-sky-900 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
                <span className="text-[32px] font-bold leading-none mb-1">28</span>
                <span className="text-[14px] font-bold">MAR</span>
              </div>
              <div className="flex flex-col flex-1 text-center md:text-left">
                <h3 className="text-sky-900 text-[24px] font-semibold mb-[8px]">African Fintech Conference</h3>
                <span className="text-fuchsia-700 font-bold text-[16px] mb-[8px]">Lagos, Nigeria</span>
                <p className="text-stone-500 text-[16px]">Panel discussion on digital financial inclusion across emerging markets</p>
              </div>
              <Link href="#" className="text-fuchsia-700 font-bold text-[16px] flex items-center hover:opacity-80 whitespace-nowrap mt-[16px] md:mt-0">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-neutral-200 p-[32px] flex flex-col md:flex-row items-center gap-[32px] hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-[80px] h-[96px] bg-gradient-to-b from-fuchsia-700 to-sky-900 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
                <span className="text-[32px] font-bold leading-none mb-1">05</span>
                <span className="text-[14px] font-bold">APR</span>
              </div>
              <div className="flex flex-col flex-1 text-center md:text-left">
                <h3 className="text-sky-900 text-[24px] font-semibold mb-[8px]">Cloud Security Expo</h3>
                <span className="text-fuchsia-700 font-bold text-[16px] mb-[8px]">Singapore</span>
                <p className="text-stone-500 text-[16px]">CTO presentation on next-generation cloud infrastructure security</p>
              </div>
              <Link href="#" className="text-fuchsia-700 font-bold text-[16px] flex items-center hover:opacity-80 whitespace-nowrap mt-[16px] md:mt-0">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-[120px] px-6 bg-gradient-to-br from-sky-900 to-gray-900 flex justify-center text-center">
        <div className="w-full max-w-[800px] flex flex-col items-center">
          <h2 className="text-white text-[32px] md:text-[40px] font-semibold leading-tight mb-[24px]">
            Want to Learn More, Partner, or Cover Zoiko Web Services?
          </h2>
          <p className="text-white/90 text-[20px] font-light mb-[48px]">
            We make global innovation accessible — and stories worth telling.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-[24px]">
            <button className="px-[32px] py-[16px] bg-white text-fuchsia-700 font-bold text-[16px] rounded-lg shadow-[0px_4px_15px_rgba(144,80,159,0.3)] hover:bg-slate-50 transition-colors w-full sm:w-auto">
              Contact Media Relations
            </button>
            <button className="px-[32px] py-[16px] bg-white/10 border border-white/30 text-white font-bold text-[16px] rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center w-full sm:w-auto">
              Subscribe to News Alerts <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. ESG & Impact Stories */}
      <section className="py-[100px] px-6 bg-gradient-to-b from-slate-50 to-white flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col items-center">
          <div className="text-center justify-center text-sky-900 text-2xl font-semibold font-sans leading-[64px]">
            ESG & Impact Stories
          </div>
          <div className="text-center justify-center text-stone-500 text-xl font-normal font-sans leading-8 mb-[80px]">
            Dedicated to sustainable technology, digital inclusion, and responsible innovation.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] w-full mb-[80px]">
            <div className="flex flex-col items-center text-center">
              <span className="text-center justify-center text-fuchsia-700 text-5xl font-bold font-sans leading-[76.80px]">2M</span>
              <span className="text-center justify-center text-stone-500 text-base font-bold font-sans leading-6">Students Trained by 2027</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-center justify-center text-fuchsia-700 text-5xl font-bold font-sans leading-[76.80px]">40%</span>
              <span className="text-center justify-center text-stone-500 text-base font-bold font-sans leading-6">Carbon Footprint Reduction</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-center justify-center text-fuchsia-700 text-5xl font-bold font-sans leading-[76.80px]">15</span>
              <span className="text-center justify-center text-stone-500 text-base font-bold font-sans leading-6">Countries Served</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] w-full">
            {/* ESG Card 1 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform">
              <div className="w-full h-[192px] bg-slate-100 relative">
                <img src="/images/news/page8.jpg" alt="Green Cloud Initiative" className="w-full h-full object-cover" />
              </div>
              <div className="px-[26px] py-[28px] flex flex-col flex-1">
                <h3 className="justify-center text-sky-900 text-xl font-semibold font-sans leading-6 mb-[24px] group-hover:text-fuchsia-700 transition-colors">
                  Green Cloud Initiative Reduces Client Emissions by 1.2M Tons
                </h3>
                <p className="justify-center text-stone-500 text-base font-normal font-sans leading-6 mb-[32px] flex-1">
                  Our sustainable cloud architecture helps Fortune 500 companies achieve carbon neutrality while maintaining peak performance and security standards.
                </p>
                <div className="flex flex-wrap gap-[12px] mt-auto">
                  <span className="px-[12px] py-[6px] bg-sky-50 justify-center text-sky-900 text-xs font-bold font-sans leading-5 rounded-2xl">Climate Action</span>
                  <span className="px-[12px] py-[6px] bg-sky-50 justify-center text-sky-900 text-xs font-bold font-sans leading-5 rounded-2xl">Sustainable Tech</span>
                </div>
              </div>
            </div>

            {/* ESG Card 2 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform">
              <div className="w-full h-[192px] bg-slate-100 relative">
                <img src="/images/news/page10.jpg" alt="Digital Skills Training" className="w-full h-full object-cover" />
              </div>
              <div className="px-[26px] py-[28px] flex flex-col flex-1">
                <h3 className="justify-center text-sky-900 text-xl font-semibold font-sans leading-6 mb-[24px] group-hover:text-fuchsia-700 transition-colors">
                  Digital Skills Training Reaches 500,000 Students Across Africa
                </h3>
                <p className="justify-center text-stone-500 text-base font-normal font-sans leading-6 mb-[32px] flex-1">
                  Zoiko Academy's coding and financial literacy programs are bridging the digital divide, with 85% of graduates finding employment within six months.
                </p>
                <div className="flex flex-wrap gap-[12px] mt-auto">
                  <span className="px-[12px] py-[6px] bg-sky-50 justify-center text-sky-900 text-xs font-bold font-sans leading-5 rounded-2xl">Digital Inclusion</span>
                  <span className="px-[12px] py-[6px] bg-sky-50 justify-center text-sky-900 text-xs font-bold font-sans leading-5 rounded-2xl">Education</span>
                </div>
              </div>
            </div>

            {/* ESG Card 3 */}
            <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform">
              <div className="w-full h-[192px] bg-slate-100 relative">
                <img src="/images/news/page9.jpg" alt="Responsible AI" className="w-full h-full object-cover" />
              </div>
              <div className="px-[26px] py-[28px] flex flex-col flex-1">
                <h3 className="justify-center text-sky-900 text-xl font-semibold font-sans leading-6 mb-[24px] group-hover:text-fuchsia-700 transition-colors">
                  Responsible AI Framework Adopted by 100+ Organizations
                </h3>
                <p className="justify-center text-stone-500 text-base font-normal font-sans leading-6 mb-[32px] flex-1">
                  Our open-source AI ethics toolkit helps organizations implement bias-free algorithms and transparent decision-making processes across all sectors.
                </p>
                <div className="flex flex-wrap gap-[12px] mt-auto">
                  <span className="px-[12px] py-[6px] bg-sky-50 justify-center text-sky-900 text-xs font-bold font-sans leading-5 rounded-2xl">Responsible AI</span>
                  <span className="px-[12px] py-[6px] bg-sky-50 justify-center text-sky-900 text-xs font-bold font-sans leading-5 rounded-2xl">Ethics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact Section */}
      <section className="py-[100px] px-6 bg-zinc-100 flex justify-center">
        <div className="w-full max-w-[1224px] flex flex-col lg:flex-row justify-between items-center gap-[64px]">
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="text-zinc-800 text-[32px] md:text-[40px] font-bold font-sans leading-tight md:leading-10 mb-[24px]">
              Ready to Transform<br />Your Business?
            </h2>
            <p className="text-neutral-600 text-[18px] font-normal font-sans leading-7 mb-[48px]">
              Connect with our global team of experts to discuss your digital<br />transformation journey and discover how we can accelerate your<br />success.
            </p>
            
            <div className="flex flex-col gap-[32px]">
              {/* Email Us */}
              <div className="flex items-start gap-[24px]">
                <div className="w-14 h-14 bg-sky-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-800 text-lg font-semibold font-sans leading-7">Email Us</span>
                  <span className="text-zinc-400 text-base font-normal font-sans leading-6">hello@zws.com</span>
                  <span className="text-zinc-500 text-sm font-normal font-sans leading-6">Response within 4 hours</span>
                </div>
              </div>
              
              {/* Call Us */}
              <div className="flex items-start gap-[24px]">
                <div className="w-14 h-14 bg-sky-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-800 text-lg font-semibold font-sans leading-7">Call Us</span>
                  <span className="text-zinc-400 text-base font-normal font-sans leading-6">+1 (555) 123-4567</span>
                  <span className="text-zinc-500 text-sm font-normal font-sans leading-6">24/7 Support Available</span>
                </div>
              </div>

              {/* Live Chat */}
              <div className="flex items-start gap-[24px]">
                <div className="w-14 h-14 bg-sky-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-800 text-lg font-semibold font-sans leading-7">Live Chat</span>
                  <span className="text-zinc-400 text-base font-normal font-sans leading-6">Instant Support</span>
                  <span className="text-zinc-500 text-sm font-normal font-sans leading-6">Online now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[572px] bg-white rounded-[20px] p-[40px] outline outline-1 outline-neutral-300 shadow-sm">
              <form className="flex flex-col gap-[24px]">
                {/* Full Name */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-zinc-800 text-sm font-semibold font-sans leading-6">Full Name</label>
                  <input type="text" className="w-full h-12 bg-neutral-100 rounded-lg border border-stone-300 px-4 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors" />
                </div>
                
                {/* Business Email */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-zinc-800 text-sm font-semibold font-sans leading-6">Business Email</label>
                  <input type="email" className="w-full h-12 bg-neutral-100 rounded-lg border border-stone-300 px-4 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors" />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-zinc-800 text-sm font-semibold font-sans leading-6">Company</label>
                  <input type="text" className="w-full h-12 bg-neutral-100 rounded-lg border border-stone-300 px-4 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors" />
                </div>

                {/* Service Interest */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-zinc-800 text-sm font-semibold font-sans leading-6">Service Interest</label>
                  <div className="relative">
                    <select defaultValue="" className="w-full h-14 bg-neutral-100 rounded-lg border border-stone-300 px-4 appearance-none text-neutral-500 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors cursor-pointer">
                      <option value="" disabled hidden>Select a service</option>
                      <option>Cloud Architecture</option>
                      <option>Digital Transformation</option>
                      <option>AI Solutions</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                {/* Project Budget */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-zinc-800 text-sm font-semibold font-sans leading-6">Project Budget</label>
                  <div className="relative">
                    <select defaultValue="" className="w-full h-14 bg-neutral-100 rounded-lg border border-stone-300 px-4 appearance-none text-neutral-500 focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors cursor-pointer">
                      <option value="" disabled hidden>Select budget range</option>
                      <option>$10k - $50k</option>
                      <option>$50k - $100k</option>
                      <option>$100k+</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-zinc-800 text-sm font-semibold font-sans leading-6">Project Details</label>
                  <textarea className="w-full h-28 bg-neutral-100 rounded-lg border border-stone-300 px-4 py-3 resize-none focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-colors placeholder:text-neutral-400" placeholder="Tell us about your project requirements, timeline, and objectives..."></textarea>
                </div>

                {/* Submit Button */}
                <button type="button" className="w-[224px] h-14 mt-[8px] bg-[#534e7a] rounded-xl text-white text-base font-semibold font-sans hover:bg-[#433f63] transition-colors flex items-center justify-center">
                  Start Your Project
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
