import React from "react";

const MenuItemGridCard = ({item}) =>{
    return(
            <ul className={"list-group list-group-horizontal"}>
                <li className={"list-group-item col-3"}>{item.name}</li>
                <li className={"list-group-item col-7"}>{item.recipe}</li>
                <li className={"list-group-item col-2 text-center"}>{item.price}</li>
            </ul>
    )
}
export default MenuItemGridCard;
