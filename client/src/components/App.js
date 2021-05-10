// import logo from '../logo.svg';
import React, { useState } from 'react';
import './App.css';
import SearchFilter from "./body/SearchFilter"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"

import egg from "./navbar/logo/egg.jpg"

function App() {
  const [message, setMessage] = useState("He waits...")
  const [eggState, setEggState] = useState(false)

  const greatIdea = function() {
    setMessage("The Keeper of Eggs rises from his slumber to offer you good luck");
    setEggState(true);
  }

  return (
    <div className="App">
        <Navbar />
        <SearchFilter />
      <div>
      <h1>{ message }</h1>
      {eggState && <img src={egg} alt="Egg" />}
      {!eggState && <button onClick={greatIdea} > Do you dare? </button>}
      </div>
      <Footer />    
    </div>
  );

  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  ); */
}

export default App;
