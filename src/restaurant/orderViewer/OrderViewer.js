import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";

import NavBar from "../layout/NavBar";
import CurrentOrder from "./CurrentOrder";
import PastOrder from "./PastOrder";
import {useParams} from 'react-router'
import OrderService from "../service/OrderService";
import {useSelector, useDispatch} from "react-redux";
import { setCurrentOrderList, setPastOrderList } from "../../actions";


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
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));


export default function OrderViewer() {
    const classes = useStyles();

    let params = useParams();
    const restaurantId = params.rid;

    const currentOrderList = useSelector(state => state.currentOrderList)
    const pastOrderList = useSelector(state => state.pastOrderList)

    const dispatch = useDispatch();

    // const [counter, setCounter] = React.useState(1)
    //
    // useEffect(() => {
    //     if (currentOrderList.length>0 && pastOrderList.length>0) {
    //         const interval = setInterval(() => {
    //             OrderService.getPastOrder(restaurantId)
    //                 .then(response => dispatch(setPastOrderList(response)))
    //             OrderService.getCurrentOrder(restaurantId)
    //                 .then(response => dispatch(setCurrentOrderList(response)))
    //     }, 5000);
    //         return () => clearInterval(interval)}
    //     else {
    //         OrderService.getPastOrder(restaurantId)
    //             .then(response => dispatch(setPastOrderList(response)))
    //         OrderService.getCurrentOrder(restaurantId)
    //             .then(response => dispatch(setCurrentOrderList(response)))
    //         setCounter(-counter)
    //     }
    // }, [restaurantId, counter])

    useEffect(() => {
        OrderService.getPastOrder(restaurantId)
            .then(response => dispatch(setPastOrderList(response)))
        OrderService.getCurrentOrder(restaurantId)
            .then(response => dispatch(setCurrentOrderList(response)))
    }, [restaurantId])

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <NavBar
                restaurantId={restaurantId}
                title="Order Viewer"/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Container component={Paper} className={classes.container}>
                        <br/>
                        <Typography variant="h5" align="center">
                            Current Order
                        </Typography>
                        <br/>
                        <CurrentOrder />
                    </Container>
                    <div className={classes.appBarSpacer}/>
                    <Container component={Paper} className={classes.container}>
                        <Typography variant="h5" align="center">
                            Completed Order
                        </Typography>
                        <br/>
                        <PastOrder />
                    </Container>
                </Container>
            </main>
        </div>
    );
}
