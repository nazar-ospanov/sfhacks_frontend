// src/PageTwo.js
import React from 'react';

function PageTwo() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Page Two</h1>
      <p style={styles.description}>
        This page is reserved for additional future functionality.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    borderRadius: '6px',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
  },
  heading: {
    marginTop: 0,
  },
  description: {
    marginBottom: '1rem',
  },
};

export default PageTwo;
