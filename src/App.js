// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import './App.css';

function App() {
  const [accessibleMode, setAccessibleMode] = useState(false);

  const toggleAccessibleMode = () => {
    setAccessibleMode(prev => !prev);
  };

  return (
    <div className={accessibleMode ? "accessible-mode" : ""}>
      <Router>
        <header className="navbar">
          <Link className="navLink" to="/">Scanner</Link>
          <Link className="navLink" to="/page-one">Catalogue</Link>
          <Link className="navLink" to="/page-two">Guidelines</Link>
          <Link className="navLink" to="/page-three">About Us</Link>
          <button className="toggleButton" onClick={toggleAccessibleMode}>
            {accessibleMode ? "Standard Mode" : "Accessible Mode"}
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page-one" element={<PageOne />} />
            <Route path="/page-two" element={<PageTwo />} />
            <Route path="/page-three" element={<PageThree />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
