import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from 'redux'

import reducers from "./reducers";
import {foods} from "./constants";

export default createStore(
    combineReducers(reducers),
    {
        foodList: [],
        selectedCategory: "vegetables",
        shoppingCart: [],
        user: {
            id: 1,
            username: 'jack',
            password: 'wjc123'
        },
        isLogin: false
    },
    applyMiddleware(thunk)
)
