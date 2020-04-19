

let local_url = "http://localhost:8080";
let restaurant_menu_url = (rid) => `${local_url}/api/restaurant/${rid}/menu`;

export const findMenuByRestaurantId = (rid) => {
    let testRid = parseInt(rid);
    if(!testRid){
        alert("restaurant id retrieve fail");
    }
    return fetch(restaurant_menu_url(rid)).then(response=>response.json());
}

export const updateMeal = (mid) => {

}

export const addMeal = (rid,meal) =>{
    return fetch(restaurant_menu_url(rid), {
        method: 'POST',
        body: JSON.stringify(meal),
        credentials: "include",
        headers:{
            'content-type': 'application/json'
        }
    }).then(response=>response.json())
}

export default {
    findMenuByRestaurantId, addMeal, updateMeal
}
