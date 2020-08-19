import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 150,
    },
  });

export default function Tabela() {
    const classes = useStyles();

    return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Tabela">
        <TableHead>
          <TableRow>
            <TableCell style={{backgroundColor: 'red', color: 'white'}} align="center" >1</TableCell>
            <TableCell style={{backgroundColor: 'green', color: 'white'}} align="center" >6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell style={{backgroundColor: 'green', color: 'white'}} align="center" component="th" scope="row">2</TableCell>
              <TableCell style={{backgroundColor: 'green', color: 'white'}} align="center">7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{backgroundColor: 'green', color: 'white'}} align="center">3</TableCell>
              <TableCell style={{backgroundColor: 'red', color: 'white'}} align="center">8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{backgroundColor: 'green', color: 'white'}} align="center">4</TableCell>
              <TableCell style={{backgroundColor: 'green', color: 'white'}} align="center">9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{backgroundColor: 'red', color: 'white'}} align="center">5</TableCell>
              <TableCell style={{backgroundColor: 'green', color: 'white'}} align="center">10</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}