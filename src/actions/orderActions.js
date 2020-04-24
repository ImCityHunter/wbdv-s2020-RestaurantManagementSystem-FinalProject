export const REMOVE_COMPLETED_ORDER = "REMOVE_COMPLETED_ORDER"
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

