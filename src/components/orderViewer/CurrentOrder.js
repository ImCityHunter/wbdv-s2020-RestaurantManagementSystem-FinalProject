import React from "react";
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

export default function CurrentOrder () {
    const classes = useStyles();
    let currentOrderList = [{
        orderId: 'oid',
        orderDate: 'od',
        customerId: 'cid',
        saleAmount: 'sa',
        products: [{
            productId: '123',
            item: 'Calamari',
            unit: 1
        },{
            productId: '234',
            item: 'Broccoli',
            unit: 2
        }],
        miscellaneous: 'dine-in',
        fulfilled: false}];

    return (
        <Grid container spacing={3}>
            {currentOrderList.map(order =>
                <Grid item xs={12} sm={4} md={3} lg={2} key={order.orderId}>
                    <Paper className={classes.paper}>
                        <Typography component="h4" variant="subtitle1" color="primary" alient="center">
                            <IconButton >
                                <DoneIcon />
                            </IconButton>
                            {order.orderId}
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
                                    <TableRow key={product.productId}>
                                        <TableCell>{product.item}</TableCell>
                                        <TableCell>{product.unit}</TableCell>
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