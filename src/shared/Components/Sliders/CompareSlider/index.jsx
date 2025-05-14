import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Styles from "@/shared/Components/Sliders/CompareSlider/compareSlider.module.scss";
export const CompareSlider = () => {
  return (
    <div>
      <ReactCompareSlider
        className={Styles.compareSliderContainer}
        itemOne={
          <ReactCompareSliderImage
            src="/assets/images/SliderImage/wall-before2.png"
            alt="wall-before"
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="/assets/images/SliderImage/wall-after.png"
            alt="wall-after"
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
          />
        }
      />
    </div>
  );
};
