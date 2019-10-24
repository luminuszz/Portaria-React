import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";


import Home from './pages/Home';
import Header from './pages/Header';
import Table from './pages/Table';
const Routes = ()=>{
  return(
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path='/table' component={Table}/>
    
    


    </Switch>
    
    </BrowserRouter>
  )

} 
export default Routes;

