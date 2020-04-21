import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';


export const sideBarItems = (
    <div>
        <Tooltip title="Dashboard" placement="right">
            <ListItem button component={Link} to ="/">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Orders" placement="right">
            <ListItem button component={Link} to ="/orderViewer">
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Menu" placement="right">
            <ListItem button component={Link} to ="/menuEditor">
                <ListItemIcon>
                    <RestaurantMenuIcon />
                </ListItemIcon>
                <ListItemText primary="Menu" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Information" placement="right">
            <ListItem button component={Link} to ="/infoEditor">
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Information" />
            </ListItem>
        </Tooltip>
    </div>
);