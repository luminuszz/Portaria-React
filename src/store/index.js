// import redux
import { createStore, applyMiddleware } from "redux";
// import redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import React-tank
import thunk from "redux-thunk";
//
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistReducerStorage = persistReducer(persistConfig, rootReducer);

const store = createStore(persistReducerStorage, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
