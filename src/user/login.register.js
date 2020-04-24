import React, {useCallback, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import logo from '../images/logo.png'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import clsx from "clsx";
import {Alert} from "@material-ui/lab";
import {login, register} from "../service/user.service";
import {useDispatch} from "react-redux";
import {setLogin, setLoginUser} from "../actions";
import {useHistory} from "react-router-dom";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/customer">
                Customer Home Page
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=2131&q=80)', //'url(https://source.unsplash.com/800x1200/?food)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    hidden: {
        display: 'none'
    },
    roleWrapper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1)
    }
}));

export default function LoginRegister(props) {
    const isLogin = (props.location.state && props.location.state.isLogin) || false
    const classes = useStyles();
    const [username, setUsername] = useState("jack")
    const [password, setPassword] = useState("123")
    const [verify, setVerify] = useState("")
    const [role, setRole] = useState("customer")
    const [nickName, setNickName] = useState("")
    const [displayError, setDisplayError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const dispatch = useDispatch()
    const history = useHistory();
    const clearInput = () => {
        setUsername("")
        setPassword("")
        setNickName("")
        setVerify("")
    }
    const onSubmit = useCallback((username, password, verify, nickname, role) => {
        if (username === "" || password === "") {
            setErrorMsg("Password and Username are required!")
            setDisplayError(true);
        } else if (!isLogin) {
            if (nickname === "") {
                setErrorMsg("Nickname is required!")
                setDisplayError(true);
            } else if (password !== verify) {
                setErrorMsg("Passwords must be the same!")
                setDisplayError(true);
            } else {
                register({
                    username: username,
                    password: password,
                    name: nickname,
                }, role).then(actualUser => {
                    if (undefined === actualUser) {
                        setErrorMsg("Error occurred when registering!")
                    } else {
                        clearInput()
                        setDisplayError(false);
                        dispatch(setLoginUser(actualUser))
                        dispatch(setLogin(true))
                        history.push("/customer")
                    }
                })
            }
        } else {
            login(username, password, role)
                .then(actualUser => {
                    if (undefined === actualUser) {
                        setErrorMsg("Username or password is not correct!")
                        setDisplayError(true);
                    } else {
                        clearInput()
                        setDisplayError(false)
                        dispatch(setLoginUser(actualUser))
                        dispatch(setLogin(true))
                        history.push("/customer")
                    }
                })
        }
    }, [dispatch, displayError, errorMsg, history])
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} src={logo} color="primary">
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {isLogin ? "Sign in" : "Register"}
                    </Typography>
                    <Alert className={clsx({[classes.hidden]: !displayError})} severity="error">{errorMsg}</Alert>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="email"
                            autoFocus/>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"/>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Verify Password"
                            type="password"
                            value={verify}
                            onChange={(e) => setVerify(e.target.value)}
                            id="verify-password"
                            className={clsx({[classes.hidden]: isLogin})}/>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="nickname"
                            label="NickName"
                            type="text"
                            value={nickName}
                            onChange={(e) => setNickName(e.target.value)}
                            id="nickname"
                            className={clsx({[classes.hidden]: isLogin})}/>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="simple-role">Role</InputLabel>
                            <Select
                                native
                                variant="outlined"
                                required
                                fullWidth
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                id="role"
                                label="role"
                                inputProps={{
                                    name: 'role',
                                    id: 'simple-role',
                                }}>
                                <option value="customer">Customer</option>
                                <option value="restaurant">Restaurant</option>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            className={clsx({[classes.hidden]: !isLogin})}
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"/>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={() => onSubmit(username, password, verify, nickName, role)}
                            className={classes.submit}>
                            {isLogin ? "Sign In" : "Register"}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright/>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
