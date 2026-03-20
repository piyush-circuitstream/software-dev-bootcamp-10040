import React, { useState, useEffect } from 'react';
import CatCard from './components/CatCard';

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCats = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      const data = await response.json();
      console.log(data);
      setCats(data);
    } catch (err) {
      setError('Failed to fetch cat images. Please try again later.', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="App">
      <h1>Random Cat Images</h1>

      {/* Conditional rendering for loading, error, and display */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="cat-gallery">
        {cats.length > 0 && !loading && !error ? (
          cats.map((cat, index) => (
            <CatCard key={index} imageId={cat.id} imageUrl={cat.url} />
          ))
        ) : (
          <p>No cats to display</p>
        )}
      </div>

      {/* Button to fetch new cat images */}
      <button onClick={fetchCats} disabled={loading}>
        {loading ? 'Fetching...' : 'Get New Cats'}
      </button>
    </div>
  );
}

export default App;

