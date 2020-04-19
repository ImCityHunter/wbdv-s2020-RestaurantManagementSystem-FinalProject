import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LeftPanelWhenSM from "../home/left.panel.sm";
import Paper from "@material-ui/core/Paper";
import PopularList from "../home/list.popular";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import OrderList from "./list.order";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CartList from "./list.cart";
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {Alert} from "@material-ui/lab";

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
    middleContent: {
        width: "100%"
    },
    cardRoot: {
        display: 'flex',
        height: '250px',
        marginBottom: theme.spacing(3)
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        justifyContent: 'center',
        flex: '1 0 auto',
        paddingBottom: theme.spacing(0)
    },
    cover: {
        width: 300,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    cardButton: {
        height: 32,
        width: 32,
    },
    categoryMenu: {
        marginBottom: theme.spacing(2)
    },
    pleaseLogin: {
        width: '100%%',
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nothingContentWrapper: {
        width: '50%',
    },
    nothingButtonMenu: {
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-around'
    }
}))

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function Profile(props) {
    const classes = useStyles()
    const theme = useTheme()
    const user = useSelector(state => state.user)
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container className={classes.cardGrid}>
            {!user &&
            <div className={classes.pleaseLogin}>
                <Paper className={classes.nothingContentWrapper}>
                    <Alert severity="error">please login!</Alert>
                    <div className={classes.nothingButtonMenu}>
                        <Link to="/login">
                            <Button variant="contained" color="primary" href="#contained-buttons">
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button variant="contained" color="primary" href="#contained-buttons">
                                Register
                            </Button>
                        </Link>
                    </div>
                </Paper>
            </div>
            }
            {user &&
            <Grid container spacing={2}>
                <Grid item sm={12} md={9} className={classes.middleContent}>
                    <Card className={classes.cardRoot}>
                        <CardMedia
                            className={classes.cover}
                            image="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2345&q=80"
                            title="Live from space album cover"/>
                        <div className={classes.details}>
                            <CardContent className={classes.cardContent}>
                                <Typography component="h5" variant="h3">
                                    {user.nickname}
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    {user.username}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    The foods you eat have big effects on your health and quality of life.
                                </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <IconButton>
                                    <EditIcon className={classes.cardButton}/>
                                </IconButton>
                                <IconButton>
                                    <ExitToAppIcon className={classes.cardButton}/>
                                </IconButton>
                            </div>
                        </div>
                    </Card>
                    <div className={classes.categoryMenu}>
                        <LeftPanelWhenSM/>
                    </div>
                    <Paper className={classes.paper} square={true}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example">
                                <Tab label="Orders" {...a11yProps(0)} />
                                <Tab label="Shopping Cart" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <OrderList value={value} index={0} dir={theme.direction}>
                            OrderList
                        </OrderList>
                        <CartList value={value} index={1} dir={theme.direction}>
                            Item Two
                        </CartList>
                    </Paper>
                </Grid>
                <Grid item md={3} className={classes.rightPanel}>
                    <Paper className={classes.fixedPanel}>
                        <PopularList/>
                    </Paper>
                </Grid>
            </Grid>
            }

        </Container>
    )
}
