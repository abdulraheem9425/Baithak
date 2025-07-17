import React from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async'; 

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutBaithak = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative bg-black py-20 px-4 sm:px-6 md:py-32 text-white overflow-hidden"
    >
      <Helmet>
        <title>About Baithak 804</title>
        <meta
          name="description"
          content="Baithak 804 in London offers authentic South Asian homestyle flavors in a cozy setting. Explore our story of culture, food, and hospitality."
        />
        <meta property="og:title" content="About Baithak 804 | Authentic South Asian Cuisine" />
        <meta
          property="og:description"
          content="Join us at Baithak 804, a place to sit, gather and enjoy nostalgic South Asian food in the heart of London."
        />
        <meta property="og:image" content="/assets/images/logoo.png" />
        <meta property="og:type" content="restaurant" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content="https://baithak804.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Baithak 804 Authentic South Asian Cuisine" />
        <meta
          name="twitter:description"
          content="Baithak 804 brings authentic South Asian food in a cozy London setting. Dine with soul."
        />
        <meta name="twitter:image" content="/assets/images/logoo.png" />
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Baithak 804",
            "image": "https://baithak804.com/assets/images/logoo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "722 High Road, Leytonstone",
              "addressLocality": "London",
              "postalCode": "E11 3AJ",
              "addressCountry": "UK"
            },
            "telephone": "+44-20-8711-1740",
            "url": "https://baithak804.com",
            "servesCuisine": "South Asian",
            "priceRange": "££",
            "openingHours": "Mo-Su 11:00-23:00"
          }
        `}
        </script>
      </Helmet>

      <motion.div
        className="absolute inset-0 bg-[url('/assets/images/aboutbanner.webp')] bg-cover bg-center md:bg-fixed opacity-60 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 sm:space-y-8 p-6 md:p-8 rounded-3xl bg-black/10 backdrop-blur-md"
        >
          <motion.header variants={itemVariants}>
            <h1
              id="about-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 leading-tight tracking-tight"
            >
              Welcome to <span className="text-red-600">Baithak 804</span>
            </h1>
            <div className="mt-3 h-1 w-16 sm:w-20 md:w-24 bg-red-600 rounded-full" />
          </motion.header>

          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-gray-200 font-medium leading-relaxed">
            At the heart of London, Baithak 804 is more than just a restaurant. It is a place where stories are shared over steaming cups of chai, laughter echoes between bites, and memories are made around the table.
          </motion.p>

          <motion.p variants={itemVariants} className="text-xs sm:text-sm md:text-base text-gray-300 font-semibold leading-relaxed">
            Inspired by the rich traditions of South Asian hospitality, Baithak means a place to sit and gather. It brings you authentic homestyle flavours in a cozy and modern setting. Whether you are craving a hearty breakfast, nostalgic street food or a full traditional meal, our menu is crafted to satisfy both the soul and the palate.
          </motion.p>

          <motion.p variants={itemVariants} className="text-xs sm:text-sm md:text-base text-gray-300 font-semibold leading-relaxed">
            We have designed Baithak 804 to feel like a second home  warm, welcoming and filled with aromas that take you back to your roots.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-3xl overflow-hidden shadow-xl max-w-full max-h-[250px] sm:max-h-[400px] md:max-h-[500px] mx-auto cursor-pointer"
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.98 }}
          aria-label="Cozy interior view of Baithak 804 restaurant in London"
        >
          <img
            src="/assets/images/abouts.webp"
            alt="Interior view of Baithak 804 restaurant in London with cozy seating"
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-700 ease-in-out"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBaithak;
