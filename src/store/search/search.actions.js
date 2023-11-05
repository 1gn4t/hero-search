import { PostService } from "../../API/PostService";
import { createAction } from "../../utils/reducer";
import { SEARCH_ACTION_TYPES } from "./search.types";

export const setSearchString = (value) =>
  createAction(SEARCH_ACTION_TYPES.SET_SEARCH_STRING, value);

export const setCurrentHero = (value) =>
  createAction(SEARCH_ACTION_TYPES.SET_CURRENT_HERO, value);

export const setHerosMapStart = () =>
  createAction(SEARCH_ACTION_TYPES.SET_HEROS_MAP_STARTED);

export const setHerosMapSuccess = (value) =>
  createAction(SEARCH_ACTION_TYPES.SET_HEROS_MAP_SUCCESS, value);

export const setHerosMapFailure = (value) =>
  createAction(SEARCH_ACTION_TYPES.SET_HEROS_MAP_FAILURE, value);

export const setHerosMap = (searchStr) => {
  return async (dispatch) => {
    try {
      dispatch(setHerosMapStart());

      const response = await PostService.getHero(searchStr);

      dispatch(setHerosMapSuccess(response));
    } catch (error) {
      dispatch(setHerosMapFailure(error.message));
    }
  };
};
