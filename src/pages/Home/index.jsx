import React from "react";
import Styles from "@/pages/Home/home.module.scss";
import CardSlider from "@/shared/Components/Sliders/CardSlider";
import HeroCard from "@/shared/Components/Cards/HeroCard";
import WhatsappLink from "@/shared/Components/WhatsappLink";
import { Link } from "react-router-dom";
import { urls } from "@/shared/Urls";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();

  const Experience = {
    image: "/assets/images/Plasterer.png",
    title: "homepage.homepage_experience_title",
    paragraph: "homepage.homepage_experience_paragraph",
  };
  const OurWork = {
    video: "/assets/videos/video1.mp4",
    title: "homepage.our_work_title",
    paragraph: "homepage.our_work_paragraph",
  };

  const Expert = {
    image: "/assets/images/Expert.png",
    title: "homepage.cta_title",
    paragraph: "homepage.cta_paragraph",
    icon: "/assets/icons/phone2.svg",
  };
  return (
    <div className={Styles.homeContainer}>
      <div className={Styles.mainContentContainer}>
        <div className={Styles.mainContent}>
          <h1>{t("homepage.homepage_main_title")}</h1>
          <p>{t("homepage.homepage_intro_paragraph")}</p>
          <img
            className={Styles.responsiveImage}
            src="/assets/images/mainImage.png"
            alt="main-image"
          />
          <div className={Styles.buttonContainer}>
            <Link to={urls.SERVICES}>
              {t("homepage.homepage_services_button")}
            </Link>
            <img
              className={Styles.buttonIcon}
              src="/assets/icons/arrow-square.svg"
              alt="arrow-icon"
            />
          </div>
        </div>
        <div className={Styles.mainImage}>
          <img src="/assets/images/mainImage.png" alt="main-image" />
        </div>
      </div>
      <div>
        <HeroCard
          image={Experience.image}
          title={Experience.title}
          paragraph={Experience.paragraph}
        />
      </div>

      <div className={Styles.mainSlider}>
        <CardSlider />
      </div>
      <div>
        <HeroCard
          video={OurWork.video}
          title={OurWork.title}
          paragraph={OurWork.paragraph}
          reverse
        />
      </div>

      <div className={Styles.expertContainer}>
        <div className={Styles.expertImage}>
          <img src={Expert.image} alt="expert" />
        </div>
        <div className={Styles.expertContent}>
          <h3>{t(Expert.title)}</h3>
          <p>{t(Expert.paragraph)}</p>
          <div className={Styles.expertContact}>
            <img src={Expert.icon} alt="phone-icon" />
            <span>{t("homepage.contact")}:</span>
            <span>+994-050-111-22-33</span>
            <span>{t("homepage.or")}</span>
            <div className={Styles.wpLink}>
              <WhatsappLink image={"/assets/icons/whatsapp-main.svg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
