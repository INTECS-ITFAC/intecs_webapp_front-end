import React from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Events from './components/Events';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';

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
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Footer></Footer>
    </Router>
  );
}

export default App;
