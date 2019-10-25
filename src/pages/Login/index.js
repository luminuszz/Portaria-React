import React, { Component } from 'react';
import axios from 'axios';
import './index.css'
import abitat from '../../assets/abitat.png';
import { Input,Button,FormControlLabel   } from '@material-ui/core';
import Axios from 'axios';

class Login extends Component {
  constructor(){
    super()
    this.state={
      inputEmail:'',
      inputSenha:''
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin(){
    const login = this.state.inputEmail;
    const senha = this.state.inputSenha;
    await axios.all([
      axios.post('http://192.168.8.2/login.fcgi',{data:{
        login: login ,
	    	password: senha
      }}),

      axios.post('http://192.168.8.3/login.fcgi',{data:{
        login: login ,
	    	password: senha
      }})
      

    ]).then(axios.spread((tokenCatraca1,tokenCatraca2)=>{
      localStorage.setItem('Catraca1',tokenCatraca1);
      localStorage.setItem('Catraca2',tokenCatraca2);

    }))



  }



  render() {
    return (
      <div className='container animated fadeInUp'>
        <form>
          <div className="containerInput">

            <img src={abitat} alt="" />

            <h4>Portaria</h4>

            <div className='inputLabel'>

              <label htmlFor="login">Login</label>

             <Input onChange={(e)=>{this.setState({inputEmail:e.target.value})}}   value={this.state.inputEmail}  autoFocus='true'type='email' className='formControl'/>
                
            </div>
            <div className='inputLabel'>
             
               <label htmlFor="senha">Senha</label>
              
              
               <Input type='password'value={this.state.inputSenha} onChange={(e)=>{this.setState({inputSenha:e.target.value})}} className='formControl'/>
            </div>

          <Button color='primary'  children='Entrar'/>
     

       

          </div>

        </form>
      </div>
    )
  }
}
export default Login