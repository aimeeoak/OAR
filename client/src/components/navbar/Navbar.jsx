import React from 'react';
import 'antd/dist/antd.css';
import "./Navbar.css";  

import logo from "./logo/oar_logo.png"
import { Input, Button } from 'antd';

const { Search } = Input;

export default function SearchView() {
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
    <img src={logo} class="logo" alt="Logo" />
    </div>
    <form onSubmit={event => event.preventDefault()}>
      <Search placeholder="Search your topic..." 
      style={{ width: 200 }}
      enterButton
      onChange={updateSearchString}
      onSearch={handleSubmit}/>
    </form>
    <div className="button">
        <Button>Support</Button>
        <Button>Log In</Button>
        <Button className="sign-up" shape="round">Sign Up</Button>
      </div>
  </div>
}