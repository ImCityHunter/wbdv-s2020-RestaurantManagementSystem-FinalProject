

let local_url = "http://localhost:8080";
let restaurant_url = (rid) => `${local_url}/api/restaurant/${rid}`;


export const findRestaurant = (rid)=>{
    let testRid = parseInt(rid);
    if(!testRid){
        alert("restauraunt id invalid");
    }
    return fetch(restaurant_url(rid)).then(response=>
         response.json()
    );
}

export const updateRestaurant = (restaurant) =>{
    let rid = restaurant.id;
    return fetch(restaurant_url(rid),{
        method:'PUT',
        body: JSON.stringify((restaurant)),
        credentials: "include",
        headers:{
            'content-type':'application/json'
        }
    }).then(response=>response.json());
}

export default {
    findRestaurant, updateRestaurant
}



