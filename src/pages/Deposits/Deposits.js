/* eslint-disable no-script-url */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Ultimo acesso</Title>
      <Typography component="p" variant="h4">
        TESTE 22
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      10 de novembro, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
         Ver mais
        </Link>
      </div>
    </React.Fragment>
  );
}