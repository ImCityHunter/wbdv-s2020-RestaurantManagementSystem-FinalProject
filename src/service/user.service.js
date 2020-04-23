import {getUserPostOrderUrl, login_url, register_url, update_url} from "../constants";

export const login = (username, password) => {
    const url = new URL(login_url)
    const params = {username: username, password: password}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url).then(response => response.json())
}

export const register = (user) => {
    return fetch(register_url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())
}

export const updateUser = (user) => {
    return fetch(update_url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json())
}

export const postOrder = (user, shoppingList) => {
    const order = {
        "date": "2020-03-28T10:11:12",
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
