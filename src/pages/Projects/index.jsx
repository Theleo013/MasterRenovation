import React from "react";
import Styles from "@/pages/Projects/projects.module.scss";
import { CompareSlider } from "@/shared/Components/Sliders/CompareSlider";
import DividerCard from "@/shared/Components/Cards/DividerCard";
import Magnifier from "@/shared/Components/Magnifier";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const Livingroom = {
    image: "/assets/images/living-room.png",
    title: "projects.project_living_room_title",
    par: "projects.project_living_room_paragraph",
  };

  const Corridor = {
    image: "/assets/images/corridor.png",
    title: "projects.project_hallway_title",
    par: "projects.project_hallway_paragraph",
  };

  const Kitchen = {
    image: "/assets/images/kitchen.png",
    title: "projects.project_kitchen_title",
    par: "projects.project_kitchen_paragraph",
  };

  const Bathroom = {
    image: "/assets/images/bathroom.png",
    title: "projects.project_bathroom_title",
    par: "projects.project_bathroom_paragraph",
  };

  const Kidsroom = {
    image: "/assets/images/kid's-room.png",
    title: "projects.project_kids_room_title",
    par: "projects.project_kids_room_paragraph",
  };
  const Bedroom = {
    image: "/assets/images/bedroom.png",
    title: "projects.project_bedroom_title",
    par: "projects.project_bedroom_paragraph",
  };

  return (
    <div className={Styles.projectsContainer}>
      <div className={Styles.mainContent}>
        <h1>{t("projects.projects_main_title")}</h1>
        <p>{t("projects.projects_main_paragraph")}</p>
      </div>
      <div className={Styles.compareSliderContainer}>
        <CompareSlider />
      </div>
      <div className={Styles.dividerCardContainer}>
        <div className={Styles.dividerCardTitle}>
          <h2>{t("projects.projects_intro_title")}</h2>
        </div>
        <div>
          <DividerCard
            image={Livingroom.image}
            title={Livingroom.title}
            paragraph={Livingroom.par}
          />
        </div>
        <div>
          <DividerCard
            image={Corridor.image}
            title={Corridor.title}
            paragraph={Corridor.par}
            reverse
            inverse
          />
        </div>

        <div>
          <DividerCard
            image={Kitchen.image}
            title={Kitchen.title}
            paragraph={Kitchen.par}
          />
        </div>
        <div>
          <DividerCard
            image={Bathroom.image}
            title={Bathroom.title}
            paragraph={Bathroom.par}
            reverse
            inverse
          />
        </div>

        <div>
          <DividerCard
            image={Kidsroom.image}
            title={Kidsroom.title}
            paragraph={Kidsroom.par}
          />
        </div>
        <div>
          <DividerCard
            image={Bedroom.image}
            title={Bedroom.title}
            paragraph={Bedroom.par}
            reverse
            inverse
          />
        </div>
      </div>
      <div className={Styles.magnifierContainer}>
        <Magnifier image={"/assets/images/room.png"} />
      </div>
    </div>
  );
};

export default Projects;
