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
  } = props;
  return (
    <div className="box-wrapper">
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
            {shouldRecord ? (
              <ReactMic
                record={shouldRecord}
                strokeColor="#fff"
                backgroundColor="transparent"
                className="box__recorder"
              />
            ) : (
              <Microphone
                onClick={() => {
                  console.log("clicked on Microphone");
                  startRecord();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
