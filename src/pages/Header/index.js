import React,{Component} from 'react';
import './index.css';
import {Link} from  'react-router-dom';
import api from '../../services';




class Home extends Component {
  constructor(props){
    super(props)
   
    this.setDados = this.setDados.bind(this);

  }

  componentDidMount(){
    this.setDados();
  }

  async setDados(){
   api.post('login.fcgi',{
    login: "admin",
    password: "admin"
   }).then((res)=>{
     const token  = res.data.session
     console.log(token);
     localStorage.setItem('token',token);
    
   })

  }
  render(){
    return(
      <div className="container">
        <header className="header">
          
         <strong>ABITAT</strong>
         <nav>
           <Link to='/table'>TESTE</Link>
           <a href="">TESTE</a>
           <a href="">TESTE</a>
          <a href="">TESTE</a> 
         </nav>
         

        </header>
      
      </div>
    )
  }
}
export default Home;