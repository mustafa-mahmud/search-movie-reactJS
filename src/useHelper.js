import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from './context';

const useHelper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovie] = useState([]);
  const [error, setError] = useState({ show: false, msg: '' });

  const fetchMovie = async (url) => {
    try {
      const res = await fetch(`${API_ENDPOINT}&${url}`);
      const data = await res.json();

      if (data.Response === 'True') {
        setMovie(data.Search || data);
        setIsLoading(false);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { isLoading, movieData, error, fetchMovie };
};

export default useHelper;
