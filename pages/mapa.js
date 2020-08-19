import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { makeStyles } from '@material-ui/core/styles';
import Tabela from "../src/Tabela";
import Tabela02 from "../src/Tabela02";
import Tabela03 from "../src/Tabela03";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Mapa() {
  const classes = useStyles();
  return (
    <Container xs="12" align="center">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box my={4} align="center">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField text-align="center" id="standard-basic" label="Placa do carro" />
              <TextField id="standard-basic" label="Vaga onde ele estacionará" />
            </form>
            <br></br>
            <br></br>
            <Button color="secundary" variant="contained" color="primary">
              <Typography color="secondary">
                Entrar
              </Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <strong>Piso 01 - Real</strong>
          <br></br>
          <br></br>
          <Tabela>
          </Tabela>
        </Grid>
        <Grid item xs={2}>
          <strong>Piso 01 - Sistema</strong>
          <br></br>
          <br></br>
          <Tabela>
          </Tabela>
        </Grid>
        <Grid item xs={2}>
          <strong>Piso 02 - Real</strong>
          <br></br>
          <br></br>
          <Tabela02>
          </Tabela02>
        </Grid>
        <Grid item xs={2}>
          <strong>Piso 02 - Sistema</strong>
          <br></br>
          <br></br>
          <Tabela02>
          </Tabela02>
        </Grid>
        <Grid item xs={2}>
          <strong>Piso 03 - Real</strong>
          <br></br>
          <br></br>
          <Tabela03>
          </Tabela03>
        </Grid>
        <Grid item xs={2}>
          <strong>Piso 03 - Sistema</strong>
          <br></br>
          <br></br>
          <Tabela03>
          </Tabela03>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Link href="/"> Voltar para o início</Link>
      <Copyright />
    </Container>
  );
}
