import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import NavBar from "../layout/NavBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import MenuItemsList from "./MenuItemsList";
import { useParams } from 'react-router'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}


const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        backgroundColor: "#2979ff",
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
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
}));

export default function MenuEditor() {
    const classes = useStyles();

    let params = useParams();
    const restaurantId = params.rid;

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar
                restaurantId = {restaurantId}
                title = "Menu Editor"/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example">
                        <Tab label="Appetizers" {...a11yProps(0)} />
                        <Tab label="Main Courses" {...a11yProps(1)} />
                        <Tab label="Sides" {...a11yProps(2)} />
                        <Tab label="Deserts" {...a11yProps(3)} />
                        <Tab label="Drinks" {...a11yProps(4)} />
                        {/*{ menuCat.map(cat =>*/}
                        {/*    <Tab key={index} label={cat} {...a11yProps(index++)} />*/}
                        {/*)}*/}
                        {/*<Tab label="Add" onClick={() => addItem()} {...a11yProps(menuCat.length)} />*/}
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0}>
                    <MenuItemsList
                        restaurantId = {restaurantId}
                        category="Appetizers"/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <MenuItemsList
                        restaurantId = {restaurantId}
                        category="Main Courses"/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <MenuItemsList
                        restaurantId = {restaurantId}
                        category="Sides"/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <MenuItemsList
                        restaurantId = {restaurantId}
                        category="Deserts"/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <MenuItemsList
                        restaurantId = {restaurantId}
                        category="Drinks"/>
                </TabPanel>
            </main>
        </div>
    );
}