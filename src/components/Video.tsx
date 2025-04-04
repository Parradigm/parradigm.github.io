import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video-container">
      <video src="/parrodigm.mp4" width="2160" height="3840" autoPlay muted />
    </div>
  );
}

export default Video;
