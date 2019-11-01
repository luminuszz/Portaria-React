import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/index";
import "./App.css";
import Routes from "./routes";
import Hedear from "./pages/Header";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
