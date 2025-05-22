import React from "react";

const Services = () => {
  const services = [
    {
      title: "Dining In",
      description: "Enjoy a cozy atmosphere with premium service inside our restaurant.",
      icon: (
        <svg
          className="w-14 h-14 text-yellow-500 mb-5 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 10h16M6 14h.01M10 14h.01M14 14h.01M18 14h.01"
          ></path>
        </svg>
      ),
    },
    {
      title: "Take Away",
      description: "Order your favorite meals and pick them up at your convenience.",
      icon: (
        <svg
          className="w-14 h-14 text-yellow-500 mb-5 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h2l3 9h8l3-9h2"
          ></path>
          <circle cx="7" cy="21" r="1"></circle>
          <circle cx="17" cy="21" r="1"></circle>
        </svg>
      ),
    },
    {
      title: "Delivery",
      description: "Get your order delivered straight to your doorstep, fast and fresh.",
      icon: (
        <svg
          className="w-14 h-14 text-yellow-500 mb-5 animate-bounce-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v13H3z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16h18l-3 5H6l-3-5z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-32 bg-gray-900 text-white px-6 sm:px-12 lg:px-24 ">
      <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-14 tracking-wide">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {services.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-gray-800 rounded-xl p-10 text-center shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-2xl font-semibold mb-4 relative inline-block group">
              {title}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-yellow-500 absolute bottom-0 left-0"></span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      {/* Custom animation for bounce-slow */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10%);
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Services;
