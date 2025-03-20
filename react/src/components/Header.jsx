import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Link to="/" className="logo">
        <h1>Älmeboda <br /> Socken</h1>
      </Link>
      
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/aretsalmebodabo">Årets Älmebodabo</Link></li>
          <li><Link to="/upplev">Upplev</Link></li>
          <li><Link to="/levaochbo">Leva & bo</Link></li>
          <li><Link to="/handelser">Händelser</Link></li>
        </ul>
      </nav>

      <button id="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
    </header>
  );
};

export default Header;