import { takeLatest, call, put, all } from "redux-saga/effects";

import { signInSuccess, signFailure } from "./actions";
import { API } from "../../../services/api";
import history from "../../../services/history";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(API.post, "sessions", { email, password });

    const { token, user } = response.data;

    API.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push("/");
  } catch (error) {
    yield put(signFailure());
  }
}
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(API.post, "users", {
      name,
      email,
      password,
      provider: true,
    });
    history.push("/");
  } catch (error) {
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    API.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
