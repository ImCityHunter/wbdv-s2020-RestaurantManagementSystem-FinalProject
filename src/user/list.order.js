import React, {useState} from "react";
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import OrderItem from "./item.order";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";

const useStyle = makeStyles(theme => ({
    orderItem: {
        marginBottom: theme.spacing(2)
    }
}))

export default function OrderList(props) {
    const classes = useStyle()
    const {children, value, index, ...other} = props;
    const orders = useSelector(state => state.orders)
    return (
        <div hidden={value !== index} {...other}>
            {value === index &&
            <Box p={2}>
                {
                    orders.map((order, index) => {
                        return <div key={index} className={classes.orderItem}><OrderItem item={order}/></div>
                    })
                }
            </Box>}
        </div>
    );
}

OrderList.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};




