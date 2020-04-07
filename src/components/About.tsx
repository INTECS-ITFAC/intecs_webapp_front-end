import React from 'react';
import logo from './../logo.svg';
import './../styles/App.css';

const About =()=>{
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>About</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to  reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default About;
