import React from 'react';
import logo from './logo.svg';
import top from './assets/top.svg';
import bottom from './assets/bottom.svg';
import './App.css';
import './index.css';

function App() {
  return (/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Rick and Morty Memory Card Game</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>*/

    <section className="memory-game">
      <div className = 'memory-card'>
        <img className="front-face" src={top} />
        <img className="back-face" src={bottom} />
      </div>
      <div className = 'memory-card'>
        <img className="front-face" src={top} />
        <img className="back-face" src={bottom} />
      </div>
      <div className = 'memory-card'>
        <img className="front-face" src={top} />
        <img className="back-face" src={bottom} />
      </div>
      <div className = 'memory-card'>        
        <img className="front-face" src={top} />
        <img className="back-face" src={bottom} />
      </div>

    </section>






  );
}

export default App;
