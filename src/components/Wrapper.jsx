import React from "react";
import Pelilauta from "./Pelilauta";
import "./../styles/Peli.css";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <Pelilauta />
      <button className="uusiPeli" onClick={() => window.location.reload()}>
        Uusi peli
      </button>
    </div>
  );
}
