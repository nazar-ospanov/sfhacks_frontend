// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import PageOne from './PageOne';
import PageTwo from './PageOne';
import './App.css';

function App() {
  return (
    <Router>
      <div style={styles.navbar}>
        <Link style={styles.navLink} to="/">Home</Link>
        <Link style={styles.navLink} to="/page-one">Page One</Link>
        <Link style={styles.navLink} to="/page-two">Page Two</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
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
