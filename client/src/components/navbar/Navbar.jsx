import { React, useState } from 'react';
import 'antd/dist/antd.css';
import "./Navbar.css";  

import logo from "./logo/oar_logo.png"
import { Input, Button } from 'antd';

import useAppData from "../../hooks/useAppData"

const { Search } = Input;

export default function SearchView(props) {
    //callSearchAPI, updateQuery, 
    const [darkMode, setDarkMode] = useState(false)

  return <div id="topbar">
    <div>
      <img src={logo} class="logo" alt="OAR: Open Academic Research - research without paywalls Logo" />
    </div>
    <form onSubmit={event => event.preventDefault()}>
      <Search placeholder="Search your topic..." 
      style={{ width: 200 }}
      enterButton
      onChange={props.onChange}
      onSearch={props.onSearch}/>
    </form>
    <div className="button">
      <Button>Support</Button>
      <Button>Log In</Button>
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