import React from "react";
import Styles from "@/shared/Components/Sliders/CardSlider/cardSlider.module.scss";
import SlideCard from "@/shared/Components/Cards/SlideCard";

const CardSlider = () => {
  const cards = [
    {
      image: "/assets/images/plumber.png",
      icon: "/assets/icons/plumber.svg",
      title: "cards.card1_title",
      paragraph: "cards.card1_paragraph",
      link: "cards.card_button",
    },
    {
      image: "/assets/images/Paver2.png",
      icon: "/assets/icons/hammer.svg",
      title: "cards.card2_title",
      paragraph: "cards.card2_paragraph",
      link: "cards.card_button",
    },
    {
      image: "/assets/images/Wallpaper-Master.png",
      icon: "/assets/icons/craft-knife.svg",
      title: "cards.card3_title",
      paragraph: "cards.card3_paragraph",
      link: "cards.card_button",
    },
    {
      image: "/assets/images/Electrician3.png",
      icon: "/assets/icons/screwdriver.svg",
      title: "cards.card4_title",
      paragraph: "cards.card4_paragraph",
      link: "cards.card_button",
    },
    {
      image: "/assets/images/Plasterer2.png",
      icon: "/assets/icons/trowel.svg",
      title: "cards.card5_title",
      paragraph: "cards.card5_paragraph",
      link: "cards.card_button",
    },
    {
      image: "/assets/images/Drywall-Master.png",
      icon: "/assets/icons/drill2.svg",
      title: "cards.card6_title",
      paragraph: "cards.card6_paragraph",
      link: "cards.card_button",
    },
  ];

  const BREAKPOINT_MOBILE = 568;
  const BREAKPOINT_TABLET = 1024;
  const BREAKPOINT_DESKTOP = 1230;

  const DESKTOP = { width: 300, gap: 30, visible: 3 };
  const DESKTOP_S = { width: 200, gap: 20, visible: 3 };
  const TABLET = { width: 200, gap: 15, visible: 2 };
  const MOBILE = { width: 200, gap: 15, visible: 1 };

  const [step, setStep] = React.useState(DESKTOP.width + DESKTOP.gap);
  const [visibleCards, setVisibleCards] = React.useState(DESKTOP.visible);

  React.useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let visible;

      if (width <= BREAKPOINT_MOBILE) {
        setStep(MOBILE.width + MOBILE.gap);
        visible = MOBILE.visible;
      } else if (width < BREAKPOINT_TABLET) {
        setStep(TABLET.width + TABLET.gap);
        visible = TABLET.visible;
      } else if (width < BREAKPOINT_DESKTOP) {
        setStep(DESKTOP_S.width + DESKTOP_S.gap);
        visible = DESKTOP_S.visible;
      } else {
        setStep(DESKTOP.width + DESKTOP.gap);
        visible = DESKTOP.visible;
      }

      setVisibleCards(visible);
      setIndex((i) => Math.min(i, cards.length - visible));
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const total = cards.length;
  const maxIndex = total - visibleCards;
  const maxTranslate = maxIndex * step;
  const [index, setIndex] = React.useState(0);

  const prev = () => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };

  const next = () => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  };

  return (
    <div className={Styles.sliderContainer}>
      <button className={Styles.prevButton} onClick={prev}>
        <img src="/assets/icons/arrow-left.svg" alt="arrow-left" />
      </button>

      <div className={Styles.sliderWindow}>
        <div
          className={Styles.sliderTrack}
          style={{
            transform: `translateX(-${Math.min(index * step, maxTranslate)}px)`,
          }}
        >
          {cards.map((card, i) => (
            <div className={Styles.slide} key={i}>
              <SlideCard
                image={card.image}
                icon={card.icon}
                title={card.title}
                par={card.paragraph}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>

      <button className={Styles.nextButton} onClick={next}>
        <img src="/assets/icons/arrow-right.svg" alt="arrow-right" />
      </button>
    </div>
  );
};

export default CardSlider;
