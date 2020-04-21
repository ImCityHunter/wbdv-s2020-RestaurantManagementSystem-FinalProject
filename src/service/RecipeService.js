export const getRecipe = (meal) =>
    fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${meal}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key": "db5c6bd4bbmshaf96301e3bdc554p118588jsnc1247cd2e969"
    }
})
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err);
    });

export default {
    getRecipe
}