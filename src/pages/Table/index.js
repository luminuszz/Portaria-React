import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { display, textAlign } from '@material-ui/system';
import axios from 'axios';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles({
  root: {
    height:'80%',
    width: '80%',
    justifyContent:'center',
    alignContent:'center',
    display: 'flex',
    textAlign:'center',
    marginLeft:'140px',
    marginTop:'40px',
    marginBottom:'25px'
    

  },
  table: {
    minWidth: 500,
    textAlign:'center',
    
  },
  
  input: {
    display: 'none',
  },
});




export default function SimpleTable() {
  const [testeArray,setTeste] = useState([]);
  const [key,setKey] = useState('');

// Pega o id do usuário da tabela
 function getKey(key){
  setKey(key);
 }



  useEffect(()=>{
  
      // request com axios
      axios.get('https://swapi.co/api/planets').then((r)=>{
        console.log(r.data.results);

        setTeste(r.data.results)
      
    })

  

  },[])

  const classes = useStyles();
  
 

  return (
    <div>
     
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
           
          <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Empresa</TableCell>
            <TableCell align="right">Nivel de acesso</TableCell>
            <TableCell align="right">descrição</TableCell>
            <TableCell align="right">ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {testeArray.map(row => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.climate}</TableCell>
              <TableCell align="right">{row.rotation_period}</TableCell>
              <TableCell align="right">{row.diameter}</TableCell>
              <TableCell align="right"><Button onClick={()=>{getKey(row.name)}} variant="contained" color="primary" className={classes.button}>ação</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
   
    </div>
    
  );
}