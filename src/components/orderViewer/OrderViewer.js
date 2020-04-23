import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';

import NavBar from "../layout/NavBar";
import CurrentOrder from "./CurrentOrder";
import PastOrder from "./PastOrder";
import {useParams} from 'react-router'
import OrderService from "../../service/OrderService";
import {useSelector, useDispatch} from "react-redux";
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

    const currentOrderList = useSelector(state => state.currentOrderList)
    const pastOrderList = useSelector(state => state.pastOrderList)
    const orderList = useSelector(state => state.orderList)

    const dispatch = useDispatch();

    useEffect(() => {

        OrderService.getPastOrder(restaurantId)
            .then(response => dispatch(setPastOrderList(response)))
        OrderService.getCurrentOrder(restaurantId)
            .then(response => dispatch(setCurrentOrderList(response)))
    }, [restaurantId])

    console.log(currentOrderList)
    console.log(pastOrderList)

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <NavBar
                restaurantId={restaurantId}
                title="Order Viewer"/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <CurrentOrder />
                    <div className={classes.appBarSpacer}/>
                    <PastOrder />
                </Container>
            </main>
        </div>
    );
}
