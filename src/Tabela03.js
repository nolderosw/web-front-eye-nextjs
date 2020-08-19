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
            <TableCell align="center" color="green">21</TableCell>
            <TableCell align="center">26</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="center" component="th" scope="row">22</TableCell>
              <TableCell align="center">27</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">23</TableCell>
              <TableCell align="center">28</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">24</TableCell>
              <TableCell align="center">29</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">25</TableCell>
              <TableCell align="center">30</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}