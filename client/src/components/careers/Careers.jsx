import { React, useState } from 'react';
import 'antd/dist/antd.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export default function careersPage() {
  return <div>
    <Navbar />
    <div class="careers-section">
      <h1>Careers</h1>
    </div>

    <h2 style="text-align:center">There are no postings available right now.</h2>
    
<Footer />
</div>
  }