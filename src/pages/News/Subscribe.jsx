import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  return (
    <>
      <section className="text-white py-28 lg:py-16  px-5 bg-[#101010]">
        <div className="flex flex-col  items-center text-center">
          <p className="font-semibold text-[#83BC25]">Our Blog</p>
          <h1 className="text-5xl font-medium font-clashdisplay pt-4">
            Our Stories
          </h1>
          <p className="text-lg md:w-[680px] py-6">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>

          <div className="flex gap-5 pt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className=" w-full border-[#D0D5DD] rounded-md py-3 px-4 focus:outline-none focus:border-[#83BC25] placeholder:text-sm placeholder:text-black"
            />
            <button className="bg-[#83BC25] text-white rounded-md px-5">
              Subscribe
            </button>
          </div>
        </div>
        <p className="text-sm text-start md:text-center pt-3">
          We care about your data in our{' '}
          <Link className="pl-1  underline" to="/privacy-policy">
            privacy policy
          </Link>
        </p>
      </section>
    </>
  );
};

export default Subscribe;
