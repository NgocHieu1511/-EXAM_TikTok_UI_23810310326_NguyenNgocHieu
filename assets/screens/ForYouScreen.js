import React from "react";
import VideoScreen from "./VideoScreen";

export default function ForYouScreen() {
  return (
    <VideoScreen
      image={require("../img/home-bg.png")}
      user="craig_love"
      likes="328K"
      caption="The most satisfying Job #fyp #satisfying #roadmarking"
      musicText="Roddy Roundicch - The Rou"
      music={require("../img/music2.jpg")}
      avt={require("../img/Home-avt.png")}
    />
  );
}
