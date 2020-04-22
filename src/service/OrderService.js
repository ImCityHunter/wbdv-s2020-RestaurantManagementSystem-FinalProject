const getCurrentOrder = (restaurantId) =>
    fetch('', {
        "method": "GET",
    }).then(response => response.json())

const getPastOrder = (restaurantId) =>
    fetch('', {
        "method": "GET",
    }).then(response => response.json())

const updateOrderStatus = (orderId, order) =>
    fetch(`${orderId}`, {
        method: 'PUT',
        body: JSON.stringify(order),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())



export default {
    getCurrentOrder,
    getPastOrder,
    updateOrderStatus
}