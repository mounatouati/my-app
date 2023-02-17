# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

Exercice 2 Article:
1. Créer un composant Articles, et l'afficher dans le composant App.js
2. Utiliser un map, pou afficher les articles suivant.

Exercice 2 Routine:
1/ Créez un composant Routine qui affiche 3 boutons : 
"Manger", "Dormir", "Étudier".
2/ Ajoutez un onClick à chaque bouton de sorte que, 
lorsqu'il est cliqué, l'utilisateur soit averti par un 
message (utilisez la fonction alert)

Exercice 2 Button:
1. Créer un composant Button:
2.  Dans children: le texte a afficher dans le bouton
3.  Une fonction a executer quant on clique dessus
4.  Une couleur de font pour colorer le bouton

Exercice 2 OnOff:
1. Créer un composant OnOff:
2. Un variable d'état initialiser a false.
3.Afficher avec un opérateur: on ou off suivant la valeur la variable d'atat.
4. Bouton pour changer la valeur de la variable d'etat.

Exercice LoginForm:
Créer un composant LoginForm:
  - Un input pour l'email
  - Un input pour username
  - Un input pour password
  - Un bouton pour valider la formulaire, qui affiche une alerte avec email et username

Afficher des erreurs derrière les inputs
  - email: tester si il possède un @
  - password: minimum 6car.
  - username pas vide 
  
Exercice:
Créer un composant InputWithError.
Qui affiche un input, message d'error dans un paragraphe.

<InputWithError 
  type="email" 
  placeholder='Email' 
  onChange={handleEmail} 
  value={emailInput} 
  errorMessage={emailError} /> 

  <InputWithError 
    type="password" 
    placeholder='Password' 
    onChange={handlePassword} 
    value={passwordInput} 
    errorMessage={emailError} /> 
  
