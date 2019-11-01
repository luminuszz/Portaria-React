import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "black"
  }
}));

export const MainListItems = () => {
  const classes = useStyles();
  const dados = useSelector(state => state.tableInfo.data);
  const addStore = useDispatch();
  function userRedicrect() {
    addStore({
      type: "INFO_REQ",
      tableName: "Usuários",
      url: "usuario",
      object: "usuario"
    });
    return;
  }
  function empreRedicrect() {
    addStore({
      type: "INFO_REQ",
      tableName: "Empresas",
      url: "empresa",
      object: "empresa"
    });
    return;
  }
  function acessLogs() {
    addStore({
      type: "INFO_REQ",
      tableName: "Logs",
      url: "logs",
      object: "logs"
    });
    return;
  }

  console.log(dados);
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Portaria" />
      </ListItem>
      <Link className={classes.link} to="/table">
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>

          <ListItemText onClick={empreRedicrect} primary="Empresas" />
        </ListItem>
      </Link>
      <Link className={classes.link} to="/table">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText onClick={userRedicrect} primary="Usuários" />
        </ListItem>
      </Link>
      <Link className={classes.link} to="/table">
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>

          <ListItemText onClick={acessLogs} primary="Logs" />
        </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </div>
  );
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="" />
    </ListItem>
  </div>
);
