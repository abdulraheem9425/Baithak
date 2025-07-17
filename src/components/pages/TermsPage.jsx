import React from "react";
import TermsSection from "../terms/Terms-Condition"; // ← apne component ka correct path lagao
import { Helmet } from "react-helmet-async";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions – Baithak 804 </title>
        <meta
          name="description"
          content="Review Baithak 804's Terms & Conditions covering bookings, loyalty programs, promotions, refunds, and guest policies for a clear and trustworthy dining experience."
        />
        <meta
          name="keywords"
          content="Baithak Terms and Conditions, Booking Policy, Baithak Refund Policy, Restaurant Rules London, Baithak Promotions"
        />
        <link rel="canonical" href="https://baithak804.com/terms" />
      </Helmet>

      <TermsSection />
    </>
  );
};

export default TermsPage;
