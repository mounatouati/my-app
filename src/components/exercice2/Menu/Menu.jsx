import React from "react";
import classes from "./Menu.module.css";
import { useState } from "react";
export default function Menu(props) {
  const [div,Setdiv]=useState(false);

  function Affiche() {
    Setdiv(!div);
  }

  return (
    <div className={classes.container}>
      <button type="Button" onClick={Affiche}>
       {div? "Cacher":"Afficher"}
      </button>
      { div ? (props.children) : null}
    </div>
  );
}
