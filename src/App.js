import React, { useState } from 'react';
import './App.css'; // Make sure this import exists if you're using a separate CSS file.

function App() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [score, setScore] = useState(null);

  const handleScan = () => {
    if (!websiteUrl.trim()) {
      alert('Please enter a valid URL.');
      return;
    }
    // Replace with real accessibility scan logic.
    const randomScore = Math.floor(Math.random() * 101);
    setScore(randomScore);
  };

  const handleViewCertificate = () => {
    // Replace with real certificate view/generation.
    alert('This would display a secure certificate.');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Accessibility Rating</h1>
      <p style={styles.description}>
        Evaluate the accessibility of your website and obtain a certificate of compliance.
      </p>
      <div style={styles.formGroup}>
        <label htmlFor="websiteUrl" style={styles.label}>
          Website URL
        </label>
        <input
          id="websiteUrl"
          type="text"
          placeholder="https://www.example.com"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          style={styles.input}
        />
      </div>
      <button onClick={handleScan} style={styles.button}>
        Scan Website
      </button>
      {score !== null && (
        <>
          <div style={styles.score}>Your website scored: {score}</div>
          <button onClick={handleViewCertificate} style={styles.button}>
            View Certificate
          </button>
        </>
      )}
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
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  button: {
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  score: {
    marginTop: '1rem',
    fontWeight: 'bold',
  },
};

export default App;