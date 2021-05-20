import { React, useState } from 'react';
import 'antd/dist/antd.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export default function contactPage() {
  return <div>
    <Navbar />
    <div class="contact-section">
      <h1>Contact Us</h1>
    </div>
    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
    
<Footer />
</div>
  }