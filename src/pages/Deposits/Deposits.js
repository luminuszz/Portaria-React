/* eslint-disable no-script-url */
import React, { useState, useEffect,useCallback } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import { apiCatraca, apiCatraca2 } from '../../services'
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits(props) {

  const [key, setkey] = useState('')
  const [array, setArray] = useState([])
  const token1 = localStorage.getItem('token1')
  const token2 = localStorage.getItem('token2')





  const classes = useStyles();


  useEffect(() => {
    apiCatraca.post(`/load_objects.fcgi?session=${token1}`, {
      object: 'access_logs',
      limit: 5,
      fields: [
        "user_id",
        "time",
        {
          object: "users",
          field: "name"
        },
        {
          object: "users",
          field: "id"
        }
      ],


      limit: 1,
      order: ["time", "descending"]

    }, [])
      .then((r) => {
        console.log(r.data);

        setArray(r.data.access_logs);

      })
  }, [setArray])

  array.map((row)=>{
    console.log(row)
    console.log(row['users.name'])
  })


  return (
    <React.Fragment>


      <Title>Ultimo acesso</Title>


      {
        array.map((row) => (
          
          <Typography component="p" variant="h6">
           {row['users.name']}
          </Typography>

        ))
      }

      <br/>


      {
      
          array.map((row) => {
            let date= new Date(row.time * 1000);
            let string = date.toLocaleDateString('pt-br') 
            let stringTime = date.toLocaleTimeString(-4) 


            return(  <Typography component="p" variant="h6">
            {string}
            <br/>
            {stringTime}
             </Typography>)
  
          
  
       
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