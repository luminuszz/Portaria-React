import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function PassTwo() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selecione a empresa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={8} md={6}>
          <TextField
            required
            id="empresa"
            label="Empresa"
            helperText="Selecione o a empresa"
            fullWidth
          />
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField
            required
            id="levelAcess"
            label="Nivel de acesso"
            helperText="Selecione o nível de acesso"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
