import React, { useTransition } from "react";
import Styles from "@/shared/Components/PageNotFound/notFound.module.scss";
import { Link } from "react-router-dom";
import { urls } from "@/shared/Urls";
import { useTranslation } from "react-i18next";
const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className={Styles.notFoundContainer}>
      <div className={Styles.notFoundImage}>
        <img src="/assets/icons/not-found.svg" alt="NotFound-icon" />
      </div>
      <div className={Styles.notFoundInfo}>
        <p>{t("NotFound.paragraph")}</p>
      </div>
      <div className={Styles.notFoundButton}>
        <img
          className={Styles.arrowIcon}
          src="/assets/icons/arrow-left-base.svg"
          alt="ArrowLeft-icon"
        />
        <Link to={urls.HOME}>{t("NotFound.button")}</Link>
        <img
          className={Styles.homeIcon}
          src="/assets/icons/broken-house.svg"
          alt="BrokenHouse-icon"
        />
      </div>
    </div>
  );
};

export default NotFound;
