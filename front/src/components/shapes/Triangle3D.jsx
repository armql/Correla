import React from "react";

export default function Triangle3D({
  top,
  bottom,
  left,
  right,
  topColor,
  bottomColor,
}) {
  return (
    <div
      class={`absolute right-${right} top-${top} bottom-${bottom} left-${left} transition duration-500`}
    >
      <div
        class={`relative top-[-3em] h-0 w-0 
 border-x-[3em] border-b-[1.25em] border-t-[50px]  border-solid  
 border-[${topColor}] border-x-transparent

border-t-transparent after:absolute after:left-[-3em] after:top-[1.25em]
after:h-0 after:w-0 after:border-x-[3em] after:border-b-[3em] 
after:border-t-[4.4em] after:border-solid after:border-x-transparent 
after:border-b-transparent after:border-t-[${bottomColor}]
`}
      ></div>
    </div>
  );
}
