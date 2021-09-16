import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

export default function Microphone() {
  return (
    <span className="microphone">
      <FontAwesomeIcon icon={faMicrophone} color="#000" />
    </span>
  );
}
