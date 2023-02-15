import logo from './logo.svg';

import './index.css';
import Header from './components/container/Header/Header';
import Paragraphe from './components/ui/Paragraphe/Paragraphe';
import User from './components/exercice2/user/User';
import Articles from './components/exercice2/Articles/Articles';
import Routine from './components/exercice2/Routine/Routine';
import Button from './components/exercice2/Button/Button';
import Counter from './components/exercice2/Counter/Counter';


function ClickableText() {
  function handleClick(){
    alert('click!!!!!!!!')
  }
  return <p onClick={handleClick}>Clique sur moi   </p>
}

function Texte(props){

  return(
    <div onClick={props.laFonction}>
      <p style ={{color: props.couleur}}> {props.children} </p>
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
  return (
<div>
<Texte laFonction={afficheSalut} couleur="red">Hello!</Texte>
<Texte laFonction={afficheBonjour} couleur="green">Bonjour</Texte>
<Counter />
<Button laFonction={affiche} couleur="yellow" w="80px" h="40px" m="15px">JS</Button>
<Routine />
<ClickableText />
<User nom={userFromDB.nom} 
      prenom={userFromDB.prenom} 
      passions={userFromDB.passions}>
Exercice 1 </User>
<Articles />
</div>);
}
// quand on export par defaut on supprime {} dans l'import et peut le renommer dans import 
