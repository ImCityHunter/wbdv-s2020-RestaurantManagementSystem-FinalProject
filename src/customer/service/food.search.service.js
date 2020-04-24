import {burgerData, foodListUrl, fruitData, vegetablesData} from "../../constants";

export const findFoodsByCategory = (category) => {
    return fetch(foodListUrl)
        .then(response => response.json())
}

export const findFakeFoodsByCategory = (category) => {
    switch (category) {
        case "vegetables":
            return vegetablesData
        case "burger":
            return burgerData
        case "fruit":
            return fruitData
        default:
            return vegetablesData
    }
}
