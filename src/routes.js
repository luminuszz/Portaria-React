import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";


import Home from './pages/Home';
import Header from './pages/Header';
import Table from './pages/Table';
import Login from './pages/Login';
import autentica from './auth';

// Private

const Routes = ()=>{
  return(
  
    <BrowserRouter>
    
     
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

