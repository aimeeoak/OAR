import { React, useState } from 'react';
import FontSizeChanger from 'react-font-size-changer';
import 'antd/dist/antd.css';
import "./Navbar.css";
import "../light-dark-mode/style.css";


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

  return <div id="topbar">
    <div className='header-background'>
    <div>
      <img src={logo} class="logo" alt="OAR: Open Academic Research - research without paywalls Logo" />
    </div>
    <div>
    <form onSubmit={event => event.preventDefault()}>
      <Search placeholder="Search your topic..." 
      style={{ width: 500 }}
      enterButton
      onChange={updateQuery}
      onSearch={handleSubmit}/>
    </form>
    </div>
    <div className="button">  
      <Button>Support</Button>
      <Button>Log In</Button>
      <Button className="sign-up" shape="round">Sign Up</Button>
    </div>
    <div class="switch">
      <label class="theme-switch" for="checkbox" >
        <input type="checkbox" id="checkbox"  />
        <div class="slider round" onClick={handleTheme}></div> 
      </label> Dark Mode
      <br></br>
      <div className="app">
        <FontSizeChanger
          targets={['#target .content']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>A</span>,
            down: <span style={{'fontSize': '20px'}}>A</span>,
            style: {
              color: 'white',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px'
            },
            buttonsMargin: 10
          }}          
        />
        </div>
    </div>
    </div>
  </div>
}