import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BaithakLaunchPromo() {
  const launchDate = new Date("2025-05-31T00:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
<<<<<<< HEAD
      className="relative bg-cover bg-center bg-no-repeat bg-fixed text-white h-auto lg:h-[140vh]"
      style={{ backgroundImage: "url('/assets/images/promotion.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-yellow-900/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        {/* Promo Badge */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 1 }}
          className="mb-6 sm:mb-8 bg-yellow-400 text-black font-extrabold px-5 py-2 rounded-full shadow-lg text-sm sm:text-lg w-max mx-auto animate-pulse"
=======
      className="relative bg-cover bg-center h-[140vh] bg-no-repeat bg-fixed text-white"
      style={{ backgroundImage: "url('/assets/images/promotion.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/50 to-yellow-900/30 " />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">

        {/* 50% OFF Ribbon */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 1 }}
          className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-extrabold px-6 py-2 rounded-full shadow-lg text-lg md:text-2xl animate-pulse select-none"
          style={{ zIndex: 20 }}
          aria-label="Special Launch Offer: 50% Off!"
>>>>>>> f288242 (Added)
        >
          🎉 50% OFF On Opening Week! 🎉
        </motion.div>

<<<<<<< HEAD
        {/* Logo */}
=======
>>>>>>> f288242 (Added)
        <motion.img
          {...fadeIn}
          transition={{ duration: 1 }}
          src="/assets/images/logoo.png"
          alt="Baithak Logo"
<<<<<<< HEAD
          loading="lazy"
          className="mx-auto mb-6 sm:mb-10 w-20 sm:w-32 drop-shadow-lg"
        />

        {/* Heading */}
        <motion.h1
          {...fadeIn}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-3xl sm:text-5xl font-extrabold text-yellow-400 mb-4 sm:mb-6"
=======
          className="mx-auto mb-10 w-28 md:w-44 drop-shadow-[0_5px_30px_rgba(255,255,255,0.2)] relative z-10"
        />

        <motion.h1
          {...fadeIn}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl md:text-6xl font-black text-yellow-400 mb-4 tracking-tight drop-shadow-xl relative z-10"
>>>>>>> f288242 (Added)
        >
          Get ready, London!
        </motion.h1>

<<<<<<< HEAD
        {/* Subtext */}
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-sm sm:text-lg text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto"
=======
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-2xl font-light text-gray-200 mb-10 max-w-3xl mx-auto relative z-10"
>>>>>>> f288242 (Added)
        >
          <span className="font-semibold text-yellow-300">Baithak</span> is bringing the authentic flavours of Pakistan to{" "}
          <span className="text-yellow-300">Leytonstone</span> — indulge in spicy karahis, smoky BBQ, and freshly baked naans.
        </motion.p>

<<<<<<< HEAD
        {/* Countdown Timer */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex justify-center flex-wrap gap-3 text-base sm:text-xl font-mono mb-6"
=======
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex justify-center gap-4 mb-8 font-mono text-2xl relative z-10"
>>>>>>> f288242 (Added)
        >
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
<<<<<<< HEAD
              className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md shadow hover:scale-105 transition"
            >
              <span className="font-bold">{timeLeft[unit]}</span>
              <span className="ml-1 capitalize text-xs">{unit}</span>
=======
              className="bg-white/10 px-5 py-3 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition-transform"
            >
              {timeLeft[unit]}<span className="text-sm lowercase ml-1">{unit[0]}</span>
>>>>>>> f288242 (Added)
            </div>
          ))}
        </motion.div>

<<<<<<< HEAD
        {/* Launch Date */}
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-base sm:text-xl font-semibold text-orange-300 mb-6"
=======
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-xl font-semibold text-orange-300 mb-8 relative z-10"
>>>>>>> f288242 (Added)
        >
          Grand Opening: <span className="text-white font-bold">31st May</span>
        </motion.p>

<<<<<<< HEAD
        {/* Address & Email */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xs sm:text-sm text-gray-300 mb-8"
=======
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-sm text-gray-300 mb-10 relative z-10"
>>>>>>> f288242 (Added)
        >
          📍 722 High Rd Leytonstone, London E11 3AJ <br />
          📧{" "}
          <a
            href="mailto:baithaklatin@gmail.com"
            className="underline text-blue-400 hover:text-blue-300"
          >
            baithaklatin@gmail.com
          </a>
        </motion.div>

<<<<<<< HEAD
        {/* Action Buttons */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10"
=======
        <motion.div
          {...fadeIn}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 relative z-10"
>>>>>>> f288242 (Added)
        >
          <a
            href="https://www.instagram.com/baithak"
            target="_blank"
            rel="noopener noreferrer"
<<<<<<< HEAD
            className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold px-6 py-3 rounded-full shadow hover:scale-105 transition"
=======
            className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
>>>>>>> f288242 (Added)
          >
            Follow Us on Instagram
          </a>
          <a
            href="/menu"
<<<<<<< HEAD
            className="bg-white text-black font-bold px-6 py-3 rounded-full shadow hover:scale-105 transition"
=======
            className="bg-white text-black font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
>>>>>>> f288242 (Added)
          >
            View Menu
          </a>
        </motion.div>

<<<<<<< HEAD
        {/* Hashtags */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-wrap justify-center gap-2 text-[10px] sm:text-xs text-white/70 max-w-2xl mx-auto"
=======
        <motion.div
          {...fadeIn}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-wrap justify-center gap-2 text-xs text-white/70 max-w-3xl mx-auto relative z-10"
>>>>>>> f288242 (Added)
        >
          {[
            "#BaithakLondon", "#PakistaniFood", "#HalalFoodLondon", "#KarahiLovers",
            "#LondonFoodies", "#LeytonstoneEats", "#DesiFoodUK", "#FoodieTikTok",
            "#HalalBBQ", "#ComingSoonLondon", "#PakistaniRestaurant", "#UKHalalEats",
          ].map((tag) => (
            <span
              key={tag}
<<<<<<< HEAD
              className="bg-white/10 px-2 py-1 rounded-full hover:bg-white/20 transition"
=======
              className="bg-white/10 px-2 py-1 rounded-full hover:bg-white/20 transition select-none"
>>>>>>> f288242 (Added)
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
