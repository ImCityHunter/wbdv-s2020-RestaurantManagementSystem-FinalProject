import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Table from '@material-ui/core/Table';
import TableBody from "@material-ui/core/TableBody";
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DoneIcon from '@material-ui/icons/Done';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from "@material-ui/core/IconButton";
import OrderService from "../service/OrderService";
import {
    removeCompletedOrder,
    setOrderCompleted,
} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

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
        height: 240
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

export default function CurrentOrder () {
    const classes = useStyles();

    let params = useParams();
    const restaurantId = params.rid;

    const currentOrderList = useSelector(state => state.currentOrderList)
    const dispatch = useDispatch();

    const completeOrder = (orderCompleted) => {
        OrderService.updateOrderStatus(restaurantId, orderCompleted.id)
            .then(state => dispatch(removeCompletedOrder(orderCompleted)))
            .then(state => dispatch(setOrderCompleted(orderCompleted)))
    }

    return (
        <Grid container spacing={3}>
            {currentOrderList && currentOrderList.map(order =>
                <Grid item xs={12} sm={6} md={4} lg={3} key={order.id}>
                    <Paper className={classes.paper}>
                        <Box display="flex">
                            <Tooltip title="Click to complete the order">
                                <IconButton onClick={() => completeOrder(order)} >
                                    <DoneIcon />
                                </IconButton>
                            </Tooltip>

                            <Typography component="h4" variant="subtitle1" color="primary" alient="center">
                                <div>
                                    Placed: {order.date.slice(11,19)}
                                </div>
                            </Typography>
                        </Box>

                        <Table size="small" stickyHeader>
                            <TableHead >
                                <TableRow>
                                    <TableCell align="left">Item</TableCell>
                                    <TableCell align="right">Unit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {order.products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell align="left">{product.name}</TableCell>
                                        <TableCell align="right">{product.amount}</TableCell>
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
