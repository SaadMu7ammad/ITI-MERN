import React from 'react';
import './RightCol.css';
function RightCol() {
  return (
    <div className="RightCol">
      <div className="image">
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          alt="Logo"
        />
        <h1>Hello</h1>
      </div>
      <div className="header">
        <h2>Contact</h2>
        <div>
           
            <h4> <i class="fa-solid fa-house"> </i>Mansoura</h4>
            <h4> <i class="fa-solid fa-phone"> </i>043245</h4>
            <h4> <i class="fa-solid fa-earth"></i>www.saad.com</h4>
            
        </div>
      </div>
      <div className="header">
        <h2>Skills</h2>
        <p>
          HTML & CSS
          <span></span>
        </p>
        <p>
          JavaScript
          <span></span>
        </p>
        <p>
          CPP
          <span></span>
        </p>
        <p>
          NodeJS
          <span></span>
        </p>
        <p>
          React
          <span></span>
        </p>
      </div>
    </div>
  );
}

export default RightCol;
