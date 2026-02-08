import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Historia from "./pages/Historia";
import Apuraha from "./pages/Apuraha";
import Etusivu from "./pages/Etusivu";
import OtaYhteytta from "./pages/OtaYhteytta";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleScroll = () => {
      closeMenu();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <h1 className="logo-text">
        K.F. ja Maria Dunderbergin
        <br /> testamenttisäätiö
      </h1>

      <button className="hamburger" onClick={toggleMenu} aria-label="Valikko">
        {menuOpen ? "✖" : "☰"}
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>
          Etusivu
        </Link>
        <Link to="/historia" className="nav-link" onClick={closeMenu}>
          Historia
        </Link>
        <Link to="/apuraha" className="nav-link" onClick={closeMenu}>
          Apuraha
        </Link>
        <Link to="/ota-yhteyttaa" className="nav-link" onClick={closeMenu}>
          Ota yhteyttä
        </Link>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>
      © K.F. ja Maria Dunderbergin testamenttisäätiö - 2025
      <br />
      Y-tunnus 0205891-9
    </p>
  </footer>
);

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Etusivu />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/apuraha" element={<Apuraha />} />
            <Route path="/ota-yhteyttaa" element={<OtaYhteytta />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
