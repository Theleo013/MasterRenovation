import React from "react";
import Styles from "@/shared/Components/Cards/heroCard/heroCard.module.scss";
import { useTranslation } from "react-i18next";
import VideoPlayer from "@/shared/Components/VideoPlayer";

const HeroCard = ({ image, title, paragraph, video, reverse }) => {
  const { t } = useTranslation();

  return (
    <div className={Styles.heroCardContainer}>
      <div
        className={`${Styles.heroCardWrapper} ${reverse ? Styles.reverse : ""}`}
      >
        <div className={Styles.mediaWrapper}>
          {image ? <img src={image} alt="plasterer-image" /> : null}
          {video ? (
            <div className={Styles.video}>
              <VideoPlayer videoSrc={video} />
            </div>
          ) : null}
        </div>
        <div className={Styles.content}>
          <span>{t(title)}</span>
          <p>{t(paragraph)}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
