import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';

<<<<<<< HEAD
=======
import logo from "./logo/oar_logo.png"
import { Input, Button } from 'antd';


const { Search } = Input;

export default function Navbar() {
  const [search, setSearch] = useState("");

  const updateSearchString = event => {
    const searchString = event.target.value;
    setSearch(searchString);
  }

  const handleSubmit = (event) => {
    if (search === "") {
      return
    }
    console.log(search);
  }

  return <div>
    <div>
      <img src={logo} alt="Logo" />
    </div>
    <form onSubmit={event => event.preventDefault()}>
      <Search placeholder="Search your topic..." 
      style={{ width: 200 }}
      enterButton
      onChange={updateSearchString}
      onSearch={handleSubmit}/>
    </form>
    <div>
      <Button >Log In</Button>
      <Button type="primary" shape="round">Sign Up</Button>
    </div>
  </div>
}

>>>>>>> sajan/search-view
