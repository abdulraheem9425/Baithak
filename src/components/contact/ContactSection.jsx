import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-black via-black to-black text-white px-6 sm:px-12 lg:px-24"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-yellow-500 mb-20 tracking-wide"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Get In <span className="text-red-500">Touch</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <Mail className="text-yellow-500 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Email</h3>
              <a
                href="mailto:info@baithak.com"
                className="text-gray-300 hover:text-yellow-500 transition"
              >
                           info@baithak.com              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-yellow-500 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Phone</h3>
              <a
                href="tel:+44 7448 653820"
                className="text-gray-300 hover:text-yellow-500 transition"
              >
            +44 7448 653820
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-yellow-500 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Address</h3>
          <a
  href="https://maps.google.com/?q=722+High+Road,+Leytonstone,+London,+UK"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-yellow-500 transition"
>
  722 High Road, Leytonstone, London, UK
</a>

            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-lg space-y-6 border border-yellow-500/10"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message submitted! (Add real functionality here)");
          }}
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-yellow-500 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-yellow-500 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-yellow-500 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-500"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
