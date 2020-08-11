import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Mapa() {
  return (
    <Container maxWidth="sm">
      <Box my={4} align="center">
        <Typography variant="h4" component="h2" gutterBottom>
          Aqui será a entrada para um veículo
        </Typography>
        <Link href="/"> Voltar para o início</Link>
        <Copyright />
      </Box>
    </Container>
  );
}
