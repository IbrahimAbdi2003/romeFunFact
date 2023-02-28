import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ColosseumFunFact from './rome-facts/ColosseumFunFact';
import PantheonFunFact from './rome-facts/TriumphFunFact';
import TreviFunFact from './rome-facts/TreviFunFact'
import './index.css';
function App() {
  return (
    <Router><div className="title-container">
    <h1 className="title">Fun Facto de Roma</h1>
  </div>
  <div className="funfacts-container">
  </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/colosseum">Colosseum</Link>
            </li>
            <li>
              <Link to="/triumph">Triumph</Link>
            </li>
            <li>
              <Link to="/trevi">Trevi Fountain</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/colosseum">
            <ColosseumFunFact />
          </Route>
          <Route path="/triumph">
            <PantheonFunFact />
          </Route>
          <Route path="/trevi">
            <TreviFunFact />
          </Route>
        </Switch>
      </div>
  
    </Router>
  );
}

export default App;
