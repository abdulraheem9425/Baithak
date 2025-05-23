import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
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
          Terms & <span className="text-red-500">Conditions</span>
        </h1>

        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto">
          Please read these terms and conditions carefully before using our services.
        </p>

        <div className="space-y-8 text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">1. General Use</h2>
            <p>
              By visiting Baithak or placing an order, you agree to abide by these terms.
              Our services are intended for customers aged 18 and above. We reserve the
              right to refuse service to anyone at our discretion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">2. Dine-In Policy</h2>
            <p>
              Reservations are recommended but not required. We aim to provide a comfortable
              experience, but availability may vary during peak hours. Baithak reserves the right to adjust seating and wait times.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">3. Orders & Payments</h2>
            <p>
              All prices listed are inclusive of VAT where applicable. We accept cash and all major cards. Once confirmed, orders cannot be modified or canceled.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">4. Health & Safety</h2>
            <p>
              Baithak strictly adheres to food safety and hygiene standards. Please notify
              our staff of any allergies or dietary restrictions before placing your order.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">5. Intellectual Property</h2>
            <p>
              All content on this site — including text, images, logo, and branding —
              is the property of Baithak and may not be reproduced or used without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">6. Changes to Terms</h2>
            <p>
              Baithak reserves the right to modify these terms at any time. Updates will be posted
              on this page. Continued use of our services constitutes your acceptance of these changes.
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default TermsAndConditions;
