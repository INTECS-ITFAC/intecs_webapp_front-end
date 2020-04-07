import React from 'react';
import logo from './../logo.svg';
import './../styles/App.css';

const Projects =()=>{
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Projects</h1>
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

export default Projects;
