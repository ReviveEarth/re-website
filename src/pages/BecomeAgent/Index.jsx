import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import BackToTop from '../../components/BackToTop';

const Index = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const [messageBody, setMessageBody] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setMessageBody({ ...messageBody, [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    setErrorMessage(null);
    e.preventDefault();
    if (
      messageBody.firstName === '' ||
      messageBody.email === '' ||
      messageBody.message === ''
    ) {
      setErrorMessage('Please fill required fields');
      return;
    }
    setMessageBody({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
    console.log('EMAIL:', messageBody);
  };
  return (
    <>
      <BackToTop />
      <div className="block lg:hidden">
        <Navbar />
      </div>
      <section className="px-5 h-[550px] bg-MobileContactBG md:bg-ContactBG bg-cover bg-no-repeat">
        <div className="hidden lg:block">
          <Navbar />
        </div>

        <div className="pt-44 lg:pt-16 flex flex-col items-center text-center text-white">
          <p className="pt-8 uppercase text-xl tracking-[0.4px]">
            Become an Agent
          </p>

          <h1 className="pt-2 text-[40px] lg:w-[971px] leading-tight md:text-[64px] font-clashdisplay">
            Are you an existing or intending auto technician?
          </h1>
        </div>
      </section>

      <section className="px-5 xl:px-24 pb-44">
        <div className="md:px-10 lg:px-14 xl:px-24  flex flex-col">
          <p className="md:text-xl md:text-center py-16">
            You can register to declare interest in our highly competitive
            training programme focused on our conversion/retrofitting process
            which equips you with the relevant skills to become one of our very
            important change-makers. Once you're certified as an agent, we will
            work with you to set up a workshop and supply you with Revive Kits
            on-demand.
          </p>
          <div className="px-2 flex flex-col gap-4">
            <div className="space-y-8 md:flex md:space-x-8 md:space-y-0">
              <div className="md:w-1/2">
                <label htmlFor="firstName" className="text-[#111928]">
                  First Name *
                </label>
                <input
                  className="bg-[#F3F8E9] py-3.5 px-4 w-full border border-[#D1D5DB] rounded-lg focus:outline-none  focus:border-[#83BC25] mt-1.5 placeholder:text-[#6B7280]"
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={messageBody.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2">
                <label htmlFor="lastName" className="text-[#111928]">
                  Last Name
                </label>
                <input
                  className="bg-[#F3F8E9] py-3.5 px-4 w-full border border-[#D1D5DB] rounded-lg focus:outline-none  focus:border-[#83BC25] mt-1.5 placeholder:text-[#6B7280]"
                  type="text"
                  name="lastName"
                  placeholder="Enter First Name"
                  value={messageBody?.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-8 md:flex md:space-x-8 md:space-y-0 pt-4 md:pt-0">
              <div className="md:w-1/2">
                <label htmlFor="email" className="text-[#111928]">
                  Email *
                </label>
                <input
                  className="bg-[#F3F8E9] py-3.5 px-4 w-full border border-[#D1D5DB] rounded-lg focus:outline-none  focus:border-[#83BC25] mt-1.5 placeholder:text-[#6B7280]"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={messageBody.email}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2">
                <label htmlFor="phoneNumber" className="text-[#111928]">
                  Phone Number
                </label>
                <input
                  className="bg-[#F3F8E9] py-3.5 px-4 w-full border border-[#D1D5DB] rounded-lg focus:outline-none  focus:border-[#83BC25] mt-1.5 placeholder:text-[#6B7280]"
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  value={messageBody.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <label htmlFor="message">Your Message *</label>
              <textarea
                className="bg-[#F3F8E9] py-3 px-4 w-full border border-[#D1D5DB] rounded-lg focus:outline-none  focus:border-[#83BC25] placeholder:text-[#6B7280] mt-2"
                cols=""
                rows="10"
                name="message"
                id="message"
                placeholder="Your Message"
                value={messageBody.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <p className="self-end font-light text-right text-xs mt-[-8px] text-red-500 ">
              {errorMessage}
            </p>

            <button
              onClick={handleSumbit}
              className=" text-white py-4 font-semibold bg-[#1C290F]"
            >
              Submit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
