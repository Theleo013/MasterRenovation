import React, { useState } from "react";
import Styles from "@/shared/Components/BurgerMenu/burgerMenu.module.scss";
import { Link } from "react-router-dom";
import { urls } from "@/shared/Urls";
import { useTranslation } from "react-i18next";

const BurgerMenu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={`${Styles.burgerMenu} ${open ? Styles.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className={Styles.line}></div>
        <div className={Styles.line}></div>
        <div className={Styles.line}></div>
      </button>

      <nav className={`${Styles.menu} ${open ? Styles.open : ""}`}>
        <Link to={urls.HOME}>{t("homepage.homepage")}</Link>
        <Link to={urls.SERVICES}>{t("services.services")}</Link>
        <Link to={urls.PROJECTS}> {t("projects.projects")}</Link>
        <Link to={urls.ABOUT}> {t("about.about")}</Link>
      </nav>
    </>
  );
};

export default BurgerMenu;
