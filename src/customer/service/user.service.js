import {
    getUserPostOrderUrl,
    getUpdateUrl,
    restaurantRegisterUrl,
    userRegisterUrl,
    userLoginUrl,
    restaurantLoginUrl, getUserOrderUrl
} from "../../constants";

export const login = (username, password, role) => {
    var url = new URL(role === "customer" ? userLoginUrl : restaurantLoginUrl)
    var params = {username: username, password: password}
    url.search = new URLSearchParams(params).toString();
    return fetch(url)
        .then(response => response.ok ? response.json() : undefined)
}

export const register = (user, role) => {
    let body = {
        username: user["username"],
        password: user["password"]
    }
    if (role === "customer") {
        body["nickname"] = user["name"]
    } else {
        body["restaurantName"] = user["name"]
        body["businessHours"] = "08:00,21:00,08:00,21:00,08:00,21:00,08:00,21:00,08:00,21:00,08:00,21:00,08:00,21:00"
    }
    return fetch(role === "customer" ? userRegisterUrl : restaurantRegisterUrl, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())
}

export const updateUser = (user) => {
    return fetch(getUpdateUrl(user.id), {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json())
}

export const getUserOrders = (userId) => {
    const url = getUserOrderUrl(userId)
    return fetch(url)
        .then(response => response.json())
}

export const postOrder = (user, shoppingList) => {
    const DATE_FORMATER = require( 'dateformat' );
    var date = DATE_FORMATER( new Date(), "yyyy-mm-dd HH:MM:ss" ).replace(' ', 'T');
    const order = {
        "date": date,
        "totalPrice": "100",
        "type": "take-out",
        "completed": "incomplete",
        "user": user,
        "products": shoppingList
    }
    return fetch(getUserPostOrderUrl(user.id), {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json())
}
