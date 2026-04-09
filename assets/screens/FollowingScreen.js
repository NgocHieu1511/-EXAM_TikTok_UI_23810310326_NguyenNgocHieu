import React from "react";
import VideoScreen from "./VideoScreen";

export default function FollowingScreen() {
  return (
    <VideoScreen
      image={require("../img/following-bg.png")}
      user="karennne · 1-28"
      likes="4445"
      caption="#avicii #wflove"
      musicText="Avicii - Waiting For Love (ft...)"
      music={require("../img/music1.jpg")}
      avt={require("../img/following-avt.png")}
    />
  );
}
