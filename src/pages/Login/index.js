import React, { useState } from 'react';
import './index.css'
import abitat from '../../assets/abitat.png';
import { Input,Button,FormControlLabel   } from '@material-ui/core';
import {apiCatraca,apiCatraca2} from '../../services';
import {Redirect,useHistory} from  'react-router-dom';
import session from '../../auth';
import SimpleModal from './modal';
import CircularIndeterminate from '../../icons';

export default function Login(props) {

  let redirect = useHistory()
  
  const [inputlogin,setlogin] = useState('');
  const [inputsenha,setSenha] = useState('');
  const [estadoReq,setEstado] = useState(false);
  const [visible,setVisible] = useState(false);
  
   
  
  
 
     function handleLogin(e){
     console.log(session())
     
    e.preventDefault()
    
    
    const login = inputlogin;
    const senha = inputsenha;
    
     apiCatraca.post('login.fcgi',{
           data:{
        login: login,
        password: senha
      }
    }).then((r)=>{
      console.log(r.data.session)
      localStorage.setItem('token1',r.data.session);

      setEstado(r.data.session)
      

      estadoReq === true ? 
       redirect.push('/home')
       : 
       redirect.push('/login');  
      
    }).finally(
      setVisible(false)
     
    )

     apiCatraca2.post('login.fcgi',{
      data:{
        login:login,
        passwrod:senha
      }
    }).then((r)=>{
      console.log(r.data.session)
      localStorage.setItem('token2',r.data.session);
     
    })

   

  }
  
    return (
      <div>
        <div id='progress' className={visible?'fadeIn':'fadeOut'}>
             <CircularIndeterminate/>
           </div>


      <div className='container animated fadeInUp'>
        
      
        {
          estadoReq === true ? <SimpleModal corpo={estadoReq} /> : console.log('ok')          
        }
      
        <form  onSubmit={handleLogin}>
          <div className="containerInput">
         
            <img src={abitat} alt="abitat" />

            <h4>Portaria</h4>
          
            <div className='inputLabel'>

              <label htmlFor="login">Login</label>
            
             <Input  value={inputlogin} onChange={(e)=>setlogin(e.target.value)} autoFocus='true'type='email' className='formControl'/>
                
            </div>
            <div className='inputLabel'>
             
               <label htmlFor="senha">Senha</label>
              
              
               <Input type='password'value={inputsenha} onChange={(e)=>setSenha(e.target.value)}  className='formControl'/>
            </div>
            <div>

            </div>
        

          <Button color='primary' type='subimit'  children='Entrar'/>


         


     

       

          </div>
          

        </form>
        
      </div>
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