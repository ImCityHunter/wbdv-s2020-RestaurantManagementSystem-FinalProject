import React  from "react";
import MenuItemGridCard from "./MenuItemGridCard";
import {Link} from "react-router-dom";
export default class ShowMenuItem extends React.Component {
    render() {
        return(
            <div className={"container-fluid"}>
                <div>
                    {
                        this.props.menu && this.props.menu.map(item=>
                            <MenuItemGridCard
                                key={item.id}
                                item={item}
                            />
                        )
                    }
                </div>
                <Link to="/edit-menu/"> Edit Menu </Link>
            </div>
        )
    }
}
