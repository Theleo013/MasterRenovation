import React from "react";
import Styles from "@/shared/Components/Cards/largeCard/largeCard.module.scss";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
const Cards = ({ image, icon, title, par }) => {
  const { t } = useTranslation();
  return (
    <div className={Styles.cardsContainer}>
      <div className={Styles.cardImagesWrapper}>
        <div className={Styles.cardImage}>
          <img src={image} alt="image" />
          <div className={Styles.cardIcon}>
            <img src={icon} alt="icon" />
          </div>
        </div>
      </div>
      <div className={Styles.cardContentContainer}>
        <h3>{t(title)}</h3>
        <p>{t(par)}</p>
      </div>
    </div>
  );
};

export default Cards;
