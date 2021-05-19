import { React, useState } from 'react';
import 'antd/dist/antd.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export default function aboutPage() {
  return <div>
    <Navbar />
    <div class="about-section">
      <h1>About Us Page</h1>
    </div>

    <h2 style="text-align:center">Our Team</h2>
    <div class="row">
      <div class="column">
        <div class="card">
          <img src="/w3images/team1.jpg" alt="Aimee" style="width:100%">
          </img>
        <div class="container">
          <h2>Aimee Garriock</h2>
          <p>Captain of the ship, and painter of the OAR.</p>
          <p>agarriock@oar.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team2.jpg" alt="Molly" style="width:100%">
      </img>
      <div class="container">
        <h2>Molly Trepanier</h2>
        <p>First mate, handles the stern.</p>
        <p>mtrpanier@oar.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="Sajan" style="width:100%">
      </img>
      <div class="container">
        <h2>Sajan Thiara</h2>
        <p>Bosun and ship's frameworker.</p>
        <p>sthiara@oar.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
<Footer />
</div>
  }