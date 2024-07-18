import React from 'react';
import Navbar from '../../components/Navbar';
import Subscribe from './Subscribe';
import OurStories from '../../components/OurStories';
import Footer from '../../components/Footer';

const Index = () => {
  return (
    <>
      <div className="bg-[#0B2012]">
        <Navbar />
      </div>
      <Subscribe />
      <OurStories />
      <Footer />
    </>
  );
};

export default Index;
