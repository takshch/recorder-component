import React from "react";

export default function BoxButton(props) {
  const { purple } = props;
  const purpleClass = purple ? "box-button--purple" : "";
  return (
    <button className={`box-button ${purpleClass}`} {...props}>
      {props.text}
    </button>
  );
}
