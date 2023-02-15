import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import Paragraphe from './components/ui/Paragraphe/Paragraphe';
import Header from './components/container/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);



//  let isPermis = false;
// root.render(
//   <div>
      
//       <Header />
//       <p> { isPermis?"Vous pouvez conduire":"Vous ne pouvez pas" }</p>
//       {/*Paragraphe()*/} 
//       <Paragraphe />
//   </div>
// ); 
/* root.render(
  <header>
  <h1> h1   </h1>
  <p> parag</p>
  </header>
); */



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

