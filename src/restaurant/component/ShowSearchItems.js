import React from 'react';
const ShowSearchItems = ({foods, addItem}) =>
    <div>
        <h3>Choices </h3>
        <div>
            {
                foods && foods.map(food=>
                    <div className={"row"} key={food.id}>
                        <div className={"col-3"}>{food.label}</div>
                        <div className={"col-6"}>{food.foodContent}</div>
                        <div className={"col-3"}>
                            <button onClick={()=>addItem(food.label, food.foodContent, food.kcal)}>add</button>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
export default ShowSearchItems;


