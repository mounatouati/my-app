
import { useContext } from "react";
import LangageContext from "../../../contexts/LangageContext";
import FullName from "../FullName/FullName";
import Hobbies from "../Hobbies/Hobbies";
import classes from './User.module.css';

export default function User(props) {
  const test =useContext(LangageContext);
  console.log(test)
    return(
      <header>
        <div className={classes.container}>
          <p > {props.children}</p>
         <FullName  nom={props.nom} prenom={props.prenom}> </FullName>
         <Hobbies passion={props.passions} > </Hobbies>
      </div>
      </header>
    );
  }
  