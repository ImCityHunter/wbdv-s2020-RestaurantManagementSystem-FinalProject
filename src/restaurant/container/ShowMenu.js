import React from "react";
import ShowMenuItem from "../component/ShowMenuItem";
import menuService from "../../service/menuService";
import {Link} from "react-router-dom";
class ShowMenu extends React.Component {
    state = {
        menu:[
        ]
    }

    componentDidMount() {
        menuService.findMenuByRestaurantId(this.props.rid).
            then(menu=> this.setState({menu: menu}
        ));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    addMeal = (meal) => {
        menuService.addMeal(this.props.rid,meal)
        .then(meal=>console.log(meal)).catch(err=>console.log(err));
    }
    render(){
        return(
            <div className={"container"}>
                <br />
                <h1> Restaurant </h1>
                <h2> Your Current Menu</h2>
                <br />
                <ShowMenuItem
                    rid={this.props.rid}
                    menu={this.state.menu}
                />
                <Link to={`/restaurant/${this.props.rid}/menu/edit-menu`} className={"btn btn-danger"}> Edit Menu </Link>
                <button className={"btn btn-warning float-right"} onClick={()=>this.props.history.push(`/restaurant/${this.props.rid}`)}> Back </button>

            </div>
        )
    }
}

export default ShowMenu;
