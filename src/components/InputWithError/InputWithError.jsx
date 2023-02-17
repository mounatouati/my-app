import React from 'react'
import eye from "../../assets/eye-solid.svg";
import eyes from "../../assets/eye-slash-solid .svg";
import mesclasses from "./InputWithError.module.css"
import { useState } from "react";
export default function InputWithError(props)
/*     typeInput,       //
    espaceReserver,  //   pour remplacer props. en recupere tous les attributs
    Change,          //
    Valeur,          //
    messageErreur,   // */
{ const [showPassword, setshowPassword] = useState(false);
function afficher(e) {
    setshowPassword(!showPassword);
  }
     return (
        <div>
            <div className={mesclasses.inputContainer}>
            <input
            className={mesclasses.input}
            style={{ borderColor: props.errorMessage !== "" ? "red" : "green" }}
                type={showPassword? "text" : props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value} /> 
                {props.type === 'password' ? <img onClick={afficher} className={mesclasses.image} src ={showPassword? eyes :eye} /> : null }
                
                </div>
            <p className={mesclasses.error}> {props.errorMessage}</p>
        </div>
    )
}
