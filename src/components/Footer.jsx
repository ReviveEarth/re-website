import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/x.png';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#2E420D] text-[#fffffb] px-5 py-20 lg:px-16">
        <div className="grid xl:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col">
            <Link to="/">
              <img
                src={Logo}
                alt="revive earth"
                className="h-[84px] w-[262px]"
              />
            </Link>

            <p className="font-light pt-8 md:w-[600px] xl:w-[378px] text-white">
              We retrofit existing gasoline tricycles/minibuses with the
              electric drivetrain. We also assemble/manufacture new, cheap and
              functional electric vehicles, and operate a convenient battery
              charge/swap network.
            </p>
          </div>

          <div className="flex flex-row gap-x-24 xl:justify-evenly">
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg  font-clashdisplay pb-9">
                Link
              </h4>
              <ul className="">
                <li className="pb-7">
                  <Link to="/">Home</Link>
                </li>
                <li className="pb-7">
                  <Link to="/why-us">Why Us</Link>
                </li>
                <li className="">
                  <Link to="/features">Features</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg text-[#fffffb] font-clashdisplay pb-9">
                Company
              </h4>
              <ul className="">
                <li className="pb-7">
                  <Link to="/our-team">Our Team</Link>
                </li>
                <li className="pb-7">
                  <Link to="/our-stories">Our Stories</Link>
                </li>
                <li className="">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="xl:mt-12 xl:pl-12">
              <h4 className="text-xl font-clashdisplay font-medium pb-10">
                Subscribe to our newsletter
              </h4>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent w-[75%] xl:w-full border-b  focus:outline-none focus:border-b placeholder:text-[#e6e6e6] placeholder:text-sm placeholder:font-light py-2"
                />
                <button className="absolute right-[25%] xl:right-0">
                  <FaArrowRight size={23} />
                </button>
              </div>
            </div>

            <div className="flex flex-col font-clashdisplay font-normal pt-14">
              <p>Follow RE On Social Media Or just get in touch:</p>
              <div className="flex flex-row  space-x-6 pt-5 overflow-x-scroll">
                <a
                  href="#"
                  target="_blank"
                  className="bg-white rounded-full p-1"
                >
                  <IoLogoWhatsapp size={28} color="#83BC25" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-white rounded-full p-1 hidden md:block"
                >
                  <FaFacebook size={28} color="#83BC25" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-white rounded-full p-1"
                >
                  <AiFillInstagram size={28} color="#83BC25" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-white rounded-full p-1"
                >
                  <FaTwitter size={28} color="#83BC25" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-white rounded-full p-1"
                >
                  <FaYoutube size={28} color="#83BC25" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-white rounded-full p-1"
                >
                  <FaLinkedin size={28} color="#83BC25" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-white rounded-full p-1 hidden md:block"
                >
                  <MdEmail size={28} color="#83BC25" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-white rounded-full p-1 hidden md:block"
                >
                  <BsFillTelephoneFill size={25} color="#83BC25" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <p className="text-[13px] text-[#E3E3E3] font-light text-center pt-6">
          All rights reserved by © Revive Earth 2023.
        </p>
      </footer>
    </>
  );
};

export default Footer;
