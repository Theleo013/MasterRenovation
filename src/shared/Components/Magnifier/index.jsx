import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "inner-image-zoom/lib/styles.min.css";

const Magnifier = ({ image }) => {
  return (
    <div>
      <InnerImageZoom
        src={image}
        zoomSrc={image}
        zoomType="hover"
        zoomPreload={true}
        zoomScale={1}
      />
    </div>
  );
};

export default Magnifier;
