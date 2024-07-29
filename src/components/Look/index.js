import React, { useState, useEffect } from "react";
import ImagePreview from "../Imagepreview";
import VideoPreview from "../VideoPreview";
import Carousel from "../Carousel";
import useSwipe from "../../hooks/useSwipe";
import "./styles.css";

const Look = ({ look, handleNextLook, handlePrevLook }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [activeLegendIndex, setActiveLegendIndex] = useState(0);

  const handleNextItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % look?.items?.length);
  };

  const handlePrevItem = () => {
    setCurrentItemIndex(
      (prevIndex) => (prevIndex - 1 + look?.items?.length) % look?.items?.length
    );
  };

  useEffect(() => {
    setCurrentItemIndex(0);
  }, [look]);

  useEffect(() => {
    if (look?.items[currentItemIndex]?.type === "image") {
      const timer = setTimeout(handleNextItem, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentItemIndex, look?.items]);

  const handleLegendClick = (index) => {
    setActiveLegendIndex(index);
  };

  const currentItem = look?.items[currentItemIndex];

  useSwipe(handleNextLook, handlePrevLook, handleNextItem, handlePrevItem);

  return (
    <div className="look">
      <button
        onClick={handlePrevItem}
        className="nav-button left-button"
      ></button>
      <button
        onClick={handleNextItem}
        className="nav-button right-button"
      ></button>
      {currentItem?.type === "image" ? (
        <>
          <ImagePreview
            src={currentItem?.src}
            legends={look?.legends}
            onLegendClick={handleLegendClick}
          />
        </>
      ) : (
        <VideoPreview
          src={currentItem?.src}
          muted={muted}
          onMuteToggle={() => setMuted(!muted)}
        />
      )}
      <Carousel cards={look?.legends} activeIndex={activeLegendIndex} />
    </div>
  );
};

export default Look;
