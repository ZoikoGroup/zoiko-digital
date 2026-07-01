export default function CTASection() {
  return (
    <section className="bg-linear-57 from-indigo-950 via-teal-400 to-teal-700 dark:bg-gray-900 py-16 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center text-center">
          
          {/* Heading */}
          <h2 className="text-white dark:text-white text-2xl sm:text-3xl lg:text-4xl font-semibold max-w-2xl leading-tight mb-10 px-2">
            Partner with Zoiko Digital to Redefine Your Digital Future.
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto max-w-md sm:max-w-none px-4 sm:px-0">
            <button
              className="
                w-full
                sm:w-auto
                bg-white
                dark:bg-white
                text-zinc-600
                dark:text-zinc-900
                px-8
                py-4
                rounded-full
                font-semibold
                shadow-[0px_10px_30px_rgba(144,80,159,0.30)]
                hover:scale-105
                transition-all
                duration-300
                whitespace-nowrap
              "
            >
              Request a Consultation
            </button>

            <button
              className="
                w-full
                sm:w-auto
                border-2
                border-white
                text-white
                dark:text-white
                dark:border-white
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-white
                hover:text-black
                dark:hover:bg-white
                dark:hover:text-gray-900
                transition-all
                duration-300
                whitespace-nowrap
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