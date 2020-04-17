import {
    ACTION_ADD_SHOPPING_CART,
    ACTION_REMOVE_SHOPPING_CART,
    ACTION_SET_FOOD_LIST,
    ACTION_SET_SELECTED_CATEGORY
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
                const filtered = state.filter(item => item.foodId === payload.foodId)
                if (filtered.length > 0) {
                    return state.map(item => {
                        if (item.foodId === payload.foodId) {
                            item.count ++
                            return item
                        }
                        return item
                    })
                }
                return [payload, ...state]
            }
            case ACTION_REMOVE_SHOPPING_CART: {
                const filtered = state.filter(item => item.foodId === payload.foodId)
                if (filtered[0].count === 1) {
                    return state.filter(item => item.foodId !== payload.foodId)
                } else {
                    return state.map(item => {
                        if (item.foodId === payload.foodId) {
                            item.count --
                            return item
                        }
                        return item
                    })
                }
            }
            default:
                return state
        }
    }
}
