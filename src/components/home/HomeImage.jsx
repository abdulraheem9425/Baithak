import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.8 } },
};

const BaithakHero = () => {
  return (
    <>
      {/* SEO for Baithak 804 */}
      <Helmet>
        <title>Baithak 804</title>
        <meta
          name="description"
          content="Baithak 804 offers traditional desi food in Leytonstone, London. Visit us for authentic Pakistani and Indian cuisine at baithak 804 High Road."
        />
        <meta
          name="keywords"
          content="Baithak 804, 804 High Road, Pakistani Restaurant London, Indian Food Leytonstone, Desi Cuisine, Halal Food London"
        />
        <link rel="canonical" href="https://baithak804.com" />

        <meta property="og:title" content="Baithak 804 Authentic Cuisine in Leytonstone London" />
        <meta
          property="og:description"
          content="Discover Baithak 804 at 804 High Road, London. Experience Pakistani and Indian food made with tradition and care."
        />
        <meta property="og:image" content="/assets/images/logoo.png" />
        <meta property="og:url" content="https://baithak804.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Baithak 804 Traditional Desi Food in London" />
        <meta
          name="twitter:description"
          content="Baithak 804 serves delicious Pakistani and Indian cuisine in London. Visit us today!"
        />
        <meta name="twitter:image" content="/assets/images/og-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="flex bg-black flex-col lg:flex-row min-h-screen bg-fixed font-sans">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 h-72 sm:h-96 md:h-[600px] lg:h-screen relative overflow-hidden">
          <motion.img
            src="/assets/images/home.webp"
            alt="Baithak 804 Front View"
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Right Content */}
        <motion.div
          className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] md:h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 bg-cover bg-center"
          style={{ backgroundImage: `url("/assets/images/homesecond.webp")` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black/50 z-0" />

          <motion.div
            className="relative z-10 max-w-xl text-center sm:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-yellow-400 text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-extrabold mb-6 leading-tight drop-shadow-lg"
            >
              Welcome to <span className="text-red-600">Baithak 804</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-8"
            >
              Authentic Pakistani and Indian cuisine at{" "}
              <span className="text-yellow-300 font-semibold">804 High Road, Leytonstone</span>. Join us at{" "}
              <strong>Baithak 804</strong> and taste traditional desi dishes made with heart.
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center">
              <Link to="/about" aria-label="Learn more about Baithak 804">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-base sm:text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/70">
                  About Baithak 804
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default BaithakHero;
