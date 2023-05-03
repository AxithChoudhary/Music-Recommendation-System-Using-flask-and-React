import React, { useState } from 'react';
import './App.css';

function SearchBar() {
  const [song, setSong] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ song }),
    })
      .then(response => response.json())
      .then(data => {
        setImages(data.prediction);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label className="search-bar__label">
          <input
            type="text"
            placeholder="Search for a song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            className="search-bar__input"
          />
        </label>
        <button type="submit" className="search-bar__button">
          Search
        </button>
      </form>
      <div className="search-bar__results">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="search-bar__result-image"
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
