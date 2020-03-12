import React from "react";
import Autocomplete from 'react-autocomplete'
import {Link} from 'react-router-dom';

class RestaurantClient extends React.Component{
    state = {
        restaurants: [],
        suggestions: [],
        cityName: "",
        cityId: "",
        cityLatitude: "",
        cityLongitude: ""
    }

    // componentDidMount() {
    //     fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&apikey=92a447e8e82d7d3c0f72bc51e280afc5`)
    //         .then(response => response.json())
    //         .then(results => this.setState({
    //             restaurants: results.restaurants
    //         }));
    // }

    // componentDidMount() {
    //     fetch(`https://us-restaurant-menus.p.rapidapi.com/restaurants/search/geo?lon=${this.state.cityLongitude}&lat=${this.state.cityLatitude}&distance=5`, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
    //             "x-rapidapi-key": "db5c6bd4bbmshaf96301e3bdc554p118588jsnc1247cd2e969"
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(results => this.setState({
    //             restaurants: results.result.data
    //         }));
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.cityName !== prevState.cityName) {
            fetch(`https://developers.zomato.com/api/v2.1/cities?apikey=92a447e8e82d7d3c0f72bc51e280afc5&q=${this.state.cityName}`)
                .then(response => response.json())
                .then(results =>
                    this.setState({
                        suggestions: results.location_suggestions.filter(suggestion=>suggestion.country_name === "United States")
                    }))
        }

    }

    searchRestaurant = () => {
        fetch(`https://developers.zomato.com/api/v2.1/locations?query=${this.state.cityName}&apikey=92a447e8e82d7d3c0f72bc51e280afc5`)
            .then(response => response.json())
            .then(result =>
                this.setState({
                    cityLatitude: result.location_suggestions[0].latitude,
                    cityLongitude: result.location_suggestions[0].longitude
                })
            ).then(() =>

            fetch(`https://us-restaurant-menus.p.rapidapi.com/restaurants/search/geo?lon=${this.state.cityLongitude}&lat=${this.state.cityLatitude}&distance=5`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
                    "x-rapidapi-key": "db5c6bd4bbmshaf96301e3bdc554p118588jsnc1247cd2e969"
                }
            })
                .then(response => response.json())
                .then(results => this.setState({
                    restaurants: results.result.data
                })))
    }

    render() {
        return (
            <div className="container">
                <h1>Restaurant Client ({this.state.restaurants.length})</h1>
                <ul className="list-group">
                    {/*<input value={this.state.cityName}*/}
                    {/*       type="text"*/}
                    {/*       className="form-control"*/}
                    {/*       onChange={event => this.setState({*/}
                    {/*           cityName: event.target.value*/}
                    {/*       })}*/}
                    {/*/>*/}

                    <div className="form-inline">
                        <Autocomplete
                            items={this.state.suggestions}
                            shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                            getItemValue={item => item.name}
                            renderItem={(item, highlighted) =>
                                <div
                                    key={item.id}
                                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}>
                                    {item.name}
                                </div>
                            }
                            value={this.state.cityName}
                            onChange={e => this.setState({ cityName: e.target.value })}
                            onSelect={cityName => this.setState({ cityName })}
                        />

                        <button className="btn btn-primary ml-3"
                        onClick={this.searchRestaurant}>Search</button>
                    </div>

                    {this.state.restaurants.map(restaurant =>
                        <li className="list-group-item"
                            key={restaurant.restaurant_id}>
                            <Link to={`/restaurant/${restaurant.restaurant_id}`}>
                                {restaurant.restaurant_name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
export default RestaurantClient
