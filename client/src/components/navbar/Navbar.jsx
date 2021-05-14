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

  /* const [search, setSearch] = useState("");

  const updateSearchString = event => {
    const searchString = event.target.value;
    setSearch(searchString);
  } */

  const handleSubmit = (event) => {
    if (state.searchQuery === "") {
      return
    }
    console.log(state.searchQuery);
  }

  return <div id="topbar">
    <div>
      <img src={logo} class="logo" alt="Logo" />
    </div>
    <form onSubmit={event => event.preventDefault()}>
      <Search placeholder="Search your topic..." 
      style={{ width: 200 }}
      enterButton
      onChange={updateQuery}
      onSearch={handleSubmit}/>
    </form>
    <div className="button">
        <Button>Support</Button>
        <Button>Log In</Button>
        <Button className="sign-up" shape="round">Sign Up</Button>
      </div>
  </div>
}