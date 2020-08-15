import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/chat">
            
          </Route>
          <Route path="/">
            <TinderCards/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
