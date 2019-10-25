import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";


import Home from './pages/Home';
import Header from './pages/Header';
import Table from './pages/Table';
import Login from './pages/Login';
const Routes = ()=>{
  return(
  
    <BrowserRouter>
    <Header/>
     
    <Switch>
   
   
      <Route exact path='/login' component={Login}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/table' component={Table}/>
    
    


    </Switch>
    
    </BrowserRouter>
  )

} 
export default Routes;

