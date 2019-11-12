// import redux
import { createStore, applyMiddleware } from "redux";
// import redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import React-Saga
import createSagaMiddleware from "redux-saga";
//
import rootReducer from "./reducers";
import rootSaga from "./sagas/index";

const persistConfig = {
  key: "root",
  storage
};
const sagaMiddleware = createSagaMiddleware();

const persistReducerStorage = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistReducerStorage,
  applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export { store, persistor };
