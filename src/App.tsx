import React from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Events from './components/Events';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/events">
        <Events />
      </Route>
    </Router>
  );
}

export default App;
