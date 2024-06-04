import React from 'react';
import Africa from '../../assets/africa.png';
import Chukwuemaka from '../../assets/black-male.png';
import Cleaner from '../../assets/cleaner.svg';
import Cheaper from '../../assets/cheaper.svg';
import Convinient from '../../assets/convinient.svg';

const ElectricVehicle = () => {
  return (
    <>
      <section className="bg-MobileGreenBG h-[1300px] md:bg-GreenBG bg-cover bg-no-repeat md:h-[864px]">
        <div className="px-5 py-16 md:py-32 xl:px-16 grid md:grid-cols-2 place-items-center gap-28 md:gap-10">
          <div className="flex flex-col">
            <h2 className="md:hidden text-[64px] leading-none text-[#EDEDED] pb-8 font-clashdisplay font-medium uppercase">
              African made
            </h2>
            <img src={Africa} alt="" />
          </div>
          <div className="bg-[#1C290F] xl:h-[374px] px-5 py-10 lg:px-10 flex flex-col text-[#E7E7E7] font-normal">
            <h3 className="text-2xl lg:text-[32px] leading-none xl:w-[518px] font-medium font-clashdisplay mb-6">
              Electric Vehicles made for Africa, in Africa, by Africans.
            </h3>
            <p>
              We're firm believers that as electric vehicles become a necessity,
              the demand for functional electricity will soar. This trend will
              extend to all aspects of our society.
              <br /> <br />
              The future of mobility lies in portable electric vehicles. They
              offer unparalleled convenience and cost-effectiveness, paving the
              way for robust electric AI cars. In fact, this path is not just
              preferable; it's inevitable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-5 xl:px-32 grid lg:grid-cols-2 gap-14 xl:gap-28">
        <div>
          <div className="lg:hidden flex flex-col font-clashdisplay font-medium mb-10">
            <p className="text-[#83BC25] text-2xl pb-2">
              Why Consider Electric
            </p>
            <h1 className="text-[#050404] text-[64px] md:text-8xl leading-none uppercase">
              Vehicles
            </h1>
          </div>

          <img src={Chukwuemaka} alt="revive earth" className="lg:h-full" />
        </div>

        <div className="flex flex-col">
          <div className="hidden  lg:flex flex-col font-clashdisplay font-medium">
            <p className="text-[#83BC25] text-2xl pb-2">
              Why Consider Electric
            </p>
            <h1 className="text-[#050404] text-8xl uppercase">Vehicles</h1>
          </div>

          <div className="lg:mt-10 flex flex-col font-light gap-10 text-[#0F0B0B]">
            <div className="flex flex-col">
              <div className="flex gap-4 pb-3 items-center">
                <img src={Cleaner} alt="bolt" className="w-[40px]" />
                <h3 className="text-2xl font-clashdisplay font-medium text-[#050404]">
                  Cleaner
                </h3>
              </div>
              <p>
                Electric Vehicles drive on Electricity which can be gotten from
                renewable and sustainable sources like Solar, Hydrogen Fuel,
                biogas, wind, etc. If only 40% of automobiles can run on
                electricity, it cuts down the global climate change menace by
                11.6%. According to UNEP data, 14 million used vehicles were
                shipped out of European Union, Japan, and the United States
                between 2015 and 2018 alone, and 90% of the receiving regions
                have weak/no climate change regulation policies.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-4 pb-3 items-center">
                <img src={Cheaper} alt="bolt" className="w-[40px]" />
                <h3 className="text-2xl font-clashdisplay font-medium text-[#050404]">
                  Cheaper
                </h3>
              </div>
              <p>
                The operational cost of a vehicle is cut by 66.7%, and the
                maintenance cost by 90% if it is powered by electricity. This
                presents a groundbreaking opportunity for commercial drivers to
                make more money. Merchants as well can have a better value for
                their investments in the transport business.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-4 pb-3 items-center">
                <img src={Convinient} alt="bolt" className="w-[40px]" />
                <h3 className="text-2xl font-clashdisplay font-medium text-[#050404]">
                  Convenient
                </h3>
              </div>
              <p>
                Electric vehicles are easy, more convenient, and safer to drive.
                They are far more efficient, and the drivetrain is more
                effective to accommodate low losses, greater performance, and
                more responsiveness. The future of driving lies with electric
                vehicles because it makes the implementation of modern
                technologies such as AI, and machine learning extremely easy on
                the vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElectricVehicle;
