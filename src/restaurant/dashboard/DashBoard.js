import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useParams } from 'react-router'
import NavBar from "../layout/NavBar";
import OrderService from "../service/OrderService";
import {setCurrentOrderList, setOrderList} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

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
    fixedHeight: {
        height: 240,
    },
    cover: {
        width: 140,
        height: 151
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flex: '1 0 auto',
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    let params = useParams();
    const restaurantId = params.rid;

    const currentOrderList = useSelector(state => state.currentOrderList);
    const orderList = useSelector(state => state.orderList);
    const dispatch = useDispatch();

    const date = new Date();
    const today = moment(date).format( 'YYYY-MM-DD')

    let todayTotalSale = 0;

    let itemList = new Map();
    const [popularDishes, setPopularDishes] = React.useState(new Map());

    const getPopularDish = () => {
        const orderProductList = orderList.map(order => order.products)
        for (let products of orderProductList) {
            for (let product of products) {
                if (!itemList.has(product.name)) {
                    itemList.set(product.name, product.amount);
                } else {
                    itemList.set(product.name, itemList.get(product.name)+product.amount)
                }
            }
        }
        const sortMap = new Map([...itemList.entries()].sort((a,b) => b[1] - a[1]))
        setPopularDishes(sortMap);
    }

    const getTodayTotalSale = () => {
        const todayOrderList = orderList.filter(order => order.date.slice(0, 10) === today );
        todayOrderList.map((order) => {
            todayTotalSale += order.totalPrice
        })
        return todayTotalSale
    }

    // useEffect(() => {
    //     if (orderList.length>0 || todayTotalSale > 0) {
    //         const interval = setInterval(() => {
    //             OrderService.getAllOrder(restaurantId)
    //                 .then(response => dispatch(setOrderList(response)))
    //             OrderService.getCurrentOrder(restaurantId)
    //                 .then(response => dispatch(setCurrentOrderList(response)))
    //             getPopularDish();
    //         }, 5000);
    //         return () => clearInterval(interval)}
    //     else {
    //         OrderService.getAllOrder(restaurantId)
    //             .then(response => dispatch(setOrderList(response)))
    //         OrderService.getCurrentOrder(restaurantId)
    //             .then(response => dispatch(setCurrentOrderList(response)))
    //         setCounter(-counter)
    //     }
    // }, [restaurantId, counter, popularDishes])


    // const [itemList, setItemList] = React.useState([])

    useEffect(() => {
        console.log('get all orders')
        OrderService.getAllOrder(restaurantId)
            .then(response => dispatch(setOrderList(response)))
        OrderService.getCurrentOrder(restaurantId)
            .then(response => dispatch(setCurrentOrderList(response)))
    }, [restaurantId])

    useEffect(() => {
        console.log('get popular dish')
        getPopularDish()
    }, [orderList,currentOrderList])


    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar
                restaurantId = {restaurantId}
                title = "Dashboard"/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />

                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.root} >
                                <CardMedia
                                    className={classes.cover}
                                    image="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography component="h5" variant="h5">
                                            Today's Sales
                                        </Typography>
                                        <br/>
                                        <Typography variant="h5" color="textSecondary">
                                            $ {getTodayTotalSale()}
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.root} >
                                <CardMedia
                                    className={classes.cover}
                                    image="https://images.unsplash.com/photo-1529003600303-bd51f39627fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography component="h5" variant="h5">
                                            Current Orders
                                        </Typography>
                                        <br/>
                                        <Typography variant="h5" color="textSecondary">
                                            {currentOrderList.length}
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <TableContainer component={Paper}>
                                <br/>
                                <Typography variant="h5" align="center">
                                    Popular Dishes
                                </Typography>
                                <br/>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Item Name
                                            </TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Array.from(popularDishes).map(([name, amount]) => (
                                            <TableRow key={name}>
                                                <TableCell component="th" scope="row">
                                                    {name}
                                                </TableCell>
                                                <TableCell align="right">{amount}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Grid>

                    </Grid>
                </Container>
            </main>
        </div>
    );
}
