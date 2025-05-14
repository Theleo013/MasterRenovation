import React from "react";
import Styles from "@/pages/Services/services.module.scss";
import LargeCard from "@/shared/Components/Cards/LargeCard";
import WhatsappLink from "@/shared/Components/WhatsappLink";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const Plumber = {
    image: "/assets/images/plumber2.png",
    icon: "/assets/icons/plumber.svg",
    title: "cards.card1_title",
    paragraph: "cards.card1_paragraph",
  };
  const Paver = {
    image: "/assets/images/Paver.png",
    icon: "/assets/icons/hammer.svg",
    title: "cards.card2_title",
    paragraph: "cards.card2_paragraph",
  };
  const WallpaperMaster = {
    image: "/assets/images/wallpaper-master2.png",
    icon: "/assets/icons/craft-knife.svg",
    title: "cards.card3_title",
    paragraph: "cards.card3_paragraph",
  };
  const Electrician = {
    image: "/assets/images/Electrician.png",
    icon: "/assets/icons/screwdriver.svg",
    title: "cards.card4_title",
    paragraph: "cards.card4_paragraph",
  };
  const Plasterer = {
    image: "/assets/images/plasterer3.png",
    icon: "/assets/icons/trowel.svg",
    title: "cards.card5_title",
    paragraph: "cards.card5_paragraph",
  };
  const DrywallMaster = {
    image: "/assets/images/drywall-master2.png",
    icon: "/assets/icons/drill2.svg",
    title: "cards.card5_title",
    paragraph: "cards.card5_paragraph",
  };

  return (
    <div className={Styles.servicesContainer}>
      <div className={Styles.servicesMainContent}>
        <div className={Styles.servicesMainTitle}>
          <h1>{t("services.services_main_title")}</h1>
          <p>{t("services.services_main_paragraph")}</p>
        </div>
        <div className={Styles.servicesMainImage}>
          <img src="/assets/images/services-image.png" alt="main-image" />
        </div>
      </div>
      <div className={Styles.servicesCardsContainer}>
        <div className={Styles.servicesCard}>
          <LargeCard
            image={Plumber.image}
            icon={Plumber.icon}
            title={Plumber.title}
            par={Plumber.paragraph}
          />
          <LargeCard
            image={Paver.image}
            icon={Paver.icon}
            title={Paver.title}
            par={Paver.paragraph}
          />
          <LargeCard
            image={WallpaperMaster.image}
            icon={WallpaperMaster.icon}
            title={WallpaperMaster.title}
            par={WallpaperMaster.paragraph}
          />
        </div>
        <div className={Styles.servicesCard}>
          <LargeCard
            image={Electrician.image}
            icon={Electrician.icon}
            title={Electrician.title}
            par={Electrician.paragraph}
          />
          <LargeCard
            image={Plasterer.image}
            icon={Plasterer.icon}
            title={Plasterer.title}
            par={Plasterer.paragraph}
          />
          <LargeCard
            image={DrywallMaster.image}
            icon={DrywallMaster.icon}
            title={DrywallMaster.title}
            par={DrywallMaster.paragraph}
          />
        </div>
      </div>
      <div className={Styles.complaintContainer}>
        <div className={Styles.complaintWrapper}>
          <div className={Styles.complaintImage}>
            <img src="/assets/images/expert4.png" alt="expert-image" />
          </div>
          <div className={Styles.complaintContent}>
            <h3>{t("services.services_question_title")}</h3>
            <p>{t("services.services_question_paragraph")}</p>
            <div className={Styles.servicesContact}>
              <img src="/assets/icons/phone.svg" alt="phone-icon" />
              <span>{t("homepage.contact")}</span>
              <span>+994-050-111-22-33</span>
              <span>{t("homepage.or")}</span>
              <div className={Styles.wpLink}>
                <WhatsappLink image={"assets/icons/whatsapp-main.svg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
