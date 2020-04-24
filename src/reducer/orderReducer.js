import {
    SET_ORDER_LIST,
    SET_CURRENT_ORDER_LIST,
    SET_PAST_ORDER_LIST,
    SET_ORDER_COMPLETED,
    REMOVE_COMPLETED_ORDER
} from "../actions/orderActions";

const orderReducer = {
    orderList(state = [], action) {
        const {type, payload} = action
        switch(type) {
            case SET_ORDER_LIST:
                return payload

            default:
                return state
        }
    },
    pastOrderList(state = [], action) {
        const {type, payload} = action
        switch (type) {
            case SET_ORDER_COMPLETED:
                return [
                    ...state,
                    payload
                ]
            case SET_PAST_ORDER_LIST:
                return payload
            default:
                return state
        }
    },
    currentOrderList(state= [], action) {
        const {type, payload} = action
        switch (type) {
            case REMOVE_COMPLETED_ORDER:
                return state.filter(order => order.id !== payload.id)
            case SET_CURRENT_ORDER_LIST:
                return payload
            default:
                return state
        }
    }
}

export default orderReducer