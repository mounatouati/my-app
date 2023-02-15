import classes from './Routine.module.css'
export default function Routine() {
  let i = 'Manger';
  return (
    <div className={classes.container}>
      <button type='button' onClick={function () { BClick('Manger') }}>  Manger   </button>
      <button type='button' onClick={function () { BClick('Dormir') }}>   Dormir  </button>
      <button type='button' onClick={function () { BClick('Etudier') }}>  Etudier    </button>
    </div>

  );

  function BClick(e) {
    // i=e.id;
    // console.log(e);
    alert('Je vais aller  ' + e);
  }

}
