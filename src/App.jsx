import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import HomePage from "./components/pages/HomePage";
import ServicesPage from "./components/pages/ServicesPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import Loader from "./components/common/Loader";
import ScrollToTop from "./components/common/ScrollToTop";
import AntiCopy from './components/common/AntiCopy'
import MenuPage from "./components/pages/MenuPage.jsx";
import FaqPage from "./components/pages/FaqPage.jsx";
import TermsPage from "./components/pages/TermsPage.jsx";
import PrivacyPolicyPage from "./components/pages/PrivacyPage.jsx";
import Login from "./components/secure/Login.jsx";
import Admin from "./components/secure/Admin.jsx";




function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
   
  
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds
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
          <Route path="menu" element={<MenuPage />} />
          <Route path="contact" element={<ContactPage />} />
         <Route path="terms-condition" element={<TermsPage/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage/>} />
          <Route path="faq" element={<FaqPage/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="admin" element={<Admin/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
