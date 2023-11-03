import { USER_ACTION_TYPES } from "./user.types";

const INIT_STATE = {
  user: null,
  userEmail: "",
  userPassword: "",
};

export const userReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
