//import classes from './Paragraphe.module.css';
import classes from './FirstName.module.css';
export default function  FirstName(props){
    console.log(classes);
  return(
    <div className={classes.container} >
      <p > {props.children} </p>
    </div>
  ) ;
}