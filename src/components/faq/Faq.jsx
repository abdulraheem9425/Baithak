import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What type of cuisine does Baithak serve?",
    answer:
      "Baithak specializes in authentic South Asian dishes — combining traditional flavors with a modern twist for a unique dining experience.",
  },
  {
    question: "Do I need a reservation?",
    answer:
      "While walk-ins are welcome, we recommend reservations during peak hours to ensure a seamless experience.",
  },
  {
    question: "Can I book the venue for private events?",
    answer:
      "Yes, Baithak offers exclusive private bookings for intimate gatherings, corporate dinners, and special occasions.",
  },
  {
    question: "Are vegan or vegetarian options available?",
    answer:
      "Absolutely. We offer thoughtfully prepared vegetarian and vegan options. Please inform our team about your dietary needs.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We’re open daily from 12:00 PM to 11:00 PM. Extended hours available on request for private bookings.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24 px-6 sm:px-12 lg:px-24 text-white">
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold text-yellow-500 mb-16 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Frequently Asked <span className="text-red-600">Questions</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 border border-yellow-600/10 rounded-xl p-6 shadow-md transition-all duration-300"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-yellow-400"
              aria-expanded={activeIndex === index}
            >
              <span>{faq.question}</span>
              {activeIndex === index ? (
                <ChevronUp className="w-6 h-6 text-red-500" />
              ) : (
                <ChevronDown className="w-6 h-6 text-red-500" />
              )}
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="pt-4 text-gray-300 text-base"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
