import React, { useState, useRef } from "react";
import PlayPauseButton from "./PlayPauseButton";
import AudioTrack from "./AudioTrack";

export default function Recording({
  recording,
  isPlaying,
  startPlaying,
  stopPlaying,
}) {
  const [duration, setDuration] = useState(null);

  const audioRef = useRef(new Audio(recording));

  audioRef.current.addEventListener("loadedmetadata", async () => {
    const audioElem = audioRef.current;
    while (audioElem.duration === Infinity) {
      await new Promise((r) => setTimeout(r, 1000));
      audioElem.currentTime = 10000000 * Math.random();
    }
    const duration = audioElem.duration;
    setDuration(duration);
  });

  return (
    <React.Fragment>
      {recording && duration ? (
        <React.Fragment>
          {isPlaying ? (
            <PlayPauseButton onClick={stopPlaying} pause="true" />
          ) : (
            <PlayPauseButton onClick={startPlaying} />
          )}
          <AudioTrack
            audioRef={audioRef}
            isPlaying={isPlaying}
            stopPlaying={stopPlaying}
            startPlaying={startPlaying}
            duration={duration}
          />
        </React.Fragment>
      ) : (
        "Loading..."
      )}
    </React.Fragment>
  );
}
