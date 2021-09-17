import React, { useState, useEffect, useRef } from "react";

export default function AudioTrack({
  audioRef,
  isPlaying,
  startPlaying,
  stopPlaying,
  duration,
}) {
  //state
  const [trackProgress, setTrackProgress] = useState(0);
  const intervalRef = useRef();

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!audioRef.current.ended) {
        setTrackProgress(audioRef.current.currentTime);
      } else {
        setTrackProgress(0);
        stopPlaying({ end: true });
      }
    }, []);
  };

  // const onScrub = (value) => {
  //   clearInterval(intervalRef.current);
  //   audioRef.current.currentTime = value;
  //   setTrackProgress(audioRef.current.currentTime);
  // };

  // const onScrubEnd = () => {
  //   // If not already playing, start
  //   if (!isPlaying) {
  //     startPlaying();
  //   }
  //   startTimer();
  // };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    //runs only once
    audioRef.current.currentTime = 0;
    setTrackProgress(audioRef.current.currentTime);

    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <React.Fragment>
      <input
        type="range"
        value={trackProgress}
        min="0"
        step="0.001"
        max={duration ? duration : `${duration}`}
        className="box__progress"
        readOnly
      />
    </React.Fragment>
  );
}
