import React, { useState } from "react";
import { ReactMic } from "react-mic";
import Box from "../ui/Box";

export default function Recorder() {
  const [status, setStatus] = useState("Recording");
  const [timeSpent, setTimeSpent] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");
  const [shouldRecord, setShouldRecord] = useState(false);

  const pauseRecord = () => setShouldRecord(false);
  const startRecord = () => setShouldRecord(true);

  return (
    <Box
      status={status}
      timeSpent={timeSpent}
      totalTime={totalTime}
      shouldRecord={shouldRecord}
      pauseRecord={pauseRecord}
    ></Box>
  );
}
