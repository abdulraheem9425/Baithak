import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.8 } },
};

const gradientText = {
  background: "linear-gradient(90deg, #facc15, #ef4444, #fbbf24)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent", // iOS fix
  color: "transparent",
  animation: "gradientMove 4s ease infinite",
  backgroundSize: "200% 200%",
};

const HomeHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden font-sans pt-[env(safe-area-inset-top)]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        src="/assets/Baithaak.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controlsList="nodownload"
      />

      {/* Blurred Animated Shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-12 w-40 h-40 bg-yellow-400 opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-24 w-72 h-72 bg-red-500 opacity-15 rounded-full blur-3xl"
        />
      </div>

      {/* Overlay for dark contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="relative z-30 w-full px-4 sm:px-8 md:px-16 max-w-screen-lg text-center text-white py-24 sm:py-28 md:py-36"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-xl"
          style={gradientText}
        >
          Welcome to Baithak 804
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-14 drop-shadow-md"
        >
          Dive into the rich, authentic flavors of Pakistani and Indian cuisine in Leytonstone.
          Savor smoky BBQ, vibrant karahis, and freshly baked naans crafted with passion.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md mx-auto"
        >
          <Link
            to="/menu"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-black font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400"
          >
            View Menu
          </Link>
          <a
            href="https://www.instagram.com/baithak804/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-pink-500"
          >
            Follow Us on Instagram
          </a>
        </motion.div>
      </motion.div>

      {/* Gradient animation for text */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default HomeHero;
