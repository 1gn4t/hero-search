import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {
  setUserSuccess,
  signGoogleFailed,
  signInFailed,
  signOutFailed,
  signOutSuccess,
} from "./user.actions";
import {
  createUser,
  getCurrentUser,
  singInUser,
  signOutUser,
  singInGoogle,
} from "../../API/firebase";

function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

function* signUp({ payload: { email, password } }) {
  try {
    yield call(createUser, email, password);
    yield call(setUser);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signIn({ payload: { email, password } }) {
  try {
    yield call(singInUser, email, password);
    yield call(setUser);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signGoogle() {
  try {
    yield call(singInGoogle);
    yield call(setUser);
  } catch (error) {
    yield put(signGoogleFailed(error));
  }
}

function* setUser() {
  const user = yield call(getCurrentUser);
  if (!user) return;
  console.log(user);
  yield put(setUserSuccess(user));
}

function* onSingUp() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

function* onSignIn() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signIn);
}

function* onSetUser() {
  yield takeLatest(USER_ACTION_TYPES.SET_USER_START, setUser);
}

function* onSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

function* onSignGoogle() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_GOOGLE_START, signGoogle);
}

export function* userSaga() {
  yield all([
    call(onSetUser),
    call(onSignIn),
    call(onSingUp),
    call(onSignGoogle),
    call(onSignOut),
  ]);
}
