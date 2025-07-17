import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-6 sm:px-16 lg:px-24 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center sm:text-left">
        
        {/* Logo & About */}
        <div className="flex flex-col items-center sm:items-start">
          <Link to="/" aria-label="Baithak Home" className="mb-4">
            <img
              src="/assets/images/logo.png"
              alt="Baithak Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>
          <p className="text-sm italic text-gray-400 mb-2 tracking-wide">
            Taste of Tradition
          </p>
          <p className="text-gray-400 max-w-xs leading-relaxed font-light">
            Premium dining, event catering & franchise opportunities. Discover
            rich, authentic flavors crafted with love.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="text-lg font-semibold mb-5 text-yellow-400 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link to="/about" className="hover:text-yellow-400 hover:underline">About</Link></li>
            <li><Link to="/menu" className="hover:text-yellow-400 hover:underline">Menu</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400 hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 hover:underline">Contact</Link></li>
          </ul>
        </nav>

        {/* Explore */}
        <nav aria-label="Explore">
          <h3 className="text-lg font-semibold mb-5 text-yellow-400 tracking-wide">
            Explore
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link to="/faq" className="hover:text-yellow-400 hover:underline">FAQ</Link></li>
            <li><Link to="/terms-condition" className="hover:text-yellow-400 hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-yellow-400 hover:underline">Privacy Policy</Link></li>
          </ul>
        </nav>

        {/* Contact Info & Social */}
        <address className="not-italic flex flex-col items-center sm:items-start space-y-4 text-sm text-gray-400">
          <h3 className="text-lg font-semibold text-yellow-400 tracking-wide">Contact</h3>
          <a href="tel:02087111740" className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaPhoneAlt /> <span>020 8711 1740</span>
          </a>
          <a href="mailto:info@baithak.com" className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaEnvelope /> <span>info@baithak.com</span>
          </a>
          <a
            href="https://maps.google.com/?q=722+High+Road,+Leytonstone,+London,+UK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            722 High Road, Leytonstone, London, UK
          </a>

          <div className="flex space-x-5 mt-4 text-xl">
          
            <a
              href="https://www.instagram.com/baithak804?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
              aria-label="Instagram"
              className="text-gray-400 hover:text-yellow-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@baithake1?_t=ZS-8xHzP1bCleC&_r=1" aria-label="tiktok" className="text-gray-400 hover:text-yellow-400 transition">
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577890732928"
              aria-label="Facebook"
              className="text-gray-400 hover:text-yellow-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </address>
      </div>

      <hr className="border-gray-700 my-8" />

     <div className="text-center text-xs sm:text-sm text-gray-500">
  © {new Date().getFullYear()} <span className="font-semibold text-white">Baithak</span> — All rights reserved. <br />
  <span>
    Powered by{" "}
    <a
      href="https://www.eza-tech.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:underline"
    >
      Eza Tech
    </a>
  </span>
</div>

    </footer>
  );
};

export default Footer;
