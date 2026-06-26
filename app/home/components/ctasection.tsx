export default function CTASection() {
  return (
    <section className="bg-linear-57 from-indigo-950 via-teal-400 to-teal-700 to 91% py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold max-w-2xl leading-tight mb-10">
            Partner with Zoiko Digital to Redefine Your Digital Future.
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button
              className="
                bg-white
                text-zinc-600
                px-8
                py-4
                rounded-full
                font-semibold
                shadow-[0px_10px_30px_rgba(144,80,159,0.30)]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Request a Consultation
            </button>

            <button
              className="
                border-2
                border-white
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              Access Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}