import { React, useState } from 'react';
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
    <div>
      <img src={logo} class="logo" alt="OAR: Open Academic Research - research without paywalls Logo" />
    </div>
    <form onSubmit={event => event.preventDefault()}>
      <Search placeholder="Search your topic..." 
      style={{ width: 200 }}
      enterButton
      onChange={updateQuery}
      onSearch={handleSubmit}/>
    </form>
    <div className="button">
      <Button 
      onClick={handleTheme}>
      Dark Mode</Button>
      <Button>Support</Button>
      <Button>Log In</Button>
      <Button className="sign-up" shape="round">Sign Up</Button>
    </div>
  </div>
}