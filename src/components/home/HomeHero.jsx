import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HomeHero = () => {
  return (
    <section
<<<<<<< HEAD
      className="relative bg-cover bg-fixed bg-center bg-no-repeat min-h-[100vh] sm:min-h-[100vh] md:min-h-screen w-full flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/images/banner.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-0" />
=======
      className="relative bg-cover bg-fixed bg-center bg-no-repeat min-h-[80vh] md:h-[100vh] w-full flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/images/banner.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent  z-0" />
>>>>>>> f288242 (Added)

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
<<<<<<< HEAD
        className="relative z-10 text-center text-white px-4 sm:px-6"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
=======
        className="relative z-10 text-center text-white px-6 sm:px-8"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-6xl font-extrabold leading-tight mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
>>>>>>> f288242 (Added)
        >
          Welcome to <span className="text-yellow-400">Baithak</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
<<<<<<< HEAD
          className="text-sm sm:text-base md:text-xl text-gray-200 mb-8 max-w-xl mx-auto drop-shadow-md"
=======
          className="text-base sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md"
>>>>>>> f288242 (Added)
        >
          Discover the taste of tradition with our premium meals, event catering, and elegant dine-in experience.
        </motion.p>

        <motion.div
          variants={fadeUp}
<<<<<<< HEAD
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6"
        >
          <Link
            to="/menu"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition duration-300 text-sm sm:text-base"
=======
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/menu"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
>>>>>>> f288242 (Added)
          >
            Explore Menu
          </Link>
          <Link
            to="/contact"
<<<<<<< HEAD
            className="border border-yellow-400 hover:bg-yellow-500 text-yellow-400 hover:text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full transition duration-300 shadow-lg text-sm sm:text-base"
=======
            className="border border-yellow-400 hover:bg-yellow-500 text-yellow-400 hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg"
>>>>>>> f288242 (Added)
          >
            Book a Table
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
