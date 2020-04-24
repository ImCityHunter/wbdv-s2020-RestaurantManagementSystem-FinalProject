import React from 'react';
import './App.css';
import DashBoard from "./components/dashboard/DashBoard";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import MenuEditor from "./components/menuEditor/MenuEditor";
import OrderViewer from "./components/orderViewer/OrderViewer";
import InfoEditor from "./components/infoEditor/InfoEditor";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/:rid/dashBoard" render={() => <DashBoard />} />
            <Route path="/:rid/menuEditor" render={() => <MenuEditor />} />
            <Route path="/:rid/orderViewer" render={() => <OrderViewer />} />
            <Route path="/:rid/infoEditor" render={() => <InfoEditor />} />
            <Redirect exact from="/" to="/1/dashBoard" />
        </Switch>
    </BrowserRouter>
)



export default App;
