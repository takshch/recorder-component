import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";

export default function PauseButton() {
  return (
    <span class="pause-button">
      <FontAwesomeIcon icon={faPause} />
    </span>
  );
}
