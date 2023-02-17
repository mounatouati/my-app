import logo from './logo.svg';

import './index.css';
import Header from './components/container/Header/Header';
import Paragraphe from './components/ui/Paragraphe/Paragraphe';
import User from './components/exercice2/user/User';
import Articles from './components/exercice2/Articles/Articles';
import Routine from './components/exercice2/Routine/Routine';
import Button from './components/exercice2/Button/Button';
import Counter from './components/exercice2/Counter/Counter';
import NameForm from './components/NameForm/NameForm';
import LoginForm from './components/LoginForm/LoginForm';
import Menu from './components/exercice2/Menu/Menu';
import LangageContext from './contexts/LangageContext';
import { useState } from 'react';
function ClickableText() {
  function handleClick() {
    alert('click!!!!!!!!')
  }
  return <p onClick={handleClick}>Clique sur moi   </p>
}

function Texte(props) {
  return (
    <div onClick={props.laFonction}>
      <p style={{ color: props.couleur, fontSize: props.size, fontFamily: props.fond }}> {props.children} </p>

    </div>
  )
}


export default function App() {
  function afficheSalut() {
    alert("Salut");
  }
  function afficheBonjour() {
    alert("Bonjour");
  }
  function affiche() {
    alert("good");
  }
  let userFromDB = {
    nom: "Djemai",
    prenom: "Samy",
    passions: ["Programmation", "Dessin"],
  };
  ////////////////  userContext /////////////////
  const [langage, setlangage] = useState('fr');

  return (
    <LangageContext.Provider value={{ langage, setlangage }}>
      <div>
<button  onClick={() =>{ setlangage(langage==="fr" ? "en":"fr")
}}>  
  {langage}
</button>
        <Texte laFonction={afficheSalut} couleur="Salmon" size='20px' fond='cursive'>TOUATI Mouna</Texte>
        <Texte laFonction={afficheBonjour} couleur="Indigo" size='20px' fond='cursive'>Formation ReactJS</Texte>
        
        <LoginForm></LoginForm>
        <NameForm></NameForm>
        <Menu>  </Menu>
        <Counter />
        <Button laFonction={affiche} couleur="yellow" w="80px" h="40px" m="15px">JS</Button>
        <Routine />
        <ClickableText />
        <User utilisateur={userFromDB.nom}
          prenom={userFromDB.prenom}
          passions={userFromDB.passions}>
          Exercice 1 </User>
        <Articles />
      </div>
    </LangageContext.Provider>
  );
}
// quand on export par defaut on supprime {} dans l'import et peut le renommer dans import 
