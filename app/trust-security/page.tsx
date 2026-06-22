import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Cloud, FileText, CheckCircle, Activity, Globe, UserCheck, ShieldCheck, FileCheck, Phone, Mail, MessageSquare } from 'lucide-react';

export default function TrustSecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      <section className="w-full flex justify-center bg-slate-900">
        <div className="w-[1440px] h-[499px] relative bg-linear-42 from-fuchsia-700 to-sky-900 overflow-hidden">
            <div className="w-80 h-28 left-[108px] top-[94px] absolute justify-center text-white text-4xl font-bold font-['Inter'] leading-[51px]">Your Trust<br/>Our Commitment</div>
            <div className="w-[524.56px] h-14 left-[108px] top-[205px] absolute opacity-90 justify-center text-white text-lg font-normal font-['Inter'] leading-8">Enterprise-grade security, global compliance, and complete<br/>transparency — independently audited.</div>
            <div className="w-96 h-12 left-[108px] top-[294px] absolute bg-white rounded-lg">
                <div className="left-[29px] top-[14px] absolute text-center justify-center text-zinc-500 text-base font-semibold font-['Inter']">Access Security & Compliance Resources</div>
            </div>
            <div className="w-72 h-12 left-[108px] top-[364px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-white">
                <div className="left-[30px] top-[16px] absolute text-center justify-center text-white text-base font-semibold font-['Inter']">Explore the ZWS Trust Center</div>
            </div>
            <div className="w-[550px] h-14 left-[753px] top-[222px] absolute bg-white/10 rounded-[50px] backdrop-blur-[5px]">
                <div className="size-3 left-[20px] top-[21.80px] absolute bg-green-400 rounded-full"></div>
                <div className="w-52 h-4 left-[42px] top-[19px] absolute justify-center text-white text-sm font-normal font-['Inter'] leading-6">Operational - 99.999% uptime</div>
            </div>
        </div>
      </section>

      {/* Security Practices Section */}
      <section className="w-full py-20 flex justify-center bg-white">
        <div className="w-[1200px] h-[485.59px] relative bg-emerald-50 rounded-xl">
            <div className="left-[623px] top-[28px] absolute text-center justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-[57.60px]">Security Practices (Defense in Depth)</div>
            <div className="w-48 h-7 left-[630px] top-[97px] absolute justify-center text-sky-900 text-lg font-bold font-['Inter'] leading-7">Multi-layer encryption</div>
            <div className="w-28 h-4 left-[630px] top-[125.80px] absolute justify-center text-slate-500 text-sm font-normal font-['Inter'] leading-6">In transit & at rest</div>
            <div className="w-60 h-7 left-[630px] top-[165.80px] absolute justify-center text-sky-900 text-lg font-bold font-['Inter'] leading-7">Zero-trust access framework</div>
            <div className="w-40 h-4 left-[630px] top-[194.59px] absolute justify-center text-slate-500 text-sm font-normal font-['Inter'] leading-6">Never trust, always verify</div>
            <div className="w-80 h-7 left-[630px] top-[234.59px] absolute justify-center text-sky-900 text-lg font-bold font-['Inter'] leading-7">24/7 Security Operations Center (SOC)</div>
            <div className="w-52 h-4 left-[630px] top-[263.39px] absolute justify-center text-slate-500 text-sm font-normal font-['Inter'] leading-6">Continuous monitoring & response</div>
            <div className="w-72 h-7 left-[630px] top-[303.39px] absolute justify-center text-sky-900 text-lg font-bold font-['Inter'] leading-7">Independent penetration testing</div>
            <div className="w-48 h-4 left-[630px] top-[332.19px] absolute justify-center text-slate-500 text-sm font-normal font-['Inter'] leading-6">Continuous security validation</div>
            <div className="w-72 h-14 left-[145px] top-[98px] absolute bg-emerald-500 rounded-lg">
                <div className="w-32 h-4 left-[70.88px] top-[19px] absolute text-center justify-center text-white text-base font-bold font-['Inter'] leading-6">Application Layer</div>
            </div>
            <div className="w-56 h-14 left-[174px] top-[163px] absolute bg-emerald-500 rounded-lg">
                <div className="w-28 h-4 left-[55.86px] top-[19px] absolute text-center justify-center text-white text-base font-bold font-['Inter'] leading-6">Network Layer</div>
            </div>
            <div className="w-44 h-14 left-[200px] top-[228px] absolute bg-emerald-500 rounded-lg">
                <div className="left-[14.98px] top-[15px] absolute text-center justify-center text-white text-base font-bold font-['Inter'] leading-6">Infrastructur Layer</div>
            </div>
            <div className="w-32 h-14 left-[218px] top-[293px] absolute bg-emerald-500 rounded-lg">
                <div className="left-[9.53px] top-[15px] absolute text-center justify-center text-white text-base font-bold font-['Inter'] leading-6">Physical Layer</div>
            </div>
            <div className="w-72 h-12 left-[630px] top-[390px] absolute rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-900">
                <div className="left-[27px] top-[14px] absolute text-center justify-center text-sky-900 text-base font-semibold font-['Inter']">Download Security Whitepaper</div>
            </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="w-full py-20 flex justify-center bg-sky-50/50">
          <div className="w-[1200px] h-[795.94px] relative">
              <div className="w-[550.28px] h-10 left-[324.95px] top-[8px] absolute text-center justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-[57.60px]">Compliance (Regulatory Proofs)</div>
              <div className="w-[500px] h-72 left-[67px] top-[98px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-slate-200">
                  <div className="w-24 h-8 left-[32px] top-[32px] absolute justify-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Healthcare</div>
                  <div className="w-28 h-4 left-[32px] top-[75px] absolute justify-center text-fuchsia-700 text-sm font-bold font-['Inter'] leading-6">HIPAA • HITECH</div>
                  <div className="w-60 h-16 left-[32px] top-[113.39px] absolute justify-center text-slate-500 text-sm font-normal font-['Inter'] leading-6">Health Insurance Portability and<br/>Accountability Act compliance for<br/>protected health information.</div>
                  <div className="w-56 h-12 left-[32px] top-[206.17px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-sky-900">
                      <div className="left-[29px] top-[16px] absolute text-center justify-center text-sky-900 text-base font-semibold font-['Inter']">Download Certificate</div>
                  </div>
              </div>
              <div className="w-[500px] h-72 left-[632px] top-[98px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-slate-200">
                  <div className="w-44 h-8 left-[32px] top-[32px] absolute justify-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Financial Services</div>
                  <div className="w-24 h-4 left-[32px] top-[75px] absolute justify-center text-fuchsia-700 text-sm font-bold font-['Inter'] leading-6">PCI-DSS • SOX</div>
                  <div className="w-64 h-16 left-[32px] top-[113.39px] absolute justify-center text-slate-500 text-base font-normal font-['Inter'] leading-6">Payment Card Industry Data Security<br/>Standard and Sarbanes-Oxley Act<br/>compliance.</div>
                  <div className="w-56 h-12 left-[32px] top-[206.17px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-sky-900">
                      <div className="left-[29px] top-[16px] absolute text-center justify-center text-sky-900 text-base font-semibold font-['Inter']">Download Certificate</div>
                  </div>
              </div>
              <div className="w-[500px] h-72 left-[632px] top-[418px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-slate-200">
                  <div className="w-44 h-8 left-[32px] top-[32px] absolute justify-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Enterprise/General</div>
                  <div className="w-44 h-4 left-[32px] top-[75px] absolute justify-center text-fuchsia-700 text-sm font-bold font-['Inter'] leading-6">ISO 27001 • SOC 2 Type II</div>
                  <div className="w-64 h-11 left-[32px] top-[113.39px] absolute justify-center text-slate-500 text-sm font-normal font-['Inter'] leading-6">International standards for information<br/>security management systems.</div>
                  <div className="w-56 h-12 left-[32px] top-[180.58px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-sky-900">
                      <div className="left-[29px] top-[16px] absolute text-center justify-center text-sky-900 text-base font-semibold font-['Inter']">Download Certificate</div>
                  </div>
              </div>
              <div className="w-[500px] h-72 left-[67px] top-[418px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-slate-200">
                  <div className="w-32 h-8 left-[32px] top-[32px] absolute justify-center text-sky-900 text-xl font-bold font-['Inter'] leading-8">Public Sector</div>
                  <div className="w-28 h-4 left-[32px] top-[75px] absolute justify-center text-fuchsia-700 text-sm font-bold font-['Inter'] leading-6">FedRAMP • GDPR</div>
                  <div className="w-72 h-16 left-[32px] top-[113.39px] absolute justify-center text-slate-500 text-base font-normal font-['Inter'] leading-6">Federal Risk and Authorization<br/>Management Program and General Data<br/>Protection Regulation.</div>
                  <div className="w-56 h-12 left-[32px] top-[206.17px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-sky-900">
                      <div className="left-[29px] top-[16px] absolute text-center justify-center text-sky-900 text-base font-semibold font-['Inter']">Download Certificate</div>
                  </div>
              </div>
              <div className="w-96 h-12 left-[414px] top-[747.94px] absolute bg-sky-900 rounded-lg">
                  <div className="left-[28px] top-[14px] absolute text-center justify-center text-white text-base font-semibold font-['Inter']">Request Enterprise Compliance Package</div>
              </div>
          </div>
      </section>

      {/* Transparency Section */}
      <section className="w-full flex justify-center bg-white">
        <div className="w-[1440px] h-[633px] relative bg-fuchsia-50 overflow-hidden">
            <div className="w-[600px] h-10 left-[420px] top-[125px] absolute text-center justify-center text-[#9a5b9b] text-xl font-bold font-['Inter'] leading-[57.60px]">Transparency Reports (Operational Integrity)</div>

            {/* Card 1 */}
            <div className="w-64 h-80 left-[160px] top-[175px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-slate-200">
                <div className="w-36 h-7 left-[27px] top-[27px] absolute justify-center text-sky-900 text-[13px] font-bold font-['Inter'] leading-7">Real-time Uptime</div>
                <div className="left-[27px] top-[69.79px] absolute justify-center text-[#9a5b9b] text-[15px] font-semibold font-['Inter'] leading-10">99.999%</div>
                <div className="w-52 h-[5px] left-[27px] top-[119.18px] absolute bg-slate-200 rounded-sm overflow-hidden">
                    <div className="w-52 h-[5px] left-0 top-0 absolute bg-[#4ade80] rounded-sm"></div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="w-64 h-80 left-[448px] top-[175px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-slate-200">
                <div className="w-36 h-7 left-[27px] top-[27px] absolute justify-center text-sky-900 text-[13px] font-bold font-['Inter'] leading-7">SLA Performance</div>
                <div className="left-[27px] top-[69.79px] absolute justify-center text-[#9a5b9b] text-[15px] font-semibold font-['Inter'] leading-7 pt-1">Target: 99.9% |<br/>Actual: 99.999%</div>
                <div className="w-48 h-16 left-[27px] top-[135px] absolute bg-slate-100 rounded-md flex items-center justify-center">
                    <span className="text-slate-400 text-[10px] font-['Inter']">Monthly/Quarterly Chart</span>
                </div>
            </div>

            {/* Card 3 */}
            <div className="w-64 h-80 left-[736px] top-[175px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-slate-200">
                <div className="w-36 h-7 left-[27px] top-[27px] absolute justify-center text-sky-900 text-[13px] font-bold font-['Inter'] leading-7">Incident History</div>
                <div className="left-[27px] top-[69.79px] absolute justify-center text-[#9a5b9b] text-[15px] font-semibold font-['Inter'] leading-7 pt-1">3 incidents (last<br/>24 months)</div>
                <div className="w-[200px] h-6 left-[27px] top-[135px] absolute bg-[#dcfce7] rounded flex items-center px-3">
                    <span className="text-green-800 text-[9px] font-['Inter']">Q2 2024 - Resolved in 2h</span>
                </div>
                <div className="w-[200px] h-6 left-[27px] top-[165px] absolute bg-[#dcfce7] rounded flex items-center px-3">
                    <span className="text-green-800 text-[9px] font-['Inter']">Q4 2023 - Resolved in 1h</span>
                </div>
                <div className="w-[200px] h-6 left-[27px] top-[195px] absolute bg-[#dcfce7] rounded flex items-center px-3">
                    <span className="text-green-800 text-[9px] font-['Inter']">Q1 2023 - Resolved in 30min</span>
                </div>
            </div>

            {/* Card 4 */}
            <div className="w-64 h-80 left-[1024px] top-[175px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-slate-200">
                <div className="w-48 h-7 left-[27px] top-[27px] absolute justify-center text-sky-900 text-[13px] font-bold font-['Inter'] leading-5">Law Enforcement<br/>Requests</div>
                <div className="left-[27px] top-[80px] absolute justify-center text-[#9a5b9b] text-[15px] font-semibold font-['Inter'] leading-7 pt-1">0 requests<br/>disclosed</div>
                <div className="left-[27px] top-[145px] absolute justify-center text-[#2c5378] text-[11px] font-normal font-['Inter'] leading-5">Complete transparency in<br/>government data requests</div>
            </div>

            {/* Button */}
            <div className="w-[220px] h-9 left-[610px] top-[480px] absolute bg-[#9a5b9b] rounded flex items-center justify-center cursor-pointer">
                <span className="text-white text-[11px] font-semibold font-['Inter']">View Full Transparency Archive</span>
            </div>
        </div>
      </section>

      {/* Data Privacy Section */}
      <section className="w-full flex justify-center bg-slate-50">
        <div className="w-[1440px] h-[645.59px] relative bg-slate-50">
            <div className="w-[1200px] h-[485.59px] left-[120px] top-[80px] absolute">
                <div className="w-[500.31px] h-10 left-[349.94px] top-[8px] absolute text-center justify-center text-sky-900 text-2xl font-bold font-['Inter'] leading-[57.60px]">Data Privacy (Global Control)</div>
                <div className="left-[813.33px] top-[98px] absolute justify-center text-sky-900 text-lg font-bold font-['Inter'] leading-7">Regional Residency Guarantee</div>
                <div className="left-[813.33px] top-[125.80px] absolute justify-center text-slate-500 text-sm font-normal font-['Inter'] leading-6">Your data stays where you specify</div>
                <div className="w-52 h-12 left-[813.33px] top-[163.80px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-sky-900 flex items-center justify-center cursor-pointer">
                    <span className="text-center justify-center text-sky-900 text-base font-semibold font-['Inter']">Request Guarantee</span>
                </div>
                <div className="left-[813.33px] top-[278px] absolute justify-center text-sky-900 text-lg font-bold font-['Inter'] leading-7">Bring Your Own Key (BYOK)</div>
                <div className="left-[813.33px] top-[306.89px] absolute justify-center text-slate-500 text-sm font-normal font-['Inter'] leading-6">Complete control over encryption keys</div>
                <div className="w-36 h-12 left-[813.33px] top-[344.89px] absolute rounded-lg outline outline-2 outline-offset-[-2px] outline-sky-900 flex items-center justify-center cursor-pointer">
                    <span className="text-center justify-center text-sky-900 text-base font-semibold font-['Inter']">Learn More</span>
                </div>
                <div className="w-[733px] h-96 left-[20px] top-[98px] absolute bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl overflow-hidden">
                    <div className="w-4 h-9 left-[80px] top-[80px] absolute">
                        <div className="size-3 left-0 top-0 absolute bg-[#9a5b9b] rounded-full"></div>
                        <div className="w-4 h-3.5 left-0 top-[19px] absolute text-center justify-center text-[#2c5378] text-xs font-bold font-['Inter'] leading-5">US</div>
                    </div>
                    <div className="w-4 h-9 left-[180px] top-[60px] absolute">
                        <div className="size-3 left-0 top-0 absolute bg-[#9a5b9b] rounded-full"></div>
                        <div className="w-4 h-3.5 left-0 top-[19px] absolute text-center justify-center text-[#2c5378] text-xs font-bold font-['Inter'] leading-5">EU</div>
                    </div>
                    <div className="w-8 h-9 left-[620.20px] top-[120px] absolute">
                        <div className="size-3 left-0 top-0 absolute bg-[#9a5b9b] rounded-full"></div>
                        <div className="w-8 h-3.5 left-0 top-[19px] absolute text-center justify-center text-[#2c5378] text-xs font-bold font-['Inter'] leading-5">APAC</div>
                    </div>
                    <div className="size-9 left-[200px] top-[150px] absolute">
                        <div className="size-3 left-0 top-0 absolute bg-[#9a5b9b] rounded-full"></div>
                        <div className="w-9 h-3.5 left-0 top-[19px] absolute text-center justify-center text-[#2c5378] text-xs font-bold font-['Inter'] leading-5">Africa</div>
                    </div>
                    <div className="size-9 left-[100px] top-[271.81px] absolute">
                        <div className="size-3 left-0 top-0 absolute bg-[#9a5b9b] rounded-full"></div>
                        <div className="w-9 h-3.5 left-0 top-[19px] absolute text-center justify-center text-[#2c5378] text-xs font-bold font-['Inter'] leading-5">LatAm</div>
                    </div>
                </div>
                <div className="w-80 h-12 left-[813px] top-[437.59px] absolute bg-[#9a5b9b] rounded-lg flex items-center justify-center cursor-pointer">
                    <span className="text-center justify-center text-white text-base font-semibold font-['Inter']">Explore Data Residency Options</span>
                </div>
            </div>
        </div>
      </section>

      {/* Responsible AI Section */}
      <section className="w-full flex justify-center bg-white py-12">
        <div className="w-[1200px] h-[498.34px] relative">
            <div className="w-[655.03px] h-10 left-[272.58px] top-[8px] absolute text-center justify-center text-[#2c5378] text-2xl font-bold font-['Inter'] leading-[57.60px]">Responsible AI (Ethics & Governance)</div>
            <div className="w-96 h-80 left-[20px] top-[97.59px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-slate-200">
                <div className="w-64 h-8 left-[32px] top-[32px] absolute justify-center text-[#2c5378] text-[17px] font-bold font-['Inter'] leading-8">Ethics Board Endorsements</div>
                <div className="w-80 h-11 left-[32px] top-[88px] absolute justify-center text-slate-500 text-[13px] italic font-normal font-['Inter'] leading-6">"ZWS demonstrates exceptional<br/>commitment to ethical AI practices."</div>
                <div className="w-[300px] h-4 left-[32px] top-[148.19px] absolute justify-center text-[#9a5b9b] text-[11px] font-normal font-['Inter'] leading-6">— Dr. Sarah Johnson, AI Ethics Board Chair</div>
            </div>
            <div className="w-96 h-80 left-[420px] top-[97.59px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-slate-200">
                <div className="w-48 h-8 left-[119px] top-[32px] absolute justify-center text-[#2c5378] text-[17px] font-bold font-['Inter'] leading-8">AI Principles</div>
                <div className="w-36 h-10 left-[32px] top-[96.41px] absolute bg-[#4b5585] rounded-lg flex items-center justify-center">
                    <div className="text-white text-xs font-bold font-['Inter'] leading-6">Fairness</div>
                </div>
                <div className="w-36 h-10 left-[187.50px] top-[96.41px] absolute bg-[#4b5585] rounded-lg flex items-center justify-center">
                    <div className="text-white text-xs font-bold font-['Inter'] leading-6">Non-Bias</div>
                </div>
                <div className="w-36 h-10 left-[32px] top-[150px] absolute bg-[#4b5585] rounded-lg flex items-center justify-center">
                    <div className="text-white text-xs font-bold font-['Inter'] leading-6">Transparency</div>
                </div>
                <div className="w-36 h-10 left-[187.50px] top-[150px] absolute bg-[#4b5585] rounded-lg flex items-center justify-center">
                    <div className="text-white text-xs font-bold font-['Inter'] leading-6">Explainability</div>
                </div>
            </div>
            <div className="w-96 h-80 left-[820px] top-[97.59px] absolute bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-slate-200">
                <div className="w-32 h-8 left-[32px] top-[32px] absolute justify-center text-[#2c5378] text-[17px] font-bold font-['Inter'] leading-8">Case Studies</div>
                <div className="w-72 h-4 left-[32px] top-[88px] absolute justify-center text-[#2c5378] text-[13px] font-bold font-['Inter'] leading-6">Ethical AI in Healthcare Compliance</div>
                <div className="w-80 h-10 left-[32px] top-[113.60px] absolute justify-center text-slate-400 text-[11px] font-normal font-['Inter'] leading-5">How we ensure AI decisions meet HIPAA<br/>requirements</div>
                <div className="w-72 h-4 left-[32px] top-[166.38px] absolute justify-center text-[#2c5378] text-[13px] font-bold font-['Inter'] leading-6">Bias Detection in Financial Services</div>
                <div className="w-80 h-10 left-[32px] top-[191.97px] absolute justify-center text-slate-400 text-[11px] font-normal font-['Inter'] leading-5">Preventing discriminatory outcomes in AI-driven<br/>decisions</div>
            </div>
            <div className="w-64 h-10 left-[477px] top-[430.34px] absolute bg-[#9a5b9b] rounded flex items-center justify-center cursor-pointer">
                <div className="text-white text-[13px] font-semibold font-['Inter']">Review Responsible AI Policy</div>
            </div>
        </div>
      </section>

      {/* Ready to Transform Form Section */}
      <section className="w-full flex justify-center bg-zinc-100">
        <div className="w-[1440px] h-[1094.34px] relative bg-zinc-100">
            <div className="w-[461.06px] h-28 left-[108px] top-[219.78px] absolute justify-center text-zinc-800 text-2xl font-bold font-['Inter'] leading-9">Ready to Transform<br/>Your Business?</div>
            <div className="w-[552.34px] h-20 left-[108px] top-[326.57px] absolute justify-center text-neutral-600 text-lg font-normal font-['Inter'] leading-7">Connect with our global team of experts to discuss your digital<br/>transformation journey and discover how we can accelerate your<br/>success.</div>
            
            {/* Icons */}
            <div className="size-14 left-[108px] top-[457.96px] absolute bg-[#2c5378] rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex items-center justify-center">
                <Mail className="text-white w-6 h-6" />
            </div>
            <div className="w-20 h-7 left-[186px] top-[457.96px] absolute justify-center text-zinc-800 text-lg font-semibold font-['Inter'] leading-7">Email Us</div>
            <div className="w-28 h-5 left-[186px] top-[492.76px] absolute justify-center text-zinc-400 text-base font-normal font-['Inter'] leading-6">hello@zws.com</div>
            <div className="w-40 h-4 left-[186px] top-[522.36px] absolute justify-center text-zinc-500 text-sm font-normal font-['Inter'] leading-6">Response within 4 hours</div>
            
            <div className="size-14 left-[108px] top-[574.75px] absolute bg-[#2c5378] rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex items-center justify-center">
                <Phone className="text-white w-6 h-6" />
            </div>
            <div className="w-16 h-7 left-[186px] top-[574.75px] absolute justify-center text-zinc-800 text-lg font-semibold font-['Inter'] leading-7">Call Us</div>
            <div className="w-36 h-5 left-[186px] top-[609.54px] absolute justify-center text-zinc-400 text-base font-normal font-['Inter'] leading-6">+1 (555) 123-4567</div>
            <div className="w-36 h-4 left-[186px] top-[639.14px] absolute justify-center text-zinc-500 text-sm font-normal font-['Inter'] leading-6">24/7 Support Available</div>
            
            <div className="size-14 left-[108px] top-[691.53px] absolute bg-[#2c5378] rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex items-center justify-center">
                <MessageSquare className="text-white w-6 h-6" />
            </div>
            <div className="w-20 h-7 left-[186px] top-[691.53px] absolute justify-center text-zinc-800 text-lg font-semibold font-['Inter'] leading-7">Live Chat</div>
            <div className="w-28 h-5 left-[186px] top-[726.32px] absolute justify-center text-zinc-400 text-base font-normal font-['Inter'] leading-6">Instant Support</div>
            <div className="w-20 h-4 left-[186px] top-[755.92px] absolute justify-center text-zinc-500 text-sm font-normal font-['Inter'] leading-6">Online now</div>
            
            {/* Form Box */}
            <div className="w-[572px] h-[854.34px] left-[760px] top-[120px] absolute bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-400 shadow-sm">
                <div className="w-[490px] h-[772.34px] left-[41px] top-[41px] absolute">
                    <div className="w-16 h-4 left-0 top-[2px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Full Name</div>
                    <div className="w-[490px] h-12 left-0 top-[30.39px] absolute bg-neutral-100 rounded-lg border border-stone-300"></div>
                    <div className="w-24 h-4 left-0 top-[108.39px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Business Email</div>
                    <div className="w-[490px] h-12 left-0 top-[136.78px] absolute bg-neutral-100 rounded-lg border border-stone-300"></div>
                    <div className="w-16 h-4 left-0 top-[214.78px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Company</div>
                    <div className="w-[490px] h-12 left-0 top-[243.17px] absolute bg-neutral-100 rounded-lg border border-stone-300"></div>
                    
                    <div className="w-28 h-4 left-0 top-[321.17px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Service Interest</div>
                    <div className="w-[490px] h-14 left-0 top-[349.56px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300">
                        <div className="w-96 h-5 left-[21px] top-[17px] absolute overflow-hidden">
                            <div className="left-0 top-[1px] absolute justify-center text-neutral-400 text-base font-normal font-['Inter'] leading-4">Select a service</div>
                        </div>
                    </div>
                    
                    <div className="w-24 h-4 left-0 top-[428.56px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Budget</div>
                    <div className="w-[490px] h-14 left-0 top-[456.95px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300">
                        <div className="w-96 h-5 left-[21px] top-[17px] absolute overflow-hidden">
                            <div className="left-0 top-[1px] absolute justify-center text-neutral-400 text-base font-normal font-['Inter'] leading-4">Select budget range</div>
                        </div>
                    </div>
                    
                    <div className="w-24 h-4 left-0 top-[535.95px] absolute justify-center text-zinc-800 text-sm font-semibold font-['Inter'] leading-6">Project Details</div>
                    <div className="w-[490px] h-28 left-0 top-[564.34px] absolute bg-neutral-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-300 overflow-hidden">
                        <div className="left-[17px] top-[16px] absolute justify-center text-neutral-400 text-base font-normal font-['Inter']">Tell us about your project requirements, <br/>timeline, and objectives...</div>
                    </div>
                    
                    <div className="w-56 h-14 left-0 top-[716.34px] absolute bg-gradient-to-r from-fuchsia-700 to-[#2c5378] rounded-xl overflow-hidden flex justify-center items-center cursor-pointer">
                        <div className="text-center justify-center text-white text-base font-semibold font-['Inter']">Start Your Project</div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
