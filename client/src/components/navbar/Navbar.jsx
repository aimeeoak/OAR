import { React, useState } from 'react';
import 'antd/dist/antd.css';
import "./Navbar.css";
import "../light-dark-mode/style.css";
import "../font-size/style.css";
import "../zoom/Zoom.jsx"


import logo from "./logo/oar_logo.png"
import { Input, Button } from 'antd';

import useAppData from "../../hooks/useAppData"

const { Search } = Input;

export default function SearchView() {
  const { state, updateSearchParameter, 
    callSearchAPI, updateQuery, 
    saveArticles, selectArticleForSaving } = useAppData();
    const [darkMode, setDarkMode] = useState(false)

  const handleSubmit = (event) => {
    if (state.searchQuery === "") {
      return
    }
    console.log(state.searchQuery);
  }

  const handleTheme = (event) => {
      const currentTheme = document.documentElement.getAttribute("data-theme")
  
      const switchToTheme = currentTheme === "dark" ? "light" : "dark"
  
      document.documentElement.setAttribute("data-theme", switchToTheme)
  };

  const fontControls = (event) => {
    
  }

  return <div id="topbar">
    <div className='header-background'>
    <div>
      <img src={logo} class="logo" alt="OAR: Open Academic Research - research without paywalls Logo" />
    </div>
    <br></br>
    <div class="all-buttons">
      <Button>Support</Button>
      <Button>Log In</Button>
      <Button className="sign-up" shape="round">Sign Up</Button>
    <br></br>
      <label class="theme-switch" for="checkbox" >
        <input type="checkbox" id="checkbox"  />
        <div class="slider round" onClick={handleTheme}></div> 
      </label> Dark Mode
      <br></br>
      <div class="range">
        <label>Zoom Level</label>
        <input type="range" min="0.3" max="3" step="0.1" value="1" list="marks" oninput="scale(this.value)">
        <datalist id="marks">
          <option value="1"></option>
        </datalist>
        </input>
      </div>
    </div>
    <div>
    <form onSubmit={event => event.preventDefault()}>
      <Search className="search-bar"
      placeholder="Search your topic..."
      enterButton
      onChange={updateQuery}
      onSearch={handleSubmit}/>
    </form>
    </div>
    </div>
  </div>
}