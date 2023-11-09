import { INIT_HERO } from "../../utils/init-hero";
import { SEARCH_ACTION_TYPES } from "./search.types";

const INIT_STATE = {
  herosMap: [],
  herosMapError: null,
  searchStr: "",
  currHero: INIT_HERO,
  sizeList: 5,
};

export const searchReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ACTION_TYPES.SET_HEROS_MAP_STARTED:
      return { ...state };
    case SEARCH_ACTION_TYPES.SET_HEROS_MAP_SUCCESS:
      return { ...state, herosMap: payload };
    case SEARCH_ACTION_TYPES.SET_HEROS_MAP_FAILURE:
      return { ...state, herosMapError: payload };
    case SEARCH_ACTION_TYPES.SET_SEARCH_STRING:
      return { ...state, searchStr: payload };
    case SEARCH_ACTION_TYPES.SET_CURRENT_HERO:
      return { ...state, currHero: payload, searchStr: "", herosMap: [] };
    default:
      return state;
  }
};
