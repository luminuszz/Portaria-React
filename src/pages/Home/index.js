import React, { useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
import { useStyles } from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { MainListItems } from "../listItems/listItems";
import Chart from "../Chart/Chart";
import Deposits from "../Deposits/Deposits";
import Orders from "../Orders/Orders";
import Header from "../Header/index";
import { apiCatraca, apiCatraca2 } from "../../services";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Portaria
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// Styles

// Fim Styles

export default function Dashboard() {
  const token1 = localStorage.getItem("token1");
  const token2 = localStorage.getItem("token2");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //
  const [testeArray, setTeste] = useState([]);
  // Chamada api
  useEffect(() => {
    // request com axios
    apiCatraca
      .post(`/load_objects.fcgi?session=${token1}`, {
        object: "users",
        limit: 20
      })
      .then(r => {
        console.log(r.data.users);
        setTeste(r.data.users);
      });
  }, []);

  // Open menu
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits array={testeArray} />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders array={testeArray} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}
