import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <InfinitySpin width="200" color="#2160bc" />
    </div>
  );
};

export default LoadingSpinner;
