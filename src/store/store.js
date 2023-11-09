import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { userSaga } from "./user/user.saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(userSaga);
