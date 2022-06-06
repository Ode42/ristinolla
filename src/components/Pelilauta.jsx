import React from "react";

export default function Pelilauta() {
  const ruudut = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="pelilauta">
      {ruudut.map((i) => {
        return (
          <div id={i} className="ruutu">
            <svg height="100px" width="100px">
              <circle
                cx="50"
                cy="60"
                r="40"
                stroke="black"
                fill="white"
                stroke-width="1"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
