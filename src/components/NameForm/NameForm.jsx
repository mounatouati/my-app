import { useState } from "react";
export default function NameForm() {

const [nom,setNom]=useState("");
function handleNom(e){
    console.log(e.target.value);
    setNom(e.target.value);
}
function sendToDb(){
    alert(nom);
}
  return (
    <div>
      <input onChange={handleNom}  placeholder="Nom" />
      <button onClick={sendToDb}> Valider </button>
    </div>
  );
}
