import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import GE from '../../assets/ge.svg';
import BCK from '../../assets/bck.svg';
import BV from '../../assets/bv.svg';
import BackToTop from '../../components/BackToTop';

const mailSubjects = [
  {
    subject: 'General Enquiry',
    icon: GE,
  },
  {
    subject: 'Buy Conversion Kit',
    icon: BCK,
  },
  {
    subject: 'Buy Vehicles',
    icon: BV,
  },
];

const Index = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentMailSubject, setCurrentMailSubject] = useState(
    mailSubjects?.[0].subject
  );

  const [messageBody, setMessageBody] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleSelectMailSubject = (mailSubject) => {
    setCurrentMailSubject(mailSubject);
  };

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
    console.log('SUBJECT:', currentMailSubject, '\n', 'EMAIL:', messageBody);
  };
  return (
    <>
      <BackToTop />
      <div className="block lg:hidden">
        <Navbar />
      </div>
      <section className="px-5 h-[500px] bg-MobileContactBG md:bg-ContactBG bg-cover bg-no-repeat">
        <div className="hidden lg:block">
          <Navbar />
        </div>

        <div className="pt-44 lg:pt-16 flex flex-col items-center text-center text-white">
          <h1 className="text-6xl leading-none md:text-8xl font-clashdisplay">
            Contact Us
          </h1>
          <p className="pt-8 lg:w-[903px] text-xl tracking-[0.4px]">
            If you're interested in ordering a Revive Earth Conversion Kit,
            please specify your vehicle type and any additional requirements in
            the message section.
          </p>
        </div>
      </section>

      <section className="bg-[#F3F8E9] px-5 xl:px-24 py-28">
        <div className="bg-white px-4 md:px-10 lg:px-14 xl:px-24 py-20 flex flex-col rounded-[10px]">
          <h3 className="uppercase text-3xl md:text-4xl font-clashdisplayVariable font-medium text-center">
            Choose Inquiry Category
          </h3>

          <div className="flex flex-wrap gap-8  py-12">
            {mailSubjects?.map((item, index) => {
              const { subject, icon } = item;
              return (
                <div
                  key={index}
                  onClick={() => handleSelectMailSubject(subject)}
                  className={`flex flex-col h-[88px] w-[328px] font-clashdisplayVariable text-xl  border-black cursor-pointer justify-center items-center ${
                    currentMailSubject === subject
                      ? 'bg-[#83BC25] text-white border-0'
                      : 'bg-[#F3F8E9]'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <img src={icon} alt="" />
                    {subject}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
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
