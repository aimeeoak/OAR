import React from 'react';
import 'antd/dist/antd.css';
import "./Navbar.css";  

import logo from "./logo/oar_logo.png"
import { Input, Button } from 'antd';

const { Search } = Input;

export default function Navbar() {
  return <div>
    <div>
      <img src={logo} alt="Logo" />
    </div>
    <div>
      <Search class="searchbar" placeholder="Search your topic..." allowClear enterButton />
    </div>
    <div>
      <Button >Log In</Button>
      <Button type="primary" shape="round">Sign Up</Button>
    </div>
  </div>
}

