import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RestaurantHomePage from "./RestaurantHomePage";
import ShowMenu from "./ShowMenu";
import SampleProfilePage from "./SampleProfilePage";
import EditMenu from "../component/EditMenu";
import Profile from "../../homepage/Profile";
import Home from "../../homepage/Home";
import Register from "../../homepage/Register";
import Login from "../../homepage/Login";

class Whiteboard extends React.Component{
    render(){
        return(
            <Router>

                <Route path="/register" exact={true} render={(props)=><Register {...props}/>}/>
                <Route path="/login" exact={true} render={(props)=><Login {...props}/>}/>
                <Route path="/profile" exact={true} render={(props)=><Profile {...props}/>}/>
                <Route path="/home" exact={true} render={(props)=><Home {...props}/>}/>


                <Route
                    path="/"
                    exact={true}
                    render={(props)=>
                        <Home
                            {...props}
                        />}
                />
                <Route
                    path="/restaurant/:rid"
                    exact={true}
                    render={(props)=>
                        <RestaurantHomePage
                            rid = {props.match.params.rid}
                            {...props}
                        />}
                />
                <Route
                    path="/restaurant/:rid/menu"
                    exact={true}
                    render={(props)=>
                        <ShowMenu
                            rid = {props.match.params.rid}
                            {...props}
                        />}
                />

                <Route
                    path="/restaurant/:rid/menu/edit-menu"
                    exact={true}
                    render={(props)=>
                        <EditMenu
                            rid = {props.match.params.rid}
                            {...props}
                        />}
                />

            </Router>
        )
    }
}
export default Whiteboard;
