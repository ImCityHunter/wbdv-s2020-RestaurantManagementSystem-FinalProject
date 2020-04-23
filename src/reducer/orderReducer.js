import { REMOVE_COMPLETED_ORDER, SET_ORDER_COMPLETED, SET_ORDER_LIST, SET_CURRENT_ORDER_LIST, SET_PAST_ORDER_LIST } from "../actions/orderActions";

const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case REMOVE_COMPLETED_ORDER:
            return {
                orderList: state.orderList.filter(order =>
                    order.id !== action.payload.id)
            }
        case SET_ORDER_COMPLETED:
            return {
                orderList: state.pastOrderList.push(action.payload)
            }
        case SET_ORDER_LIST:
            console.log('called')
            return {
                orderList: action.payload
            }
        case SET_CURRENT_ORDER_LIST:
            return {
                currentOrderList: action.payload.filter(order => order.completed === "incomplete"),
            }
        case SET_PAST_ORDER_LIST:
            return {
                pastOrderList: action.payload.filter(order => order.completed === "completed"),
            }
        default:
            return state
    }
}

export default orderReducer