import React from 'react';
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";



import Home from './pages/Home';
import Header from './pages/Header';
import Table from './pages/Table';
import Login from './pages/Login';
import session from './auth';

// Private






const Routes = ()=>{
  return(
    
  
    <BrowserRouter>
     <Route  path="/">
      {session() === true ? console.log("logado") :  <Redirect to="/login" />}
      </Route>
      
    <Switch> 
    
      <Route exact path='/'component={Header}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/table' component={Table}/>


    </Switch>
    
    </BrowserRouter>
  )

} 
export default Routes;

