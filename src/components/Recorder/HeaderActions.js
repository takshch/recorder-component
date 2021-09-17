import React from "react";
import PauseButton from "./PauseButton";
import BoxButton from "./BoxButton";

export default function BoxHeaderActions(props) {
  const { stillRecording, stopRecording, hasRecording, recording } = props;
  return (
    <div className="box__actions">
      {stillRecording ? <PauseButton onClick={stopRecording} /> : null}
      <BoxButton
        text="Send"
        purple={hasRecording.toString()}
        onClick={() => {
          if (hasRecording) console.log(recording);
        }}
      />
    </div>
  );
}
