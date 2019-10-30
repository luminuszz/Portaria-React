import React from 'react';
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";



import Dashboard from './pages/Home';
import Header from './pages/Header';
import Table from './pages/Table';
import Login from './pages/Login';
import session from './auth';

// Private






const Routes = ()=>{
  return(
   
    <BrowserRouter>
    <Route exact path='*/'component={Dashboard}/>
     <Route  path="/">
      {session() === true ? console.log("logado") :  <Redirect to="/login" />}
      </Route>
       
  
    <Switch> 
    
    
      <Route exact path='/login' component={Login}/>
      
      <Route exact path='/table' component={Table}/>


    </Switch>
    
    </BrowserRouter>
  )

} 
export default Routes;

