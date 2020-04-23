import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from "@material-ui/core/TableBody";
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        height: 400
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

export default function CurrentOrder ({currentOrderList, completeOrder}) {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            {currentOrderList && currentOrderList.map(order =>
                <Grid item xs={12} sm={4} md={3} lg={2} key={order.id}>
                    <Paper className={classes.paper}>
                        <Typography component="h4" variant="subtitle1" color="primary" alient="center">
                            <IconButton onClick={() => completeOrder(order)} >
                                <DoneIcon />
                            </IconButton>
                            {order.id}
                        </Typography>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Unit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {order.products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            )}
        </Grid>
    )
}