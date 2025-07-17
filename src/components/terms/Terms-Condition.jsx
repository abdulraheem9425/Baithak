import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const fadeInUp = {
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

  const sections = [
    {
      title: "Welcome to Baithak",
      content:
        "By using our services, you agree to comply with and be bound by the following terms and conditions.",
    },
    {
      title: "Dining In",
      content:
        "Reservations are recommended for dine-in services. Please arrive on time and inform the staff of any dietary restrictions or allergies.",
    },
    {
      title: "Take Away",
      content:
        "Place your orders through our website, app, or by calling the restaurant. Once confirmed, orders cannot be changed or cancelled.",
    },
    {
      title: "Delivery",
      content:
        "We offer delivery within designated areas. Delivery times may vary based on location, traffic, and weather conditions.",
    },
    {
      title: "Orders & Payments",
      content:
        "We accept various forms of payment including cash, credit/debit cards, and online transfers. Prices are inclusive of applicable taxes.",
    },
    {
      title: "Health & Safety",
      content:
        "We adhere to strict hygiene standards. Customers are requested to follow safety protocols and cooperate with staff instructions.",
    },
    {
      title: "Promotions & Competitions",
      content:
        "All promotional offers are subject to terms and may change without prior notice. Winners of any contests will be contacted directly.",
    },
    {
      title: "Loyalty Programs",
      content:
        "Points earned through our loyalty program are non-transferable and must be used within the validity period.",
    },
    {
      title: "Changes to Terms",
      content:
        "Baithak reserves the right to modify these terms at any time. Continued use of our services constitutes acceptance of the updated terms.",
    },
    {
      title: "Contact Us",
      content:
        "For any queries or concerns, please contact us at support@baithak.com or visit the contact section on our website.",
    },
  ];

  return (
    <section
      className="relative bg-black py-24 px-4 sm:px-8 md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/assets/images/services.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Terms & <span className="text-yellow-500">Conditions</span>
        </motion.h1>

        <div className="space-y-10 sm:space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="border-l-4 border-yellow-500 pl-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
          <div className="text-center pt-10">
          <a
            href="/"
            className="inline-block text-yellow-400 hover:text-white border border-yellow-400 hover:border-white transition duration-300 rounded-full px-6 py-2"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
