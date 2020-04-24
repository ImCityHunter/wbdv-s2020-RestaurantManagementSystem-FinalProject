export const ACTION_SET_FOOD_LIST = "SET_FOOD_LIST"
export const ACTION_SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
export const ACTION_ADD_SHOPPING_CART = "ADD_SHOPPING_CART"
export const ACTION_REMOVE_SHOPPING_CART = "REMOVE_SHOPPING_CART"
export const ACTION_SET_LOGIN_SER = "SET_LOGIN_USER"
export const ACTION_SET_IS_LOGIN = "SET_IS_LOGIN"
export const ACTION_SET_ORDERS = "SET_ORDERS_LIST"
export const ACTION_CLEAR_SHOPPING_CART = "CLEAR_SHOPPING_CART"
export const REMOVE_COMPLETED_ORDER = "REMOVE_COMPLETED_ORDER"

export function setFoodList(foodList) {
    return {
        type: ACTION_SET_FOOD_LIST,
        payload: foodList
    }
}

export function setSelectedCategory(category) {
    return {
        type: ACTION_SET_SELECTED_CATEGORY,
        payload: category
    }
}

export function addShoppingCart(food) {
    return {
        type: ACTION_ADD_SHOPPING_CART,
        payload: food
    }
}

export function removeShoppingCart(food) {
    return {
        type: ACTION_REMOVE_SHOPPING_CART,
        payload: food
    }
}

export function setLoginUser(user) {
    return {
        type: ACTION_SET_LOGIN_SER,
        payload: user
    }
}


export function setLogin(isLogin) {
    return {
        type: ACTION_SET_IS_LOGIN,
        payload: isLogin
    }
}


export function setOrdersList(orders) {
    return {
        type: ACTION_SET_ORDERS,
        payload: orders
    }
}

export function clearCart() {
    return {
        type: ACTION_CLEAR_SHOPPING_CART
    }
}

export const removeCompletedOrder = (orderCompleted) => ({
    type: REMOVE_COMPLETED_ORDER,
    payload: orderCompleted
})

export const SET_ORDER_COMPLETED = "SET_ORDER_COMPLETED"
export const setOrderCompleted = (orderCompleted) => ({
    type: SET_ORDER_COMPLETED,
    payload: orderCompleted
})

export const SET_ORDER_LIST = "SET_ORDER_LIST"
export const setOrderList = (orderList) => ({
    type: SET_ORDER_LIST,
    payload: orderList
})

export const SET_CURRENT_ORDER_LIST = "SET_CURRENT_ORDER_LIST"
export const setCurrentOrderList = (orderList) => ({
    type: SET_CURRENT_ORDER_LIST,
    payload: orderList
})

export const SET_PAST_ORDER_LIST = "SET_PAST_ORDER_LIST"
export const setPastOrderList = (orderList) => ({
    type: SET_PAST_ORDER_LIST,
    payload: orderList
})
