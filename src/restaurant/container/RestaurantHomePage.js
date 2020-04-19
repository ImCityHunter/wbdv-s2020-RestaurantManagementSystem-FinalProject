import React from 'react';
import restaurantService from "../../service/restaurantService";
import {Link} from "react-router-dom";
class RestaurantHomePage extends React.Component {
    state = {
        restaurant: {
            name: "",
            phone: "",
        },
        editing: false
    }
    componentDidMount() {
        restaurantService.findRestaurant(this.props.rid).then(restaurant=>
            this.setState({
            restaurant:restaurant
        })
        );


    }

    editing = ()=>{
        this.setState({
            editing:true
        })
    }
    save = ()=>{
        restaurantService.updateRestaurant(this.state.restaurant)
            .then(status=> console.log(status))
            .then(value=> this.setState({
                editing:false
            })
        )


    }
    render(){
        return(
            <div className={"container"}>
                <br/>
                <h1 className={"text-center"}>Restaurant</h1>
                <br/>
                <div>
                    <button className={"btn btn-primary"}>In Store Order</button>
                    <button
                        onClick={()=>this.props.history.push('/profile')}
                        className={"btn btn-warning float-right"}>Back To User Profile</button>
                </div>
                <br/>
                <ul className={"list-group list-group-horizontal"}>
                    <li className={"list-group-item col-4"}>Restaurant Name</li>
                    <li className={"list-group-item col-8 text-right"}>
                        {
                            !this.state.editing && this.state.restaurant.name
                        }
                        {
                            this.state.editing &&
                            <input placeholder="restaurant name" value={this.state.restaurant.name} onChange={(e)=>{
                                let name = e.target.value;
                                this.setState(prevState=>({
                                    restaurant:{
                                        ...prevState.restaurant,
                                        name:name
                                    }}))}}/>
                        }
                    </li>
                </ul>
                <ul className={"list-group list-group-horizontal"}>
                    <li className={"list-group-item col-4"}>Phone</li>
                    <li className={"list-group-item col-8 text-right"}>
                        {
                            !this.state.editing && this.state.restaurant.phone
                        }
                        {
                            this.state.editing &&
                            <input placeholder="restaurant phone" value={this.state.restaurant.phone} onChange={(e)=>{
                                let phone = e.target.value;
                                this.setState(prevState=>({
                                    restaurant:{
                                        ...prevState.restaurant,
                                        phone:phone
                                    }}))}}/>
                        }

                    </li>
                </ul>
                <br/>
                {
                    !this.state.editing && <button onClick={()=>this.editing()} className={"btn btn-danger"}>Edit</button>
                }
                {
                    this.state.editing && <button onClick={()=>this.save()}className={"btn btn-primary "}>save</button>
                }
                {
                    !this.state.editing && <Link to={`/restaurant/${this.props.rid}/menu`} className={"btn btn-success float-right"}>Check Menu</Link>
                }
            </div>
        )
    }
}

export default RestaurantHomePage;
