//Exercice:
//Créer un composant LoginForm:
//Un input pour l'email
//Un input pour username
//Un input pour password
//Un bouton pour valider la formulaire, qui affiche une alerte avec email et username
import React from 'react'
import { useState } from "react";
import InputWithError from '../InputWithError/InputWithError';
export default function LoginForm() {

  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setuserpasse] = useState("");
  const [alertem, setalertem] = useState("");
  const [alertpass, setalertpass] = useState("");
  const [alertname, setalertname] = useState("");
  const [form, setform] = useState("");
  //const [password,setNom]=useState("");
  function handleemail(e) {
    console.log(e.target.value);
    setemail(e.target.value);

  }
  function handleuser(e) {
    console.log(e.target.value);
    setusername(e.target.value);
  }
  function handlepass(e) {
    console.log(e.target.value);
    setuserpasse(e.target.value);

  }
  function sendToDb() {
    
    setalertem('');
    setalertname('');
    setalertpass('');

    if (email.includes('@') && username !== "" && password.length >= 6) {
      setform("Connexion "+username );
      setemail('');
      setusername('');
      setuserpasse('');
      return;
      
    }

    if (!email.includes('@')) {
      setalertem('Email incorrecte');
    }
    if (password.length < 6) {
      setalertpass("Password Incorrecte :  Minimum 6 caractère");
    }
    if (!username.replace(/\s+/, '').length) {
      setalertname("Entrer Username");
    }
  
  }
  return (
    <div>
      <InputWithError 
  type="email" 
  placeholder='Email' 
  onChange={handleemail} 
  value={email} 
  errorMessage={alertem} /> 
         <InputWithError 
  type="text" 
  placeholder='username' 
  onChange={handleuser} 
  value={username} 
  errorMessage={alertname} /> 
         <InputWithError 
  type="password" 
  placeholder='password' 
  onChange={handlepass} 
  value={password} 
  errorMessage={alertpass} /> 

      <button onClick={sendToDb}> Valider </button>
      <p>{form}</p>
    </div>
  )
}
