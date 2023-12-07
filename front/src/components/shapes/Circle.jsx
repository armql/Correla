import React from "react";

export default function Circle({
  width,
  height,
  color,
  top,
  bottom,
  left,
  right,
}) {
  return (
    <div
      className={`w-${width} h-${height} bg-${color} absolute rounded-full top-${top} bottom-${bottom} left-${left} right-${right}`}
    ></div>
  );
}
