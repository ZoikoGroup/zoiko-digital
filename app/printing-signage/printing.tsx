export default function Printing(){
      return (
    <div>
    <section className="relative w-full bg-gradient-to-r from-fuchsia-700 to-sky-900 text-white overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Side: Content & CTA Buttons */}
          <div className="w-full lg:flex-1 space-y-6 text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-8 lg:leading-[50px] max-w-2xl font-sans">
              Enterprise-Grade Printing & Signage Consistent, Durable, On-Brand
            </h1>
            <p className="text-white/90 text-base lg:text-lg font-normal leading-6 lg:leading-7 max-w-xl font-sans">
              Nationwide production, color accuracy, rapid turnaround and managed rollouts at Tier-1 scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start pt-2">
              <button className="w-full sm:w-auto bg-white hover:bg-slate-100 text-fuchsia-700 font-bold text-sm px-6 py-3.5 rounded-lg transition-all text-center border border-white cursor-pointer shadow-sm">
                Get a Print & Signage Quote
              </button>
              <button className="w-full sm:w-auto border-2 border-white hover:bg-white/10 text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all text-center cursor-pointer">
                Download Print Specifications
              </button>
            </div>
          </div>

          {/* Right Side: Diagram Hub Layout Structure (Mobile Layer Map Integrated) */}
          <div className="w-full lg:flex-1 flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            
            {/* MOBILE ONLY LAYER DIAGRAM (Matches exact Figma 384px layout structure) */}
            <div className="relative w-full max-w-[360px] h-[480px] right-[42px] sm:hidden block select-none mx-auto">
              {/* Uptime Badge */}
              <div className="w-32 h-7 left-[210px] top-[40px] absolute bg-white/10 rounded-[20px] flex items-center justify-center border border-white/5">
                <span className="text-white text-[11px] font-medium font-['Inter']">ISO 12647 Color Certification</span>
              </div>

              {/* Web Platform Icon Card */}
              <div className="w-36 h-32 left-[205px] top-[85px] absolute bg-white/10 rounded-xl shadow-md border border-white/20 flex items-center justify-center">
                <img className="w-11 h-12 object-contain" src="/images/web-app-development/Symbol (12).png" alt="icon" />
              </div>

              {/* Central Laptop Container Card */}
              <div className="w-36 h-32 left-[45px] top-[160px] absolute bg-white/10 rounded-xl shadow-md border border-white/20 flex items-center justify-center">
                <div className="w-16 h-14 relative overflow-hidden flex items-center justify-center">
                  <img className="w-16 h-14 rounded-xs opacity-90 mt-[9px]" src="/images/web-app-development/bi_laptop.png" alt="icon" />
                </div>
              </div>

              {/* Mobile Device Icon Card */}
              <div className="w-36 h-32 left-[205px] top-[230px] absolute bg-white/10 rounded-xl shadow-md border border-white/20 flex items-center justify-center">
                <img className="w-9 h-12 object-contain" src="/images/web-app-development/Symbol (13).png" alt="icon" />
              </div>

              {/* Lighthouse Badge */}
              <div className="w-32 h-7 left-[50px] top-[105px] absolute bg-white/10 rounded-[20px] flex items-center justify-center border border-white/5">
                <span className="text-white text-[11px] font-medium font-['Inter']">Eco-substrates</span>
              </div>

              {/* OWASP Badge */}
              <div className="w-36 h-7 left-[45px] top-[315px] absolute bg-white/10 rounded-[20px] flex items-center justify-center border border-white/5">
                <span className="text-white text-[11px] font-medium font-['Inter']">Nationwide Installer Network</span>
              </div>
            </div>

            {/* DESKTOP/TABLET GRID SYSTEM (Preserved Perfectly) */}
            <div className="hidden sm:grid grid-cols-[auto_auto_auto] gap-6 items-center justify-center select-none">
              {/* Column 1: Lighthouse Badge */}
              <div className="flex justify-end">
                <div className="h-9 px-4 bg-white/10 border border-white/10 rounded-[20px] flex items-center justify-center backdrop-blur-xs whitespace-nowrap">
                  <span className="text-white text-sm font-bold font-['Inter'] leading-6">
                    Eco-substrates
                  </span>
                </div>
              </div>

              {/* Column 2: Top Badge, Laptop Box, Bottom Badge */}
              <div className="flex flex-col items-center gap-5">
                {/* Uptime Badge (Top) */}
                <div className="h-9 px-4 bg-white/10 border border-white/10 rounded-[20px] flex items-center justify-center backdrop-blur-xs whitespace-nowrap">
                  <span className="text-white text-sm font-bold font-['Inter'] leading-6">
                    ISO 12647 Color Certification
                  </span>
                </div>

                {/* Central Laptop/Desktop Card Container */}
                <div className="w-52 h-36 relative bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-white/30 flex items-center justify-center backdrop-blur-xs">
                  <div className="size-16 relative overflow-hidden flex items-center justify-center">
                    <img className="w-16 h-14 rounded-xs opacity-90 mt-[9px]" src="/images/web-app-development/bi_laptop.png" alt="icon" />
                  </div>
                </div>

                {/* OWASP Badge (Bottom) */}
                <div className="h-10 px-4 bg-white/10 border border-white/10 rounded-[20px] flex items-center justify-center backdrop-blur-xs whitespace-nowrap">
                  <span className="text-white text-sm font-bold font-['Inter'] leading-6">
                    Nationwide Installer Network
                  </span>
                </div>
              </div>

              {/* Column 3: Stacked Web & Mobile Platform Cards */}
              <div className="flex flex-col items-start gap-4">
                {/* Top Platform/Web Icon Card */}
                <div className="w-52 h-36 relative bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-white/30 flex items-center justify-center backdrop-blur-xs">
                  <img className="w-11 h-12 flex items-center justify-center object-contain" src="/images/web-app-development/Symbol (12).png" alt="icon" />
                </div>

                {/* Bottom Mobile Icon Card */}
                <div className="w-52 h-36 relative bg-white/10 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-white/30 flex items-center justify-center backdrop-blur-xs">
                  <img className="w-9 h-12 flex items-center justify-center object-contain" src="/images/web-app-development/Symbol (13).png" alt="icon" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      </div>

      )
}