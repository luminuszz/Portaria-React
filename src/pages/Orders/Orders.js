/* eslint-disable no-script-url */
import React,{useState,useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/Title';
import axios from 'axios';


// Generate Order Data




const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
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
    <React.Fragment>
      <Title>Ultimos acessos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Empresa</TableCell>
            <TableCell>Nivel de acesso</TableCell>
            <TableCell>Data</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {testeArray.map(row => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
        Ver logs
        </Link>
      </div>
    </React.Fragment>
  );
}