import React from 'react';
import Colosseum from '../photos/colosseum_in_rome.webp' 

const ColosseumFunFact = () => {
  return (
    <div>
      <h1>Fun Fact #1: Colosseum</h1>
      <p>The Colosseum is the largest amphitheatre in the world and was built in only eight years. It could seat up to 50,000 spectators who watched gladiatorial contests, animal hunts and mock sea battles. It was also used for public spectacles such as mock sea battles, animal hunts, executions, re-enactments of famous battles, and dramas based on Classical mythology.</p>
      <div>
      <img src={Colosseum} alt="" />
      </div>
    </div>
  );
};

export default ColosseumFunFact;