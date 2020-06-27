import React from 'react';
import './App.css';
import axios from 'axios';
import PlanetCard from './Planet.js';


const App = () => {

  let planetcards = [];
 
  axios.get('https://swapi.dev/api/planets/')

        .then( planets => {
          
           planets.data.results.forEach(element => {

              planetcards.push(element);

            });

        })

        .catch( error => {
            console.log('Stuck in catch' + error)
        })



  return (
    
    <PlanetCard planetinfo={planetcards}/>

  );
}

export default App;
