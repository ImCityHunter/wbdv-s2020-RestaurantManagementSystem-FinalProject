import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
        height: 280
    },
}))

export default function CurrentOrder () {
    const classes = useStyles();
    let orderList = ['Order One', 'Order Two', 'Order Three', 'Order Four', 'Order Five', 'Order Six'];

    return (
        <Grid container spacing={3}>
            {orderList.map(order =>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <Paper className={classes.paper}>{order}</Paper>
                </Grid>
            )}
        </Grid>
    )
}