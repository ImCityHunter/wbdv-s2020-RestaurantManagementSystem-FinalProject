import React from 'react';
import './App.css';
import DashBoard from "./components/dashboard/DashBoard";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MenuEditor from "./components/menuEditor/MenuEditor";
import OrderViewer from "./components/orderViewer/OrderViewer";
import InfoEditor from "./components/infoEditor/InfoEditor";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={() => <DashBoard />} />
            <Route path="/menuEditor" render={() => <MenuEditor />} />
            <Route path="/orderViewer" render={() => <OrderViewer />} />
            <Route path="/infoEditor" render={() => <InfoEditor />} />
        </Switch>
    </BrowserRouter>
)



export default App;
