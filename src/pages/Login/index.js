import React, { Component, useState } from 'react';
import axios from 'axios';
import './index.css'
import abitat from '../../assets/abitat.png';
import { Input,Button,FormControlLabel   } from '@material-ui/core';
import { func } from 'prop-types';


export default function Login() {
  
  const [inputlogin,setlogin] = useState('');
  const [inputsenha,setSenha] = useState('');

   async function handleLogin(e){
    e.preventDefault()
    const login = inputlogin;
    const senha = inputsenha;
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
  
    return (
      <div className='container animated fadeInUp'>
        <form  onSubmit={handleLogin}>
          <div className="containerInput">

            <img src={abitat} alt="" />

            <h4>Portaria</h4>

            <div className='inputLabel'>

              <label htmlFor="login">Login</label>

             <Input  value={inputlogin} onChange={(e)=>setlogin(e.target.value)} autoFocus='true'type='email' className='formControl'/>
                
            </div>
            <div className='inputLabel'>
             
               <label htmlFor="senha">Senha</label>
              
              
               <Input type='password'value={inputsenha} onChange={(e)=>setSenha(e.target.value)}  className='formControl'/>
            </div>

          <Button color='primary' type='subimit'  children='Entrar'/>
     

       

          </div>

        </form>
      </div>
    )
  }



/*
 async handleLogin(e){
    e.preventDefault()
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

*/