import { TABS_ACTION_TYPES } from "./tabs.types";

const INIT_STATE = {
  powerstats: true,
  biography: false,
  appearance: false,
  connections: false,
};

const clearState = {
  powerstats: false,
  biography: false,
  appearance: false,
  connections: false,
};

export const tabsReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TABS_ACTION_TYPES.SET_CURRENT_TAB:
      return { ...clearState, [payload]: true };
    default:
      return state;
  }
};
