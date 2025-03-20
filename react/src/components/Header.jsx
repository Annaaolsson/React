import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [menuOpen] = useState(false);

  return (
    <header>
      <Link to="/" className="logo">
        <h1>Älmeboda <br /> Socken</h1>
      </Link>
      
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><NavLink to="/aretsalmebodabo">Årets Älmebodabo</NavLink></li>
          <li><NavLink to="/upplev">Upplev</NavLink></li>
          <li><NavLink to="/levaochbo">Leva & bo</NavLink></li>
          <li><NavLink to="/handelser">Händelser</NavLink></li>
        </ul>
      </nav>

      <button id="menu-toggle">☰</button>
    </header>
  );
};

export default Header;