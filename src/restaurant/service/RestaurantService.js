const getRestaurantInfo = (restaurantId) =>
    fetch(`https://web5610-final-project-backend.herokuapp.com/restaurant/${restaurantId}`, {
        "method": "GET",
    }).then(response => response.json())

const createRestaurantInfo = (restaurantId, restaurantInfo) =>
    fetch(`https://web5610-final-project-backend.herokuapp.com/restaurant/${restaurantId}`, {
        method: 'POST',
        body: JSON.stringify(restaurantInfo),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

const updateRestaurantInfo = (restaurantInfo) => {
    return fetch("https://web5610-final-project-backend.herokuapp.com/restaurant/", {
        method: 'PUT',
        body: JSON.stringify(restaurantInfo),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())
}


export default {
    getRestaurantInfo,
    createRestaurantInfo,
    updateRestaurantInfo
}
