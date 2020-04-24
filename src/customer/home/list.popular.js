import React, {useCallback} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useDispatch} from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import {addShoppingCart, removeShoppingCart} from "../../actions";

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        minHeight: '200px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'flex'
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
}))

export default function PopularList(props) {
    const classes = useStyles()
    const mostPopular = [
        {
            thumb: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNzcxMH0",
            label: "Burger"
        },
        {
            thumb: "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNzcxMH0",
            label: "Noodles"
        },
        {
            thumb: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNzcxMH0",
            label: "Cookie"
        },
        {
            thumb: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNzcxMH0",
            label: "Ice Cream"
        },
        {
            thumb: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNzcxMH0",
            label: "Dumplings"
        }
    ]
    const dispatch = useDispatch()
    const handleClick = useCallback((food, delta) => {
        delta === -1 ? dispatch(removeShoppingCart(food)) : dispatch(addShoppingCart(food))
    }, [dispatch])
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.contentTitleWrapper}>
                <ShoppingCartIcon/>
                <Typography variant="h6" gutterBottom className={classes.contentTitle}>
                    Most Popular
                </Typography>
            </div>
            <Divider variant="middle" className={classes.divider}/>
            <div>
                <List className={classes.root}>
                    {
                        mostPopular.map((food, index) => {
                            return <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar src={food.thumb}>
                                        <ImageIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={food.label}
                                              className={classes.shoppingItemText}/>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" size="small" disabled={true}
                                                onClick={() => handleClick(food, 1)}>
                                        <AddIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        })
                    }
                </List>
            </div>
        </div>
    )
}
