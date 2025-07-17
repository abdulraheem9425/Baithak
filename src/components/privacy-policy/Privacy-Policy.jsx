import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const fadeUp = {
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
      title: "1. Information We Collect",
      content:
        "We may collect your name, contact details, and any information you provide through forms or while making reservations/orders on our website.",
    },
    {
      title: "2. How We Use Information",
      content:
        "We use your data to improve your dining experience, process orders or reservations, send occasional updates, and respond to inquiries.",
    },
    {
      title: "3. Data Security",
      content:
        "Your information is stored securely and not shared with third parties except as required by law. We implement modern security protocols to protect your data.",
    },
    {
      title: "4. Cookies",
      content:
        "Our website may use cookies to enhance user experience. You can disable cookies through your browser settings without affecting access to our site.",
    },
    {
      title: "5. Third-Party Links",
      content:
        "We may link to third-party websites for convenience. We are not responsible for their privacy practices and encourage you to review their policies.",
    },
    {
      title: "6. Policy Updates",
      content:
        "Baithak reserves the right to modify this privacy policy. Updates will be reflected on this page. Continued use of our services implies your consent.",
    },
  ];

  return (
    <section
      className="relative bg-black  py-28 px-4 sm:px-8 md:px-16 lg:px-24 text-white"
      style={{
        backgroundImage: "url('/assets/images/services.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-center"
        >
          Privacy <span className="text-yellow-500">Policy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
        >
          Your privacy matters to us. This policy outlines how we collect, use,
          and protect your information.
        </motion.p>

        {/* Policy Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-200 text-base leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
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

export default PrivacyPolicy;
