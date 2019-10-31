import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import "./App.css";
import Routes from "./routes";
import Hedear from "./pages/Header";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
