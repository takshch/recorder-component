import React from "react";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import BoxButton from "./BoxButton";

export default function Box() {
  return (
    <div className="box-wrapper">
      <div className="box">
        <div className="box__header">
          <div className="box__details">
            <span className="box__text box__text--grey">Start</span>
            <span>
              <span className="box__text box__text--timer">00:00</span>
              <span className="box__text box__text--grey-2"> / 00:00</span>
            </span>
          </div>
          <div className="box__actions">
            <BoxButton text="Send" />
          </div>
        </div>
        <div className="box__bottom"></div>
      </div>
    </div>
  );
}
