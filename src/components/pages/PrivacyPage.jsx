import React from "react";
import PrivacyPolicy from "../privacy-policy/Privacy-Policy"; 
import { Helmet } from "react-helmet-async";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – Baithak 804 </title>
        <meta
          name="description"
          content="Read Baithak 804's privacy policy outlining how we collect, use, and safeguard your personal information for a safe and enjoyable dining experience."
        />
        <meta
          name="keywords"
          content="Baithak Privacy Policy, Data Protection Restaurant, Information Usage, GDPR Restaurant London, Baithak Personal Info"
        />
        <link rel="canonical" href="https://baithak804.com/privacy-policy" />
      </Helmet>

      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
