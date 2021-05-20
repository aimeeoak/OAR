import { React, useState } from 'react';
import 'antd/dist/antd.css';
import "./Navbar.css";
import "../light-dark-mode/style.css";

import logo from "./logo/oar_logo.png"
import { Input, Button } from 'antd';

import useAppData from "../../hooks/useAppData"

const { Search } = Input;

export default function SearchView(props) {
    //callSearchAPI, updateQuery, 
  const [darkMode, setDarkMode] = useState(false)

  const handleTheme = (event) => {
      const currentTheme = document.documentElement.getAttribute("data-theme")
  
      const switchToTheme = currentTheme === "dark" ? "light" : "dark"
  
      document.documentElement.setAttribute("data-theme", switchToTheme)
  };

  const handleZoom = (event) => {
    let isZoomOn = document.getElementsByTagName("body")[0].classList.contains("zoomies-on")
  
    if (isZoomOn) {
      document.getElementsByTagName("body")[0].classList.remove("zoomies-on")
    }
    else {
      document.getElementsByTagName("body")[0].classList.add("zoomies-on")
    }
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
      <br></br>
      <label class="theme-switch" for="checkbox" >
        <input type="checkbox" id="checkbox"  />
        <div class="slider round" onClick={handleTheme}></div> 
      </label> Dark Mode
      <br></br>
      <label class="zoom-switch" for="zoom-checkbox" >
        <input type="checkbox" id="zoom-checkbox"  />
        <div class="slider round" onClick={handleZoom}></div> 
      </label> Zoom Mode
      <br></br>
      </div>
    </div>
    <div>
    <form onSubmit={event => event.preventDefault()}>
      <Search className="search-bar"
      placeholder="Search your topic..."
      onChange={props.updateQuery}
      onSearch={props.callSearchAPI}
      enterButton/>
    </form>
    </div>
  </div>
}