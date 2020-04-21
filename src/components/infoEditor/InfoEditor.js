import React from 'react';
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
}));

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function InfoEditor() {
    const classes = useStyles();

    const [restaurantInfo, setRestaurantInfo] = React.useState({
        restaurantName: '',
        contactNumber: '',
        address: '',
        about: '',
        businessHour: {
            Mon: '',
            Tue: '',
            Wed: '',
            Thu: '',
            Fri: '',
            Sat: '',
            Sun: ''
        }
    })

    const [contactNumber, setContactNumber] = React.useState('');
    const handleContactNumberChange = (event) => {
        setContactNumber(event.target.value);
    };

    const [selectedTime, setSelectedTime] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleTimeChange = (time) => {
        setSelectedTime(time);
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
        console.log(businessClosed)
    };


    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar
                title = "Restaurant Information Editor"/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="companyName"
                                name="companyName"
                                label="Company name"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="contactNumber"
                                name="contactNumber"
                                label="Contact Number"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="emailAddress"
                                name="emailAddress"
                                label="Email Address"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Address line 2"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="state" name="state" label="State/Province/Region" fullWidth variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="about"
                                name="about"
                                label="About the Company"
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
                                            console.log(businessClosed.day)
                                            return (
                                                <TableRow>
                                                    <TableCell align="center">{day}</TableCell>
                                                    <TableCell align="center">
                                                        <TextField
                                                            id="time"
                                                            label="Alarm clock"
                                                            type="time"
                                                            defaultValue="07:30"
                                                            disabled={businessClosed.day}
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
                                                            label="Alarm clock"
                                                            type="time"
                                                            defaultValue="21:30"
                                                            disabled={businessClosed.day}
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
                                                                    checked={businessClosed.day}
                                                                    onChange={handleBusinessClosedChange}
                                                                />}
                                                            label="Closed"
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }

                                        )}
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