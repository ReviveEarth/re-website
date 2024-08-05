import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import BackToTop from '../../components/BackToTop';

const Index = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [sendMessageStatus, setSendMessageStatus] = useState(false);

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

  const handleSumbit = async (e) => {
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

    const data = new FormData();
    data.append('Firstname', messageBody.firstName);
    data.append('Lastname', messageBody.lastName);
    data.append('Email', messageBody.email);
    data.append('Phone', messageBody.phoneNumber);
    data.append('Message', messageBody.message);

    const sheet_url =
      'https://script.google.com/macros/s/AKfycbyrFXIEL-VdRsoEDsOkbz_4E0B3HmnClXENz81Hwtshpoph6nLRLmIcBxtepLv5iUK19w/exec';

    try {
      setSendMessageStatus(true);

      await fetch(sheet_url, {
        method: 'POST',
        body: data,
        muteHttpExceptions: true,
      });

      setSuccessMessage('Message sent successfully!!');
      setSendMessageStatus(false);

      setMessageBody({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      setSendMessageStatus(false);
      console.log(error);
    }
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
            {errorMessage ? (
              <p className="self-end font-light text-right text-xs mt-[8px] text-red-600 ">
                {errorMessage}
              </p>
            ) : (
              <p className="self-end font-light text-right text-xs mt-[8px] text-green-600 ">
                {successMessage}
              </p>
            )}

            <button
              onClick={handleSumbit}
              className=" text-white py-4 font-semibold bg-[#1C290F]"
            >
              {sendMessageStatus ? (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline-flex items-center w-4 h-4 mr-2 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              ) : null}
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
