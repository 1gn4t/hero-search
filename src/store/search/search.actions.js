import { createAction } from "../../utils/reducer";
import { SEARCH_ACTION_TYPES } from "./search.types";

export const setSearchString = (value) =>
  createAction(SEARCH_ACTION_TYPES.SET_SEARCH_STRING, value);

export const setHerosMap = (value) =>
  createAction(SEARCH_ACTION_TYPES.SET_HEROS_MAP, value);

export const setCurrentHero = (value) =>
  createAction(SEARCH_ACTION_TYPES.SET_CURRENT_HERO, value);
