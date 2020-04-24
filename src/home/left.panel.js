import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import {categories} from "../constants";
import {useDispatch, useSelector} from "react-redux";
import clsx from "clsx";
import {setSelectedCategory} from "../actions";
import {useHistory, useLocation} from "react-router";

const useStyles = makeStyles((theme) => ({
    iconLarge: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    itemText: {
        marginLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
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
    selected: {
        backgroundColor: '#3f50b5'
    }
}))

function LeftCategory(props) {
    const history = useHistory();
    const location = useLocation()
    const classes = useStyles()
    const selectedCategory = useSelector(state => state.selectedCategory)
    const dispatch = useDispatch()

    const onItemClick = (category) => {
        console.log(location)
        dispatch(setSelectedCategory(category))
        if (location.pathname !== "/customer") {
            history.push('/customer')
        }
    }
    return (
        <List component="nav">
            {categories.map(category => {
                return <ListItem className={clsx({[classes.selected]: category.key === selectedCategory})}
                                 button key={category.key} onClick={() => onItemClick(category.key)}>
                    <ListItemIcon>
                        <Avatar src={category.src} className={classes.iconLarge}/>
                    </ListItemIcon>
                    <ListItemText primary={category.name} className={classes.itemText}/>
                </ListItem>
            })}
        </List>
    )
}

export default LeftCategory
