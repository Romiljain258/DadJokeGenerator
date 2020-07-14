import React from 'react';
import logo from './logo.svg';
import './App.css';
import JokeGenerator from "./JokeGenerator";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
     {/* <JokeGenerator></JokeGenerator> */}

     <Router>
      <Switch>
     <Route path="/" exact component={JokeGenerator} />
     {/* that means you can take multiple link by this. */}
     {/* <Route path="/path2" component={Counter} /> */}

     </Switch>
     </Router>
    </div>
  );
}

export default App;
