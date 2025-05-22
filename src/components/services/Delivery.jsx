import React from "react";

const DeliveryPartners = () => {
  const partners = [
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/",
      logo: "/assets/images/uber.png",
    },
    {
      name: "Just Eat",
      url: "https://www.just-eat.com/",
      logo: "/assets/images/justeat.png",
    },
    {
      name: "Deliveroo",
      url: "https://deliveroo.co.uk/",
      logo: "/assets/images/delivery.png",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 sm:px-12 lg:px-24">
      <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-12 tracking-wider">
        Available On
      </h2>
      <div className="flex flex-wrap justify-center gap-14 max-w-5xl mx-auto">
        {partners.map(({ name, url, logo }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-800 rounded-xl p-10  shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-36 sm:w-44"
          >
            <img
              src={logo}
              alt={`${name} Logo`}
              className="h-20 w-auto object-contain mb-4"
            />
            <span className="text-yellow-500 font-semibold text-lg">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default DeliveryPartners;
