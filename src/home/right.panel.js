import React, {useCallback} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Alert} from '@material-ui/lab';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import withStyles from "@material-ui/core/styles/withStyles";
import {addShoppingCart, removeShoppingCart} from "../actions";
import Button from "@material-ui/core/Button";
import {postOrder} from "../service/user.service";

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        minHeight: '200px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-around'
    },
    contentTitleWrapper: {
        width: '100%',
        padding: theme.spacing(1, 2),
        display: 'flex',
        alignItems: 'center',
    },
    contentTitle: {
        marginBottom: 0,
        fontWeight: 'bold',
        paddingLeft: theme.spacing(2)
    },
    divider: {
        width: "100%",
        margin: 0
    },
    nothingAlert: {
        textAlign: 'center',
        marginTop: theme.spacing(1)
    },
    hidden: {
        display: 'none'
    },
    shoppingListWrapper: {},
    shoppingList: {},
    shoppingItemText: {
        hover: {}
    },
    buttonMenu: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        padding: theme.spacing(2)
    },
    buttonWrapper: {
        marginRight: theme.spacing(1)
    }
}))

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: -4,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

export default function ShoppingCart(props) {
    const classes = useStyles()
    const shoppingCart = useSelector(state => state.shoppingCart)
    const user = useSelector(state => state.user)
    const nothingAlert = (
        <Alert severity="info" className={clsx(classes.nothingAlert, {[classes.hidden]: shoppingCart.length})}>
            No Item Selected!
        </Alert>
    )
    const dispatch = useDispatch()
    const handleClick = useCallback((food, delta) => {
        delta === -1 ? dispatch(removeShoppingCart(food)) : dispatch(addShoppingCart(food))
    }, [dispatch])

    const placeOrder = useCallback(() => {
        postOrder(user, shoppingCart)
    }, [user, shoppingCart])
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.contentTitleWrapper}>
                <ShoppingCartIcon/>
                <Typography variant="h6" gutterBottom className={classes.contentTitle}>
                    Shopping Cart
                </Typography>
            </div>
            <Divider variant="middle" className={classes.divider}/>
            <div>
                <List className={classes.root}>
                    {
                        shoppingCart.map((food, index) => {
                            return <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar src={food.thumb}>
                                        <ImageIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <Tooltip title={food.name} aria-label="add">
                                    <ListItemText primary={food.name.substr(0, 7) + '...'}
                                                  className={classes.shoppingItemText}
                                                  secondary={"Quan: " + food.amount}/>
                                </Tooltip>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" size="small"
                                                onClick={() => handleClick(food, 1)}>
                                        <StyledBadge badgeContent={food.amount} color="primary">
                                            <AddIcon/>
                                        </StyledBadge>
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" size="small" color="secondary"
                                                onClick={() => handleClick(food, -1)}>
                                        <RemoveIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        })
                    }
                </List>
            </div>
            {nothingAlert}
            <Divider variant="middle" className={classes.divider}/>
            <div className={classes.buttonMenu}>
                <Button variant="contained" color="primary" className={classes.buttonWrapper}
                        onClick={() => placeOrder()}>
                    CheckOut
                </Button>
                <Button variant="contained" color="secondary">
                    Clear
                </Button>
            </div>
        </div>
    )
}
