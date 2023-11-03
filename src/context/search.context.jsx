import { createContext, useEffect, useReducer } from "react";
import { PostService } from "../API/PostService";
import { INIT_HERO } from "../utils/init-hero";
import { createAction } from "../utils/reducer";

export const SearchContext = createContext(null);

const INIT_STATE = {
  herosMap: [],
  searchStr: "",
  currHero: INIT_HERO,
};

export const SearchReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_HEROS_MAP":
      return { ...state, herosMap: payload };
    case "SET_SEARCH_STRING":
      return { ...state, searchStr: payload };
    case "SET_CURRENT_HERO":
      return { ...state, currHero: payload, searchStr: "", herosMap: [] };
    default:
      return state;
  }
};

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INIT_STATE);

  useEffect(() => {
    (async () => {
      const response = await PostService.getHero(state.searchStr);
      dispatch(createAction("SET_HEROS_MAP", response));
    })();
  }, [state.searchStr]);

  const value = {
    state,
    dispatch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
