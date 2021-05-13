import React from 'react';
import 'antd/dist/antd.css';
import "./Navbar.css";  

import logo from "./logo/oar_logo.png"
import { Input, Button } from 'antd';

const { Search } = Input;

export default function Navbar() {
  return <div>
    <section class="topbar">
      <img src={logo} class="logo" alt="Logo" />
      <div className="button">
        <Button>Support</Button>
        <Button>Log In</Button>
        <Button className="sign-up" shape="round">Sign Up</Button>
      </div>
    </section>
  
    <div>
      <Search class="searchbar" placeholder="Search your topic..." allowClear enterButton />
    </div>
  </div>
}

