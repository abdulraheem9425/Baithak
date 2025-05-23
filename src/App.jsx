import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import ServicesPage from "./components/pages/ServicesPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import Loader from "./components/common/Loader";
import ScrollToTop from "./components/common/ScrollToTop";
import AntiCopy from './components/common/AntiCopy'
import TermsCondition from "./components/terms/Terms-Condition";
import PrivacyPolicy from "./components/privacy-policy/Privacy-Policy";  
import Faq from './components/faq/Faq';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
    <ScrollToTop />
    <AntiCopy/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
         <Route path="terms-condition" element={<TermsCondition/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="faq" element={<Faq/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
