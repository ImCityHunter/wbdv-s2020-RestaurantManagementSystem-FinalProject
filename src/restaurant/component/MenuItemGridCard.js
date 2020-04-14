import React from "react";

const MenuItemGridCard = ({item}) =>{
    return(
        <div className={"row"}>
            <div className={"col-3"}>{item.name}</div>
            <div className={"col-7"}>{item.recipe}</div>
            <div className={"col-2"}>{item.price}</div>
        </div>
    )
}
export default MenuItemGridCard;
