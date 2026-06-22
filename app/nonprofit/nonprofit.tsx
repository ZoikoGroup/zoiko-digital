import React from 'react';

export default function NonprofitTechnologyPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-50 antialiased text-zinc-700 selection:bg-fuchsia-200">
      
      <div className="max-w-7xl mx-auto px-6 pt-8 lg:hidden space-y-3">
        <div className="text-gray-600 text-xs font-normal">
          Home › Industries › <span className="text-zinc-900 font-semibold">Nonprofits</span>
        </div>
        <div className="inline-block bg-rose-100 rounded-full px-4 py-1.5">
          <span className="text-rose-600 text-xs font-bold uppercase tracking-widest block">Sector overview</span>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-12 lg:pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Block */}
        <div className="lg:col-span-6 space-y-6">
          <h1 className="text-zinc-900 text-4xl lg:text-6xl font-black leading-tight tracking-tight">
            Nonprofit<br />technology,<br />explained.
          </h1>
          <p className="text-gray-600 text-xl font-normal leading-8 max-w-xl">
            How donation platforms, donor CRMs, and automation help mission-driven organizations raise more, engage supporters, and spend less on overhead.
          </p>
        </div>
        
       {/* Right Hero Graphic Asset Area */}
<div className="lg:col-span-6 flex justify-center lg:justify-end">
  <div className="text-center z-10">
    {/* Mobile Image */}
    <img
      className="block lg:hidden"
      src="/images/non-profit/noprofitmobiel.png"
      alt="Mobile Hero"
    />

    {/* Desktop Image */}
    <img
      className="hidden lg:block"
      src="/images/non-profit/nonprofitdesktop.png"
      alt="Desktop Hero"
    />
  </div>
</div>

        
      </section>

      {/* 3. PROSE NARRATIVE & QUOTE BLOCK */}
      <section className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <p className="text-zinc-700 text-lg md:text-xl font-normal leading-8">
          Nonprofits run on trust and on tight budgets. The right technology helps them turn supporters into sustained relationships, makes giving effortless, and proves the impact of every dollar — usually with small teams and limited resources.
        </p>
        <p className="text-zinc-700 text-base font-normal leading-7">
          Where many organizations once relied on spreadsheets and disconnected tools, modern nonprofit software brings fundraising, supporter data, and reporting into one place. That means less time on admin and more time on the mission.
        </p>
        
        {/* Bordered Callout Quote */}
        <div className="border-l-[3px] border-fuchsia-700 lg:border-fuchsia-700 border-rose-500 pl-6 py-2 my-10">
          <blockquote className="text-zinc-900 text-xl font-semibold leading-8">
            A donor who feels seen gives again. Good technology is really about strengthening relationships, not just processing payments.
          </blockquote>
        </div>
      </section>

      {/* 4. SECTOR BY THE NUMBERS */}
      <section className="max-w-3xl mx-auto px-6 py-10 space-y-10">
        <div className="space-y-2">
          <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">The sector by the numbers</h2>
          <p className="text-zinc-700 text-base font-normal">
            A few figures that frame why nonprofit technology matters. <span className="text-gray-400 font-light">(Illustrative figures for context.)</span>
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-b from-white to-neutral-50 p-6 rounded-2xl border border-gray-200 shadow-sm overflow-hidden group">
            <div className="text-fuchsia-700 lg:text-fuchsia-700 text-rose-500 text-4xl font-black">1.8M+</div>
            <div className="mt-4 text-zinc-700 text-base font-normal leading-6">Registered nonprofits in the U.S. alone</div>
<div className="absolute -right-6 -top-6 w-28 h-28 opacity-10 rounded-[55px] bg-radial-[at_30%_30%] from-rose-500 to-amber-500 lg:bg-fuchsia-700 lg:from-transparent lg:to-transparent lg:bg-none"></div>
          </div>
          {/* Card 2 */}
          <div className="relative bg-gradient-to-b from-white to-neutral-50 p-6 rounded-2xl border border-gray-200 shadow-sm overflow-hidden group">
            <div className="text-fuchsia-700 lg:text-fuchsia-700 text-rose-500 text-4xl font-black">~12%</div>
            <div className="mt-4 text-zinc-700 text-base font-normal leading-6">Of annual giving now happens online</div>
<div className="absolute -right-6 -top-6 w-28 h-28 opacity-10 rounded-[55px] bg-radial-[at_30%_30%] from-rose-500 to-amber-500 lg:bg-fuchsia-700 lg:from-transparent lg:to-transparent lg:bg-none"></div> </div>
          {/* Card 3 */}
          <div className="relative bg-gradient-to-b from-white to-neutral-50 p-6 rounded-2xl border border-gray-200 shadow-sm overflow-hidden group">
            <div className="text-fuchsia-700 lg:text-fuchsia-700 text-rose-500 text-4xl font-black">5×</div>
            <div className="mt-4 text-zinc-700 text-base font-normal leading-6">Recurring donors can be worth more over time than one-time givers</div>
<div className="absolute -right-6 -top-6 w-28 h-28 opacity-10 rounded-[55px] bg-radial-[at_30%_30%] from-rose-500 to-amber-500 lg:bg-fuchsia-700 lg:from-transparent lg:to-transparent lg:bg-none"></div>
             </div>
        </div>
        <p className="text-gray-500 text-xs max-w-xl leading-relaxed">
          Figures are illustrative and provided for general context, not sourced from a specific report.
        </p>
      </section>

      {/* 5. WHY NONPROFIT TECH IS DIFFERENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-2">
          <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">Why nonprofit tech is different</h2>
          <p className="text-zinc-700 text-base max-w-2xl leading-relaxed mt-3 ">
            The goals are the same as any organization — reach people, build relationships, measure results — but the constraints are distinctive.
          </p>
        </div>

        {/* Constraints 2x2 Feature Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Constraint Block 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-10 h-10 lg:bg-fuchsia-700 bg-[#f56e35] rounded-xl flex items-center justify-center text-white text-lg font-bold">
              <img
              src="/images/non-profit/Frame.png"
              alt="icon"
              ></img>
            </div>
            <h3 className="text-zinc-900 text-base font-bold">Tight budgets</h3>
            <p className="text-zinc-700 text-base font-normal leading-relaxed">Every dollar spent on tools is a dollar not spent on the mission, so value and simplicity matter enormously.</p>
          </div>

          {/* Constraint Block 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-10 h-10 lg:bg-fuchsia-700 bg-[#f56e35] rounded-xl flex items-center justify-center text-white text-lg font-bold">
              <img
              src="/images/non-profit/Frame (1).png"
              alt="icon"
              ></img>
            </div>
            <h3 className="text-zinc-900 text-base font-bold">Small teams & volunteers</h3>
            <p className="text-zinc-700 text-base font-normal leading-relaxed">Tools have to be easy enough for part-time staff and volunteers to run without specialist training.</p>
          </div>

          {/* Constraint Block 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <div className="w-10 h-10 lg:bg-fuchsia-700 bg-[#f56e35] rounded-xl flex items-center justify-center text-white text-lg font-bold">
              <img
              src="/images/non-profit/Frame (2).png"
              alt="icon"
              ></img>
            </div>
            <h3 className="text-zinc-900 text-base font-bold">Donor trust & data</h3>
            <p className="text-zinc-700 text-base font-normal leading-relaxed">Supporters share money and personal details — protecting that data and being transparent is non-negotiable.</p>
          </div>

          {/* Constraint Block 4 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <div className="w-10 h-10 lg:bg-fuchsia-700 bg-[#f56e35] rounded-xl flex items-center justify-center text-white text-lg font-bold">
              <img
              src="/images/non-profit/Frame (3).png"
              alt="icon"
              ></img>
            </div>
            <h3 className="text-zinc-900 text-base font-bold">Proving impact</h3>
            <p className="text-zinc-700 text-base font-normal leading-relaxed">Funders and donors increasingly expect clear evidence of outcomes, not just activity.</p>
          </div>
        </div>
      </section>

 {/* 6. HOW TECHNOLOGY HELPS (SUPPORTER JOURNEY MAP) */}
<section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
  <div className="space-y-2">
    <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">How technology helps</h2>
    <p className="text-zinc-700 text-base max-w-3xl leading-relaxed">
      The most useful nonprofit tools connect the whole supporter journey — so a first-time donor can be thanked, kept informed, invited back, and shown their impact, all without manual effort.
    </p>
  </div>

  {/* Supporter Journey Pipeline Diagram Wrapper */}
<div className="bg-gradient-to-b from-white to-pink-50 rounded-[20px] border border-gray-200 shadow-sm p-6 md:p-8 space-y-8">
  <div className="flex flex-row justify-between items-center relative">
    {/* Step 1 */}
    <div className="text-center space-y-2 relative flex-1">
      <div className="w-14 h-14 bg-white border border-orange-500 lg:border-[#90509F] rounded-full mx-auto flex items-center justify-center shadow-sm text-lg">🔍</div>
      <h4 className="text-zinc-900 text-sm font-bold">Discover</h4>
      <p className="text-gray-600 text-xs">find the cause</p>
    </div>

    {/* Line between icons */}
<div className="flex-1 border-t-3 border-dashed border-orange-500 lg:border-[#90509F] md:mb-12 mb-16"></div>

    {/* Step 2 */}
    <div className="text-center space-y-2 relative flex-1">
      <div className="w-14 h-14 bg-white border border-orange-500 lg:border-[#90509F] rounded-full mx-auto flex items-center justify-center shadow-sm text-lg">❤️</div>
      <h4 className="text-zinc-900 text-sm font-bold">Give</h4>
      <p className="text-gray-600 text-xs">donate easily</p>
    </div>

<div className="flex-1 border-t-3 border-dashed border-orange-500 lg:border-[#90509F] md:mb-12 mb-16"></div>

    {/* Step 3 */}
    <div className="text-center space-y-2 relative flex-1">
      <div className="w-14 h-14 bg-white border border-orange-500 lg:border-[#90509F] rounded-full mx-auto flex items-center justify-center shadow-sm text-lg">💬</div>
      <h4 className="text-zinc-900 text-sm font-bold">Engage</h4>
      <p className="text-gray-600 text-xs">stay connected</p>
    </div>

<div className="flex-1 border-t-3 border-dashed border-orange-500 lg:border-[#90509F] md:mb-12 mb-16"></div>

    {/* Step 4 */}
    <div className="text-center space-y-2 relative flex-1">
      <div className="w-14 h-14 bg-white border border-orange-500 lg:border-[#90509F] rounded-full mx-auto flex items-center justify-center shadow-sm text-lg">📊</div>
      <h4 className="text-zinc-900 text-sm font-bold">Report</h4>
      <p className="text-gray-600 text-xs">show impact</p>
    </div>
    
  </div>

  <div className="text-center text-gray-600 text-xs pt-4 border-orange-500 lg:border-pink-500">
    The supporter journey — technology keeps each stage connected and personal.
  </div>
</div>


  <p className="text-zinc-700 text-base leading-relaxed">
    Four capabilities do most of the work: <strong className="text-zinc-900 font-bold">frictionless giving</strong> (making donations quick and trustworthy), <strong className="text-zinc-900 font-bold">supporter data</strong> (one clear view of every donor), <strong className="text-zinc-900 font-bold">automation</strong> (receipts, thank-yous, and follow-ups that run themselves), and <strong className="text-zinc-900 font-bold">reporting</strong> (turning activity into a story of impact).
  </p>
</section>


      {/* 7. KEY BUILDING BLOCKS STRUCTURAL MATRIX */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-2">
          <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">Key building blocks</h2>
          <p className="text-zinc-700 text-base">The terms you'll hear most often when nonprofits talk about technology:</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm divide-y divide-gray-100 overflow-hidden">
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">Donor CRM</h3>
            <p className="text-zinc-700 text-base leading-relaxed">A constituent relationship management system — the central record of supporters, their history, gifts, and communications.</p>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">Donation platform</h3>
            <p className="text-zinc-700 text-base leading-relaxed">The tools that accept gifts online — donation forms, payment processing, and campaign or fundraiser pages.</p>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">Recurring giving</h3>
            <p className="text-zinc-700 text-base leading-relaxed">Automated repeat donations (monthly or annual) that provide nonprofits with predictable, sustained income.</p>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">Peer-to-peer (P2P) fundraising</h3>
            <p className="text-zinc-700 text-base leading-relaxed">Supporters raise money on the organization's behalf through their own personal fundraising pages.</p>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">Grant management</h3>
            <p className="text-zinc-700 text-base leading-relaxed">Tracking grant applications, requirements, deadlines, and reporting obligations in one place.</p>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <h3 className="text-zinc-900 text-base font-extrabold">Impact reporting</h3>
            <p className="text-zinc-700 text-base leading-relaxed">Dashboards and reports that translate program activity into measurable outcomes for donors and funders.</p>
          </div>
        </div>
      </section>

      {/* 8. WHERE IT'S HEADING */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-2">
          <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">Where it's heading</h2>
          <p className="text-zinc-700 text-base">A few shifts shaping the next chapter of nonprofit technology:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-5 h-5 lg:bg-fuchsia-700 bg-[#f56e35] rounded-full shrink-0 mt-1"></div>
            <div>
              <h3 className="text-zinc-900 text-base font-bold mb-2">Digital-first giving</h3>
              <p className="text-zinc-700 text-base leading-relaxed">Mobile-friendly, one-tap donations and digital wallets are becoming the norm, not the exception.</p>
            </div>
          </div>
          {/* Box 2 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-5 h-5 lg:bg-fuchsia-700 bg-[#f56e35] rounded-full shrink-0 mt-1"></div>
            <div>
              <h3 className="text-zinc-900 text-base font-bold mb-2">Sustained & recurring support</h3>
              <p className="text-zinc-700 text-base leading-relaxed">Organizations are shifting from one-off appeals toward steady, subscription-style giving relationships.</p>
            </div>
          </div>
          {/* Box 3 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-5 h-5 lg:bg-fuchsia-700 bg-[#f56e35] rounded-full shrink-0 mt-1"></div>
            <div>
              <h3 className="text-zinc-900 text-base font-bold mb-2">Data-driven storytelling</h3>
              <p className="text-zinc-700 text-base leading-relaxed">Clearer impact data is being used to tell more honest, compelling stories to supporters and funders.</p>
            </div>
          </div>
          {/* Box 4 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-5 h-5 lg:bg-fuchsia-700 bg-[#f56e35] rounded-full shrink-0 mt-1"></div>
            <div>
              <h3 className="text-zinc-900 text-base font-bold mb-2">Accessibility & inclusion</h3>
              <p className="text-zinc-700 text-base leading-relaxed">Giving experiences are being designed to work for every supporter, on every device and ability level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight">Frequently asked questions</h2>
        
        <div className="space-y-4">
          {['What is a donor CRM?', 'Why is recurring giving so valuable?', 'How is donor data protected?', 'What is peer-to-peer fundraising?'].map((q, i) => (
            <div key={i} className="bg-white px-6 py-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-gray-300 transition-colors">
              <span className="text-zinc-900 text-base font-bold">{q}</span>
              <span className="text-rose-600 text-2xl font-light leading-none">+</span>
            </div>
          ))}
        </div>
      </section>

     

    </div>
  );
}