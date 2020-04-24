import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import NavBar from "../layout/NavBar";
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ClearIcon from "@material-ui/icons/Clear";
import { useParams } from 'react-router'
import RestaurantService from "../../service/RestaurantService";



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
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
    table: {
        minWidth: 650,
    },
    button: {
        margin: theme.spacing(1),
    }
}));

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function InfoEditor() {
    const classes = useStyles();

    let params = useParams();
    const restaurantId = params.rid;

    const [restaurantInfo, setRestaurantInfo] = React.useState({
        id: restaurantId,
        restaurantName: '',
        phoneNumber: '',
        email: '',
        address: '',
        description: '',
        businessHours: ''
    })
    const handleRestaurantInfoChange = (event) =>
        setRestaurantInfo({
            ...restaurantInfo, [event.target.name]: event.target.value
        })

    useEffect(() => {
        RestaurantService.getRestaurantInfo(restaurantId)
            .then(response =>
                setRestaurantInfo(response))
    },[restaurantId])

    const updateRestaurantInfo = (restaurantInfo) =>
        RestaurantService.updateRestaurantInfo(restaurantInfo)
            .then(() => RestaurantService.getRestaurantInfo(restaurantInfo.id))
            .then(response => {
                setRestaurantInfo(response)
            })


    const clearRestaurantInfo = () =>
        setRestaurantInfo({
            id: '',
            restaurantName: '',
            phoneNumber: '',
            email: '',
            address: '',
            description: '',
            businessHours: ''
        })



    const [openTime, setOpenTime] = React.useState({
        Mon: '08:30',
        Tue: '08:30',
        Wed: '08:30',
        Thu: '08:30',
        Fri: '08:30',
        Sat: '08:30',
        Sun: '08:30'
    });
    const handleOpenTimeChange = (event) => {
        setOpenTime(event.target.value);
    };

    const [closeTime, setcloseTime] = React.useState({
        Mon: '21:30',
        Tue: '21:30',
        Wed: '21:30',
        Thu: '21:30',
        Fri: '21:30',
        Sat: '21:30',
        Sun: '21:30'
    });
    const handleCloseTimeChange = (event) => {
        setcloseTime(event.target.value);
    };

    const[businessClosed, setBusinessClosed] = React.useState({
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
        Sun: false
    });
    const handleBusinessClosedChange = (event) => {
        setBusinessClosed({
            ...businessClosed, [event.target.name]: event.target.checked
        })
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar
                restaurantId = {restaurantId}
                title = "Restaurant Information Editor"/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    size="large"
                                    startIcon={<SaveIcon />}
                                    onClick={()=>updateRestaurantInfo(restaurantInfo)}
                                >
                                    Save
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    size="large"
                                    startIcon={<ClearIcon />}
                                    onClick={clearRestaurantInfo}
                                >
                                    Clear
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="restaurantName"
                                name="restaurantName"
                                label="Restaurant name"
                                value={restaurantInfo.restaurantName}
                                onChange={handleRestaurantInfoChange}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Contact Number"
                                value={restaurantInfo.phoneNumber}
                                onChange={handleRestaurantInfoChange}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email Address"
                                value={restaurantInfo.email}
                                onChange={handleRestaurantInfoChange}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Address line"
                                value={restaurantInfo.address}
                                onChange={handleRestaurantInfoChange}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="description"
                                name="description"
                                label="About the Company"
                                value={restaurantInfo.description}
                                onChange={handleRestaurantInfoChange}
                                variant="outlined"
                                multiline
                                rows={4}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TableContainer component={Paper}>
                                <Typography variant="h6" align="center">
                                    Business Hours
                                </Typography>
                                <Table aria-label="simple table">
                                    <TableBody>
                                        {days.map(day => {
                                            return (
                                                <TableRow key={day}>
                                                    <TableCell align="center">{day}</TableCell>
                                                    <TableCell align="center">
                                                        <TextField
                                                            id="time"
                                                            label="Open Time"
                                                            type="time"
                                                            value={openTime[day]}
                                                            onChange={handleOpenTimeChange}
                                                            disabled={businessClosed[day]}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            inputProps={{
                                                                step: 300, // 5 min
                                                            }}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center">To</TableCell>
                                                    <TableCell align="center">
                                                        <TextField
                                                            id="time"
                                                            label="Close Time"
                                                            type="time"
                                                            value={closeTime[day]}
                                                            onChange={handleCloseTimeChange}
                                                            disabled={businessClosed[day]}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            inputProps={{
                                                                step: 300, // 5 min
                                                            }}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    color="primary"
                                                                    name={day}
                                                                    checked={businessClosed[day]}
                                                                    onChange={handleBusinessClosedChange}
                                                                />}
                                                            label="Closed"
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
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