import React from 'react';
import Link from 'next/link';
import {
    Cloud, Shield, BarChart, Smartphone,
    PlayCircle, Download, ShieldCheck, Mail, Phone, MessageSquare, ChevronRight,
    Globe, MessageCircle, Video, Camera, Link as LinkIcon
} from 'lucide-react';

export default function CaseStudyPage() {
    return (
        <main className="w-full min-h-screen bg-slate-100 flex justify-center">
            <div className="w-[1440px] h-[4616px] relative bg-white overflow-hidden shadow-2xl">

                {/* Hero Section */}
                <div className="w-[1440px] h-96 left-0 top-[83px] absolute bg-gradient-to-br from-sky-900 to-fuchsia-700 overflow-hidden">
                    <div className="w-[1440px] h-96 left-0 top-0 absolute overflow-hidden">
                        <div className="w-[1728px] h-[1080px] left-0 top-0 absolute opacity-60">
                            <div className="w-[1728px] h-[1080px] left-0 top-0 absolute overflow-hidden">
                                <div className="size-[1080px] left-0 top-0 absolute bg-white/5 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                    <div className="left-[445.63px] top-[62px] absolute text-center justify-center text-white text-4xl font-bold font-['Inter'] leading-[89.60px]">Real Results. Proven Impact.</div>

                    <div className="left-[369.19px] top-[181px] absolute text-center justify-center text-white text-5xl font-bold font-['Inter'] leading-[67.20px]">30%</div>
                    <div className="left-[254.43px] top-[256.75px] absolute text-center justify-center text-white text-base font-normal font-['Inter'] leading-6">Cut compliance costs (validated by PwC audit)</div>

                    <div className="left-[637.02px] top-[184.38px] absolute text-center justify-center text-white text-4xl font-bold font-['Inter'] leading-[64px]">99.999%</div>
                    <div className="left-[606.59px] top-[255.38px] absolute text-center justify-center text-white text-sm font-normal font-['Inter'] leading-6">Improved uptime (client SLA data)</div>

                    <div className="left-[1001.50px] top-[184.38px] absolute text-center justify-center text-white text-4xl font-bold font-['Inter'] leading-[64px]">15</div>
                    <div className="left-[872.36px] top-[255.38px] absolute text-center justify-center text-white text-sm font-normal font-['Inter'] leading-6">Expanded to new markets (2025 client portfolio)</div>

                    <div className="w-72 h-11 left-[429.91px] top-[329px] absolute bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex items-center justify-center cursor-pointer hover:bg-slate-50 transition">
                        <span className="text-sky-900 text-base font-semibold font-['Inter']">Explore Client Success Stories</span>
                    </div>
                    <div className="w-72 h-11 left-[737.56px] top-[329px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
                        <span className="text-white text-base font-semibold font-['Inter']">Contact Solutions Expert</span>
                    </div>

                    <div className="w-16 h-11 left-[594.98px] top-[158.67px] absolute">
                        <div className="size-16 left-0 top-[-20px] absolute rounded-lg bg-white/10 border border-white/20"></div>
                    </div>
                    <div className="w-14 h-12 left-[689.98px] top-[155.67px] absolute opacity-70">
                        <div className="size-14 left-0 top-[-8px] absolute rounded-lg bg-white/10 border border-white/20"></div>
                    </div>
                    <div className="w-14 h-12 left-[781.98px] top-[155.67px] absolute opacity-70">
                        <div className="size-14 left-0 top-[-8px] absolute rounded-lg bg-white/10 border border-white/20"></div>
                    </div>
                    <div className="left-[509px] top-[142px] absolute opacity-90 text-center justify-center text-white text-lg font-normal font-['Inter'] leading-7">Bank cut onboarding time by 45% with ZWS Cloud</div>
                </div>

                {/* Featured Case Studies */}
                <div className="w-[1440px] h-[627px] left-0 top-[515px] absolute bg-fuchsia-50">
                    <div className="w-[1200px] h-[546.78px] left-[120px] top-[80px] absolute">
                        <div className="left-[472.38px] top-[-45px] absolute text-center justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-[64px]">Featured Case Studies</div>

                        {/* Card 1 */}
                        <div className="size-96 left-[2px] top-[31px] absolute bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] overflow-hidden">
                            <div className="w-96 h-1 left-[2px] top-[2px] absolute bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-tl-2xl rounded-tr-2xl"></div>
                            <div className="size-10 left-[34px] top-[34px] absolute bg-slate-100 rounded flex items-center justify-center"><Cloud className="w-6 h-6 text-fuchsia-700" /></div>
                            <div className="w-20 h-7 left-[256.36px] top-[39.77px] absolute bg-fuchsia-700 rounded-[20px] flex items-center justify-center">
                                <span className="text-white text-xs font-bold font-['Inter'] leading-5">Telecom</span>
                            </div>
                            <div className="left-[34px] top-[97px] absolute justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-10">45% faster deployment</div>
                            <div className="w-72 h-20 left-[34px] top-[152.39px] absolute border-l-4 border-fuchsia-700 pl-4">
                                <div className="text-stone-500 text-lg font-normal font-['Inter'] leading-7">"ZWS helped us scale to 15<br />markets in 6 months"</div>
                                <div className="mt-2 text-sky-900 text-sm font-bold font-['Inter'] leading-5">— CIO, TelecomX</div>
                            </div>
                            <div className="w-44 h-11 left-[34px] top-[258.78px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-sky-900 flex items-center justify-center cursor-pointer hover:bg-sky-50 transition">
                                <span className="text-sky-900 text-base font-semibold font-['Inter']">Read Case Study</span>
                            </div>
                            <div className="w-40 h-8 left-[34px] top-[320.78px] absolute bg-neutral-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <PlayCircle className="w-4 h-4 text-zinc-800" />
                                <span className="ml-2 text-zinc-800 text-sm font-normal font-['Inter']">Watch Testimonial</span>
                            </div>
                            <div className="w-44 h-8 left-[34px] top-[368.78px] absolute bg-neutral-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <Download className="w-4 h-4 text-zinc-800" />
                                <span className="ml-2 text-zinc-800 text-sm font-normal font-['Inter']">Download Summary</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="size-96 left-[417.33px] top-[31px] absolute bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] overflow-hidden">
                            <div className="w-96 h-1 left-[2px] top-[2px] absolute bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-tl-2xl rounded-tr-2xl"></div>
                            <div className="size-10 left-[34px] top-[34px] absolute bg-slate-100 rounded flex items-center justify-center"><Shield className="w-6 h-6 text-fuchsia-700" /></div>
                            <div className="w-24 h-7 left-[241.87px] top-[39.77px] absolute bg-fuchsia-700 rounded-[20px] flex items-center justify-center">
                                <span className="text-white text-xs font-bold font-['Inter'] leading-5">Healthcare</span>
                            </div>
                            <div className="left-[34px] top-[97px] absolute justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-10">60% fraud reduction</div>
                            <div className="w-72 h-20 left-[34px] top-[152.39px] absolute border-l-4 border-fuchsia-700 pl-4">
                                <div className="text-stone-500 text-lg font-normal font-['Inter'] leading-7">"ZWS Compliance AI transformed<br />our operations"</div>
                                <div className="mt-2 text-sky-900 text-sm font-bold font-['Inter'] leading-5">— CFO, HealthPlus</div>
                            </div>
                            <div className="w-44 h-11 left-[34px] top-[258.78px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-sky-900 flex items-center justify-center cursor-pointer hover:bg-sky-50 transition">
                                <span className="text-sky-900 text-base font-semibold font-['Inter']">Read Case Study</span>
                            </div>
                            <div className="w-40 h-8 left-[34px] top-[320.78px] absolute bg-neutral-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <PlayCircle className="w-4 h-4 text-zinc-800" />
                                <span className="ml-2 text-zinc-800 text-sm font-normal font-['Inter']">Watch Testimonial</span>
                            </div>
                            <div className="w-44 h-8 left-[34px] top-[368.78px] absolute bg-neutral-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <Download className="w-4 h-4 text-zinc-800" />
                                <span className="ml-2 text-zinc-800 text-sm font-normal font-['Inter']">Download Summary</span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="size-96 left-[832.66px] top-[31px] absolute bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] overflow-hidden">
                            <div className="w-96 h-1 left-[2px] top-[2px] absolute bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-tl-2xl rounded-tr-2xl"></div>
                            <div className="size-10 left-[34px] top-[34px] absolute bg-slate-100 rounded flex items-center justify-center"><BarChart className="w-6 h-6 text-fuchsia-700" /></div>
                            <div className="w-20 h-7 left-[258.98px] top-[39.77px] absolute bg-fuchsia-700 rounded-[20px] flex items-center justify-center">
                                <span className="text-white text-xs font-bold font-['Inter'] leading-5">Finance</span>
                            </div>
                            <div className="left-[34px] top-[97px] absolute justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-10">99.9% uptime achieved</div>
                            <div className="w-72 h-20 left-[34px] top-[152.39px] absolute border-l-4 border-fuchsia-700 pl-4">
                                <div className="text-stone-500 text-lg font-normal font-['Inter'] leading-7">"Mission-critical reliability delivered<br />consistently"</div>
                                <div className="mt-2 text-sky-900 text-sm font-bold font-['Inter'] leading-5">— CTO, FinanceFirst</div>
                            </div>
                            <div className="w-44 h-11 left-[34px] top-[258.78px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-sky-900 flex items-center justify-center cursor-pointer hover:bg-sky-50 transition">
                                <span className="text-sky-900 text-base font-semibold font-['Inter']">Read Case Study</span>
                            </div>
                            <div className="w-40 h-8 left-[34px] top-[320.78px] absolute bg-neutral-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <PlayCircle className="w-4 h-4 text-zinc-800" />
                                <span className="ml-2 text-zinc-800 text-sm font-normal font-['Inter']">Watch Testimonial</span>
                            </div>
                            <div className="w-44 h-8 left-[34px] top-[368.78px] absolute bg-neutral-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition">
                                <Download className="w-4 h-4 text-zinc-800" />
                                <span className="ml-2 text-zinc-800 text-sm font-normal font-['Inter']">Download Summary</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Success by Solution Area */}
                <div className="w-[1440px] h-[523px] left-0 top-[1142px] absolute bg-sky-50">
                    <div className="w-[1200px] h-96 left-[120px] top-[80px] absolute">
                        <div className="left-[451px] top-[-25px] absolute text-center justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-[64px]">Success by Solution Area</div>

                        <div className="w-72 h-80 left-[-32px] top-[53px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-300 hover:shadow-lg transition">
                            <div className="size-20 left-[109.66px] top-[34px] absolute bg-gradient-to-br from-fuchsia-700 to-sky-900 rounded-[40px] flex items-center justify-center">
                                <Cloud className="w-10 h-10 text-white" />
                            </div>
                            <div className="w-full left-0 top-[143px] absolute text-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Cloud Infrastructure</div>
                            <div className="w-full px-4 left-0 top-[174px] absolute text-center text-stone-500 text-base font-normal font-['Inter'] leading-6">ABC Healthcare reduced claim fraud by 60% with ZWS Compliance AI</div>
                            <div className="w-full left-0 top-[262.46px] absolute flex justify-center items-center cursor-pointer hover:underline text-sky-900">
                                <span className="text-sm font-semibold font-['Inter']">Explore More in Cloud Solutions</span>
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>

                        <div className="w-72 h-80 left-[289px] top-[53px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-300 hover:shadow-lg transition">
                            <div className="size-20 left-[109.65px] top-[34px] absolute bg-gradient-to-br from-fuchsia-700 to-sky-900 rounded-[40px] flex items-center justify-center">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <div className="w-full left-0 top-[143px] absolute text-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Security & Compliance</div>
                            <div className="w-full px-4 left-0 top-[174px] absolute text-center text-stone-500 text-base font-normal font-['Inter'] leading-6">Global Bank enhanced security posture by 80% with ZWS SecureStack</div>
                            <div className="w-full left-0 top-[262.46px] absolute flex justify-center items-center cursor-pointer hover:underline text-sky-900">
                                <span className="text-sm font-semibold font-['Inter']">Explore More in Security</span>
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>

                        <div className="w-72 h-80 left-[610px] top-[53px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-300 hover:shadow-lg transition">
                            <div className="size-20 left-[109.67px] top-[34px] absolute bg-gradient-to-br from-fuchsia-700 to-sky-900 rounded-[40px] flex items-center justify-center">
                                <BarChart className="w-8 h-8 text-white" />
                            </div>
                            <div className="w-full left-0 top-[143px] absolute text-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Analytics & AI</div>
                            <div className="w-full px-4 left-0 top-[174px] absolute text-center text-stone-500 text-base font-normal font-['Inter'] leading-6">RetailCorp increased conversion rates by 35% with ZWS Analytics</div>
                            <div className="w-full left-0 top-[262.46px] absolute flex justify-center items-center cursor-pointer hover:underline text-sky-900">
                                <span className="text-sm font-semibold font-['Inter']">Explore More in Analytics</span>
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>

                        <div className="w-72 h-80 left-[931px] top-[53px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-300 hover:shadow-lg transition">
                            <div className="size-20 left-[109.66px] top-[34px] absolute bg-gradient-to-br from-fuchsia-700 to-sky-900 rounded-[40px] flex items-center justify-center">
                                <Smartphone className="w-8 h-8 text-white" />
                            </div>
                            <div className="w-full left-0 top-[143px] absolute text-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Digital Transformation</div>
                            <div className="w-full px-4 left-0 top-[174px] absolute text-center text-stone-500 text-base font-normal font-['Inter'] leading-6">ManufacturePlus digitized 95% of processes with ZWS Platform</div>
                            <div className="w-full left-0 top-[262.45px] absolute flex justify-center items-center cursor-pointer hover:underline text-sky-900">
                                <span className="text-sm font-semibold font-['Inter']">Explore More in Digital</span>
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ready to Join Our Success Stories? */}
                <div className="w-[1440px] h-96 left-0 top-[1665px] absolute bg-gradient-to-r from-sky-900 to-fuchsia-700">
                    <div className="w-full top-[80px] absolute text-center text-white text-2xl font-bold font-['Inter'] leading-[64px]">Ready to Join Our Success Stories?</div>
                    <div className="w-full top-[129px] absolute opacity-90 text-center text-white text-xl font-normal font-['Inter'] leading-8">Get a tailored roadmap for your industry, built on proven results.</div>
                    <div className="w-96 h-14 left-[320.39px] top-[193px] absolute bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(17,71,105,0.10)] flex items-center justify-center cursor-pointer hover:bg-slate-50 transition">
                        <span className="text-sky-900 text-lg font-semibold font-['Inter']">Talk to a ZWS Success Architect</span>
                    </div>
                    <div className="w-96 h-14 left-[709.23px] top-[193px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
                        <span className="text-white text-lg font-semibold font-['Inter']">Request a Custom Benchmark Report</span>
                    </div>
                </div>

                {/* Ready to Transform Your Business Form */}
                <div className="w-[1440px] h-[1094.34px] left-0 top-[2024.72px] absolute bg-zinc-100">
                    <div className="w-[461.06px] h-28 left-[108px] top-[219.78px] absolute justify-center text-zinc-800 text-2xl font-bold font-['Inter'] leading-9">Ready to Transform<br />Your Business?</div>
                    <div className="w-[552.34px] h-20 left-[108px] top-[326.57px] absolute justify-center text-neutral-600 text-lg font-normal font-['Inter'] leading-7">Connect with our global team of experts to discuss your digital<br />transformation journey and discover how we can accelerate your<br />success.</div>

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
                            <div className="w-[490px] h-14 left-0 top-[349.56px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 flex items-center px-4 cursor-pointer">
                                <span className="text-neutral-400 text-base font-normal font-['Inter']">Select a service</span>
                            </div>

                            <div className="w-24 h-4 left-0 top-[428.56px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Budget</div>
                            <div className="w-[490px] h-14 left-0 top-[456.95px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 flex items-center px-4 cursor-pointer">
                                <span className="text-neutral-400 text-base font-normal font-['Inter']">Select budget range</span>
                            </div>

                            <div className="w-24 h-4 left-0 top-[535.95px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Details</div>
                            <textarea className="w-[490px] h-28 left-0 top-[564.34px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-sky-900" placeholder="Tell us about your project requirements, timeline, and objectives..."></textarea>

                            <button className="w-56 h-14 left-0 top-[716.34px] absolute bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-xl hover:shadow-lg transition flex items-center justify-center">
                                <span className="text-white text-base font-semibold font-['Inter']">Start Your Project</span>
                            </button>
                        </div>
                    </div>
                </div>

                Footer Section
                <div className="w-[1440px] h-[819px] left-0 top-[3119.06px] absolute bg-slate-800">
                    <div className="w-[1440px] h-[755px] left-0 top-[64px] absolute">
                        <div className="w-[500px] h-64 left-[108px] top-0 absolute">
                            <img className="w-72 h-24 mb-6 object-contain" src="/images/zoiko-logo.png" alt="Zoiko" />
                            <div className="text-slate-400 text-base font-normal font-['Inter'] leading-7">Zoiko Web Services (ZWS) is the AI-powered global transformation<br />engine — delivering scalable web, cloud, compliance, and creative<br />solutions across governments, enterprises, and startups in 20+<br />countries worldwide.</div>
                        </div>

                        <div className="w-[1224px] h-96 left-[108px] top-[159.94px] absolute border-b border-slate-700">
                            <div className="left-0 top-0 absolute justify-center text-slate-200 text-lg font-semibold font-['Inter'] leading-7">Solutions</div>
                            <div className="w-64 h-44 left-0 top-[52.79px] absolute space-y-3">
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Web & App Development</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">IT Infrastructure & Cloud</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Branding & Marketing</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Printing & Signage</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Compliance & Regulatory Technology</div>
                            </div>

                            <div className="left-[318px] top-0 absolute justify-center text-slate-200 text-lg font-semibold font-['Inter'] leading-7">Industries</div>
                            <div className="size-64 left-[318px] top-[52.79px] absolute space-y-3">
                                <div className="text-slate-400 text-sm font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Telecommunications</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Financial Services & Fintech</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Healthcare & Life Sciences</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Travel & Mobility</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Media & Entertainment</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">SMEs & Enterprise SaaS</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Government & Public Sector</div>
                            </div>

                            <div className="left-[636px] top-0 absolute justify-center text-slate-200 text-lg font-semibold font-['Inter'] leading-7">Company</div>
                            <div className="w-64 h-72 left-[636px] top-[52.79px] absolute space-y-3">
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">About Us</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Global Presence</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Leadership</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Careers</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">News & Media</div>
                                <div className="text-slate-400 text-sm font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Partners & Affiliations</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Sustainability & ESG</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Investor Relations</div>
                            </div>

                            <div className="left-[954px] top-0 absolute justify-center text-slate-200 text-lg font-semibold font-['Inter'] leading-7">Resources</div>
                            <div className="size-64 left-[954px] top-[52.79px] absolute space-y-3">
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Case Studies & Clients</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Whitepapers & Reports</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Technical Docs & APIs</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Webinars & Events</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Pricing & Packages</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Help & Support</div>
                                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-6 hover:text-white cursor-pointer transition">Trust & Security</div>
                            </div>
                        </div>

                        <div className="left-[1006px] top-[-0.34px] absolute justify-center text-slate-200 text-lg font-semibold font-['Inter'] leading-7">Connect with us on social media</div>
                        <div className="flex gap-4 left-[1006px] top-[38px] absolute">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition"><LinkIcon className="w-5 h-5 text-slate-300" /></div>
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition"><MessageCircle className="w-5 h-5 text-slate-300" /></div>
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition"><Globe className="w-5 h-5 text-slate-300" /></div>
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition"><Video className="w-5 h-5 text-slate-300" /></div>
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition"><Camera className="w-5 h-5 text-slate-300" /></div>
                        </div>

                        <div className="w-[1224px] h-24 left-[108px] top-[598.34px] absolute border-b border-slate-700">
                            <div className="w-full text-center top-[-30px] absolute justify-center text-slate-200 text-lg font-semibold font-['Inter'] leading-7">Certifications & Compliance</div>
                            <div className="flex justify-between w-full top-[16px] absolute">
                                <div className="w-40 h-16 bg-white/5 rounded-lg border border-slate-700 flex items-center justify-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-slate-200" />
                                    <span className="text-slate-200 text-sm font-semibold font-['Inter'] leading-6">ISO 27001</span>
                                </div>
                                <div className="w-40 h-16 bg-white/5 rounded-lg border border-slate-700 flex items-center justify-center">
                                    <span className="text-slate-200 text-sm font-semibold font-['Inter'] leading-6">SOC 2</span>
                                </div>
                                <div className="w-40 h-16 bg-white/5 rounded-lg border border-slate-700 flex items-center justify-center">
                                    <span className="text-slate-200 text-sm font-semibold font-['Inter'] leading-6">PCI DSS</span>
                                </div>
                                <div className="w-40 h-16 bg-white/5 rounded-lg border border-slate-700 flex items-center justify-center">
                                    <span className="text-slate-200 text-sm font-semibold font-['Inter'] leading-6">GDPR</span>
                                </div>
                                <div className="w-40 h-16 bg-white/5 rounded-lg border border-slate-700 flex items-center justify-center">
                                    <span className="text-slate-200 text-sm font-semibold font-['Inter'] leading-6">CCPA/CPRA</span>
                                </div>
                                <div className="w-40 h-16 bg-white/5 rounded-lg border border-slate-700 flex items-center justify-center">
                                    <span className="text-slate-200 text-sm font-semibold font-['Inter'] leading-6">HIPAA</span>
                                </div>
                                <div className="w-40 h-16 bg-white/5 rounded-lg border border-slate-700 flex items-center justify-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-slate-200" />
                                    <span className="text-slate-200 text-sm font-semibold font-['Inter'] leading-6">FedRAMP</span>
                                </div>
                            </div>
                        </div>

                        <div className="left-[108px] top-[707.28px] absolute text-slate-400 text-sm font-normal font-['Inter'] leading-6">© 2025 Zoiko Web Services (ZWS). ZWS is a trading name for Zoiko Tech Inc. All rights reserved.</div>
                        <div className="flex gap-8 right-[108px] top-[704.28px] absolute">
                            <span className="text-slate-400 text-sm font-normal font-['Inter'] cursor-pointer hover:underline transition">Privacy Policy</span>
                            <span className="text-slate-400 text-sm font-normal font-['Inter'] cursor-pointer hover:underline transition">Terms of Service</span>
                            <span className="text-slate-400 text-sm font-normal font-['Inter'] cursor-pointer hover:underline transition">Cookie Policy</span>
                            <span className="text-slate-400 text-sm font-normal font-['Inter'] cursor-pointer hover:underline transition">Accessibility</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
