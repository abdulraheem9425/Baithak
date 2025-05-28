import React from "react";
import { Link } from "react-router-dom";


const BaithakHero = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen overflow-hidden">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-[600px] md:h-full">
        <img
          src="/assets/images/home.jpg"
          alt="Baithak Food"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 relative h-[600px] bg-red-600 md:h-full">
        <img
          src="/assets/images/homesecond.jpg"
          alt="Baithak Background"
          className="w-full h-full object-cover brightness-50 absolute inset-0 z-2"
        />
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-10 md:py-0 md:px-16 text-white h-full">
          <h2 className="text-yellow-300 text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            The Finest Pakistani & Indian Cuisine
          </h2>
          <p className="text-sm sm:text-base leading-relaxed max-w-xl">
            At Baithak, we take immense pride in serving authentic desi cuisine,
            using only the freshest ingredients and traditional recipes. From the
            rich, slow-cooked Nihari to the aromatic Biryani, every bite is a
            journey through the heart of the subcontinent.
          </p>
        <Link to="about">  <button   className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-5 rounded-full shadow-md">
            About Baithak
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default BaithakHero;
