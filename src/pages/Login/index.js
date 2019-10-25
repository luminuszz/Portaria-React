import React, { Component } from 'react';
import './index.css'
import abitat from '../../assets/abitat.png';
import { Input,Button,FormControlLabel   } from '@material-ui/core';

class Login extends Component {

  render() {
    return (
      <div className='container animated fadeInUp'>
        <form>
          <div className="containerInput">

            <img src={abitat} alt="" />

            <h4>Portaria</h4>

            <div className='inputLabel'>

              <label htmlFor="login">Login</label>

             <Input autoFocus='true' className='formControl'/>

            </div>
            <div className='inputLabel'>
             
               <label htmlFor="senha">Senha</label>
              
              
               <Input autoFocus='true' className='formControl'/>
            </div>
         
          <Button color='primary'  children='Login'/>
     

       

          </div>

        </form>
      </div>
    )
  }
}
export default Login