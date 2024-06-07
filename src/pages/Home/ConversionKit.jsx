import React from 'react';
import Bolt from '../../assets/bolt.svg';
import Ckit from '../../assets/ckit.png';
import BlackKeke from '../../assets/black_keke.png';
import Keke from '../../assets/keke.png';

const ConversionKit = () => {
  return (
    <>
      <section className="bg-[#101010] py-16 md:py-28 text-white px-5 xl:px-40">
        <div className="text-center flex flex-col items-center">
          <div className="md:hidden">
            <p className="text-[#83BC25] text-xl font-clashdisplayVariable">
              Revive Earth's Eco-Friendly Fleet
            </p>
            <h1 className=" uppercase text-[64px] leading-none font-clashdisplayVariable">
              Convers-ion KITS
            </h1>
          </div>
          <h1 className="hidden md:block uppercase md:text-7xl lg:text-8xl font-clashdisplayVariable">
            Conversion KITS
          </h1>
          <p className="text-[#F3F8E9] pt-2 text-lg lg:w-[843px] font-light">
            Revive Earth's Electrifying Innovation: Elevate Any Ride into the
            Future with Our Universal Conversion Kits!
          </p>
        </div>

        <div className="mt-16 md:mt-28 flex flex-col lg:flex-row gap-16 lg:gap-20 font-light">
          <div className="flex flex-col">
            <img src={Bolt} alt="bolt" className="w-[40px]" />
            <h3 className="text-2xl font-clashdisplayVariable font-medium py-4">
              Cost-efficiency with faster time to market
            </h3>
            <p>
              Get up and running quickly with a fully functioning auto parts
              storefront and mobile experience. Transparent pricing and no
              hidden fees mean no surprises. You get the freedom to build the
              solution you want at a budget that’s comfortable for you.
            </p>
          </div>
          <div className="flex flex-col">
            <img src={Bolt} alt="bolt" className="w-[40px]" />
            <h3 className="text-2xl font-clashdisplayVariable font-medium py-4">
              Made for the complexity of automotive
            </h3>
            <p>
              No matter your automotive business model, industry, or vertical,
              we have you covered. Our automotive innovative parts solutions are
              flexible enough to work with the parameters of your business,
              partners, customers, and supply chain.
            </p>
          </div>
          <div className="flex flex-col">
            <img src={Bolt} alt="bolt" className="w-[40px]" />
            <h3 className="text-2xl font-clashdisplayVariable font-medium py-4">
              24/7 customer support
            </h3>
            <p>
              Forget about hard-coded, fragmented or one-size-fits-all solutions
              for complex building use cases. Our key advantage is at the core
              of the product: the architecture, technology and flexibility to
              accommodate, grow and scale your business.
            </p>
          </div>
        </div>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2  gap-3 md:gap-7 overflow-hidden">
          <div className="w-full h-full">
            <img src={Ckit} alt="" className="h-full w-full " />
          </div>

          <div className="flex flex-row md:flex-col gap-3 md:gap-7">
            <div className="w-[188px] md:w-full">
              <img src={Keke} alt="" className="w-full h-full" />
            </div>
            <div className="w-[188px]  md:w-full">
              <img src={BlackKeke} alt="" className="w-full h-full " />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row gap-6 md:items-center md:text-2xl ">
          <div>
            <h3 className=" font-normal font-clashdisplayVariable">
              Some of the products we’ve converted:
            </h3>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex gap-2 font-medium">
              <img src={Bolt} alt="" className="w-[26px]" />
              <h3>Electric Minibus</h3>
            </div>
            <div className="flex gap-2 font-medium">
              <img src={Bolt} alt="" className="w-[26px]" />
              <h3>Electric Tricyle</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConversionKit;
