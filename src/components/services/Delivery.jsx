import React from "react";
import { motion } from "framer-motion";

const DeliveryPartners = () => {
  const partners = [
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/",
      logo: "/assets/images/uber.png",
      description: "Order from our full menu and track your delivery live with Uber Eats.",
    },
    {
      name: "Just Eat",
      url: "https://www.just-eat.com/",
      logo: "/assets/images/justeat.png",
      description: "Get quick meals delivered straight to your door with Just Eat.",
    },
    {
      name: "Deliveroo",
      url: "https://deliveroo.co.uk/",
      logo: "/assets/images/delivery.webp",
      description: "Fresh food delivered fast — only on Deliveroo.",
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
      className="relative py-24 px-6 sm:px-12 lg:px-24 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/images/deliveryy.webp')", 
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Heading */}
      <motion.h2
        className="relative z-10 text-4xl sm:text-5xl font-extrabold text-yellow-500 text-center mb-16 tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Available On
      </motion.h2>

      {/* Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-14 max-w-6xl mx-auto">
        {partners.map(({ name, url, logo, description }, index) => (
          <motion.a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center backdrop-blur-md bg-white/10 border border-yellow-500/20 rounded-2xl p-8 sm:p-10 w-72 shadow-lg hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105 group"
          >
            <div className="relative mb-4">
              <img
                src={logo}
                alt={`${name} logo`}
                className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />
              <span className="absolute inset-0 rounded-full ring-2 ring-yellow-400/30 opacity-0 group-hover:opacity-100 transition duration-300"></span>
            </div>
            <span className="text-yellow-400 font-semibold text-xl tracking-wide mb-2">
              {name}
            </span>
            <p className="text-gray-200 text-sm leading-relaxed">
              {description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default DeliveryPartners;
