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
        >
          🎉 50% OFF On Opening Week! 🎉
        </motion.div>

        {/* Logo */}
        <motion.img
          {...fadeIn}
          transition={{ duration: 1 }}
          src="/assets/images/logoo.png"
          alt="Baithak Logo"
          loading="lazy"
          className="mx-auto mb-6 sm:mb-10 w-20 sm:w-32 drop-shadow-lg"
        />

        {/* Heading */}
        <motion.h1
          {...fadeIn}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-3xl sm:text-5xl font-extrabold text-yellow-400 mb-4 sm:mb-6"
        >
          Get ready, London!
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-sm sm:text-lg text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto"
        >
          <span className="font-semibold text-yellow-300">Baithak</span> is bringing the authentic flavours of Pakistan to{" "}
          <span className="text-yellow-300">Leytonstone</span> — indulge in spicy karahis, smoky BBQ, and freshly baked naans.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex justify-center flex-wrap gap-3 text-base sm:text-xl font-mono mb-6"
        >
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md shadow hover:scale-105 transition"
            >
              <span className="font-bold">{timeLeft[unit]}</span>
              <span className="ml-1 capitalize text-xs">{unit}</span>
            </div>
          ))}
        </motion.div>

        {/* Launch Date */}
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-base sm:text-xl font-semibold text-orange-300 mb-6"
        >
          Grand Opening: <span className="text-white font-bold">31st May</span>
        </motion.p>

        {/* Address & Email */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xs sm:text-sm text-gray-300 mb-8"
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

        {/* Action Buttons */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10"
        >
          <a
            href="https://www.instagram.com/baithak"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold px-6 py-3 rounded-full shadow hover:scale-105 transition"
          >
            Follow Us on Instagram
          </a>
          <a
            href="/menu"
            className="bg-white text-black font-bold px-6 py-3 rounded-full shadow hover:scale-105 transition"
          >
            View Menu
          </a>
        </motion.div>

        {/* Hashtags */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-wrap justify-center gap-2 text-[10px] sm:text-xs text-white/70 max-w-2xl mx-auto"
        >
          {[
            "#BaithakLondon", "#PakistaniFood", "#HalalFoodLondon", "#KarahiLovers",
            "#LondonFoodies", "#LeytonstoneEats", "#DesiFoodUK", "#FoodieTikTok",
            "#HalalBBQ", "#ComingSoonLondon", "#PakistaniRestaurant", "#UKHalalEats",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-white/10 px-2 py-1 rounded-full hover:bg-white/20 transition"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
