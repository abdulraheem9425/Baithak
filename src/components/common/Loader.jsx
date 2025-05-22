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
        <div className="text-yellow-500 text-6xl font-extrabold tracking-wider mb-4">
          🍽️
        </div>
        <h1 className="text-yellow-400 text-3xl font-bold tracking-widest mb-1">
          Baithak
        </h1>
        <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-widest">
          Loading<span className="animate-pulse">...</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default Loader;
