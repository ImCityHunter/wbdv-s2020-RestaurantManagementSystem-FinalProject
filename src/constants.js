import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import image7 from "./images/7.png";
import photos from './resources/photos'

import vegetables from './resources/vegetables'
import burger from './resources/burger'
import fruit from './resources/fruit'

export const DEV_URL = "https://web5610-final-project-backend.herokuapp.com/";
export const URL = "";
export const categories = [
    {id: 1, name: 'Veges', src: image1, key: 'vegetables'},
    {id: 2, name: 'Fruits', src: image2, key: 'fruits'},
    {id: 3, name: 'Grain', src: image3, key: 'grain'},
    {id: 4, name: 'Fiber', src: image4, key: 'fiber'},
    {id: 5, name: 'Dairy', src: image5, key: 'dairy'},
    {id: 6, name: 'Meat', src: image6, key: 'meat'},
    {id: 7, name: 'Burger', src: image7, key: 'burger'},
]

export const photoUrls = photos.results.map(item => {
    return {small: item.urls.small, thumb: item.urls.thumb}
})

export const vegetablesData = vegetables
export const burgerData = burger
export const fruitData = fruit

// wjc for user service
const dev_url = "http://localhost:8080"
const user_url = "https://web5610-final-project-backend.herokuapp.com"   //https://web5610-final-project-backend.herokuapp.com/users/login
export const login_url = user_url + "/users/login"
export const register_url = user_url + "/register"
export const update_url = user_url + "/update"

export const getUserPostOrderUrl = (userId) => dev_url + '/users/' + userId + '/order'

export const foods = [
    {
        foodId: "food_a3pmtq6baezdjua13qgh2aly10nx",
        count: 1,
        label: "Vegetable Salt",
        thumb: "https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNzcxMH0"
    },
    {
        foodId: "food_b4ypg91b20j5h9a55majabnferfe",
        count: 1,
        label: "Vegetable Renin",
        thumb: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNzcxMH0"
    },
    {
        foodId: "food_azp9kpnaz2ugspbgm4y9cb6klexy",
        count: 1,
        label: "Savory Vegetables",
        thumb: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNzcxMH0"
    },
    {
        oodId: "food_bb2qjrjamst0vmam39stubtkmrs4",
        count: 1,
        label: "Vegetable Stock",
        thumb: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNzcxMH0"

    }
]

