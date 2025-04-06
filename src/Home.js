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
    <div className="home-container">
      <h1 className="home-heading">Accessibility Rating</h1>
      <p className="home-description">
        Evaluate the accessibility of your website and obtain a certificate of compliance.
      </p>
      <div className="home-form">
        <label htmlFor="websiteUrl" className="home-label">Website URL</label>
        <input
          id="websiteUrl"
          type="text"
          placeholder="https://www.example.com"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          className="home-input"
        />
      </div>
      <button onClick={handleScan} className="home-button" disabled={isLoading}>
        {isLoading ? 'Scanning...' : 'Scan Website'}
      </button>
      
      {isLoading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Analyzing website accessibility...</p>
        </div>
      )}
      
      {!isLoading && score !== null && (
        <>
          <div className="home-score">Your website scored: {score}</div>
          <button onClick={handleViewCertificate} className="certificate-button">
            View Certificate
          </button>
        </>
      )}
      {!isLoading && suggestions && (
        <div className="home-suggestions">
          <h3>Improvement Suggestions:</h3>
          <p>{suggestions}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
