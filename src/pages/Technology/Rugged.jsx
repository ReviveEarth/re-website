import React from 'react';
import Tricyle from '../../assets/group.png';
import Bolt from '../../assets/bolt.svg';
import { Link } from 'react-router-dom';

const Rugged = () => {
  return (
    <>
      <section className="py-16 px-5 xl:px-32 grid lg:grid-cols-2 gap-14 xl:gap-28">
        <div className="flex flex-col order-2 lg:order-none">
          <div className="hidden  lg:flex flex-col font-clashdisplayVariable font-medium">
            <p className="text-[#83BC25] text-2xl pb-2">Engineered to Last</p>
            <h1 className="text-[#050404] text-8xl uppercase">rugged</h1>
          </div>

          <div className="lg:mt-10 flex flex-col font-light gap-10 text-[#0F0B0B]">
            <div className="flex flex-col">
              <div className="flex gap-4 pb-3 items-center">
                <img src={Bolt} alt="bolt" className="w-[40px]" />
                <h3 className="text-2xl font-clashdisplayVariable font-medium text-[#050404]">
                  Seamless Transition
                </h3>
              </div>
              <p>
                Maintaining most of the original features ensures a familiar
                driving experience, despite the significant differences in
                system specifications, eliminating the need for additional
                driving lessons.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-4 pb-3 items-center">
                <img src={Bolt} alt="bolt" className="w-[40px]" />
                <h3 className="text-2xl font-clashdisplayVariable font-medium text-[#050404]">
                  Intuitive Controls
                </h3>
              </div>
              <p>
                The dynamic and user-friendly infotainment system is
                strategically positioned to allow drivers to monitor and manage
                power efficiently, minimizing distractions from the steering
                wheel.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-4 pb-3 items-center">
                <img src={Bolt} alt="bolt" className="w-[40px]" />
                <h3 className="text-2xl font-clashdisplayVariable font-medium text-[#050404]">
                  Smart Safeguards
                </h3>
              </div>
              <p>
                The Control System features automatic safeguards against
                overheating and battery depletion. Additionally, it offers
                automatic torque and speed calibration for optimal performance
                on challenging terrains.
              </p>
            </div>

            <Link
              to="/contact"
              className="text-center font-medium bg-black text-white py-3 w-[217px]"
            >
              ORDER NOW
            </Link>
          </div>
        </div>

        <div className="">
          <div className="lg:hidden flex flex-col font-clashdisplayVariable font-medium mb-10">
            <p className="text-[#83BC25] text-2xl pb-2">Engineered to Last</p>
            <h1 className="text-[#050404] text-[64px] md:text-8xl leading-none uppercase">
              rugged
            </h1>
          </div>

          <img
            src={Tricyle}
            alt="revive earth"
            className="lg:h-full mt-10 w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Rugged;
