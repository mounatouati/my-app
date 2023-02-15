//Exercice:
//Créer un composant LoginForm:
//Un input pour l'email
//Un input pour username
//Un input pour password
//Un bouton pour valider la formulaire, qui affiche une alerte avec email et username
import React from 'react'
import { useState } from "react";
export default function LoginForm() {

const [email,setemail]=useState("");
const [username,setusername]=useState("");
const [password,setuserpasse]=useState("");
//const [password,setNom]=useState("");
function handleemail(e){
    console.log(e.target.value);
    setemail(e.target.value);
}
function handleuser(e){
    console.log(e.target.value);
    setusername(e.target.value);
}
function handlepass(e){
    console.log(e.target.value);
    setuserpasse(e.target.value);
}
    function sendToDb(){
        alert(email ,username);
        alert(username);
    }
  return (
    <div>
      <input onChange={handleemail}  placeholder="email" />
      <input onChange={handleuser}  placeholder="username" />
      <input onChange={handlepass}  placeholder="password" />
      <button onClick={sendToDb}> Valider </button>
    </div>
  )
}
