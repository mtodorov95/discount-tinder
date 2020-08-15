import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/chat">
            
          </Route>
          <Route path="/">
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
