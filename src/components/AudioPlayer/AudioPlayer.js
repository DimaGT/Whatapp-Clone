import { CircularProgress } from "@material-ui/core";
import { PauseRounded, PlayArrowRounded } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import "./AudioPlayer.css";

export default function AudioPlayer({
  sender,
  audioUrl,
  id,
  setAudioId,
  audioId,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMediaLoaded, setIsMediaLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMetadataLoaded, setIsMetadataLoaded] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [duration, setDuration] = useState("");
  return (
    <>
      <div className={`audioplayer ${sender ? "" : "audioplayer__alt"}`}>
        {!isMediaLoaded ? (
          <CircularProgress />
        ) : isPlaying ? (
          <PauseRounded className="pause" />
        ) : !isPlaying ? (
          <PlayArrowRounded />
        ) : null}
        <div>
          <span
            style={{ width: `${sliderValue}%` }}
            className="audioplayer__slider--played"
          />
          <input
            type="range"
            min={"1"}
            max={"100"}
            value={sliderValue}
            className="audioplayer__slider"
          />
        </div>
      </div>
      <span className="chat__timestamp audioplayer__time">{duration}</span>
    </>
  );
}
