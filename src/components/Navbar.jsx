import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav
        className={`${
          open ? 'no-doc-scroll' : ''
        } w-full lg:py-5 fixed lg:relative z-50`}
      >
        {/* DESKTOP NAV */}
        <div className="hidden lg:block w-[757px] h-[70px] border border-[#b1b1b1] mx-auto rounded-full p-[1px]">
          <div className="px-[57px] py-[18px] w-full h-full rounded-[31px] flex items-center justify-between mx-auto bg-transparent text-white">
            <div className="flex gap-16">
              <NavLink
                to="/become-an-agent"
                className={({ isActive }) =>
                  `hover:font-bold transition-all duration-300 ${
                    isActive ? 'font-bold' : ''
                  }`
                }
              >
                Agent
              </NavLink>
              <NavLink
                to="/technology"
                className={({ isActive }) =>
                  `hover:font-bold transition-all duration-300 ${
                    isActive ? 'font-bold' : ''
                  }`
                }
              >
                Technology
              </NavLink>
            </div>
            <div className="">
              <NavLink to="/">
                <img
                  src={Logo}
                  alt="revive earth"
                  className="h-[34px] w-[106px]"
                />
              </NavLink>
            </div>
            <div className="flex gap-16">
              <NavLink
                to="/our-team"
                className={({ isActive }) =>
                  `hover:font-bold transition-all duration-300 ${
                    isActive ? 'font-bold' : ''
                  }`
                }
              >
                Our Team
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:font-bold transition-all duration-300 ${
                    isActive ? 'font-bold' : ''
                  }`
                }
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

        {/* MOBILE NAV */}
        <div className="relative px-5 h-20 flex justify-between items-center bg-[#0B2012] lg:hidden">
          <div className="">
            <NavLink to="/">
              <img
                src={Logo}
                alt="revive earth"
                className="h-[34px] w-[106px]"
              />
            </NavLink>
          </div>

          {/* toggle button */}
          <div onClick={toggleNav} className="block lg:hidden z-10">
            {open ? (
              <AiOutlineClose size={25} color="white" />
            ) : (
              <HiOutlineBars3 size={33} color="white" />
            )}
          </div>

          <div
            className={`fixed top-0 py-24 left-0 w-full h-full bg-[#0B2012] text-white transition-transform duration-500 ${
              open ? 'transform translate-x-0' : 'transform -translate-x-full'
            }`}
          >
            <ul className="uppercase text-white font-medium tracking-wide text-center">
              <li className="py-7 ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'font-bold text-xl' : ''
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="py-7 ">
                <NavLink
                  to="/technology"
                  className={({ isActive }) =>
                    isActive ? 'font-bold text-xl' : ''
                  }
                >
                  Technology
                </NavLink>
              </li>

              <li className="py-7 ">
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    isActive ? 'font-bold text-xl' : ''
                  }
                >
                  News
                </NavLink>
              </li>

              <li className="py-7 ">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'font-bold text-xl' : ''
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
