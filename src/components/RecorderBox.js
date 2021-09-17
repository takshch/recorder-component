import React, { useState, useEffect } from "react";
import Microphone from "./Microphone";
import Recorder from "./Recorder/index";

export default function RecorderBox() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="recorder">
      <div className={`box-wrapper ${hasStarted ? "" : "box-wrapper--hidden"}`}>
        <Recorder seconds="30" hasStarted={hasStarted} />
      </div>
      {hasStarted ? null : (
        <Microphone
          onClick={() => {
            setHasStarted(true);
          }}
        />
      )}
    </div>
  );
}
