import React from "react";
import { motion } from "framer-motion";

const AboutBaithak = () => {
  return (
<<<<<<< HEAD
    <section className="relative bg-black py-32 px-4 sm:px-6 text-white overflow-hidden">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 bg-[url('/assets/images/aboutbanner.jpg')] bg-cover bg-center bg-fixed opacity-60 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
=======
    <section className="relative bg-black py-28 px-6 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/images/aboutbanner.jpg')] bg-cover bg-center bg-fixed opacity-70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
>>>>>>> f288242 (Added)
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
          className="space-y-6 sm:space-y-8"
        >
          <header>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-yellow-400 leading-tight tracking-tight">
              Welcome to <span className="text-red-600">Baithak</span>
            </h2>
            <div className="mt-3 h-1 w-20 sm:w-24 bg-red-600 rounded-full" />
          </header>

          <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
            At Baithak, we believe food is more than nourishment — it’s an emotion. Rooted in South Asian tradition and reimagined with contemporary flair, we offer a dining experience that celebrates connection, comfort, and culture.
          </p>

          <p className="text-sm sm:text-base text-gray-300 font-semibold leading-relaxed">
            From soulful cups of chai to vibrant family dinners, every moment at Baithak is curated to feel intimate and inspiring. Our thoughtfully designed space blends warmth and elegance to make every guest feel at home.
          </p>

          <p className="text-sm sm:text-base text-gray-300 font-semibold leading-relaxed">
=======
          className=" p-8 rounded-3xl space-y-8 "
        >
          <header>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 leading-tight tracking-tight">
              Welcome to <span className="text-red-600">Baithak</span>
            </h2>
            <div className="mt-4 h-1 w-24 bg-red-600 rounded-full" />
          </header>

          <p className="text-lg text-gray-200 font-medium leading-relaxed">
            At Baithak, we believe food is more than nourishment — it’s an emotion. Rooted in South Asian tradition and reimagined with contemporary flair, we offer a dining experience that celebrates connection, comfort, and culture.
          </p>

          <p className="text-base text-gray-300 font-semibold leading-relaxed">
            From soulful cups of chai to vibrant family dinners, every moment at Baithak is curated to feel intimate and inspiring. Our thoughtfully designed space blends warmth and elegance to make every guest feel at home.
          </p>

          <p className="text-base text-gray-300 font-semibold leading-relaxed">
>>>>>>> f288242 (Added)
            With handpicked ingredients, rich flavors, and heartfelt hospitality, Baithak invites you to slow down, savor deeply, and create lasting memories — one meal at a time.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
          className="rounded-2xl overflow-hidden"
=======
          className="hidden md:block rounded-3xl overflow-hidden "
>>>>>>> f288242 (Added)
        >
          <img
            src="/assets/images/abouts.jpg"
            alt="Inside Baithak"
            loading="lazy"
<<<<<<< HEAD
            className="w-full h-auto object-cover max-h-[400px] sm:max-h-[300px] w-[500px] rounded-xl shadow-lg"
=======
            className="object-cover w-full h-full transition-transform duration-700 ease-in-out hover:scale-105"
>>>>>>> f288242 (Added)
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBaithak;
