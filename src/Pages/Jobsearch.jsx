import React, { useState } from 'react';

function Jobsearch() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}+jobs`;
      window.open(url, '_blank');
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#0f766e' }}>Job Search</h2>

      <input
        type="text"
        placeholder="Search job roles or companies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0f766e',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Jobsearch;
