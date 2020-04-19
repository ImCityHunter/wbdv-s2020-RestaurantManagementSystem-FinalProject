import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";

class LaunchPage extends React.Component {
    render(){
        return(
            <div className={"container"}>
                <h1> Team 2 Project </h1>
                <Router>
                    <Route path="/register" exact={true} render={(props)=><Register {...props}/>}/>
                    <Route path="/login" exact={true} render={(props)=><Login {...props}/>}/>
                    <Route path="/profile" exact={true} render={(props)=><Profile {...props}/>}/>
                    <Route path="/" exact={true} render={(props)=><Home {...props}/>} />
                    <Route path="/home" exact={true} render={(props)=><Home {...props}/>}/>
                </Router>
            </div>
        )
    }
}


export default LaunchPage;
