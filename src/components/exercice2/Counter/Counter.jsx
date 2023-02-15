
import { useState } from "react";
import classes from './Counter.module.css';
export default function Counter() {
const [counter,SetCounter]=useState(0);
const [name,majuscule]=useState('mouna');

function incrementer(){
    console.log(counter);
    SetCounter(counter +1);
    
}
function decrementer(){
    console.log(counter);
   // counter [1](counter [0]-1);
    SetCounter(counter -1);
}
function min(){
    console.log(name);
    majuscule(name.toLowerCase());
}
function maj(){
  console.log(name);
  majuscule(name.toUpperCase());
}
  return (
    <div className={classes.container}> 
       
       <h1> Counter  : {counter}</h1>
       <h1> Counter  : {counter*2}</h1>
     
      <button type= 'Button' onClick={incrementer}> +1 </button>
      <button type= 'Button' onClick={decrementer}> -1 </button>            {counter} <br></br>  
      <button type= 'Button' onClick={maj}> Maj</button>
      <button type= 'Button' onClick={min}> Min</button>
     {name} 
      
    </div>
  );
}
