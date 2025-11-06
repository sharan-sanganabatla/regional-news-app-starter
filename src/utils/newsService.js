// NewsService utility for fetching region-based news
// Uses NewsData.io API endpoints
// API Documentation: https://newsdata.io/documentation

const API_KEY = process.env.REACT_APP_NEWSDATA_API_KEY;
const BASE_URL = 'https://newsdata.io/api/1';

/**
 * Fetch top news for a city
 * Example API URL: https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&country=us&city=New%20York&size=5
 * 
 * @param {string} city - The city name
 * @param {string} country - The country code (ISO 3166-1 alpha-2)
 * @returns {Promise<object>} Promise resolving to news data
 */
export const getTopCityNews = async (city, country = 'us') => {
  try {
    const url = `${BASE_URL}/news?apikey=${API_KEY}&country=${country}&city=${encodeURIComponent(city)}&size=5&language=en`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'error') {
      console.error('NewsData.io API Error:', data.message);
      return { status: 'error', results: [] };
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching city news:', error);
    return { status: 'error', results: [] };
  }
};

/**
 * Fetch top news for a state/region
 * Example API URL: https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&country=us&region=California&size=5
 * 
 * @param {string} state - The state/region name
 * @param {string} country - The country code (ISO 3166-1 alpha-2)
 * @returns {Promise<object>} Promise resolving to news data
 */
export const getTopStateNews = async (state, country = 'us') => {
  try {
    const url = `${BASE_URL}/news?apikey=${API_KEY}&country=${country}&region=${encodeURIComponent(state)}&size=5&language=en`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'error') {
      console.error('NewsData.io API Error:', data.message);
      return { status: 'error', results: [] };
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching state news:', error);
    return { status: 'error', results: [] };
  }
};

/**
 * Fetch top news for a country
 * Example API URL: https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&country=us&size=5
 * 
 * @param {string} country - The country code (ISO 3166-1 alpha-2)
 * @returns {Promise<object>} Promise resolving to news data
 */
export const getTopCountryNews = async (country = 'us') => {
  try {
    const url = `${BASE_URL}/news?apikey=${API_KEY}&country=${country}&size=5&language=en`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'error') {
      console.error('NewsData.io API Error:', data.message);
      return { status: 'error', results: [] };
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching country news:', error);
    return { status: 'error', results: [] };
  }
};

/**
 * Fetch top world news
 * Example API URL: https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&language=en&size=5
 * 
 * @param {string} language - The language code (default: 'en')
 * @returns {Promise<object>} Promise resolving to news data
 */
export const getTopWorldNews = async (language = 'en') => {
  try {
    const url = `${BASE_URL}/news?apikey=${API_KEY}&language=${language}&size=5`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'error') {
      console.error('NewsData.io API Error:', data.message);
      return { status: 'error', results: [] };
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching world news:', error);
    return { status: 'error', results: [] };
  }
};

/**
 * Fetch news by country
 * General function to fetch news for a specific country
 * 
 * @param {string} countryCode - The country code (ISO 3166-1 alpha-2)
 * @returns {Promise<object>} Promise resolving to news data
 */
export const fetchNewsByCountry = async (countryCode) => {
  try {
    const response = await fetch(
      `${BASE_URL}/news?apikey=${API_KEY}&country=${countryCode}&language=en`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

/**
 * Fetch news by category and country
 * Allows filtering by news category
 * 
 * @param {string} countryCode - The country code (ISO 3166-1 alpha-2)
 * @param {string} category - News category (business, entertainment, health, science, sports, technology, etc.)
 * @returns {Promise<object>} Promise resolving to news data
 */
export const fetchNewsByCategory = async (countryCode, category) => {
  try {
    const response = await fetch(
      `${BASE_URL}/news?apikey=${API_KEY}&country=${countryCode}&category=${category}&language=en`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
