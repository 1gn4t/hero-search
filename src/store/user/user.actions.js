import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer";

export const setUser = (value) =>
  createAction(USER_ACTION_TYPES.SET_USER, value);
