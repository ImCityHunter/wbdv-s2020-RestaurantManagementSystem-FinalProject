


export const getRecipe = (meal) => {
    return fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${meal}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
            "x-rapidapi-key": "cadf24a3e9msh93ccbd7382cf5ebp1f4487jsnfcd39507c869"
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err);
        });
}

export default {
    getRecipe
}
