import React from 'react';
import Link from 'next/link';
import { Search, Trophy, Award, Star, BookOpen, Download, ChevronRight, CheckSquare, Phone, Mail, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function WhitepaperPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="w-full flex justify-center bg-gradient-to-r from-[#8b5a96] to-[#3a587b] relative overflow-hidden h-[600px] items-center">
        {/* Subtle overlay effect */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(315deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)]"></div>

        <div className="relative z-10 flex flex-col items-center mt-10">
          {/* Pill */}
          <div className="w-[420px] h-12 rounded-[30px] border border-white/40 flex items-center justify-center mb-8 bg-white/5 backdrop-blur-sm">
            <div className="text-white text-[15px] font-semibold font-['Inter'] tracking-wide">
              Trusted by <span className="text-yellow-400">500+</span> enterprises worldwide
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-center text-white text-[64px] font-bold font-['Inter'] leading-[89.60px] tracking-tight mb-6">
            Insights That Power Innovation
          </h1>

          {/* Subheading */}
          <p className="text-center text-slate-200 text-[20px] font-normal font-['Inter'] mb-12 opacity-90 tracking-wide">
            Exclusive research shaping decisions across industries
          </p>

          {/* Buttons */}
          <div className="flex gap-6">
            <button className="w-56 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-slate-50 transition shadow-lg">
              <span className="text-[#2c5378] text-[15px] font-bold font-['Inter'] tracking-wide">Browse Whitepapers</span>
            </button>
            <button className="w-[260px] h-14 rounded-lg border-2 border-white/50 flex items-center justify-center hover:bg-white/10 transition">
              <span className="text-white text-[15px] font-bold font-['Inter'] tracking-wide">Download Executive Brief</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="w-full flex justify-center bg-[#f0f4f8] py-20 relative">
        <div className="w-[1200px] h-[2292.56px] relative">
          <div className="w-full top-[-3px] absolute text-center text-[#2c5378] text-2xl font-bold font-['Inter'] leading-[64px]">Featured Research</div>
          <div className="w-full top-[45.27px] absolute text-center text-stone-500 text-base font-normal font-['Inter'] leading-7">Essential insights from our latest industry analysis</div>

          <div className="w-[1000px] h-[2136.42px] left-[100px] top-[103px] absolute">
            <div className="w-[1000px] h-[2054.42px] left-0 top-0 absolute bg-white/0 rounded-2xl shadow-[0px_12px_40px_0px_rgba(144,80,159,0.20)] overflow-hidden">

              {/* Item 1 */}
              <div className="w-[1000px] h-[694.19px] relative bg-white">
                <div className="w-80 h-[598px] left-[48px] top-[47.73px] absolute bg-neutral-600 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] overflow-hidden">
                  <img className="w-full h-full object-cover" src="/images/white/three.jpg" alt="AI in Financial Services" />
                </div>
                <div className="w-[512.79px] h-8 left-[396px] top-[55px] absolute justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-10">The Future of AI in Financial Services</div>
                <div className="w-[499.95px] h-20 left-[396px] top-[114.06px] absolute justify-center text-stone-500 text-base font-normal font-['Inter'] leading-7">Comprehensive analysis of artificial intelligence adoption trends,<br />regulatory compliance, and ROI metrics across global financial<br />institutions in 2025.</div>
                <div className="w-32 h-5 left-[396px] top-[230.49px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-7">Why it matters:</div>
                <div className="w-[556px] h-32 left-[396px] top-[270.63px] absolute">
                  <div className="w-[556px] h-10 left-0 top-0 absolute">
                    <div className="w-4 h-6 left-0 top-[8px] absolute justify-center text-green-600 text-base font-bold font-['Inter'] leading-6">✓</div>
                    <div className="w-64 h-4 left-[24px] top-[12px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">87% reduction in fraud detection time</div>
                  </div>
                  <div className="w-[556px] h-10 left-0 top-[41.59px] absolute">
                    <div className="w-4 h-6 left-0 top-[8px] absolute justify-center text-green-600 text-base font-bold font-['Inter'] leading-6">✓</div>
                    <div className="w-80 h-4 left-[24px] top-[12px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">$2.3B saved through automated compliance</div>
                  </div>
                  <div className="w-[556px] h-10 left-0 top-[83.18px] absolute">
                    <div className="w-4 h-6 left-0 top-[8px] absolute justify-center text-green-600 text-base font-bold font-['Inter'] leading-6">✓</div>
                    <div className="w-80 h-4 left-[24px] top-[12px] absolute justify-center text-zinc-800 text-base font-normal font-['Inter'] leading-6">45% improvement in customer experience scores</div>
                  </div>
                </div>
                <div className="w-[556px] h-36 left-[396px] top-[427.41px] absolute bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] border-l-4 border-sky-900">
                  <div className="w-[476.34px] h-11 left-[28px] top-[28px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">"This ZWS report guided our cloud migration strategy and saved us<br />millions in implementation costs."</div>
                  <div className="w-48 h-4 left-[28px] top-[95.18px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-6">— CTO, Fortune 100 Bank</div>
                </div>
                <div className="w-44 h-11 left-[396px] top-[600.19px] absolute bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]">
                  <div className="w-3 h-4 left-[24px] top-[15px] absolute text-center justify-center text-sky-900 text-base font-semibold font-['Inter'] leading-4"></div>
                  <div className="w-28 h-4 left-[44px] top-[14px] absolute text-center justify-center text-sky-900 text-base font-bold font-['Inter']">Download PDF</div>
                </div>
                <div className="w-44 h-11 left-[592.89px] top-[600.19px] absolute bg-sky-900 rounded-lg">
                  <div className="w-5 h-4 left-[26px] top-[15px] absolute text-center justify-center text-white text-base font-semibold font-['Inter'] leading-4"></div>
                  <div className="w-24 h-4 left-[52px] top-[14px] absolute text-center justify-center text-white text-base font-bold font-['Inter']">Read Online</div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="w-[1000px] h-[694.19px] left-0 top-[694.19px] absolute bg-white">
                <div className="w-80 h-[599px] left-[48px] top-[47.54px] absolute bg-neutral-600 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] overflow-hidden">
                  <img className="w-full h-full object-cover" src="/images/white/two.jpg" alt="Enterprise Cloud Security" />
                </div>
                <div className="w-[512.79px] h-8 left-[396px] top-[55px] absolute justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-10">Enterprise Cloud Security Benchmarks</div>
                <div className="w-[499.95px] h-20 left-[396px] top-[114.06px] absolute justify-center text-stone-500 text-base font-normal font-['Inter'] leading-7">In-depth study of security frameworks, threat landscapes, and best<br />practices for enterprise cloud infrastructure across 1,200+<br />organizations.</div>
                <div className="w-32 h-5 left-[396px] top-[230.48px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-7">Why it matters:</div>
                <div className="w-[556px] h-32 left-[396px] top-[270.62px] absolute">
                  <div className="w-[556px] h-10 left-0 top-0 absolute">
                    <div className="w-4 h-6 left-0 top-[8px] absolute justify-center text-green-600 text-base font-bold font-['Inter'] leading-6">✓</div>
                    <div className="w-64 h-4 left-[24px] top-[12px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">92% reduction in security incidents</div>
                  </div>
                  <div className="w-[556px] h-10 left-0 top-[41.60px] absolute">
                    <div className="w-4 h-6 left-0 top-[8px] absolute justify-center text-green-600 text-base font-bold font-['Inter'] leading-6">✓</div>
                    <div className="w-80 h-4 left-[24px] top-[12px] absolute justify-center text-zinc-800 text-base font-normal font-['Inter'] leading-6">$5.7M average cost savings per breach prevented</div>
                  </div>
                  <div className="w-[556px] h-10 left-0 top-[83.19px] absolute">
                    <div className="w-4 h-6 left-0 top-[8px] absolute justify-center text-green-600 text-base font-bold font-['Inter'] leading-6">✓</div>
                    <div className="w-80 h-4 left-[24px] top-[12px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">60% faster compliance certification</div>
                  </div>
                </div>
                <div className="w-[556px] h-36 left-[396px] top-[427.40px] absolute bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] border-l-4 border-sky-900">
                  <div className="w-[476.34px] h-11 left-[28px] top-[28px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">"ZWS research helped us achieve SOC 2 compliance 6 months ahead<br />of schedule."</div>
                  <div className="w-48 h-4 left-[28px] top-[95.18px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-6">— CISO, Global Healthcare Provider</div>
                </div>
                <div className="w-44 h-11 left-[396px] top-[600.19px] absolute bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]">
                  <div className="w-3 h-4 left-[24px] top-[15px] absolute text-center justify-center text-sky-900 text-base font-semibold font-['Inter'] leading-4"></div>
                  <div className="w-28 h-4 left-[44px] top-[14px] absolute text-center justify-center text-sky-900 text-base font-bold font-['Inter']">Download PDF</div>
                </div>
                <div className="w-44 h-11 left-[592.89px] top-[600.19px] absolute bg-sky-900 rounded-lg">
                  <div className="w-5 h-4 left-[26px] top-[15px] absolute text-center justify-center text-white text-base font-semibold font-['Inter'] leading-4"></div>
                  <div className="w-24 h-4 left-[52px] top-[14px] absolute text-center justify-center text-white text-base font-bold font-['Inter']">Read Online</div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="w-[1000px] h-[666.05px] left-0 top-[1388.38px] absolute bg-white">
                <div className="w-80 h-[570px] left-[48px] top-[48.35px] absolute bg-neutral-600 rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] overflow-hidden">
                  <img className="w-full h-full object-cover" src="/images/white/one.jpg" alt="Digital Transformation ROI" />
                </div>
                <div className="w-[512.79px] h-8 left-[396px] top-[55px] absolute justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-10">Digital Transformation ROI Metrics</div>
                <div className="w-[499.95px] h-20 left-[396px] top-[114.06px] absolute justify-center text-stone-500 text-base font-normal font-['Inter'] leading-7">Comprehensive analysis of digital transformation initiatives, measuring<br />actual ROI and business impact across Fortune 500 companies.</div>
                <div className="w-32 h-5 left-[396px] top-[202.34px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-7">Why it matters:</div>
                <div className="w-[556px] h-32 left-[396px] top-[242.48px] absolute">
                  <div className="w-[556px] h-10 left-0 top-0 absolute">
                    <div className="w-4 h-6 left-0 top-[8px] absolute justify-center text-green-600 text-base font-bold font-['Inter'] leading-6">✓</div>
                    <div className="w-64 h-4 left-[24px] top-[12px] absolute justify-center text-zinc-800 text-base font-normal font-['Inter'] leading-6">300% average ROI within 18 months</div>
                  </div>
                  <div className="w-[556px] h-10 left-0 top-[41.59px] absolute">
                    <div className="w-4 h-6 left-0 top-[8px] absolute justify-center text-green-600 text-base font-bold font-['Inter'] leading-6">✓</div>
                    <div className="w-80 h-4 left-[24px] top-[12px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">55% improvement in operational efficiency</div>
                  </div>
                  <div className="w-[556px] h-10 left-0 top-[83.19px] absolute">
                    <div className="w-4 h-6 left-0 top-[8px] absolute justify-center text-green-600 text-base font-bold font-['Inter'] leading-6">✓</div>
                    <div className="w-80 h-4 left-[24px] top-[12px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">40% reduction in time-to-market</div>
                  </div>
                </div>
                <div className="w-[556px] h-36 left-[396px] top-[399.26px] absolute bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] border-l-4 border-sky-900">
                  <div className="w-[476.34px] h-11 left-[28px] top-[28px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">"This research validated our transformation strategy and secured<br />board approval for $50M investment."</div>
                  <div className="w-48 h-4 left-[28px] top-[95.18px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-6">— Chief Digital Officer, Manufacturing Leader</div>
                </div>
                <div className="w-44 h-11 left-[396px] top-[572.04px] absolute bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]">
                  <div className="w-3 h-4 left-[24px] top-[15px] absolute text-center justify-center text-sky-900 text-base font-semibold font-['Inter'] leading-4"></div>
                  <div className="w-28 h-4 left-[44px] top-[14px] absolute text-center justify-center text-sky-900 text-base font-bold font-['Inter']">Download PDF</div>
                </div>
                <div className="w-44 h-11 left-[592.89px] top-[572.04px] absolute bg-sky-900 rounded-lg">
                  <div className="w-5 h-4 left-[26px] top-[15px] absolute text-center justify-center text-white text-base font-semibold font-['Inter'] leading-4"></div>
                  <div className="w-24 h-4 left-[52px] top-[14px] absolute text-center justify-center text-white text-base font-bold font-['Inter']">Read Online</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Research Library */}
      <section className="w-full flex justify-center bg-[#fdfdfd] py-20 relative">
        <div className="w-[1200px] h-[623.27px] relative">
            <div className="w-80 h-16 left-[436.58px] top-[30px] absolute text-center justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-[64px]">Research Library</div>
            <div className="w-96 h-5 left-[405.39px] top-[86px] absolute text-center justify-center text-stone-500 text-base font-normal font-['Inter'] leading-7">Discover insights tailored to your industry and role</div>
            
            <div className="w-[1160px] h-32 left-[20px] top-[156.14px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-fuchsia-700">
                <div className="w-[1092px] h-7 left-[34px] top-[34px] absolute">
                    <div className="w-5 h-4 left-[429.97px] top-[5.61px] absolute flex items-center justify-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div className="w-52 h-5 left-[459.02px] top-[4px] absolute text-center justify-center text-fuchsia-700 text-lg font-bold font-['Inter'] leading-7">Recommended for You</div>
                </div>
                <div className="w-96 h-4 left-[393.22px] top-[75.94px] absolute text-center justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">Based on your industry profile and browsing patterns</div>
            </div>
            
            <div className="left-[20px] top-[407.67px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-6">Industry:</div>
            <div className="w-72 h-11 left-[20px] top-[442.27px] absolute bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200">
                <div className="w-56 h-5 left-[18px] top-[12px] absolute overflow-hidden">
                    <div className="left-0 top-[1px] absolute justify-center text-black text-base font-normal font-['Inter'] leading-4">All Industries</div>
                </div>
            </div>
            
            <div className="left-[314px] top-[407.67px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-6">Role:</div>
            <div className="w-72 h-11 left-[314px] top-[442.27px] absolute bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200">
                <div className="w-56 h-5 left-[18px] top-[12px] absolute overflow-hidden">
                    <div className="left-0 top-[1px] absolute justify-center text-black text-base font-normal font-['Inter'] leading-4">All Roles</div>
                </div>
            </div>
            
            <div className="left-[608px] top-[407.67px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-6">Region:</div>
            <div className="w-72 h-11 left-[608px] top-[442.27px] absolute bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200">
                <div className="w-56 h-5 left-[18px] top-[12px] absolute overflow-hidden">
                    <div className="left-0 top-[1px] absolute justify-center text-black text-base font-normal font-['Inter'] leading-4">Global</div>
                </div>
            </div>
            
            <div className="left-[902px] top-[407.67px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-6">Format:</div>
            <div className="w-72 h-11 left-[902px] top-[442.27px] absolute bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200">
                <div className="w-56 h-5 left-[18px] top-[12px] absolute overflow-hidden">
                    <div className="left-0 top-[1px] absolute justify-center text-black text-base font-normal font-['Inter'] leading-4">All Formats</div>
                </div>
            </div>
            
            <div className="w-[600px] h-14 left-[300px] top-[319.67px] absolute">
                <div className="w-[600px] h-14 left-0 top-0 absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-neutral-200 overflow-hidden">
                    <div className="w-[526px] h-5 left-[52px] top-[18px] absolute overflow-hidden">
                        <div className="left-0 top-0 absolute justify-center text-neutral-500 text-lg font-normal font-['Inter']">Try: AI compliance, FinTech automation, Cloud migration...</div>
                    </div>
                </div>
                <div className="left-[18px] top-[17.90px] absolute flex items-center justify-center text-stone-500 text-xl font-black leading-5">
                    <Search className="w-5 h-5" />
                </div>
            </div>
            
            <div className="w-60 h-10 left-[479.30px] top-[581.27px] absolute bg-fuchsia-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-fuchsia-800 transition">
                <div className="text-center text-white text-base font-semibold font-['Inter']">Load More Research</div>
            </div>
        </div>
      </section>

      {/* Most Downloaded This Month */}
      <section className="w-full flex justify-center bg-[#fcf5fd] py-20 relative">
        <div className="w-[1200px] h-[1419.28px] relative">
            <div className="w-[566.81px] h-16 left-[316.69px] top-0 absolute text-center justify-center text-sky-900 text-4xl font-bold font-['Inter'] leading-[64px]">Most Downloaded This Month</div>
            <div className="w-96 h-5 left-[396.08px] top-[84px] absolute text-center justify-center text-stone-500 text-base font-normal font-['Inter'] leading-7">Join thousands of leaders accessing our top insights</div>
            
            <div className="w-[900px] h-[1263.14px] left-[150px] top-[156.14px] absolute">
                {/* Most Downloaded Item 1 */}
                <div className="w-[900px] h-60 left-0 top-0 absolute bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 hover:shadow-lg transition">
                    <div className="w-20 h-16 left-[34px] top-[83.91px] absolute">
                        <div className="w-9 h-8 left-[21px] top-0 absolute flex items-center justify-center">
                            <Trophy className="w-8 h-8 text-yellow-400 fill-current" />
                        </div>
                        <div className="w-5 h-8 left-[29.33px] top-[40px] absolute justify-center text-yellow-400 text-lg font-bold font-['Inter'] leading-8">#1</div>
                    </div>
                    <div className="w-24 h-32 left-[146px] top-[34px] absolute bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]"></div>
                    <div className="left-[270px] top-[33px] absolute justify-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Enterprise AI Strategy Framework</div>
                    <div className="left-[270px] top-[74.26px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Complete guide to implementing AI across enterprise<br/>operations</div>
                    
                    <div className="left-[270px] top-[145.76px] absolute flex items-center justify-center text-green-600">
                        <Download className="w-4 h-4" />
                    </div>
                    <div className="left-[288.39px] top-[141.45px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">12,847 downloads</div>
                    
                    <div className="left-[421.22px] top-[145.76px] absolute flex items-center justify-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div className="left-[441.42px] top-[141.45px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">94% useful</div>
                    
                    <div className="left-[270px] top-[184.81px] absolute flex items-center justify-center text-fuchsia-700">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 11c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm-6 13h12v-1c0-2.206-1.794-4-4-4H10c-2.206 0-4 1.794-4 4v1z"/></svg>
                    </div>
                    <div className="left-[292px] top-[180.50px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Cited by 47+ boardrooms</div>
                    
                    <div className="w-44 h-9 left-[691.63px] top-[79.76px] absolute bg-fuchsia-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-fuchsia-800 transition">
                        <div className="text-center text-white text-sm font-semibold font-['Inter']">Download Now</div>
                    </div>
                    <div className="w-44 h-9 left-[691.63px] top-[122.76px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex items-center justify-center cursor-pointer hover:bg-fuchsia-50 transition">
                        <div className="text-center text-fuchsia-700 text-sm font-normal font-['Inter']">Preview Key Findings</div>
                    </div>
                </div>

                {/* Most Downloaded Item 2 */}
                <div className="w-[900px] h-60 left-0 top-[262.59px] absolute bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 hover:shadow-lg transition">
                    <div className="w-20 h-16 left-[34px] top-[83.90px] absolute">
                        <div className="size-8 left-[23px] top-0 absolute flex items-center justify-center">
                            <Award className="w-8 h-8 text-stone-400 fill-stone-100" />
                        </div>
                        <div className="w-5 h-8 left-[29.33px] top-[40px] absolute justify-center text-stone-300 text-base font-bold font-['Inter'] leading-8">#2</div>
                    </div>
                    <div className="w-24 h-32 left-[146px] top-[34px] absolute bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]"></div>
                    <div className="left-[270px] top-[33px] absolute justify-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Zero Trust Security Implementation</div>
                    <div className="left-[270px] top-[74.26px] absolute justify-center text-stone-500 text-base font-normal font-['Inter'] leading-6">Comprehensive roadmap for modern security<br/>architecture</div>
                    
                    <div className="left-[270px] top-[145.76px] absolute flex items-center justify-center text-green-600">
                        <Download className="w-4 h-4" />
                    </div>
                    <div className="left-[288.39px] top-[141.45px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">9,234 downloads</div>
                    
                    <div className="left-[413.22px] top-[145.76px] absolute flex items-center justify-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div className="left-[433.42px] top-[141.45px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">91% useful</div>
                    
                    <div className="left-[270px] top-[184.81px] absolute flex items-center justify-center text-fuchsia-700">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 11c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm-6 13h12v-1c0-2.206-1.794-4-4-4H10c-2.206 0-4 1.794-4 4v1z"/></svg>
                    </div>
                    <div className="left-[292px] top-[180.50px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Cited by 32+ boardrooms</div>
                    
                    <div className="w-44 h-9 left-[691.63px] top-[79.76px] absolute bg-fuchsia-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-fuchsia-800 transition">
                        <div className="text-center text-white text-sm font-semibold font-['Inter']">Download Now</div>
                    </div>
                    <div className="w-44 h-9 left-[691.63px] top-[122.76px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex items-center justify-center cursor-pointer hover:bg-fuchsia-50 transition">
                        <div className="text-center text-fuchsia-700 text-sm font-normal font-['Inter']">Preview Key Findings</div>
                    </div>
                </div>

                {/* Most Downloaded Item 3 */}
                <div className="w-[900px] h-60 left-0 top-[525.09px] absolute bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 hover:shadow-lg transition">
                    <div className="w-20 h-16 left-[34px] top-[83.91px] absolute">
                        <div className="w-6 h-8 left-[27px] top-0 absolute flex items-center justify-center">
                            <Award className="w-8 h-8 text-amber-600 fill-amber-100" />
                        </div>
                        <div className="w-5 h-8 left-[29.33px] top-[40px] absolute justify-center text-amber-600 text-base font-bold font-['Inter'] leading-8">#3</div>
                    </div>
                    <div className="w-24 h-32 left-[146px] top-[34px] absolute bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]"></div>
                    <div className="left-[270px] top-[33px] absolute justify-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Multi-Cloud Strategy Playbook</div>
                    <div className="left-[270px] top-[74.27px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Best practices for managing complex cloud<br/>environments</div>
                    
                    <div className="left-[270px] top-[145.77px] absolute flex items-center justify-center text-green-600">
                        <Download className="w-4 h-4" />
                    </div>
                    <div className="left-[288.39px] top-[141.46px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">7,891 downloads</div>
                    
                    <div className="left-[413.22px] top-[145.77px] absolute flex items-center justify-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div className="left-[433.42px] top-[141.46px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">89% useful</div>
                    
                    <div className="left-[270px] top-[184.82px] absolute flex items-center justify-center text-fuchsia-700">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 11c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm-6 13h12v-1c0-2.206-1.794-4-4-4H10c-2.206 0-4 1.794-4 4v1z"/></svg>
                    </div>
                    <div className="left-[292px] top-[180.50px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Cited by 28+ boardrooms</div>
                    
                    <div className="w-44 h-9 left-[691.63px] top-[79.77px] absolute bg-fuchsia-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-fuchsia-800 transition">
                        <div className="text-center text-white text-sm font-semibold font-['Inter']">Download Now</div>
                    </div>
                    <div className="w-44 h-9 left-[691.63px] top-[122.77px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex items-center justify-center cursor-pointer hover:bg-fuchsia-50 transition">
                        <div className="text-center text-fuchsia-700 text-sm font-normal font-['Inter']">Preview Key Findings</div>
                    </div>
                </div>

                {/* Most Downloaded Item 4 */}
                <div className="w-[900px] h-60 left-0 top-[787.64px] absolute bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 hover:shadow-lg transition">
                    <div className="w-5 h-8 left-[63.33px] top-[103.91px] absolute justify-center text-stone-500 text-base font-bold font-['Inter'] leading-8">#4</div>
                    <div className="w-24 h-32 left-[146px] top-[34px] absolute bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]"></div>
                    <div className="left-[270px] top-[33px] absolute justify-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Digital Transformation Metrics</div>
                    <div className="left-[270px] top-[74.27px] absolute justify-center text-stone-500 text-base font-normal font-['Inter'] leading-6">KPIs and benchmarks for measuring transformation<br/>success</div>
                    
                    <div className="left-[270px] top-[145.77px] absolute flex items-center justify-center text-green-600">
                        <Download className="w-4 h-4" />
                    </div>
                    <div className="left-[288.39px] top-[141.45px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">6,542 downloads</div>
                    
                    <div className="left-[413.22px] top-[145.77px] absolute flex items-center justify-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div className="left-[433.42px] top-[141.45px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">87% useful</div>
                    
                    <div className="left-[270px] top-[184.81px] absolute flex items-center justify-center text-fuchsia-700">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 11c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm-6 13h12v-1c0-2.206-1.794-4-4-4H10c-2.206 0-4 1.794-4 4v1z"/></svg>
                    </div>
                    <div className="left-[292px] top-[180.50px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Cited by 19+ boardrooms</div>
                    
                    <div className="w-44 h-9 left-[691.63px] top-[79.77px] absolute bg-fuchsia-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-fuchsia-800 transition">
                        <div className="text-center text-white text-sm font-semibold font-['Inter']">Download Now</div>
                    </div>
                    <div className="w-44 h-9 left-[691.63px] top-[122.77px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex items-center justify-center cursor-pointer hover:bg-fuchsia-50 transition">
                        <div className="text-center text-fuchsia-700 text-sm font-normal font-['Inter']">Preview Key Findings</div>
                    </div>
                </div>

                {/* Most Downloaded Item 5 */}
                <div className="w-[900px] h-52 left-0 top-[1050.19px] absolute bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 hover:shadow-lg transition">
                    <div className="w-5 h-8 left-[63.33px] top-[91.11px] absolute justify-center text-stone-500 text-base font-bold font-['Inter'] leading-8">#5</div>
                    <div className="w-24 h-32 left-[146px] top-[34px] absolute bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)]"></div>
                    <div className="left-[270px] top-[33px] absolute justify-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Enterprise Data Governance</div>
                    <div className="left-[270px] top-[74.26px] absolute justify-center text-stone-500 text-base font-normal font-['Inter'] leading-6">Framework for managing data quality and compliance</div>
                    
                    <div className="left-[270px] top-[120.17px] absolute flex items-center justify-center text-green-600">
                        <Download className="w-4 h-4" />
                    </div>
                    <div className="left-[288.39px] top-[115.86px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">5,987 downloads</div>
                    
                    <div className="left-[413.22px] top-[120.17px] absolute flex items-center justify-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div className="left-[433.42px] top-[115.86px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">85% useful</div>
                    
                    <div className="left-[270px] top-[159.22px] absolute flex items-center justify-center text-fuchsia-700">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 11c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm-6 13h12v-1c0-2.206-1.794-4-4-4H10c-2.206 0-4 1.794-4 4v1z"/></svg>
                    </div>
                    <div className="left-[292px] top-[154.90px] absolute justify-center text-stone-500 text-sm font-normal font-['Inter'] leading-6">Cited by 15+ boardrooms</div>
                    
                    <div className="w-44 h-9 left-[691.63px] top-[66.97px] absolute bg-fuchsia-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-fuchsia-800 transition">
                        <div className="text-center text-white text-sm font-semibold font-['Inter']">Download Now</div>
                    </div>
                    <div className="w-44 h-9 left-[691.63px] top-[109.97px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex items-center justify-center cursor-pointer hover:bg-fuchsia-50 transition">
                        <div className="text-center text-fuchsia-700 text-sm font-normal font-['Inter']">Preview Key Findings</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Executive Service Section */}
      <section className="w-full flex justify-center bg-white relative">
        <div className="w-[1440px] h-[1177.02px] relative bg-white overflow-hidden">
            <div className="w-[800px] h-[1017.02px] left-[320px] top-[80px] absolute">
                <div className="w-48 h-10 left-[302.95px] top-0 absolute bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-[20px]">
                    <div className="w-5 h-4 left-[16px] top-[12.80px] absolute flex items-center justify-center text-yellow-400">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
                    </div>
                    <div className="w-36 h-4 left-[42px] top-[12px] absolute text-center justify-center text-white text-base font-bold font-['Inter'] leading-6">Executive Service</div>
                </div>
                <div className="left-[156.06px] top-[107.45px] absolute text-center justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-[64px]">Boardroom-ready insights, tailored to you</div>
                <div className="left-[54.36px] top-[157.45px] absolute text-center justify-center text-stone-500 text-base font-normal font-['Inter'] leading-7">Exclusive research and analysis reserved for senior leadership teams & enterprise clients</div>
                
                <div className="w-[800px] h-[795.28px] left-0 top-[221.73px] absolute bg-white rounded-2xl shadow-[0px_12px_40px_0px_rgba(144,80,159,0.20)]">
                    <div className="w-[704px] h-[699.28px] left-[48px] top-[48px] absolute">
                        <div className="left-0 top-[-1px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-6">Industry Focus</div>
                        <div className="w-80 h-12 left-0 top-[33.60px] absolute bg-zinc-100 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 cursor-pointer">
                            <div className="w-72 h-5 left-[18px] top-[14px] absolute overflow-hidden">
                                <div className="left-0 top-[1px] absolute justify-center text-black text-sm font-normal font-['Inter'] leading-4">Select Your Industry</div>
                            </div>
                        </div>
                        
                        <div className="left-[364px] top-[-1px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-6">Geographic Region</div>
                        <div className="w-80 h-12 left-[364px] top-[33.60px] absolute bg-zinc-100 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 cursor-pointer">
                            <div className="w-72 h-5 left-[18px] top-[14px] absolute overflow-hidden">
                                <div className="left-0 top-[1px] absolute justify-center text-black text-base font-normal font-['Inter'] leading-4">Select Primary Region</div>
                            </div>
                        </div>
                        
                        <div className="left-0 top-[103.60px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-6">Primary Business Challenge</div>
                        <div className="w-[704px] h-24 left-0 top-[138.19px] absolute bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 overflow-hidden">
                            <div className="left-[14px] top-[8px] absolute justify-center text-neutral-400 text-sm font-normal font-['Inter'] leading-6">Describe your key strategic challenge, technology initiative, or research question. Our analysts <br/>will tailor the report to address your specific needs.</div>
                        </div>
                        
                        <div className="left-0 top-[261.19px] absolute justify-center text-sky-900 text-base font-bold font-['Inter'] leading-6">Company Size</div>
                        <div className="w-[704px] h-12 left-0 top-[295.79px] absolute bg-zinc-100 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-200 cursor-pointer">
                            <div className="w-[656px] h-5 left-[18px] top-[14px] absolute overflow-hidden">
                                <div className="left-0 top-[1px] absolute justify-center text-black text-base font-normal font-['Inter'] leading-4">Select Company Size</div>
                            </div>
                        </div>
                        
                        <div className="w-[704px] h-60 left-0 top-[366.79px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-fuchsia-700">
                            <div className="left-[34px] top-[34px] absolute justify-center text-sky-900 text-lg font-bold font-['Inter'] leading-8">What's Included:</div>
                            
                            <div className="w-4 h-4 left-[42px] top-[91.90px] absolute flex items-center justify-center text-fuchsia-700">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                            </div>
                            <div className="left-[74px] top-[87.71px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">Custom 25-50 page research report</div>
                            
                            <div className="w-4 h-4 left-[380px] top-[91.90px] absolute flex items-center justify-center text-fuchsia-700">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                            </div>
                            <div className="left-[400px] top-[87.71px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">60-minute analyst briefing call</div>
                            
                            <div className="w-5 h-5 left-[42px] top-[148px] absolute flex items-center justify-center text-fuchsia-700">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/></svg>
                            </div>
                            <div className="left-[74px] top-[145.31px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">Industry benchmarks & competitive<br/>analysis</div>
                            
                            <div className="w-5 h-5 left-[375px] top-[148px] absolute flex items-center justify-center text-fuchsia-700">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                            </div>
                            <div className="left-[400px] top-[145.31px] absolute justify-center text-zinc-800 text-sm font-normal font-['Inter'] leading-6">Executive summary for board<br/>presentation</div>
                        </div>
                        
                        <div className="w-[704px] h-14 left-0 top-[646.29px] absolute bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-lg flex items-center justify-center cursor-pointer hover:shadow-lg transition">
                            <div className="text-center text-white text-lg font-semibold font-['Inter']">Schedule Analyst Briefing</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-1 left-0 top-0 absolute bg-gradient-to-r from-fuchsia-700 to-sky-900"></div>
        </div>
      </section>

      {/* Continue Your Journey Section */}
      <section className="w-full flex justify-center bg-white relative pb-20">
        <div className="w-[1440px] h-64 relative bg-white border-t border-neutral-200">
            <div className="w-80 h-9 left-[544.58px] top-[30.43px] absolute text-center justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-[51.20px]">Continue Your Journey</div>
            
            {/* Card 1 */}
            <div className="w-96 h-48 left-[140px] top-[84.18px] absolute bg-white rounded-xl hover:shadow-lg transition cursor-pointer group">
                <div className="w-20 h-20 left-[32px] top-[32px] absolute bg-gradient-to-br from-fuchsia-700 to-sky-900 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white"><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/></svg>
                </div>
                <div className="left-[136px] top-[37px] absolute text-sky-900 text-xl font-bold font-['Inter'] leading-8">Case Studies</div>
                <div className="left-[136px] top-[77.27px] absolute text-stone-500 text-base font-normal font-['Inter'] leading-6">See how insights become<br/>impact</div>
                <div className="w-44 h-3.5 left-[136px] top-[140.46px] absolute flex items-center">
                    <div className="text-fuchsia-700 text-sm font-semibold font-['Inter'] group-hover:underline">Explore Success Stories</div>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1 text-fuchsia-700"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                </div>
            </div>
            
            {/* Card 2 */}
            <div className="w-96 h-48 left-[537.33px] top-[84.18px] absolute bg-white rounded-xl hover:shadow-lg transition cursor-pointer group">
                <div className="w-20 h-20 left-[32px] top-[32px] absolute bg-gradient-to-br from-fuchsia-700 to-sky-900 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                </div>
                <div className="left-[136px] top-[37px] absolute text-sky-900 text-xl font-bold font-['Inter'] leading-8">Webinars</div>
                <div className="left-[136px] top-[77.27px] absolute text-stone-500 text-sm font-normal font-['Inter'] leading-6">Watch thought leaders<br/>discuss these findings live</div>
                <div className="w-36 h-3.5 left-[136px] top-[140.46px] absolute flex items-center">
                    <div className="text-fuchsia-700 text-sm font-semibold font-['Inter'] group-hover:underline">Join Live Sessions</div>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1 text-fuchsia-700"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                </div>
            </div>
            
            {/* Card 3 */}
            <div className="w-96 h-48 left-[934.66px] top-[84.18px] absolute bg-white rounded-xl hover:shadow-lg transition cursor-pointer group">
                <div className="w-20 h-20 left-[32px] top-[32px] absolute bg-gradient-to-br from-fuchsia-700 to-sky-900 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
                </div>
                <div className="left-[136px] top-[37px] absolute text-sky-900 text-xl font-bold font-['Inter'] leading-8">Technical Docs</div>
                <div className="left-[136px] top-[77.27px] absolute text-stone-500 text-base font-normal font-['Inter'] leading-6">Translate research into<br/>implementation</div>
                <div className="w-40 h-3.5 left-[136px] top-[140.46px] absolute flex items-center">
                    <div className="text-fuchsia-700 text-sm font-semibold font-['Inter'] group-hover:underline">View Documentation</div>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1 text-fuchsia-700"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                </div>
            </div>
        </div>
      </section>

      {/* Ready to Transform Your Business */}
      <section className="w-full flex justify-center bg-zinc-100 relative">
        <div className="w-[1440px] h-[1094.34px] relative bg-zinc-100">
            <div className="w-[461.06px] h-28 left-[108px] top-[219.78px] absolute justify-center text-zinc-800 text-2xl font-bold font-['Inter'] leading-9">Ready to Transform<br/>Your Business?</div>
            <div className="w-[552.34px] h-20 left-[108px] top-[326.57px] absolute justify-center text-neutral-600 text-lg font-normal font-['Inter'] leading-7">Connect with our global team of experts to discuss your digital<br/>transformation journey and discover how we can accelerate your<br/>success.</div>
            
            <div className="size-14 left-[108px] top-[457.96px] absolute bg-sky-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="w-20 h-7 left-[186px] top-[457.96px] absolute justify-center text-zinc-800 text-lg font-semibold font-['Inter'] leading-7">Email Us</div>
            <div className="w-28 h-5 left-[186px] top-[492.76px] absolute justify-center text-zinc-400 text-base font-normal font-['Inter'] leading-6">hello@zws.com</div>
            <div className="w-40 h-4 left-[186px] top-[522.36px] absolute justify-center text-zinc-500 text-sm font-normal font-['Inter'] leading-6">Response within 4 hours</div>
            
            <div className="size-14 left-[108px] top-[574.75px] absolute bg-sky-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="w-16 h-7 left-[186px] top-[574.75px] absolute justify-center text-zinc-800 text-lg font-semibold font-['Inter'] leading-7">Call Us</div>
            <div className="w-36 h-5 left-[186px] top-[609.54px] absolute justify-center text-zinc-400 text-base font-normal font-['Inter'] leading-6">+1 (555) 123-4567</div>
            <div className="w-36 h-4 left-[186px] top-[639.14px] absolute justify-center text-zinc-500 text-sm font-normal font-['Inter'] leading-6">24/7 Support Available</div>
            
            <div className="size-14 left-[108px] top-[691.53px] absolute bg-sky-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="w-20 h-7 left-[186px] top-[691.53px] absolute justify-center text-zinc-800 text-lg font-semibold font-['Inter'] leading-7">Live Chat</div>
            <div className="w-28 h-5 left-[186px] top-[726.32px] absolute justify-center text-zinc-400 text-base font-normal font-['Inter'] leading-6">Instant Support</div>
            <div className="w-20 h-4 left-[186px] top-[755.92px] absolute justify-center text-zinc-500 text-sm font-normal font-['Inter'] leading-6">Online now</div>
            
            <div className="w-[572px] h-[854.34px] left-[760px] top-[120px] absolute bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-400 shadow-xl">
                <div className="w-[490px] h-[772.34px] left-[41px] top-[41px] absolute">
                    <div className="w-16 h-4 left-0 top-[2px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Full Name</div>
                    <input className="w-[490px] h-12 left-0 top-[30.39px] absolute bg-neutral-100 rounded-lg border border-stone-300 px-4 focus:outline-none focus:ring-2 focus:ring-sky-900" />
                    
                    <div className="w-24 h-4 left-0 top-[108.39px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Business Email</div>
                    <input className="w-[490px] h-12 left-0 top-[136.78px] absolute bg-neutral-100 rounded-lg border border-stone-300 px-4 focus:outline-none focus:ring-2 focus:ring-sky-900" />
                    
                    <div className="w-16 h-4 left-0 top-[214.78px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Company</div>
                    <input className="w-[490px] h-12 left-0 top-[243.17px] absolute bg-neutral-100 rounded-lg border border-stone-300 px-4 focus:outline-none focus:ring-2 focus:ring-sky-900" />
                    
                    <div className="w-28 h-4 left-0 top-[321.17px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Service Interest</div>
                    <div className="w-[490px] h-14 left-0 top-[349.56px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 cursor-pointer flex items-center px-4">
                        <div className="text-neutral-400 text-base font-normal font-['Inter']">Select a service</div>
                    </div>
                    
                    <div className="w-24 h-4 left-0 top-[428.56px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Budget</div>
                    <div className="w-[490px] h-14 left-0 top-[456.95px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 cursor-pointer flex items-center px-4">
                        <div className="text-neutral-400 text-base font-normal font-['Inter']">Select budget range</div>
                    </div>
                    
                    <div className="w-24 h-4 left-0 top-[535.95px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Details</div>
                    <textarea className="w-[490px] h-28 left-0 top-[564.34px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900" placeholder="Tell us about your project requirements, timeline, and objectives..."></textarea>
                    
                    <button className="w-56 h-14 left-0 top-[716.34px] absolute bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-xl hover:shadow-lg transition flex items-center justify-center">
                        <span className="text-white text-base font-semibold font-['Inter']">Start Your Project</span>
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
