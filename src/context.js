import React, { useContext, useState, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        setCocktails(drinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);
  return (
    <AppContext.Provider
      value={{ cocktails, loading, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
