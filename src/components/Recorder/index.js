import React, { useState, useEffect, useMemo } from "react";
import Recording from "./Recording";
import { ReactMic } from "../../react-mic/index";
import BoxHeaderActions from "./HeaderActions";
import BoxHeaderDetails from "./HeaderDetails";
import CountUpTimer from "../../custom-hooks/CountUpTimer";

const visualizerGradient = (ctx) => {
  const gradient = ctx.createLinearGradient(0, 50, 640, 50);
  gradient.addColorStop(0, "#b721ff");
  gradient.addColorStop(1, "#21d4fd");

  return gradient;
};

export default function Recorder({ seconds: maxTime, hasStarted }) {
  const [status, setStatus] = useState("Start");
  const [stillRecording, setStillRecording] = useState(false);
  const [totalTime, setTotalTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(null);
  const [hasRecording, setHasRecording] = useState(false);
  const [recording, setRecording] = useState(null);
  const [isPlaying, setIsPlaying] = useState(null);
  const [recordedTime, setRecordedTime] = useState(null);

  const time = {
    seconds: 30,
  };

  const {
    seconds,
    minutes,
    start: startTimer,
    pause: pauseTimer,
    restart: restartTimer,
  } = CountUpTimer({
    time,
    onExpire: (time) => {
      if (!recordedTime) {
        setRecordedTime(time);
        setStillRecording(false);
      }
    },
  });

  const onStop = (recordedBlob) => {
    const { blobURL } = recordedBlob;

    setRecording(blobURL);
    setHasRecording(true);
  };

  const setTimeInverval = () => {
    const time = new Date();
    const seconds = parseInt(maxTime, 10);
    time.setSeconds(time.getSeconds() + seconds);
    restartTimer(time);
  };

  const startRecording = () => {
    setTimeInverval();
    setStillRecording(true);
    startTimer();
    setStatus("Recording");
  };

  const stopRecording = () => {
    setStillRecording(false);
    pauseTimer();
    setStatus("Recording pause");
  };

  const startPlaying = () => {
    if (isPlaying === null) {
      restartTimer(recordedTime);
    } else {
      startTimer();
    }

    setIsPlaying(true);
    setStatus("Recording playing");
  };

  const stopPlaying = ({ end }) => {
    if (end) {
      restartTimer(recordedTime);
    }

    pauseTimer();
    setIsPlaying(false);
    setStatus("Recording pause");
  };

  const timeGen = (seconds = 0, minutes = 0) => {
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  useEffect(() => {
    if (hasStarted) startRecording();
  }, [hasStarted]);

  useEffect(() => {
    const totalTime = timeGen(time.seconds, time.minutes);
    setTotalTime(totalTime);
  }, [time]);

  useEffect(() => {
    const totalTime = timeGen(seconds, minutes);
    setTimeSpent(totalTime);
  }, [seconds, minutes]);

  return (
    <div className="box">
      <div className="box__header">
        <BoxHeaderDetails
          status={status}
          timeSpent={timeSpent}
          totalTime={totalTime}
        />
        <BoxHeaderActions
          hasRecording={hasRecording}
          recording={recording}
          stillRecording={stillRecording}
          stopRecording={stopRecording}
        />
      </div>
      <div className="box__bottom">
        <div className="box__recording">
          {hasRecording ? (
            <Recording
              recording={recording}
              isPlaying={isPlaying}
              startPlaying={startPlaying}
              stopPlaying={stopPlaying}
            />
          ) : (
            <ReactMic
              record={stillRecording}
              onStop={onStop}
              visualSetting="sinewave"
              strokeColor={visualizerGradient}
              backgroundColor="#061732"
              className="box__recorder"
              mimeType="audio/mp3"
              className="box__recorder"
              echoCancellation={true}
              autoGainControl={true}
              noiseSuppression={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function pad(n) {
  return n < 10 ? "0" + n : n;
}
