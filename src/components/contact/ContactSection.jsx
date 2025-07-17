import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    Icon: Mail,
    title: "Email",
    content: "info@baithak.com",
    href: "mailto:info@baithak.com",
  },
  {
    Icon: Phone,
    title: "Phone",
    content: "020 8711 1740",
    href: "tel:02087111740",
  },
  {
    Icon: MapPin,
    title: "Address",
    content: "722 High Road, Leytonstone, London, UK",
    href: "https://maps.google.com/?q=722+High+Road,+Leytonstone,+London,+UK",
  },
];

// Animations
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const formVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const res = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        e.target.reset(); // clear form
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Failed to submit the form.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main
      id="contact"
      className="py-36 bg-gradient-to-b from-black via-zinc-900 to-black text-white px-4 sm:px-8 md:px-12 lg:px-24 font-poppins"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-16 sm:mb-20 tracking-tight sm:tracking-wide drop-shadow-lg"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Get In <span className="text-red-500">Touch</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {contactInfo.map(({ Icon, title, content, href }, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-5 group"
              variants={itemVariants}
              tabIndex={0}
              role="region"
              aria-label={title}
            >
              <Icon className="text-yellow-500 w-7 h-7 mt-1 group-hover:animate-pulse transition-transform duration-300" />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-1">{title}</h3>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-base sm:text-lg break-words"
                >
                  {content}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-yellow-500/20 hover:ring-2 hover:ring-yellow-400/40 transition duration-300"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          {submitted ? (
            <motion.p
              className="text-green-400 text-lg text-center font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Thank you! Your message has been submitted.
            </motion.p>
          ) : (
            <>
              {["Name", "Email", "Message"].map((label, idx) => {
                const id = label.toLowerCase();
                const isTextarea = label === "Message";

                return (
                  <div key={idx} className="mb-6 last:mb-0">
                    <label
                      htmlFor={id}
                      className="block mb-2 text-yellow-400 font-medium text-sm sm:text-base"
                    >
                      {label}
                    </label>
                    {isTextarea ? (
                      <textarea
                        id={id}
                        name={id}
                        rows="5"
                        required
                        placeholder="Write your message here..."
                        className="w-full p-4 rounded-lg bg-zinc-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-sm sm:text-base resize-none transition"
                      />
                    ) : (
                      <input
                        id={id}
                        type={id === "email" ? "email" : "text"}
                        name={id}
                        required
                        placeholder={`Your ${label}`}
                        className="w-full p-4 rounded-lg bg-zinc-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-sm sm:text-base transition"
                      />
                    )}
                  </div>
                );
              })}

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-black font-bold text-base sm:text-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-transform duration-300"
                aria-label="Send message"
              >
                Send Message
              </button>
            </>
          )}
        </motion.form>
      </div>
    </main>
  );
};

export default ContactSection;
