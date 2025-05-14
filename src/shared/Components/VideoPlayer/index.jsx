import React from "react";
import ReactPlayer from "react-player";
import Styles from "@/shared/Components/VideoPlayer/videoPlayer.module.scss";

const VideoPlayer = ({ videoSrc }) => (
  <ReactPlayer
    style={{ background: "black" }}
    className={Styles.videoPlayer}
    url={videoSrc}
    controls
  />
);

export default VideoPlayer;
