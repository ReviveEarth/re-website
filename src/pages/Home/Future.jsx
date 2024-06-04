import React from 'react';
import { Link } from 'react-router-dom';
import Workers from '../../assets/workers.png';
import V from '../../assets/v.png';

const Future = () => {
  return (
    <>
      <section className="py-16 md:py-28 px-5 xl:px-40">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col lg:w-[512px]">
            <h3 className="text-2xl text-[#83BC25] font-clashdisplay">
              Innovation on Wheels
            </h3>
            <h2 className="pt-3 text-[#29292B] uppercase text-[43px] md:text-[55px] lg:text-[64px] lg:w-[80%] leading-none font-clashdisplay">
              building the future
            </h2>
            <p className="pt-5 text-[#0F0B0B] lg:w-[437px]">
              Transform Your Ride - Retrofit your existing petrol-powered
              vehicle into a sleek, eco-friendly electric machine with our
              cutting-edge revive kits. Say goodbye to emissions and hello to a
              cleaner, greener commute.
            </p>
            <Link
              to="/order-now"
              className="mt-9 bg-black text-white w-[200px] py-3 text-center hidden md:block"
            >
              ORDER NOW
            </Link>
          </div>

          <div className="flex flex-col">
            <img src={Workers} alt="RE" className="lg:-mt-16 " />
            <Link
              to="/order-now"
              className="mt-9 bg-black text-white w-[200px] py-3 text-center md:hidden"
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Future;
