import React from 'react';

const ProfileCard = ({ name, title, desc, img }: any) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col h-full w-full max-w-[384px] mx-auto">
      {img ? (
        <img src={img} alt={name} className="w-full h-72 object-cover object-center" />
      ) : (
        <div className="w-full h-72 bg-zinc-400"></div>
      )}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-sky-900 text-xl font-semibold font-['Inter'] leading-8 tracking-wide uppercase">{name}</h3>
        <p className="text-fuchsia-700 text-base font-semibold font-['Inter'] leading-6 mb-3">{title}</p>
        <p className="text-stone-500 text-sm font-normal font-['Inter'] leading-5 mb-8 flex-1">{desc}</p>
        <div className="text-fuchsia-700 text-sm font-semibold font-['Inter'] hover:underline cursor-pointer">
          View Full Bio →
        </div>
      </div>
    </div>
  );
}

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center mb-12 mt-16 first:mt-0">
    <h2 className="text-sky-900 text-[28px] md:text-3xl font-semibold font-['Inter'] mb-4">{title}</h2>
    <div className="w-20 h-[3px] bg-gradient-to-r from-fuchsia-700 to-sky-900"></div>
  </div>
);

const Constellation = () => (
  <div className="absolute inset-0 pointer-events-none opacity-30 flex justify-center items-center overflow-hidden">
    <div className="relative w-[1440px] h-72 scale-150 md:scale-100 opacity-50">
      <div className="w-1.5 h-1 left-[361px] top-[69px] absolute bg-fuchsia-700 rounded-full"></div>
      <div className="w-1.5 h-1 left-[513px] top-[55px] absolute bg-fuchsia-700 rounded-full"></div>
      <div className="w-1.5 h-1 left-[666px] top-[83px] absolute bg-fuchsia-700 rounded-full"></div>
      <div className="w-1.5 h-1 left-[818px] top-[62px] absolute bg-fuchsia-700 rounded-full"></div>
      <div className="w-1.5 h-1 left-[971px] top-[76px] absolute bg-fuchsia-700 rounded-full"></div>
      <div className="w-1.5 h-1 left-[411px] top-[140px] absolute bg-fuchsia-700 rounded-full"></div>
      <div className="w-1.5 h-1 left-[615px] top-[126px] absolute bg-fuchsia-700 rounded-full"></div>
      <div className="w-1.5 h-1 left-[869px] top-[155px] absolute bg-fuchsia-700 rounded-full"></div>
      <div className="w-1.5 h-1 left-[1021px] top-[133px] absolute bg-fuchsia-700 rounded-full"></div>

      {/* Connector lines matching the snippet's dotted patterns */}
      <svg className="absolute inset-0 w-full h-full" style={{ stroke: '#a21caf', strokeWidth: 0.5, strokeDasharray: '4 4', fill: 'none', opacity: 0.5 }}>
        <line x1="363" y1="71" x2="515" y2="57" />
        <line x1="515" y1="57" x2="668" y2="85" />
        <line x1="668" y1="85" x2="820" y2="64" />
        <line x1="820" y1="64" x2="973" y2="78" />
        <line x1="363" y1="71" x2="413" y2="142" />
        <line x1="413" y1="142" x2="617" y2="128" />
        <line x1="617" y1="128" x2="668" y2="85" />
        <line x1="617" y1="128" x2="871" y2="157" />
        <line x1="871" y1="157" x2="1023" y2="135" />
      </svg>
    </div>
  </div>
);

export default function LeadershipPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col font-['Inter']">
      {/* 1. Hero */}
      <section className="relative bg-[#172533] pt-16 pb-24 px-6 overflow-hidden flex flex-col items-center text-center">
        <Constellation />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-white text-[32px] md:text-[44px] font-bold leading-tight mb-8">
            Global Leadership. Proven Integrity.<br className="hidden md:block" />Transformative Vision.
          </h1>
          <p className="text-neutral-200 text-xl font-normal font-['Inter'] leading-9 text-center justify-center max-w-4xl">
            Zoiko Web Services is guided by executives who combine decades of Tier-1 experience in technology,<br className="hidden md:block" />fintech, and telecoms with a commitment to governance, sustainability, and customer impact.
          </p>
        </div>
      </section>

      {/* 2. Profiles Section */}
      <section className="py-20 px-6 max-w-[1224px] mx-auto w-full flex flex-col">

        <SectionHeader title="Founder & Executive Chairman" />
        <div className="flex justify-center w-full mb-8">
          <ProfileCard
            name="LENNOX MCLEOD"
            title="Founder & Executive Chairman"
            desc="Visionary in Global Telecoms, Fintech, and Governance"
            img="/images/leader/one.jpg"
          />
        </div>

        <SectionHeader title="Board of Directors" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-8">
          <ProfileCard name="SARAH CHEN" title="Independent Director" desc="Championing Fintech Regulatory Excellence" img="/images/leader/Sarah.png" />
          <ProfileCard name="MARCUS RODRIGUEZ" title="Independent Director" desc="Driving Global Compliance Standards" img="/images/leader/one.jpg" />
          <ProfileCard name="AMARA OKAFOR" title="Independent Director" desc="Pioneering Emerging Market Innovation" img="/images/leader/two.jpg" />
        </div>

        <SectionHeader title="Executive Leadership Team" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <ProfileCard name="DAVID KIM" title="Chief Executive Officer" desc="Global Corporate Strategy & Fortune 10 Leadership" img="/images/leader/three.jpg" />
          <ProfileCard name="DR. PRIYA SHARMA" title="Chief Technology Officer" desc="AI, Cloud & Digital Transformation Strategy" img="/images/leader/four.jpg" />
          <ProfileCard name="JAMES THOMPSON" title="Chief Commercial Officer" desc="Global Commercial, Partnerships & Client Delivery" img="/images/leader/five.jpg" />
          <ProfileCard name="ELENA VASQUEZ" title="Chief Legal Officer" desc="Governance, Compliance & International Law" img="/images/leader/six.jpg" />
          <ProfileCard name="MICHAEL O'BRIEN" title="Chief Sales Officer" desc="Sales, Marketing & Market Growth Execution" img="/images/leader/seven.jpg" />
          <ProfileCard name="DR. AISHA PATEL" title="Chief Information Officer" desc="Infrastructure, Cybersecurity & Systems Resilience" img="/images/leader/eight.jpg" />
        </div>
      </section>

      {/* 3. Accountability */}
      <section className="w-full bg-gradient-to-r from-sky-900 to-gray-900 py-24 flex items-center justify-center">
        <div className="max-w-4xl text-center px-6">
          <h2 className="text-white text-[28px] md:text-[32px] font-semibold mb-8">Accountability at Fortune 10 Standards</h2>
          <p className="text-neutral-200 text-xl font-normal font-['Inter'] leading-9 text-center justify-center">
            Leadership at Zoiko Web Services means accountability to global markets, clients, and communities. Our<br className="hidden md:block" />team sets the highest standards in governance, transparency and innovation balancing growth with<br className="hidden md:block" />ethical responsibility.
          </p>
        </div>
      </section>

      {/* 4. Diverse Leadership Global Impact */}
      <section className="w-full bg-fuchsia-50 h-auto md:h-72 flex items-center justify-center py-16 md:py-0">
        <div className="max-w-[1160px] w-full px-6 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:gap-[164px]">
          
          {/* Progress Bars Column (Exactly w-[480px] to align percentages) */}
          <div className="flex flex-col gap-6 w-full lg:w-[480px]">
            {/* Bar 1 */}
            <div className="flex items-center justify-between w-full">
              <div className="relative h-10 w-64 bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-[20px] shadow-[0px_4px_15px_0px_rgba(144,80,159,0.30)] flex items-center px-4">
                <span className="text-white text-sm font-semibold font-['Inter'] leading-6">Global Regions</span>
              </div>
              <span className="text-sky-900 text-lg font-semibold font-['Inter'] leading-7">50%</span>
            </div>
            {/* Bar 2 */}
            <div className="flex items-center justify-between w-full">
              <div className="relative h-10 w-60 bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-[20px] shadow-[0px_4px_15px_0px_rgba(144,80,159,0.30)] flex items-center px-4">
                <span className="text-white text-sm font-semibold font-['Inter'] leading-6">Gender Diversity</span>
              </div>
              <span className="text-sky-900 text-lg font-semibold font-['Inter'] leading-7">45%</span>
            </div>
            {/* Bar 3 */}
            <div className="flex items-center justify-between w-full">
              <div className="relative h-10 w-80 bg-gradient-to-r from-fuchsia-700 to-sky-900 rounded-[20px] shadow-[0px_4px_15px_0px_rgba(144,80,159,0.30)] flex items-center px-4">
                <span className="text-white text-sm font-semibold font-['Inter'] leading-6">Cultural Diversity</span>
              </div>
              <span className="text-sky-900 text-lg font-semibold font-['Inter'] leading-7">60%</span>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="mt-12 lg:mt-7 w-full lg:w-auto">
            <h2 className="text-sky-900 text-2xl font-semibold font-['Inter'] leading-10 mb-2">
              Diverse Leadership Global Impact
            </h2>
            <p className="text-stone-500 text-lg font-normal font-['Inter'] leading-8">
              50% of our leadership represents diverse global regions. This<br className="hidden md:block"/>diversity ensures culturally relevant innovation and strengthens<br className="hidden md:block"/>client trust worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Info Cards */}
      <section className="w-full bg-sky-50 py-24 px-6 flex justify-center">
        <div className="w-full flex justify-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-[35px]">

            {/* Card 1: Milestones */}
            <div className="w-[384px] h-[496px] shrink-0 relative bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] border-l-4 border-cyan-900">
              <div className="absolute left-[36px] top-[31px] justify-center text-sky-900 text-xl font-semibold font-['Inter'] leading-8">Company Milestones</div>
              <div className="absolute w-0.5 h-80 left-[51px] top-[89px] bg-cyan-900 rounded-lg"></div>

              <div className="absolute left-[84px] top-[89px]">
                <div className="absolute -left-[40px] top-[8px] size-3.5 bg-cyan-900 rounded-md shadow-[0px_0px_0px_3px_rgba(70,124,162,1.00)] border-[3px] border-white"></div>
                <h3 className="text-sky-900 text-lg font-semibold font-['Inter'] leading-7">2010</h3>
                <p className="text-stone-500 text-base font-normal font-['Inter'] leading-6">Company Founded</p>
              </div>

              <div className="absolute left-[84px] top-[183px]">
                <div className="absolute -left-[40px] top-[8px] size-3.5 bg-cyan-900 rounded-md shadow-[0px_0px_0px_3px_rgba(70,124,162,1.00)] border-[3px] border-white"></div>
                <h3 className="text-sky-900 text-lg font-semibold font-['Inter'] leading-7">2015</h3>
                <p className="text-stone-500 text-base font-normal font-['Inter'] leading-6">North America Expansion</p>
              </div>

              <div className="absolute left-[84px] top-[276px]">
                <div className="absolute -left-[40px] top-[8px] size-3.5 bg-cyan-900 rounded-md shadow-[0px_0px_0px_3px_rgba(70,124,162,1.00)] border-[3px] border-white"></div>
                <h3 className="text-sky-900 text-lg font-semibold font-['Inter'] leading-7">2018</h3>
                <p className="text-stone-500 text-base font-normal font-['Inter'] leading-6">Europe Operations</p>
              </div>

              <div className="absolute left-[84px] top-[370px]">
                <div className="absolute -left-[40px] top-[8px] size-3.5 bg-cyan-900 rounded-md shadow-[0px_0px_0px_3px_rgba(70,124,162,1.00)] border-[3px] border-white"></div>
                <h3 className="text-sky-900 text-lg font-semibold font-['Inter'] leading-7">2021</h3>
                <p className="text-stone-500 text-base font-normal font-['Inter'] leading-6">Africa & Asia Launch</p>
              </div>
            </div>

            {/* Card 2: Executive Insights */}
            <div className="w-[384px] h-[496px] shrink-0 relative bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] border-l-4 border-cyan-900">
              <div className="absolute left-[36px] top-[31px] justify-center text-sky-900 text-xl font-semibold font-['Inter'] leading-8">Executive Insights</div>
              <div className="absolute left-[36px] top-[89px] text-sky-900 text-lg font-normal font-['Inter'] leading-7">
                "Governance isn't just compliance—it's<br/>the foundation of sustainable<br/>innovation."
              </div>
              <div className="absolute left-[36px] top-[188px] text-cyan-900 text-sm font-black font-['Inter'] leading-6">
                — Elena Vasquez, CLO
              </div>
            </div>

            {/* Card 3: Leadership Spotlight */}
            <div className="w-[384px] h-[496px] shrink-0 relative bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] border-l-4 border-cyan-900">
              <div className="absolute left-[36px] top-[31px] justify-center text-sky-900 text-xl font-semibold font-['Inter'] leading-8">Leadership Spotlight</div>
              
              <div className="absolute left-[36px] top-[89px] w-[320px] h-28 border-b border-zinc-100">
                <div className="absolute left-0 top-[15px] text-sky-900 text-base font-semibold font-['Inter'] leading-6">
                  Forbes: "The Future of Fintech<br/>Compliance"
                </div>
                <div className="absolute left-0 top-[71px] text-cyan-900 text-sm font-normal font-['Inter'] leading-5">
                  Featuring CEO David Kim
                </div>
              </div>

              <div className="absolute left-[36px] top-[201px] w-[320px] h-20 border-b border-zinc-100">
                <div className="absolute left-0 top-[15px] text-sky-900 text-base font-semibold font-['Inter'] leading-6">
                  TechCrunch: "AI Ethics in Enterprise"
                </div>
                <div className="absolute left-0 top-[47px] text-cyan-900 text-sm font-normal font-['Inter'] leading-5">
                  Interview with CTO Dr. Priya Sharma
                </div>
              </div>

              <div className="absolute left-[36px] top-[287px] w-[320px] h-28 border-b border-zinc-100">
                <div className="absolute left-0 top-[15px] text-sky-900 text-base font-semibold font-['Inter'] leading-6">
                  Harvard Business Review: "Global<br/>Governance"
                </div>
                <div className="absolute left-0 top-[71px] text-cyan-900 text-sm font-normal font-['Inter'] leading-5">
                  Article by CLO Elena Vasquez
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
