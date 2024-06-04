import React from 'react';
import YouTube from 'react-youtube';
import Bolt from '../../assets/bolt.svg';

const GoElectric = () => {
  const opts = {
    height: '655',
    width: '100%',
  };
  return (
    <>
      <section className="py-20  xl:px-40">
        <div className="flex flex-col">
          <div className="hidden md:block px-5">
            <p className="pb-3 font-medium text-xl font-clashdisplay">
              Battery Swapping System
            </p>
            <hr className="mb-6" />
          </div>

          <div className="px-5 md:hidden flex flex-col font-clashdisplay font-medium mb-12">
            <p className="text-[#83BC25] text-xl pb-2">
              Why Choose Electric Mobility
            </p>
            <h1 className="text-[#050404] text-[50px] leading-none uppercase">
              Go electric
            </h1>
          </div>

          <section className="grid place-items-center h-full">
            <div className="rounded-lg xl:rounded-none overflow-hidden w-full lg:h-[655px]">
              <YouTube videoId={'WXcUWpGbRU4'} opts={opts} />
            </div>
          </section>
        </div>

        <div className="px-5 hidden pt-20 md:flex flex-col font-clashdisplay font-medium">
          <p className="text-[#83BC25] text-2xl pb-2">
            Why Choose Electric Mobility
          </p>
          <h1 className="text-[#050404] text-8xl uppercase">Go electric</h1>
        </div>

        <div className="px-5 mt-10 grid lg:grid-cols-3 gap-16 lg:gap-20 font-light text-[#0F0B0B]">
          <div className="flex flex-col">
            <img src={Bolt} alt="bolt" className="w-[40px]" />
            <h3 className="text-2xl font-clashdisplay font-medium py-4 text-[#050404]">
              Indigenous Technology
            </h3>
            <p>
              We have a resilient team that is well versed in the area of
              electric mobility and is obsessed with changing the status quo of
              our clime using technology.
            </p>
          </div>

          <div className="flex flex-col">
            <img src={Bolt} alt="bolt" className="w-[40px]" />
            <h3 className="text-2xl font-clashdisplay font-medium py-4 text-[#050404]">
              Smart Technology
            </h3>
            <p>
              Our vehicles incorporate smart technologies for driver and road
              safety, such as wireless battery monitor, and GPS connectivity in
              demand. The regenerative braking system maximizes vehicle momentum
              to send power back to the battery instead of wasting it as heat in
              the brake pads.
            </p>
          </div>

          <div className="flex flex-col">
            <img src={Bolt} alt="bolt" className="w-[40px]" />
            <h3 className="text-2xl font-clashdisplay font-medium py-4 text-[#050404]">
              Robustness and efficiency
            </h3>
            <p>
              Our swapping network technology ensures that you never really run
              out of power while in motion and up to 95% efficiency is achieved
              by our vehicles while still delivering the desired performance in
              terms of speed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoElectric;
