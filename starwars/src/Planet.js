import React, { useState } from 'react';
import './App.css';
import {Jumbotron, Button} from 'reactstrap';


const PlanetCard = (props) => {

 

  const [count, setCount] = useState(0);

  return (

  <div>
      
      <Jumbotron>
        <h1 className="display-3">Planet Number {count} is {props.planetinfo[1]}</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <button onClick={() => setCount(count + 1)}> Click me</button>
  </div>
  );
}

export default PlanetCard;
