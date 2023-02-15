import classes from './LastName.module.css';


export default function  LastName(props){
    return(
      <div className={classes.container} >
        <p  > {props.prenom} </p>
      </div>
    ) ;
  }