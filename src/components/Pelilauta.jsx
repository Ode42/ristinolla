import React from "react";
import { useState, useEffect } from "react";
import Nolla from "./Nolla";
import Risti from "./Risti";
import { arvoRuutu } from "../utils/tietokone";

export default function Pelilauta() {
  const ruudut = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const vierekkain = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  const [nollat, setNollat] = useState([]);
  const [ristit, setRistit] = useState([]);
  const [vuoro, setVuoro] = useState("ristit");
  const [paattynyt, setPaattynyt] = useState(false);
  const [voittaja, setVoittaja] = useState("");

  useEffect(() => {
    if (vuoro === "nollat") {
      const tietokoneenRuutu = arvoRuutu(ruudut, nollat.concat(ristit));
      setNollat(nollat.concat(tietokoneenRuutu));
      setVuoro("ristit");
    }

    vierekkain.map((rivi) => {
      if (
        rivi.every((ruutu) => {
          return nollat.includes(ruutu);
        })
      ) {
        setPaattynyt(true);
        setVoittaja("nollat");
      } else if (
        rivi.every((ruutu) => {
          return ristit.includes(ruutu);
        })
      ) {
        setPaattynyt(true);
        setVoittaja("ristit");
      }
    });
  });

  if (paattynyt === false) {
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
  } else {
    return (
      <div className="paattynyt">
        <h1>Peli päättyi, voittaja on {voittaja}</h1>
      </div>
    );
  }
}
