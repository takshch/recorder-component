import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";

export default function PauseButton(props) {
  return (
    <span className="pause-button" {...props}>
      <FontAwesomeIcon icon={faPause} color="#000" />
    </span>
  );
}
