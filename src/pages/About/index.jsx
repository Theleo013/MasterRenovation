import React from "react";
import Styles from "@/pages/About/about.module.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={Styles.aboutConatiner}>
      <div className={Styles.aboutMainContent}>
        <div className={Styles.aboutMainTitle}>
          <h1>{t("about.about_experience_title")}</h1>
          <p>{t("about.about_experience_paragraph")}</p>
        </div>
        <div className={Styles.aboutMainImage}>
          <img src="/assets/images/repair.png" alt="office-image" />
        </div>
      </div>
      <div className={Styles.aboutCommitment}>
        <div className={Styles.commitmentTitle}>
          <h2>{t("about.about_commitments_title")}</h2>
          <p>{t("about.about_commitments_paragraph")}</p>
        </div>
        <div className={Styles.commitmentContentWrapper}>
          <div className={Styles.commitmentContent}>
            <div className={Styles.commitmentIcon}>
              <img src="/assets/icons/handshake.svg" alt="handshake-icon" />
            </div>
            <div className={Styles.commitmentText}>
              <span>{t("about.about_responsibility_title")}</span>
              <p>{t("about.about_responsibility_paragraph")}</p>
            </div>
          </div>
          <div className={Styles.commitmentContent}>
            <div className={Styles.commitmentIcon}>
              <img src="/assets/icons/quality.svg" alt="quality-icon" />
            </div>
            <div className={Styles.commitmentText}>
              <span>{t("about.about_quality_title")}</span>
              <p>{t("about.about_quality_paragraph")}</p>
            </div>
          </div>
          <div className={Styles.commitmentContent}>
            <div className={Styles.commitmentIcon}>
              <img src="/assets/icons/safety.svg" alt="safety-icon" />
            </div>
            <div className={Styles.commitmentText}>
              <span>{t("about.about_safety_title")}</span>
              <p>{t("about.about_safety_paragraph")}</p>
            </div>
          </div>
          <div className={Styles.commitmentContent}>
            <div className={Styles.commitmentIcon}>
              <img src="/assets/icons/master.svg" alt="master-icon" />
            </div>
            <div className={Styles.commitmentText}>
              <span>{t("about.about_professionalism_title")}</span>
              <p>{t("about.about_professionalism_paragraph")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.aboutContentmentContainer}>
        <div className={Styles.aboutContentment}>
          <div className={Styles.customerWrapper}>
            <div className={Styles.customerImage}>
              <img src="/assets/images/customer.png" alt="customer-image" />
            </div>
            <div className={Styles.customerContent}>
              <div className={Styles.customerTitle}>
                <h2>{t("about.about_customer_satisfaction_title")}</h2>
                <p>{t("about.about_customer_satisfaction_paragraph")}</p>
              </div>
              <div className={Styles.customerPoints}>
                <div>
                  <img src="/assets/icons/ok.svg" alt="ok-icon" />
                  <p>{t("about.about_customer_satisfaction_point1")}</p>
                </div>
                <div>
                  <img src="/assets/icons/ok.svg" alt="ok-icon" />
                  <p> {t("about.about_customer_satisfaction_point2")}</p>
                </div>
                <div>
                  <img src="/assets/icons/ok.svg" alt="ok-icon" />
                  <p>{t("about.about_customer_satisfaction_point3")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.expertWrapper}>
            <div className={Styles.experContent}>
              <h2>{t("about.about_professional_experts_title")}</h2>
              <p>{t("about.about_professional_experts_paragraph")}</p>
            </div>
            <div className={Styles.expertImage}>
              <img
                src="/assets/images/drywall-master3.png"
                alt="expert-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
