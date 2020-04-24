import {
    REMOVE_COMPLETED_ORDER,
    SET_ORDER_COMPLETED,
    SET_ORDER_LIST,
    SET_CURRENT_ORDER_LIST,
    SET_PAST_ORDER_LIST
} from "./actions/orderActions";

const reducers = {
    orderList(state = [], action) {
        console.log("foodList reducer:", state, action, action.type)
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
                return state.push(payload)
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


export default reducers
