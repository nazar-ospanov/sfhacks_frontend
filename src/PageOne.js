// src/PageOne.js
import React, { useState, useEffect } from 'react';
import './pageCss.css';

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
      const response = await fetch('http://localhost:3000/mongo/');
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
    return colors[level] || '#007bff'; // Default to blue if level is invalid
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
            <h1 className="main-title">Website Accessibility Rankings</h1>
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
          
          <style jsx>{`
            .text-center {
              text-align: center;
              margin-bottom: 2rem;
            }
            
            .main-title {
              font-size: 2.5rem;
              color: #2c3e50;
              margin-bottom: 1rem;
              font-weight: 700;
              text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
            }
            
            .page-description {
              font-size: 1.2rem;
              color: #7f8c8d;
              max-width: 80%;
              margin: 0 auto;
              line-height: 1.6;
            }
            
            .loading-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 2rem 0;
            }
            
            .loading-spinner {
              border: 4px solid rgba(0, 123, 255, 0.3);
              border-radius: 50%;
              border-top: 4px solid #007bff;
              width: 40px;
              height: 40px;
              animation: spin 1s linear infinite;
              margin-bottom: 1rem;
            }
            
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            .error-message {
              background-color: #ffebee;
              color: #c62828;
              padding: 1rem;
              border-radius: 4px;
              margin: 1rem 0;
            }
            
            .no-data-message {
              background-color: #e3f2fd;
              padding: 1rem;
              border-radius: 4px;
              margin: 1rem 0;
              text-align: center;
            }
            
            .table-container {
              overflow-x: auto;
              margin: 1.5rem 0;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              border-radius: 6px;
            }
            
            .websites-table {
              width: 100%;
              border-collapse: collapse;
              background-color: white;
            }
            
            .websites-table th, .websites-table td {
              padding: 0.75rem 1rem;
              text-align: center;
              border-bottom: 1px solid #e0e0e0;
              height: 60px;
              vertical-align: middle;
            }
            
            .websites-table th {
              background-color: #007bff;
              color: white;
              font-weight: bold;
            }
            
            .websites-table tr {
              height: 60px;
            }
            
            .websites-table tr:hover {
              background-color: #f5f5f5;
            }
            
            .badge-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            }
            
            .badge {
              display: inline-block;
              padding: 0.35rem 0.65rem;
              border-radius: 50px;
              color: white;
              font-weight: bold;
              text-align: center;
              min-width: 50px;
            }
            
            .url-cell a {
              color: #007bff;
              text-decoration: none;
              display: block;
              text-align: center;
            }
            
            .url-cell a:hover {
              text-decoration: underline;
            }
            
            .suggestions-cell {
              max-width: 300px;
              white-space: normal;
              word-break: break-word;
              text-align: center;
            }
            
            .sort-header {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
            }
            
            .sort-button {
              background: none;
              border: none;
              color: white;
              font-size: 1.2rem;
              cursor: pointer;
              padding: 0.2rem 0.5rem;
              margin-left: 0.5rem;
              width: 30px;
              height: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .sort-button:hover {
              opacity: 0.8;
            }
          `}</style>
        </>
      )}
    </div>
  );
}

export default PageOne;
