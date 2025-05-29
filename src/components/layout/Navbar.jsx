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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Navbar */}
      <nav
        role="navigation"
        className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
          isScrolled ? "bg-black shadow-md" : "bg-black/0"
        } text-white px-4 md:px-12 py-4 flex items-center justify-between`}
      >
        {/* Logo */}
        <div className="flex items-center">
  <Link to="/" className="flex items-center">
    <img
      src="/assets/images/logoo.png"
      alt="Baithak Logo"
      className="h-14 w-auto md:h-16 w-20 mr-2 object-contain"
    />
  </Link>
</div>


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
                xmlns="http://www.w3.org/2000/svg"
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
                xmlns="http://www.w3.org/2000/svg"
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

        {/* Nav Links */}
        <ul
          className={`flex-col md:flex-row md:flex md:space-x-6 font-medium absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-[150%]"
          } md:translate-y-0 md:flex`}
        >
          {navLinks.map(({ path, label }) => (
            <li key={path} className="border-b border-gray-700 md:border-none">
              <Link
                to={path}
                className="block ml-3 px-2 py-3 hover:text-yellow-400"
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Mobile Order Button */}
          <li className="md:hidden px-4 py-3">
            <Link
              to="/menu"
              className="bg-yellow-500 text-white font-bold py-2 px-5 rounded-full hover:bg-yellow-600 transition block text-center"
            >
              ORDER ONLINE
            </Link>
          </li>
        </ul>

        {/* Desktop Order Button */}
        <div className="hidden md:block">
          <Link
            to="/menu"
            className="bg-yellow-500 text-white font-bold py-2 px-5 rounded-full hover:bg-yellow-600 transition"
          >
            ORDER ONLINE
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
