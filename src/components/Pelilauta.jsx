import React from "react";
import { useState } from "react";
import Nolla from "./Nolla";
import Risti from "./Risti";

export default function Pelilauta() {
  const ruudut = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [nollat, setNollat] = useState([]);
  const [ristit, setRistit] = useState([]);
  const [vuoro, setVuoro] = useState("ristit");

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
              if (vuoro === "nollat") {
                if (!ristit.includes(i) && !nollat.includes(i)) {
                  setNollat(nollat.concat(i));
                  setVuoro("ristit");
                }
              } else if (vuoro === "ristit") {
                if (!ristit.includes(i) && !nollat.includes(i)) {
                  setRistit(ristit.concat(i));
                  setVuoro("nollat");
                }
              }
            }}
          >
            {nollat.includes(i) ? <Nolla /> : ""}
            {ristit.includes(i) ? <Risti /> : ""}
          </div>
        );
      })}
    </div>
  );
}
