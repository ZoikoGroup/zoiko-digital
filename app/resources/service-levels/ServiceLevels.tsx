import React from 'react';

export default function ServiceLevels() {
  const availabilityData = [
    { uptime: '99.0% to < 99.95%', credit: '10% of monthly service fee' },
    { uptime: '95.0% to < 99.0%', credit: '25% of monthly service fee' },
    { uptime: 'Below 95.0%', credit: '50% of monthly service fee' },
  ];

  const supportData = [
    { severity: 'Critical', desc: 'Production down or unusable', response: '30 minutes, 24/7' },
    { severity: 'High', desc: 'Major function impaired', response: '2 business hours' },
    { severity: 'Normal', desc: 'Minor impact, workaround exists', response: '1 business day' },
    { severity: 'Low', desc: 'General questions', response: '2 business days' },
  ];

  const reliabilityCards = [
    {
      title: 'Redundant architecture',
      desc: 'Multi-zone deployment with automated failover and no single point of failure.',
      icon: (
        <div className="w-10 h-10 bg-[#7B51FC] rounded-xl flex items-center justify-center mb-6">
          <img src="/images/Services/redundant.svg" alt="Redundant architecture" className="w-5 h-5" />
        </div>
      )
    },
    {
      title: '24/7 monitoring',
      desc: 'Continuous detection and a trained team ready to respond at any hour.',
      icon: (
        <div className="w-10 h-10 bg-[#1D8ED8] rounded-xl flex items-center justify-center mb-6">
          <img src="/images/Services/monitoring.svg" alt="24/7 monitoring" className="w-5 h-5" />
        </div>
      )
    },
    {
      title: 'Tested recovery',
      desc: 'Encrypted backups and regularly exercised disaster recovery plans.',
      icon: (
        <div className="w-10 h-10 bg-[#6C47FF] rounded-xl flex items-center justify-center mb-6">
          <img src="/images/Services/recovery.svg" alt="Tested recovery" className="w-5 h-5" />
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 font-['Inter']">

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-fuchsia-700 to-sky-900 relative overflow-hidden pt-24 pb-32 px-4 lg:px-0">
        <div className="absolute top-[-100px] left-[-200px] w-[1000px] h-[500px] bg-radial-[at_25%_10%] from-indigo-600/60 to-indigo-600/0 opacity-50 blur-md pointer-events-none"></div>
        <div className="max-w-[1072px] mx-auto relative z-10 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center bg-emerald-500/20 rounded-full outline outline-1 outline-emerald-500/40 px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-sm mr-2"></div>
            <span className="text-white text-xs font-semibold">All systems operational</span>
          </div>
          
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6">
            Service levels & reliability
          </h1>
          <p className="text-white/80 text-lg font-normal leading-7 max-w-2xl">
            The commitments behind your production workloads — availability,<br className="hidden md:block" />
            support, and recovery you can plan around.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1072px] mx-auto pb-16 px-4 lg:px-0 relative z-20 -mt-16">
        
        {/* Floating Info Banner */}
        <div className="w-full bg-gray-200 rounded-2xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden mb-16 flex flex-col md:flex-row gap-[1px]">
          <div className="flex-1 bg-white py-6 flex flex-col items-center justify-center">
            <div className="text-indigo-600 text-3xl font-black leading-[48.64px]">99.95%</div>
            <div className="text-gray-600 text-sm font-semibold leading-5">Monthly uptime</div>
          </div>
          <div className="flex-1 bg-white py-6 flex flex-col items-center justify-center">
            <div className="text-indigo-600 text-3xl font-black leading-[48.64px]">&lt; 30 min</div>
            <div className="text-gray-600 text-sm font-semibold leading-5">Critical response</div>
          </div>
          <div className="flex-1 bg-white py-6 flex flex-col items-center justify-center">
            <div className="text-indigo-600 text-3xl font-black leading-[48.64px]">24 / 7</div>
            <div className="text-gray-600 text-sm font-semibold leading-5">Monitoring &amp; support</div>
          </div>
          <div className="flex-1 bg-white py-6 flex flex-col items-center justify-center">
            <div className="text-indigo-600 text-3xl font-black leading-[48.64px]">RTO &lt; 4h</div>
            <div className="text-gray-600 text-sm font-semibold leading-5">Recovery target</div>
          </div>
        </div>
        
        {/* Availability & service credits */}
        <section className="mb-20">
          <h2 className="text-zinc-900 text-2xl font-extrabold mb-4">Availability & service credits</h2>
          <p className="text-gray-600 text-base leading-7 mb-10 max-w-[700px]">
            If we miss our monthly uptime commitment, you may claim a service credit per the<br className="hidden md:block" />
            schedule below. Full details are in the <span className="text-indigo-600">Service Level Agreement</span>.
          </p>
          
          <div className="bg-white rounded-2xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-neutral-100 border-b border-gray-100">
                  <th className="py-4 px-6 text-zinc-900 text-xs font-bold uppercase tracking-wide w-[40%]">Monthly uptime</th>
                  <th className="py-4 px-6 text-zinc-900 text-xs font-bold uppercase tracking-wide">Service credit</th>
                </tr>
              </thead>
              <tbody>
                {availabilityData.map((row, idx) => (
                  <tr key={idx} className={idx !== availabilityData.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="py-4 px-6 text-zinc-900 text-base font-bold">{row.uptime}</td>
                    <td className="py-4 px-6 text-zinc-700 text-base font-normal">{row.credit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Support response targets */}
        <section className="mb-20">
          <h2 className="text-zinc-900 text-2xl font-extrabold mb-4">Support response targets</h2>
          <p className="text-gray-600 text-base leading-7 mb-10">
            Response times by severity, available to production-tier customers.
          </p>
          
          <div className="bg-white rounded-2xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-neutral-100 border-b border-gray-100">
                  <th className="py-4 px-6 text-zinc-900 text-xs font-bold uppercase tracking-wide w-[20%]">Severity</th>
                  <th className="py-4 px-6 text-zinc-900 text-xs font-bold uppercase tracking-wide w-[50%]">Description</th>
                  <th className="py-4 px-6 text-zinc-900 text-xs font-bold uppercase tracking-wide w-[30%]">First response</th>
                </tr>
              </thead>
              <tbody>
                {supportData.map((row, idx) => (
                  <tr key={idx} className={idx !== supportData.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="py-4 px-6 text-zinc-900 text-base font-bold">{row.severity}</td>
                    <td className="py-4 px-6 text-zinc-700 text-base font-normal">{row.desc}</td>
                    <td className="py-4 px-6 text-zinc-700 text-base font-normal">{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How we deliver reliability */}
        <section className="mb-20">
          <h2 className="text-zinc-900 text-2xl font-extrabold mb-4">How we deliver reliability</h2>
          <p className="text-gray-600 text-base leading-7 mb-10">
            Service levels are backed by real engineering and operational practices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reliabilityCards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] h-44 flex flex-col">
                {card.icon}
                <h3 className="text-zinc-900 text-base font-bold mb-2">{card.title}</h3>
                <p className="text-zinc-700 text-sm leading-6">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Read the full SLA */}
        <div className="w-full bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] p-9 flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-6 sm:mb-0 text-center sm:text-left">
            <h2 className="text-zinc-900 text-xl font-extrabold mb-2">Read the full SLA</h2>
            <p className="text-gray-600 text-base leading-7">Definitions, exclusions, and the claim process in detail.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-[#9F54B3] hover:bg-[#8B489E] text-white text-base font-bold py-3 px-6 rounded-xl transition-colors shadow-sm whitespace-nowrap text-center">
              View the SLA →
            </button>
            <button className="bg-white hover:bg-gray-50 outline outline-1 outline-gray-200 text-zinc-900 text-base font-bold py-3 px-6 rounded-xl transition-colors shadow-sm whitespace-nowrap text-center">
              Trust Center
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}
