import React from "react";
import { motion } from "framer-motion";

const DeliveryPartners = () => {
  const partners = [
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/store/baithak804/Lz154jJsRFyMdHvZIGlG6Q?diningMode=DELIVERY",
      logo: "/assets/images/uber.png",
      description: "Order from our full menu and track your delivery live with Uber Eats.",
    },
    {
      name: "Just Eat",
      url: "https://www.just-eat.co.uk/restaurants-baithak804-leytonstone/menu#category_011facd3-fa7d-44da-8347-bb44a0debab0",
      logo: "/assets/images/justeat.png",
      description: "Get quick meals delivered straight to your door with Just Eat.",
    },
    {
      name: "Deliveroo",
      url: "https://deliveroo.co.uk/menu/London/leyton/baithak804-722-high-road-leytonstone?day=today&geohash=u10j27czgr0w&time=ASAP",
      logo: "/assets/images/delivery.webp",
      description: "Fresh food delivered fast — only on Deliveroo.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="relative py-20 sm:py-28 px-4 sm:px-10 lg:px-24 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/assets/images/deliveryy.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Heading */}
      <motion.h2
        className="relative z-10 text-3xl sm:text-5xl font-extrabold text-yellow-400 text-center mb-14 sm:mb-16 tracking-wider uppercase"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Available On
      </motion.h2>

      {/* Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 sm:gap-12 max-w-6xl mx-auto">
        {partners.map(({ name, url, logo, description }, index) => (
          <motion.a
            key={name}
            href={url}
            target=""
            rel="noopener noreferrer"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group flex flex-col items-center text-center backdrop-blur-md bg-white/10 border border-yellow-500/20 rounded-2xl p-6 sm:p-8 w-full sm:w-[18rem] shadow-md hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105 hover:bg-white/20 overflow-hidden"
            aria-label={`Order with ${name}`}
          >
            {/* Glow Animation Background */}
            <div className="absolute inset-0 scale-0 group-hover:scale-105 transition-transform duration-500 opacity-10 group-hover:opacity-30 bg-yellow-500 rounded-2xl blur-xl z-0" />

            {/* Logo */}
            <div className="relative mb-4 z-10">
              <img
                src={logo}
                alt={`${name} logo`}
                className="h-16 sm:h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
              <span className="absolute inset-0 rounded-full ring-2 ring-yellow-300/40 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition duration-300" />
            </div>

            {/* Title */}
            <span className="z-10 text-yellow-400 font-semibold text-lg sm:text-xl tracking-wide mb-2">
              {name}
            </span>

            {/* Description */}
            <p className="z-10 text-gray-200 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default DeliveryPartners;
