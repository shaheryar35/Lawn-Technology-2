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
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('3801 meadowknolls rd marion iowa', 159, 6.0, 24, 4.0),
  createData('3801 meadowknolls rd marion iowa', 237, 9.0, 37, 4.3),
  createData('3801 meadowknolls rd marion iowa', 262, 16.0, 24, 6.0),
  createData('3801 meadowknolls rd marion iowa', 305, 3.7, 67, 4.3),
  createData('3801 meadowknolls rd marion iowa', 356, 16.0, 49, 3.9),
];

export default function RecentActivityTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{backgroundColor: 'orange'}}>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Address</TableCell>
            <TableCell >Square Feet</TableCell>
            <TableCell >Price</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell ><img src="https://via.placeholder.com/50" alt=""/></TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              <TableCell >${row.fat}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}