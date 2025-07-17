import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const BaithakAbout = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 md:px-20 font-sans"
      style={{
        backgroundImage: "url('/assets/images/aboutmis.jpg')",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto text-white text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-yellow-400 tracking-wide uppercase relative inline-block">
          About Baithak
          <span className="block h-1 w-20 bg-yellow-400 mx-auto mt-3 rounded-full" />
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-stretch">
          {/* Mission */}
          <div className="group flex-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="absolute inset-0 rounded-3xl border-2 border-yellow-400 opacity-10 group-hover:opacity-30 animate-pulse z-0" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="text-yellow-400 text-5xl sm:text-6xl mb-5 flex justify-center animate-pulse drop-shadow-lg">
                <FaBullseye />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 tracking-wider uppercase text-yellow-300">
                Our Mission
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-md">
                To bring the authentic flavours of Pakistani and Indian cuisine to your
                table — crafted with love, heritage, and a touch of nostalgia. We
                believe in making every meal a memory.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group flex-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="absolute inset-0 rounded-3xl border-2 border-yellow-400 opacity-10 group-hover:opacity-30 animate-pulse z-0" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="text-yellow-400 text-5xl sm:text-6xl mb-5 flex justify-center animate-pulse drop-shadow-lg">
                <FaEye />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 tracking-wider uppercase text-yellow-300">
                Our Vision
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-md">
                To become the ultimate destination for South Asian culinary lovers —
                spreading love, culture, and community through timeless flavors and
                elegant hospitality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaithakAbout;
