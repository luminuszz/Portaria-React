import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PassOne from "../PassOne";
import PassTwo from "../PassTwo";
import PassThree from "../PassThree";
import Header from "../../Header";
import { useStyles } from "./styles";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const steps = ["Primeiro passo", "Segundo Passo", "Terceiro passo"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PassOne />;
    case 1:
      return <PassTwo />;
    case 2:
      return <PassThree />;
    default:
  }
}

export default function Formulary() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Header />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5" align="center">
              Cadastro
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Sucesso !!
                  </Typography>
                  <Typography variant="subtitle1">
                    Usuário Cadastrado
                  </Typography>
                  <Link className={classes.link} to="/">
                    <Button className={classes.button}> Voltar</Button>
                  </Link>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1
                        ? "Finalizar"
                        : "Proxima"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </div>
    </React.Fragment>
  );
}
