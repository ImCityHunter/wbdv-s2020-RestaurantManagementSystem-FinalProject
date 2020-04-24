import React, {useCallback} from "react";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import FaceIcon from "@material-ui/icons/Face";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MoreIcon from "@material-ui/icons/MoreVert";
import AppBar from "@material-ui/core/AppBar";
import {fade, makeStyles} from "@material-ui/core/styles";
import {NavLink as Link, Route, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCart from "./right.panel";
import {setLogin, setLoginUser} from "../../actions";
import Checkout from "../checkout/checkout.";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appBarTitle: {
        display: 'none',
        fontWeight: 'bold',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    appBarSectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    appBarSectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
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
    linkStyle: {
        color: 'white'
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center'
    },
    menuItemText: {
        padding: '0.5rem 1rem'
    },
    dialogWrapper: {
        // width: '300px !important'
    }
}))

export default function Header(props) {
    const history = useHistory()
    const classes = useStyles()
    const isLogin = useSelector(state => state.isLogin)
    const user = useSelector(state => state.user)
    const shoppingCart = useSelector(state => state.shoppingCart)
    const {drawerStatus, handleDrawerOpen} = props
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const getUserUrl = useCallback(() => {
        return isLogin ? "/customer/profile" : "/login"
    }, [isLogin, user])

    const [cartCartDialogOpen, setCartDialogOpen] = React.useState(false);
    const [cartDialogScroll, setCartDialogScroll] = React.useState('paper');

    const handleCartDialogOpen = (scrollType) => () => {
        setCartDialogOpen(true);
        setCartDialogScroll(scrollType);
    };

    const handleCartDialogClose = () => {
        setCartDialogOpen(false);
    };

    const [checkoutDialogOpen, setCheckoutDialogOpen] = React.useState(false)
    const [checkoutDialogScroll, setCheckoutDialogScroll] = React.useState('paper');
    const handleCheckoutDialogOpen = () => {
        setCheckoutDialogOpen(true);
        setCheckoutDialogScroll("paper");
    };

    const handleCheckoutDialogClose = () => {
        setCheckoutDialogOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (cartCartDialogOpen) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [cartCartDialogOpen]);

    const handleExit = () => {
        dispatch(setLoginUser(null))
        dispatch(setLogin(false))
        localStorage.removeItem("user")
        localStorage.removeItem("isLogin")
        history.push("/customer")
    }

    return (
        <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: drawerStatus,})}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: drawerStatus,
                    })}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap className={classes.appBarTitle}>
                    NEU Food Hunting
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{'aria-label': 'search'}}
                    />
                </div>
                <div className={classes.grow}/>
                <div className={classes.appBarSectionDesktop}>
                    <Link to={{
                        pathname: getUserUrl(),
                        state: {isLogin: true}
                    }}>
                        <IconButton
                            color="inherit" className={classes.linkStyle}>
                            <FaceIcon/>
                        </IconButton>
                    </Link>
                    <IconButton onClick={handleExit}
                                color="inherit">
                        <ExitToAppIcon color="error"/>
                    </IconButton>
                </div>
                <div className={classes.appBarSectionMobile}>
                    <IconButton onClick={handleCartDialogOpen('paper')}
                                color="inherit">
                        <LocalMallIcon/>
                    </IconButton>
                    <IconButton onClick={handleClick}
                                color="inherit">
                        <MoreIcon/>
                    </IconButton>
                </div>
            </Toolbar>
            <Menu id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}>
                <MenuItem>
                    <Link to={{
                        pathname: getUserUrl(),
                        state: {isLogin: true}
                    }}>
                        <div className={classes.menuItem}>
                            {isLogin ? <FaceIcon/> : <AccountCircleIcon/>}
                            <div className={classes.menuItemText}>
                                {isLogin ? "Profile" : "Login"}
                            </div>
                        </div>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <div className={classes.menuItem} style={{color: 'red'}} onClick={handleExit}>
                        <ExitToAppIcon/>
                        <div className={classes.menuItemText}>
                            Exit
                        </div>
                    </div>
                </MenuItem>
            </Menu>
            <Dialog fullWidth={true}
                    open={cartCartDialogOpen}
                    onClose={handleCartDialogClose}
                    scroll={cartDialogScroll}>
                <DialogTitle id="scroll-dialog-title">Shopping Cart</DialogTitle>
                <DialogContent dividers={cartDialogScroll === 'paper'}>
                    <ShoppingCart showTitle={false} showBottomMenu={false} wrapTitleText={false} checkoutFunc={handleCheckoutDialogOpen}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        handleCartDialogClose()
                        handleCheckoutDialogOpen()
                    }} color="primary" disabled={shoppingCart.length === 0}>
                        Checkout
                    </Button>
                    <Button onClick={handleCartDialogClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
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
        </AppBar>
    )
}
