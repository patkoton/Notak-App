import React from 'react'
import logo from "../images/react-logo.png"
import "../index.css";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="react logo" className="image"/>
        <h3>React Facts</h3>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
