import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import routes from "./routes";

export default function App(props) {
    const {history} = props
    return (
        <Router history={history}>
            {
                routes.map((route, key) => {
                    if (route.exact) {
                        return <Route key={key} exact path={route.path}
                                      render={props => (
                                          <route.component {...props} routes={route.routes}/>
                                      )}/>
                    } else {
                        return <Route key={key}
                                      path={route.path}
                                      render={props => (
                                          <route.component {...props} routes={route.routes}/>
                                      )}/>
                    }
                })
            }
        </Router>
    );
}
