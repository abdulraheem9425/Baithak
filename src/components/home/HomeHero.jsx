import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HomeHero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-2"
        src="/assets/images/Baithak.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="relative z-20 text-center text-white px-6 sm:px-8"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-6xl font-extrabold leading-tight mb-5 drop-shadow-lg"
        >
          Welcome to <span className="text-yellow-400">Baithak</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-base sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md"
        >
          Discover the taste of tradition with our premium meals, event catering,
          and elegant dine-in experience.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >
          <Link
            to="/menu"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 text-sm sm:text-base"
          >
            Explore Menu
          </Link>
          <Link
            to="/contact"
            className="border border-yellow-400 hover:bg-yellow-500 text-yellow-400 hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg text-sm sm:text-base"
          >
            Book a Table
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeHero;