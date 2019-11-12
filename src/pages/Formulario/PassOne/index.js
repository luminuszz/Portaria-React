import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function PassOne() {
  const [name, setName] = useState("");
  const radomRegistration = Math.floor(Math.random() * 10000) + 1;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados cadastrais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nome"
            fullWidth="true"
            autoComplete="fname"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
