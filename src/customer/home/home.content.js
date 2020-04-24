import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ShoppingCart from "./right.panel";
import ListFood from "./list.food";
import LeftPanelWhenSM from "./left.panel.sm";
import Banner from "./banner";
import clsx from "clsx";
import PopularList from "./list.popular";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Checkout from "../checkout/checkout.";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    cardGrid: {},
    leftPanel: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            height: '100%',
        },
    },
    fixedPanel: {
        position: 'fixed',
        width: '240px'
    },
    secondFixedPanel: {
        position: 'fixed',
        marginTop: "370px",
        width: '240px'
    },
    rightPanel: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    dialogCheckout: {
        minWidth: '500px !important'
    }
}))
const mainFeaturedPost = {
    title: 'Eat Healthy!',
    description:
        "It's easier than you think to start eating healthy! Take small steps each week to improve your nutrition and move toward a healthier you.",
    image: 'https://source.unsplash.com/1600x900/?food',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

export default function MainContent(props) {
    const classes = useStyles()
    const [checkoutDialogOpen, setCheckoutDialogOpen] = React.useState(false)
    const [checkoutDialogScroll, setCheckoutDialogScroll] = React.useState('paper');
    const handleCheckoutDialogOpen = () => {
        setCheckoutDialogOpen(true);
        setCheckoutDialogScroll("paper");
    };

    const handleCheckoutDialogClose = () => {
        setCheckoutDialogOpen(false);
    };
    return (
        <Container className={classes.cardGrid}>
            {/*wjc split the grid to left middle and right*/}
            <Grid container spacing={2}>
                <Grid item sm={12} md={9}>
                    <Banner post={mainFeaturedPost}/>
                    <LeftPanelWhenSM/>
                    <Paper className={classes.paper}>
                        <ListFood/>
                    </Paper>
                </Grid>
                <Grid item md={3} className={classes.rightPanel}>
                    <Paper className={classes.fixedPanel}>
                        <PopularList/>
                    </Paper>
                    <Paper className={clsx(classes.secondFixedPanel)}>
                        <ShoppingCart showTitle={true} showBottomMenu={true} checkoutFunc={handleCheckoutDialogOpen}/>
                    </Paper>
                </Grid>
            </Grid>
            <Dialog fullWidth={true}
                    open={checkoutDialogOpen}
                    onClose={handleCheckoutDialogClose}>
                <DialogContent dividers={checkoutDialogScroll === 'paper'}>
                    <div className={classes.dialogCheckout}>
                        <Checkout/>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog fullWidth={true}
                    maxWidth={false}
                    open={checkoutDialogOpen}
                    onClose={handleCheckoutDialogClose}
                    scroll={checkoutDialogScroll}>
                <DialogTitle id="scroll-dialog-title">Checkout</DialogTitle>
                <DialogContent dividers={checkoutDialogScroll === 'paper'}>
                    <Checkout/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCheckoutDialogClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}
