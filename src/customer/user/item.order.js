import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {photoUrls} from "../../constants";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'felx',
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        backgroundColor: '#eeeeee',
        padding: theme.spacing(1)
    },
    orderHeaderDate: {
        display: 'flex',
        justifyContent: 'flex-start',
        paddingLeft: theme.spacing(1)
    },
    orderHeaderText: {
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    orderDetailBut: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    content: {
        padding: theme.spacing(1),
        display: 'flex',
    },
    contentTitle: {
        fontWeight: 'bold',
        paddingLeft: theme.spacing(2)
    },
    contentSecondary: {
        paddingLeft: theme.spacing(2)
    },
    contentButMenu: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
    },
    contentDetail: {
        width: '100%'
    },
    contentBut: {
        margin: theme.spacing(2, 1),
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1, 0),
        },
    },
    contentPreview: {
        display: 'flex',
        flexDirection: 'row',
    },
    contentDetailPic: {
        marginLeft: theme.spacing(2),
        padding: theme.spacing(2),
        minHeight: '120px'
    },
    contentPreviewText: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',

    }
}))

export default function OrderItem(props) {
    const classes = useStyles()
    const getRandomUrl = () => {
        return photoUrls[Math.floor(Math.random() * photoUrls.length)].small
    }
    return (
        <Card className={classes.root}>
            <div className={classes.header}>
                <Grid container>
                    <Grid item sm={6} md={3} className={classes.orderHeaderDate}>
                        <Typography variant="h6">
                            Date
                        </Typography>
                    </Grid>
                    <Grid item sx={0} md={3} className={classes.orderHeaderText}>
                        <Typography variant="body1">
                            Quantity:
                        </Typography>
                    </Grid>
                    <Grid item sx={0} md={3} className={classes.orderHeaderText}>
                        <Typography variant="body1">
                            Order No.
                        </Typography>
                    </Grid>
                    <Grid item sm={6} md={3} className={classes.orderDetailBut}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                            Detail
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.content}>
                <Grid container>
                    <Grid item sm={12} md={9} className={classes.contentDetail}>
                        <Typography className={classes.contentTitle}>
                            Delivered on Wednesday
                        </Typography>
                        <Typography className={classes.contentSecondary}>
                            Hope you enjoy our food, please review our service, thanks!
                        </Typography>
                        <div className={classes.contentPreview}>
                            <Grid container>
                                <Grid item xs={3} className={classes.contentDetailPic}>
                                    <img width="120px" height="120px" src={getRandomUrl()}
                                         alt=""/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" className={classes.contentPreviewText}>
                                        Enjoy your food!
                                    </Typography>
                                    <Typography variant="caption" className={classes.contentPreviewText}>
                                        Sold by NEU food hunting
                                    </Typography>
                                    <Typography variant="body1" className={classes.contentPreviewText}>
                                        Total: 100$
                                    </Typography>
                                </Grid>
                            </Grid>

                        </div>
                    </Grid>
                    <Grid item md={3} className={classes.contentButMenu}>
                        <Button variant="contained" className={classes.contentBut}>Detail</Button>
                        <Button variant="contained" className={classes.contentBut}>Buy Again</Button>
                        <Button variant="contained" className={classes.contentBut} color={"secondary"}>Delete</Button>
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
}
