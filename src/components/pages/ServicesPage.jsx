import React from 'react';
import Services from '../services/Service';
import DeliveryPartners from '../services/Delivery';
import { Helmet } from 'react-helmet-async'; 

const ServicesPage = () => {
  return (
    <>
    
      <Helmet>
        <title>Our Services – Baithak 804</title>
        <meta
          name="description"
          content="Explore the services offered by Baithak 804 including food ordering, dine-in, takeaway and delivery options via Uber Eats, Deliveroo, and Just Eat."
        />
        <meta
          name="keywords"
          content="Baithak Services, Food Delivery London, Uber Eats Baithak, Takeaway Baithak 804, Restaurant Services London"
        />
        <link rel="canonical" href="https://baithak804.com/services" />
      </Helmet>

      <Services />
      <DeliveryPartners />
    </>
  );
};

export default ServicesPage;
