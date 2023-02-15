//import classes from './Paragraphe.module.css';
import classes from './FullName.module.css';
import FirstName from "./FirstName/FirstName";
import LastName from "./LastName/LastName";


export default function  FullName(props){
    return(
      <div className={classes.container} >
        <FirstName > {props.nom} </FirstName>
        
        <LastName prenom={props.prenom} />
      </div>
    ) ;
  }