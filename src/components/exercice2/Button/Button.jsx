 import classes from "./Button.module.css"
export default function Button(props) {
    return(
      <div className={classes.container}>
        <button onClick={props.laFonction}
           style ={{backgroundColor: props.couleur ,
                                    height:props.h ,
                                     width: props.w ,
                                     margin: props.m }}  > 
          {props.children} 
          
        </button></div>
      );
}

