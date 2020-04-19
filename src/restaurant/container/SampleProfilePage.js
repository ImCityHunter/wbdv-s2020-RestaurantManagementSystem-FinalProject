

import React from 'react';
import {Link} from "react-router-dom";

class SampleProfilePage extends React.Component{
    render(){
        return(
            <div className={"container"}>
                <h1 className={"text-center"}>Sample Profile Page</h1>
                <ul className={"list-group list-group-horizontal"}>
                    <li className={"list-group-item col-4"}>Your Name</li>
                    <li className={"list-group-item col-8 text-right"}>Jack</li>
                </ul>

                <ul className={"list-group list-group-horizontal"}>
                    <li className={"list-group-item col-4"}>Your Phone</li>
                    <li className={"list-group-item col-8 text-right"}>Call Me Maybe</li>
                </ul>

                <Link to={`/restaurant/123`}>
                    Edit Your Restaurant
                </Link>
            </div>
        )
    }
}

export default SampleProfilePage;
