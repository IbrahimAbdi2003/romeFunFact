import React from 'react';
import Trevi from '../photos/Trevi-Fountain.webp'

const TreviFunFact = () => {
  return (
    <div>
      <h1>Fun Fact #3: Trevi Fountain</h1>
      <p>The Trevi Fountain is the largest Baroque fountain in Rome and one of the most famous fountains in the world. It was completed in 1762 and stands 85 feet high and 65 feet wide. According to legend, if you throw a coin into the fountain with your right hand over your left shoulder, you will return to Rome one day. The fountain collects an average of €3,000 in coins every day, which is donated to charity.</p>
      <div>
      <img src={Trevi} alt="" />
      </div>
    </div>
  );
};

export default TreviFunFact;