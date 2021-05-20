import { React, useState } from 'react';
import 'antd/dist/antd.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export default function loginPage() {
  return (
    <div class="login-page">
      <Navbar />
    <div class="card text-left">
    <div class="card-body">
      <h3 class="card-title">Login</h3>
      <form method="POST" action="/login" role="form">
        <div class="container">
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />         
          <button type="submit">Login</button>
          <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>
          </div>
          <div class="container" style="background-color:#f1f1f1">
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="password">Forgot <a href="#">password?</a></span>
          </div>
      </form>
    </div>
    <Footer />
  </div>

  </div>
  )
};