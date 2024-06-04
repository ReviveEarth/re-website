import React from 'react';
import BackToTop from '../../components/BackToTop';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import OurStories from '../../components/OurStories';
import ConversionKit from './ConversionKit';
import ElectricVehicle from './ElectricVehicle';
import Future from './Future';
import GoElectric from './GoElectric';
import Hero from './Hero';

const Index = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <BackToTop />
        <div className="block lg:hidden">
          <Navbar />
        </div>
        <Hero />
        <Future />
        <ConversionKit />
        <GoElectric />
        <ElectricVehicle />
        <OurStories />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default Index;
