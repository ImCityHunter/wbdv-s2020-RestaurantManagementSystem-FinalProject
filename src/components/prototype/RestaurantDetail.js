import React from "react";
import {Link} from "react-router-dom";

class RestaurantDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            restaurantId: this.props.restaurantId,
            restaurantName: "",
            menuItems: []
        }
    }

    // componentDidMount() {
    //     fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.state.restaurantId}&apikey=92a447e8e82d7d3c0f72bc51e280afc5`)
    //         .then(response => response.json())
    //         .then(result => this.setState({
    //             restaurantName: result.name
    //         }));
    // }

    componentDidMount() {
        fetch(`https://us-restaurant-menus.p.rapidapi.com/restaurant/${this.state.restaurantId}/menuitems`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
                "x-rapidapi-key": "db5c6bd4bbmshaf96301e3bdc554p118588jsnc1247cd2e969"
            }
        })
            .then(response => response.json())
            .then(results => this.setState({
                menuItems: results.result.data
            }));
    }

    render() {
        return (
            <div className="container">
                <h1>Menu for {this.state.restaurantName}</h1>
                <ul className="list-group">
                    {this.state.menuItems.map(item =>
                        <li className="list-group-item"
                            key={item.item_id}>
                            {item.menu_item_name}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default RestaurantDetail
