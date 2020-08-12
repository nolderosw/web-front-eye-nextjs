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
        <Grid item xs={6}>
          <Box my={4} align="center">
            <Typography variant="h4" component="h2" gutterBottom>
              Tabela com mapa REAL ficará aqui
        </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box my={4} align="center">
            <Typography variant="h4" component="h2" gutterBottom>
              Tabela com mapa PARA O SISTEMA ficará aqui
        </Typography>
          </Box>
        </Grid>
      </Grid>
      <Link href="/"> Voltar para o início</Link>
      <Copyright />
    </Container>
  );
}
