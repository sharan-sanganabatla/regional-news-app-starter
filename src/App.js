import React, { useState, useEffect } from 'react';
import './App.css';
import { getLocation } from './utils/location';
import NewsService from './utils/newsService';

function App() {
  const [location, setLocation] = useState(null);
  const [cityNews, setCityNews] = useState([]);
  const [stateNews, setStateNews] = useState([]);
  const [countryNews, setCountryNews] = useState([]);
  const [worldNews, setWorldNews] = useState([]);

  useEffect(() => {
    // Get user location
    const userLocation = getLocation();
    setLocation(userLocation);

    // Fetch sample news for each area
    setCityNews(NewsService.getCityNews(userLocation.city));
    setStateNews(NewsService.getStateNews(userLocation.state));
    setCountryNews(NewsService.getCountryNews(userLocation.country));
    setWorldNews(NewsService.getWorldNews());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Regional News App</h1>
        {location && (
          <p>Your location: {location.city}, {location.state}, {location.country}</p>
        )}
      </header>
      
      <main>
        <section className="news-section">
          <h2>Top 5 {location?.city || 'City'} News</h2>
          <ul>
            {cityNews.map((article, index) => (
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="news-section">
          <h2>Top 5 {location?.state || 'State'} News</h2>
          <ul>
            {stateNews.map((article, index) => (
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="news-section">
          <h2>Top 5 {location?.country || 'Country'} News</h2>
          <ul>
            {countryNews.map((article, index) => (
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="news-section">
          <h2>Top 5 World News</h2>
          <ul>
            {worldNews.map((article, index) => (
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
