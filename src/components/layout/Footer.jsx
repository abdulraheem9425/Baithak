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
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-16 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center sm:items-start">
          <Link to="/" className="flex items-center mb-3">
            <img
              src="/assets/images/logoo.png"
              alt="Baithak Logo"
              className="h-14 w-auto md:h-16 w-[150px] mr-2 object-contain"
            />
          </Link>
          <p className="text-sm text-gray-400 italic mb-2">Taste of Tradition</p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Premium dining, event catering & franchise opportunities. Discover rich,
            authentic flavors.
          </p>
          <div className="flex space-x-4 mt-6 text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-yellow-400 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-yellow-400 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-400 hover:text-yellow-400 transition duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-6 text-sm text-gray-300">
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
                to="/Services"
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
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-6 text-sm text-gray-300">
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
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-yellow-400 hover:underline transition duration-300"
              >
                Privacy & Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center justify-center sm:justify-start space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <a
                href="tel:+447448653820"
                className="hover:text-yellow-400 transition duration-300"
              >
                +44 7448 653820
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <a
                href="mailto:info@baithak.com"
                className="hover:text-yellow-400 transition duration-300"
              >
                info@baithak.com
              </a>
            </li>
            <li className="text-center sm:text-left">722 High Road, Leytonstone</li>
          </ul>
        </div>
      </div>

      <hr className="my-5 border-gray-700" />

      {/* Copyright */}
      <div className="text-center text-xs md:text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Baithak</span> — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
