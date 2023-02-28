import React from 'react';
import Triumph from '../photos/Triumphs-of-Caesar.jpg'

const TriumphFunFact = () => {
  return (
    <div>
      <h1>Fun Fact #2: Triumph</h1>
      <p>The Roman triumph was a celebratory procession that a victorious general would lead through the streets of Rome after a successful military campaign. The procession would typically include the general riding in a chariot, along with his troops, prisoners of war, and captured spoils of war. One interesting fact is that there were certain rules and traditions that had to be followed during a Roman triumph. For example, the general had to wear a purple toga with gold embroidery, and he had to have a slave standing behind him throughout the procession, holding a golden wreath above his head. Additionally, if the general was riding in a chariot, he had to hold a wooden laurel branch in his right hand as a symbol of victory.</p>
      <div>
      <img src={Triumph} alt="" />
      </div>
    </div>
  );
};

export default TriumphFunFact;