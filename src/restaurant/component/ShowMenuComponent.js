import React from "react";
import {connect} from 'react-redux';
import ShowMenuItem from "./ShowMenuItem";


const stateToPropertyMapper = (state)=> ({
    menu: state.menuReducer.menu
})

const dispatchToPropertyMapper = (dispatch)=> ({
    showMenu: () => {
        dispatch({
            type: "SHOW_MENU",
            menu:[
            ]
        })
    },
    addMenu: (meal) =>{
        dispatch({
            type: "ADD_MENU",
            meal: meal
        })
    }
})


const ShowMenuComponent = connect(
    stateToPropertyMapper,dispatchToPropertyMapper
)(ShowMenuItem)

export default ShowMenuComponent;
