import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 150,
  },
});

function Tabela(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Tabela">
        <TableBody>
          {props.vagas.map((vaga, index) => {
            if (vaga.busy) { 
              return <TableRow key={vaga.space}>
                <TableCell style={{backgroundColor:'red', color: 'white',}} key={vaga.space}>
                  {vaga.space} / {vaga.carId}
                </TableCell>
              </TableRow>
            }
            else {
              return <TableRow key={vaga.space}>
                <TableCell style={{backgroundColor:'green', color: 'white',}}>
                  {vaga.space} / {vaga.carId}
                </TableCell>
              </TableRow>
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Tabela;