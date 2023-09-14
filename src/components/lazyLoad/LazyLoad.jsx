import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoad = ({ image }) => {
  return (
    <LazyLoadImage
      src={image.src}
      effect="blur"
      width={image.width}
      height={image.height}
      style={{ display: "block" }}
    />
  );
};

export default LazyLoad;
