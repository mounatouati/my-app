import { useState } from "react";
import classes from './OnOff.module.css';
export default function OnOff() {

    const [OnOff,SetOn]=useState(false);

    //let etat = false;
    function OnOf(){
        console.log(OnOff);
        //SetOn(OnOff? false :true);
        SetOn(!OnOff); // on peu utiliser !OnOff
    }
   return (
    <div className={classes.container}>
        {OnOff}
         <p> {OnOff? 'On' : 'Off'}</p>
         <button type= 'Button' onClick={OnOf}  > <i class="bi bi-toggle-off"></i> {OnOff}</button>
    
    </div>
  ) 
}
