import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Dining In",
      description: "Enjoy a cozy atmosphere with premium service inside our restaurant.",
      icon: (
        <svg
          className="w-14 h-14 text-yellow-400 mb-6 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
          className="w-14 h-14 text-yellow-400 mb-6 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h2l3 9h8l3-9h2" />
          <circle cx="7" cy="21" r="1" />
          <circle cx="17" cy="21" r="1" />
        </svg>
      ),
    },
    {
      title: "Delivery",
      description: "Get your order delivered straight to your doorstep, fast and fresh.",
      icon: (
        <svg
          className="w-14 h-14 text-yellow-400 mb-6 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-24 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/services.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <motion.h2
        className="relative z-10 text-4xl sm:text-5xl font-extrabold text-center mb-20 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Our <span className="text-yellow-500">Services</span>
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map(({ title, description, icon }, index) => (
          <motion.div
            key={title}
            className="group text-center p-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.05] hover:shadow-yellow-500/30"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2 relative inline-block">
              {title}
              <span className="block h-1 max-w-0 group-hover:max-w-full bg-yellow-400 transition-all duration-500 absolute bottom-0 left-0 rounded-full"></span>
            </h3>
            <p className="text-gray-200 mt-3 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>

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
