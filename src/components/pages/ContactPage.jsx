import React from 'react';
import ContactSection from '../contact/ContactSection';
import { Helmet } from 'react-helmet-async'; 

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us – Baithak 804</title>
        <meta
          name="description"
          content="Get in touch with Baithak 804 – Located at 804 High Road, Leytonstone London. Call, message, or visit us today for authentic desi cuisine."
        />
        <meta
          name="keywords"
          content="Contact Baithak 804, Baithak Location, Restaurant Phone Number, Leytonstone Restaurant Contact"
        />
        <link rel="canonical" href="https://baithak804.com/contact" />
      </Helmet>

      <ContactSection />
    </>
  );
};

export default ContactPage;
