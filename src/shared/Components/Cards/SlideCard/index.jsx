import React from "react";
import Styles from "@/shared/Components/Cards/SlideCard/slideCard.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { urls } from "@/shared/Urls";

const SlideCard = ({ image, icon, title, par, link }) => {
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
        <div className={Styles.cardButton}>
          <Link to={urls.SERVICES}>{t(link)}</Link>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
