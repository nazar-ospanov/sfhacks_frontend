// src/PageOne.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Uses consolidated CSS with accessible-mode overrides

function PageOne() {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('normal'); // 'normal', 'asc', or 'desc'

  useEffect(() => {
    fetchWebsites();
  }, []);

  const fetchWebsites = async () => {
    try {
      // Determine the API base URL based on environment
      const baseUrl = process.env.NODE_ENV === 'production' 
        ? 'https://sfhacks-backend.fly.dev' 
        : 'http://localhost:3000';
      
      const response = await fetch(`${baseUrl}/mongo/`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setWebsites(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const getBadgeColor = (level) => {
    const colors = {
      1: '#ff4d4d', // Red
      2: '#ff8533', // Orange
      3: '#ffcc00', // Yellow
      4: '#b3cc00', // Light green
      5: '#66cc00', // Green
      6: '#00cc66', // Teal
      7: '#00cc99', // Turquoise
    };
    return colors[level] || '#007bff';
  };

  const handleSortToggle = () => {
    if (sortOrder === 'normal') {
      setSortOrder('asc');
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('normal');
    }
  };

  const getSortedWebsites = () => {
    if (sortOrder === 'normal') {
      return [...websites];
    } else if (sortOrder === 'asc') {
      return [...websites].sort((a, b) => a.badge_level - b.badge_level);
    } else {
      return [...websites].sort((a, b) => b.badge_level - a.badge_level);
    }
  };

  const getSortIcon = () => {
    if (sortOrder === 'asc') return '↑';
    if (sortOrder === 'desc') return '↓';
    return '⇅';
  };

  return (
    <div className="page-one-container">
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading website data...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          Error: {error}. Please try refreshing the page.
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="text-center">
            <h1 className="page-heading">Website Accessibility Rankings</h1>
            <p className="page-description">
              Below is a comprehensive list of all websites that have been scanned for accessibility compliance.
            </p>
          </div>

          {websites.length === 0 ? (
            <div className="no-data-message">
              No websites have been scanned yet. Try scanning a website from the Home page.
            </div>
          ) : (
            <div className="table-container">
              <table className="websites-table">
                <thead>
                  <tr>
                    <th>Website URL</th>
                    <th>
                      <div className="sort-header">
                        Accessibility Score
                        <button 
                          className="sort-button" 
                          onClick={handleSortToggle}
                          title={`Sort ${sortOrder === 'normal' ? 'ascending' : sortOrder === 'asc' ? 'descending' : 'normal'}`}
                        >
                          {getSortIcon()}
                        </button>
                      </div>
                    </th>
                    <th>Last Updated</th>
                    <th>Improvement Suggestions</th>
                  </tr>
                </thead>
                <tbody>
                  {getSortedWebsites().map((site, index) => (
                    <tr key={index}>
                      <td className="url-cell">
                        <a href={site.url} target="_blank" rel="noopener noreferrer">
                          {site.url}
                        </a>
                      </td>
                      <td>
                        <div className="badge-container">
                          <span 
                            className="badge" 
                            style={{ backgroundColor: getBadgeColor(site.badge_level) }}
                          >
                            {site.badge_level}/7
                          </span>
                        </div>
                      </td>
                      <td>{formatDate(site.updated_at)}</td>
                      <td className="suggestions-cell">{site.improvement_suggestions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PageOne;
