import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/about", label: "About" },
  { path: "/menu", label: "Menu" },
  { path: "/Services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      {/* Navbar */}
      <nav
        role="navigation"
        className={`fixed top-0 left-0 w-full z-50 transition duration-300 font-sans ${
          isScrolled ? "bg-black shadow-md" : "bg-black/0"
        } text-white px-4 sm:px-8 md:px-12 py-4 flex items-center justify-between`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="Baithak Logo"
            className="h-14 w-auto sm:h-16 md:h-20 object-contain mr-2"
          />
        </Link>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                className="w-8 h-8 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex-row md:flex md:space-x-8 font-medium absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-[150%]"
          } md:translate-y-0 md:flex`}
        >
          {navLinks.map(({ path, label }) => (
            <li
              key={path}
              className="border-b border-gray-700 md:border-none"
            >
              <Link
                to={path}
                className="block px-4 py-3 text-base hover:text-yellow-400 transition"
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Mobile Order Button */}
          <li className="md:hidden px-4 py-3">
            <a
              href="https://www.just-eat.co.uk/restaurants-baithak804-leytonstone/menu#category_011facd3-fa7d-44da-8347-bb44a0debab0"
              className="bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full text-center block hover:bg-yellow-600 transition"
            >
              ORDER ONLINE
            </a>
          </li>
        </ul>

        {/* Desktop Order Button */}
        <div className="hidden md:block">
          <a
              href="https://www.just-eat.co.uk/restaurants-baithak804-leytonstone/menu#category_011facd3-fa7d-44da-8347-bb44a0debab0"
            className="bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full hover:bg-yellow-600 transition"
          >
            ORDER ONLINE
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
