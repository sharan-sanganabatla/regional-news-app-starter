# Regional News App
A React-based starter project for displaying regional news stories.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- NewsData.io API key (free tier available)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/sharan-sanganabatla/regional-news-app-starter.git
cd regional-news-app-starter
```

2. Install dependencies:
```bash
npm install
```

3. Set up your NewsData.io API key:

#### Getting Your API Key
- Visit [NewsData.io](https://newsdata.io/) and sign up for a free account
- Navigate to your dashboard to find your API key
- Free tier includes 200 requests per day

#### Configuring the API Key

Create a `.env` file in the root directory of the project:

```bash
# In the project root directory
touch .env
```

Add your NewsData.io API key to the `.env` file:

```
REACT_APP_NEWSDATA_API_KEY=your_api_key_here
```

**Important:** 
- Replace `your_api_key_here` with your actual API key from NewsData.io
- The `.env` file should NOT be committed to version control
- Make sure `.env` is listed in your `.gitignore` file

### Running the App

To start the development server:
```bash
npm start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000).

## NewsData.io API Integration

This app uses the NewsData.io API to fetch regional news articles. The integration is handled in `src/utils/newsService.js`.

### API Integration Example

Here's how the NewsData.io API is integrated:

```javascript
// src/utils/newsService.js
const API_KEY = process.env.REACT_APP_NEWSDATA_API_KEY;
const BASE_URL = 'https://newsdata.io/api/1';

// Fetch news by country
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

// Fetch news by category and country
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
```

### Available Categories
- business
- entertainment
- environment
- food
- health
- politics
- science
- sports
- technology
- top (default)
- world

### Supported Country Codes
Use ISO 3166-1 alpha-2 country codes (e.g., 'us', 'gb', 'ca', 'au', 'in', etc.)

### API Response Structure

The NewsData.io API returns articles with the following structure:

```javascript
{
  "status": "success",
  "totalResults": 10,
  "results": [
    {
      "title": "Article Title",
      "link": "https://example.com/article",
      "description": "Article description...",
      "pubDate": "2025-11-05 12:00:00",
      "image_url": "https://example.com/image.jpg",
      "source_id": "source_name",
      "country": ["us"],
      "category": ["technology"]
    }
  ]
}
```

## Troubleshooting

### API Key Issues
- If you see "API key not found" errors, make sure your `.env` file is in the root directory
- Restart the development server after creating or modifying the `.env` file
- Verify that your API key is correctly copied without any extra spaces

### Rate Limiting
- Free tier is limited to 200 requests per day
- Consider implementing caching to reduce API calls
- Monitor your usage in the NewsData.io dashboard
