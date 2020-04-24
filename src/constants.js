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

export const REMOTE_URL = "https://web5610-final-project-backend.herokuapp.com";
export const LOCAL_URL = "http://localhost:8080"
export const CURRENT_URL = REMOTE_URL
// wjc for user service
export const userLoginUrl = CURRENT_URL + "/users/login"
export const userRegisterUrl = CURRENT_URL + "/users/register"
export const getUserOrderUrl = (userId) => CURRENT_URL + "/users/" + userId + "/orders"
export const getUpdateUrl = (userId) => CURRENT_URL + "/users/" + userId
export const getUserPostOrderUrl = (userId) => CURRENT_URL + '/users/' + userId + '/order'
export const foodListUrl = CURRENT_URL + "/products/all"

// wjc for restaurantService
export const restaurantRegisterUrl = CURRENT_URL + "/restaurant/register"
export const restaurantLoginUrl = CURRENT_URL + "'restaurant/login"
