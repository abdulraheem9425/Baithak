import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.15, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Logo or Icon */}
        <div className="text-yellow-500 text-6xl md:text-7xl font-extrabold tracking-wider mb-4">
          🍽️
        </div>

        {/* Brand Name */}
        <h1 className="text-yellow-400 text-3xl md:text-4xl font-bold tracking-widest mb-1 uppercase drop-shadow-md">
          Baithak 804
        </h1>

        {/* Loading Text */}
        <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-widest animate-pulse">
          Loading<span className="text-yellow-500">...</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default Loader;
