import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Tabela from "../src/Tabela";
import axios from "axios"

class Mapa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vagas: {},
      carregando: true,
      placaCarro: '',
      numeroVaga: ''
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8080/vagas").then(spaces => {
      this.setState({ vagas: spaces.data, carregando: false })
    })
  }

  handleChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value })
  }

  submit = async () => {
      const res = await axios.post('http://localhost:8080/vagas',{car: this.state.placaCarro, space: this.state.numeroVaga});
      alert('CANCELA LIBERADA');
      window.location.reload(false);
  }
  freeSpaces = async () => {
    const res = await axios.put('http://localhost:8080/vagas');
    alert('ESTACIONAMENTO LIBERADO');
    window.location.reload(false);
  }
  freeRealSpaces = async () => {
    const res = await axios.put('http://localhost:8080/vagas/real');
    alert('ESTACIONAMENTO LIBERADO');
    window.location.reload(false);
  }
  render() {
    return (
      <div>{
        this.state.carregando ? <div>Carregando...</div> : (
          <div>
            <Container xs="12" align="center">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box my={4} align="center">
                    <FormControl>
                      <form noValidate autoComplete="off">
                        <Grid item xs={'auto'}>
                          <TextField name="placaCarro" onChange={ this.handleChange.bind(this) } value={this.state.placaCarro} text-align="center" id="standard-basic" label="Placa do carro" />
                        </Grid>
                        <Grid item xs={'auto'}>
                          <TextField name="numeroVaga" onChange={ this.handleChange.bind(this) } value={this.state.numeroVaga} l={20} text-align="center" id="standard-basic" label="Vaga" />
                        </Grid>
                        <br></br>
                        <br></br>
                        <Button onClick={this.submit} color="secundary" variant="contained" color="primary">
                          <Typography color="secondary">
                            Entrar
                      </Typography>
                        </Button>
                      </form>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <strong>Estacionamento - Sistema</strong>
                  <br></br>
                  <br></br>
                  <Button onClick={this.freeSpaces} type="submit" variant="contained" color="primary">
                    <Typography color="secondary">
                      Esvaziar
                      </Typography>
                  </Button>
                  <br></br>
                  <br></br>
                  <Tabela isReal={false} vagas={this.state.vagas.spaces}>
                  </Tabela>
                </Grid>
                <Grid item xs={6}>
                  <strong>Estacionamento - Real</strong>
                  <br></br>
                  <br></br>
                  <Button onClick={this.freeRealSpaces} type="submit" variant="contained" color="primary">
                    <Typography color="secondary">
                      Esvaziar
                      </Typography>
                  </Button>
                  <br></br>
                  <br></br>
                  <Tabela isReal={true} vagas={this.state.vagas.realSpaces}>
                  </Tabela>
                </Grid>
              </Grid>
              <br></br>
              <br></br>
              <Link href="/"> Voltar para o início</Link>
              <Copyright />
            </Container>
          </div>
        )
      }</div>
    );
  }
}

export default Mapa;
