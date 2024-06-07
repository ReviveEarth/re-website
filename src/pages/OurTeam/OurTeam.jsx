import React from 'react';
import User1 from '../../assets/user1.png';
import User2 from '../../assets/user2.png';
import User3 from '../../assets/user3.png';
import User4 from '../../assets/user4.png';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CiLinkedin } from 'react-icons/ci';
import { SlSocialFacebook } from 'react-icons/sl';

const OurTeam = () => {
  const members = [
    {
      image: User1,
      name: 'Chukwuemeka',
      position: 'Founder/CEO',
      fb_link: 'https://www.facebook.com/',
      ig_link: 'https://www.instagram.com/',
      in_link: 'https://www.linkedin.com/',
    },
    {
      image: User2,
      name: 'Obinna',
      position: 'Senior Program Manager',
      fb_link: 'https://www.facebook.com/',
      ig_link: 'https://www.instagram.com/',
      in_link: 'https://www.linkedin.com/',
    },
    {
      image: User3,
      name: 'Leo Arcand',
      position: 'Co-Founder/CTO',
      fb_link: 'https://www.facebook.com/',
      ig_link: 'https://www.instagram.com/',
      in_link: 'https://www.linkedin.com/',
    },
    {
      image: User4,
      name: 'Arinze',
      position: 'Software Engineer',
      fb_link: 'https://www.facebook.com/',
      ig_link: 'https://www.instagram.com/',
      in_link: 'https://www.linkedin.com/',
    },
  ];
  return (
    <>
      <div className="bg-[#EEF1EA] px-5 py-28  lg:py-20">
        <section className="bg-white lg:mx-16 rounded-[10px]">
          <div className="px-2 flex flex-col text-center items-center py-12 md:py-20">
            <p className="font-bold text-[#4D4D4D]">OUR TEAM</p>
            <h1 className="text-3xl md:text-[54px] leading-none font-clashdisplay pb-6 pt-3">
              Meet the Revive Team
            </h1>
            <p className="text-xl text-[#4D4D4D] lg:w-[760px] font-light">
              Meet the Visionaries Driving the Future of Mobility at Revive
              Earth: Where Passion Meets Innovation in Every Bolt and Circuit
            </p>
          </div>
        </section>

        <section className="py-14 lg:p-16">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {members.map((member) => (
              <div className="bg-white border border-[#EAECF0]">
                <div className="flex flex-col  py-4">
                  <img
                    src={member.image}
                    alt=""
                    className="w-[200px] mx-auto"
                  />
                  <h3 className="px-4 pt-8 font-clashdisplay text-xl">
                    {member.name}
                  </h3>
                  <p className="px-4 text-sm pt-2">{member.position}</p>
                  <div className="px-4 flex gap-4 pt-5 overflow-x-scroll">
                    <a
                      href={member.fb_link}
                      target="_blank"
                      className="bg-[#F3F8E9] rounded-full p-2"
                    >
                      <SlSocialFacebook size={18} />
                    </a>
                    <a
                      href={member.ig_link}
                      target="_blank"
                      className="bg-[#F3F8E9] rounded-full p-2"
                    >
                      <FaInstagram size={18} />
                    </a>

                    <a
                      href={member.in_link}
                      target="_blank"
                      className="bg-[#F3F8E9] rounded-full p-2"
                    >
                      <CiLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default OurTeam;
