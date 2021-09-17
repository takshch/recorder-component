import React from "react";

export default function BoxHeaderDetails(props) {
  const { status, timeSpent, totalTime } = props;
  const totalTimeString = totalTime;
  return (
    <div className="box__details">
      <span className="box__text box__text--status">{status}</span>
      <div className="box__timer">
        <span className="box__text box__text--time-spent">{timeSpent}</span>
        <span className="box__text box__text--total-time">/ {totalTime}</span>
      </div>
    </div>
  );
}
