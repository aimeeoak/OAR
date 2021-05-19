import { React, useState } from 'react';
import 'antd/dist/antd.css';
import "./Navbar.css";  

import logo from "./logo/oar_logo.png"
import { Input, Button } from 'antd';

import useAppData from "../../hooks/useAppData"

const { Search } = Input;

export default function SearchView() {
  const { state, updateSearchParameter, 
    callSearchAPI, updateQuery, 
    saveArticles, selectArticleForSaving } = useAppData();
    const [darkMode, setDarkMode] = useState(false)

  /* const [search, setSearch] = useState("");

  const updateSearchString = event => {
    const searchString = event.target.value;
    setSearch(searchString);
  } */

  /* const handleSubmit = (event) => {
    if (state.searchQuery === "") {
      return
    }
    callSearchAPI();
  }
 */
  return <div id="topbar">
    <div>
      <img src={logo} class="logo" alt="OAR: Open Academic Research - research without paywalls Logo" />
    </div>
    <div className="button">
      <Button className="log-in" shape="round">Log In</Button>
      <Button className="sign-up" shape="round">Sign Up</Button>
    </div>
    <div className={`App ${darkMode && "dark-mode"}`}>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode((darkMode) => !darkMode)}
          />
          Dark Mode
      </label>
    </div>
  </div>
}