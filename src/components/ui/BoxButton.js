import React from "react";

export default function BoxButton(props) {
  const { color } = props;
  const hasPurple = color === "purple" ? "box-button--purple" : "";
  return <button className={`box-button ${hasPurple}`}>{props.text}</button>;
}
