import React from "react";
import { useState } from "react";
import Nolla from "./Nolla";

export default function Pelilauta() {
  const ruudut = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [nollat, setNollat] = useState([]);

  nollat.map((ruutu) => {
    document.getElementById(ruutu).style.visibility = "visible";
  });
  return (
    <div className="pelilauta">
      {ruudut.map((i) => {
        return (
          <div
            key={i}
            id={i}
            className="ruutu"
            onClick={() => {
              if (!nollat.includes(i)) {
                setNollat(nollat.concat(i));
              }
            }}
          >
            {nollat.includes(i) ? <Nolla /> : ""}
          </div>
        );
      })}
    </div>
  );
}
