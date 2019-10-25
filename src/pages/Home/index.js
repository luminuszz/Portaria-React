import React,{Component} from 'react';
import './index.css';
import abitat from '../../assets/abitat.png';



class Home extends Component {
  render(){
    return(
      <div className='imagem animated fadeIn'>

        
         <img src={abitat} alt="abitat"/>

        
      
      </div>
    )
  }
}
export default Home;