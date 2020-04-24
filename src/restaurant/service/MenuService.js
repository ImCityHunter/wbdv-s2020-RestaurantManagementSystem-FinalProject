const getRecipe = (itemName) =>
    fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${itemName}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
            "x-rapidapi-key": "db5c6bd4bbmshaf96301e3bdc554p118588jsnc1247cd2e969"
        }
    })
        .then(response => response.json())
        .catch(err => {
            console.log(err);
        });

const createMenuItem = (menuItem) =>
    fetch('https://web5610-final-project-backend.herokuapp.com/products/', {
        "method": "POST",
        body: JSON.stringify(menuItem),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


const getMenuItemsByRestaurantId = (rid) =>
    fetch(`https://web5610-final-project-backend.herokuapp.com/restaurant/${rid}/products`)
        .then(response => response.json())

const getMenuItem = (itemId) =>
    fetch(`${itemId}`, {
        "method": "GET",
    }).then(response => response.json())

const updateMenuItem = (itemId, menuItem) =>
    fetch(`https://web5610-final-project-backend.herokuapp.com/products/${itemId}`, {
        "method": "PUT",
        body: JSON.stringify(menuItem),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const deleteMenuItem = (itemId) =>
    fetch(`https://web5610-final-project-backend.herokuapp.com/products/${itemId}`, {
        "method": "DELETE",
    }).then(response => response.json())


export default {
    getRecipe,
    getMenuItem,
    createMenuItem,
    getMenuItemsByRestaurantId,
    deleteMenuItem,
    updateMenuItem
}