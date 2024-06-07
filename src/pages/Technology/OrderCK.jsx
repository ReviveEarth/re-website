import React from 'react';
import Line from '../../assets/w_line.png';

const OrderCK = () => {
  return (
    <>
      <section className="pt-4 md:pt-0 md:py-12 px-5 bg-ConversionKit h-[1100px] md:h-[900px] lg:h-[750px] bg-cover bg-no-repeat">
        <div className="flex flex-col items-center font-clashdisplayVariable">
          <p className="text-xl md:text-2xl font-medium text-[#83BC25]">
            Saving Our World Starts Today
          </p>
          <h1 className="text-[50px] leading-none md:text-8xl font-medium text-center uppercase lg:w-[880px] py-5">
            order conversion kits
          </h1>

          <button className="font-medium bg-black text-white py-3 w-[217px]">
            ORDER NOW
          </button>
        </div>

        <div className="mt-20 md:mt-32 text-white flex flex-col md:flex-row mx-16 md:mx-0 xl:mx-44 gap-5 md:gap-10 lg:gap-20 font-medium">
          <div className="flex flex-col">
            <h1 className="text-8xl font-clashdisplayVariable">1</h1>
            <h3 className="text-xl font-clashdisplayVariable">
              Request a Quote
            </h3>
            <p className="pt-2 text-sm font-normal w-[218px] md:w-full lg:w-[218px]">
              Fill out our online form to receive a personalized quote based on
              your vehicle
            </p>
          </div>

          <img src={Line} alt="line" className="hidden md:block" />

          <div className="flex flex-col">
            <h1 className="text-8xl font-clashdisplayVariable">2</h1>
            <h3 className="text-xl font-clashdisplayVariable">Make Payment</h3>
            <p className="pt-2 text-sm font-normal w-[218px] md:w-full lg:w-[218px]">
              We accept various payment methods for your convenience.
            </p>
          </div>

          <img src={Line} alt="line" className="hidden md:block" />

          <div className="flex flex-col">
            <h1 className="text-8xl font-clashdisplayVariable">3</h1>
            <h3 className="text-xl font-clashdisplayVariable">
              Installation Appointment
            </h3>
            <p className="pt-2 text-sm font-normal w-[218px] md:w-full lg:w-[218px]">
              Schedule an installation appointment with our certified
              technicians
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderCK;
