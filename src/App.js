import React from 'react';
import './App.css';
import RestaurantClient from "./components/prototype/RestaurantClient";
import RestaurantDetail from "./components/prototype/RestaurantDetail";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () =>
    <Router>
        <Route path="/" exact={true} component={RestaurantClient}/>
        <Route path="/restaurant/:restaurantId"
               exact={true}
               render = {(props) =>
                   <RestaurantDetail
                       restaurantId={props.match.params.restaurantId}
                   />}
        />
    </Router>

export default App;
