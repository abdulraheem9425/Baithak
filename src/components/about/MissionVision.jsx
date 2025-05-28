import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const BaithakAbout = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-28 px-6 md:px-20"
      style={{
        backgroundImage: "url('/assets/images/aboutmis.jpg')", // Replace with your actual image path
        backgroundAttachment: "fixed",
        
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-16 text-yellow-400 relative inline-block">
          About Baithak
          <span className="block h-1 w-20 bg-yellow-400 mx-auto mt-3 rounded-full" />
        </h1>

        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Mission */}
          <div className="group flex-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-yellow-400 opacity-10 group-hover:opacity-30 animate-pulse z-0" />
            <div className="relative z-10">
              <div className="text-yellow-400 text-6xl mb-6 flex justify-center animate-pulse drop-shadow-lg">
                <FaBullseye />
              </div>
              <h2 className="text-2xl font-bold mb-4 tracking-wide">Our Mission</h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                To bring the authentic flavours of Pakistani and Indian cuisine to your
                table — crafted with love, heritage, and a touch of nostalgia. We
                believe in making every meal a memory.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group flex-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-yellow-400 opacity-10 group-hover:opacity-30 animate-pulse z-0" />
            <div className="relative z-10">
              <div className="text-yellow-400 text-6xl mb-6 flex justify-center animate-pulse drop-shadow-lg">
                <FaEye />
              </div>
              <h2 className="text-2xl font-bold mb-4 tracking-wide">Our Vision</h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
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
