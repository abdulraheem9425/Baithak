import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus({ type: "error", message: "Please enter a valid email." });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/newsletter-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus({ type: "success", message: data.message });
      setEmail("");
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <section className="bg-black py-16 px-4 sm:px-10 lg:px-24 flex flex-col items-center">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4 text-center tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Stay Updated with <span className="text-red-600">Baithak</span>
      </motion.h2>

      <motion.p
        className="text-gray-300 max-w-xl text-center mb-8 sm:mb-10 text-base sm:text-lg px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Subscribe to our newsletter to receive exclusive offers, menu updates, and more.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-4 px-2 sm:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        noValidate
      >
        <div className="flex items-center bg-black border-2 border-yellow-500 px-4 py-3 rounded-full w-full">
          <Mail className="text-yellow-500 mr-3 w-6 h-6 flex-shrink-0" />
          <input
            type="email"
            aria-label="Email address"
            placeholder="Enter your email"
            className={`w-full bg-transparent text-white placeholder-yellow-400 text-base sm:text-lg font-semibold focus:outline-none ${
              status.type === "error" ? "ring-2 ring-red-500 rounded-lg" : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-black font-bold text-base sm:text-lg px-8 sm:px-10 py-3 rounded-full hover:bg-yellow-600 transition-shadow shadow-md hover:shadow-xl w-full sm:w-auto"
        >
          Subscribe
        </button>
      </motion.form>

      {status.message && (                
        <motion.p
          className={`mt-6 text-center font-semibold ${
            status.type === "error" ? "text-red-500" : "text-green-400"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {status.message}
        </motion.p>
      )}
    </section>
  );
};

export default NewsletterSignup;
