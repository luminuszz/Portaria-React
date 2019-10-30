/* eslint-disable no-script-url */
import React,{useState,useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits(props) {

  const [key,setkey] = useState('')
  const [array,setArray] = useState([])

  
  useEffect(()=>{
    console.log(props.array);
    setArray(props.array);
   },[props.array])
  
  const teste = 'teste'
  
  const classes = useStyles();

   const filter = array.filter((item)=>{
     
     return item.name == 'Bespin'
    
     
   })

   console.log(filter)

  return (
    <React.Fragment>
     
       
         
          <Title>Ultimo acesso</Title>
         
         
                <Typography component="p" variant="h4">
                {filter.name}
                </Typography>

                
           
        
                  {
             filter.map((item)=>{
               return(
                <Typography color="textSecondary" className={classes.depositContext}>
                {item.name}
                </Typography>

                
               )
             })
           }
          <div>
            <Link color="primary" href="javascript:;">
             Ver mais
            </Link>
          </div>
         
       
      
    </React.Fragment>
  );
}