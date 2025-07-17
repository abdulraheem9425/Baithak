import React from 'react';
import menuSections from '../../data/menuData';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MenuCard = ({ title, price, description, image, index }) => (
  <article
    tabIndex={0}
    aria-label={title}
    className={`relative group bg-white rounded-2xl overflow-hidden shadow-xl 
      hover:shadow-2xl transform hover:scale-[1.05] transition duration-300 
      focus-within:ring-4 focus-within:ring-yellow-400 animate-fade-in-up`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{title}</h3>
      <p className="text-red-600 font-bold text-sm sm:text-base mt-1">{price}</p>
    </div>
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
      <p className="text-sm sm:text-base mb-5 line-clamp-4 animate-fade-in">{description}</p>
      <div className="flex flex-col gap-3 w-full">
        <a
          href="https://www.just-eat.co.uk/restaurants-baithak804-leytonstone/menu#category_011facd3-fa7d-44da-8347-bb44a0debab0"
          target=""
          rel="noopener noreferrer"
          tabIndex={-1}
        >
          <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white font-semibold py-2 px-5 rounded-full text-sm transition shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 animate-bounce-slow">
            <ShoppingCart size={18} /> Order via Just Eat
          </button>
        </a>
      </div>
    </div>
  </article>
);

const RestaurantMenu = () => {
  return (
    <>
      <Helmet>
        <title>Menu – Baithak 804</title>
        <meta
          name="description"
          content="Explore the full menu at Baithak 804 in Leytonstone, London. Authentic Pakistani & Indian cuisine including biryani, tikka, curries and more."
        />
        <link rel="canonical" href="https://baithak804.com/menu" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black py-24 sm:py-32 px-2 sm:px-4 font-poppins relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Hero */}
          <header className="mb-12 sm:mb-20 animate-fade-in-down text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 uppercase tracking-wider mb-6 drop-shadow-xl animate-pulse">
              Explore Our <span className="text-yellow-400">Full Menu</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 italic">
              From sizzling grills to aromatic curries, every dish is a celebration of authentic Pakistani & Indian flavors.
            </p>
          </header>

         {/* Category Heading */}
<div className="text-center mb-6 sm:mb-8">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 uppercase tracking-wide animate-fade-in-down">
    Categories
  </h2>
</div>

{/* Category Navigation */}
<nav className="sticky top-6 z-20 bg-gradient-to-r from-[#1a1a1a]/70 via-black/70 to-[#1a1a1a]/70 backdrop-blur-md px-4 py-4 rounded-2xl shadow-xl border border-yellow-500/10 mb-14 mx-auto max-w-5xl">
  <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
    {menuSections.map((section, idx) => (
      <li key={idx}>
        <button
          onClick={() => {
            const el = document.getElementById(`menu-section-${idx}`);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-yellow-300 hover:text-black bg-gradient-to-br from-yellow-400/20 via-red-500/10 to-yellow-500/20 hover:from-yellow-300 hover:to-red-500 px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 shadow-sm hover:shadow-lg"
        >
          {section.heading}
        </button>
      </li>
    ))}
  </ul>
</nav>

          {/* Menu Sections */}
          {menuSections.map((section, idx) => (
            <section
              key={idx}
              id={`menu-section-${idx}`}
              className="mb-14 sm:mb-20 scroll-mt-24"
            >
              <div className="flex items-center mb-8 animate-fade-in-left">
                <hr className="flex-1 border-t-2 border-yellow-500/30" />
                <h2 className="mx-6 text-lg sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-yellow-400 uppercase tracking-wide border-b-4 border-yellow-500 pb-2 drop-shadow">
                  {section.heading}
                </h2>
                <hr className="flex-1 border-t-2 border-yellow-500/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-1 sm:px-0">
                {section.items.map((item, index) => (
                  <MenuCard key={index} index={index} {...item} />
                ))}
              </div>
            </section>
          ))}

          {/* Call to Action */}
          <div className="text-center mt-16 animate-bounce-slow">
            <p className="text-2xl text-yellow-300 font-semibold mb-2">Craving more?</p>
            <p className="text-lg text-gray-300 italic mb-4">
              We’re always cooking up something new. Stay tuned for fresh flavors and surprises!
            </p>
            <a
              href="tel:02087111740"
              className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Call Baithak 804 at 020 8711 1740"
            >
              Book Your Table Now
            </a>
          </div>
        </div>
      </main>

      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease forwards; }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease forwards; }
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease forwards; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
      `}</style>
    </>
  );
};

export default RestaurantMenu;
