import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section
 className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] md:h-[100vh] w-full flex items-center justify-center"      style={{ backgroundImage: "url('/assets/images/banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 sm:px-8">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Welcome to <span className="text-yellow-500">Baithak</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
          Discover the taste of tradition with our premium meals, event catering, and elegant dine-in experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/menu"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75"
          >
            Explore Menu
          </Link>
          <Link
            to="/contact"
            className="border border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
