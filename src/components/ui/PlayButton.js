import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function PlayButton() {
  return (
    <span className="play-button">
      <FontAwesomeIcon icon={faPlay} color="#6f4ad2" />
    </span>
  );
}
