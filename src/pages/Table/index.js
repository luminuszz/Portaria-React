/* eslint-disable no-script-url */
import React, { useState, useEffect, useCallback } from "react";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import Grid from "@material-ui/core/Grid";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Title from "../Title/Title";
import axios from "axios";
import Header from "../Header/index";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import SplitButton from "../../Components/button";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
// Generate Order Data

export default function OrdersTable() {
  const [key, setKey] = useState("");
  const [array, setArray] = useState([]);
  const dados = useSelector(state => state.data);

  console.log(dados);

  // Pega o id do usuário da tabela

  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  {dados.map(dados => (
                    <Title>{dados.tableName}</Title>
                  ))}
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Empresa</TableCell>
                        <TableCell>Nivel de acesso</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell align="right">Ultima entrada</TableCell>
                        <TableCell align="right">Ação</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dados.map(dados => (
                        <TableRow>
                          <TableCell>{dados.url}</TableCell>
                          <TableCell>{dados.object} </TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell align="right">
                            <SplitButton
                              type="button"
                              name="Ação"
                            ></SplitButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </React.Fragment>
  );
}
