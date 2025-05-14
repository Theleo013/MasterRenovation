import React from "react";
import Styles from "@/shared/Components/Header/header.module.scss";
import { Link } from "react-router-dom";
import WhatsappLink from "@/shared/Components/WhatsappLink";
import { urls } from "@/shared/Urls";
import { useTranslation } from "react-i18next";
import Dropdown from "@/shared/Components/Dropdown";
import BurgerMenu from "@/shared/Components/BurgerMenu";
const Header = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { t } = useTranslation();
  return (
    <div className={Styles.headerConatiner}>
      <div className={Styles.headerConnectContainer}>
        <div className={Styles.headerConnection}>
          <ul>
            <li>
              <img src="/assets/icons/gmail.svg" alt="phone-icon" />
              <span>pesekartemir@gmail.com</span>
            </li>
            <li>
              <img src="/assets/icons/phone.svg" alt="phone-icon" />
              <span>+994-050-111-22-33</span>
            </li>
            <li>
              <img src="/assets/icons/phone.svg" alt="phone-icon" />
              <span>+994-050-111-22-33</span>
            </li>
          </ul>
        </div>
        <div className={Styles.headerSocials}>
          <div className={Styles.headerSocialsIcons}>
            <a
              href="https://www.instagram.com/pesekar_temir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons/instagram.svg" alt="instagram-icon" />
            </a>
            <a
              href="https://www.tiktok.com/@pesekar_temir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons/tiktok.svg" alt="tiktok-icon" />
            </a>
            <div className={Styles.socialWhatsapp}>
              <WhatsappLink image={"assets/icons/whatsapp-main.svg"} />
            </div>
          </div>
          <div className={Styles.languageSwitcher}>
            <Dropdown />
          </div>
        </div>
      </div>
      <div className={Styles.headerMain}>
        <div className={Styles.headerIconsLeft}>
          <div className={Styles.leftUp}>
            <img src="/assets/icons/hammer-gavel.svg" alt="hammer-gavel" />
            <img src="/assets/icons/paint-brush.svg" alt="paint-brush" />
          </div>
          <div className={Styles.leftDown}>
            <img src="/assets/icons/trowel-round.svg" alt="trowel-round" />
          </div>
        </div>
        <div className={Styles.mainLogo}>
          <img src="/assets/main_logo.png" alt="main-logo" />
          <div className={Styles.burgerMenuContainer}>
            <BurgerMenu />
          </div>
        </div>
        <div className={Styles.headerIconsRight}>
          <div className={Styles.rightUp}>
            <img src="/assets/icons/paint-roller.svg" alt="paint-roller" />
            <img
              src="/assets/icons/wrench-mechanical.svg"
              alt="wrench-mechanical"
            />
          </div>
          <div className={Styles.rightDown}>
            <img
              src="/assets/icons/screwdriver-round.svg"
              alt="screwdriver-round"
            />
          </div>
        </div>
        <div className={Styles.headerLinks}>
          <ul>
            <li>
              <Link to={urls.HOME}>{t("homepage.homepage")}</Link>
            </li>
            <li>
              <Link to={urls.SERVICES}>{t("services.services")}</Link>
            </li>
            <li>
              <Link to={urls.PROJECTS}>{t("projects.projects")}</Link>
            </li>
            <li>
              <Link to={urls.ABOUT}>{t("about.about")}</Link>
            </li>
          </ul>
        </div>
        <div className={Styles.connection}>
          <WhatsappLink image={"assets/icons/whatsapp-logo.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
