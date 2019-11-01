import React from "react";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import CircularIndeterminate from "../../../Components";
export default function PassThree() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Digital
        <CircularIndeterminate />
        <Typography variant="subtitle1">
          Cadastre o usuario na catraca depois clique em Finzalizar
        </Typography>
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Grid container>
            <React.Fragment>
              <Grid item xs={5}>
                <Typography gutterBottom></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom></Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
