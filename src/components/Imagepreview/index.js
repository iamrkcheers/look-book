import React, { useEffect, useRef } from "react";
import "./styles.css";

const ImagePreview = ({ src, legends, onLegendClick }) => {
  const progressRef = useRef();

  useEffect(() => {
    const progressBar = progressRef.current;
    progressBar.style.transition = "width 5s linear";
    progressBar.style.width = "100%";

    return () => {
      progressBar.style.transition = "";
      progressBar.style.width = "0";
    };
  }, [src]);

  return (
    <div className="image-preview">
      <img src={src} alt="Look Item" />
      {legends &&
        legends?.map((legend, index) => (
          <div
            key={index}
            className="legend-dot"
            style={{ top: legend?.top, left: legend?.left }}
            onClick={() => onLegendClick(index)}
          />
        ))}
      <div className="progress-bar">
        <div ref={progressRef} className="progress" />
      </div>
    </div>
  );
};

export default ImagePreview;
