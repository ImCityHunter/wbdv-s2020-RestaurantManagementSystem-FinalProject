import React from 'react';
import {Link} from "react-router-dom";

class Profile extends React.Component{
    logout = () => {
        fetch('http://localhost:8080/logout', {
            method: 'POST',
            credentials: "include"
        }).then(response => this.props.history.push('/'));
    }
    state = {
        currentUser:{
            id:'',
            username: '',
            firstName: '',
            lastName: '',
        }
    }
    componentDidMount() {
        fetch(`http://localhost:8080/currentUser`, {
            method: 'GET',
            credentials: "include"
        }).then(response=>response.json()).then(currentUser => this.setState({
            currentUser: currentUser
        }))
    }

    render(){
        return(
                <div className={"container"}>
                    <h1 className={"text-center"}> Profile Page </h1>
                    <h4> Hi {this.state.currentUser.username} </h4>
                    <h4> id: {this.state.currentUser.id}</h4>
                    <ul className={"list-group list-group-horizontal"}>
                        <li className={"list-group-item col-4"}>Your Name</li>
                        <li className={"list-group-item col-8 text-right"}>Jack</li>
                    </ul>

                    <ul className={"list-group list-group-horizontal"}>
                        <li className={"list-group-item col-4"}>Your Phone</li>
                        <li className={"list-group-item col-8 text-right"}>Call Me Maybe</li>
                    </ul>

                    <Link to={`/restaurant/${this.state.currentUser.id}`} className={"btn btn-primary"}>
                        See Your Menu
                    </Link>
                    {/*Go To Restaurant Home Page.js*/}
                    <button className={"float-right btn btn-warning"} onClick={()=>this.logout()}>log out</button>
                </div>
        )
    }
}
export default Profile;
