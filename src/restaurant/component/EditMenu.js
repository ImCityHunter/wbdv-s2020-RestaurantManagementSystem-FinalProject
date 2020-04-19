import React from "react";
import recipeService from "../../service/recipeService";
import SearchItem from "./SearchItem";
import ShowSearchItems from "./ShowSearchItems";
import menuService from "../../service/menuService";
class EditMenu extends React.Component {
    state = {
        price: '',
        newMealName:'',
        searchResult:[],
        foods: [{label:'sample', foodContent:'sample',kcal:0, id: new Date().getTime(), imageUrl:''}] // search results before filtered
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.newMealName!==this.state.newMealName){

        }
    }
    searchMeal = async(mealName) => {
        await recipeService.getRecipe(mealName)
            .then(items => {
            this.setState( prev => ({
                newMealName:mealName,
                foods:[],
                searchResult: items.hints
            }))
        });
        this.findRecipe();
    }

    findRecipe = () => {
        let foodContent = '';
        let label = '';
        let kcal = 0;
        let url = '';
        for(let i = 0; i<15 && i<this.state.searchResult.length; i++){
            let item = this.state.searchResult[i];
            foodContent = item.food.foodContentsLabel;
            label = item.food.label;
            url = item.food.image;
            let get_cal = item.food.nutrients.ENERC_KCAL;
            if(get_cal){
                kcal = parseInt(get_cal);
            }
            if(foodContent && label.length>0){
                const food = {label: label, foodContent: foodContent, kcal: kcal, id: new Date().getTime()+'', imageUrl: url}
                this.setState(prevState =>({
                    foods:[
                        ...prevState.foods,
                        food
                    ]
                }))
            }
        }
    }

    addItem = (label,foodContent,kcal,imageUrl) =>{
        let newItem = {
            name: label,
            price: this.state.price,
            recipe: foodContent,
            kcal: kcal,
            imageUrl:imageUrl
        }

        menuService.addMeal(this.props.rid, newItem)
            .then(meal=>console.log(meal)).catch(err=>console.log(err));
    }


    render(){
        return(
            <div>
                <div className = "container">
                    <button className={""} onClick={() => {this.props.history.push(`/restaurant/${this.props.rid}/menu`)}}>Close</button>
                    <SearchItem searchMeal = {this.searchMeal}/>

                    <input
                        className={"mt-2"}
                        placeholder = 'set price'
                        onChange = {(e)=>{
                            const newPrice = e.target.value;
                            let price = parseInt(newPrice);
                            this.setState(
                                {
                                    price:price
                                }
                            )
                        }}/>
                    <ShowSearchItems
                        foods = {this.state.foods}
                        addItem = {this.addItem}/>

                </div>
            </div>

        )
    }
}

export default EditMenu;
