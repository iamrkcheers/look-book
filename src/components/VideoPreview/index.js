import React, { useEffect, useRef } from "react";
import "./styles.css";

const VideoPreview = ({ src, muted, onMuteToggle }) => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  const handleMuteButtonClick = (e) => {
    onMuteToggle();
    e.stopPropagation();
  };

  return (
    <div className="video-preview">
      <video ref={videoRef} src={src} autoPlay loop />
      <button onClick={handleMuteButtonClick} className="mute-button">
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
};

export default VideoPreview;
