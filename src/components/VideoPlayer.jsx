/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import { FaRegClosedCaptioning } from "react-icons/fa";
import { FaClosedCaptioning } from "react-icons/fa";

function VideoPlayer({ videoURL, captions }) {
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState("");
  const [captionVisible, setCaptionVisible] = useState(true);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = videoRef.current.currentTime;
      const activeCaption = captions.find(
        (caption) =>
          currentTime >= caption.startTime && currentTime < caption.endTime
      );
      console.log(activeCaption);
      setCurrentCaption(activeCaption ? activeCaption.text : "");
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [captions]);

  const handleToggleCaption = () => {
    setCaptionVisible(!captionVisible);
  };

  return (
    <div className="videoBox">
      <video ref={videoRef} src={videoURL} controls />
      {captionVisible && currentCaption.length > 0 && (
        <div className="caption">{currentCaption}</div>
      )}
      {videoURL.length > 0 && (
        <div className="captionIcon" onClick={handleToggleCaption}>
          {captionVisible ? <FaClosedCaptioning /> : <FaRegClosedCaptioning />}
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
