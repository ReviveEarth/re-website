import React from 'react';
import Tricyle from '../../assets/tricycle.png';
import Fuel from '../../assets/fuel.svg';
import Maintenance from '../../assets/maintenance.svg';
import RAOE from '../../assets/royal_academy_of_engineering.png';
import SmallImage from '../../assets/keke_tricycle.png';
import Battery from '../../assets/battery.png';
import BatteryImg from '../../assets/image_2.png';
import RAELogo from '../../assets/image.png';
import Line from '../../assets/line.png';

const RedefineMobility = () => {
  return (
    <>
      <section className="pt-16 lg:pr-5 xl:pr-32 grid lg:grid-cols-2 gap-10 md:gap-16">
        <div>
          <div className="lg:hidden flex flex-col  font-medium mb-10">
            <h1 className="px-5 pt-20 pb-12 text-[#29292B] font-clashdisplay text-5xl md:text-8xl leading-none capitalize">
              Re-Defining Mobility for Sustainability
            </h1>
          </div>

          <img
            src={Tricyle}
            alt="revive earth"
            className="lg:h-full md:w-full"
          />
        </div>

        <div className="flex flex-col">
          <div className="hidden  lg:flex flex-col font-clashdisplay font-medium">
            <h1 className="text-[#050404] text-7xl mt-24 capitalize">
              Re-Defining Mobility for Sustainability
            </h1>
          </div>

          <p className="px-5 lg:px-0 pt-6 md:text-lg font-light text-[#1C290F]">
            The Revive Kit is our flagship solution designed to transform
            traditional petrol vehicles into efficient electric vehicles (EVs).
            By integrating cutting-edge electric drive trains, our Revive Kits
            breathe new life into your existing vehicles, offering a sustainable
            and cost-effective alternative to purchasing a brand-new EV.
          </p>

          <div className="px-5 lg:px-0 items-center justify-center lg:items-start lg:justify-start pt-10 flex gap-6 md:gap-12">
            <div className="flex flex-col font-light">
              <div className="flex font-clashdisplay gap-4">
                <img src={Fuel} alt="re" className="w-[30px] md:w-full" />
                <p className="text-4xl md:text-[50px] xl:text-[64px] font-clashdisplay text-[#83BC25] font-medium">
                  74%
                </p>
              </div>
              <p>savings on fuel cost</p>
            </div>

            <div className="w-[1px] h-full bg-[#D9EABB]"></div>

            <div className="flex flex-col font-light">
              <div className="flex font-clashdisplay gap-4">
                <img
                  src={Maintenance}
                  alt="re"
                  className="w-[30px] md:w-[56px]"
                />
                <p className="text-4xl md:text-[50px] xl:text-[64px] font-clashdisplay text-[#83BC25] font-medium">
                  42%
                </p>
              </div>
              <p>savings on maintenance cost</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4] py-16 px-5 xl:px-40">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-[742px] h-full">
              <img
                src={RAOE}
                alt="royal academy of engineering"
                className="w-full h-full hidden md:block"
              />
              <img
                src={SmallImage}
                alt="royal academy of engineering"
                className="w-full h-full md:hidden"
              />
            </div>

            <div className="w-full lg:w-[281px]">
              <img
                src={Battery}
                alt="battery"
                className="w-full hidden md:block"
              />
              <img
                src={BatteryImg}
                alt="battery"
                className="w-full md:hidden"
              />
            </div>
          </div>

          <div className="bg-white mx-auto flex flex-col md:flex-row md:items-center justify gap-8 md:gap-12 mt-8 py-[17px] px-8 md:px-[33px]">
            <img src={RAELogo} alt="" />

            <img src={Line} alt="" className="hidden md:block" />

            <p className="text-xl font-medium font-clashdisplay md:w-[342px]">
              Engineering Award for Innovation and Sustainability
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RedefineMobility;
