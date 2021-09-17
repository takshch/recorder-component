import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

export default function PlayPauseButton(props) {
  const icon = props.pause ? faPause : faPlay;
  return (
    <span className="play-button" {...props}>
      <FontAwesomeIcon icon={icon} color="#6f4ad2" />
    </span>
  );
}
