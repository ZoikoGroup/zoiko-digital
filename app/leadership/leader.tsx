import React from 'react';

interface ProfileCardProps {
  name: string;
  title: string;
  desc: string;
  img: string;
}

const ProfileCard = ({ name, title, desc, img }: ProfileCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-neutral-100 dark:border-gray-700 rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full w-full max-w-[384px] mx-auto transition-colors duration-300">
      {img ? (
        <img src={img} alt={name} className="w-full h-72 object-cover object-center" />
      ) : (
        <div className="w-full h-72 bg-zinc-400 dark:bg-zinc-700"></div>
      )}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-sky-900 dark:text-white text-xl font-semibold leading-8 tracking-wide uppercase">
          {name}
        </h3>
        <p className="text-fuchsia-700 dark:text-fuchsia-400 text-base font-semibold leading-6 mb-3">
          {title}
        </p>
        <p className="text-stone-500 dark:text-gray-300 text-sm font-normal leading-5 mb-8 flex-1">
          {desc}
        </p>
        <div className="text-fuchsia-700 dark:text-fuchsia-400 text-sm font-semibold hover:underline cursor-pointer mt-auto">
          View Full Bio →
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center mb-10 mt-16 first:mt-0">
    <h2 className="text-sky-900 dark:text-teal-400 text-2xl md:text-3xl font-semibold mb-4 text-center">
      {title}
    </h2>
    <div className="w-20 h-[3px] bg-gradient-to-r from-fuchsia-700 to-sky-900 dark:from-fuchsia-500 dark:to-teal-400"></div>
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
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 font-sans antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      
      {/* 1. Hero */}
      <section className="relative bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 pt-16 pb-24 px-4 sm:px-6 overflow-hidden flex flex-col items-center text-center">
        <Constellation />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-white text-3xl md:text-[44px] font-bold leading-tight mb-6">
            Global Leadership. Proven Integrity.<br className="hidden md:block" />Transformative Vision.
          </h1>
          <p className="text-neutral-200 text-base md:text-xl font-normal leading-relaxed max-w-3xl">
             Zoiko Digital is guided by executives who combine decades of Tier-1 experience in technology, fintech, and telecoms with a commitment to governance, sustainability, and customer impact.
          </p>
        </div>
      </section>

      {/* 2. Profiles Section */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto w-full flex flex-col bg-sky-50/50 dark:bg-gray-950/40 rounded-3xl my-8">
        
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
      <section className="w-full bg-gradient-to-r from-sky-900 to-gray-900 py-16 md:py-24 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-white text-2xl md:text-[32px] font-semibold mb-6">Accountability at Fortune 10 Standards</h2>
          <p className="text-neutral-200 text-base md:text-xl font-normal leading-relaxed">
            Leadership at  Zoiko Digital means accountability to global markets, clients, and communities. Our team sets the highest standards in governance, transparency and innovation balancing growth with ethical responsibility.
          </p>
        </div>
      </section>

      {/* 4. Diverse Leadership Global Impact */}
      <section className="w-full bg-fuchsia-50/50 dark:bg-gray-800/40 py-16 px-4 sm:px-6 transition-colors duration-300">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Progress Bars Column */}
          <div className="flex flex-col gap-6 w-full max-w-md">
            {/* Bar 1 */}
            <div className="flex items-center justify-between gap-4">
              <div className="h-10 w-4/5 bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 rounded-full shadow-sm flex items-center px-4 shrink-0">
                <span className="text-white text-sm font-semibold">Global Regions</span>
              </div>
              <span className="text-sky-900 dark:text-teal-400 text-lg font-semibold">50%</span>
            </div>
            {/* Bar 2 */}
            <div className="flex items-center justify-between gap-4">
              <div className="h-10 w-[75%] bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 rounded-full shadow-sm flex items-center px-4 shrink-0">
                <span className="text-white text-sm font-semibold">Gender Diversity</span>
              </div>
              <span className="text-sky-900 dark:text-teal-400 text-lg font-semibold">45%</span>
            </div>
            {/* Bar 3 */}
            <div className="flex items-center justify-between gap-4">
              <div className="h-10 w-full bg-gradient-to-r from-indigo-950 via-teal-700 to-teal-400 rounded-full shadow-sm flex items-center px-4 shrink-0">
                <span className="text-white text-sm font-semibold">Cultural Diversity</span>
              </div>
              <span className="text-sky-900 dark:text-teal-400 text-lg font-semibold">60%</span>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:max-w-md text-center lg:text-left">
            <h2 className="text-sky-900 dark:text-white text-2xl font-semibold leading-tight mb-3">
              Diverse Leadership Global Impact
            </h2>
            <p className="text-stone-500 dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed">
              50% of our leadership represents diverse global regions. This diversity ensures culturally relevant innovation and strengthens client trust worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Info Cards */}
      <section className="w-full bg-sky-50 dark:bg-gray-950/20 py-24 px-4 sm:px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1: Milestones */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] border-l-4 border-cyan-900 dark:border-teal-500 p-6 flex flex-col min-h-[440px]">
            <h3 className="text-sky-900 dark:text-white text-xl font-semibold mb-6">Company Milestones</h3>
            <div className="relative border-l-2 border-cyan-900/30 dark:border-teal-500/30 pl-6 ml-2 space-y-6 flex-1">
              {/* Point 2010 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 size-3.5 bg-cyan-900 dark:bg-teal-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                <h4 className="text-sky-900 dark:text-teal-400 text-base font-semibold">2010</h4>
                <p className="text-stone-500 dark:text-gray-300 text-sm">Company Founded</p>
              </div>
              {/* Point 2015 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 size-3.5 bg-cyan-900 dark:bg-teal-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                <h4 className="text-sky-900 dark:text-teal-400 text-base font-semibold">2015</h4>
                <p className="text-stone-500 dark:text-gray-300 text-sm">North America Expansion</p>
              </div>
              {/* Point 2018 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 size-3.5 bg-cyan-900 dark:bg-teal-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                <h4 className="text-sky-900 dark:text-teal-400 text-base font-semibold">2018</h4>
                <p className="text-stone-500 dark:text-gray-300 text-sm">Europe Operations</p>
              </div>
              {/* Point 2021 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 size-3.5 bg-cyan-900 dark:bg-teal-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                <h4 className="text-sky-900 dark:text-teal-400 text-base font-semibold">2021</h4>
                <p className="text-stone-500 dark:text-gray-300 text-sm">Africa & Asia Launch</p>
              </div>
            </div>
          </div>

          {/* Card 2: Executive Insights */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] border-l-4 border-cyan-900 dark:border-teal-500 p-6 flex flex-col justify-between min-h-[440px]">
            <div>
              <h3 className="text-sky-900 dark:text-white text-xl font-semibold mb-6">Executive Insights</h3>
              <p className="text-sky-900 dark:text-gray-100 text-lg italic font-normal leading-relaxed">
                "Governance isn't just compliance — it's the foundation of sustainable innovation."
              </p>
            </div>
            <div className="text-cyan-900 dark:text-teal-400 text-sm font-black mt-4">
              — Elena Vasquez, CLO
            </div>
          </div>

          {/* Card 3: Leadership Spotlight */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)] border-l-4 border-cyan-900 dark:border-teal-500 p-6 flex flex-col min-h-[440px]">
            <h3 className="text-sky-900 dark:text-white text-xl font-semibold mb-4">Leadership Spotlight</h3>
            <div className="divide-y divide-zinc-100 dark:divide-gray-700 flex-1 flex flex-col justify-between">
              
              <div className="py-4 first:pt-0">
                <h4 className="text-sky-900 dark:text-teal-400 text-base font-semibold leading-snug">
                  Forbes: "The Future of Fintech Compliance"
                </h4>
                <p className="text-cyan-900 dark:text-gray-400 text-sm font-normal mt-1">
                  Featuring CEO David Kim
                </p>
              </div>

              <div className="py-4">
                <h4 className="text-sky-900 dark:text-teal-400 text-base font-semibold leading-snug">
                  TechCrunch: "AI Ethics in Enterprise"
                </h4>
                <p className="text-cyan-900 dark:text-gray-400 text-sm font-normal mt-1">
                  Interview with CTO Dr. Priya Sharma
                </p>
              </div>

              <div className="py-4 last:pb-0">
                <h4 className="text-sky-900 dark:text-teal-400 text-base font-semibold leading-snug">
                  Harvard Business Review: "Global Governance"
                </h4>
                <p className="text-cyan-900 dark:text-gray-400 text-sm font-normal mt-1">
                  Article by CLO Elena Vasquez
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}