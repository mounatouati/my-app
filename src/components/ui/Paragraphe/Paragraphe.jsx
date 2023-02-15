import classes from './Paragraphe.module.css';


export default function  Paragraphe(){
  console.log(classes);
  return(
    <div className={classes.container} >
      <p className={classes.red}
      style={{ fontWeight:"bold" ,fontSize: "2em",}}      
      > Je suis un composant !!</p>
    </div>
  ) ;
}