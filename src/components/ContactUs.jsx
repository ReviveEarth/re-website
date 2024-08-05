import React, { useState } from 'react';
import axios from 'axios';
import Keke from '../assets/rb-keke.jpg';

const ContactUs = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [sendMessageStatus, setSendMessageStatus] = useState(false);

  const [submitStatus, setSubmitStatus] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSumbit = async (e) => {
    setErrorMessage(null);
    e.preventDefault();
    if (
      formData.fullName === '' ||
      formData.email === '' ||
      formData.phoneNumber === '' ||
      formData.message === ''
    ) {
      setErrorMessage('Please all fields required');
      return;
    }

    const data = new FormData();
    data.append('Name', formData.fullName);
    data.append('Email', formData.email);
    data.append('Phone', formData.phoneNumber);
    data.append('Message', formData.message);

    const sheet_url =
      'https://script.google.com/macros/s/AKfycbzvY7DGJX9zqQwlFbB-GXZF47C0ASax_TsJQCoF2ytw9wvjl8NniHf5KNQn0-BTuBWvjA/exec';
    try {
      setSendMessageStatus(true);

      await fetch(sheet_url, {
        method: 'POST',
        body: data,
        muteHttpExceptions: true,
      });

      setSuccessMessage('Message sent successfully!!');
      setSendMessageStatus(false);

      setFormData({
        fullName: '',
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
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-[0.5px] px-4 text-sm focus:border-[#1c290f] focus:outline-none border-[#0F0B0B] rounded-[5px] py-3 placeholder:text-[#0F0B0B] placeholder:text-sm"
            />

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-[0.5px] px-4 text-sm focus:border-[#1c290f] focus:outline-none border-[#0F0B0B] rounded-[5px] py-3 placeholder:text-[#0F0B0B] placeholder:text-sm"
            />

            <input
              type="number"
              placeholder="Your Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border-[0.5px] px-4 text-sm focus:border-[#1c290f] focus:outline-none border-[#0F0B0B] rounded-[5px] py-3 placeholder:text-[#0F0B0B] placeholder:text-sm"
            />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-[0.5px] px-4 text-sm focus:border-[#1c290f] focus:outline-none border-[#0F0B0B] rounded-[5px] py-4 placeholder:text-[#0F0B0B] placeholder:text-sm"
            ></textarea>

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
              className="bg-[#1C290F] text-white font-semibold py-3"
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
