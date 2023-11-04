import { createAction } from "../../utils/reducer";
import { TABS_ACTION_TYPES } from "./tabs.types";

export const setCurrentTab = (value) =>
  createAction(TABS_ACTION_TYPES.SET_CURRENT_TAB, value);
