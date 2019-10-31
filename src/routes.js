import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Erro from "./pages/Erro";
import Dashboard from "./pages/Home";
import Header from "./pages/Header";
import Table from "./pages/Table";
import Login from "./pages/Login";
import session from "./auth";

// Private
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      session() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/*Routes */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/erro" component={Erro} />
        {/* Private Routes */}
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/header" component={Header} />
        <PrivateRoute exact path="/table" component={Table} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
