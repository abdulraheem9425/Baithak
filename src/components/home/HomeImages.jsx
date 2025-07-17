import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.8 } },
};

const MenuHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col lg:flex-row-reverse items-center justify-center overflow-hidden font-sans text-black">
      
      {/* Right Side - Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full lg:w-1/2 h-72 sm:h-96 md:h-[600px] lg:h-screen relative overflow-hidden shadow-l"
      >
        <img
          src="/assets/images/homebanner3.jpg"
          alt="Delicious dishes at Baithak 804"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />
      </motion.div>

      {/* Left Side - Text Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="w-full bg-black lg:w-1/2 min-h-[400px] flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 py-12 lg:py-0 text-center lg:text-left"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-red-600"
        >
          Explore Our <span className="text-yellow-400">Irresistible Menu</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
        >
          Dive into authentic Pakistani & Indian flavors with sizzling grills, aromatic curries, biryanis, and freshly baked breads.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md justify-center lg:justify-start"
        >
          <Link to="/menu">
            <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition duration-300">
              View Full Menu
            </button>
          </Link>

              <a
   href="tel:02087111740"
  className="w-full sm:w-auto bg-black text-yellow-400 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transition duration-300"
    aria-label="Call Baithak 804 at 020 8711 1740"
  >
    Book Your Table 
  </a>
        </motion.div>
      </motion.div>
    </section>

  );
};

export default MenuHero;
