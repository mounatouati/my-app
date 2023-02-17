
import React from 'react'
import { useState ,useContext} from "react";
import InputWithError from '../InputWithError/InputWithError';
import LangageContext from "../../contexts/LangageContext";
//import mesclasses from './LoginForm.module.css';
export default function LoginForm() {
 
  const {langage} =useContext(LangageContext);
  //const test =useContext(LangageContext);
  //console.log(test);


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
      setform("Connexion " + username);
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
  <div  style={{
    width: "100%",
    backgroundColor: "hsl(0, 0%, 90%)",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }} >
      
        <h2> {langage}</h2>
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
