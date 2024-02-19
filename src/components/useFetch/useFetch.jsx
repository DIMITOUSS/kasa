// useFetch.js
import { useState, useEffect } from 'react';

// Custom hook for fetching data
const useFetch = (filename) => {
  const baseUrl = '/'; // Assuming the files are in the root directory
  const url = `${baseUrl}${filename}`;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Check if the response content type is JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          // If content type is not JSON, return the raw response text
          const textData = await response.text();
          setData(textData);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

  }, [url]);

  return { data, loading, error };
};

export default useFetch;
