import React, {useEffect, useState} from 'react';
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
import OrderService from "../../service/OrderService";

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

    const [curOrderNum, setCurOrderNum] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            OrderService.getCurrentOrder(restaurantId)
                .then(response => setCurOrderNum(response.length))
        }, 5000);
        return () => clearInterval(interval);
    },[restaurantId])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar
                restaurantId = {restaurantId}
                title = "DashBoard"/>
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
                                        <Typography variant="subtitle1" color="textSecondary">
                                            $
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
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {curOrderNum}
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>

                            </Paper>
                        </Grid>

                    </Grid>
                </Container>
            </main>
        </div>
    );
}