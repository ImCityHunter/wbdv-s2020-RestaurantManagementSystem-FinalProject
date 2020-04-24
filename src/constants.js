import image1 from "./customer/images/1.png";
import image2 from "./customer/images/2.png";
import image3 from "./customer/images/3.png";
import image4 from "./customer/images/4.png";
import image5 from "./customer/images/5.png";
import photos from './customer/resources/photos'

import vegetables from './customer/resources/vegetables'
import burger from './customer/resources/burger'
import fruit from './customer/resources/fruit'

export const categories = [
    {id: 1, name: 'Appetizers', src: image1, key: 'Appetizers'},
    {id: 2, name: 'Main Courses', src: image2, key: 'Main Courses'},
    {id: 3, name: 'Sides', src: image3, key: 'Sides'},
    {id: 4, name: 'Deserts', src: image4, key: 'Deserts'},
    {id: 5, name: 'Drinks', src: image5, key: 'Drinks'},
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
export const restaurantLoginUrl = CURRENT_URL + "/restaurant/login"
