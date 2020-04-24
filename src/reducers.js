import {
    ACTION_ADD_SHOPPING_CART,
    ACTION_REMOVE_SHOPPING_CART,
    ACTION_SET_FOOD_LIST, ACTION_SET_IS_LOGIN, ACTION_SET_LOGIN_SER, ACTION_SET_ORDERS,
    ACTION_SET_SELECTED_CATEGORY, ACTION_CLEAR_SHOPPING_CART
} from "./actions";

export default {
    foodList(state = [], action) {
        const {type, payload} = action
        switch (type) {
            case ACTION_SET_FOOD_LIST:
                return payload
            default:
                return state
        }
    },
    selectedCategory(state = "vegetables", action) {
        const {type, payload} = action
        switch (type) {
            case ACTION_SET_SELECTED_CATEGORY:
                return payload
            default:
                return state
        }
    },
    shoppingCart(state = [], action) {
        const {type, payload} = action
        switch (type) {
            case ACTION_ADD_SHOPPING_CART: {
                const filtered = state.filter(item => item.id === payload.id)
                if (filtered.length > 0) {
                    return state.map(item => {
                        if (item.id === payload.id) {
                            item.amount++
                            return item
                        }
                        return item
                    })
                }
                return [payload, ...state]
            }
            case ACTION_REMOVE_SHOPPING_CART: {
                const filtered = state.filter(item => item.id === payload.id)
                if (filtered[0].amount === 1) {
                    return state.filter(item => item.id !== payload.id)
                } else {
                    return state.map(item => {
                        if (item.id === payload.id) {
                            item.amount--
                            return item
                        }
                        return item
                    })
                }
            }
            case ACTION_CLEAR_SHOPPING_CART:
                return []
            default:
                return state
        }
    },
    user(state = null, action) {
        const {type, payload} = action
        switch (type) {
            case ACTION_SET_LOGIN_SER:
                return payload
            default:
                return state
        }
    },
    isLogin(state = false, action) {
        const {type, payload} = action
        switch (type) {
            case ACTION_SET_IS_LOGIN:
                return payload
            default:
                return state
        }
    },
    orders(state = [], action) {
        const {type, payload} = action
        switch (type) {
            case ACTION_SET_ORDERS:
                return payload
            default:
                return state
        }
    }
}
