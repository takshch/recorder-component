import React from "react";
import PauseButton from "./PauseButton";
import Microphone from "./Microphone";
import PlayButton from "./PlayButton";
import BoxButton from "./BoxButton";
import { ReactMic } from "react-mic";

export default function Box(props) {
  const {
    status,
    timeSpent,
    totalTime,
    shouldRecord,
    pauseRecord,
    startRecord,
    onStop,
    visible,
  } = props;

  return (
    <div className={`box-wrapper ${visible ? "" : "box-wrapper--hidden"}`}>
      <div className="box">
        <div className="box__header">
          <div className="box__details">
            <span className="box__text box__text--status">{status}</span>
            <div className="box__timer">
              <span className="box__text box__text--time-spent">
                {timeSpent}
              </span>
              <span className="box__text box__text--total-time">
                / {totalTime}
              </span>
            </div>
          </div>
          <div className="box__actions">
            {shouldRecord ? <PauseButton onClick={pauseRecord} /> : null}
            <BoxButton text="Send" />
          </div>
        </div>
        <div className="box__bottom">
          <div>
            <ReactMic
              record={shouldRecord}
              onStop={onStop}
              visualSetting="sinewave"
              strokeColor="#fff"
              backgroundColor="#061732"
              className="box__recorder"
              mimeType="audio/webm"
              className="box__recorder"
              echoCancellation={true}
              autoGainControl={true}
              noiseSuppression={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
