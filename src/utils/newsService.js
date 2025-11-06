// NewsService utility for fetching region-based news
// Uses NewsData.io API endpoints
// API Documentation: https://newsdata.io/documentation

/**
 * Fetch top news for a city
 * Example API URL: https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&country=us&city=New%20York&size=5
 * 
 * @param {string} city - The city name
 * @param {string} country - The country code (ISO 3166-1 alpha-2)
 * @returns {Promise<Object>} Promise resolving to news data
 */
export const getTopCityNews = async (city, country = 'us') => {
  // TODO: Replace with actual API call
  // const apiKey = process.env.REACT_APP_NEWSDATA_API_KEY;
  // const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${country}&city=${encodeURIComponent(city)}&size=5`;
  // const response = await fetch(url);
  // return await response.json();

  // Return sample response shape
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        totalResults: 5,
        results: [
          {
            title: `Sample ${city} News Article 1`,
            link: 'https://example.com/article1',
            description: 'This is a sample news article description.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country],
            city: city
          },
          {
            title: `Sample ${city} News Article 2`,
            link: 'https://example.com/article2',
            description: 'Another sample news article description.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country],
            city: city
          },
          {
            title: `Sample ${city} News Article 3`,
            link: 'https://example.com/article3',
            description: 'Yet another sample news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country],
            city: city
          },
          {
            title: `Sample ${city} News Article 4`,
            link: 'https://example.com/article4',
            description: 'Fourth sample news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country],
            city: city
          },
          {
            title: `Sample ${city} News Article 5`,
            link: 'https://example.com/article5',
            description: 'Fifth sample news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country],
            city: city
          }
        ]
      });
    }, 500);
  });
};

/**
 * Fetch top news for a state/region
 * Example API URL: https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&country=us&region=California&size=5
 * 
 * @param {string} state - The state/region name
 * @param {string} country - The country code (ISO 3166-1 alpha-2)
 * @returns {Promise<Object>} Promise resolving to news data
 */
export const getTopStateNews = async (state, country = 'us') => {
  // TODO: Replace with actual API call
  // const apiKey = process.env.REACT_APP_NEWSDATA_API_KEY;
  // const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${country}&region=${encodeURIComponent(state)}&size=5`;
  // const response = await fetch(url);
  // return await response.json();

  // Return sample response shape
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        totalResults: 5,
        results: [
          {
            title: `Sample ${state} News Article 1`,
            link: 'https://example.com/state-article1',
            description: 'This is a sample state news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country],
            region: state
          },
          {
            title: `Sample ${state} News Article 2`,
            link: 'https://example.com/state-article2',
            description: 'Another sample state news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country],
            region: state
          },
          {
            title: `Sample ${state} News Article 3`,
            link: 'https://example.com/state-article3',
            description: 'Third sample state news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country],
            region: state
          },
          {
            title: `Sample ${state} News Article 4`,
            link: 'https://example.com/state-article4',
            description: 'Fourth sample state news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country],
            region: state
          },
          {
            title: `Sample ${state} News Article 5`,
            link: 'https://example.com/state-article5',
            description: 'Fifth sample state news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country],
            region: state
          }
        ]
      });
    }, 500);
  });
};

/**
 * Fetch top news for a country
 * Example API URL: https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&country=us&size=5
 * 
 * @param {string} country - The country code (ISO 3166-1 alpha-2)
 * @returns {Promise<Object>} Promise resolving to news data
 */
export const getTopCountryNews = async (country = 'us') => {
  // TODO: Replace with actual API call
  // const apiKey = process.env.REACT_APP_NEWSDATA_API_KEY;
  // const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${country}&size=5`;
  // const response = await fetch(url);
  // return await response.json();

  // Return sample response shape
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        totalResults: 5,
        results: [
          {
            title: `Sample ${country.toUpperCase()} News Article 1`,
            link: 'https://example.com/country-article1',
            description: 'This is a sample country news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country]
          },
          {
            title: `Sample ${country.toUpperCase()} News Article 2`,
            link: 'https://example.com/country-article2',
            description: 'Another sample country news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country]
          },
          {
            title: `Sample ${country.toUpperCase()} News Article 3`,
            link: 'https://example.com/country-article3',
            description: 'Third sample country news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country]
          },
          {
            title: `Sample ${country.toUpperCase()} News Article 4`,
            link: 'https://example.com/country-article4',
            description: 'Fourth sample country news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country]
          },
          {
            title: `Sample ${country.toUpperCase()} News Article 5`,
            link: 'https://example.com/country-article5',
            description: 'Fifth sample country news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['top'],
            country: [country]
          }
        ]
      });
    }, 500);
  });
};

/**
 * Fetch top world news
 * Example API URL: https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&language=en&size=5
 * 
 * @param {string} language - The language code (default: 'en')
 * @returns {Promise<Object>} Promise resolving to news data
 */
export const getTopWorldNews = async (language = 'en') => {
  // TODO: Replace with actual API call
  // const apiKey = process.env.REACT_APP_NEWSDATA_API_KEY;
  // const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=${language}&size=5`;
  // const response = await fetch(url);
  // return await response.json();

  // Return sample response shape
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        totalResults: 5,
        results: [
          {
            title: 'Sample World News Article 1',
            link: 'https://example.com/world-article1',
            description: 'This is a sample world news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['world'],
            language: language
          },
          {
            title: 'Sample World News Article 2',
            link: 'https://example.com/world-article2',
            description: 'Another sample world news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['world'],
            language: language
          },
          {
            title: 'Sample World News Article 3',
            link: 'https://example.com/world-article3',
            description: 'Third sample world news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['world'],
            language: language
          },
          {
            title: 'Sample World News Article 4',
            link: 'https://example.com/world-article4',
            description: 'Fourth sample world news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['world'],
            language: language
          },
          {
            title: 'Sample World News Article 5',
            link: 'https://example.com/world-article5',
            description: 'Fifth sample world news article.',
            pubDate: new Date().toISOString(),
            source_id: 'sample_source',
            category: ['world'],
            language: language
          }
        ]
      });
    }, 500);
  });
};
