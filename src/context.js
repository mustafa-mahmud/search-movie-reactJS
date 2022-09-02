import React, { useState, useContext, useEffect } from 'react';
import useHelper from './useHelper';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('batman');
  const { isLoading, movieData, error, fetchMovie } = useHelper();

  useEffect(() => {
    fetchMovie(`s=${search}`);
  }, [search]);

  return (
    <AppContext.Provider
      value={{ isLoading, movieData, error, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
