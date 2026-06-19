import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface PressureCard {
  title: string;
  description: {
    desktop: React.ReactNode;
    mobile: React.ReactNode;
  };
}
export default function RetailOverview() {
  const cards: PressureCard[] = [
    {
      title: "Disconnected channels",
      description: {
        desktop: <>Web, mobile, marketplace, and store systems that don't share  inventory, orders, or customer data.</>,
        mobile: <>Web, mobile, marketplace, and store systems  that don't share inventory, orders, or customer  data.</>
      }
    },
    {
      title: "Rising expectations",
      description: {
        desktop: <>Fast pages, easy checkouts, and hyper-relevant context or  personalization are now the baseline, not a differentiator.</>,
        mobile: <>Fast pages, easy checkouts, and hyper-relevant  context or personalization are now the baseline,  not a differentiator.</>
      }
    },
    {
      title: "Peak-event spikes",
      description: {
        desktop: <>Launches and holiday sales can bring sudden massive traffic  that breaks fragile storefronts at the worst possible moment.</>,
        mobile: <>Launches and holiday sales can bring sudden  massive traffic that breaks fragile storefronts at  the worst possible moment.</>
      }
    },
    {
      title: "Margin and returns",
      description: {
        desktop: <>Discounting, shipping overheads, and reverse logistics squeeze  margins, making efficiency and customer retention essential.</>,
        mobile: <>Discounting, shipping overheads, and reverse  logistics squeeze margins, making efficiency  and customer retention essential.</>
      }
    }
  ];
  const channels = ['Online store', 'Mobile app', 'Marketplaces', 'In-store POS'];
  const systems = ['Real-time inventory', 'Customer profiles', 'Orders & fulfillment', 'Analytics'];
  const services = [
    {
      title: "E-Commerce Development",
      description: "Storefronts and headless commerce that convert.",
      href: "#"
    },
    {
      title: "SEO & AEO",
      description: "Get found in search and AI answers.",
      href: "#"
    },
    {
      title: "AI Automation",
      description: "Automate support, merchandising, and fulfillment.",
      href: "#"
    }
  ];
  return (
    <main>
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
    {/* --- MOBILE LAYOUT (< 768px) --- */}
<div className="flex flex-col items-start text-left px-4 md:hidden">
  {/* Industry Overview Kicker */}
  <div className="text-emerald-600 text-xs font-bold uppercase tracking-widest leading-5 mb-3">
    Industry Overview
  </div>
  
  {/* Main Heading */}
  <h2 className="w-96 max-w-full text-zinc-900 text-4xl font-black leading-10 mb-4">
    Technology in retail &  e-commerce.
  </h2>
  
  {/* Description Paragraph */}
  <p className="w-96 max-w-full text-gray-600 text-xl font-normal leading-8 mb-2">
    Shoppers no longer separate "online" from "in store" — they expect one brand, one cart, one experience. This is how retailers connect every channel into a single,seamless whole.
  </p>

  {/* Mobile Image Container */}
  <div className="w-96 max-w-full h-80 relative rounded-2xl overflow-hidden bg-transparent">
    <Image 
      src="/images/retail/vector.png" 
      alt="Retail technology channel overview"
      fill
      className="object-contain"
      priority
    />
  </div>
  </div>


        {/* --- DESKTOP LAYOUT (>= 768px) --- */}
        <div className="hidden md:flex flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Side Content Column */}
          <div className="flex flex-col space-y-6 max-w-[550px]">
            {/* Desktop Kicker */}
            <div className="w-40 h-3.5 text-fuchsia-700 text-xs font-bold  uppercase tracking-widest leading-5">
              Industry Overview
            </div>
            
            {/* Desktop Heading */}
            <h2 className="w-[705.90px] max-w-full text-zinc-900 text-4xl lg:text-5xl font-black ] leading-[1.1] lg:leading-[58.24px]">
              Technology in retail  & e-commerce.
            </h2>
            
            {/* Desktop Description */}
            <p className="w-[547.87px] max-w-full text-gray-600 text-xl font-normal  leading-8">
              Shoppers no longer separate "online" from "in store" — they  
              expect one brand, one cart, one experience. This is how  
              retailers connect every channel into a single, seamless  
              whole.
            </p>
          </div>

          {/* Right Side Image Column */}
          <div className="flex-shrink-0 relative w-[548px] h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/images/retail/vector.png" 
              alt="Retail technology channel overview"
              fill
              className="object-cover"
              sizes="548px"
              priority
            />
          </div>

        </div>
    </section>
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MOBILE LAYOUT (< 768px) --- */}
        <div className="flex flex-col items-start text-left space-y-3 md:hidden">
          {/* Subtitle / Kicker */}
          <div className="text-emerald-600 text-base font-bold uppercase tracking-widest leading-7">
            The shift
          </div>
          
          {/* Section Heading */}
          <h3 className="w-80 max-w-full text-zinc-900 text-2xl font-extrabold leading-10">
            One brand, many doorways
          </h3>
          
          {/* Description Block 1 */}
          <p className="w-96 max-w-full text-zinc-700 text-base font-normal leading-7">
            A customer might discover a product on social,
            research it on their phone, buy it on a laptop, and
            return it in a store — and they expect the brand
            to remember them at every step. The line
            between retail and e-commerce has effectively
            disappeared.
          </p>
          
          {/* Description Block 2 */}
          <p className="w-96 max-w-full text-zinc-700 text-base font-normal leading-7">
            That puts enormous pressure on the systems
            behind the scenes. When the website, point of
            sale, and warehouse all disagree about what's in
            stock, customers feel it immediately — and take
            their business elsewhere.
          </p>

          {/* Key Quote / Callout Block */}
          <div className="w-96 max-w-full text-zinc-900 text-xl font-semibold leading-8 pt-2">
            The winning experience isn't online
            or in store. It's whichever one the
            customer happens to be standing in.
          </div>
        </div>

        {/* --- DESKTOP LAYOUT (>= 768px) --- */}
        <div className="hidden md:flex flex-row items-start justify-between gap-12">
          
          {/* Left Column: Heading and Details */}
          <div className="flex flex-col space-y-6 max-w-[550px]">
            <div className="text-fuchsia-700 text-base font-bold uppercase tracking-widest leading-7">
              The shift
            </div>
            
            <h3 className="w-96 text-zinc-900 text-4xl font-extrabold leading-[55.44px]">
              One brand, many doorways
            </h3>
            
            <p className="w-[536.10px] max-w-full text-zinc-700 text-base font-normal leading-7">
              A customer might discover a product on social, research it on their
              phone, buy it on a laptop, and return it in a store — and they expect
              the brand to remember them at every step. The line between retail
              and e-commerce has effectively disappeared.
            </p>
            
            <p className="w-[527.05px] max-w-full text-zinc-700 text-base font-normal leading-7">
              That puts enormous pressure on the systems behind the scenes.
              When the website, point of sale, and warehouse all disagree about
              what's in stock, customers feel it immediately — and take their
              business elsewhere.
            </p>
          </div>

          {/* Right Column: Highlight Block with Emerald Accent Border */}
          <div className="w-[550px] max-w-full border-l-4 border-emerald-600 pl-7 py-2 mt-12">
            <blockquote className="w-[518.46px] max-w-full text-zinc-900 text-xl font-semibold leading-8 m-0">
              The winning experience isn't online or in store. It's
              whichever one the customer happens to be standing
              in.
            </blockquote>
          </div>

        </div>

      </div>
    </section>
<section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10">
          {/* Subtitle / Kicker */}
          <div className="w-39 h-5 mx-auto text-emerald-600 md:text-fuchsia-700 text-xs font-bold uppercase tracking-widest  mb-2">
            The pressures
          </div>
          
          {/* Heading */}
          <h3 className="block md:hidden w-96 max-w-full text-zinc-900 text-xl font-extrabold leading-10">
            What retailers are navigating
          </h3>
          <h3 className="hidden md:block w-[462.33px] max-w-full text-zinc-900 text-2xl font-extrabold leading-[55.44px]">
            What retailers are navigating
          </h3>
        </div>

        {/* --- CARDS WRAPPER --- */}
        {/* Mobile: Vertical stack | Desktop: 2x2 Grid Side-by-Side */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[384px] md:max-w-[1148px] justify-items-center">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="w-full max-w-sm md:max-w-[562px] min-h-[160px] md:min-h-[128px] bg-white rounded-2xl p-6 relative flex items-start gap-4 transition-all shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)]"
            >
              {/* Responsive Indicator Dot */}
              <div className="mt-2 flex-shrink-0 size-2 rounded-sm bg-gradient-to-br from-emerald-500 to-amber-500 md:from-fuchsia-700 md:to-fuchsia-700 md:bg-fuchsia-700" />
              
              {/* Content Block */}
              <div className="flex flex-col space-y-2">
                <h4 className="w-48 text-zinc-900 text-base font-bold leading-7">
                  {card.title}
                </h4>
                
                {/* Mobile Paragraph Layout */}
                <p className="block md:hidden w-60 max-w-full text-zinc-700 text-base font-normal leading-6">
                  {card.description.mobile}
                </p>
                
                {/* Desktop Paragraph Layout */}
                <p className="hidden md:block w-96 max-w-full text-zinc-700 text-base font-normal leading-6">
                  {card.description.desktop}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
<section className="w-full bg-white py-4 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
  <div className="w-full max-w-[1140px] flex flex-col items-center text-center">
    
    {/* --- HEADER --- */}
    <div className="mb-6">
      <div className="text-emerald-600 md:text-fuchsia-700 text-xs font-bold uppercase tracking-widest leading-5 mb-1">
        How it fits together
      </div>
      <h3 className="text-zinc-900 text-2xl md:text-4xl font-extrabold tracking-tight">
        The unified commerce core
      </h3>
    </div>

    {/* --- DIAGRAM CONTAINER --- */}
    
    {/* Desktop Diagram Container Layout */}
    <div className="hidden md:block w-[1140px] h-96 bg-white/0 rounded-3xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)] relative content-center">
      <div className="w-[1078px] h-80 relative overflow-hidden bg-white/0 rounded-3xl mx-auto">
        <Image 
          src="/images/retail/Diagram desktop.png"
          alt="The unified commerce core desktop architecture"
          fill
          className="object-contain"
          priority
          sizes="1078px"
        />
      </div>
      <p className="mt-4 text-gray-600 text-xs font-normal max-w-sm md:max-w-[546.50px] leading-5 mx-auto">
        Illustrative model — channels share one source of truth for stock, customers, and orders.
      </p>
    </div>

    {/* Mobile Diagram Container Layout */}
    <div className="block md:hidden w-80 h-40 relative overflow-hidden mx-auto bg-white rounded-2xl shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)]">
      <Image 
        src="/images/retail/Diagram mobile.png"
        alt="The unified commerce core mobile architecture"
        fill
        className="object-contain"
        priority
        sizes="320px"
      />
      <p className="absolute bottom-2 w-full text-gray-600 text-[4px] text-center leading-4 px-2">
        Illustrative model — channels share one source of truth for stock, customers, and orders.
      </p>
    </div>

  </div>
</section>

<section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Mobile Layout Stack */}
          <div className="flex flex-col space-y-12 md:hidden">
            {/* Core Box */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-zinc-900 text-2xl font-extrabold leading-10">
                Connect, personalize, convert
              </h3>
              <p className="text-zinc-700 text-base font-normal leading-7">
                A <span className="font-bold">unified core</span> means stock, orders, and customer history are the same everywhere — enabling buy-online-pick-up-in-store and accurate availability. <span className="font-bold">Personalization</span> tailors recommendations and offers to each shopper. <span className="font-bold">Speed and reliability</span> keep storefronts fast under load.
              </p>
              <p className="text-zinc-700 text-base font-normal leading-7">
                And <span className="font-bold">insight</span> ties it together: knowing which channels, products, and journeys actually drive revenue so you can invest where it counts.
              </p>
            </div>

            {/* Approach Box */}
            <div className="flex flex-col space-y-4">
              <div className="text-emerald-600 text-base font-bold uppercase tracking-widest leading-7">
                How Zoiko approaches it
              </div>
              <h3 className="text-zinc-900 text-2xl font-extrabold leading-10">
                Built around the shopper
              </h3>
              <p className="text-zinc-700 text-base font-normal leading-7">
                We start from the customer journey and work backward to the systems that support it. Whether that means a headless storefront, a cleaner integration between your store and warehouse, or conversion improvements on what you already have, we prioritize the changes that move revenue first.
              </p>
              <p className="text-zinc-700 text-base font-normal leading-7">
                The result is a brand that feels consistent and dependable in every place a customer meets it.
              </p>
            </div>
          </div>

          {/* Desktop Layout Side-by-Side Grid */}
          <div className="hidden md:grid grid-cols-2 gap-x-4 gap-y-12 items-start">
            {/* Column Left: Capabilities */}
            <div className="flex flex-col space-y-6 max-w-[536px]">
              <div className="text-fuchsia-700 text-base font-bold uppercase tracking-widest leading-7">
                Where technology helps
              </div>
              <h3 className="text-zinc-900 text-4xl font-extrabold leading-[55.44px]">
                Connect, personalize, convert
              </h3>
              <p className="text-zinc-700 text-base font-normal leading-7">
                A <span className="font-bold">unified core</span> means stock, orders, and customer history are the same everywhere — enabling buy-online-pick-up-in-store and accurate availability. <span className="font-bold">Personalization</span> tailors recommendations and offers to each shopper. <span className="font-bold">Speed and reliability</span> keep storefronts fast under load.
              </p>
              <p className="text-zinc-700 text-base font-normal leading-7">
                And <span className="font-bold">insight</span> ties it together: knowing which channels, products, and journeys actually drive revenue so you can invest where it counts.
              </p>
            </div>

            {/* Column Right: Method */}
            <div className="flex flex-col space-y-6 max-w-[550px]">
              <div className="text-fuchsia-700 text-base font-bold uppercase tracking-widest leading-7">
                How Zoiko approaches it
              </div>
              <h3 className="text-zinc-900 text-4xl font-extrabold leading-[55.44px]">
                Built around the shopper
              </h3>
              <p className="text-zinc-700 text-base font-normal leading-7">
                We start from the customer journey and work backward to the systems that support it. Whether that means a headless storefront, a cleaner integration between your store and warehouse, or conversion improvements on what you already have, we prioritize the changes that move revenue first.
              </p>
              <p className="text-zinc-700 text-base font-normal leading-7">
                The result is a brand that feels consistent and dependable in every place a customer meets it.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: RELATED SERVICES GRID
          ========================================================================= */}
      <section className="w-full py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1160px] mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-emerald-600 md:text-fuchsia-700 text-xs font-bold uppercase tracking-widest leading-5 mb-2">
              Explore further
            </div>
            <h3 className="text-zinc-900 text-2xl md:text-4xl font-extrabold tracking-tight">
              Related services
            </h3>
          </div>

          {/* Cards Wrapper (Mobile: stacked vertical | Desktop: 3-Column flex/grid combo) */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="w-full max-w-sm md:w-96 h-40 bg-white rounded-2xl p-6 relative flex flex-col justify-between border border-gray-200 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)]"
              >
                <div>
                  <h4 className="text-zinc-900 text-base font-bold leading-7 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-zinc-700 text-sm font-normal leading-6 max-w-[288px]">
                    {service.description}
                  </p>
                </div>
                <Link 
                  href="/learn"
                  className="text-emerald-600 md:text-fuchsia-700 text-sm font-bold leading-6 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CONVERSION CTA BLOCK
          ========================================================================= */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1092px] mx-auto">
          
          {/* Mobile Card Container */}
          <div className="block md:hidden w-80 min-h-80 mx-auto bg-gradient-to-b from-white to-emerald-50 border border-gray-200 rounded-3xl p-8 text-center flex flex-col items-center justify-center space-y-6 shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)]">
            <h3 className="text-zinc-900 text-2xl font-extrabold leading-10 max-w-[240px]">
              Working on something in this space?
            </h3>
            <p className="text-gray-600 text-base font-normal leading-7 max-w-[260px]">
              If you're connecting channels or rethinking your storefront, we're happy to talk it through.
            </p>
            <Link 
              href="#" 
              className="w-40 h-12 bg-emerald-600 hover:bg-emerald-700 transition-colors rounded-xl flex items-center justify-center text-white text-base font-bold leading-6 shadow-sm"
            >
              Get in touch →
            </Link>
          </div>

          {/* Desktop Card Container */}
          <div className="hidden md:flex w-[1092px] h-64 bg-gradient-to-b from-white to-emerald-50 border border-gray-200 rounded-3xl mx-auto flex-col items-center justify-center text-center p-8 relative shadow-[0px_12px_36px_-20px_rgba(16,18,24,0.30)] shadow-[0px_1px_2px_0px_rgba(16,18,24,0.04)]">
            <h3 className="text-zinc-900 text-2xl font-extrabold leading-10 mb-3">
              Working on something in this space?
            </h3>
            <p className="text-gray-600 text-base font-normal leading-7 max-w-[507px] mb-6">
              If you're connecting channels or rethinking your storefront, we're happy to talk it through.
            </p>
            <Link 
              href="#" 
              className="w-40 h-12 bg-fuchsia-700 hover:bg-fuchsia-800 transition-colors rounded-xl flex items-center justify-center text-white text-base font-bold leading-6 shadow-sm"
            >
              Get in touch →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}