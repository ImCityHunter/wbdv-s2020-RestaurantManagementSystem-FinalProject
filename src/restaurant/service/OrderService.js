// const getCurrentOrder = (restaurantId) =>
//     fetch('', {
//         "method": "GET",
//     }).then(response => response.json())
//
// const getPastOrder = (restaurantId) =>
//     fetch(`https://web5610-final-project-backend.herokuapp.com/restaurant/${restaurantId}/orders/completed`, {
//         "method": "GET",
//     }).then(response => response.json())

const getAllOrder = (restaurantId) =>
    fetch(`https://web5610-final-project-backend.herokuapp.com/restaurant/${restaurantId}/orders`, {
        "method": "GET",
    }).then(response => response.json())

const getCurrentOrder = (restaurantId) =>
    fetch(`https://web5610-final-project-backend.herokuapp.com/restaurant/${restaurantId}/orders/incomplete`, {
        "method": "GET",
    }).then(response => response.json())

const getPastOrder = (restaurantId) =>
    fetch(`https://web5610-final-project-backend.herokuapp.com/restaurant/${restaurantId}/orders/completed`, {
        "method": "GET",
    }).then(response => response.json())

const updateOrderStatus = (restaurantId, orderId) =>
    fetch(`https://web5610-final-project-backend.herokuapp.com/restaurant/${restaurantId}/orders/${orderId}?status=completed`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())



export default {
    getCurrentOrder,
    getPastOrder,
    getAllOrder,
    updateOrderStatus
}