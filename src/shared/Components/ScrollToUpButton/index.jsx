import React, { useEffect, useState } from "react";
import Styles from "@/shared/Components/ScrollToUpButton/scrollToUp.module.scss";

const ScrollToUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 1000;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className={Styles.scrollButton}
      aria-label="Scroll to top"
    >
      <img
        className={Styles.scrollIcon}
        src="/assets/icons/arrow-up.svg"
        alt="Scroll to top"
      />
    </button>
  ) : null;
};

export default ScrollToUpButton;
