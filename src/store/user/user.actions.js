import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer";

export const setUserStart = () =>
  createAction(USER_ACTION_TYPES.SET_USER_START);
export const setUserSuccess = (value) =>
  createAction(USER_ACTION_TYPES.SET_USER_SUCCESS, value);

export const signInStart = (value) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_START, value);
export const signInSuccess = (value) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, value);
export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signUpStart = (value) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, value);
export const signUpSuccess = (value) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, value);
export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);
export const signOutSuccess = (value) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS, value);
export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);

export const signGoogleStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_GOOGLE_START);
export const signGoogleSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_GOOGLE_SUCCESS);
export const signGoogleFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_GOOGLE_FAILED, error);
