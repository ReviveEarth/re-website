import React, { useRef, useState, useEffect } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import Innov8 from '../assets/innov8.png';
import COP2 from '../assets/fuel.png';
import Tricycle from '../assets/re-tricycle.png';

import axios from 'axios';

const OurStories = () => {
  const carouselRef = useRef(null);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getBlogPosts = async () => {
    const medium_url =
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Revive.eth';
    setLoading(true);
    try {
      const response = await axios({
        method: 'GET',
        url: medium_url,
        crossdomain: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // console.log(data);

  useEffect(() => {
    getBlogPosts();
  }, []);

  const stories = [
    {
      image: Innov8,
      heading: 'Innov8 Boost Employment',
      text: 'Isreali Embassy, Innov8 Boost Employment, Bolster Nigeria’s Economic Prosperity Through i-FAIR...',
      link: '/',
    },
    {
      image: COP2,
      heading: 'EV100 Pledge',
      text: 'More than 110 companies have signed up to the EV100 pledge, committing to fully zero-emission vehicle fleets by 2030...',
      link: '/',
    },
    {
      image: Tricycle,
      heading: 'Global Market',
      text: 'Vehicle manufacturers representing more than 30% of the global market now have commitments to phase out fossil-fueled...',
      link: '/',
    },
    {
      image: COP2,
      heading: 'COP26 Declaration',
      text: 'The COP26 Declaration on Accelerating the Transition to 100% Zero-Emission Cars and Vans brought together over 35 countries, 6...',
      link: '/',
    },
  ];

  const breakPoints = [
    { width: 100, itemsToShow: 1 },
    { width: 200, itemsToShow: 1 },
    { width: 300, itemsToShow: 1 },
    { width: 400, itemsToShow: 1 },
    { width: 500, itemsToShow: 1.8 },
    { width: 600, itemsToShow: 2.2 },
    { width: 700, itemsToShow: 2.2 },
    { width: 900, itemsToShow: 2.3 },
    { width: 1000, itemsToShow: 2.6 },
    { width: 1200, itemsToShow: 3.39 },
  ];
  return (
    <>
      <section className="bg-[#1A1A1A] py-28 text-[#FFFFFB] px-5 lg:px-16">
        <div className="flex lg:justify-between items-center">
          <h1 className="font-medium text-5xl font-clashdisplay mb-10 lg:mb-0">
            Our Stories
          </h1>

          <div className="hidden lg:flex gap-14">
            <GoArrowLeft
              size={45}
              className="cursor-pointer"
              onClick={() => carouselRef.current.onPrevStart()}
            />
            <GoArrowRight
              size={45}
              className="cursor-pointer"
              onClick={() => carouselRef.current.onNextStart()}
            />
          </div>
        </div>

        <div className="hidden lg:block mt-14">
          <Carousel
            ref={carouselRef}
            showArrows={false}
            easing="ease"
            tiltEasing="ease"
            pagination={false}
            breakPoints={breakPoints}
            itemPadding={[0, 80, 0, 0]}
          >
            {data?.map((story, index) => Card(story, index))}
          </Carousel>
        </div>

        {/* mobile screen testimonial */}
        <div className="lg:hidden">
          {data?.map((story, index) => Card(story, index))}
        </div>
      </section>
    </>
  );
};

const Card = (story, index) => {
  const extractImageUrl = (text) => {
    const pattern = /src="([^"]*)"/;
    const match = text.match(pattern);

    console.log('Match result:', match);

    if (match && match[1]) {
      const url = match[1];
      const validImageExtensions = ['.jpg', '.jpeg', '.png'];

      // check if the URL ends with a valid image extension
      const isValidImage = validImageExtensions.some((extension) =>
        url.endsWith(extension)
      );

      if (isValidImage) {
        return url;
      }
    }
    return Innov8;
  };

  return (
    <div className="py-6">
      <div key={index} className="flex flex-col">
        <div className="h-[330px] w-full">
          <img
            src={extractImageUrl(story.description)}
            alt="Revive earth"
            className="w-full rounded-md object-cover h-full"
          />
        </div>
        <h5 className="text-lg font-clashdisplayVariable font-medium pt-5">
          {story.title}
        </h5>
        <p className="font-light text-sm  py-4">{story.text}</p>
        <div>
          <a
            href={story.link}
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center w-[100px] font-clashdisplayVariable font-medium text-sm  hover:opacity-80 transition-all duration-300"
          >
            Read More <GoArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurStories;
