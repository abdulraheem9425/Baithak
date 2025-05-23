import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="bg-black text-gray-300 px-6 sm:px-12 lg:px-24 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-500 text-center">
          Privacy <span className="text-red-500">Policy</span>
        </h1>

        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto">
          Your privacy matters to us. This policy outlines how we collect, use, and protect your information.
        </p>

        <div className="space-y-8 text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">1. Information We Collect</h2>
            <p>
              We may collect your name, contact details, and any information you provide through forms or while making reservations/orders on our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">2. How We Use Information</h2>
            <p>
              We use your data to improve your dining experience, process orders or reservations, send occasional updates, and respond to inquiries.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">3. Data Security</h2>
            <p>
              Your information is stored securely and not shared with third parties except as required by law. We implement modern security protocols to protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">4. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience. You can disable cookies through your browser settings without affecting access to our site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">5. Third-Party Links</h2>
            <p>
              We may link to third-party websites for convenience. We are not responsible for their privacy practices and encourage you to review their policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">6. Policy Updates</h2>
            <p>
              Baithak reserves the right to modify this privacy policy. Updates will be reflected on this page. Continued use of our services implies your consent.
            </p>
          </div>
        </div>

    
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;
