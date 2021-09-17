import React, { useState } from "react";
import Microphone from "./Microphone";
import Recorder from "./Recorder/index";

export default function RecorderBox() {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  const start = async () => {
    if (!hasPermission) {
      await getPermission(() => {
        setHasStarted(true);
      });
    }
  };

  const getPermission = (onSuccessFn) => {
    return navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then(() => {
        setHasPermission(true);
        onSuccessFn();
      })
      .catch((err) => {
        setHasPermission(false);
        console.log(err);
      });
  };

  return (
    <div className="recorder">
      <div className={`box-wrapper ${hasStarted ? "" : "box-wrapper--hidden"}`}>
        <Recorder seconds="30" hasStarted={hasStarted} />
      </div>
      {hasStarted ? null : <Microphone onClick={start} />}
    </div>
  );
}
