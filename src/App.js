import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import TarotPage from './TarotPage';
import TarotDetails from './TarotDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink exact activeClassName="active-link" to="/">
              Home
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <TarotPage />
          </Route>
          <Route exact path="/tarot/:id">
            <TarotDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
