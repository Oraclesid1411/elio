import { StaticIP } from '@/config/staticip';
import { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('');
  const [presta, setProduits] = useState([]);

  const rechercherPrestataires = async (searchTerm) => {
    setQuery(searchTerm);
    if (!searchTerm) {
      setProduits([]);
      return;
    }

    try {
      const res = await fetch(`${StaticIP}api/auth/search?query=${encodeURIComponent(searchTerm)}`);
      const data = await res.json();
      setProduits(data);
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
    }
  };

  return (
    <SearchContext.Provider value={{ query, setQuery, presta, rechercherPrestataires }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
