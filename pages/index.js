import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import Button from '@material-ui/core/Button';

export default function Index() {
  return (
    <Container xs="12" align="center">
      <Box my={4}>
        <Button color="primary" variant="contained" component={Link} naked href="/mapa">
          <Typography color="secondary">
            Mapa do Estacionamento
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}
