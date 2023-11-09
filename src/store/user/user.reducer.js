import { USER_ACTION_TYPES } from "./user.types";

const INIT_STATE = {
  user: null,
  userEmail: "",
  userPassword: "",
  error: null,
};

export const userReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_USER_SUCCESS:
      return { ...state, user: payload };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, user: null };
    case USER_ACTION_TYPES.SET_USER_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
