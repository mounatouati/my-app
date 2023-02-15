import classes from './Hobbies.module.css';

export default function  Hobbies(props){
 // const ListHobbies =props.Hobbie;
  return(
  
//   <ul> 
//     { ListHobbies.map(Hobbie =>   <li >{Hobbie}</li>
//   )}
// </ul>
 <ul> 
    { props.passion.map(function(Hobbie,i){
 return<li key={i} >{Hobbie}</li>
    }  
  )}
</ul>
);
}


 