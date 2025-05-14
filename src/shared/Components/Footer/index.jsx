import React, { useEffect, useRef, useState } from "react";
import Styles from "@/shared/Components/Footer/footer.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { urls } from "@/shared/Urls";
const Footer = () => {
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
    <div className={Styles.footerContainer}>
      <div className={Styles.footerLogo}>
        <div className={Styles.mainLogo}>
          <img src="/assets/main_logo.png" alt="footer-logo" />
        </div>
        <div className={Styles.mainParagraph}>
          <p>{t("footer.footer_paragraph")}</p>
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
      <div className={Styles.responsiveContainer}>
        <div className={Styles.footerInfo}>
          <span>{t("footer.footer_info_title")}</span>
          <ul>
            <li>
              <Link to={urls.HOME}>{t("footer.homepage")}</Link>
            </li>
            <li>
              <Link to={urls.SERVICES}>{t("footer.services")}</Link>
            </li>
            <li>
              <Link to={urls.PROJECTS}>{t("footer.projects")}</Link>
            </li>
            <li>
              <Link to={urls.ABOUT}>{t("footer.about")}</Link>
            </li>
          </ul>
        </div>
        <div
          ref={divideRef}
          className={`${Styles.footerDivide} ${isActive ? Styles.active : ""}`}
        />
        {/* <hr style={{ width: "0", height: "200px" }} /> */}
        <div className={Styles.footerSocials}>
          <span>{t("footer.footer_contact_title")}</span>
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
          <a
            href="https://wa.me/+994501112233"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/icons/whatsapp.svg" alt="whatsapp-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
