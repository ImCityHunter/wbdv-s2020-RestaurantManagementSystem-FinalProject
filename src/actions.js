export const ACTION_SET_FOOD_LIST = "SET_FOOD_LIST"
export const ACTION_SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
export const ACTION_ADD_SHOPPING_CART = "ADD_SHOPPING_CART"
export const ACTION_REMOVE_SHOPPING_CART = "REMOVE_SHOPPING_CART"

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
