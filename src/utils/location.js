/**
 * Fetch user location (city, state, country) using IP geolocation
 * @returns {Promise<Object>} Promise resolving to region info
 */
export const getLocation = async () => {
  try {
    // Using ipapi.co free API (no API key required)
    const response = await fetch('https://ipapi.co/json/');
    
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }
    
    const data = await response.json();
    
    return {
      city: data.city || 'Unknown',
      state: data.region || 'Unknown',
      country: data.country_name || 'Unknown',
      countryCode: data.country_code || 'Unknown',
      region: data.region || 'Unknown'
    };
  } catch (error) {
    console.error('Error fetching location:', error);
    throw error;
  }
};
