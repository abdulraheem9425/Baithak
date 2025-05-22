import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-3 px-6 sm:px-16 lg:px-24 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center sm:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center sm:items-start">
          <Link to="/" aria-label="Baithak Home" className="flex items-center mb-4">
            <img
              src="/assets/images/logoo.png"
              alt="Baithak Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="text-sm italic text-gray-400 mb-3 tracking-wide">
            Taste of Tradition
          </p>
          <p className="text-gray-400 max-w-xs leading-relaxed font-light">
            Premium dining, event catering & franchise opportunities. Discover rich,
            authentic flavors crafted with love.
          </p>
          {/* <div className="flex space-x-6 mt-8 text-xl">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </div> */}
        </div>

        {/* Quick Links */}
        <nav className=" lg:ml-16" aria-label="Quick links">
          <h3 className="text-lg font-semibold mb-5  text-yellow-400 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-5 text-sm text-gray-300">
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 hover:underline transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:text-yellow-400 hover:underline transition duration-300"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 hover:underline transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 hover:underline transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Explore */}
        <nav aria-label="Explore links">
          <h3 className="text-lg font-semibold mb-5 text-yellow-400 tracking-wide">
            Explore
          </h3>
          <ul className="space-y-5 text-sm text-gray-300">
            <li>
              <Link
                to="/faq"
                className="hover:text-yellow-400 hover:underline transition duration-300"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/terms-condition"
                className="hover:text-yellow-400 hover:underline transition duration-300"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-yellow-400 hover:underline transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <address className="not-italic flex flex-col items-center sm:items-start space-y-5 text-gray-400 text-sm">
          <h3 className="text-lg font-semibold text-yellow-400 tracking-wide">
            Contact
          </h3>
          <a
            href="tel:+447448653820"
            className="flex items-center space-x-3 hover:text-yellow-400 transition duration-300"
            aria-label="Call Baithak"
          >
            <FaPhoneAlt />
            <span>+44 7448 653820</span>
          </a>
          <a
            href="mailto:info@baithak.com"
            className="flex items-center space-x-3 hover:text-yellow-400 transition duration-300"
            aria-label="Email Baithak"
          >
            <FaEnvelope />
            <span>info@baithak.com</span>
          </a>
          <p className="text-center sm:text-left max-w-xs">
            722 High Road, Leytonstone, London, UK
          </p>
                    <div className="flex space-x-6 mt-8 text-xl">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </div>  

        </address>
        
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm text-gray-500 select-text">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Baithak</span> — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
