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

function createData(orderNumber, date, customerId, saleAmount, miscellaneous) {
    return { orderNumber, date, customerId, saleAmount, miscellaneous };
}

const rows = [
    createData('20200101001', '01/01/2020', '001', 86.5, 'Dine-In'),
    createData('20200101002', '01/01/2020', '002', 43, 'Pick-Up'),
    createData('20200101003', '01/01/2020', '003', 24, 'Dine-In'),
    createData('20200102001', '01/02/2020', '004', 67, 'Pick-Up'),
    createData('20200102002', '01/02/2020', '005', 49, 'Dine-In'),
];

export default function PastOrder() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order Number</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Customer Id</TableCell>
                        <TableCell align="center">Sale Amount</TableCell>
                        <TableCell align="center">Miscellaneous</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.orderNumber}>
                            <TableCell component="th" scope="row">
                                {row.orderNumber}
                            </TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.customerId}</TableCell>
                            <TableCell align="center">{row.saleAmount}</TableCell>
                            <TableCell align="center">{row.miscellaneous}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}