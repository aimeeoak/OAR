// import logo from '../logo.svg';
import React, { useState } from 'react';
import './App.css';
import SearchFilter from "./components/body/SearchFilter"
import LibraryFilter from "./components/body/LibraryFilter"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

import Library from "./components/library/Library"
import SearchComp from "./components/search/SearchComp"

import egg from "./components/navbar/logo/egg.jpg"

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
        <div className="filters-container">
          <SearchFilter />
         <div>
           <SearchComp />
           </div> 
          <LibraryFilter />
        </div>
      <div>
        <div>
          <Library />
        </div>
        <div>
        </div>
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
