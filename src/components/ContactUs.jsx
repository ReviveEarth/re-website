import React from 'react';
import Keke from '../assets/rb-keke.jpg';

const ContactUs = () => {
  return (
    <>
      <section className="bg-[#F3F8E9] py-16 md:py-28 px-5 xl:px-32 flex flex-col-reverse xl:flex-row gap-12">
        <div className="bg-white xl:w-[646px] rounded-[10px] py-[34px] px-4 md:px-[50px] flex flex-col">
          <h1 className="text-[#0B0808] text-4xl md:text-6xl uppercase font-clashdisplayVariable">
            CONTACT US
          </h1>
          <p className="text-[#0F0B0B] text-sm font-normal py-4">
            We accept bulk orders for custom electric vehicles tailored for
            delivery companies and organizations for intra-facility transport.
          </p>
          <form className="pt-4 flex flex-col space-y-7">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-[0.5px] px-4 text-sm focus:border-[#1c290f] focus:outline-none border-[#0F0B0B] rounded-[5px] py-3 placeholder:text-[#0F0B0B] placeholder:text-sm"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-[0.5px] px-4 text-sm focus:border-[#1c290f] focus:outline-none border-[#0F0B0B] rounded-[5px] py-3 placeholder:text-[#0F0B0B] placeholder:text-sm"
            />

            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full border-[0.5px] px-4 text-sm focus:border-[#1c290f] focus:outline-none border-[#0F0B0B] rounded-[5px] py-3 placeholder:text-[#0F0B0B] placeholder:text-sm"
            />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="w-full border-[0.5px] px-4 text-sm focus:border-[#1c290f] focus:outline-none border-[#0F0B0B] rounded-[5px] py-4 placeholder:text-[#0F0B0B] placeholder:text-sm"
            ></textarea>

            <button className="bg-[#1C290F] text-white font-semibold py-3">
              Submit
            </button>
          </form>
        </div>

        <div>
          <img src={Keke} alt="revive earth" className="lg:h-full w-full" />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
