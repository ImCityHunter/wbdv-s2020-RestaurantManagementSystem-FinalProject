import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import OrderService from "../../service/OrderService";
import {setCurrentOrderList, setPastOrderList} from "../../actions/orderActions";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function PastOrder() {
    const classes = useStyles();

    const pastOrderList = useSelector(state => state.pastOrderList)

    console.log(pastOrderList)

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order Number</TableCell>
                        <TableCell align="center">Date</TableCell>
                        {/*<TableCell align="center">Customer Id</TableCell>*/}
                        <TableCell align="center">Sale Amount</TableCell>
                        <TableCell align="center">Miscellaneous</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pastOrderList && pastOrderList.map((pastOrder) => (
                        <TableRow key={pastOrder.id}>
                            <TableCell component="th" scope="row">
                                {pastOrder.id}
                            </TableCell>
                            <TableCell align="center">{pastOrder.date.slice(0,10)}</TableCell>
                            {/*<TableCell align="center">{pastOrder.customerId}</TableCell>*/}
                            <TableCell align="center">{pastOrder.totalPrice}</TableCell>
                            <TableCell align="center">{pastOrder.type}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}