import React  from "react";
import MenuItemGridCard from "./MenuItemGridCard";
import {Link} from "react-router-dom";
export default class ShowMenuItem extends React.Component {
    render() {
        return(
            <div className={"container-fluid"}>
                <div>
                    <ul className={"list-group list-group-horizontal"}>
                        <li className={"list-group-item col-3 text-center"}>Meal Name</li>
                        <li className={"list-group-item col-7 text-right text-center"}>Food Content</li>
                        <li className={"list-group-item col-2 text-right text-center"}>Price</li>
                    </ul>
                    {
                        this.props.menu && this.props.menu.map(item=>
                            <MenuItemGridCard
                                key={item.id}
                                item={item}
                            />
                        )
                    }
                </div>
                <br/>
            </div>
        )
    }
}
