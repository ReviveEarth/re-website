import React from 'react';
import BackToTop from '../../components/BackToTop';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import OurStories from '../../components/OurStories';
import OrderCK from './OrderCK';
import RedefineMobility from './RedefineMobility';
import Rugged from './Rugged';

const Index = () => {
  return (
    <>
      <BackToTop />
      <div className="bg-[#000]">
        <Navbar />
      </div>
      <RedefineMobility />
      <Rugged />
      <OrderCK />
      <OurStories />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Index;
