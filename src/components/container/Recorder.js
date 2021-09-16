import React, { useState } from "react";
import Microphone from "../ui/Microphone";
import Box from "../ui/Box";

export default function Recorder() {
  const [status, setStatus] = useState("Recording");
  const [timeSpent, setTimeSpent] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");
  const [shouldRecord, setShouldRecord] = useState(false);
  const [hasRecorder, setHasRecorder] = useState(false);

  const pauseRecord = () => setShouldRecord(false);
  const startRecord = () => setShouldRecord(true);

  const onStop = (recordedBlob) => {
    console.log("onStop");
    console.log("recordedBlob is: ", recordedBlob);
  };

  return (
    <div className="recorder">
      <Box
        status={status}
        timeSpent={timeSpent}
        totalTime={totalTime}
        shouldRecord={shouldRecord}
        pauseRecord={pauseRecord}
        startRecord={startRecord}
        onStop={onStop}
        visible={hasRecorder}
      ></Box>
      {hasRecorder ? null : (
        <Microphone
          onClick={() => {
            console.log("clicked on Microphone");
            setHasRecorder(true);
            setShouldRecord(true);
          }}
        />
      )}
    </div>
  );
}
