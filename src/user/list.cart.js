import PropTypes from "prop-types";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Tooltip from "@material-ui/core/Tooltip";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {Alert} from "@material-ui/lab";
import clsx from "clsx";
import {addShoppingCart, removeShoppingCart} from "../actions";
import withStyles from "@material-ui/core/styles/withStyles";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    hidden: {
        display: 'none'
    },
    nothingWrapper: {
        width: "100%",
        padding: theme.spacing(3)
    },
    butMenu: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'flex-end'
    },
    buttonWrapper: {
        marginLeft: theme.spacing(2)
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    listItemWrapper: {
        marginLeft: theme.spacing(2),
        padding: theme.spacing(2)
    },
    shoppingItemText: {
        marginLeft: theme.spacing(3)
    },
    leftButtonWrapper: {}
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: -4,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

export default function CartList(props) {
    const classes = useStyles()
    const {children, value, index, ...other} = props;
    const shoppingCart = useSelector(state => state.shoppingCart)
    const nothingAlert = (
        <Alert severity="info" className={clsx(classes.nothingAlert, {[classes.hidden]: shoppingCart.length})}>
            No Item Selected!
        </Alert>
    )
    const dispatch = useDispatch()
    const handleClick = useCallback((food, delta) => {
        delta === -1 ? dispatch(removeShoppingCart(food)) : dispatch(addShoppingCart(food))
    }, [dispatch])
    return (
        <div hidden={value !== index} {...other}>
            {value === index &&
            <div className={classes.contentWrapper}>
                <div>
                    <List className={classes.root}>
                        {
                            shoppingCart.map((food, index) => {
                                return <ListItem key={index} className={classes.listItemWrapper}>
                                    <ListItemAvatar>
                                        <Avatar src={food.thumb} className={classes.large}>
                                            <ImageIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Tooltip title={food.label} aria-label="add" className={classes.shoppingItemText}>
                                        <ListItemText primary={food.label}
                                                      secondary={"Quan: " + food.count}/>
                                    </Tooltip>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete" size="small"
                                                    onClick={() => handleClick(food, 1)}>
                                            <StyledBadge badgeContent={food.count} color="primary">
                                                <AddIcon fontSize="large"/>
                                            </StyledBadge>
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" size="small" color="secondary"
                                                    onClick={() => handleClick(food, -1)}>
                                            <RemoveIcon fontSize="large"/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            })
                        }
                    </List>
                </div>
                <div className={classes.nothingWrapper}>
                    {nothingAlert}
                </div>
                <div className={classes.butMenu}>
                    <Button variant="contained" color="primary">
                        CheckOut
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.buttonWrapper}>
                        Clear
                    </Button>
                </div>
            </div>
            }
        </div>
    );
}

CartList.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
