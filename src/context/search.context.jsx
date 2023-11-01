import { createContext, useEffect, useState } from "react";
import { PostService } from "../API/PostService";
import { INIT_HERO } from "../utils/init-hero";

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [herosMap, setHerosMap] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [currHero, setCurrHero] = useState(INIT_HERO);

  const selectHeroAndClearInput = (hero) => {
    setCurrHero(hero);
    setSearchStr("");
    setHerosMap([]);
  };

  useEffect(() => {
    (async () => {
      const response = await PostService.getHero(searchStr);
      setHerosMap(response);
    })();
  }, [searchStr]);

  const value = {
    herosMap,
    setHerosMap,
    searchStr,
    setSearchStr,
    currHero,
    setCurrHero,
    selectHeroAndClearInput,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
