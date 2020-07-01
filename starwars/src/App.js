import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';



const App = () => {

  const [resourcetype, setResourse] = useState('planets/')
  const [items, setItems] = useState([])

  useEffect(() => {
    
    axios.get(`https://swapi.dev/api/${resourcetype}`)
    .then(response => setItems(response.data.results))
    .catch()
    
  }, [resourcetype])

  console.log(items)

  return(
  <>
  <div>
    <button onClick={ () => setResourse('planets/')}>Planets</button>
    <button onClick={ () => setResourse('people/')}>People</button>
    <button onClick={ () => setResourse('starships/')}>Starships</button>
    <h1>{resourcetype}</h1>
  </div>
  {items.map( item => {
    return <pre>{JSON.stringify(item)}</pre>
  })}

 
  </>
  )

}


export default App;
