
import FullName from "../FullName/FullName";
import Hobbies from "../Hobbies/Hobbies";
import classes from './User.module.css';

export default function User(props) {
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
  