import { useState, useEffect, useContext } from 'react';

import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon"

import "./scrollToTopButton.scss"

import { ThemeContext } from '../layout/Layout';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { theme } = useContext(ThemeContext)

  const myBtn = "myBtn-" + theme

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className={myBtn} title="Go to top">
          <ArrowUpIcon width={25} height={25}/>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
