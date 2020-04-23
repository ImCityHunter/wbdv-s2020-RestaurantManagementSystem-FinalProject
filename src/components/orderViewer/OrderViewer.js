import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';

import NavBar from "../layout/NavBar";
import CurrentOrder from "./CurrentOrder";
import PastOrder from "./PastOrder";
import { useParams } from 'react-router'
import OrderService from "../../service/OrderService";
import { useSelector, useDispatch } from "react-redux";
import {setOrderCompleted, setCurrentOrderList, setPastOrderList, setOrderList} from "../../actions/orderActions";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));


export default function OrderViewer() {
    const classes = useStyles();

    let params = useParams();
    const restaurantId = params.rid;

    const orderList = useSelector(state => state.orderList);
    // const currentOrderList = useSelector(state => state.orderList);
    // const pastOrderList = useSelector(state => state.orderList);
    const dispatch = useDispatch();

    const [currentOrderList, setCurrentOrderList] = useState([]);

    const [pastOrderList, setPastOrderList] = useState([]);

    const completeOrder = (orderCompleted) => {
        // OrderService.updateOrderStatus(restaurantId, orderCompleted.id)
        //     .then(() => pastOrderList.push(orderCompleted))
        //     .then(() => {
        //     setCurrentOrderList(currentOrderList.filter(order => order.id !== orderCompleted.id));
        // })
        OrderService.updateOrderStatus(restaurantId, orderCompleted.id)
            .then(state => dispatch(setOrderCompleted(orderCompleted)))
    }

    useEffect(() => {
        // OrderService.getCurrentOrder()
        // OrderService.getPastOrder(restaurantId)
        //     .then(response => {
        //         console.log(response)
        //         setPastOrderList(response)
        //     })
        OrderService.getAllOrder(restaurantId)
            .then(orders => {
                // setCurrentOrderList(response.filter(order => order.completed === "incomplete"))
                // setPastOrderList(response.filter(order => order.completed === "completed"))
                dispatch(setOrderList(orders))
                // dispatch(setCurrentOrderList(orders));
                // dispatch(setPastOrderList(orders))
            })
    },[restaurantId])

    // console.log(currentOrderList)
    // console.log(pastOrderList)

    console.log(orderList)


    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar
                restaurantId = {restaurantId}
                title = "Order Viewer"/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                <CurrentOrder
                    currentOrderList={currentOrderList}
                    completeOrder={completeOrder}/>
                <div className={classes.appBarSpacer} />
                <PastOrder
                    pastOrderList={pastOrderList}
                    completeOrder={completeOrder}/>
                </Container>
            </main>
        </div>
    );
}