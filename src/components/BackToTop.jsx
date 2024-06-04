import React, { useEffect, useState } from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';

const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const scroll = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else setShowBtn(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBtn, window.scrollY]);

  return (
    <>
      {showBtn ? (
        <button
          onClick={scroll}
          className="bg-white z-20 shadow-xl inline-flex items-center justify-center w-[48px] h-[48px] rounded-full fixed bottom-[32px] right-5 md:right-[60px]"
        >
          <FaLongArrowAltUp />
        </button>
      ) : null}
    </>
  );
};

export default BackToTop;
