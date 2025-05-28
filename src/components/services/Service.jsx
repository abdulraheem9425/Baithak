import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Dining In",
      description: "Enjoy a cozy atmosphere with premium service inside our restaurant.",
      icon: (
        <svg
          className="w-14 h-14 text-yellow-500 mb-5 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 10h16M6 14h.01M10 14h.01M14 14h.01M18 14h.01"
          />
        </svg>
      ),
    },
    {
      title: "Take Away",
      description: "Order your favorite meals and pick them up at your convenience.",
      icon: (
        <svg
          className="w-14 h-14 text-yellow-500 mb-5 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h2l3 9h8l3-9h2"
          />
          <circle cx="7" cy="21" r="1"></circle>
          <circle cx="17" cy="21" r="1"></circle>
        </svg>
      ),
    },
    {
      title: "Delivery",
      description: "Get your order delivered straight to your doorstep, fast and fresh.",
      icon: (
        <svg
          className="w-14 h-14 text-yellow-500 mb-5 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v13H3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16h18l-3 5H6l-3-5z" />
        </svg>
      ),
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="relative py-32 px-6 sm:px-12 lg:px-24 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/images/services.jpg')", // Replace with your actual image path
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <motion.h2
        className="relative z-10 text-4xl sm:text-5xl font-extrabold text-center mb-20 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our <span className="text-yellow-500">Services</span>
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl mx-auto">
        {services.map(({ title, description, icon }, index) => (
          <motion.div
            key={title}
            className="relative text-center p-10 rounded-2xl border border-yellow-500/20 bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300 group"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3 relative inline-block">
              {title}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-yellow-400 absolute bottom-0 left-0 rounded-full"></span>
            </h3>
            <p className="text-gray-200 text-base leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>

      {/* Custom bounce animation */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10%);
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Services;
