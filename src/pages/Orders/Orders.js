/* eslint-disable no-script-url */
import React, { useState, useEffect, useCallback } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Title from "../Title/Title";
import axios from "axios";

// Generate Order Data

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders(props) {
  const [key, setKey] = useState("");
  const [array, setArray] = useState([]);

  // Pega o id do usuário da tabela

  useEffect(() => {
    console.log(props.array);
    setArray(props.array);
  }, [props.array]);

  function pegarChave(item) {
    setKey(item);
  }

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
          {array.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => {
                    pegarChave();
                  }}
                  color="primary"
                >
                  Ação
                </Button>
              </TableCell>
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
