import { React, useState } from 'react';
import 'antd/dist/antd.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export default function signupPage() {
  return <div>
    <Navbar />
    <main style="margin: 1em;">

    <div class="card text-center">
      <div class="card-body">
        <h3 class="card-title">Register</h3>
        <form method="POST" action="/register" role="form">
          <input class="form-control w-50 m-auto" name="email" type="email" placeholder="email" />
          <br />
          <input class="form-control w-50 m-auto" name="password" type="password" placeholder="password" />
          <br />
          <button class="btn btn-outline-primary">Register</button>
        </form>
      </div>
    </div>
    <Footer />
    </main>
    </div>
  }