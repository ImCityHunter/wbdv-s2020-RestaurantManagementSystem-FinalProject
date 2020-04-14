import React from "react";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ShowMenuComponent from "../component/ShowMenuComponent";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import EditMenu from "../component/EditMenu";
import menuReducer from "../../reducer/menuReducer";
import ShowMenuItem from "../component/ShowMenuItem";

class ShowMenu extends React.Component {
    state = {
        menu:[
            { name:'item 1', recipe: 'audi, honda', price: '15', id: '123', kcal:0},
            { name:'item 2', recipe: 'coke, sprite', price: '15', id: '124', kcal:0},
            { name:'item 3', recipe: 'audi, water', price: '15', id: '125', kcal:0},
        ]
    }
    addMeal = (meal) => {
        this.setState(prevState=>({
            menu:[
                ...prevState.menu,
                meal
            ]
        }))
    }
    render(){
        return(
            <div className={"container"}>
                <h1>Current Menu</h1>
                <Router>
                    <Route
                        path="/"
                        exact={true}
                        render={(props)=>
                            <ShowMenuItem
                                {...props}
                                menu={this.state.menu}
                                />}

                    />
                    <Route
                        path="/edit-menu/"
                        exact={true}
                        render={(props)=>
                            <EditMenu
                                addMeal = {this.addMeal}
                                {...props}
                            />}

                    />
                </Router>
            </div>
        )
    }
}

export default ShowMenu;
