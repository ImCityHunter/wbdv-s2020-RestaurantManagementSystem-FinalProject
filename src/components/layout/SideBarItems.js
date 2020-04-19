import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { Link } from "react-router-dom";

export const sideBarItems = (
    <div>
        <ListItem button component={Link} to ="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to ="/orderViewer">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to ="/menuEditor">
            <ListItemIcon>
                <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" />
        </ListItem>
        <ListItem button component={Link} to ="/infoEditor">
            <ListItemIcon>
                <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Information" />
        </ListItem>
    </div>
);