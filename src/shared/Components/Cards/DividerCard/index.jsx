import React, { useEffect, useRef, useState } from "react";
import Styles from "@/shared/Components/Cards/DividerCard/dividerCard.module.scss";
import { useTranslation } from "react-i18next";

const DividerCard = ({ image, title, paragraph, reverse, inverse }) => {
  const { t } = useTranslation();
  const divideRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const divide = divideRef.current;
      if (divide) {
        const rect = divide.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsActive(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={Styles.dividerCardContainer}>
      <div
        className={`${Styles.dividerCardWrapper} ${
          reverse ? Styles.reverse : ""
        }`}
      >
        <div className={Styles.dividerCardImage}>
          <img src={image} alt="divider-image" />
        </div>
        <div
          ref={divideRef}
          className={`${Styles.divide} ${isActive ? Styles.active : ""} ${
            inverse ? Styles.inverse : ""
          }`}
        />
        <div className={Styles.dividerCardContent}>
          <h3>{t(title)}</h3>
          <p>{t(paragraph)}</p>
        </div>
      </div>
    </div>
  );
};

export default DividerCard;
