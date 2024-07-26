import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import RAE from '../../assets/rae.png';
import FundCo from '../../assets/fundco.png';
import HardwareGarage from '../../assets/hardwaregarage.png';
import UNN from '../../assets/unn.png';

const Hero = () => {
  return (
    <>
      <section className="pt-20 md:pt-0 px-5 w-full mx-auto h-[750px] md:h-[900px]  bg-HeroMobileBG md:bg-HeroBG bg-cover bg-no-repeat">
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="text-white flex flex-col items-center text-center pt-12 md:pt-80 lg:pt-56 ">
          <h1 className="text-[50px] leading-none md:text-6xl lg:text-8xl md:w-[80%] lg:w-[1005px]  font-clashdisplayVariable font-medium">
            The Future is Here, Revive Earth!
          </h1>
          <p className="pt-4 font-light text-lg text-center lg:w-[902px]">
            Transforming petrol-powered vehicles into eco-friendly battery
            electric vehicles. Plus, pioneering affordable and efficient
            commercial EV manufacturing and battery charging/swapping for Africa
          </p>

          <div className="font-light text-lg flex flex-col-reverse  gap-y-6 text-center md:flex-row gap-x-5 pt-14">
            <Link
              to="/technology"
              className="border border-white w-[315px]  md:w-[228px] py-6"
            >
              Our Products
            </Link>

            <Link
              to="/contact"
              className="bg-[#0F0B0B] w-[315px]  md:w-[228px] py-6"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="hidden lg:block w-full mx-auto py-5 md:py-10">
        <div className="flex flex-col items-center">
          <h4 className="text-[#0F0B0B] font-medium">In Partnership With</h4>

          <div className="px-4  mx-auto flex space-x-20 justify-between items-center  pt-3 md:pt-4">
            <a href="#" target="_blank" className="">
              <img
                className=" w-[200px] h-[54px] "
                src={RAE}
                alt="royal accademy of engineering"
              />
            </a>

            <a href="#" target="_blank">
              <img
                className=" w-[137px] h-[28px]  "
                src={FundCo}
                alt="fundco"
              />
            </a>

            <a href="#" target="_blank">
              <img
                className=" w-[198px] h-[54px]  "
                src={HardwareGarage}
                alt="hardware garage"
              />
            </a>

            <a href="#" target="_blank">
              <img className=" w-[87px] h-[67px]  " src={UNN} alt="UNN" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
