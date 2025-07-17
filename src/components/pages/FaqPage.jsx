import React from "react";
import FAQSection from "../faq/Faq";
import { Helmet } from "react-helmet-async"; 

const FaqPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQs – Baithak 804 </title>
        <meta
          name="description"
          content="Find answers to common questions about Baithak 804 – our cuisine, hours, bookings, and dietary options. Still curious? Contact us today."
        />
        <meta
          name="keywords"
          content="Baithak FAQ, Baithak 804 Questions, Restaurant Booking Info, Baithak Opening Hours, Vegan Options London"
        />
        <link rel="canonical" href="https://baithak804.com/faq" />
      </Helmet>

      <FAQSection />
    </>
  );
};

export default FaqPage;
