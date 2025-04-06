// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import './App.css';

function App() {
  return (
    <Router>
      <div style={styles.navbar}>
        <Link style={styles.navLink} to="/">Home</Link>
        <Link style={styles.navLink} to="/page-one">Page One</Link>
        <Link style={styles.navLink} to="/page-two">Accessibility Guidelines</Link>
        <Link style={styles.navLink} to="/page-three">Page Three</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="/page-three" element={<PageThree />} />
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#007bff',
    padding: '1rem',
    display: 'flex',
    gap: '1rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default App;
