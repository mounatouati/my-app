import Paragraphe from "../../ui/Paragraphe/Paragraphe";

import classes from './Header.module.css';
// module de style css la fonction header prend le style de module en premier
// apres si on fais un appel ,a la fonction dan app() et que dans app il ya un import 
// d' un autre style il va le prendre en dernier .
export default function Header() {
let user = "mouna";
    return(
      <header>
         <h1 className={classes.container} 
         style={{ textDecoration: 'underline'  }}   // ce style est prix en premier 
         > Bonjour , {user} !
         </h1>
         <Paragraphe />
      </header>
    );
  }
  