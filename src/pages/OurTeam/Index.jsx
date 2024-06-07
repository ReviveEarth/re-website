import React from 'react';
import BackToTop from '../../components/BackToTop';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OurStories from '../../components/OurStories';
import ContactUs from '../../components/ContactUs';
import OurTeam from './OurTeam';

const Index = () => {
  return (
    <>
      <BackToTop />
      <div className="bg-[#000]">
        <Navbar />
      </div>
      <OurTeam />
      <OurStories />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Index;
