// src/Home.js
import React, { useState } from 'react';
import './App.css';

function Home() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [score, setScore] = useState(null);
  const [suggestions, setSuggestions] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleScan = () => {
    if (!websiteUrl.trim()) {
      alert('Please enter a valid URL.');
      return;
    }
    
    setIsLoading(true);
    
    // Fetch the score from your backend endpoint.
    fetch('http://localhost:3000/mongo/get_or_create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: websiteUrl }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setScore(data.badge_level);
        setSuggestions(data.improvement_suggestions);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching score:', error);
        alert('Failed to fetch accessibility score. Please try again.');
        setIsLoading(false);
      });
  };

  const handleViewCertificate = () => {
    // Replace with real certificate view/generation logic.
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
      <button onClick={handleScan} style={styles.button} disabled={isLoading}>
        {isLoading ? 'Scanning...' : 'Scan Website'}
      </button>
      
      {isLoading && (
        <div style={styles.loadingSpinner}>
          <div style={styles.spinner}></div>
          <p>Analyzing website accessibility...</p>
        </div>
      )}
      
      {!isLoading && score !== null && (
        <>
          <div style={styles.score}>Your website scored: {score}</div>
          <button onClick={handleViewCertificate} style={styles.button}>
            View Certificate
          </button>
        </>
      )}
      {!isLoading && suggestions && (
        <div style={styles.suggestions}>
          <h3>Improvement Suggestions:</h3>
          <p>{suggestions}</p>
        </div>
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
  loadingSpinner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid rgba(0, 123, 255, 0.3)',
    borderTop: '4px solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    }
  },
  suggestions: {
    marginTop: '1rem',
  }
};

// Add the keyframes for the spinner animation
const spinnerKeyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

// Create a style element and append it to the head
const styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.appendChild(document.createTextNode(spinnerKeyframes));
document.head.appendChild(styleElement);

export default Home;
